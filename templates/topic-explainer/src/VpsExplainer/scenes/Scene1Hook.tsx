import React from "react";
import {
  AbsoluteFill,
  Audio,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { SubtitleBox } from "../components/SubtitleBox";

export const Scene1Hook: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const badgeScale = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 120 },
  });

  const cardScale = spring({
    frame: frame - 6,
    fps,
    config: { damping: 16, stiffness: 100 },
  });

  const floatY = Math.sin(frame / 15) * 8;
  const pulseOpacity = interpolate(Math.sin(frame / 10), [-1, 1], [0.4, 0.95]);

  return (
    <AbsoluteFill className="flex flex-col items-center justify-center px-10 text-white">
      <Audio src={staticFile("audio/VpsExplainer/scene1_hook.mp3")} />

      {/* Top Corporate Category Badge */}
      <div
        style={{ transform: `scale(${badgeScale})` }}
        className="flex items-center gap-3 rounded-full border border-cyan-500/40 bg-slate-900/80 px-8 py-3 backdrop-blur-xl shadow-lg"
      >
        <span className="h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
        <span className="text-2xl font-bold tracking-widest text-cyan-300 uppercase">
          HẠ TẦNG CLOUD SERVER
        </span>
      </div>

      {/* Center Architecture Presentation Card */}
      <div
        style={{
          transform: `scale(${cardScale}) translateY(${floatY}px)`,
        }}
        className="mt-10 flex w-full max-w-xl flex-col items-center rounded-3xl border border-slate-700/60 bg-gradient-to-b from-slate-900/90 via-slate-950/95 to-slate-900/90 p-10 shadow-[0_20px_60px_rgba(0,0,0,0.7)] backdrop-blur-2xl"
      >
        {/* Sleek SVG Server Rack & Cloud Bus Illustration */}
        <div className="relative flex h-48 w-full items-center justify-center">
          <svg viewBox="0 0 420 180" className="h-44 w-full" fill="none">
            <defs>
              <linearGradient id="vpsGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.2" />
                <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.2" />
              </linearGradient>
            </defs>

            {/* Background Grid Accent */}
            <line x1="40" y1="90" x2="380" y2="90" stroke="url(#vpsGlow)" strokeWidth="2" strokeDasharray="6 6" />

            {/* Left Box: Physical Server Rack */}
            <rect x="30" y="45" width="90" height="90" rx="10" fill="#0f172a" stroke="#0284c7" strokeWidth="2" />
            <line x1="40" y1="70" x2="110" y2="70" stroke="#334155" strokeWidth="2" />
            <line x1="40" y1="95" x2="110" y2="95" stroke="#334155" strokeWidth="2" />
            <circle cx="50" cy="58" r="3" fill="#22c55e" />
            <circle cx="60" cy="58" r="3" fill="#38bdf8" />
            <text x="75" y="120" fill="#94a3b8" fontSize="11" fontWeight="700" textAnchor="middle">DEDICATED</text>

            {/* Center Dynamic Target: VPS Virtual Slice */}
            <rect x="155" y="35" width="110" height="110" rx="14" fill="#0369a1" fillOpacity="0.2" stroke="#38bdf8" strokeWidth="2.5" />
            <circle cx="210" cy="72" r="18" fill="#0284c7" opacity={pulseOpacity} />
            <path d="M202 72h16M210 64v16" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
            <text x="210" y="112" fill="#ffffff" fontSize="15" fontWeight="900" textAnchor="middle">VPS SERVER</text>
            <text x="210" y="128" fill="#7dd3fc" fontSize="11" fontWeight="600" textAnchor="middle">Tài Nguyên Riêng</text>

            {/* Right Box: High-Speed Web / App */}
            <rect x="300" y="45" width="90" height="90" rx="10" fill="#0f172a" stroke="#0284c7" strokeWidth="2" />
            <circle cx="345" cy="75" r="14" fill="#0369a1" fillOpacity="0.4" />
            <path d="M338 75l5 5 10-10" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <text x="345" y="112" fill="#e2e8f0" fontSize="12" fontWeight="700" textAnchor="middle">APPS / WEB</text>
            <text x="345" y="126" fill="#94a3b8" fontSize="10" textAnchor="middle">Tối Ưu 100%</text>
          </svg>
        </div>

        {/* Corporate Big Headline */}
        <h1 className="mt-4 text-center text-5xl font-black tracking-tight text-white leading-tight">
          Máy Chủ Ảo VPS
        </h1>
        <p className="mt-2 text-center text-3xl font-extrabold tracking-wide text-cyan-400">
          Tối Ưu Hiệu Năng & Chi Phí
        </p>

        {/* Status bar */}
        <div className="mt-6 flex w-full items-center justify-between rounded-xl border border-slate-800 bg-slate-950/60 px-5 py-3 text-sm">
          <span className="font-semibold text-slate-400">Kiến Trúc Đám Mây Hiện Đại</span>
          <span className="rounded bg-cyan-500/20 px-2.5 py-1 font-bold text-cyan-300">ENTERPRISE TECH</span>
        </div>
      </div>

      {/* Subtitle */}
      <SubtitleBox
        text="Bạn muốn website hoặc ứng dụng chạy mượt mà, nhưng chi phí thuê máy chủ riêng lại quá đắt đỏ?"
        durationInFrames={175}
        highlightKeyword="máy chủ riêng"
        className="mt-64"
      />
    </AbsoluteFill>
  );
};
