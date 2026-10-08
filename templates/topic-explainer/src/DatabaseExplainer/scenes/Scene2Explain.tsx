import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import { BrandHeader } from "../components/BrandHeader";
import { SubtitleBox } from "../components/SubtitleBox";

interface SceneProps {
  subtitleText: string;
  durationInFrames: number;
}

export const Scene2Explain: React.FC<SceneProps> = ({
  subtitleText,
  durationInFrames,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleSpring = spring({ frame, fps, config: { damping: 14, stiffness: 100 } });
  const node1 = spring({ frame: frame - 10, fps, config: { damping: 14, stiffness: 90 } });
  const node2 = spring({ frame: frame - 22, fps, config: { damping: 14, stiffness: 90 } });
  const node3 = spring({ frame: frame - 34, fps, config: { damping: 14, stiffness: 90 } });
  const alertCard = spring({ frame: frame - 46, fps, config: { damping: 12, stiffness: 100 } });

  return (
    <div className="w-[1080px] h-[1920px] bg-gradient-to-br from-white via-sky-50 to-blue-100 text-slate-900 flex flex-col justify-between relative overflow-hidden select-none font-sans">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0284c710_1px,transparent_1px),linear-gradient(to_bottom,#0284c710_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
      <div className="absolute top-1/3 -left-20 w-96 h-96 bg-blue-300/30 rounded-full blur-3xl pointer-events-none" />

      {/* Brand Header */}
      <BrandHeader currentCategory="BƯỚC 1: PHÂN TÍCH THỰC THI" metricBadge="TOOL: EXPLAIN ANALYZE" />

      {/* Main Execution Plan Tree Visualizer */}
      <div className="w-[960px] mx-auto flex-1 flex flex-col justify-center gap-6 z-10 py-4">
        {/* Title */}
        <div style={{ transform: `scale(${titleSpring})` }} className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-100 text-blue-800 font-extrabold text-lg border border-blue-300">
            <span>🔍 NGUYÊN TẮC VÀNG TỐI ƯU</span>
          </div>
          <h2 className="text-6xl font-black text-slate-950 tracking-tight">
            Vạch Trần Bằng <span className="text-blue-700">EXPLAIN ANALYZE</span>
          </h2>
          <p className="text-2xl font-bold text-slate-600">
            Đừng đoán mò! Hãy để Database chỉ rõ điểm nghẽn
          </p>
        </div>

        {/* Tree Execution Nodes */}
        <div className="flex flex-col items-center w-full space-y-3">
          {/* Node 1: Command Bar */}
          <div
            style={{ opacity: node1, transform: `translateY(${(1 - node1) * 30}px)` }}
            className="w-full bg-slate-900 text-emerald-400 p-5 rounded-2xl font-mono text-2xl font-bold shadow-lg border border-slate-700 flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <span className="text-sky-400">$</span>
              <span>EXPLAIN (ANALYZE, BUFFERS) SELECT * FROM orders;</span>
            </div>
            <span className="text-xs px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-600">
              SQL CLI
            </span>
          </div>

          {/* Connector arrow */}
          <div className="w-1 h-6 bg-blue-400 rounded-full" />

          {/* Node 2: Query Planner Node */}
          <div
            style={{ opacity: node2, transform: `translateY(${(1 - node2) * 30}px)` }}
            className="w-full bg-white/95 rounded-2xl p-5 border-2 border-blue-300 shadow-md flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-600 text-white font-black flex items-center justify-center text-2xl shadow">
                ⚙️
              </div>
              <div>
                <h4 className="text-2xl font-black text-slate-900">Query Planner & Optimizer</h4>
                <p className="text-lg font-bold text-slate-500">Duyệt cây chiến lược thực thi</p>
              </div>
            </div>
            <div className="px-4 py-2 rounded-xl bg-amber-100 text-amber-900 font-extrabold text-lg border border-amber-300">
              COST: 185.420,00
            </div>
          </div>

          {/* Connector arrow */}
          <div className="w-1 h-6 bg-red-400 rounded-full" />

          {/* Node 3: Culprit Warning Node */}
          <div
            style={{ opacity: node3, transform: `translateY(${(1 - node3) * 30}px)` }}
            className="w-full bg-red-50/95 rounded-2xl p-6 border-3 border-red-500 shadow-xl flex items-center justify-between"
          >
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-red-700 font-black text-lg">
                <span className="text-2xl">🚨</span>
                <span>HUNG THỦ GÂY NGHẼN HỆ THỐNG</span>
              </div>
              <h3 className="text-3xl font-black text-red-950">
                Seq Scan on orders (Full Table Scan)
              </h3>
              <p className="text-xl font-bold text-red-800">
                Quét cạn từng dòng từ đầu tới cuối ổ đĩa không Index
              </p>
            </div>
            <div className="text-right pl-4 border-l-2 border-red-300">
              <div className="text-4xl font-black text-red-700">5.000.000</div>
              <span className="text-sm font-extrabold text-red-600 uppercase">Rows Examined</span>
            </div>
          </div>
        </div>

        {/* Diagnosis Bottom Card */}
        <div
          style={{ opacity: alertCard, transform: `scale(${alertCard})` }}
          className="w-full bg-gradient-to-r from-slate-900 to-blue-950 text-white rounded-2xl p-6 shadow-xl border border-blue-500 flex items-center justify-between"
        >
          <div className="flex items-center gap-4">
            <span className="text-4xl">⚠️</span>
            <div>
              <div className="text-xl font-bold text-sky-300">HẬU QUẢ VẬN HÀNH</div>
              <div className="text-2xl font-black text-white">
                Nghẽn Disk I/O • Tiêu hao 100% RAM Buffer • Phình to thời gian chờ
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtitle Box */}
      <SubtitleBox subtitleText={subtitleText} durationInFrames={durationInFrames} />
    </div>
  );
};
