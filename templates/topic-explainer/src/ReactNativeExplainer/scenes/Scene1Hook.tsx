import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import { BrandHeader } from "../components/BrandHeader";
import { SubtitleBox } from "../components/SubtitleBox";

interface SceneProps {
  subtitleText: string;
  durationInFrames: number;
}

export const Scene1Hook: React.FC<SceneProps> = ({
  subtitleText,
  durationInFrames,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleSpring = spring({ frame, fps, config: { damping: 14, stiffness: 100 } });
  const cardSpring = spring({ frame: frame - 10, fps, config: { damping: 14, stiffness: 90 } });
  const platformSpring = spring({ frame: frame - 25, fps, config: { damping: 14, stiffness: 90 } });
  const badgeSpring = spring({ frame: frame - 40, fps, config: { damping: 12, stiffness: 120 } });

  return (
    <div className="w-[1080px] h-[1920px] bg-gradient-to-br from-white via-sky-50 to-blue-100 text-slate-900 flex flex-col justify-between relative overflow-hidden select-none font-sans">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0284c710_1px,transparent_1px),linear-gradient(to_bottom,#0284c710_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-cyan-300/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 -left-20 w-96 h-96 bg-blue-300/30 rounded-full blur-3xl pointer-events-none" />

      {/* Brand Header */}
      <BrandHeader currentCategory="PHÁT TRIỂN MOBILE APP" metricBadge="REACT NATIVE: 60 FPS NATIVE" />

      {/* Main Duel Cockpit */}
      <div className="w-[960px] mx-auto flex-1 flex flex-col justify-center gap-7 z-10 py-6">
        {/* Main Title Badge */}
        <div style={{ transform: `scale(${titleSpring})` }} className="text-center space-y-3">
          <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-blue-600 text-white font-black text-xl tracking-wider shadow-md uppercase">
            <span>⚡ CÔNG NGHỆ MOBILE HÀNG ĐẦU</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-black text-slate-950 tracking-tight leading-[1.15]">
            Giải Mã Sức Mạnh <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-sky-600 to-indigo-700">
              React Native
            </span>
          </h1>
          <p className="text-3xl font-extrabold text-slate-600">
            Từ JavaScript Đến Ứng Dụng Native 60 FPS
          </p>
        </div>

        {/* Unified Codebase Card */}
        <div
          style={{ opacity: cardSpring, transform: `translateY(${(1 - cardSpring) * 35}px)` }}
          className="w-full bg-white/95 rounded-3xl p-7 border-3 border-blue-300 shadow-xl flex items-center justify-between"
        >
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-blue-100 text-blue-800 font-black text-base">
              <span>⚛️ 1 NỀN TẢNG DUY NHẤT</span>
            </div>
            <h3 className="text-3xl font-black text-slate-900">
              Viết Một Lần • Chạy Mọi Nơi
            </h3>
            <p className="text-xl font-bold text-slate-600">
              Chỉ 1 codebase JavaScript/TypeScript điều khiển trọn vẹn cả 2 nền tảng
            </p>
          </div>
          <div className="text-right pl-6 border-l-2 border-blue-200">
            <div className="text-4xl font-black text-blue-600">1 CODE</div>
            <span className="text-sm font-black text-blue-700 uppercase">Universal App</span>
          </div>
        </div>

        {/* Dual Platform Badges (iOS vs Android) */}
        <div
          style={{ opacity: platformSpring, transform: `translateY(${(1 - platformSpring) * 35}px)` }}
          className="grid grid-cols-2 gap-5 w-full"
        >
          <div className="bg-white/95 rounded-3xl p-6 border-3 border-slate-300 shadow-lg flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-slate-900 text-white flex items-center justify-center text-3xl font-black shadow">
              🍎
            </div>
            <div>
              <div className="text-2xl font-black text-slate-900">Apple iOS</div>
              <p className="text-base font-bold text-emerald-600">Swift Native Widgets</p>
            </div>
          </div>

          <div className="bg-white/95 rounded-3xl p-6 border-3 border-emerald-300 shadow-lg flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-emerald-600 text-white flex items-center justify-center text-3xl font-black shadow">
              🤖
            </div>
            <div>
              <div className="text-2xl font-black text-slate-900">Google Android</div>
              <p className="text-base font-bold text-emerald-600">Kotlin Native Views</p>
            </div>
          </div>
        </div>

        {/* Speed Badge */}
        <div
          style={{ transform: `scale(${badgeSpring})` }}
          className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-800 text-white shadow-xl flex items-center justify-between border-2 border-blue-400"
        >
          <div className="flex items-center gap-3">
            <span className="text-3xl">🚀</span>
            <span className="text-2xl font-black tracking-wide">
              TRẢI NGHIỆM MƯỢT MÀ CHUẨN NATIVE
            </span>
          </div>
          <div className="text-3xl font-black text-amber-300 tracking-tight">
            60 - 120 FPS
          </div>
        </div>
      </div>

      {/* Subtitle Box */}
      <SubtitleBox subtitleText={subtitleText} durationInFrames={durationInFrames} />
    </div>
  );
};
