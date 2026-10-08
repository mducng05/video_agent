import React from "react";
import { Img, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig } from "remotion";

interface BrandHeaderProps {
  channelName?: string;
  subText?: string;
  metricTicker?: string;
}

export const BrandHeader: React.FC<BrandHeaderProps> = ({
  channelName = "PWSolutions",
  subText = "pwsdata.vn",
  metricTicker = "THROUGHPUT: 1,000,000+ REQ/S",
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const scale = spring({
    frame,
    fps,
    config: { damping: 16, stiffness: 120 },
  });

  const opacity = interpolate(frame, [0, 10], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        position: "absolute",
        top: "90px",
        left: "50%",
        transform: `translateX(-50%) scale(${scale})`,
        opacity,
      }}
      className="z-50 flex w-[960px] items-center justify-between rounded-2xl border border-slate-700/80 bg-slate-950/90 px-8 py-4 shadow-[0_15px_40px_rgba(0,0,0,0.8)] backdrop-blur-2xl"
    >
      {/* Brand Logo & Name */}
      <div className="flex items-center gap-4">
        <div className="flex h-11 items-center justify-center overflow-hidden rounded-lg px-2 bg-white/5 border border-white/10">
          <Img
            src={staticFile("pws-logo.png")}
            alt="PWS Logo"
            style={{ height: "30px", objectFit: "contain" }}
          />
        </div>

        <div className="h-6 w-[2px] bg-slate-700" />

        <div className="flex items-center gap-3">
          <span className="text-3xl font-black tracking-wider text-white">
            {channelName}
          </span>
          <span className="rounded-full bg-cyan-500/20 border border-cyan-400/40 px-3.5 py-1 text-sm font-extrabold tracking-widest text-cyan-300 uppercase">
            {subText}
          </span>
        </div>
      </div>

      {/* Live System Spec Ticker (Distinctive High-Throughput HUD Element) */}
      <div className="flex items-center gap-2.5 rounded-xl border border-emerald-500/40 bg-emerald-950/60 px-4 py-2">
        <span className="h-3 w-3 rounded-full bg-emerald-400 animate-ping" />
        <span className="text-base font-black tracking-wider text-emerald-300">
          {metricTicker}
        </span>
      </div>
    </div>
  );
};
