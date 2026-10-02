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

export const Scene3Concept: React.FC = () => {
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
    config: { damping: 15, stiffness: 100 },
  });

  const pulse = interpolate(Math.sin(frame / 8), [-1, 1], [0.85, 1.05]);

  return (
    <AbsoluteFill className="flex flex-col items-center justify-center px-10 text-white">
      <Audio src={staticFile("audio/VpsExplainer/scene3_concept.mp3")} />

      {/* Top Architecture Badge */}
      <div
        style={{ transform: `scale(${titleScale})` }}
        className="flex items-center gap-3 rounded-full border border-cyan-500/40 bg-slate-900/80 px-8 py-3 backdrop-blur-xl shadow-lg"
      >
        <span className="h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
        <span className="text-2xl font-bold tracking-widest text-cyan-300 uppercase">
          BẢN CHẤT CÔNG NGHỆ VIRTUALIZATION
        </span>
      </div>

      {/* Center Architecture Container */}
      <div
        style={{ transform: `scale(${cardScale})` }}
        className="mt-8 flex w-full max-w-2xl flex-col items-center rounded-3xl border border-cyan-500/30 bg-gradient-to-b from-slate-900/95 via-slate-950/98 to-slate-900/95 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.8)] backdrop-blur-2xl"
      >
        <h2 className="text-3xl font-black text-white">
          VPS: <span className="text-cyan-400">Virtual Private Server</span>
        </h2>
        <p className="mt-1 text-lg font-medium text-slate-400">
          Phân chia tài nguyên độc lập 100% bằng công nghệ ảo hóa
        </p>

        {/* 3 Isolated VPS Virtual Slices */}
        <div className="mt-6 grid grid-cols-3 gap-4 w-full">
          {[1, 2, 3].map((num) => {
            const isHighlighted = num === 2;
            return (
              <div
                key={num}
                style={{ transform: isHighlighted ? `scale(${pulse})` : undefined }}
                className={`flex flex-col items-center rounded-2xl border p-4 backdrop-blur-md transition-all ${
                  isHighlighted
                    ? "border-cyan-400 bg-cyan-950/40 shadow-[0_0_25px_rgba(34,211,238,0.25)]"
                    : "border-slate-700/60 bg-slate-900/60"
                }`}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/20 text-cyan-300 font-black text-lg">
                  VPS {num}
                </div>
                <span className="mt-3 text-base font-extrabold text-white">Dedicated</span>
                <div className="mt-2 flex flex-col gap-1 w-full text-center">
                  <span className="rounded bg-slate-800/80 px-2 py-1 text-xs font-semibold text-cyan-200">vCPU Riêng</span>
                  <span className="rounded bg-slate-800/80 px-2 py-1 text-xs font-semibold text-emerald-300">RAM Riêng</span>
                  <span className="rounded bg-slate-800/80 px-2 py-1 text-xs font-semibold text-amber-300">NVMe SSD</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Hypervisor Virtualization Layer */}
        <div className="mt-5 flex w-full items-center justify-center rounded-xl border border-cyan-400/40 bg-gradient-to-r from-cyan-950/80 via-blue-900/60 to-cyan-950/80 py-3 shadow-inner">
          <span className="text-base font-black tracking-wider text-cyan-200 uppercase">
            ⚡ LỚP ẢO HÓA HYPERVISOR KVM (CÔ LẬP TÀI NGUYÊN) ⚡
          </span>
        </div>

        {/* Physical Server Rack Foundation */}
        <div className="mt-3 flex w-full items-center justify-between rounded-xl border border-slate-700 bg-slate-950/80 px-6 py-3">
          <div className="flex items-center gap-3">
            <span className="h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
            <span className="text-base font-bold text-slate-200">Cụm Máy Chủ Vật Lý Enterprise</span>
          </div>
          <span className="text-sm font-semibold text-slate-400">Xeon / AMD EPYC Core</span>
        </div>
      </div>

      {/* Subtitle */}
      <SubtitleBox
        text="Giải pháp hoàn hảo chính là VPS - Máy chủ ảo riêng biệt, phân chia tài nguyên độc lập từ cụm máy chủ vật lý bằng công nghệ ảo hóa."
        durationInFrames={230}
        highlightKeyword="tài nguyên độc lập"
        className="mt-64"
      />
    </AbsoluteFill>
  );
};
