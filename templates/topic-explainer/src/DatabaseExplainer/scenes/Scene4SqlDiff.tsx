import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import { BrandHeader } from "../components/BrandHeader";
import { SubtitleBox } from "../components/SubtitleBox";

interface SceneProps {
  subtitleText: string;
  durationInFrames: number;
}

export const Scene4SqlDiff: React.FC<SceneProps> = ({
  subtitleText,
  durationInFrames,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleSpring = spring({ frame, fps, config: { damping: 14, stiffness: 100 } });
  const badBlockSpring = spring({ frame: frame - 10, fps, config: { damping: 14, stiffness: 90 } });
  const goodBlockSpring = spring({ frame: frame - 25, fps, config: { damping: 14, stiffness: 90 } });
  const takeawaySpring = spring({ frame: frame - 40, fps, config: { damping: 12, stiffness: 100 } });

  return (
    <div className="w-[1080px] h-[1920px] bg-gradient-to-br from-white via-sky-50 to-blue-100 text-slate-900 flex flex-col justify-between relative overflow-hidden select-none font-sans">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0284c710_1px,transparent_1px),linear-gradient(to_bottom,#0284c710_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
      <div className="absolute top-1/3 -left-20 w-96 h-96 bg-cyan-300/30 rounded-full blur-3xl pointer-events-none" />

      {/* Brand Header */}
      <BrandHeader currentCategory="BƯỚC 3: TỐI ƯU CÂU LỆNH SQL" metricBadge="CODE OPTIMIZATION: SELECT *" />

      {/* Main Content */}
      <div className="w-[960px] mx-auto flex-1 flex flex-col justify-center gap-6 z-10 py-4">
        {/* Title */}
        <div style={{ transform: `scale(${titleSpring})` }} className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-red-100 text-red-800 font-extrabold text-lg border border-red-300">
            <span>⚡ DIỆT TẬN GỐC SELECT * & LỖI N+1</span>
          </div>
          <h2 className="text-6xl font-black text-slate-950 tracking-tight">
            Tận Dụng <span className="text-blue-700">Covering Index</span>
          </h2>
          <p className="text-2xl font-bold text-slate-600">
            Không quét thừa cột • Lấy dữ liệu trực tiếp từ RAM
          </p>
        </div>

        {/* Code Diff Panel 1: Bad Query */}
        <div
          style={{ opacity: badBlockSpring, transform: `translateY(${(1 - badBlockSpring) * 30}px)` }}
          className="w-full bg-slate-950 rounded-3xl p-6 border-3 border-red-500 shadow-xl flex flex-col gap-3 font-mono"
        >
          <div className="flex items-center justify-between text-base border-b border-slate-800 pb-2">
            <span className="text-red-400 font-bold">❌ SAI LẦM PHỔ BIẾN: QUÉT DƯ THỪA</span>
            <span className="text-xs px-2.5 py-0.5 rounded bg-red-950 text-red-300 border border-red-700">
              HIGH OVERHEAD
            </span>
          </div>
          <div className="text-3xl font-black text-red-400 leading-relaxed">
            SELECT * FROM orders WHERE user_id = 99;
          </div>
          <div className="flex flex-wrap gap-2 pt-2 text-sm font-sans font-bold">
            <span className="px-3 py-1 rounded-lg bg-red-900/60 text-red-200 border border-red-700">
              ⚠️ Đọc cả 30 cột không cần thiết
            </span>
            <span className="px-3 py-1 rounded-lg bg-red-900/60 text-red-200 border border-red-700">
              ⚠️ Phình to băng thông mạng & RAM
            </span>
          </div>
        </div>

        {/* Code Diff Panel 2: Good Query */}
        <div
          style={{ opacity: goodBlockSpring, transform: `translateY(${(1 - goodBlockSpring) * 30}px)` }}
          className="w-full bg-slate-950 rounded-3xl p-6 border-3 border-emerald-400 shadow-2xl shadow-emerald-500/20 flex flex-col gap-3 font-mono"
        >
          <div className="flex items-center justify-between text-base border-b border-slate-800 pb-2">
            <span className="text-emerald-400 font-bold">✅ CHUẨN CHUYÊN GIA: CHỈ LẤY CỘT CẦN THIẾT</span>
            <span className="text-xs px-2.5 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-600">
              INDEX-ONLY SCAN
            </span>
          </div>
          <div className="text-3xl font-black text-emerald-300 leading-relaxed">
            SELECT id, total_amount, created_at <br />
            FROM orders WHERE user_id = 99;
          </div>
          <div className="flex flex-wrap gap-2 pt-2 text-sm font-sans font-bold">
            <span className="px-3 py-1 rounded-lg bg-emerald-900/60 text-emerald-200 border border-emerald-600">
              ⚡ Covering Index: Lấy dữ liệu ngay trong RAM
            </span>
            <span className="px-3 py-1 rounded-lg bg-emerald-900/60 text-emerald-200 border border-emerald-600">
              ⚡ 0 Disk I/O • Tiết kiệm 95% Network
            </span>
          </div>
        </div>

        {/* Golden Takeaway Card */}
        <div
          style={{ opacity: takeawaySpring, transform: `scale(${takeawaySpring})` }}
          className="w-full bg-white/95 rounded-2xl p-5 border-2 border-blue-300 shadow-md flex items-center justify-between"
        >
          <div className="flex items-center gap-4">
            <span className="text-4xl">💡</span>
            <div>
              <div className="text-xl font-black text-slate-900">
                QUY TẮC VÀNG COVERING INDEX
              </div>
              <p className="text-lg font-bold text-slate-600">
                Nếu Index chứa toàn bộ cột trong câu lệnh, Database không cần chạm vào Table Disk!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Subtitle Box */}
      <SubtitleBox subtitleText={subtitleText} durationInFrames={durationInFrames} />
    </div>
  );
};
