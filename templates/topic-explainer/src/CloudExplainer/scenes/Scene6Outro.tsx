import React from "react";
import {
  AbsoluteFill,
  Audio,
  Img,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { SubtitleBox } from "../components/SubtitleBox";

export const Scene6Outro: React.FC = () => {
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

  const ctaScale = spring({
    frame: frame - 16,
    fps,
    config: { damping: 14, stiffness: 110 },
  });

  return (
    <AbsoluteFill className="flex flex-col items-center justify-center px-10 text-white">
      <Audio src={staticFile("audio/CloudExplainer/scene6_outro.mp3")} />

      {/* Top Header Badge */}
      <div
        style={{ transform: `scale(${badgeScale})` }}
        className="flex items-center gap-3 rounded-full border border-cyan-500/40 bg-slate-900/80 px-8 py-3 backdrop-blur-xl shadow-lg"
      >
        <span className="h-2.5 w-2.5 rounded-full bg-cyan-400" />
        <span className="text-2xl font-bold tracking-widest text-cyan-300 uppercase">
          GIẢI PHÁP HẠ TẦNG PWSOLUTIONS
        </span>
      </div>

      {/* Center Corporate Brand Showcase Card */}
      <div
        style={{ transform: `scale(${cardScale})` }}
        className="mt-8 flex w-full max-w-xl flex-col items-center rounded-3xl border border-slate-700/60 bg-gradient-to-b from-slate-900/95 via-slate-950/98 to-slate-900/95 p-8 shadow-[0_20px_70px_rgba(0,0,0,0.8)] backdrop-blur-2xl"
      >
        {/* Real PWS Logo Container */}
        <div className="flex h-20 w-full items-center justify-center rounded-2xl bg-white/5 border border-white/10 px-6 py-2 shadow-inner">
          <Img
            src={staticFile("pws-logo.png")}
            alt="PWS Logo"
            style={{ maxHeight: "48px", maxWidth: "100%", objectFit: "contain" }}
          />
        </div>

        {/* Corporate Motto */}
        <h2 className="mt-5 text-center text-3xl font-black text-white">
          PWSolutions Việt Nam
        </h2>
        <p className="mt-2 text-center text-lg font-medium text-slate-300">
          Đồng Hành Cùng Hạ Tầng Số Của Doanh Nghiệp
        </p>

        {/* 3 Core Pillars */}
        <div className="mt-5 flex flex-wrap justify-center gap-2">
          <span className="rounded-full bg-slate-800/80 border border-slate-700 px-3.5 py-1 text-xs font-semibold text-cyan-300">
            Cloud Server
          </span>
          <span className="rounded-full bg-slate-800/80 border border-slate-700 px-3.5 py-1 text-xs font-semibold text-cyan-300">
            Cloud Storage
          </span>
          <span className="rounded-full bg-slate-800/80 border border-slate-700 px-3.5 py-1 text-xs font-semibold text-cyan-300">
            Backup &amp; DR
          </span>
        </div>

        {/* Website & Fanpage Links */}
        <div
          style={{ transform: `scale(${ctaScale})` }}
          className="mt-6 flex w-full flex-col gap-2.5 rounded-2xl border border-cyan-500/30 bg-cyan-950/20 p-4 text-center"
        >
          <div className="flex items-center justify-between text-sm">
            <span className="text-slate-400">Trang chủ giải pháp:</span>
            <span className="font-mono font-bold text-cyan-300">pwsdata.vn</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-slate-400">Fanpage chính thức:</span>
            <span className="font-mono font-bold text-blue-300">facebook.com/pwsvn</span>
          </div>
        </div>
      </div>

      {/* Subtitle */}
      <SubtitleBox
        text="Khám phá giải pháp máy chủ và lưu trữ đám mây tối ưu cho doanh nghiệp tại pwsdata.vn. PWSolutions - Hạ tầng số vững chắc!"
        durationInFrames={260}
        highlightKeyword="pwsdata.vn"
        className="mt-64"
      />
    </AbsoluteFill>
  );
};
