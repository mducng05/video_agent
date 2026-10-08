import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import { BrandHeader } from "../components/BrandHeader";
import { SubtitleBox } from "../components/SubtitleBox";

interface SceneProps {
  subtitleText: string;
  durationInFrames: number;
}

export const Scene2Session: React.FC<SceneProps> = ({
  subtitleText,
  durationInFrames,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleSpring = spring({ frame, fps, config: { damping: 14, stiffness: 100 } });
  const step1 = spring({ frame: frame - 10, fps, config: { damping: 14, stiffness: 90 } });
  const step2 = spring({ frame: frame - 22, fps, config: { damping: 14, stiffness: 90 } });
  const powerCard = spring({ frame: frame - 36, fps, config: { damping: 12, stiffness: 100 } });

  return (
    <div className="w-[1080px] h-[1920px] bg-gradient-to-br from-white via-sky-50 to-blue-100 text-slate-900 flex flex-col justify-between relative overflow-hidden select-none font-sans">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0284c710_1px,transparent_1px),linear-gradient(to_bottom,#0284c710_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
      <div className="absolute top-1/3 -left-20 w-96 h-96 bg-blue-300/30 rounded-full blur-3xl pointer-events-none" />

      {/* Brand Header */}
      <BrandHeader currentCategory="PHẦN 1: CƠ CHẾ SESSION COOKIE" metricBadge="STATE: SERVER-SIDE VAULT" />

      {/* Main Content */}
      <div className="w-[960px] mx-auto flex-1 flex flex-col justify-center gap-6 z-10 py-4">
        {/* Title */}
        <div style={{ transform: `scale(${titleSpring})` }} className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-100 text-emerald-800 font-extrabold text-lg border border-emerald-300">
            <span>🍪 CƠ CHẾ TRUYỀN THỐNG BẢO VỆ TỐT</span>
          </div>
          <h2 className="text-6xl font-black text-slate-950 tracking-tight">
            Session Cookie <span className="text-emerald-700">Hoạt Động Thế Nào?</span>
          </h2>
          <p className="text-2xl font-bold text-slate-600">
            Máy chủ lưu trạng thái • Trình duyệt giữ chìa khóa định danh
          </p>
        </div>

        {/* 2 Flow Step Cards */}
        <div className="flex flex-col gap-4 w-full">
          {/* Step 1: Storage */}
          <div
            style={{ opacity: step1, transform: `translateY(${(1 - step1) * 30}px)` }}
            className="w-full bg-white/95 rounded-2xl p-6 border-3 border-emerald-300 shadow-lg flex items-center justify-between"
          >
            <div className="space-y-1">
              <span className="text-sm font-black text-emerald-700 uppercase">
                BƯỚC 1 • LƯU TRỮ PHÍA SERVER
              </span>
              <h3 className="text-3xl font-black text-slate-900">
                Server Lưu Session Vào Redis / DB
              </h3>
              <p className="text-xl font-bold text-slate-600">
                Tạo chuỗi ngẫu nhiên <code className="text-emerald-800 font-mono font-bold">sess_79f82d</code> gắn với User ID
              </p>
            </div>
            <div className="px-5 py-3 rounded-xl bg-emerald-100 border border-emerald-400 text-emerald-900 font-mono font-black text-xl">
              RAM REDIS
            </div>
          </div>

          {/* Step 2: Cookie Flags */}
          <div
            style={{ opacity: step2, transform: `translateY(${(1 - step2) * 30}px)` }}
            className="w-full bg-white/95 rounded-2xl p-6 border-3 border-blue-300 shadow-lg flex flex-col gap-3"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm font-black text-blue-700 uppercase">
                BƯỚC 2 • TRÌNH DUYỆT GIỮ COOKIE BẢO VỆ
              </span>
              <span className="text-xs px-2.5 py-1 rounded bg-blue-100 text-blue-800 font-bold border border-blue-300">
                BROWSER SAFE
              </span>
            </div>
            <div className="text-2xl font-black text-slate-900 font-mono">
              Set-Cookie: session_id=sess_79f82d; HttpOnly; Secure; SameSite=Lax
            </div>
            <div className="flex gap-2 text-sm font-bold text-slate-600">
              <span className="px-3 py-1 rounded-lg bg-sky-100 text-sky-800">
                🛡️ HttpOnly: JS không đọc được (Chống XSS)
              </span>
              <span className="px-3 py-1 rounded-lg bg-sky-100 text-sky-800">
                🔒 Secure: Chỉ gửi qua HTTPS
              </span>
            </div>
          </div>
        </div>

        {/* Highlight Card: Instant Revocation Power */}
        <div
          style={{ opacity: powerCard, transform: `scale(${powerCard})` }}
          className="w-full bg-gradient-to-r from-emerald-800 via-teal-800 to-emerald-900 text-white rounded-3xl p-6 shadow-xl border-2 border-emerald-400 flex items-center justify-between"
        >
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-amber-300 font-black text-lg">
              <span className="text-2xl">⚡</span>
              <span>QUYỀN KIỂM SOÁT TỐI THƯỢNG</span>
            </div>
            <div className="text-3xl font-black text-white">
              Hủy Phiên Tức Thì 100% (Instant Revocation)
            </div>
            <p className="text-lg font-bold text-emerald-200">
              Phát hiện nghi vấn? Xóa key khỏi Redis là hacker bị kick ngay lập tức!
            </p>
          </div>
          <div className="text-right pl-4 border-l border-emerald-600">
            <div className="text-4xl font-black text-amber-300">0ms</div>
            <span className="text-xs font-black uppercase text-emerald-200">Revoke Delay</span>
          </div>
        </div>
      </div>

      {/* Subtitle Box */}
      <SubtitleBox subtitleText={subtitleText} durationInFrames={durationInFrames} />
    </div>
  );
};
