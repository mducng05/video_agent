import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import { BrandHeader } from "../components/BrandHeader";
import { SubtitleBox } from "../components/SubtitleBox";

interface SceneProps {
  subtitleText: string;
  durationInFrames: number;
}

export const Scene3PairProgramming: React.FC<SceneProps> = ({
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
      <div className="absolute top-1/2 left-1/3 w-[650px] h-[650px] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none" />

      {/* Brand Header */}
      <BrandHeader currentCategory="09:30 SÁNG" metricBadge="AI PAIR PROGRAMMING" />

      {/* Main Content */}
      <div className="w-[980px] mx-auto flex-1 flex flex-col justify-center gap-6 z-10 py-2">
        {/* Title */}
        <div style={{ transform: `scale(${titleSpring})` }} className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-purple-950/90 border border-purple-400/50">
            <span className="text-2xl">⚡</span>
            <span className="text-xl font-black text-purple-300 tracking-wider">
              LẬP TRÌNH CÙNG COPILOT
            </span>
          </div>
          <h2 className="text-6xl font-black text-white tracking-tight">
            Cộng Sự Thông Minh <span className="text-purple-400">Ngồi Cạnh Bạn</span>
          </h2>
          <p className="text-2xl font-bold text-slate-300">
            Xóa sổ boilerplate, chỉ cần 1 phím Tab để nạp thuật toán tối ưu
          </p>
        </div>

        {/* AI Pair Programming Interactive Model */}
        <div
          style={{ opacity: modelSpring, transform: `scale(${modelSpring})` }}
          className="w-full bg-slate-900/90 rounded-3xl p-6 border-2 border-purple-500/60 shadow-[0_0_35px_rgba(168,85,247,0.3)] flex flex-col gap-4 font-mono"
        >
          <div className="flex items-center justify-between border-b border-purple-500/30 pb-2">
            <span className="text-lg font-black text-purple-300">
              LUỒNG TƯƠNG TÁC CODE THEO THỜI GIAN THỰC (INTERACTIVE FLOW)
            </span>
            <span className="text-xs px-2.5 py-1 rounded bg-purple-950 text-cyan-300 border border-purple-500/40">
              REALTIME COPILOT
            </span>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* Left: Dev Intent */}
            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-700 flex flex-col justify-between gap-3">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <span className="text-xs font-bold text-slate-400">ĐẦU VÀO CỦA DEVELOPER</span>
                <span className="text-xl">✍️</span>
              </div>
              <div className="space-y-2 font-mono text-sm text-purple-300 bg-slate-900/80 p-3 rounded-xl border border-purple-950">
                <p className="text-slate-400">// Tính tổng tiền giỏ hàng kèm giảm giá</p>
                <p className="text-white font-bold">function calculateCartTotal(cart, promo) &#123;</p>
                <p className="text-purple-400 text-xs italic animate-pulse">...đang chờ AI đề xuất...</p>
              </div>
              <p className="text-xs font-sans text-slate-400 font-bold">
                👉 Lập trình viên chỉ cần thể hiện ý niệm và kiến trúc
              </p>
            </div>

            {/* Right: AI Synthesis */}
            <div className="bg-gradient-to-b from-purple-950/80 to-indigo-950/80 p-5 rounded-2xl border-2 border-purple-400 flex flex-col justify-between gap-3 shadow-lg">
              <div className="flex items-center justify-between border-b border-purple-400/30 pb-2">
                <span className="text-xs font-bold text-amber-300">AI TỰ ĐỘNG ĐIỀN (PRESS TAB)</span>
                <span className="text-xl">🚀</span>
              </div>
              <div className="space-y-1.5 font-mono text-xs text-cyan-200 bg-slate-950 p-3 rounded-xl border border-cyan-500/40">
                <p className="text-emerald-400">✓ Kiểm tra null/undefined an toàn</p>
                <p className="text-emerald-400">✓ Áp dụng thuật toán O(N) tối ưu</p>
                <p className="text-emerald-400">✓ Tự sinh Regex chuẩn format</p>
                <p className="text-amber-300 font-bold mt-1">✓ Xong 30 dòng code trong 0.2 giây!</p>
              </div>
              <p className="text-xs font-sans text-purple-200 font-bold">
                ⚡ Giảm 90% lỗi cú pháp và thời gian gõ phím lặp lại
              </p>
            </div>
          </div>

          {/* Bottom Card */}
          <div className="bg-gradient-to-r from-purple-950 via-slate-900 to-indigo-950 p-4 rounded-2xl border border-purple-400/40 flex items-center justify-between font-sans">
            <span className="text-base font-bold text-white">
              🔥 <b>Không còn phải lên StackOverflow sao chép:</b> AI thấu hiểu toàn bộ context dự án của bạn!
            </span>
            <span className="text-xs font-mono font-black px-3 py-1.5 rounded-lg bg-purple-700 text-white">
              INSTANT FLOW
            </span>
          </div>
        </div>
      </div>

      {/* Subtitle Box */}
      <SubtitleBox subtitleText={subtitleText} durationInFrames={durationInFrames} />
    </div>
  );
};
