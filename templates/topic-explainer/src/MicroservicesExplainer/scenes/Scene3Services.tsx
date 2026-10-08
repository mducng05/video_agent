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

export const Scene3Services: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleScale = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 120 },
  });

  const cardScale = spring({
    frame: frame - 6,
    fps,
    config: { damping: 16, stiffness: 100 },
  });

  const pulse = interpolate(Math.sin(frame / 8), [-1, 1], [0.97, 1.03]);

  return (
    <AbsoluteFill className="flex flex-col items-center justify-center px-10 text-white">
      <Audio src={staticFile("audio/MicroservicesExplainer/scene3_services.mp3")} />

      {/* Top Header Badge */}
      <div
        style={{ transform: `scale(${titleScale})` }}
        className="flex items-center gap-4 rounded-full border-2 border-cyan-400/80 bg-slate-900/90 px-10 py-4 shadow-[0_10px_40px_rgba(6,182,212,0.3)] backdrop-blur-2xl"
      >
        <span className="h-4 w-4 rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee] animate-pulse" />
        <span className="text-3xl font-black tracking-widest text-cyan-300 uppercase">
          LAYER 2: MICROSERVICES & REDIS CACHE
        </span>
      </div>

      {/* Center Deck (960px Width, High Readability) */}
      <div
        style={{ transform: `scale(${cardScale})` }}
        className="mt-8 flex w-full max-w-[960px] flex-col gap-6"
      >
        {/* Tier A: Microservices Cluster */}
        <div className="rounded-3xl border-2 border-slate-700/80 bg-gradient-to-b from-slate-900/95 via-slate-950/98 to-slate-900/95 p-8 shadow-2xl backdrop-blur-2xl">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <h2 className="text-3xl font-black text-white">Cụm Microservices Độc Lập</h2>
            <span className="rounded-xl bg-cyan-500/20 px-4 py-1.5 text-base font-black text-cyan-300">
              DECOUPLED SERVICES
            </span>
          </div>

          <div className="mt-5 grid grid-cols-3 gap-4">
            <div className="flex flex-col items-center rounded-2xl border-2 border-cyan-500/30 bg-slate-900/80 p-5 text-center">
              <span className="text-2xl font-black text-cyan-300">AUTH SERVICE</span>
              <span className="mt-2 text-lg font-bold text-slate-300">Xác thực Token JWT</span>
            </div>
            <div className="flex flex-col items-center rounded-2xl border-2 border-blue-500/30 bg-slate-900/80 p-5 text-center">
              <span className="text-2xl font-black text-blue-300">ORDER SERVICE</span>
              <span className="mt-2 text-lg font-bold text-slate-300">Xử lý Giỏ & Đơn hàng</span>
            </div>
            <div className="flex flex-col items-center rounded-2xl border-2 border-emerald-500/30 bg-slate-900/80 p-5 text-center">
              <span className="text-2xl font-black text-emerald-300">PAYMENT SERVICE</span>
              <span className="mt-2 text-lg font-bold text-slate-300">Cổng Thanh toán</span>
            </div>
          </div>
        </div>

        {/* Tier B: Redis In-Memory Cache (Huge Performance Impact) */}
        <div
          style={{ transform: `scale(${pulse})` }}
          className="flex items-center justify-between rounded-3xl border-2 border-rose-500/60 bg-gradient-to-r from-rose-950/70 via-slate-950/95 to-slate-900/95 p-8 shadow-[0_15px_50px_rgba(244,63,94,0.25)] backdrop-blur-2xl"
        >
          <div className="flex items-center gap-6">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-rose-500/20 text-rose-400 text-3xl font-black border border-rose-400/40">
              ⚡
            </div>
            <div>
              <h3 className="text-3xl font-black text-white">Redis In-Memory Cache</h3>
              <p className="mt-1 text-2xl font-bold text-slate-300">
                Phản hồi dữ liệu siêu tốc &lt; 5ms, giảm 85% tải Database vật lý
              </p>
            </div>
          </div>
          <span className="shrink-0 rounded-2xl border border-rose-400/50 bg-rose-500/20 px-6 py-3 text-2xl font-black text-rose-300">
            &lt; 5MS READ
          </span>
        </div>
      </div>

      {/* Massive Readable Subtitle */}
      <SubtitleBox
        text="Phía sau là các cụm Microservices chuyên biệt, kết hợp bộ nhớ đệm Redis Cache tốc độ cao giúp phản hồi dữ liệu tức thì dưới 5 mili giây."
        durationInFrames={226}
        highlightKeyword="Redis Cache tốc độ cao"
        className="mt-40"
      />
    </AbsoluteFill>
  );
};
