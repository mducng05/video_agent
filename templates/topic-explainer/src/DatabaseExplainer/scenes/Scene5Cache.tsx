import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import { BrandHeader } from "../components/BrandHeader";
import { SubtitleBox } from "../components/SubtitleBox";

interface SceneProps {
  subtitleText: string;
  durationInFrames: number;
}

export const Scene5Cache: React.FC<SceneProps> = ({
  subtitleText,
  durationInFrames,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleSpring = spring({ frame, fps, config: { damping: 14, stiffness: 100 } });
  const readHighwaySpring = spring({ frame: frame - 12, fps, config: { damping: 14, stiffness: 90 } });
  const writeHighwaySpring = spring({ frame: frame - 25, fps, config: { damping: 14, stiffness: 90 } });
  const statSpring = spring({ frame: frame - 38, fps, config: { damping: 12, stiffness: 100 } });

  return (
    <div className="w-[1080px] h-[1920px] bg-gradient-to-br from-white via-sky-50 to-blue-100 text-slate-900 flex flex-col justify-between relative overflow-hidden select-none font-sans">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0284c710_1px,transparent_1px),linear-gradient(to_bottom,#0284c710_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-blue-300/30 rounded-full blur-3xl pointer-events-none" />

      {/* Brand Header */}
      <BrandHeader currentCategory="BƯỚC 4: KIẾN TRÚC CACHE & REPLICA" metricBadge="ARCH: DUAL-LANE READ/WRITE" />

      {/* Main Content */}
      <div className="w-[960px] mx-auto flex-1 flex flex-col justify-center gap-6 z-10 py-4">
        {/* Title */}
        <div style={{ transform: `scale(${titleSpring})` }} className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-indigo-100 text-indigo-800 font-extrabold text-lg border border-indigo-300">
            <span>⚡ TÁCH BIỆT LUỒNG TRUY VẤN</span>
          </div>
          <h2 className="text-6xl font-black text-slate-950 tracking-tight">
            Redis Cache & <span className="text-indigo-700">Read Replica</span>
          </h2>
          <p className="text-2xl font-bold text-slate-600">
            Đưa 90% truy vấn đọc vào RAM • Master DB luôn thanh thoát
          </p>
        </div>

        {/* Highway 1: Read Traffic (90%) */}
        <div
          style={{ opacity: readHighwaySpring, transform: `translateY(${(1 - readHighwaySpring) * 30}px)` }}
          className="w-full bg-white/95 rounded-3xl p-6 border-3 border-emerald-400 shadow-xl flex flex-col gap-3"
        >
          <div className="flex items-center justify-between">
            <span className="px-3.5 py-1 rounded-xl bg-emerald-100 text-emerald-800 font-black text-lg">
              🚀 LUỒNG ĐỌC (READ TRAFFIC - 90%)
            </span>
            <span className="text-2xl font-black text-emerald-600">0.8ms PHẢN HỒI</span>
          </div>
          <div className="flex items-center justify-between gap-3 pt-2">
            <div className="flex-1 bg-slate-900 text-white p-4 rounded-2xl text-center shadow">
              <div className="text-sm text-emerald-400 font-bold">LỚP 1</div>
              <div className="text-2xl font-black text-white">Redis Cache</div>
              <div className="text-xs text-slate-300 mt-1">Hit Rate 95% trong RAM</div>
            </div>
            <div className="text-2xl font-black text-emerald-500">➔</div>
            <div className="flex-1 bg-indigo-900 text-white p-4 rounded-2xl text-center shadow">
              <div className="text-sm text-sky-400 font-bold">LỚP 2</div>
              <div className="text-2xl font-black text-white">Read Replicas</div>
              <div className="text-xs text-slate-300 mt-1">Cụm DB nhân bản chỉ đọc</div>
            </div>
          </div>
        </div>

        {/* Highway 2: Write Traffic (10%) */}
        <div
          style={{ opacity: writeHighwaySpring, transform: `translateY(${(1 - writeHighwaySpring) * 30}px)` }}
          className="w-full bg-white/95 rounded-3xl p-6 border-3 border-blue-400 shadow-xl flex flex-col gap-3"
        >
          <div className="flex items-center justify-between">
            <span className="px-3.5 py-1 rounded-xl bg-blue-100 text-blue-900 font-black text-lg">
              🛡️ LUỒNG GHI (WRITE TRAFFIC - 10%)
            </span>
            <span className="text-2xl font-black text-blue-700">ACID STRICT</span>
          </div>
          <div className="bg-slate-900 text-white p-4 rounded-2xl flex items-center justify-between shadow">
            <div>
              <div className="text-sm text-sky-400 font-bold">PRIMARY MASTER DATABASE</div>
              <div className="text-2xl font-black text-white">Ghi Giao Dịch & WAL Log An Toàn</div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-black text-emerald-400">GIẢI PHÓNG 90% TẢI</div>
              <div className="text-xs text-slate-400">Không bị nghẽn bởi lệnh đọc</div>
            </div>
          </div>
        </div>

        {/* Bottom Metric Bar */}
        <div
          style={{ opacity: statSpring, transform: `scale(${statSpring})` }}
          className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-blue-900 to-indigo-900 text-white shadow-xl flex items-center justify-between border border-blue-400"
        >
          <div className="flex items-center gap-3">
            <span className="text-3xl">🎯</span>
            <span className="text-xl font-black">KẾT QUẢ ĐỘT PHÁ</span>
          </div>
          <div className="text-2xl font-black text-amber-300">
            DATABASE MASTER HOÀN TOÀN NHẸ TẢI
          </div>
        </div>
      </div>

      {/* Subtitle Box */}
      <SubtitleBox subtitleText={subtitleText} durationInFrames={durationInFrames} />
    </div>
  );
};
