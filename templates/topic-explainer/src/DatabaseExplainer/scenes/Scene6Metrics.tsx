import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import { BrandHeader } from "../components/BrandHeader";
import { SubtitleBox } from "../components/SubtitleBox";

interface SceneProps {
  subtitleText: string;
  durationInFrames: number;
}

export const Scene6Metrics: React.FC<SceneProps> = ({
  subtitleText,
  durationInFrames,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleSpring = spring({ frame, fps, config: { damping: 14, stiffness: 100 } });
  const card1 = spring({ frame: frame - 10, fps, config: { damping: 14, stiffness: 90 } });
  const card2 = spring({ frame: frame - 22, fps, config: { damping: 14, stiffness: 90 } });
  const card3 = spring({ frame: frame - 34, fps, config: { damping: 14, stiffness: 90 } });

  return (
    <div className="w-[1080px] h-[1920px] bg-gradient-to-br from-white via-sky-50 to-blue-100 text-slate-900 flex flex-col justify-between relative overflow-hidden select-none font-sans">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0284c710_1px,transparent_1px),linear-gradient(to_bottom,#0284c710_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-300/30 rounded-full blur-3xl pointer-events-none" />

      {/* Brand Header */}
      <BrandHeader currentCategory="KẾT QUẢ BENCHMARK" metricBadge="SYSTEM IMPACT: 2.680x FASTER" />

      {/* Main Content */}
      <div className="w-[960px] mx-auto flex-1 flex flex-col justify-center gap-6 z-10 py-4">
        {/* Title */}
        <div style={{ transform: `scale(${titleSpring})` }} className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-100 text-emerald-800 font-extrabold text-lg border border-emerald-300">
            <span>📊 BENCHMARK TRƯỚC VÀ SAU</span>
          </div>
          <h2 className="text-6xl font-black text-slate-950 tracking-tight">
            Hiệu Năng <span className="text-emerald-700">Tăng Vọt Kinh Ngạc</span>
          </h2>
          <p className="text-2xl font-bold text-slate-600">
            Đo lường thực tế trên cơ sở dữ liệu hàng chục triệu bản ghi
          </p>
        </div>

        {/* 3 Metric Scoreboard Cards */}
        <div className="flex flex-col gap-5 w-full">
          {/* Metric 1: Latency */}
          <div
            style={{ opacity: card1, transform: `translateY(${(1 - card1) * 30}px)` }}
            className="w-full bg-white/95 rounded-3xl p-6 border-3 border-emerald-300 shadow-xl flex items-center justify-between"
          >
            <div className="space-y-1">
              <span className="text-sm font-extrabold text-emerald-700 uppercase tracking-wider">
                ⚡ TỐC ĐỘ PHẢN HỒI (LATENCY)
              </span>
              <h3 className="text-3xl font-black text-slate-900">
                10.2s ➔ 3.8ms
              </h3>
              <p className="text-lg font-bold text-slate-500">
                Từ 10.200 mili giây xuống chỉ còn 3.8ms
              </p>
            </div>
            <div className="text-right pl-6 border-l-2 border-emerald-200">
              <div className="text-5xl font-black text-emerald-600">2.680x</div>
              <span className="text-xs font-black text-emerald-700 uppercase tracking-wider">
                Tốc Độ Vượt Trội
              </span>
            </div>
          </div>

          {/* Metric 2: CPU Load */}
          <div
            style={{ opacity: card2, transform: `translateY(${(1 - card2) * 30}px)` }}
            className="w-full bg-white/95 rounded-3xl p-6 border-3 border-blue-300 shadow-xl flex items-center justify-between"
          >
            <div className="space-y-1">
              <span className="text-sm font-extrabold text-blue-700 uppercase tracking-wider">
                📉 TẢI CPU DATABASE SERVER
              </span>
              <h3 className="text-3xl font-black text-slate-900">
                98% ➔ 14%
              </h3>
              <p className="text-lg font-bold text-slate-500">
                Giải phóng hoàn toàn tài nguyên CPU & RAM
              </p>
            </div>
            <div className="text-right pl-6 border-l-2 border-blue-200">
              <div className="text-5xl font-black text-blue-600">-86%</div>
              <span className="text-xs font-black text-blue-700 uppercase tracking-wider">
                Giảm Tải Server
              </span>
            </div>
          </div>

          {/* Metric 3: Max QPS Throughput */}
          <div
            style={{ opacity: card3, transform: `translateY(${(1 - card3) * 30}px)` }}
            className="w-full bg-white/95 rounded-3xl p-6 border-3 border-indigo-300 shadow-xl flex items-center justify-between"
          >
            <div className="space-y-1">
              <span className="text-sm font-extrabold text-indigo-700 uppercase tracking-wider">
                🚀 SỨC CHỊU TẢI ĐỒNG THỜI (QPS)
              </span>
              <h3 className="text-3xl font-black text-slate-900">
                150 ➔ 8.500+ QPS
              </h3>
              <p className="text-lg font-bold text-slate-500">
                Phục vụ hàng chục nghìn người dùng mượt mà
              </p>
            </div>
            <div className="text-right pl-6 border-l-2 border-indigo-200">
              <div className="text-5xl font-black text-indigo-600">56x</div>
              <span className="text-xs font-black text-indigo-700 uppercase tracking-wider">
                Tăng Khả Năng Tải
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
