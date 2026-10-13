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
  const chaosCard = spring({ frame: frame - 10, fps, config: { damping: 14, stiffness: 90 } });
  const cleanCard = spring({ frame: frame - 25, fps, config: { damping: 14, stiffness: 90 } });
  const bannerSpring = spring({ frame: frame - 40, fps, config: { damping: 12, stiffness: 120 } });

  return (
    <div className="w-[1080px] h-[1920px] bg-gradient-to-br from-white via-sky-50 to-blue-100 text-slate-900 flex flex-col justify-between relative overflow-hidden select-none font-sans">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0284c710_1px,transparent_1px),linear-gradient(to_bottom,#0284c710_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-cyan-300/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 -left-20 w-96 h-96 bg-blue-300/30 rounded-full blur-3xl pointer-events-none" />

      {/* Brand Header */}
      <BrandHeader currentCategory="KIẾN TRÚC THƯ MỤC REACT NATIVE" metricBadge="STANDARD: CLEAN ARCHITECTURE" />

      {/* Main Duel Cockpit */}
      <div className="w-[960px] mx-auto flex-1 flex flex-col justify-center gap-7 z-10 py-6">
        {/* Main Title Badge */}
        <div style={{ transform: `scale(${titleSpring})` }} className="text-center space-y-3">
          <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-blue-600 text-white font-black text-xl tracking-wider shadow-md uppercase">
            <span>📁 TỔ CHỨC DỰ ÁN CHUYÊN NGHIỆP</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-black text-slate-950 tracking-tight leading-[1.15]">
            Chuẩn Hóa Cấu Trúc <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-sky-600 to-indigo-700">
              Thư Mục React Native
            </span>
          </h1>
          <p className="text-3xl font-extrabold text-slate-600">
            Từ Dự Án Spaghetti Đến Scalable Clean Architecture
          </p>
        </div>

        {/* Comparison Cards: Chaos vs Clean */}
        <div className="flex flex-col gap-5 w-full">
          {/* Card 1: Chaos Anti-pattern */}
          <div
            style={{ opacity: chaosCard, transform: `translateY(${(1 - chaosCard) * 35}px)` }}
            className="w-full bg-red-50/95 rounded-3xl p-7 border-3 border-red-400 shadow-xl flex items-center justify-between"
          >
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-red-200 text-red-950 font-black text-base">
                <span>🍝 CƠN ÁC MỘNG SPAGHETTI CODE</span>
              </div>
              <h3 className="text-3xl font-black text-red-950">
                Thư Mục Lộn Xộn & Import Rối Mắt
              </h3>
              <p className="text-xl font-bold text-red-800">
                File dài 1.000 dòng • Import ../../../ vô tận • Bug lặp lại
              </p>
            </div>
            <div className="text-right pl-6 border-l-2 border-red-300">
              <div className="text-4xl font-black text-red-700">CHAOS</div>
              <span className="text-sm font-black text-red-600 uppercase">Khó Mở Rộng</span>
            </div>
          </div>

          {/* Banner */}
          <div
            style={{ transform: `scale(${bannerSpring})` }}
            className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-800 text-white shadow-xl flex items-center justify-between border-2 border-blue-400"
          >
            <div className="flex items-center gap-3">
              <span className="text-3xl">⚖️</span>
              <span className="text-2xl font-black tracking-wide">
                BƯỚC CHUYỂN MÌNH KIẾN TRÚC
              </span>
            </div>
            <div className="text-2xl font-black text-amber-300 tracking-tight">
              SCALABLE & CLEAN
            </div>
          </div>

          {/* Card 2: Clean Architecture */}
          <div
            style={{ opacity: cleanCard, transform: `translateY(${(1 - cleanCard) * 35}px)` }}
            className="w-full bg-white/95 rounded-3xl p-7 border-3 border-emerald-400 shadow-xl flex items-center justify-between"
          >
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-100 text-emerald-800 font-black text-base">
                <span>🏛️ CHUẨN CLEAN ARCHITECTURE</span>
              </div>
              <h3 className="text-3xl font-black text-slate-900">
                Feature-First & Mô-đun Hóa
              </h3>
              <p className="text-xl font-bold text-slate-600">
                Đóng gói độc lập • Dễ tìm kiếm • 10 lập trình viên làm cùng lúc
              </p>
            </div>
            <div className="text-right pl-6 border-l-2 border-emerald-200">
              <div className="text-4xl font-black text-emerald-600">CLEAN</div>
              <span className="text-sm font-black text-emerald-700 uppercase">Dễ Bảo Trì</span>
            </div>
          </div>
        </div>
      </div>

      {/* Subtitle Box */}
      <SubtitleBox subtitleText={subtitleText} durationInFrames={durationInFrames} />
    </div>
  );
};
