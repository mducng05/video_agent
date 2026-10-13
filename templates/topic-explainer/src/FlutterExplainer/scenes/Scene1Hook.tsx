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
  const hubSpring = spring({ frame: frame - 12, fps, config: { damping: 13, stiffness: 85 } });
  const pulseScale = 1 + Math.sin(frame / 12) * 0.03;

  const platforms = [
    { name: "iOS", icon: "🍎", tech: "ARM64 Native", color: "from-sky-500 to-blue-600" },
    { name: "Android", icon: "🤖", tech: "ARM64 Native", color: "from-emerald-500 to-teal-600" },
    { name: "Web", icon: "🌐", tech: "WebAssembly", color: "from-amber-500 to-orange-600" },
    { name: "Desktop", icon: "💻", tech: "Windows/Mac", color: "from-indigo-500 to-purple-600" },
    { name: "Embedded", icon: "🚗", tech: "BMW / Smart IoT", color: "from-rose-500 to-pink-600" },
  ];

  return (
    <div className="w-[1080px] h-[1920px] bg-gradient-to-b from-[#020814] via-[#05162b] to-[#020b18] text-white flex flex-col justify-between relative overflow-hidden select-none font-sans">
      {/* Blueprint Grid & Glow Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00e5ff12_1px,transparent_1px),linear-gradient(to_bottom,#00e5ff12_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-cyan-500/15 rounded-full blur-[140px] pointer-events-none" />

      {/* Brand Header */}
      <BrandHeader currentCategory="TỔNG QUAN FLUTTER" metricBadge="CROSS-PLATFORM HUB" />

      {/* Main Content Area */}
      <div className="w-[980px] mx-auto flex-1 flex flex-col justify-center gap-7 z-10 py-2">
        {/* Title Block */}
        <div style={{ transform: `scale(${titleSpring})` }} className="text-center space-y-3">
          <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-cyan-950/90 border border-cyan-400/60 shadow-[0_0_20px_rgba(6,182,212,0.4)]">
            <span className="w-3.5 h-3.5 rounded-full bg-cyan-400 animate-ping" />
            <span className="text-xl font-black text-cyan-300 tracking-wider">
              GOOGLE UI REVOLUTION
            </span>
          </div>

          <h1 className="text-6xl md:text-7xl font-black tracking-tight text-white leading-tight">
            FLUTTER LÀ GÌ? <br />
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(34,211,238,0.5)]">
              Vũ Khí Đa Nền Tảng Của Google
            </span>
          </h1>

          <p className="text-2xl font-bold text-slate-300">
            Chỉ 1 mã nguồn Dart duy nhất thống trị mọi màn hình
          </p>
        </div>

        {/* Central Model: Cross-Platform Hub */}
        <div
          style={{ opacity: hubSpring, transform: `scale(${hubSpring})` }}
          className="w-full bg-slate-900/85 backdrop-blur-2xl rounded-3xl p-7 border-2 border-cyan-500/50 shadow-[0_0_40px_rgba(6,182,212,0.25)] flex flex-col gap-6"
        >
          {/* Header of diagram */}
          <div className="flex items-center justify-between border-b border-cyan-500/30 pb-3">
            <div className="flex items-center gap-3">
              <span className="text-3xl">💠</span>
              <span className="text-2xl font-black text-cyan-300">
                MÔ HÌNH TRỤC ĐA NỀN TẢNG (HUB ARCHITECTURE)
              </span>
            </div>
            <span className="text-sm font-mono px-3 py-1 rounded bg-cyan-950 text-cyan-300 border border-cyan-500/40">
              1 CODEBASE
            </span>
          </div>

          {/* Core Engine Center */}
          <div
            style={{ transform: `scale(${pulseScale})` }}
            className="w-full py-5 px-6 rounded-2xl bg-gradient-to-r from-cyan-600 via-blue-600 to-sky-600 border-2 border-cyan-300 shadow-[0_0_30px_rgba(34,211,238,0.6)] flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-slate-950/70 flex items-center justify-center text-3xl font-black text-cyan-300 border border-cyan-400">
                🎯
              </div>
              <div>
                <h3 className="text-3xl font-black text-white">FLUTTER ENGINE CORE</h3>
                <p className="text-base font-bold text-cyan-100">
                  Dart Framework + Impeller Graphic Pipeline
                </p>
              </div>
            </div>
            <div className="text-right">
              <span className="text-xs font-mono font-black px-3 py-1.5 rounded-lg bg-slate-950/80 text-amber-300 border border-amber-400/50">
                WRITE ONCE, RUN EVERYWHERE
              </span>
            </div>
          </div>

          {/* Connection Beams to Targets */}
          <div className="grid grid-cols-5 gap-3">
            {platforms.map((p, idx) => (
              <div
                key={p.name}
                style={{
                  transform: `translateY(${Math.sin((frame + idx * 10) / 10) * 4}px)`,
                }}
                className="bg-slate-950/90 rounded-2xl p-4 border border-cyan-500/40 flex flex-col items-center text-center gap-2 hover:border-cyan-300 transition-all shadow-lg shadow-black/60"
              >
                <div className="text-4xl">{p.icon}</div>
                <span className="text-xl font-black text-white">{p.name}</span>
                <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-cyan-950/80 text-cyan-300 border border-cyan-500/30">
                  {p.tech}
                </span>
              </div>
            ))}
          </div>

          {/* Giant Value Banner */}
          <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-cyan-950 p-4 rounded-2xl border border-cyan-400/40 flex items-center justify-around">
            <div className="text-center">
              <div className="text-3xl font-black text-cyan-300">100%</div>
              <div className="text-xs font-bold text-slate-400">UI Pixel-Match</div>
            </div>
            <div className="h-10 w-px bg-cyan-500/30" />
            <div className="text-center">
              <div className="text-3xl font-black text-amber-300">120 FPS</div>
              <div className="text-xs font-bold text-slate-400">Impeller Render</div>
            </div>
            <div className="h-10 w-px bg-cyan-500/30" />
            <div className="text-center">
              <div className="text-3xl font-black text-emerald-400">-50%</div>
              <div className="text-xs font-bold text-slate-400">Chi Phí Nhân Sự</div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtitle Box */}
      <SubtitleBox subtitleText={subtitleText} durationInFrames={durationInFrames} />
    </div>
  );
};
