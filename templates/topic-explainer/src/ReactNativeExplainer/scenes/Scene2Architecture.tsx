import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import { BrandHeader } from "../components/BrandHeader";
import { SubtitleBox } from "../components/SubtitleBox";

interface SceneProps {
  subtitleText: string;
  durationInFrames: number;
}

export const Scene2Architecture: React.FC<SceneProps> = ({
  subtitleText,
  durationInFrames,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleSpring = spring({ frame, fps, config: { damping: 14, stiffness: 100 } });
  const bridgeSpring = spring({ frame: frame - 10, fps, config: { damping: 14, stiffness: 90 } });
  const warningSpring = spring({ frame: frame - 25, fps, config: { damping: 12, stiffness: 100 } });

  return (
    <div className="w-[1080px] h-[1920px] bg-gradient-to-br from-white via-sky-50 to-blue-100 text-slate-900 flex flex-col justify-between relative overflow-hidden select-none font-sans">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0284c710_1px,transparent_1px),linear-gradient(to_bottom,#0284c710_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
      <div className="absolute top-1/3 -left-20 w-96 h-96 bg-amber-300/30 rounded-full blur-3xl pointer-events-none" />

      {/* Brand Header */}
      <BrandHeader currentCategory="KIẾN TRÚC TRUYỀN THỐNG" metricBadge="OLD ARCHITECTURE: THE BRIDGE" />

      {/* Main Content */}
      <div className="w-[960px] mx-auto flex-1 flex flex-col justify-center gap-6 z-10 py-4">
        {/* Title */}
        <div style={{ transform: `scale(${titleSpring})` }} className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-amber-100 text-amber-800 font-extrabold text-lg border border-amber-300">
            <span>⚠️ THỜI KỲ CŨ</span>
          </div>
          <h2 className="text-6xl font-black text-slate-950 tracking-tight">
            Điểm Nghẽn Của <span className="text-amber-700">Cây Cầu "Bridge"</span>
          </h2>
          <p className="text-2xl font-bold text-slate-600">
            Tuần tự hóa dữ liệu JSON bất đồng bộ làm chậm hệ thống
          </p>
        </div>

        {/* Bridge Visual Diagram */}
        <div
          style={{ opacity: bridgeSpring, transform: `translateY(${(1 - bridgeSpring) * 30}px)` }}
          className="w-full bg-white/95 rounded-3xl p-7 border-3 border-amber-400 shadow-xl flex flex-col gap-5"
        >
          {/* Top: JS Thread */}
          <div className="bg-slate-900 text-amber-400 p-5 rounded-2xl font-mono text-2xl font-bold flex items-center justify-between shadow">
            <span>🟨 JAVASCRIPT THREAD (Logic React)</span>
            <span className="text-xs px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">
              JS ENGINE
            </span>
          </div>

          {/* Center: The Bottleneck Bridge */}
          <div className="py-5 px-6 rounded-2xl bg-amber-50 border-2 border-dashed border-amber-500 text-center flex flex-col items-center gap-2">
            <span className="text-3xl">🌉</span>
            <div className="text-2xl font-black text-amber-950">
              THE ASYNCHRONOUS BRIDGE
            </div>
            <div className="text-lg font-bold text-amber-800 font-mono">
              JSON.stringify() ➔ Batch Queue ➔ JSON.parse()
            </div>
          </div>

          {/* Bottom: Native UI Thread */}
          <div className="bg-blue-950 text-sky-400 p-5 rounded-2xl font-mono text-2xl font-bold flex items-center justify-between shadow">
            <span>📱 NATIVE THREAD (Swift / Kotlin Views)</span>
            <span className="text-xs px-2.5 py-1 rounded bg-blue-900 text-slate-300 border border-blue-700">
              OEM UI
            </span>
          </div>
        </div>

        {/* Warning Bottleneck Card */}
        <div
          style={{ opacity: warningSpring, transform: `scale(${warningSpring})` }}
          className="w-full bg-red-50/95 rounded-3xl p-6 border-3 border-red-500 shadow-xl flex items-center justify-between"
        >
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-red-700 font-black text-lg">
              <span className="text-2xl">🚨</span>
              <span>HẬU QUẢ VẬN HÀNH</span>
            </div>
            <h3 className="text-3xl font-black text-red-950">
              Giật Lag Khi Cuộn List & Rơi Frame
            </h3>
            <p className="text-xl font-bold text-red-800">
              Nghẽn hàng đợi JSON khiến cử chỉ vuốt chạm không bắt kịp thời gian thực
            </p>
          </div>
          <div className="text-right pl-4 border-l-2 border-red-300">
            <div className="text-4xl font-black text-red-700">FRAME DROP</div>
            <span className="text-xs font-black uppercase text-red-600">Old Bridge Lag</span>
          </div>
        </div>
      </div>

      {/* Subtitle Box */}
      <SubtitleBox subtitleText={subtitleText} durationInFrames={durationInFrames} />
    </div>
  );
};
