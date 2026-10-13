import React from "react";
import { Img, staticFile } from "remotion";

interface BrandHeaderProps {
  currentCategory: string;
  metricBadge?: string;
}

export const BrandHeader: React.FC<BrandHeaderProps> = ({
  currentCategory,
  metricBadge = "FLUTTER 3.X ARCHITECTURE",
}) => {
  return (
    <div className="w-full pt-14 pb-4 px-10 flex items-center justify-between z-20">
      {/* PWSolutions Official Logo & Brand */}
      <div className="flex items-center gap-4 bg-slate-900/90 border-2 border-cyan-500/40 rounded-2xl px-5 py-3 shadow-[0_0_25px_rgba(0,229,255,0.2)] backdrop-blur-md">
        <Img
          src={staticFile("pws-logo.png")}
          className="h-10 w-auto object-contain drop-shadow"
          alt="PWSolutions Logo"
        />
        <div className="flex flex-col">
          <span className="text-xl font-black tracking-wider text-cyan-300 font-sans">
            PWSolutions
          </span>
          <span className="text-xs font-bold text-slate-400 -mt-0.5 tracking-widest">
            pwsdata.vn
          </span>
        </div>
      </div>

      {/* Category / Architecture Model Badge */}
      <div className="flex items-center gap-3">
        <div className="bg-gradient-to-r from-cyan-950 to-blue-950 border border-cyan-400/50 rounded-2xl px-5 py-3 shadow-[0_0_20px_rgba(6,182,212,0.25)] flex items-center gap-2.5">
          <span className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_10px_#22d3ee]" />
          <span className="text-base font-black text-cyan-200 tracking-wider uppercase font-sans">
            {currentCategory}
          </span>
        </div>

        {metricBadge && (
          <div className="hidden sm:flex bg-slate-950/80 border border-slate-700/80 rounded-2xl px-4 py-3">
            <span className="text-xs font-mono font-bold text-cyan-400 tracking-wider">
              {metricBadge}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
