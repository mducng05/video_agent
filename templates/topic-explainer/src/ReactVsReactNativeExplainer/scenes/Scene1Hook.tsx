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
  const reactJsSpring = spring({ frame: frame - 10, fps, config: { damping: 14, stiffness: 90 } });
  const rnSpring = spring({ frame: frame - 25, fps, config: { damping: 14, stiffness: 90 } });
  const vsSpring = spring({ frame: frame - 40, fps, config: { damping: 12, stiffness: 120 } });

  return (
    <div className="w-[1080px] h-[1920px] bg-gradient-to-br from-white via-orange-50/70 to-amber-50 text-slate-900 flex flex-col justify-between relative overflow-hidden select-none font-sans">
      {/* Background Grid & Orange Glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ea580c0f_1px,transparent_1px),linear-gradient(to_bottom,#ea580c0f_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
      <div className="absolute top-1/4 -right-24 w-96 h-96 bg-orange-300/35 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 -left-24 w-96 h-96 bg-amber-300/30 rounded-full blur-3xl pointer-events-none" />

      {/* Brand Header */}
      <BrandHeader currentCategory="PHÂN BIỆT CÔNG NGHỆ" metricBadge="REACT JS VS REACT NATIVE" />

      {/* Main Duel Content */}
      <div className="w-[960px] mx-auto flex-1 flex flex-col justify-center gap-7 z-10 py-6">
        {/* Main Title Badge */}
        <div style={{ transform: `scale(${titleSpring})` }} className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-orange-600 to-amber-600 text-white font-black text-xl tracking-wider shadow-md uppercase">
            <span>⚡ CUỘC CHIẾN CÔNG NGHỆ FRONTEND</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-black text-slate-950 tracking-tight leading-[1.15]">
            React JS <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500">
              Đối Đầu React Native
            </span>
          </h1>
          <p className="text-3xl font-extrabold text-slate-600">
            Chung Cú Pháp JSX Nhưng Hai Thế Giới Hoàn Toàn Khác Biệt
          </p>
        </div>

        {/* Duel Matchup Cards */}
        <div className="flex flex-col gap-5 w-full">
          {/* Card 1: React JS */}
          <div
            style={{ opacity: reactJsSpring, transform: `translateY(${(1 - reactJsSpring) * 35}px)` }}
            className="w-full bg-white/95 rounded-3xl p-7 border-2 border-orange-200 shadow-xl shadow-orange-900/5 flex items-center justify-between"
          >
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-lg bg-orange-100 text-orange-800 font-black text-base border border-orange-200">
                <span>🌐 NỀN TẢNG WEB BROWSER</span>
              </div>
              <h3 className="text-3xl font-black text-slate-900">
                React JS (Thư Viện Web)
              </h3>
              <p className="text-xl font-bold text-slate-600">
                Tạo DOM Ảo • Render HTML/CSS • Chạy Trên Trình Duyệt
              </p>
            </div>
            <div className="text-right pl-6 border-l-2 border-orange-100">
              <div className="text-4xl font-black text-orange-600">WEB UI</div>
              <span className="text-sm font-black text-orange-700 uppercase">DOM Tree</span>
            </div>
          </div>

          {/* Central VS Banner */}
          <div
            style={{ transform: `scale(${vsSpring})` }}
            className="w-full py-4 px-8 rounded-2xl bg-gradient-to-r from-orange-600 via-amber-600 to-orange-700 text-white shadow-xl shadow-orange-600/20 flex items-center justify-between border border-orange-400"
          >
            <div className="flex items-center gap-3">
              <span className="text-3xl">⚔️</span>
              <span className="text-2xl font-black tracking-wide">
                ĐÂU LÀ SỰ KHÁC BIỆT CỐT LÕI?
              </span>
            </div>
            <div className="text-2xl font-black text-amber-200 tracking-tight">
              WEB VS MOBILE NATIVE
            </div>
          </div>

          {/* Card 2: React Native */}
          <div
            style={{ opacity: rnSpring, transform: `translateY(${(1 - rnSpring) * 35}px)` }}
            className="w-full bg-white/95 rounded-3xl p-7 border-2 border-orange-300 shadow-xl shadow-orange-900/5 flex items-center justify-between"
          >
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-lg bg-amber-100 text-amber-800 font-black text-base border border-amber-200">
                <span>📱 NỀN TẢNG MOBILE NATIVE</span>
              </div>
              <h3 className="text-3xl font-black text-slate-900">
                React Native (Framework Mobile)
              </h3>
              <p className="text-xl font-bold text-slate-600">
                Ánh Xạ Native Widget • Không Dùng HTML • 60-120 FPS
              </p>
            </div>
            <div className="text-right pl-6 border-l-2 border-orange-100">
              <div className="text-4xl font-black text-amber-600">NATIVE UI</div>
              <span className="text-sm font-black text-amber-700 uppercase">iOS & Android</span>
            </div>
          </div>
        </div>
      </div>

      {/* Subtitle Box */}
      <SubtitleBox subtitleText={subtitleText} durationInFrames={durationInFrames} />
    </div>
  );
};
