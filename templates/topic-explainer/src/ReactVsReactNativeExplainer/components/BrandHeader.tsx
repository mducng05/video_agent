import React from "react";
import { Img, staticFile } from "remotion";

interface BrandHeaderProps {
  currentCategory?: string;
  metricBadge?: string;
}

export const BrandHeader: React.FC<BrandHeaderProps> = ({
  currentCategory = "SO SÁNH CÔNG NGHỆ",
  metricBadge = "REACT JS VS REACT NATIVE",
}) => {
  return (
    <div className="w-[960px] mx-auto pt-10 pb-4 px-6 flex items-center justify-between border-b-2 border-orange-200/90 bg-white/95 backdrop-blur-md rounded-2xl shadow-lg shadow-orange-500/5">
      {/* Brand Logo & Name */}
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-xl bg-orange-50 p-1.5 shadow-sm border border-orange-200 flex items-center justify-center">
          <Img
            src={staticFile("pws-logo.png")}
            alt="PWS Logo"
            className="w-full h-full object-contain"
          />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <span className="text-3xl font-black tracking-tight text-slate-900">
              PWSolutions
            </span>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-orange-500 text-white font-black tracking-wider uppercase shadow-xs">
              TECH DUEL
            </span>
          </div>
          <p className="text-sm font-extrabold text-orange-600 tracking-wider">
            {currentCategory}
          </p>
        </div>
      </div>

      {/* Live Badge */}
      <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-gradient-to-r from-orange-600 to-amber-600 text-white shadow-md border border-orange-400">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-200 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-300"></span>
        </span>
        <span className="text-base font-black tracking-widest text-white uppercase">
          {metricBadge}
        </span>
      </div>
    </div>
  );
};
