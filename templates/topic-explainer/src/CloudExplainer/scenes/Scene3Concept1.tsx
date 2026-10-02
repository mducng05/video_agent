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

export const Scene3Concept1: React.FC = () => {
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

  const ledPulse = interpolate(Math.sin(frame / 6), [-1, 1], [0.4, 1]);

  return (
    <AbsoluteFill className="flex flex-col items-center justify-center px-10 text-white">
      <Audio src={staticFile("audio/CloudExplainer/scene3_concept1.mp3")} />

      {/* Top Header Badge */}
      <div
        style={{ transform: `scale(${badgeScale})` }}
        className="flex items-center gap-3 rounded-full border border-cyan-500/40 bg-slate-900/80 px-8 py-3 backdrop-blur-xl shadow-lg"
      >
        <span className="h-2.5 w-2.5 rounded-full bg-cyan-400" />
        <span className="text-2xl font-bold tracking-widest text-cyan-300 uppercase">
          BẢN CHẤT CÔNG NGHỆ CLOUD
        </span>
      </div>

      {/* Center Corporate Architecture Card */}
      <div
        style={{ transform: `scale(${cardScale})` }}
        className="mt-8 flex w-full max-w-xl flex-col items-center rounded-3xl border border-slate-700/60 bg-gradient-to-b from-slate-900/90 via-slate-950/95 to-slate-900/90 p-8 shadow-2xl backdrop-blur-2xl"
      >
        {/* Sleek Minimalist Server Rack Architecture SVG */}
        <div className="relative flex h-40 w-full items-center justify-center">
          <svg viewBox="0 0 360 140" className="h-36 w-full" fill="none">
            {/* 3 Modern Rack Modules */}
            {[0, 1, 2].map((idx) => {
              const xOffset = 30 + idx * 105;
              return (
                <g key={idx}>
                  <rect
                    x={xOffset}
                    y="15"
                    width="90"
                    height="110"
                    rx="8"
                    fill="#0f172a"
                    stroke="#334155"
                    strokeWidth="1.5"
                  />
                  {/* Server blades */}
                  {[0, 1, 2, 3].map((slot) => (
                    <g key={slot}>
                      <rect
                        x={xOffset + 8}
                        y={26 + slot * 24}
                        width="74"
                        height="18"
                        rx="4"
                        fill="#1e293b"
                        stroke="#475569"
                        strokeWidth="1"
                      />
                      {/* Status LED */}
                      <circle
                        cx={xOffset + 16}
                        cy={35 + slot * 24}
                        r="2.5"
                        fill="#38bdf8"
                        opacity={ledPulse}
                      />
                      <line
                        x1={xOffset + 24}
                        y={35 + slot * 24}
                        x2={xOffset + 68}
                        y={35 + slot * 24}
                        stroke="#64748b"
                        strokeWidth="1.5"
                        strokeDasharray="2 2"
                      />
                    </g>
                  ))}
                </g>
              );
            })}
          </svg>
        </div>

        {/* Content Heading */}
        <h2 className="mt-4 text-center text-3xl font-extrabold text-white">
          Data Center Chuẩn Quốc Tế Tier 3
        </h2>
        <p className="mt-2 text-center text-lg text-slate-300">
          Hạ tầng máy chủ & lưu trữ tập trung, kết nối bảo mật tốc độ cao
        </p>

        {/* Technical Specs Tags */}
        <div className="mt-6 grid grid-cols-2 gap-3 w-full">
          <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-3 text-center">
            <span className="block text-xs font-mono text-slate-400">KẾT NỐI MẠNG</span>
            <span className="text-base font-bold text-cyan-400">10Gbps+ Redundant</span>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-3 text-center">
            <span className="block text-xs font-mono text-slate-400">BẢO MẬT & DỰ PHÒNG</span>
            <span className="text-base font-bold text-cyan-400">SLA 99.99%</span>
          </div>
        </div>
      </div>

      {/* Subtitle */}
      <SubtitleBox
        text="Về bản chất, Cloud là hạ tầng máy chủ và lưu trữ tập trung tại các Data Center chuẩn quốc tế, kết nối an toàn qua Internet tốc độ cao."
        durationInFrames={280}
        highlightKeyword="Data Center chuẩn quốc tế"
        className="mt-64"
      />
    </AbsoluteFill>
  );
};
