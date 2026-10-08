import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import { BrandHeader } from "../components/BrandHeader";
import { SubtitleBox } from "../components/SubtitleBox";

interface SceneProps {
  subtitleText: string;
  durationInFrames: number;
}

export const Scene4Jwt: React.FC<SceneProps> = ({
  subtitleText,
  durationInFrames,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleSpring = spring({ frame, fps, config: { damping: 14, stiffness: 100 } });
  const tokenStringSpring = spring({ frame: frame - 10, fps, config: { damping: 14, stiffness: 90 } });
  const partsSpring = spring({ frame: frame - 22, fps, config: { damping: 14, stiffness: 90 } });
  const takeawaySpring = spring({ frame: frame - 38, fps, config: { damping: 12, stiffness: 100 } });

  return (
    <div className="w-[1080px] h-[1920px] bg-gradient-to-br from-white via-sky-50 to-blue-100 text-slate-900 flex flex-col justify-between relative overflow-hidden select-none font-sans">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0284c710_1px,transparent_1px),linear-gradient(to_bottom,#0284c710_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-cyan-300/30 rounded-full blur-3xl pointer-events-none" />

      {/* Brand Header */}
      <BrandHeader currentCategory="PHẦN 3: GIẢI PHẪU CẤU TRÚC JWT" metricBadge="ARCH: STATELESS TOKEN" />

      {/* Main Content */}
      <div className="w-[960px] mx-auto flex-1 flex flex-col justify-center gap-6 z-10 py-4">
        {/* Title */}
        <div style={{ transform: `scale(${titleSpring})` }} className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-indigo-100 text-indigo-800 font-extrabold text-lg border border-indigo-300">
            <span>🔑 ĐỘT PHÁ KIẾN TRÚC STATELESS</span>
          </div>
          <h2 className="text-6xl font-black text-slate-950 tracking-tight">
            Giải Phẫu Chuỗi <span className="text-indigo-700">JSON Web Token</span>
          </h2>
          <p className="text-2xl font-bold text-slate-600">
            Tự chứa dữ liệu • Server chỉ cần giải mã chữ ký mật mã
          </p>
        </div>

        {/* Big Code Block Showing 3 Separated Colors */}
        <div
          style={{ opacity: tokenStringSpring, transform: `translateY(${(1 - tokenStringSpring) * 30}px)` }}
          className="w-full bg-slate-950 rounded-3xl p-6 border-3 border-indigo-500 shadow-2xl flex flex-col gap-3 font-mono text-2xl font-black"
        >
          <div className="flex items-center justify-between border-b border-slate-800 pb-2 text-sm font-sans font-bold">
            <span className="text-slate-400">CHỈ CẦN 3 THÀNH PHẦN NGĂN CÁCH BẰNG DẤU CHẤM (.)</span>
            <span className="px-2.5 py-0.5 rounded bg-indigo-950 text-indigo-300 border border-indigo-700">
              JWT DECODER
            </span>
          </div>
          <div className="leading-relaxed break-all">
            <span className="text-rose-400">eyJhbGciOiJIUzI1NiJ9</span>
            <span className="text-white">.</span>
            <span className="text-purple-400">eyJ1c2VySWQiOiI5OSIsInJvbGUiOiJhZG1pbiJ9</span>
            <span className="text-white">.</span>
            <span className="text-cyan-400">SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV</span>
          </div>
        </div>

        {/* 3 Detail Cards for the 3 parts */}
        <div
          style={{ opacity: partsSpring, transform: `translateY(${(1 - partsSpring) * 30}px)` }}
          className="grid grid-cols-3 gap-3 w-full"
        >
          {/* Part 1 */}
          <div className="bg-white/95 rounded-2xl p-4 border-2 border-rose-300 shadow">
            <div className="text-xs font-black text-rose-600 uppercase">1. HEADER</div>
            <div className="text-xl font-black text-slate-900 mt-1">Thuật Toán</div>
            <p className="text-sm font-bold text-slate-500 mt-1">HS256, RS256, EdDSA</p>
          </div>
          {/* Part 2 */}
          <div className="bg-white/95 rounded-2xl p-4 border-2 border-purple-300 shadow">
            <div className="text-xs font-black text-purple-600 uppercase">2. PAYLOAD</div>
            <div className="text-xl font-black text-slate-900 mt-1">Claims Dữ Liệu</div>
            <p className="text-sm font-bold text-slate-500 mt-1">User ID, Role, Hạn dùng</p>
          </div>
          {/* Part 3 */}
          <div className="bg-white/95 rounded-2xl p-4 border-2 border-cyan-300 shadow">
            <div className="text-xs font-black text-cyan-600 uppercase">3. SIGNATURE</div>
            <div className="text-xl font-black text-slate-900 mt-1">Chữ Ký Số</div>
            <p className="text-sm font-bold text-slate-500 mt-1">Bảo đảm không bị chỉnh sửa</p>
          </div>
        </div>

        {/* Takeaway Card */}
        <div
          style={{ opacity: takeawaySpring, transform: `scale(${takeawaySpring})` }}
          className="w-full bg-gradient-to-r from-blue-900 to-indigo-900 text-white rounded-2xl p-5 shadow-xl border border-blue-400 flex items-center justify-between"
        >
          <div className="flex items-center gap-4">
            <span className="text-4xl">🚀</span>
            <div>
              <div className="text-xl font-black text-amber-300">ZERO MEMORY OVERHEAD</div>
              <div className="text-2xl font-black text-white">
                Mở rộng không giới hạn hàng trăm cụm Cloud Server!
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtitle Box */}
      <SubtitleBox subtitleText={subtitleText} durationInFrames={durationInFrames} />
    </div>
  );
};
