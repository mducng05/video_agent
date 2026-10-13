import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import { BrandHeader } from "../components/BrandHeader";
import { SubtitleBox } from "../components/SubtitleBox";

interface SceneProps {
  subtitleText: string;
  durationInFrames: number;
}

export const Scene3ThreeLayers: React.FC<SceneProps> = ({
  subtitleText,
  durationInFrames,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleSpring = spring({ frame, fps, config: { damping: 14, stiffness: 100 } });
  const layer1Spring = spring({ frame: frame - 10, fps, config: { damping: 13, stiffness: 90 } });
  const layer2Spring = spring({ frame: frame - 20, fps, config: { damping: 13, stiffness: 90 } });
  const layer3Spring = spring({ frame: frame - 30, fps, config: { damping: 13, stiffness: 90 } });

  return (
    <div className="w-[1080px] h-[1920px] bg-gradient-to-b from-[#020814] via-[#05162b] to-[#020b18] text-white flex flex-col justify-between relative overflow-hidden select-none font-sans">
      {/* Blueprint Grid & Glow Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00e5ff12_1px,transparent_1px),linear-gradient(to_bottom,#00e5ff12_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-cyan-600/15 rounded-full blur-[140px] pointer-events-none" />

      {/* Brand Header */}
      <BrandHeader currentCategory="MÔ HÌNH 3 TẦNG" metricBadge="SYSTEM ARCHITECTURE" />

      {/* Main Content */}
      <div className="w-[980px] mx-auto flex-1 flex flex-col justify-center gap-6 z-10 py-2">
        {/* Title */}
        <div style={{ transform: `scale(${titleSpring})` }} className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-cyan-950/90 border border-cyan-400/50">
            <span className="text-2xl">🏛️</span>
            <span className="text-xl font-black text-cyan-300 tracking-wider">
              CẤU TRÚC PHÂN TẦNG
            </span>
          </div>
          <h2 className="text-6xl font-black text-white tracking-tight">
            Mô Hình 3 Tầng <span className="text-cyan-400">Kiến Trúc Chuẩn</span>
          </h2>
          <p className="text-2xl font-bold text-slate-300">
            Sự phối hợp hoàn hảo giữa Dart, C++ và Platform Native
          </p>
        </div>

        {/* 3-Tier Stacked Architecture Model */}
        <div className="w-full flex flex-col gap-4">
          {/* TẦNG 1: FRAMEWORK (DART) */}
          <div
            style={{ opacity: layer1Spring, transform: `translateY(${(1 - layer1Spring) * 30}px)` }}
            className="w-full bg-slate-900/90 rounded-2xl p-5 border-2 border-cyan-400 shadow-[0_0_30px_rgba(34,211,238,0.25)] flex flex-col gap-3"
          >
            <div className="flex items-center justify-between border-b border-cyan-400/30 pb-2">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-cyan-500 text-slate-950 font-black flex items-center justify-center text-sm">
                  01
                </span>
                <span className="text-2xl font-black text-cyan-300">
                  TẦNG FRAMEWORK (100% VIẾT BẰNG DART)
                </span>
              </div>
              <span className="text-xs font-mono px-3 py-1 rounded bg-cyan-950 text-cyan-200 border border-cyan-400/50 font-bold">
                DEVELOPER API
              </span>
            </div>

            <div className="grid grid-cols-4 gap-2 text-center font-mono text-sm">
              <div className="bg-slate-950/80 p-3 rounded-xl border border-cyan-500/30 text-white font-bold">
                <div className="text-cyan-300 text-xs mb-1">UI LIBRARIES</div>
                Material & Cupertino
              </div>
              <div className="bg-slate-950/80 p-3 rounded-xl border border-cyan-500/30 text-white font-bold">
                <div className="text-cyan-300 text-xs mb-1">BUILDING BLOCKS</div>
                Widget Layer
              </div>
              <div className="bg-slate-950/80 p-3 rounded-xl border border-cyan-500/30 text-white font-bold">
                <div className="text-cyan-300 text-xs mb-1">LAYOUT ENGINE</div>
                Rendering Tree
              </div>
              <div className="bg-slate-950/80 p-3 rounded-xl border border-cyan-500/30 text-white font-bold">
                <div className="text-cyan-300 text-xs mb-1">INTERACTION</div>
                Animation & Gestures
              </div>
            </div>
          </div>

          {/* TẦNG 2: ENGINE (C++) */}
          <div
            style={{ opacity: layer2Spring, transform: `translateY(${(1 - layer2Spring) * 30}px)` }}
            className="w-full bg-slate-900/90 rounded-2xl p-5 border-2 border-blue-500 shadow-[0_0_30px_rgba(59,130,246,0.25)] flex flex-col gap-3"
          >
            <div className="flex items-center justify-between border-b border-blue-500/30 pb-2">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-blue-500 text-white font-black flex items-center justify-center text-sm">
                  02
                </span>
                <span className="text-2xl font-black text-blue-300">
                  TẦNG ENGINE (C++ / C MÃ NGUỒN MỞ)
                </span>
              </div>
              <span className="text-xs font-mono px-3 py-1 rounded bg-blue-950 text-blue-200 border border-blue-400/50 font-bold">
                CORE PIPELINE
              </span>
            </div>

            <div className="grid grid-cols-3 gap-2 text-center font-mono text-sm">
              <div className="bg-slate-950/80 p-3 rounded-xl border border-blue-500/30 text-white font-bold">
                <div className="text-blue-400 text-xs mb-1">2D GRAPHICS</div>
                Impeller & Skia Canvas
              </div>
              <div className="bg-slate-950/80 p-3 rounded-xl border border-blue-500/30 text-white font-bold">
                <div className="text-blue-400 text-xs mb-1">VM & RUNTIME</div>
                Dart Virtual Machine
              </div>
              <div className="bg-slate-950/80 p-3 rounded-xl border border-blue-500/30 text-white font-bold">
                <div className="text-blue-400 text-xs mb-1">TYPOGRAPHY</div>
                HarfBuzz Text Layout
              </div>
            </div>
          </div>

          {/* TẦNG 3: EMBEDDER (PLATFORM) */}
          <div
            style={{ opacity: layer3Spring, transform: `translateY(${(1 - layer3Spring) * 30}px)` }}
            className="w-full bg-slate-900/90 rounded-2xl p-5 border-2 border-emerald-500 shadow-[0_0_30px_rgba(16,185,129,0.25)] flex flex-col gap-3"
          >
            <div className="flex items-center justify-between border-b border-emerald-500/30 pb-2">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-emerald-500 text-slate-950 font-black flex items-center justify-center text-sm">
                  03
                </span>
                <span className="text-2xl font-black text-emerald-300">
                  TẦNG EMBEDDER (NATIVE SHELL GIAO TIẾP OS)
                </span>
              </div>
              <span className="text-xs font-mono px-3 py-1 rounded bg-emerald-950 text-emerald-200 border border-emerald-400/50 font-bold">
                HARDWARE BINDING
              </span>
            </div>

            <div className="grid grid-cols-4 gap-2 text-center font-mono text-sm">
              <div className="bg-slate-950/80 p-3 rounded-xl border border-emerald-500/30 text-white font-bold">
                iOS Swift / ObjC
              </div>
              <div className="bg-slate-950/80 p-3 rounded-xl border border-emerald-500/30 text-white font-bold">
                Android Kotlin / Java
              </div>
              <div className="bg-slate-950/80 p-3 rounded-xl border border-emerald-500/30 text-white font-bold">
                Web CanvasKit
              </div>
              <div className="bg-slate-950/80 p-3 rounded-xl border border-emerald-500/30 text-white font-bold">
                Windows C++ Shell
              </div>
            </div>
          </div>
        </div>

        {/* Callout */}
        <div className="bg-gradient-to-r from-cyan-950 via-slate-900 to-emerald-950 p-4 rounded-2xl border border-cyan-400/40 flex items-center justify-between">
          <div className="text-base font-bold text-slate-200">
            💡 <span className="text-cyan-300 font-black">Khả năng mở rộng không giới hạn:</span> Muốn đưa Flutter lên hệ điều hành mới (ví dụ tủ lạnh, ô tô)? Chỉ cần viết lại tầng Embedder!
          </div>
        </div>
      </div>

      {/* Subtitle Box */}
      <SubtitleBox subtitleText={subtitleText} durationInFrames={durationInFrames} />
    </div>
  );
};
