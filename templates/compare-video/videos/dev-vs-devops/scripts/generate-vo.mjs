// One-off TTS generation for the dev-vs-devops video narration.
// Supports three providers via TTS_PROVIDER in repo-root .env:
//   "vieneu" (local)  — VieNeu TTS API (CIT Voice Studio), fast & high quality local inference
//   "edge"           — Microsoft Edge TTS (free, no API key), via edge-tts-universal npm package
//   "vbee"           — Vbee TTS API, requires VBEE_APP_ID + VBEE_ACCESS_TOKEN
// Generates one mp3 per caption line, downloads to assets/vo/, and writes
// assets/vo/durations.json (via ffprobe) so index.html timing can be retimed
// to real audio length.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { execFile } from "node:child_process";
import { promisify } from "node:util";

const execFileAsync = promisify(execFile);
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const REPO_ROOT = path.resolve(ROOT, "..", "..");

function loadEnv() {
  let dir = ROOT;
  while (dir && dir !== path.dirname(dir)) {
    const envFile = path.join(dir, ".env");
    if (fs.existsSync(envFile)) {
      const raw = fs.readFileSync(envFile, "utf8");
      const env = {};
      for (const line of raw.split("\n")) {
        const m = line.trim().match(/^([A-Za-z0-9_]+)=(.*)$/);
        if (m) env[m[1]] = m[2].trim().replace(/^["']|["']$/g, "");
      }
      return env;
    }
    dir = path.dirname(dir);
  }
  return {};
}

const ENV = loadEnv();
const rawProvider = (ENV.TTS_PROVIDER || "edge").toLowerCase();
const TTS_PROVIDER = (rawProvider === "edge-tts" || rawProvider === "edgetts") ? "edge" : rawProvider;

// --- VieNeu TTS config (only required when TTS_PROVIDER=vieneu) ---
const VIENEU_API_URL = (ENV.VIENEU_API_URL || "http://127.0.0.1:8001").replace(/\/+$/, "");
const VIENEU_VOICE = ENV.VIENEU_VOICE || "Minh Đức";
const VIENEU_SPEED = parseFloat(ENV.VIENEU_SPEED) || 1.0;

// --- Vbee config (only required when TTS_PROVIDER=vbee) ---
const VBEE_APP_ID = ENV.VBEE_APP_ID;
const VBEE_ACCESS_TOKEN = ENV.VBEE_ACCESS_TOKEN;
const VOICE_CODE = ENV.VBEE_VOICE_CODE || "n_hanoi_male_protrainer_education_vc";

// --- Edge TTS config (only required when TTS_PROVIDER=edge) ---
const EDGE_VOICE = ENV.EDGE_VOICE || ENV.EDGE_TTS_VOICE || "vi-VN-NamMinhNeural";

const SPEED_RATE = 1.1;

if (TTS_PROVIDER === "vbee") {
  if (!VBEE_APP_ID || !VBEE_ACCESS_TOKEN) {
    throw new Error(
      "TTS_PROVIDER=vbee nhưng thiếu VBEE_APP_ID / VBEE_ACCESS_TOKEN trong .env.\n" +
        "Điền credentials Vbee, hoặc đổi TTS_PROVIDER=vieneu / edge.",
    );
  }
}

console.log(`TTS provider: ${TTS_PROVIDER}`);

// TTS input uses phonetic Vietnamese spelling ("Đép" / "Đép Ốp") so Vbee
// pronounces "Dev" / "DevOps" correctly — on-screen captions in index.html
// keep the real spelling "Dev" / "DevOps".
const LINES = [
  { id: "line-1", text: "Đây là Đép." },
  { id: "line-2", text: "Đây là Đép Ốp." },
  { id: "line-3", text: "Sự khác nhau là gì?" },
  { id: "line-4", text: "Đép là người viết code, xây dựng tính năng mới." },
  { id: "line-5", text: "Nhưng code đó cần chạy ổn định ngoài thực tế." },
  { id: "line-6", text: "Đép Ốp là người đưa code lên server, tự động hoá." },
  { id: "line-7", text: "Và giám sát toàn bộ hệ thống hoạt động." },
  { id: "line-8", text: "Một bên tạo ra sản phẩm, một bên giữ nó luôn sống. Đép xây, Đép Ốp vận hành!" },
];

// ============================================================
// Edge TTS — Node.js API via edge-tts-universal (no Python needed)
// ============================================================

function speedRateToEdgeRate(rate) {
  const pct = Math.round((rate - 1) * 100);
  return pct >= 0 ? `+${pct}%` : `${pct}%`;
}

async function generateEdgeSpeech(text, outPath) {
  const { EdgeTTS } = await import("edge-tts-universal");
  const rate = speedRateToEdgeRate(SPEED_RATE);
  const tts = new EdgeTTS(text, EDGE_VOICE, { rate });
  const result = await tts.synthesize();
  const audioBuffer = Buffer.from(await result.audio.arrayBuffer());
  fs.writeFileSync(outPath, audioBuffer);
}

// ============================================================
// VieNeu TTS — REST API (CIT Voice Studio / VieNeu-TTS)
// ============================================================

async function generateVieNeuSpeech(text, outPath) {
  const url = `${VIENEU_API_URL}/api/tts/generate`;
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      text,
      voice_id: VIENEU_VOICE || undefined,
      speed: VIENEU_SPEED,
      format: "mp3",
    }),
  });
  if (!res.ok) {
    const errText = await res.text().catch(() => "");
    throw new Error(`VieNeu TTS HTTP ${res.status}: ${res.statusText} ${errText}`);
  }
  const buf = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(outPath, buf);
}

// ============================================================
// Vbee TTS — REST API (giữ nguyên logic cũ)
// ============================================================

async function generateVbeeSpeech(text) {
  const res = await fetch("https://vbee.vn/api/v1/tts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${VBEE_ACCESS_TOKEN}`,
    },
    body: JSON.stringify({
      app_id: VBEE_APP_ID,
      input_text: text,
      voice_code: VOICE_CODE,
      audio_type: "mp3",
      speed_rate: SPEED_RATE,
      callback_url: "https://example.com/callback",
    }),
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}: ${res.statusText}`);
  const data = await res.json();
  if (data.status !== 1) {
    throw new Error(`Vbee error: ${data.error_message || data.error_code}`);
  }
  if (data.result?.audio_link) return data.result.audio_link;
  const requestId = data.result?.request_id;
  if (!requestId) throw new Error("No request_id returned");
  return pollForAudio(requestId);
}

async function pollForAudio(requestId) {
  const url = `https://vbee.vn/api/v1/tts/${requestId}`;
  for (let i = 0; i < 30; i++) {
    await new Promise((r) => setTimeout(r, 2000));
    const res = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${VBEE_ACCESS_TOKEN}`,
      },
    });
    if (!res.ok) continue;
    const data = await res.json();
    if (data.status === 1) {
      if (data.result?.status === "SUCCESS" && data.result?.audio_link) {
        return data.result.audio_link;
      }
      if (data.result?.status === "FAILURE") {
        throw new Error("Vbee processing failed");
      }
    }
  }
  throw new Error("Timeout waiting for Vbee audio");
}

async function downloadAudio(url, outPath) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Download failed: ${res.statusText}`);
  const buf = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(outPath, buf);
}

// ============================================================
// Shared
// ============================================================

function estimateMp3Duration(buffer, defaultBitrateKbps = 48) {
  if (!buffer || buffer.length === 0) return 0;
  let offset = 0;
  if (buffer.length > 10 && buffer.toString("utf8", 0, 3) === "ID3") {
    const id3Size =
      ((buffer[6] & 0x7f) << 21) |
      ((buffer[7] & 0x7f) << 14) |
      ((buffer[8] & 0x7f) << 7) |
      (buffer[9] & 0x7f);
    offset = 10 + id3Size;
  }
  const bitratesV2L3 = [0, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160, 0];
  const sampleRatesV2 = [22050, 24000, 16000];
  let totalDuration = 0;
  while (offset < buffer.length - 4) {
    if (buffer[offset] === 0xff && (buffer[offset + 1] & 0xe0) === 0xe0) {
      const header = buffer.readUInt32BE(offset);
      const version = (header >> 19) & 3;
      const bitrateIdx = (header >> 12) & 15;
      const sampleRateIdx = (header >> 10) & 3;
      const padding = (header >> 9) & 1;
      let bitrate = 48;
      if (version === 3) {
        const bitratesV1L3 = [0, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 0];
        bitrate = bitratesV1L3[bitrateIdx] || defaultBitrateKbps;
      } else {
        bitrate = bitratesV2L3[bitrateIdx] || defaultBitrateKbps;
      }
      let sampleRate = 24000;
      if (sampleRateIdx >= 0 && sampleRateIdx < 3) {
        sampleRate = sampleRatesV2[sampleRateIdx];
      }
      const samplesPerFrame = version === 3 ? 1152 : 576;
      const frameLength = Math.floor((samplesPerFrame * (bitrate * 1000) / 8) / sampleRate) + padding;
      if (frameLength > 4 && offset + frameLength <= buffer.length) {
        totalDuration += samplesPerFrame / sampleRate;
        offset += frameLength;
        continue;
      }
    }
    offset++;
  }
  return totalDuration > 0 ? totalDuration : (buffer.length * 8) / (defaultBitrateKbps * 1000);
}

async function getDuration(filePath) {
  try {
    const { stdout } = await execFileAsync("ffprobe", [
      "-v",
      "error",
      "-show_entries",
      "format=duration",
      "-of",
      "default=noprint_wrappers=1:nokey=1",
      filePath,
    ]);
    return parseFloat(stdout.trim());
  } catch (err) {
    const buf = fs.readFileSync(filePath);
    return Math.max(0.5, Math.round(estimateMp3Duration(buf) * 100) / 100);
  }
}

async function main() {
  const outDir = path.join(ROOT, "assets", "vo");
  fs.mkdirSync(outDir, { recursive: true });
  const durations = {};

  if (TTS_PROVIDER === "vieneu") {
    try {
      const health = await fetch(`${VIENEU_API_URL}/health`, { signal: AbortSignal.timeout(3000) });
      if (!health.ok) {
        console.warn(`[VieNeu] Cảnh báo: Server trả về HTTP ${health.status}`);
      }
    } catch (err) {
      throw new Error(
        `TTS_PROVIDER=vieneu nhưng không kết nối được tới ${VIENEU_API_URL}.\n` +
          "Hãy đảm bảo server VieNeu TTS (CIT Voice Studio) đang chạy tại địa chỉ này.",
      );
    }
  }

  for (const line of LINES) {
    const outPath = path.join(outDir, `${line.id}.mp3`);
    process.stdout.write(`Generating ${line.id}: "${line.text}" ... `);

    if (TTS_PROVIDER === "edge") {
      await generateEdgeSpeech(line.text, outPath);
    } else if (TTS_PROVIDER === "vieneu") {
      await generateVieNeuSpeech(line.text, outPath);
    } else {
      const audioUrl = await generateVbeeSpeech(line.text);
      await downloadAudio(audioUrl, outPath);
    }

    const dur = await getDuration(outPath);
    durations[line.id] = dur;
    console.log(`${dur.toFixed(2)}s`);
  }

  fs.writeFileSync(
    path.join(outDir, "durations.json"),
    JSON.stringify(durations, null, 2),
  );
  console.log("Done. Durations written to assets/vo/durations.json");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
