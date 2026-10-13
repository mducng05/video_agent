import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import { BrandHeader } from "../components/BrandHeader";
import { SubtitleBox } from "../components/SubtitleBox";

interface SceneProps {
  subtitleText: string;
  durationInFrames: number;
}

export const Scene5ImpellerEngine: React.FC<SceneProps> = ({
  subtitleText,
  durationInFrames,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleSpring = spring({ frame, fps, config: { damping: 14, stiffness: 100 } });
  const compareSpring = spring({ frame: frame - 10, fps, config: { damping: 13, stiffness: 90 } });
  const pipelineSpring = spring({ frame: frame - 24, fps, config: { damping: 13, stiffness: 90 } });

  return (
    <div className="w-[1080px] h-[1920px] bg-gradient-to-b from-[#020814] via-[#05162b] to-[#020b18] text-white flex flex-col justify-between relative overflow-hidden select-none font-sans">
      {/* Blueprint Grid & Glow Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00e5ff12_1px,transparent_1px),linear-gradient(to_bottom,#00e5ff12_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-cyan-400/15 rounded-full blur-[140px] pointer-events-none" />

      {/* Brand Header */}
      <BrandHeader currentCategory="CỖ MÁY ĐỒ HỌA" metricBadge="IMPELLER GRAPHICS ENGINE" />

      {/* Main Content */}
      <div className="w-[980px] mx-auto flex-1 flex flex-col justify-center gap-6 z-10 py-2">
        {/* Title */}
        <div style={{ transform: `scale(${titleSpring})` }} className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-cyan-950/90 border border-cyan-400/50">
            <span className="text-2xl">🔥</span>
            <span className="text-xl font-black text-cyan-300 tracking-wider">
              FLUTTER 3.X NEXT-GEN
            </span>
          </div>
          <h2 className="text-6xl font-black text-white tracking-tight">
            Impeller: <span className="text-cyan-400">Triệt Tiêu Hoàn Toàn Lag</span>
          </h2>
          <p className="text-2xl font-bold text-slate-300">
            Vĩnh biệt hiện tượng khựng shader (Shader Compilation Jank)
          </p>
        </div>

        {/* Comparison: Skia (Old) vs Impeller (New) */}
        <div
          style={{ opacity: compareSpring, transform: `translateY(${(1 - compareSpring) * 25}px)` }}
          className="grid grid-cols-2 gap-4"
        >
          {/* Old Skia */}
          <div className="bg-slate-900/80 rounded-2xl p-5 border border-rose-500/40 flex flex-col justify-between gap-3 shadow-lg">
            <div className="flex items-center justify-between border-b border-rose-500/20 pb-2">
              <span className="text-xs font-mono font-black text-rose-400">SKIA CŨ (LEGACY)</span>
              <span className="text-xl">⚠️</span>
            </div>
            <div className="space-y-1">
              <h4 className="text-xl font-black text-white">Runtime Shader Compilation</h4>
              <p className="text-xs text-slate-400 font-semibold">
                Biên dịch Shader ngay khi animation chạy lần đầu trên máy người dùng
              </p>
            </div>
            <div className="p-3 rounded-xl bg-rose-950/60 border border-rose-500/30 text-rose-300 text-xs font-bold text-center">
              ❌ Khựng khung hình (Early Jank) làm giảm trải nghiệm
            </div>
          </div>

          {/* New Impeller */}
          <div className="bg-gradient-to-b from-cyan-950/90 to-blue-950/90 rounded-2xl p-5 border-2 border-cyan-400 flex flex-col justify-between gap-3 shadow-[0_0_30px_rgba(34,211,238,0.3)]">
            <div className="flex items-center justify-between border-b border-cyan-400/30 pb-2">
              <span className="text-xs font-mono font-black text-cyan-300">IMPELLER MỚI (MODERN)</span>
              <span className="text-xl">🚀</span>
            </div>
            <div className="space-y-1">
              <h4 className="text-xl font-black text-cyan-200">AOT Pre-Compiled Shaders</h4>
              <p className="text-xs text-cyan-100 font-semibold">
                Toàn bộ Shader được biên dịch sẵn lúc Build App, nạp tức thì vào GPU
              </p>
            </div>
            <div className="p-3 rounded-xl bg-cyan-900/80 border border-cyan-300 text-cyan-100 text-xs font-black text-center">
              ⚡ 0% Shader Jank! 120 FPS siêu mượt từ mili-giây đầu tiên
            </div>
          </div>
        </div>

        {/* Impeller Graphics Pipeline Flow Diagram */}
        <div
          style={{ opacity: pipelineSpring, transform: `scale(${pipelineSpring})` }}
          className="w-full bg-slate-900/90 rounded-2xl p-6 border-2 border-cyan-500/60 shadow-[0_0_35px_rgba(6,182,212,0.3)] flex flex-col gap-4 font-mono"
        >
          <div className="flex items-center justify-between border-b border-cyan-500/30 pb-2">
            <span className="text-lg font-black text-cyan-300">
              SƠ ĐỒ PIPELINE ĐỒ HỌA IMPELLER
            </span>
            <span className="text-xs px-2.5 py-1 rounded bg-cyan-950 text-cyan-300 border border-cyan-500/40">
              DIRECT HARDWARE
            </span>
          </div>

          <div className="grid grid-cols-4 gap-3 text-center text-xs">
            {/* Step 1 */}
            <div className="bg-slate-950 p-3 rounded-xl border border-cyan-500/40 flex flex-col justify-between">
              <span className="text-cyan-400 font-bold mb-1">BƯỚC 1</span>
              <span className="text-white font-black text-sm">Dart UI Draw</span>
              <span className="text-slate-400 text-[10px] mt-1">Lệnh vẽ giao diện</span>
            </div>
            {/* Step 2 */}
            <div className="bg-slate-950 p-3 rounded-xl border border-cyan-500/40 flex flex-col justify-between">
              <span className="text-cyan-400 font-bold mb-1">BƯỚC 2</span>
              <span className="text-white font-black text-sm">Tessellation</span>
              <span className="text-slate-400 text-[10px] mt-1">Phân rã thành lưới tam giác</span>
            </div>
            {/* Step 3 */}
            <div className="bg-cyan-950 p-3 rounded-xl border-2 border-cyan-400 flex flex-col justify-between">
              <span className="text-amber-400 font-bold mb-1">BƯỚC 3</span>
              <span className="text-cyan-200 font-black text-sm">Precompiled Shaders</span>
              <span className="text-cyan-300 text-[10px] mt-1">Nạp shader có sẵn</span>
            </div>
            {/* Step 4 */}
            <div className="bg-emerald-950 p-3 rounded-xl border-2 border-emerald-400 flex flex-col justify-between">
              <span className="text-emerald-400 font-bold mb-1">BƯỚC 4</span>
              <span className="text-emerald-200 font-black text-sm">Metal / Vulkan GPU</span>
              <span className="text-emerald-300 text-[10px] mt-1">120 FPS Output</span>
            </div>
          </div>
        </div>

        {/* Quote banner */}
        <div className="bg-gradient-to-r from-cyan-950 via-slate-900 to-blue-950 p-4 rounded-2xl border border-cyan-400/40 flex items-center justify-between">
          <span className="text-base font-black text-cyan-200">
            🎯 Impeller biến Flutter thành framework UI mượt nhất thế giới di động hiện nay!
          </span>
        </div>
      </div>

      {/* Subtitle Box */}
      <SubtitleBox subtitleText={subtitleText} durationInFrames={durationInFrames} />
    </div>
  );
};
