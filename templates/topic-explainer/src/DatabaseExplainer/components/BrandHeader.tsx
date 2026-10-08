import React from "react";
import { Img, staticFile } from "remotion";

interface BrandHeaderProps {
  currentCategory?: string;
  metricBadge?: string;
}

export const BrandHeader: React.FC<BrandHeaderProps> = ({
  currentCategory = "DATABASE OPTIMIZATION",
  metricBadge = "QUERY LATENCY: 10S ➔ 3.8MS",
}) => {
  return (
    <div className="w-[960px] mx-auto pt-10 pb-4 px-6 flex items-center justify-between border-b-2 border-blue-200/80 bg-white/80 backdrop-blur-md rounded-2xl shadow-lg shadow-sky-500/5">
      {/* Brand Logo & Name */}
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-xl bg-white p-1.5 shadow-md border border-blue-100 flex items-center justify-center">
          <Img
            src={staticFile("pws-logo.png")}
            alt="PWS Logo"
            className="w-full h-full object-contain"
          />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <span className="text-3xl font-black tracking-tight text-blue-900">
              PWSolutions
            </span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 font-bold border border-blue-300">
              PRO
            </span>
          </div>
          <p className="text-sm font-bold text-sky-600 tracking-wider">
            {currentCategory}
          </p>
        </div>
      </div>

      {/* Live Benchmark Ticker Badge */}
      <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-900 to-indigo-900 text-white shadow-md border border-blue-700">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
        </span>
        <span className="text-base font-black tracking-widest text-emerald-300 uppercase">
          {metricBadge}
        </span>
      </div>
    </div>
  );
};
