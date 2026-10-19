import { EdgeTTS, createSRT } from "edge-tts-universal";
import { writeFile } from "node:fs/promises";
import { existsSync, statSync } from "node:fs";
import { execFile } from "node:child_process";
import type { TtsClient } from "./tts-client.js";

export interface EdgeTtsOpts {
  voice: string;         // e.g. "vi-VN-HoaiMyNeural" or "vi-VN-NamMinhNeural"
  rate?: string;         // e.g. "+0%", "+10%", "-5%"
  pitch?: string;        // e.g. "+0Hz"
  volume?: string;       // e.g. "+0%"
}

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

/**
 * Edge TTS client using Microsoft Edge online text-to-speech service (Free).
 * Powered by official `edge-tts` CLI with `edge-tts-universal` fallback.
 *
 * Supports subtitle generation (SRT) via word boundary cues.
 */
export class EdgeTtsClient implements TtsClient {
  constructor(private cfg: EdgeTtsOpts) {}

  async generate(text: string, audioOutPath: string, srtOutPath?: string): Promise<void> {
    // 1. Try official edge-tts CLI first (fast and robust)
    try {
      const args = ["--voice", this.cfg.voice, "--text", text, "--write-media", audioOutPath];
      if (this.cfg.rate && this.cfg.rate !== "+0%") args.push("--rate", this.cfg.rate);
      if (this.cfg.pitch && this.cfg.pitch !== "+0Hz") args.push("--pitch", this.cfg.pitch);
      if (this.cfg.volume && this.cfg.volume !== "+0%") args.push("--volume", this.cfg.volume);

      await new Promise<void>((resolve, reject) => {
        execFile("edge-tts", args, { windowsHide: true }, (err) => {
          if (err) return reject(err);
          resolve();
        });
      });

      if (existsSync(audioOutPath) && statSync(audioOutPath).size > 500) {
        return;
      }
    } catch {
      // Fallback to edge-tts-universal library below
    }

    await this.synthesizeWithRetry(text, audioOutPath, srtOutPath);
  }

  private async synthesizeWithRetry(
    text: string,
    audioOutPath: string,
    srtOutPath?: string,
  ): Promise<void> {
    const delays = [1000, 2000, 4000];
    let lastErr: unknown;

    for (let attempt = 0; attempt < 4; attempt++) {
      try {
        const tts = new EdgeTTS(text, this.cfg.voice, {
          rate: this.cfg.rate ?? "+0%",
          pitch: this.cfg.pitch ?? "+0Hz",
          volume: this.cfg.volume ?? "+0%",
        });

        const result = await tts.synthesize();
        const buffer = Buffer.from(await result.audio.arrayBuffer());
        if (buffer.length === 0) {
          throw new Error("Edge TTS returned empty audio buffer");
        }
        await writeFile(audioOutPath, buffer);

        if (srtOutPath && result.subtitle && result.subtitle.length > 0) {
          const srtContent = createSRT(result.subtitle);
          await writeFile(srtOutPath, srtContent, "utf8");
        }
        return;
      } catch (e) {
        lastErr = e;
        if (attempt === delays.length) throw e;
        await sleep(delays[attempt]);
      }
    }
    throw lastErr;
  }
}
