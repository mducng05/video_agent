import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import { BrandHeader } from "../components/BrandHeader";
import { SubtitleBox } from "../components/SubtitleBox";

interface SceneProps {
  subtitleText: string;
  durationInFrames: number;
}

export const Scene3BTree: React.FC<SceneProps> = ({
  subtitleText,
  durationInFrames,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleSpring = spring({ frame, fps, config: { damping: 14, stiffness: 100 } });
  const treeSpring = spring({ frame: frame - 12, fps, config: { damping: 14, stiffness: 90 } });
  const formulaSpring = spring({ frame: frame - 25, fps, config: { damping: 14, stiffness: 90 } });
  const codeSpring = spring({ frame: frame - 38, fps, config: { damping: 12, stiffness: 100 } });

  return (
    <div className="w-[1080px] h-[1920px] bg-gradient-to-br from-white via-sky-50 to-blue-100 text-slate-900 flex flex-col justify-between relative overflow-hidden select-none font-sans">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0284c710_1px,transparent_1px),linear-gradient(to_bottom,#0284c710_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-sky-300/30 rounded-full blur-3xl pointer-events-none" />

      {/* Brand Header */}
      <BrandHeader currentCategory="BƯỚC 2: CẤU TRÚC CHỈ MỤC" metricBadge="DATA STRUCTURE: B-TREE INDEX" />

      {/* Main Content */}
      <div className="w-[960px] mx-auto flex-1 flex flex-col justify-center gap-6 z-10 py-4">
        {/* Title */}
        <div style={{ transform: `scale(${titleSpring})` }} className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-100 text-emerald-800 font-extrabold text-lg border border-emerald-300">
            <span>🌲 CẤU TRÚC DỮ LIỆU TỐC ĐỘ CAO</span>
          </div>
          <h2 className="text-6xl font-black text-slate-950 tracking-tight">
            Sức Mạnh B-Tree & <span className="text-emerald-700">Composite Index</span>
          </h2>
          <p className="text-2xl font-bold text-slate-600">
            Tìm kiếm theo cấp số nhân O(log N) thay vì quét tuần tự
          </p>
        </div>

        {/* Visual B-Tree Pyramid Flow */}
        <div
          style={{ opacity: treeSpring, transform: `translateY(${(1 - treeSpring) * 30}px)` }}
          className="w-full bg-white/95 rounded-3xl p-6 border-3 border-emerald-200 shadow-xl flex flex-col items-center gap-4"
        >
          {/* Level 1: Root */}
          <div className="px-8 py-3 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-700 text-white font-mono font-black text-2xl shadow-md border-2 border-emerald-300">
            ROOT NODE: Keys [250.000 | 750.000]
          </div>

          {/* Branch connectors */}
          <div className="flex justify-around w-3/4 text-emerald-500 font-black text-xl">
            <span>↙</span>
            <span>↓</span>
            <span>↘</span>
          </div>

          {/* Level 2: Internal Branches */}
          <div className="grid grid-cols-3 gap-4 w-full text-center">
            <div className="p-3 rounded-xl bg-slate-100 border border-slate-300 font-mono text-lg font-bold text-slate-800">
              Branch: &lt; 250k
            </div>
            <div className="p-3 rounded-xl bg-emerald-50 border-2 border-emerald-500 font-mono text-lg font-black text-emerald-900 shadow">
              Target Branch: 250k-500k 🎯
            </div>
            <div className="p-3 rounded-xl bg-slate-100 border border-slate-300 font-mono text-lg font-bold text-slate-800">
              Branch: &gt; 500k
            </div>
          </div>

          {/* Level 3: Leaf Pointer */}
          <div className="w-full p-4 rounded-2xl bg-emerald-700 text-white font-mono text-center text-xl font-bold flex items-center justify-between px-6 shadow-md">
            <span>LEAF NODE (Con Trỏ Bộ Nhớ)</span>
            <span className="text-amber-300 font-black">CHỈ 3 BƯỚC NHẢY TRỰC TIẾP!</span>
          </div>
        </div>

        {/* Comparison Math Cards */}
        <div
          style={{ opacity: formulaSpring, transform: `translateY(${(1 - formulaSpring) * 30}px)` }}
          className="grid grid-cols-2 gap-5 w-full"
        >
          <div className="bg-red-50 rounded-2xl p-5 border-2 border-red-300 shadow">
            <div className="text-lg font-extrabold text-red-600 uppercase">Không Có Index</div>
            <div className="text-4xl font-black text-red-800 mt-1">O(N) = 5.000.000</div>
            <div className="text-base font-bold text-red-600 mt-1">Lần đọc tuần tự từng khối đĩa</div>
          </div>
          <div className="bg-emerald-50 rounded-2xl p-5 border-2 border-emerald-400 shadow">
            <div className="text-lg font-extrabold text-emerald-700 uppercase">Có B-Tree Index</div>
            <div className="text-4xl font-black text-emerald-800 mt-1">O(log₂ N) ≈ 3</div>
            <div className="text-base font-bold text-emerald-700 mt-1">Lần nhảy trỏ trực tiếp trong RAM</div>
          </div>
        </div>

        {/* Golden SQL Rule */}
        <div
          style={{ opacity: codeSpring, transform: `scale(${codeSpring})` }}
          className="w-full bg-slate-900 text-amber-300 rounded-2xl p-5 font-mono text-2xl font-bold shadow-xl border border-amber-500/50 flex items-center justify-between"
        >
          <div className="flex items-center gap-3">
            <span className="text-3xl">💡</span>
            <span>CREATE INDEX idx_user_status ON orders (user_id, status);</span>
          </div>
        </div>
      </div>

      {/* Subtitle Box */}
      <SubtitleBox subtitleText={subtitleText} durationInFrames={durationInFrames} />
    </div>
  );
};
