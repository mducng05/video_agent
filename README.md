# 🎬 AI Video Studio — PWSolutions (PWS Việt Nam)

<div align="center">

[![Remotion](https://img.shields.io/badge/Remotion-v4.0+-blue?style=for-the-badge&logo=react)](https://www.remotion.dev/)
[![HyperFrames](https://img.shields.io/badge/HyperFrames-v0.7+-111827?style=for-the-badge)](https://hyperframes.heygen.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Edge TTS](https://img.shields.io/badge/Edge_TTS-Free_AI_Voice-brightgreen?style=for-the-badge)](https://github.com/travisvn/edge-tts-universal)
[![AI Skills](https://img.shields.io/badge/AI_Skills-Antigravity_%7C_Claude-purple?style=for-the-badge)](.agents/skills/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

**Hệ thống Code-to-Video tự động hoá 100% bằng AI của PWSolutions ([pwsdata.vn](https://pwsdata.vn)).**  
Biến chủ đề công nghệ, bài viết tin tức, giải pháp hạ tầng số thành video dọc **9:16 (TikTok, Reels, YouTube Shorts)** chuẩn phong cách Minimalist Tech & Corporate B2B chỉ với 1 câu lệnh!

[🌐 Website PWS](https://pwsdata.vn) • [🔵 Fanpage PWS](https://www.facebook.com/pwsvn) • [🚀 Cài đặt nhanh](#-cài-đặt-nhanh-3-bước) • [📋 So sánh 3 Template](#-tổng-quan-03-template) • [🤖 Tích hợp AI Agent](#-tích-hợp-ai-coding-agent)

</div>

---

## 🏢 Đơn vị phát triển: PWSolutions / PWS Việt Nam

- 🌐 **Website:** [https://pwsdata.vn](https://pwsdata.vn)
- 🔵 **Fanpage:** [PWS Việt Nam (facebook.com/pwsvn)](https://www.facebook.com/pwsvn)
- 💼 **Lĩnh vực hoạt động:** Giải pháp máy chủ chuyên dụng, Điện toán đám mây (Cloud Server / Cloud Storage), Sao lưu dự phòng & Bảo vệ an toàn dữ liệu doanh nghiệp (Backup & Disaster Recovery).
- 🎬 **Hệ thống AI Video:** Được tùy biến và vận hành dựa trên kiến trúc Monorepo 3 template Remotion & HyperFrames.

---

## 📋 Tổng quan 03 Template

Repo này sử dụng kiến trúc **NPM Workspaces** tích hợp trọn vẹn cả 3 template vào một không gian làm việc duy nhất:

| Đặc điểm | 📘 Template 1: Topic Explainer | 📰 Template 2: News Video | 🤖 Template 3: Compare Concepts |
| :--- | :--- | :--- | :--- |
| **Thư mục** | [`templates/topic-explainer/`](templates/topic-explainer/) | [`templates/news-video/`](templates/news-video/) | [`templates/compare-video/`](templates/compare-video/) |
| **Repo gốc** | `remotion-cuongit-template` | `auto-video-gen` | `auto-compare-video` |
| **Công nghệ** | **Remotion v4** (React 19, TailwindCSS v4) | **HyperFrames** (HTML + CSS + GSAP) | **HyperFrames** (HTML + CSS + GSAP) |
| **Đầu vào (Input)** | Một chủ đề công nghệ / đời sống bất kỳ | URL bài báo, URL GitHub Repo, hoặc file `.txt` | Cặp khái niệm cần phân biệt (A vs B) |
| **Bố cục Video** | 6 cảnh chuẩn tâm lý (Hook, Pain, Solution, Flow, Benefits, Outro) | 6 layout đồ họa: Breaking news, Stat callout, Split screen, Quote card, Listicle, Big number | 3-Zone cố định: 2 Card so sánh (trên) + Phụ đề động (giữa) + Avatar Robot MC cử động (dưới) |
| **Voiceover (TTS)** | Edge TTS (Miễn phí, 0đ API) | Edge TTS, LucyLab, ElevenLabs, Vbee | Edge TTS, VieNeu TTS (Local), Vbee |
| **AI Skill lệnh** | `/remotion-topic-explainer` | `/create-news-video` | `/create-compare-video` |
| **Mẫu demo có sẵn** | Cloud Explainer (PWSolutions 49s), Docker Explainer | CodeGraph Demo, OpenScreen Demo | Dev vs DevOps, Thiên thạch vs Sao băng |

---

## 📁 Cấu trúc thư mục Monorepo

```text
create_video/
├── .agents/skills/                   # Skills cho Google Antigravity IDE
│   ├── remotion-topic-explainer/     # -> Skill làm video theo chủ đề
│   ├── create-news-video/            # -> Skill làm video tin tức từ URL
│   └── create-compare-video/         # -> Skill làm video so sánh kiến thức
├── .claude/skills/                   # Skills tương thích Anthropic Claude Code
│   ├── remotion-topic-explainer/
│   ├── create-news-video/
│   └── create-compare-video/
├── templates/
│   ├── topic-explainer/              # Template 1 (Remotion - Topic Explainer)
│   │   ├── src/                      # Components React, Transitions, Subtitles
│   │   ├── scripts/generate-tts.ts   # Script TTS Edge tự động đo độ dài frame
│   │   ├── remotion.config.ts        # Cấu hình Remotion
│   │   └── package.json              # Package: @studio/topic-explainer
│   │
│   ├── news-video/                   # Template 2 (HyperFrames - News from URL/TXT)
│   │   ├── src/                      # CLI, Scraper, Pipeline, HTML Composer
│   │   ├── assets/                   # BGM, SFX sound effects, avatar
│   │   └── package.json              # Package: @studio/news-video
│   │
│   └── compare-video/                # Template 3 (HyperFrames - So sánh kiến thức)
│       ├── DESIGN.md                 # Hợp đồng thiết kế 3-zone, cyberpunk neon
│       ├── videos/
│       │   ├── dev-vs-devops/        # Video mẫu: "Dev xây, DevOps vận hành"
│       │   └── thien-thach-vs-sao-bang/ # Video mẫu: "Thiên thạch vs Sao băng"
│       └── package.json              # Package: @studio/compare-video
│
├── .env.example                      # Cấu hình mẫu tổng hợp dùng chung cho cả 3 template
├── .env                              # File môi trường thực tế (tự tạo từ .env.example)
├── package.json                      # Root package.json (NPM Workspaces & Scripts)
└── README.md                         # Tài liệu hướng dẫn sử dụng chi tiết
```

---

## 🚀 Cài đặt nhanh (3 bước)

### 1. Yêu cầu môi trường
- **Node.js**: Phiên bản 18+ (khuyên dùng Node 20+ hoặc Node 22+).
- **FFmpeg**: Cần có trên hệ thống để render video MP4 và ghép âm thanh (hoặc dùng preview trực tiếp trên trình duyệt).

### 2. Cài đặt toàn bộ dependencies
Chỉ cần chạy **1 lệnh duy nhất** tại thư mục gốc, hệ thống sẽ tự động cài đặt gói cho cả 3 template thông qua NPM Workspaces:

```bash
npm install
```

### 3. Thiết lập biến môi trường `.env`
Sao chép file `.env.example` thành `.env`:

```bash
# Trên Windows PowerShell:
Copy-Item .env.example .env

# Hoặc Bash / macOS / Linux:
cp .env.example .env
```

Mặc định dự án đã cấu hình sẵn **Edge TTS (miễn phí 100%, không cần tài khoản hay thẻ tín dụng)**. Bạn có thể sử dụng ngay mà không cần điền thêm API key.

---

## 🤖 Tích hợp AI Coding Agent

Dự án được tối ưu hoá đặc biệt cho các AI Coding Agent hàng đầu:
- 🪐 **[Google Antigravity IDE](https://antigravity.google)** (`.agents/skills/`)
- 🧠 **[Claude Code](https://docs.anthropic.com/en/docs/agents-and-tools/claude-code)** (`.claude/skills/`)

Bạn chỉ cần chat tự nhiên hoặc gõ các slash command:

### 1. `/remotion-topic-explainer` — Tạo video giải thích chủ đề
> **Prompt ví dụ:**  
> `"/remotion-topic-explainer Tạo video giải thích về Kubernetes trong 60 giây"`  
> AI sẽ tự động:
> 1. Viết kịch bản 6 cảnh (Hook, Pain, Solution, Flow, Benefits, Outro).
> 2. Chạy TTS sinh voice tiếng Việt và tính chính xác từng frame.
> 3. Viết code React / Remotion composition tương ứng.
> 4. Khởi chạy Remotion Studio để bạn xem trước trực tiếp.

### 2. `/create-news-video` — Biến bài báo / GitHub Repo thành video
> **Prompt ví dụ:**  
> `"/create-news-video https://github.com/Cuongyd196/auto-video-gen"`  
> hoặc  
> `"/create-news-video Làm bản tin ngắn từ bài viết: https://vnexpress.net/..."`  
> AI sẽ tự động:
> 1. Cào nội dung bài viết, tóm tắt theo văn phong nói tự nhiên.
> 2. Lựa chọn các template đồ họa (breaking-news, stat-callout, split-screen...).
> 3. Tự sinh voice TTS, tự chèn hiệu ứng âm thanh SFX (whoosh, alert, success) và BGM.
> 4. Xuất video MP4 hoàn thiện + file kịch bản cho CapCut + Caption & Hashtag TikTok.

### 3. `/create-compare-video` — Tạo video so sánh 2 khái niệm
> **Prompt ví dụ:**  
> `"/create-compare-video Làm video so sánh giữa Docker và Máy ảo (Virtual Machine)"`  
> hoặc  
> `"/create-compare-video Phân biệt SQL vs NoSQL"`  
> AI sẽ tự động:
> 1. Xây dựng kịch bản chuẩn 12 câu so sánh tương phản.
> 2. Tạo một project video mới trong `templates/compare-video/videos/<slug>/`.
> 3. Thiết kế hình minh họa SVG/CSS cho khái niệm A và B.
> 4. Đồng bộ lời thoại với cử động tay và biểu cảm của Robot MC 2D.
> 5. Render video MP4 chuẩn định dạng TikTok/Reels.

---

## 💻 Sử dụng bằng lệnh thủ công (CLI)

Nếu không dùng AI Agent, bạn hoàn toàn có thể chạy các template bằng dòng lệnh:

### 📘 Template 1: Topic Explainer (Remotion)
```bash
# Xem trước trực tiếp trên Remotion Studio (http://localhost:3000):
npm run dev:topic

# Sinh giọng đọc TTS cho các phân cảnh:
npm run tts:topic

# Render video ra file MP4:
npm run build:topic
```

### 📰 Template 2: News Video (HyperFrames)
```bash
# Chạy toàn bộ pipeline tạo video từ một file script.json:
npm run pipeline:news -- output/my-news-slug/script.json

# Render lại video từ file index.html đã tạo:
npm run rerender:news -- output/my-news-slug/index.html
```

### 🤖 Template 3: Compare Concepts (HyperFrames)
```bash
# Chạy server xem trước video "Dev vs DevOps":
npm run dev:compare

# Sinh lại voice TTS cho video "Dev vs DevOps":
npm run vo:compare

# Render video "Dev vs DevOps" thành MP4:
npm run render:compare

# Xem trước video "Thiên thạch vs Sao băng":
npm run dev:compare:meteor
```

---

## 🎙️ Cấu hình Giọng đọc (TTS)

Trong file `.env`, bạn có thể dễ dàng chuyển đổi nhà cung cấp giọng đọc:

### 1. Edge TTS (Mặc định — 0đ, không cần API Key)
```env
TTS_PROVIDER=edge-tts
EDGE_TTS_VOICE=vi-VN-NamMinhNeural   # Nam trầm ấm
# EDGE_TTS_VOICE=vi-VN-HoaiMyNeural # Nữ truyền cảm
EDGE_TTS_RATE=+10%                   # Tăng 10% tốc độ đọc cho video ngắn
```

### 2. VieNeu TTS (Chạy Local siêu tốc qua CIT Voice Studio)
Dành cho Template 3 nếu bạn có GPU và muốn chạy giọng đọc nội bộ 48kHz:
```env
TTS_PROVIDER=vieneu
VIENEU_API_URL=http://127.0.0.1:8001
VIENEU_VOICE=Minh Đức
```

### 3. Vbee TTS (Giọng chuẩn đài truyền hình Việt Nam)
Hỗ trợ cả Template 2 và Template 3:
```env
TTS_PROVIDER=vbee
VBEE_APP_ID=your_app_id
VBEE_ACCESS_TOKEN=your_token
VBEE_VOICE_CODE=n_hanoi_male_protrainer_education_vc
```

### 4. LucyLab & ElevenLabs (Voice Cloning cao cấp)
Hỗ trợ cho Template 2:
```env
TTS_PROVIDER=lucylab
VIETNAMESE_API_KEY=sk_live_xxx
VIETNAMESE_VOICEID=your_voice_id
```

---

## 🎨 Tùy biến & Mở rộng

- **Đổi tên kênh (Branding)**: Sửa biến `CHANNEL_NAME="TÊN_KÊNH"` trong `.env`, logo và header trên tất cả các template sẽ tự động cập nhật.
- **Thêm video so sánh mới**: Copy thư mục `templates/compare-video/videos/dev-vs-devops/` thành `videos/<ten-video-moi>/`, chỉnh sửa nội dung văn bản và chạy `npm run sync-channel`.
- **Chỉnh sửa giao diện**:
  - Template 1: Chỉnh sửa các component React tại `templates/topic-explainer/src/components/`.
  - Template 2: Sửa HTML/CSS template tại `templates/news-video/src/render/templates/`.
  - Template 3: Sửa hợp đồng màu sắc và animation tại `templates/compare-video/DESIGN.md`.

---

## 📄 License & Ghi nhận nguồn

- Bản quyền mã nguồn thuộc về [Cuongyd196](https://github.com/Cuongyd196).
- Mã nguồn được phân phối dưới giấy phép **MIT License**.
- Đóng góp, báo lỗi hoặc yêu cầu tính năng: vui lòng tạo Issue hoặc Pull Request trên repository.
