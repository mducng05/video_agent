import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import { BrandHeader } from "../components/BrandHeader";
import { SubtitleBox } from "../components/SubtitleBox";

interface SceneProps {
  subtitleText: string;
  durationInFrames: number;
}

export const Scene2ArchitectureComparison: React.FC<SceneProps> = ({
  subtitleText,
  durationInFrames,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleSpring = spring({ frame, fps, config: { damping: 14, stiffness: 100 } });
  const col1Spring = spring({ frame: frame - 8, fps, config: { damping: 13, stiffness: 90 } });
  const col2Spring = spring({ frame: frame - 16, fps, config: { damping: 13, stiffness: 90 } });
  const col3Spring = spring({ frame: frame - 24, fps, config: { damping: 12, stiffness: 100 } });

  return (
    <div className="w-[1080px] h-[1920px] bg-gradient-to-b from-[#020814] via-[#05162b] to-[#020b18] text-white flex flex-col justify-between relative overflow-hidden select-none font-sans">
      {/* Blueprint Grid & Glow Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00e5ff12_1px,transparent_1px),linear-gradient(to_bottom,#00e5ff12_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
      <div className="absolute top-1/3 -right-24 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[130px] pointer-events-none" />

      {/* Brand Header */}
      <BrandHeader currentCategory="SO SÁNH KIẾN TRÚC" metricBadge="3-GEN COMPARISON" />

      {/* Main Content */}
      <div className="w-[980px] mx-auto flex-1 flex flex-col justify-center gap-6 z-10 py-2">
        {/* Title */}
        <div style={{ transform: `scale(${titleSpring})` }} className="text-center space-y-2">
          <div className="inline-flex items-center gap-2.5 px-6 py-2 rounded-full bg-cyan-950/90 border border-cyan-400/50">
            <span className="text-2xl">⚡</span>
            <span className="text-xl font-black text-cyan-300 tracking-wider">
              KHÁC BIỆT CỐT LÕI
            </span>
          </div>
          <h2 className="text-6xl font-black text-white tracking-tight">
            Cuộc Cách Mạng <span className="text-cyan-400">Kiến Trúc Đồ Họa</span>
          </h2>
          <p className="text-2xl font-bold text-slate-300">
            Tại sao Flutter không bao giờ bị nghẽn cổ chai hiệu năng?
          </p>
        </div>

        {/* 3-Architecture Comparison Model */}
        <div className="w-full grid grid-cols-3 gap-4">
          {/* Gen 1: WebView */}
          <div
            style={{ opacity: col1Spring, transform: `translateY(${(1 - col1Spring) * 35}px)` }}
            className="bg-slate-900/80 rounded-2xl p-5 border border-rose-500/40 flex flex-col justify-between gap-4 shadow-xl"
          >
            <div>
              <div className="flex items-center justify-between pb-2 border-b border-rose-500/20">
                <span className="text-xs font-mono font-black text-rose-400">GEN 1: HYBRID</span>
                <span className="text-xl">🐢</span>
              </div>
              <h4 className="text-2xl font-black text-white mt-2">WebView Container</h4>
              <p className="text-xs text-slate-400 font-semibold mt-1">Cordova / Ionic</p>
            </div>

            {/* Pipeline Stack */}
            <div className="flex flex-col gap-2 font-mono text-xs">
              <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-700 text-center text-slate-300 font-bold">
                HTML5 / JS App
              </div>
              <div className="text-center text-rose-400 font-black">⬇️ DOM Render</div>
              <div className="bg-rose-950/50 p-2.5 rounded-lg border border-rose-600/40 text-center text-rose-300 font-bold">
                WebKit / Chrome View
              </div>
              <div className="text-center text-rose-400 font-black">⬇️ Plugin Bridge</div>
              <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-700 text-center text-slate-300 font-bold">
                OS Hardware
              </div>
            </div>

            <div className="p-2.5 rounded-xl bg-rose-950/60 border border-rose-500/30 text-rose-300 text-xs font-bold text-center">
              ❌ Khựng giật khi cuộn, tải chậm
            </div>
          </div>

          {/* Gen 2: Bridge */}
          <div
            style={{ opacity: col2Spring, transform: `translateY(${(1 - col2Spring) * 35}px)` }}
            className="bg-slate-900/80 rounded-2xl p-5 border border-amber-500/40 flex flex-col justify-between gap-4 shadow-xl"
          >
            <div>
              <div className="flex items-center justify-between pb-2 border-b border-amber-500/20">
                <span className="text-xs font-mono font-black text-amber-400">GEN 2: JS BRIDGE</span>
                <span className="text-xl">⚠️</span>
              </div>
              <h4 className="text-2xl font-black text-white mt-2">React Native Cũ</h4>
              <p className="text-xs text-slate-400 font-semibold mt-1">Cầu nối JavaScript</p>
            </div>

            {/* Pipeline Stack */}
            <div className="flex flex-col gap-2 font-mono text-xs">
              <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-700 text-center text-slate-300 font-bold">
                JavaScript Thread
              </div>
              <div className="text-center text-amber-400 font-black">⬇️ JSON Serializer</div>
              <div className="bg-amber-950/60 p-2.5 rounded-lg border border-amber-500/50 text-center text-amber-300 font-black">
                ASYNC BRIDGE 🌉
              </div>
              <div className="text-center text-amber-400 font-black">⬇️ Native Calls</div>
              <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-700 text-center text-slate-300 font-bold">
                OEM Native Widgets
              </div>
            </div>

            <div className="p-2.5 rounded-xl bg-amber-950/60 border border-amber-500/30 text-amber-300 text-xs font-bold text-center">
              ⚠️ Nghẽn cổ chai khi dữ liệu lớn
            </div>
          </div>

          {/* Gen 3: Flutter Direct Canvas */}
          <div
            style={{ opacity: col3Spring, transform: `scale(${col3Spring})` }}
            className="bg-gradient-to-b from-cyan-950/90 to-blue-950/90 rounded-2xl p-5 border-2 border-cyan-400 shadow-[0_0_35px_rgba(6,182,212,0.4)] flex flex-col justify-between gap-4"
          >
            <div>
              <div className="flex items-center justify-between pb-2 border-b border-cyan-400/40">
                <span className="text-xs font-mono font-black text-cyan-300">GEN 3: DIRECT CANVAS</span>
                <span className="text-xl">🚀</span>
              </div>
              <h4 className="text-2xl font-black text-cyan-300 mt-2">Flutter Architecture</h4>
              <p className="text-xs text-cyan-200 font-semibold mt-1">Impeller / Skia Engine</p>
            </div>

            {/* Pipeline Stack */}
            <div className="flex flex-col gap-2 font-mono text-xs">
              <div className="bg-slate-950 p-2.5 rounded-lg border border-cyan-400 text-center text-cyan-200 font-bold">
                Dart UI Framework
              </div>
              <div className="text-center text-cyan-300 font-black">⬇️ Direct C++ Calls (0% Bridge)</div>
              <div className="bg-cyan-500 p-2.5 rounded-lg border border-white text-center text-slate-950 font-black shadow-lg">
                IMPELLER ENGINE 🎨
              </div>
              <div className="text-center text-cyan-300 font-black">⬇️ Metal / Vulkan Direct</div>
              <div className="bg-emerald-950 p-2.5 rounded-lg border border-emerald-400 text-center text-emerald-300 font-black">
                GPU PIXEL CANVAS
              </div>
            </div>

            <div className="p-2.5 rounded-xl bg-cyan-900/80 border border-cyan-300 text-cyan-100 text-xs font-black text-center shadow">
              ⚡ 120 FPS mượt mà không tì vết!
            </div>
          </div>
        </div>

        {/* Highlight Summary Card */}
        <div className="bg-gradient-to-r from-cyan-950 via-slate-900 to-blue-950 rounded-2xl p-4 border border-cyan-400/50 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-3xl">🎨</span>
            <div>
              <h5 className="text-xl font-black text-white">Flutter Như Một Trò Chơi 3D (Game Engine)</h5>
              <p className="text-sm font-semibold text-slate-300">
                Tự vẽ từng pixel trên Canvas như Unity, không phụ thuộc vào OEM Widget của hệ điều hành!
              </p>
            </div>
          </div>
          <span className="px-4 py-2 rounded-xl bg-cyan-500 text-slate-950 font-black text-sm tracking-wide">
            ZERO BRIDGE
          </span>
        </div>
      </div>

      {/* Subtitle Box */}
      <SubtitleBox subtitleText={subtitleText} durationInFrames={durationInFrames} />
    </div>
  );
};
