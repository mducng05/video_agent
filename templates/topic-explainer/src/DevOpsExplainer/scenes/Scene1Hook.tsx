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
  const pulseOpacity = interpolate(Math.sin(frame / 10), [-1, 1], [0.6, 1]);

  return (
    <AbsoluteFill className="flex flex-col items-center justify-center px-10">
      <Audio src={staticFile("audio/DevOpsExplainer/scene1_hook.mp3")} />

      {/* Top Corporate Category Badge */}
      <div
        style={{ transform: `scale(${badgeScale})` }}
        className="flex items-center gap-3 rounded-full border-2 border-cyan-300 bg-white/95 px-8 py-3 shadow-[0_8px_30px_rgba(14,165,233,0.2)] backdrop-blur-xl"
      >
        <span className="h-3 w-3 rounded-full bg-cyan-500 shadow-[0_0_10px_#06b6d4]" />
        <span className="text-2xl font-black tracking-widest text-cyan-800 uppercase">
          AI & DEVOPS AUTOMATION
        </span>
      </div>

      {/* Center Architecture Presentation Card (Clean White Glassmorphism) */}
      <div
        style={{
          transform: `scale(${cardScale}) translateY(${floatY}px)`,
        }}
        className="mt-10 flex w-full max-w-xl flex-col items-center rounded-3xl border-2 border-cyan-200/90 bg-white/95 p-10 shadow-[0_25px_60px_rgba(14,165,233,0.18)] backdrop-blur-2xl text-slate-900"
      >
        {/* Sleek SVG CI/CD Pipeline Diagram */}
        <div className="relative flex h-48 w-full items-center justify-center">
          <svg viewBox="0 0 420 180" className="h-44 w-full" fill="none">
            <defs>
              <linearGradient id="pipeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#0284c7" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.3" />
              </linearGradient>
            </defs>

            {/* Connecting Data Bus Line */}
            <line x1="40" y1="90" x2="380" y2="90" stroke="url(#pipeGrad)" strokeWidth="3" strokeDasharray="6 6" />

            {/* Step 1: Git Push */}
            <rect x="25" y="45" width="95" height="90" rx="14" fill="#f0f9ff" stroke="#0ea5e9" strokeWidth="2" />
            <circle cx="72" cy="72" r="14" fill="#0284c7" fillOpacity="0.15" />
            <path d="M66 76l6-6 6 6" stroke="#0284c7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <text x="72" y="112" fill="#0f172a" fontSize="13" fontWeight="800" textAnchor="middle">GIT PUSH</text>
            <text x="72" y="126" fill="#0284c7" fontSize="10" fontWeight="700" textAnchor="middle">Code Commit</text>

            {/* Step 2: Docker Build (Center Highlight) */}
            <rect x="155" y="35" width="110" height="110" rx="16" fill="#ecfeff" stroke="#06b6d4" strokeWidth="2.5" />
            <circle cx="210" cy="70" r="18" fill="#0891b2" opacity={pulseOpacity} />
            <rect x="202" y="65" width="16" height="10" rx="2" fill="#ffffff" />
            <text x="210" y="112" fill="#0891b2" fontSize="14" fontWeight="900" textAnchor="middle">DOCKER</text>
            <text x="210" y="128" fill="#475569" fontSize="11" fontWeight="700" textAnchor="middle">Auto Build</text>

            {/* Step 3: Kubernetes Production */}
            <rect x="300" y="45" width="95" height="90" rx="14" fill="#f0fdf4" stroke="#10b981" strokeWidth="2" />
            <circle cx="347" cy="72" r="14" fill="#10b981" fillOpacity="0.15" />
            <path d="M341 72l4 4 8-8" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <text x="347" y="112" fill="#0f172a" fontSize="13" fontWeight="800" textAnchor="middle">K8S PROD</text>
            <text x="347" y="126" fill="#059669" fontSize="10" fontWeight="700" textAnchor="middle">2 Phút Live</text>
          </svg>
        </div>

        {/* Corporate Headline */}
        <h1 className="mt-4 text-center text-5xl font-black tracking-tight text-slate-900 leading-tight">
          CI/CD Pipeline
        </h1>
        <p className="mt-2 text-center text-3xl font-extrabold tracking-wide text-cyan-600">
          Docker & Kubernetes Tự Động Hóa
        </p>

        {/* Status bar */}
        <div className="mt-6 flex w-full items-center justify-between rounded-xl border border-cyan-200 bg-cyan-50/70 px-5 py-3 text-sm">
          <span className="font-bold text-slate-700">Từ Git Push Đến Production</span>
          <span className="rounded-lg bg-cyan-600 px-3 py-1 font-black text-white text-xs">
            CHỈ TRONG 2 PHÚT
          </span>
        </div>
      </div>

      {/* Subtitle */}
      <SubtitleBox
        text="Deploy code lên production thủ công mất hàng giờ và dễ gây lỗi hệ thống? Đã đến lúc tự động hóa toàn diện với CI/CD Pipeline hiện đại."
        durationInFrames={275}
        highlightKeyword="tự động hóa toàn diện"
        className="mt-64"
      />
    </AbsoluteFill>
  );
};
