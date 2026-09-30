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

export const Scene4Concept2: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Header Badge spring
  const badgeScale = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 100 },
  });

  // 3 Stacked Models (Bottom to top or Top to bottom)
  const l1Y = spring({
    frame: frame - 6,
    fps,
    from: 40,
    to: 0,
    config: { damping: 12, stiffness: 100 },
  });
  const l2Y = spring({
    frame: frame - 14,
    fps,
    from: 40,
    to: 0,
    config: { damping: 12, stiffness: 100 },
  });
  const l3Y = spring({
    frame: frame - 22,
    fps,
    from: 40,
    to: 0,
    config: { damping: 12, stiffness: 100 },
  });

  // Pay as you go badge
  const payScale = spring({
    frame: frame - 30,
    fps,
    config: { damping: 12, stiffness: 100 },
  });

  return (
    <AbsoluteFill className="flex flex-col items-center justify-center px-10 text-white">
      <Audio src={staticFile("audio/CloudExplainer/scene4_concept2.mp3")} />

      {/* Top Header Badge */}
      <div
        style={{ transform: `scale(${badgeScale})` }}
        className="flex items-center gap-3 rounded-full border-2 border-emerald-400/50 bg-emerald-500/15 px-8 py-3.5 backdrop-blur-md"
      >
        <span className="text-3xl font-black tracking-wider text-emerald-300 uppercase">
          ⚙️ 3 MÔ HÌNH DỊCH VỤ CỐT LÕI
        </span>
      </div>

      {/* Center 3 Architecture Layers */}
      <div className="mt-8 flex w-full max-w-xl flex-col gap-4">
        {/* Layer 1: SaaS */}
        <div
          style={{ transform: `translateY(${l1Y}px)` }}
          className="flex items-center justify-between rounded-3xl border-2 border-emerald-400/50 bg-gradient-to-r from-emerald-950/60 to-slate-900/90 p-5 shadow-xl backdrop-blur-xl"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500/25 text-3xl font-black text-emerald-300">
              SaaS
            </div>
            <div>
              <h3 className="text-3xl font-black text-emerald-200">Software as a Service</h3>
              <p className="text-xl font-medium text-slate-300">Google Drive, Gmail, Canva, Office 365</p>
            </div>
          </div>
          <span className="rounded-full bg-emerald-500/20 px-4 py-1.5 text-lg font-bold text-emerald-300">
            Dùng ngay
          </span>
        </div>

        {/* Layer 2: PaaS */}
        <div
          style={{ transform: `translateY(${l2Y}px)` }}
          className="flex items-center justify-between rounded-3xl border-2 border-sky-400/50 bg-gradient-to-r from-sky-950/60 to-slate-900/90 p-5 shadow-xl backdrop-blur-xl"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-500/25 text-3xl font-black text-sky-300">
              PaaS
            </div>
            <div>
              <h3 className="text-3xl font-black text-sky-200">Platform as a Service</h3>
              <p className="text-xl font-medium text-slate-300">Firebase, Vercel, Heroku, App Engine</p>
            </div>
          </div>
          <span className="rounded-full bg-sky-500/20 px-4 py-1.5 text-lg font-bold text-sky-300">
            Chỉ viết code
          </span>
        </div>

        {/* Layer 3: IaaS */}
        <div
          style={{ transform: `translateY(${l3Y}px)` }}
          className="flex items-center justify-between rounded-3xl border-2 border-purple-400/50 bg-gradient-to-r from-purple-950/60 to-slate-900/90 p-5 shadow-xl backdrop-blur-xl"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-500/25 text-3xl font-black text-purple-300">
              IaaS
            </div>
            <div>
              <h3 className="text-3xl font-black text-purple-200">Infrastructure as a Service</h3>
              <p className="text-xl font-medium text-slate-300">Máy ảo EC2, Lưu trữ S3, Mạng VPC</p>
            </div>
          </div>
          <span className="rounded-full bg-purple-500/20 px-4 py-1.5 text-lg font-bold text-purple-300">
            Toàn quyền
          </span>
        </div>

        {/* Pay-as-you-go Banner */}
        <div
          style={{ transform: `scale(${payScale})` }}
          className="flex items-center justify-center gap-3 rounded-2xl border border-amber-400/50 bg-amber-500/15 py-3 shadow-lg"
        >
          <span className="text-3xl">💳</span>
          <span className="text-2xl font-black text-amber-300 uppercase tracking-wide">
            Pay-as-you-go: Dùng bao nhiêu — Trả bấy nhiêu
          </span>
        </div>
      </div>

      {/* Subtitle 1 line */}
      <SubtitleBox
        text="Bạn chỉ việc thuê tài nguyên qua Internet và trả tiền theo nhu cầu sử dụng. Từ máy ảo, cơ sở dữ liệu, cho đến những ứng dụng quen thuộc như Google Drive hay Gmail."
        durationInFrames={308}
        highlightKeyword="Internet"
        className="mt-64"
      />
    </AbsoluteFill>
  );
};
