import React from "react";
import {
  AbsoluteFill,
  Audio,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { SubtitleBox } from "../components/SubtitleBox";

export const Scene5Benefits: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleScale = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 120 },
  });

  const m1 = spring({ frame: frame - 4, fps, config: { damping: 12, stiffness: 100 } });
  const m2 = spring({ frame: frame - 12, fps, config: { damping: 12, stiffness: 100 } });
  const m3 = spring({ frame: frame - 20, fps, config: { damping: 12, stiffness: 100 } });

  return (
    <AbsoluteFill className="flex flex-col items-center justify-center px-10">
      <Audio src={staticFile("audio/DevOpsExplainer/scene5_benefits.mp3")} />

      {/* Top Header Badge */}
      <div
        style={{ transform: `scale(${titleScale})` }}
        className="flex items-center gap-3 rounded-full border-2 border-emerald-300 bg-white/95 px-8 py-3 shadow-[0_8px_30px_rgba(16,185,129,0.2)] backdrop-blur-xl"
      >
        <span className="h-3 w-3 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]" />
        <span className="text-2xl font-black tracking-widest text-emerald-900 uppercase">
          HIỆU QUẢ DOANH NGHIỆP ĐỘT PHÁ
        </span>
      </div>

      {/* 3 Metric Value Cards */}
      <div className="mt-8 grid grid-cols-3 gap-5 w-full max-w-2xl text-slate-900">
        {/* Metric 1 */}
        <div
          style={{ transform: `scale(${m1})` }}
          className="flex flex-col items-center rounded-2xl border-2 border-cyan-200 bg-white/95 p-6 shadow-[0_15px_35px_rgba(14,165,233,0.15)] backdrop-blur-xl text-center"
        >
          <span className="text-4xl font-black text-cyan-600 tracking-tight">&lt; 2 Phút</span>
          <span className="mt-2 text-xl font-black text-slate-900">Release Code</span>
          <p className="mt-1 text-sm text-slate-600">Từ git commit đến production sẵn sàng</p>
        </div>

        {/* Metric 2 */}
        <div
          style={{ transform: `scale(${m2})` }}
          className="flex flex-col items-center rounded-2xl border-2 border-emerald-200 bg-white/95 p-6 shadow-[0_15px_35px_rgba(16,185,129,0.15)] backdrop-blur-xl text-center"
        >
          <span className="text-4xl font-black text-emerald-600 tracking-tight">Zero</span>
          <span className="mt-2 text-xl font-black text-slate-900">Downtime</span>
          <p className="mt-1 text-sm text-slate-600">Không ngắt quãng trải nghiệm khách hàng</p>
        </div>

        {/* Metric 3 */}
        <div
          style={{ transform: `scale(${m3})` }}
          className="flex flex-col items-center rounded-2xl border-2 border-blue-200 bg-white/95 p-6 shadow-[0_15px_35px_rgba(59,130,246,0.15)] backdrop-blur-xl text-center"
        >
          <span className="text-4xl font-black text-blue-600 tracking-tight">99.99%</span>
          <span className="mt-2 text-xl font-black text-slate-900">SLA Uptime</span>
          <p className="mt-1 text-sm text-slate-600">Tiết kiệm 70% chi phí vận hành DevOps</p>
        </div>
      </div>

      {/* High-Impact Bar */}
      <div className="mt-6 flex w-full max-w-2xl items-center justify-between rounded-xl border border-cyan-300 bg-cyan-50/90 px-6 py-4">
        <div className="flex items-center gap-3">
          <span className="h-3 w-3 rounded-full bg-cyan-500 animate-pulse" />
          <span className="text-lg font-black text-cyan-950">Giải Phóng 100% Năng Suất Đội Ngũ Kỹ Sư</span>
        </div>
        <span className="rounded-lg bg-cyan-600 px-3 py-1 text-xs font-black text-white">B2B TECH</span>
      </div>

      {/* Subtitle */}
      <SubtitleBox
        text="Rút ngắn thời gian phát hành từ nhiều giờ xuống chỉ dưới 2 phút, đảm bảo hệ thống vận hành ổn định 99,99% và tối ưu chi phí vận hành."
        durationInFrames={258}
        highlightKeyword="dưới 2 phút"
        className="mt-64"
      />
    </AbsoluteFill>
  );
};
