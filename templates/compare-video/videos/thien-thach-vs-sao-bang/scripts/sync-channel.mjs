// Syncs the eyebrow tag ("#eyebrow" in index.html) to CHANNEL from the
// repo-root .env (shared across all videos/ in this series). Runs
// automatically before dev/check/render/publish via npm pre* hooks, so
// changing CHANNEL in .env updates every video's on-screen channel label
// without hand-editing each index.html.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

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

const env = loadEnv();
const CHANNEL = env.CHANNEL || env.CHANNEL_NAME || "PWSolutions";

const indexPath = path.join(ROOT, "index.html");
const html = fs.readFileSync(indexPath, "utf8");
const updated = html.replace(
  /(<div[^>]*\bid="eyebrow"[^>]*>)[^<]*(<\/div>)/,
  `$1${CHANNEL}$2`,
);

if (updated === html && !html.includes(`>${CHANNEL}<`)) {
  throw new Error('No element with id="eyebrow" found in index.html');
}

if (updated !== html) {
  fs.writeFileSync(indexPath, updated);
  console.log(`Synced #eyebrow to CHANNEL="${CHANNEL}"`);
} else {
  console.log(`#eyebrow already matches CHANNEL="${CHANNEL}"`);
}
