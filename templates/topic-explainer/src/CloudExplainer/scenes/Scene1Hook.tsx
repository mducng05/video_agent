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

  // Badge spring
  const badgeScale = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 100, mass: 0.8 },
  });

  // Title spring
  const titleY = spring({
    frame: frame - 6,
    fps,
    from: 60,
    to: 0,
    config: { damping: 14, stiffness: 90 },
  });
  const titleOpacity = interpolate(frame, [6, 20], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Floating Cloud Graphic
  const cloudScale = spring({
    frame: frame - 12,
    fps,
    config: { damping: 10, stiffness: 80 },
  });
  const floatOffset = Math.sin(frame / 12) * 15;
  const pulseGlow = interpolate(Math.sin(frame / 8), [-1, 1], [0.6, 1]);

  return (
    <AbsoluteFill className="flex flex-col items-center justify-center px-10 text-white">
      <Audio src={staticFile("audio/CloudExplainer/scene1_hook.mp3")} />

      {/* Top Badge */}
      <div
        style={{ transform: `scale(${badgeScale})` }}
        className="flex items-center gap-3 rounded-full border border-cyan-400/40 bg-cyan-500/10 px-8 py-3.5 backdrop-blur-md"
      >
        <span className="h-4 w-4 animate-ping rounded-full bg-cyan-400" />
        <span className="text-3xl font-black tracking-widest text-cyan-300 uppercase">
          HẠ TẦNG CÔNG NGHỆ 4.0
        </span>
      </div>

      {/* Center Visuals */}
      <div className="mt-10 flex flex-col items-center gap-6">
        {/* Floating Glowing Cloud Graphic */}
        <div
          style={{
            transform: `scale(${cloudScale}) translateY(${floatOffset}px)`,
          }}
          className="relative flex h-56 w-56 items-center justify-center rounded-3xl border-2 border-cyan-400/40 bg-gradient-to-br from-cyan-500/25 via-blue-600/20 to-indigo-600/15 p-6 shadow-[0_0_100px_rgba(34,211,238,0.5)] backdrop-blur-xl"
        >
          {/* Custom SVG Neon Cloud Icon with internal network nodes */}
          <svg
            viewBox="0 0 100 100"
            className="h-40 w-40 drop-shadow-[0_0_20px_rgba(34,211,238,0.8)]"
            fill="none"
          >
            <defs>
              <linearGradient id="cloudGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#22D3EE" />
                <stop offset="50%" stopColor="#38BDF8" />
                <stop offset="100%" stopColor="#6366F1" />
              </linearGradient>
            </defs>
            {/* Cloud Outline & Fill */}
            <path
              d="M32 72h42c9.4 0 17-7.6 17-17 0-8.8-6.7-16-15.3-16.9C74.3 27.2 64.9 20 53.5 20c-11.2 0-20.7 7-23.3 17.5C22.2 38.6 16 45.6 16 54c0 9.9 8.1 18 18 18h-2z"
              fill="url(#cloudGrad)"
              opacity="0.9"
            />
            {/* Network Nodes inside cloud */}
            <circle cx="36" cy="54" r="3.5" fill="#FFFFFF" />
            <circle cx="52" cy="42" r="3.5" fill="#FFFFFF" />
            <circle cx="68" cy="54" r="3.5" fill="#FFFFFF" />
            <line x1="36" y1="54" x2="52" y2="42" stroke="#FFFFFF" strokeWidth="2" opacity="0.8" />
            <line x1="52" y1="42" x2="68" y2="54" stroke="#FFFFFF" strokeWidth="2" opacity="0.8" />
            <line x1="36" y1="54" x2="68" y2="54" stroke="#FFFFFF" strokeWidth="2" opacity="0.6" />
          </svg>

          {/* Glowing orbital ring */}
          <div
            style={{ opacity: pulseGlow }}
            className="absolute inset-0 rounded-3xl border border-cyan-300/40"
          />
        </div>

        {/* Main Hook Titles */}
        <div
          style={{
            transform: `translateY(${titleY}px)`,
            opacity: titleOpacity,
          }}
          className="text-center"
        >
          <h1 className="text-8xl font-black tracking-tight leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
              CLOUD
            </span>{" "}
            LÀ GÌ?
          </h1>
          <p className="mt-4 text-4xl font-bold text-slate-200">
            Bí mật đằng sau mọi ứng dụng bạn đang dùng!
          </p>
        </div>
      </div>

      {/* Subtitle 1 line */}
      <SubtitleBox
        text="Bạn nghe người ta nhắc đến Cloud mỗi ngày, nhưng bạn có thực sự biết Cloud là gì không?"
        durationInFrames={152}
        highlightKeyword="Cloud"
        className="mt-64"
      />
    </AbsoluteFill>
  );
};
