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

  const titleSpring = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 100 },
  });

  const redCardSpring = spring({
    frame: frame - 10,
    fps,
    config: { damping: 14, stiffness: 90 },
  });

  const greenCardSpring = spring({
    frame: frame - 25,
    fps,
    config: { damping: 14, stiffness: 90 },
  });

  const badgeSpring = spring({
    frame: frame - 40,
    fps,
    config: { damping: 12, stiffness: 120 },
  });

  return (
    <div className="w-[1080px] h-[1920px] bg-gradient-to-br from-white via-sky-50 to-blue-100 text-slate-900 flex flex-col justify-between relative overflow-hidden select-none font-sans">
      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0284c710_1px,transparent_1px),linear-gradient(to_bottom,#0284c710_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-blue-300/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 -left-20 w-96 h-96 bg-cyan-300/30 rounded-full blur-3xl pointer-events-none" />

      {/* Brand Header */}
      <BrandHeader currentCategory="DATABASE OPTIMIZATION" metricBadge="QUERY COCKPIT: 10S ➔ 3.8MS" />

      {/* Main Content Area */}
      <div className="w-[960px] mx-auto flex-1 flex flex-col justify-center gap-7 z-10 py-6">
        {/* Main Title Badge */}
        <div
          style={{ transform: `scale(${titleSpring})` }}
          className="text-center space-y-3"
        >
          <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-blue-600 text-white font-black text-xl tracking-wider shadow-md uppercase">
            <span>⚡ HIỆU NĂNG CƠ SỞ DỮ LIỆU</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-black text-slate-950 tracking-tight leading-[1.15]">
            Bí Mật Tối Ưu Hóa <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-sky-600 to-indigo-700">
              Database Query
            </span>
          </h1>
          <p className="text-2xl font-bold text-slate-600">
            Từ Chậm Rùa 10 Giây Xuống Millisecond
          </p>
        </div>

        {/* Cockpit Benchmark Comparison (Red vs Green) */}
        <div className="flex flex-col gap-6 w-full">
          {/* Card 1: Chậm rùa 10.2s */}
          <div
            style={{
              opacity: redCardSpring,
              transform: `translateY(${(1 - redCardSpring) * 40}px)`,
            }}
            className="w-full bg-white/95 rounded-3xl p-7 border-3 border-red-300 shadow-xl shadow-red-500/10 flex items-center justify-between"
          >
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-red-100 text-red-700 font-extrabold text-base">
                <span>🐢 TRẠNG THÁI NGHẼN TẢI</span>
              </div>
              <h3 className="text-3xl font-black text-slate-900">
                Truy Vấn Chưa Đánh Index
              </h3>
              <p className="text-xl font-bold text-slate-600">
                Quét 5.000.000 dòng • CPU chạm 100% • App treo đứng
              </p>
            </div>
            <div className="text-right pl-6 border-l-2 border-red-200">
              <div className="text-6xl font-black text-red-600 tracking-tighter">
                10.2s
              </div>
              <span className="text-sm font-extrabold text-red-500 uppercase tracking-wider">
                Full Scan Disk I/O
              </span>
            </div>
          </div>

          {/* Central Speed Gap Banner */}
          <div
            style={{ transform: `scale(${badgeSpring})` }}
            className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-800 text-white shadow-xl flex items-center justify-between border-2 border-blue-400"
          >
            <div className="flex items-center gap-3">
              <span className="text-3xl">🚀</span>
              <span className="text-2xl font-black tracking-wide">
                MỤC TIÊU BỨT PHÁ HIỆU NĂNG
              </span>
            </div>
            <div className="text-3xl font-black text-amber-300 tracking-tight">
              TĂNG TỐC 2.680x
            </div>
          </div>

          {/* Card 2: Siêu tốc 3.8ms */}
          <div
            style={{
              opacity: greenCardSpring,
              transform: `translateY(${(1 - greenCardSpring) * 40}px)`,
            }}
            className="w-full bg-white/95 rounded-3xl p-7 border-3 border-emerald-300 shadow-xl shadow-emerald-500/10 flex items-center justify-between"
          >
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-100 text-emerald-800 font-extrabold text-base">
                <span>⚡ KẾT QUẢ TỐI ƯU</span>
              </div>
              <h3 className="text-3xl font-black text-slate-900">
                Index B-Tree & Cache RAM
              </h3>
              <p className="text-xl font-bold text-slate-600">
                Tìm 3 bước con trỏ • Phản hồi tức thì • Uptime 99.99%
              </p>
            </div>
            <div className="text-right pl-6 border-l-2 border-emerald-200">
              <div className="text-6xl font-black text-emerald-600 tracking-tighter">
                3.8ms
              </div>
              <span className="text-sm font-extrabold text-emerald-600 uppercase tracking-wider">
                Sub-Millisecond
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Subtitle Box */}
      <SubtitleBox subtitleText={subtitleText} durationInFrames={durationInFrames} />
    </div>
  );
};
