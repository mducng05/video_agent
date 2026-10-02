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
  const m2 = spring({ frame: frame - 10, fps, config: { damping: 12, stiffness: 100 } });
  const m3 = spring({ frame: frame - 16, fps, config: { damping: 12, stiffness: 100 } });

  return (
    <AbsoluteFill className="flex flex-col items-center justify-center px-10 text-white">
      <Audio src={staticFile("audio/VpsExplainer/scene5_benefits.mp3")} />

      {/* Top Header Badge */}
      <div
        style={{ transform: `scale(${titleScale})` }}
        className="flex items-center gap-3 rounded-full border border-emerald-400/50 bg-emerald-950/40 px-8 py-3 backdrop-blur-xl shadow-lg"
      >
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
        <span className="text-2xl font-bold tracking-widest text-emerald-300 uppercase">
          LỢI ÍCH DOANH NGHIỆP VƯỢT TRỘI
        </span>
      </div>

      {/* 3 Metric Value Cards */}
      <div className="mt-8 grid grid-cols-3 gap-5 w-full max-w-2xl">
        {/* Metric 1 */}
        <div
          style={{ transform: `scale(${m1})` }}
          className="flex flex-col items-center rounded-2xl border border-slate-700/60 bg-gradient-to-b from-slate-900/90 to-slate-950/95 p-6 shadow-xl backdrop-blur-xl text-center"
        >
          <span className="text-4xl font-black text-cyan-400 tracking-tight">&lt; 60s</span>
          <span className="mt-2 text-xl font-bold text-white">Khởi Tạo</span>
          <p className="mt-1 text-sm text-slate-400">Tự động kích hoạt ngay sau thanh toán</p>
        </div>

        {/* Metric 2 */}
        <div
          style={{ transform: `scale(${m2})` }}
          className="flex flex-col items-center rounded-2xl border border-slate-700/60 bg-gradient-to-b from-slate-900/90 to-slate-950/95 p-6 shadow-xl backdrop-blur-xl text-center"
        >
          <span className="text-4xl font-black text-emerald-400 tracking-tight">100%</span>
          <span className="mt-2 text-xl font-bold text-white">Full Root</span>
          <p className="mt-1 text-sm text-slate-400">Toàn quyền quản trị, cài đặt OS tùy chọn</p>
        </div>

        {/* Metric 3 */}
        <div
          style={{ transform: `scale(${m3})` }}
          className="flex flex-col items-center rounded-2xl border border-slate-700/60 bg-gradient-to-b from-slate-900/90 to-slate-950/95 p-6 shadow-xl backdrop-blur-xl text-center"
        >
          <span className="text-4xl font-black text-amber-400 tracking-tight">99.99%</span>
          <span className="mt-2 text-xl font-bold text-white">SLA Uptime</span>
          <p className="mt-1 text-sm text-slate-400">Hoạt động bền bỉ, hỗ trợ kỹ thuật 24/7</p>
        </div>
      </div>

      {/* Corporate Support Bar */}
      <div className="mt-6 flex w-full max-w-2xl items-center justify-between rounded-xl border border-slate-800 bg-slate-950/70 px-6 py-4">
        <div className="flex items-center gap-3">
          <span className="flex h-3 w-3 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-lg font-bold text-slate-200">Đội Ngũ Kỹ Sư Hệ Thống PWS Hỗ Trợ 24/7</span>
        </div>
        <span className="rounded bg-cyan-500/20 px-3 py-1 text-xs font-bold text-cyan-300">TỐI ƯU CHI PHÍ</span>
      </div>

      {/* Subtitle */}
      <SubtitleBox
        text="Toàn quyền quản trị root, khởi tạo tự động trong 60 giây, cam kết uptime 99,99% cùng đội ngũ kỹ thuật hỗ trợ 24/7."
        durationInFrames={235}
        highlightKeyword="uptime 99,99%"
        className="mt-64"
      />
    </AbsoluteFill>
  );
};
