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

export const Scene4Kafka: React.FC = () => {
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

  const pulse = interpolate(Math.sin(frame / 8), [-1, 1], [0.96, 1.04]);

  return (
    <AbsoluteFill className="flex flex-col items-center justify-center px-10 text-white">
      <Audio src={staticFile("audio/MicroservicesExplainer/scene4_kafka.mp3")} />

      {/* Top Header Badge */}
      <div
        style={{ transform: `scale(${titleScale})` }}
        className="flex items-center gap-4 rounded-full border-2 border-amber-400/80 bg-slate-900/90 px-10 py-4 shadow-[0_10px_40px_rgba(245,158,11,0.3)] backdrop-blur-2xl"
      >
        <span className="h-4 w-4 rounded-full bg-amber-400 shadow-[0_0_12px_#fbbf24] animate-pulse" />
        <span className="text-3xl font-black tracking-widest text-amber-300 uppercase">
          LAYER 3: KAFKA EVENT-DRIVEN BACKBONE
        </span>
      </div>

      {/* Center Architecture Container (960px Width) */}
      <div
        style={{ transform: `scale(${cardScale})` }}
        className="mt-8 flex w-full max-w-[960px] flex-col rounded-3xl border-2 border-amber-500/50 bg-gradient-to-b from-slate-900/95 via-slate-950/98 to-slate-900/95 p-9 shadow-2xl backdrop-blur-2xl"
      >
        {/* Title & Tag */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <h2 className="text-4xl font-black text-white">
            Apache Kafka <span className="text-amber-400">Event-Driven</span>
          </h2>
          <span className="rounded-xl border border-amber-400/40 bg-amber-500/20 px-4 py-1.5 text-base font-black text-amber-300">
            ASYNC STREAMING
          </span>
        </div>

        {/* 3 Step High-Speed Message Pipeline */}
        <div className="mt-6 grid grid-cols-3 gap-4">
          {/* Step 1 */}
          <div className="flex flex-col items-center rounded-2xl border-2 border-slate-700 bg-slate-900/80 p-5 text-center">
            <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-black text-slate-400">PRODUCER</span>
            <span className="mt-3 text-2xl font-black text-white">Events Sinh Ra</span>
            <span className="mt-1 text-lg font-bold text-slate-400">Order, Payment, Logs</span>
          </div>

          {/* Step 2 (Kafka Cluster - Pulsing) */}
          <div
            style={{ transform: `scale(${pulse})` }}
            className="flex flex-col items-center rounded-2xl border-2 border-amber-400 bg-amber-950/40 p-5 text-center shadow-[0_0_25px_rgba(245,158,11,0.25)]"
          >
            <span className="rounded-full bg-amber-500 text-slate-950 px-3 py-1 text-xs font-black animate-pulse">MESSAGE BROKER</span>
            <span className="mt-3 text-2xl font-black text-amber-300">Kafka Buffer</span>
            <span className="mt-1 text-lg font-bold text-slate-200">Triệu Message / Giây</span>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center rounded-2xl border-2 border-slate-700 bg-slate-900/80 p-5 text-center">
            <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-black text-slate-400">CONSUMERS</span>
            <span className="mt-3 text-2xl font-black text-white">Xử Lý Bất Đồng Bộ</span>
            <span className="mt-1 text-lg font-bold text-slate-400">Không Gây Nghẽn App</span>
          </div>
        </div>

        {/* Bottom Highlight Strip */}
        <div className="mt-6 flex w-full items-center justify-between rounded-2xl border border-amber-500/30 bg-amber-950/40 px-8 py-4">
          <div className="flex items-center gap-4">
            <span className="h-3.5 w-3.5 rounded-full bg-amber-400" />
            <span className="text-2xl font-black text-white">Triệt Tiêu 100% Nghẽn Cổ Chai Kiến Trúc</span>
          </div>
          <span className="text-xl font-extrabold text-amber-300">ZERO DATA LOSS</span>
        </div>
      </div>

      {/* Massive Readable Subtitle */}
      <SubtitleBox
        text="Trục xương sống chính là kiến trúc hướng sự kiện Kafka: đệm hàng triệu message mỗi giây, xử lý bất đồng bộ triệt để, xóa tan mọi nguy cơ nghẽn cổ chai."
        durationInFrames={265}
        highlightKeyword="hướng sự kiện Kafka"
        className="mt-40"
      />
    </AbsoluteFill>
  );
};
