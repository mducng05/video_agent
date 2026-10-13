import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import { BrandHeader } from "../components/BrandHeader";
import { SubtitleBox } from "../components/SubtitleBox";

interface SceneProps {
  subtitleText: string;
  durationInFrames: number;
}

export const Scene2DailyRoutine: React.FC<SceneProps> = ({
  subtitleText,
  durationInFrames,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleSpring = spring({ frame, fps, config: { damping: 14, stiffness: 100 } });
  const modelSpring = spring({ frame: frame - 10, fps, config: { damping: 13, stiffness: 90 } });

  return (
    <div className="w-[1080px] h-[1920px] bg-gradient-to-b from-[#060919] via-[#0d1330] to-[#070b1f] text-white flex flex-col justify-between relative overflow-hidden select-none font-sans">
      {/* AI Cyber Grid & Glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#a855f712_1px,transparent_1px),linear-gradient(to_bottom,#a855f712_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-[600px] h-[600px] bg-cyan-600/15 rounded-full blur-[130px] pointer-events-none" />

      {/* Brand Header */}
      <BrandHeader currentCategory="08:30 SÁNG" metricBadge="TASK & SPEC BREAKDOWN" />

      {/* Main Content */}
      <div className="w-[980px] mx-auto flex-1 flex flex-col justify-center gap-6 z-10 py-2">
        {/* Title */}
        <div style={{ transform: `scale(${titleSpring})` }} className="text-center space-y-2">
          <div className="inline-flex items-center gap-2.5 px-6 py-2 rounded-full bg-purple-950/90 border border-purple-400/50">
            <span className="text-2xl">🌅</span>
            <span className="text-xl font-black text-purple-300 tracking-wider">
              BẮT ĐẦU NGÀY MỚI LÚC 08:30
            </span>
          </div>
          <h2 className="text-6xl font-black text-white tracking-tight">
            Giải Mã Yêu Cầu <span className="text-purple-400">& Bóc Tách Jira Ticket</span>
          </h2>
          <p className="text-2xl font-bold text-slate-300">
            Không còn vò đầu đọc bản mô tả 20 trang — AI bóc tách trong 5 giây!
          </p>
        </div>

        {/* AI Task Breakdown Pipeline Model */}
        <div
          style={{ opacity: modelSpring, transform: `translateY(${(1 - modelSpring) * 30}px)` }}
          className="w-full bg-slate-900/90 rounded-3xl p-6 border-2 border-purple-500/60 shadow-[0_0_35px_rgba(168,85,247,0.3)] flex flex-col gap-4 font-mono"
        >
          <div className="flex items-center justify-between border-b border-purple-500/30 pb-2">
            <span className="text-lg font-black text-purple-300">
              SƠ ĐỒ XỬ LÝ NGHIỆP VỤ TỰ ĐỘNG (REQUIREMENT PIPELINE)
            </span>
            <span className="text-xs px-2.5 py-1 rounded bg-purple-950 text-cyan-300 border border-purple-500/40">
              AI PRODUCT COPILOT
            </span>
          </div>

          {/* 3 Pipeline Steps */}
          <div className="grid grid-cols-3 gap-3 text-center">
            {/* Step 1 */}
            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-700 flex flex-col justify-between gap-3">
              <div className="text-3xl">📄</div>
              <div>
                <span className="text-xs font-bold text-slate-400">BƯỚC 1: ĐẦU VÀO</span>
                <h4 className="text-lg font-black text-white mt-1">Raw Spec / PRD</h4>
                <p className="text-xs text-slate-300 font-sans mt-1">Tài liệu yêu cầu kinh doanh phức tạp từ khách hàng</p>
              </div>
              <span className="text-[11px] px-2 py-1 rounded bg-slate-900 text-rose-300 border border-rose-500/30">
                Chưa có cấu trúc
              </span>
            </div>

            {/* Step 2 */}
            <div className="bg-purple-950/70 p-4 rounded-2xl border-2 border-purple-400 flex flex-col justify-between gap-3 shadow-lg">
              <div className="text-3xl">🧠</div>
              <div>
                <span className="text-xs font-bold text-purple-300">BƯỚC 2: AI ANALYZER</span>
                <h4 className="text-lg font-black text-purple-200 mt-1">Edge Cases & Rules</h4>
                <p className="text-xs text-purple-100 font-sans mt-1">Chỉ ra lỗi tiềm ẩn, thanh toán trùng, rớt mạng, race condition</p>
              </div>
              <span className="text-[11px] px-2 py-1 rounded bg-purple-900 text-amber-300 border border-amber-400/50">
                100% Logic Bao Phủ
              </span>
            </div>

            {/* Step 3 */}
            <div className="bg-cyan-950/70 p-4 rounded-2xl border-2 border-cyan-400 flex flex-col justify-between gap-3 shadow-lg">
              <div className="text-3xl">🎯</div>
              <div>
                <span className="text-xs font-bold text-cyan-300">BƯỚC 3: ĐẦU RA</span>
                <h4 className="text-lg font-black text-cyan-200 mt-1">Jira Subtasks</h4>
                <p className="text-xs text-cyan-100 font-sans mt-1">Tự sinh Acceptance Criteria, Test Cases và Story Points chuẩn</p>
              </div>
              <span className="text-[11px] px-2 py-1 rounded bg-cyan-900 text-emerald-300 border border-emerald-400/50">
                Sẵn sàng Code ngay
              </span>
            </div>
          </div>

          {/* Golden Value Banner */}
          <div className="p-3.5 rounded-xl bg-purple-950/90 border border-purple-400/40 text-purple-200 text-sm font-bold flex items-center justify-between font-sans">
            <span>💡 <b>Tiết kiệm 80% thời gian họp:</b> Developer nắm rõ tường tận yêu cầu và rủi ro trước cả Product Owner!</span>
            <span className="text-xs font-mono font-black px-2.5 py-1 rounded bg-purple-800 text-amber-300">
              ZERO MISCOMMUNICATION
            </span>
          </div>
        </div>
      </div>

      {/* Subtitle Box */}
      <SubtitleBox subtitleText={subtitleText} durationInFrames={durationInFrames} />
    </div>
  );
};
