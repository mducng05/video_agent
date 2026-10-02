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

  const badgeScale = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 120 },
  });

  const p1Y = spring({
    frame: frame - 6,
    fps,
    from: 30,
    to: 0,
    config: { damping: 16, stiffness: 100 },
  });
  const p2Y = spring({
    frame: frame - 14,
    fps,
    from: 30,
    to: 0,
    config: { damping: 16, stiffness: 100 },
  });
  const p3Y = spring({
    frame: frame - 22,
    fps,
    from: 30,
    to: 0,
    config: { damping: 16, stiffness: 100 },
  });

  return (
    <AbsoluteFill className="flex flex-col items-center justify-center px-10 text-white">
      <Audio src={staticFile("audio/CloudExplainer/scene4_concept2.mp3")} />

      {/* Top Header Badge */}
      <div
        style={{ transform: `scale(${badgeScale})` }}
        className="flex items-center gap-3 rounded-full border border-emerald-500/40 bg-slate-900/80 px-8 py-3 backdrop-blur-xl shadow-lg"
      >
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
        <span className="text-2xl font-bold tracking-widest text-emerald-300 uppercase">
          MÔ HÌNH DỊCH VỤ DOANH NGHIỆP
        </span>
      </div>

      {/* 3 Modern Enterprise Service Pillars */}
      <div className="mt-8 flex w-full max-w-xl flex-col gap-4">
        {/* Pillar 1: Cloud Server */}
        <div
          style={{ transform: `translateY(${p1Y}px)` }}
          className="flex items-center justify-between rounded-2xl border border-slate-700/60 bg-slate-900/85 p-5 shadow-lg backdrop-blur-xl"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono font-bold text-lg">
              01
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">Cloud Server</h3>
              <p className="text-base text-slate-400">Máy chủ ảo hiệu năng cao, độc lập tài nguyên</p>
            </div>
          </div>
          <span className="rounded-lg bg-cyan-500/15 px-3 py-1 text-xs font-mono font-bold text-cyan-300">
            COMPUTE
          </span>
        </div>

        {/* Pillar 2: Cloud Storage */}
        <div
          style={{ transform: `translateY(${p2Y}px)` }}
          className="flex items-center justify-between rounded-2xl border border-slate-700/60 bg-slate-900/85 p-5 shadow-lg backdrop-blur-xl"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-400 font-mono font-bold text-lg">
              02
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">Cloud Storage</h3>
              <p className="text-base text-slate-400">Kho lưu trữ dữ liệu an toàn, mở rộng không giới hạn</p>
            </div>
          </div>
          <span className="rounded-lg bg-blue-500/15 px-3 py-1 text-xs font-mono font-bold text-blue-300">
            STORAGE
          </span>
        </div>

        {/* Pillar 3: Backup Solution */}
        <div
          style={{ transform: `translateY(${p3Y}px)` }}
          className="flex items-center justify-between rounded-2xl border border-slate-700/60 bg-slate-900/85 p-5 shadow-lg backdrop-blur-xl"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono font-bold text-lg">
              03
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">Sao Lưu Dự Phòng</h3>
              <p className="text-base text-slate-400">Backup tự động đa điểm, phòng ngừa rủi ro dữ liệu</p>
            </div>
          </div>
          <span className="rounded-lg bg-emerald-500/15 px-3 py-1 text-xs font-mono font-bold text-emerald-300">
            BACKUP & DR
          </span>
        </div>
      </div>

      {/* Subtitle */}
      <SubtitleBox
        text="Doanh nghiệp chỉ chi trả theo đúng nhu cầu sử dụng: từ máy chủ Cloud Server, lưu trữ Cloud Storage, đến hệ thống sao lưu dự phòng tự động."
        durationInFrames={280}
        highlightKeyword="chi trả theo đúng nhu cầu"
        className="mt-64"
      />
    </AbsoluteFill>
  );
};
