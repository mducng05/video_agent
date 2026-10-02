import React from "react";
import {
  AbsoluteFill,
  Audio,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { SubtitleBox } from "../components/SubtitleBox";

export const Scene5Benefits: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const badgeScale = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 120 },
  });

  const m1Scale = spring({
    frame: frame - 6,
    fps,
    config: { damping: 16, stiffness: 100 },
  });
  const m2Scale = spring({
    frame: frame - 14,
    fps,
    config: { damping: 16, stiffness: 100 },
  });
  const m3Scale = spring({
    frame: frame - 22,
    fps,
    config: { damping: 16, stiffness: 100 },
  });

  return (
    <AbsoluteFill className="flex flex-col items-center justify-center px-10 text-white">
      <Audio src={staticFile("audio/CloudExplainer/scene5_benefits.mp3")} />

      {/* Top Header Badge */}
      <div
        style={{ transform: `scale(${badgeScale})` }}
        className="flex items-center gap-3 rounded-full border border-cyan-500/40 bg-slate-900/80 px-8 py-3 backdrop-blur-xl shadow-lg"
      >
        <span className="h-2.5 w-2.5 rounded-full bg-cyan-400" />
        <span className="text-2xl font-bold tracking-widest text-cyan-300 uppercase">
          HIỆU QUẢ DOANH NGHIỆP (ROI)
        </span>
      </div>

      {/* 3 Executive Metric Cards */}
      <div className="mt-8 flex w-full max-w-xl flex-col gap-4">
        {/* Metric 1 */}
        <div
          style={{ transform: `scale(${m1Scale})` }}
          className="flex items-center justify-between rounded-2xl border border-slate-700/60 bg-gradient-to-r from-slate-900/90 via-slate-950/95 to-slate-900/90 p-6 shadow-xl backdrop-blur-xl"
        >
          <div>
            <span className="text-sm font-mono font-bold tracking-wider text-slate-400 uppercase">
              TỐI ƯU CHI PHÍ
            </span>
            <h3 className="mt-1 text-2xl font-bold text-white">Cắt Giảm Ngân Sách IT</h3>
            <p className="text-sm text-slate-400">Không phải bỏ vốn lớn đầu tư phần cứng</p>
          </div>
          <div className="text-right">
            <span className="text-5xl font-black tracking-tight text-cyan-400 font-mono">
              -60%
            </span>
            <span className="block text-xs font-mono text-cyan-300">OPEX Tiết Kiệm</span>
          </div>
        </div>

        {/* Metric 2 */}
        <div
          style={{ transform: `scale(${m2Scale})` }}
          className="flex items-center justify-between rounded-2xl border border-slate-700/60 bg-gradient-to-r from-slate-900/90 via-slate-950/95 to-slate-900/90 p-6 shadow-xl backdrop-blur-xl"
        >
          <div>
            <span className="text-sm font-mono font-bold tracking-wider text-slate-400 uppercase">
              TÍNH LINH HOẠT
            </span>
            <h3 className="mt-1 text-2xl font-bold text-white">Mở Rộng Tức Thì</h3>
            <p className="text-sm text-slate-400">Tăng giảm tài nguyên chỉ trong vài giây</p>
          </div>
          <div className="text-right">
            <span className="text-5xl font-black tracking-tight text-emerald-400 font-mono">
              &lt; 60s
            </span>
            <span className="block text-xs font-mono text-emerald-300">Triển Khai Tức Thì</span>
          </div>
        </div>

        {/* Metric 3 */}
        <div
          style={{ transform: `scale(${m3Scale})` }}
          className="flex items-center justify-between rounded-2xl border border-slate-700/60 bg-gradient-to-r from-slate-900/90 via-slate-950/95 to-slate-900/90 p-6 shadow-xl backdrop-blur-xl"
        >
          <div>
            <span className="text-sm font-mono font-bold tracking-wider text-slate-400 uppercase">
              ĐỘ SẴN SÀNG HỆ THỐNG
            </span>
            <h3 className="mt-1 text-2xl font-bold text-white">An Toàn Dữ Liệu</h3>
            <p className="text-sm text-slate-400">Hạ tầng dự phòng liên tục 24/7/365</p>
          </div>
          <div className="text-right">
            <span className="text-5xl font-black tracking-tight text-indigo-400 font-mono">
              99.99%
            </span>
            <span className="block text-xs font-mono text-indigo-300">Uptime SLA</span>
          </div>
        </div>
      </div>

      {/* Subtitle */}
      <SubtitleBox
        text="Tối ưu tới 60% chi phí vận hành, mở rộng tài nguyên linh hoạt trong vài giây, và đảm bảo an toàn dữ liệu doanh nghiệp liên tục 99,99%."
        durationInFrames={260}
        highlightKeyword="tối ưu tới 60% chi phí"
        className="mt-64"
      />
    </AbsoluteFill>
  );
};
