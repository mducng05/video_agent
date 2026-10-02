import React from "react";
import {
  AbsoluteFill,
  Audio,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { SubtitleBox } from "../components/SubtitleBox";

export const Scene2Problem: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const badgeScale = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 120 },
  });

  const card1Y = spring({
    frame: frame - 6,
    fps,
    from: 30,
    to: 0,
    config: { damping: 16, stiffness: 100 },
  });
  const card2Y = spring({
    frame: frame - 14,
    fps,
    from: 30,
    to: 0,
    config: { damping: 16, stiffness: 100 },
  });
  const card3Y = spring({
    frame: frame - 22,
    fps,
    from: 30,
    to: 0,
    config: { damping: 16, stiffness: 100 },
  });

  return (
    <AbsoluteFill className="flex flex-col items-center justify-center px-10 text-white">
      <Audio src={staticFile("audio/CloudExplainer/scene2_problem.mp3")} />

      {/* Top Header Badge */}
      <div
        style={{ transform: `scale(${badgeScale})` }}
        className="flex items-center gap-3 rounded-full border border-amber-500/40 bg-amber-950/40 px-8 py-3 backdrop-blur-xl shadow-lg"
      >
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
        <span className="text-2xl font-bold tracking-widest text-amber-300 uppercase">
          THÁCH THỨC MÁY CHỦ VẬT LÝ
        </span>
      </div>

      {/* 3 Structured Corporate Burden Cards */}
      <div className="mt-8 flex w-full max-w-xl flex-col gap-4">
        {/* Card 1: High CAPEX */}
        <div
          style={{ transform: `translateY(${card1Y}px)` }}
          className="flex items-center justify-between rounded-2xl border border-slate-700/60 bg-slate-900/80 p-5 shadow-lg backdrop-blur-xl"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono font-bold text-lg">
              01
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">Chi Phí Phần Cứng Lớn</h3>
              <p className="text-base text-slate-400">Đầu tư ban đầu hàng trăm triệu mua Server</p>
            </div>
          </div>
          <span className="rounded-lg bg-amber-500/15 px-3 py-1 text-xs font-mono font-bold text-amber-300">
            CAPEX CAO
          </span>
        </div>

        {/* Card 2: 24/7 Overhead */}
        <div
          style={{ transform: `translateY(${card2Y}px)` }}
          className="flex items-center justify-between rounded-2xl border border-slate-700/60 bg-slate-900/80 p-5 shadow-lg backdrop-blur-xl"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500/10 border border-sky-500/30 text-sky-400 font-mono font-bold text-lg">
              02
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">Phòng Lạnh & Điện Năng</h3>
              <p className="text-base text-slate-400">Tiêu hao điện liên tục 24/7/365</p>
            </div>
          </div>
          <span className="rounded-lg bg-sky-500/15 px-3 py-1 text-xs font-mono font-bold text-sky-300">
            OPEX ĐẮT ĐỎ
          </span>
        </div>

        {/* Card 3: Maintenance & Risk */}
        <div
          style={{ transform: `translateY(${card3Y}px)` }}
          className="flex items-center justify-between rounded-2xl border border-slate-700/60 bg-slate-900/80 p-5 shadow-lg backdrop-blur-xl"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 font-mono font-bold text-lg">
              03
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">Vận Hành & Nhân Sự IT</h3>
              <p className="text-base text-slate-400">Cần đội ngũ túc trực xử lý sự cố tức thì</p>
            </div>
          </div>
          <span className="rounded-lg bg-rose-500/15 px-3 py-1 text-xs font-mono font-bold text-rose-300">
            RỦI RO CAO
          </span>
        </div>
      </div>

      {/* Subtitle */}
      <SubtitleBox
        text="Trước đây, doanh nghiệp phải tốn hàng trăm triệu mua máy chủ vật lý, chi phí phòng máy lạnh, điện năng và đội ngũ vận hành 24/7."
        durationInFrames={280}
        highlightKeyword="hàng trăm triệu"
        className="mt-64"
      />
    </AbsoluteFill>
  );
};
