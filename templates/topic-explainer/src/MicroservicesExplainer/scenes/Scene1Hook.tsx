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

  const floatY = Math.sin(frame / 15) * 6;
  const pulse = interpolate(Math.sin(frame / 8), [-1, 1], [0.95, 1.05]);

  return (
    <AbsoluteFill className="flex flex-col items-center justify-center px-10 text-white">
      <Audio src={staticFile("audio/MicroservicesExplainer/scene1_hook.mp3")} />

      {/* Top Architectural Badge (Big & Bold) */}
      <div
        style={{ transform: `scale(${badgeScale})` }}
        className="flex items-center gap-4 rounded-full border-2 border-cyan-400/80 bg-slate-900/90 px-10 py-4 shadow-[0_10px_40px_rgba(6,182,212,0.3)] backdrop-blur-2xl"
      >
        <span className="h-4 w-4 rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee] animate-pulse" />
        <span className="text-3xl font-black tracking-widest text-cyan-300 uppercase">
          GIẢI PHẪU KIẾN TRÚC CLOUD NATIVE
        </span>
      </div>

      {/* Center Master HUD Deck (Wide 960px, Massive Content) */}
      <div
        style={{
          transform: `scale(${cardScale}) translateY(${floatY}px)`,
        }}
        className="mt-10 flex w-full max-w-[960px] flex-col items-center rounded-3xl border-2 border-slate-700/80 bg-gradient-to-b from-slate-900/95 via-slate-950/98 to-slate-900/95 p-10 shadow-[0_25px_70px_rgba(0,0,0,0.85)] backdrop-blur-3xl"
      >
        {/* Massive Headline */}
        <h1 className="text-center text-6xl font-black tracking-tight text-white leading-tight">
          HỆ THỐNG XỬ LÝ
        </h1>
        <p className="mt-2 text-center text-5xl font-black tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400">
          TRIỆU REQUEST / GIÂY
        </p>

        {/* 3 Bold Architectural Spec Tiles */}
        <div className="mt-8 grid grid-cols-3 gap-5 w-full">
          {/* Tile 1 */}
          <div className="flex flex-col items-center rounded-2xl border-2 border-cyan-500/40 bg-slate-900/80 p-6 text-center shadow-lg">
            <span className="text-5xl font-black text-cyan-300">1,000,000+</span>
            <span className="mt-3 text-2xl font-black text-white">Throughput</span>
            <span className="mt-1 text-lg font-bold text-slate-400">Req/s Tải Đỉnh</span>
          </div>

          {/* Tile 2 (Pulsing High-Impact Center) */}
          <div
            style={{ transform: `scale(${pulse})` }}
            className="flex flex-col items-center rounded-2xl border-2 border-emerald-400 bg-emerald-950/40 p-6 text-center shadow-[0_0_30px_rgba(52,211,153,0.25)]"
          >
            <span className="text-5xl font-black text-emerald-300">&lt; 5ms</span>
            <span className="mt-3 text-2xl font-black text-white">Độ Trễ Cực Thấp</span>
            <span className="mt-1 text-lg font-bold text-emerald-400">Sub-millisecond</span>
          </div>

          {/* Tile 3 */}
          <div className="flex flex-col items-center rounded-2xl border-2 border-amber-500/40 bg-slate-900/80 p-6 text-center shadow-lg">
            <span className="text-5xl font-black text-amber-300">ZERO</span>
            <span className="mt-3 text-2xl font-black text-white">Nghẽn Cổ Chai</span>
            <span className="mt-1 text-lg font-bold text-slate-400">Khả Năng Chịu Tải</span>
          </div>
        </div>

        {/* Pipeline Layer Tracker */}
        <div className="mt-7 flex w-full items-center justify-between rounded-2xl border-2 border-cyan-500/30 bg-slate-950/80 px-8 py-4">
          <span className="text-2xl font-black text-slate-300">
            NGINX GATEWAY <span className="text-cyan-400">➔</span> MICROSERVICES <span className="text-cyan-400">➔</span> KAFKA
          </span>
          <span className="rounded-xl bg-cyan-500/20 px-4 py-1.5 text-base font-black text-cyan-300">
            EVENT-DRIVEN
          </span>
        </div>
      </div>

      {/* Massive Readable Subtitle */}
      <SubtitleBox
        text="Làm thế nào để hệ thống xử lý hàng triệu request mỗi giây mà không hề nghẽn sập? Hãy cùng giải phẫu kiến trúc Microservices triệu request trên giây!"
        durationInFrames={245}
        highlightKeyword="triệu request trên giây"
        className="mt-40"
      />
    </AbsoluteFill>
  );
};
