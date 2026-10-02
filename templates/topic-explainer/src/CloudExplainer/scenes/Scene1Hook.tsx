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

  // Badge animation
  const badgeScale = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 120 },
  });

  // Central Card entrance
  const cardScale = spring({
    frame: frame - 6,
    fps,
    config: { damping: 16, stiffness: 100 },
  });

  const floatY = Math.sin(frame / 15) * 8;

  // Pulse effect on network connection lines
  const pulseOpacity = interpolate(Math.sin(frame / 10), [-1, 1], [0.4, 0.9]);

  return (
    <AbsoluteFill className="flex flex-col items-center justify-center px-10 text-white">
      <Audio src={staticFile("audio/CloudExplainer/scene1_hook.mp3")} />

      {/* Top Corporate Category Badge */}
      <div
        style={{ transform: `scale(${badgeScale})` }}
        className="flex items-center gap-3 rounded-full border border-cyan-500/40 bg-slate-900/80 px-8 py-3 backdrop-blur-xl shadow-lg"
      >
        <span className="h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
        <span className="text-2xl font-bold tracking-widest text-cyan-300 uppercase">
          HẠ TẦNG SỐ DOANH NGHIỆP
        </span>
      </div>

      {/* Center Architecture Presentation Card */}
      <div
        style={{
          transform: `scale(${cardScale}) translateY(${floatY}px)`,
        }}
        className="mt-10 flex w-full max-w-xl flex-col items-center rounded-3xl border border-slate-700/60 bg-gradient-to-b from-slate-900/90 via-slate-950/95 to-slate-900/90 p-10 shadow-[0_20px_60px_rgba(0,0,0,0.7)] backdrop-blur-2xl"
      >
        {/* Minimalist Tech Geometric Diagram */}
        <div className="relative flex h-48 w-full items-center justify-center">
          <svg viewBox="0 0 400 180" className="h-44 w-full" fill="none">
            {/* Background Grid Lines */}
            <defs>
              <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0284c7" stopOpacity="0.2" />
                <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#0284c7" stopOpacity="0.2" />
              </linearGradient>
            </defs>

            {/* Connecting Data Bus */}
            <line x1="60" y1="90" x2="340" y2="90" stroke="url(#lineGrad)" strokeWidth="2" strokeDasharray="4 4" />
            <line x1="200" y1="30" x2="200" y2="150" stroke="#38bdf8" strokeWidth="2" opacity={pulseOpacity} />

            {/* Left Node: Enterprise Workloads */}
            <rect x="30" y="65" width="70" height="50" rx="8" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
            <text x="65" y="88" fill="#e2e8f0" fontSize="12" fontWeight="700" textAnchor="middle">ON-PREM</text>
            <text x="65" y="103" fill="#94a3b8" fontSize="10" textAnchor="middle">Vật lý</text>

            {/* Center Main Node: Cloud Backbone */}
            <rect x="150" y="45" width="100" height="90" rx="12" fill="#0369a1" fillOpacity="0.2" stroke="#38bdf8" strokeWidth="2" />
            <circle cx="200" cy="78" r="16" fill="#0284c7" />
            <path d="M193 81c0-4 3.5-7 7-7s7 3 7 7" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
            <text x="200" y="112" fill="#ffffff" fontSize="14" fontWeight="800" textAnchor="middle">CLOUD</text>
            <text x="200" y="125" fill="#bae6fd" fontSize="10" fontWeight="600" textAnchor="middle">Data Platform</text>

            {/* Right Node: Global Edge Access */}
            <rect x="300" y="65" width="70" height="50" rx="8" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
            <text x="335" y="88" fill="#e2e8f0" fontSize="12" fontWeight="700" textAnchor="middle">USERS</text>
            <text x="335" y="103" fill="#94a3b8" fontSize="10" textAnchor="middle">Toàn cầu</text>
          </svg>
        </div>

        {/* Corporate Big Headline */}
        <h1 className="mt-4 text-center text-5xl font-black tracking-tight text-white leading-tight">
          Cloud Computing
        </h1>
        <p className="mt-2 text-center text-3xl font-extrabold tracking-wide text-cyan-400">
          Thực Chất Là Gì?
        </p>

        {/* Status bar */}
        <div className="mt-6 flex w-full items-center justify-between rounded-xl border border-slate-800 bg-slate-950/60 px-5 py-3 text-sm">
          <span className="font-semibold text-slate-400">Định Nghĩa Chuẩn Doanh Nghiệp</span>
          <span className="rounded bg-cyan-500/20 px-2 py-0.5 font-bold text-cyan-300">B2B TECH</span>
        </div>
      </div>

      {/* Subtitle */}
      <SubtitleBox
        text="Điện toán đám mây - Cloud Computing - thực chất là gì và tại sao đang là hạ tầng sống còn của mọi doanh nghiệp?"
        durationInFrames={180}
        highlightKeyword="hạ tầng sống còn"
        className="mt-64"
      />
    </AbsoluteFill>
  );
};
