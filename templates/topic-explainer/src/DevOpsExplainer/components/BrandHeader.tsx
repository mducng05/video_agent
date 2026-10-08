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
      className="z-50 flex items-center gap-4 rounded-full border-2 border-cyan-200/90 bg-white/90 px-6 py-3 shadow-[0_12px_40px_rgba(14,165,233,0.18)] backdrop-blur-2xl"
    >
      {/* PWS Logo in Clean Light Glass Box */}
      <div className="flex h-9 items-center justify-center overflow-hidden rounded-md px-1 bg-slate-900/5 border border-cyan-200/60">
        <Img
          src={staticFile("pws-logo.png")}
          alt="PWS Logo"
          style={{ height: "26px", objectFit: "contain" }}
        />
      </div>

      <div className="h-5 w-[1px] bg-slate-300" />

      {/* Brand Text & Domain */}
      <div className="flex items-center gap-2.5">
        <span className="text-2xl font-black tracking-wider text-slate-900">
          {channelName}
        </span>
        <span className="rounded-full bg-cyan-500/15 border border-cyan-400/40 px-3 py-0.5 text-xs font-bold tracking-widest text-cyan-800 uppercase">
          {subText}
        </span>
      </div>
    </div>
  );
};
