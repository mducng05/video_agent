import React from "react";
import { Img, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig } from "remotion";

interface BrandHeaderProps {
  channelName?: string;
  subText?: string;
}

export const BrandHeader: React.FC<BrandHeaderProps> = ({
  channelName = "PWSolutions",
  subText = "pwsdata.vn",
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
        top: "130px",
        left: "50%",
        transform: `translateX(-50%) scale(${scale})`,
        opacity,
      }}
      className="z-50 flex items-center gap-4 rounded-full border border-slate-700/60 bg-slate-950/85 px-6 py-3 shadow-[0_12px_40px_rgba(0,0,0,0.8)] backdrop-blur-2xl"
    >
      {/* PWS Real Logo */}
      <div className="flex h-9 items-center justify-center overflow-hidden rounded-md px-1 bg-white/5 border border-white/10">
        <Img
          src={staticFile("pws-logo.png")}
          alt="PWS Logo"
          style={{ height: "26px", objectFit: "contain" }}
        />
      </div>

      <div className="h-5 w-[1px] bg-slate-700/80" />

      {/* Brand Text & Domain */}
      <div className="flex items-center gap-2.5">
        <span className="text-2xl font-black tracking-wider text-white">
          {channelName}
        </span>
        <span className="rounded-full bg-cyan-500/15 border border-cyan-400/30 px-3 py-0.5 text-xs font-bold tracking-widest text-cyan-300 uppercase">
          {subText}
        </span>
      </div>
    </div>
  );
};
