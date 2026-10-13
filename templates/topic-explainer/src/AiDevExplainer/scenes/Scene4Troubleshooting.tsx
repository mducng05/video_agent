import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import { BrandHeader } from "../components/BrandHeader";
import { SubtitleBox } from "../components/SubtitleBox";

interface SceneProps {
  subtitleText: string;
  durationInFrames: number;
}

export const Scene4Troubleshooting: React.FC<SceneProps> = ({
  subtitleText,
  durationInFrames,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleSpring = spring({ frame, fps, config: { damping: 14, stiffness: 100 } });
  const modelSpring = spring({ frame: frame - 10, fps, config: { damping: 13, stiffness: 90 } });

  return (
    <div className="w-[1080px] h-[1920px] bg-gradient-to-b from-[#060919] via-[#0d1330] to-[#070b1f] text-white flex flex-col justify-between relative overflow-hidden select-none font-sans">
      {/* AI Cyber Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#a855f712_1px,transparent_1px),linear-gradient(to_bottom,#a855f712_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-rose-600/15 rounded-full blur-[140px] pointer-events-none" />

      {/* Brand Header */}
      <BrandHeader currentCategory="11:00 TRƯA" metricBadge="ROOT CAUSE ANALYSIS" />

      {/* Main Content */}
      <div className="w-[980px] mx-auto flex-1 flex flex-col justify-center gap-6 z-10 py-2">
        {/* Title */}
        <div style={{ transform: `scale(${titleSpring})` }} className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-purple-950/90 border border-purple-400/50">
            <span className="text-2xl">🚨</span>
            <span className="text-xl font-black text-purple-300 tracking-wider">
              XỬ LÝ SỰ CỐ MÁY CHỦ
            </span>
          </div>
          <h2 className="text-6xl font-black text-white tracking-tight">
            Fix Bug Production: <span className="text-rose-400">3 Phút Thay Vì 3 Giờ!</span>
          </h2>
          <p className="text-2xl font-bold text-slate-300">
            AI giải mã chuỗi log hàng nghìn dòng và chỉ thẳng nguyên nhân cốt lõi
          </p>
        </div>

        {/* Root Cause Pipeline Model */}
        <div
          style={{ opacity: modelSpring, transform: `translateY(${(1 - modelSpring) * 30}px)` }}
          className="w-full bg-slate-900/90 rounded-3xl p-6 border-2 border-purple-500/60 shadow-[0_0_35px_rgba(168,85,247,0.3)] flex flex-col gap-4 font-mono"
        >
          <div className="flex items-center justify-between border-b border-purple-500/30 pb-2">
            <span className="text-lg font-black text-purple-300">
              QUY TRÌNH CHẨN ĐOÁN LỖI TỰ ĐỘNG (DIAGNOSTIC PIPELINE)
            </span>
            <span className="text-xs px-2.5 py-1 rounded bg-rose-950 text-rose-300 border border-rose-500/40">
              ZERO DOWNTIME
            </span>
          </div>

          <div className="grid grid-cols-3 gap-3 text-center">
            {/* Stage 1 */}
            <div className="bg-slate-950 p-4 rounded-2xl border border-rose-500/40 flex flex-col justify-between gap-3">
              <span className="text-3xl">⚠️</span>
              <div>
                <span className="text-xs font-bold text-rose-400">BƯỚC 1: LOG RÁC</span>
                <h4 className="text-lg font-black text-white mt-1">10,000 Dòng Log</h4>
                <p className="text-xs text-slate-300 font-sans mt-1">Lỗi NullPointer, Memory Leak, Timeout máy chủ hỗn loạn</p>
              </div>
              <span className="text-[11px] px-2 py-1 rounded bg-rose-950/80 text-rose-300 border border-rose-600/30">
                Mất 3 giờ đọc chay
              </span>
            </div>

            {/* Stage 2 */}
            <div className="bg-purple-950/70 p-4 rounded-2xl border-2 border-purple-400 flex flex-col justify-between gap-3 shadow-lg">
              <span className="text-3xl">🔬</span>
              <div>
                <span className="text-xs font-bold text-purple-300">BƯỚC 2: AI REASONING</span>
                <h4 className="text-lg font-black text-purple-200 mt-1">Root Cause Tracing</h4>
                <p className="text-xs text-purple-100 font-sans mt-1">Truy ngược Stack Trace, phát hiện rò rỉ kết nối Database</p>
              </div>
              <span className="text-[11px] px-2 py-1 rounded bg-purple-900 text-amber-300 border border-amber-400/50">
                Tìm ra trong 10 giây
              </span>
            </div>

            {/* Stage 3 */}
            <div className="bg-emerald-950/70 p-4 rounded-2xl border-2 border-emerald-400 flex flex-col justify-between gap-3 shadow-lg">
              <span className="text-3xl">✅</span>
              <div>
                <span className="text-xs font-bold text-emerald-300">BƯỚC 3: GIẢI PHÁP</span>
                <h4 className="text-lg font-black text-emerald-200 mt-1">Instant Hotfix Patch</h4>
                <p className="text-xs text-emerald-100 font-sans mt-1">Đề xuất đoạn code vá lỗi chuẩn kèm kịch bản kiểm thử</p>
              </div>
              <span className="text-[11px] px-2 py-1 rounded bg-emerald-900 text-white font-bold border border-emerald-400/50">
                Deploy trong 3 phút!
              </span>
            </div>
          </div>

          {/* Golden Badge */}
          <div className="bg-gradient-to-r from-rose-950 via-slate-900 to-emerald-950 p-4 rounded-2xl border border-purple-400/40 flex items-center justify-between font-sans">
            <span className="text-base font-bold text-white">
              🛡️ <b>Chấm dứt ác mộng trực On-Call nửa đêm:</b> Hệ thống phục hồi ngay lập tức trước khi người dùng phàn nàn!
            </span>
          </div>
        </div>
      </div>

      {/* Subtitle Box */}
      <SubtitleBox subtitleText={subtitleText} durationInFrames={durationInFrames} />
    </div>
  );
};
