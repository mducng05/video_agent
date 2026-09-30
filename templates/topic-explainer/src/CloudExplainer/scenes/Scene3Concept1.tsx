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

export const Scene3Concept1: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Header Badge spring
  const badgeScale = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 100 },
  });

  // Main punchline card spring
  const quoteScale = spring({
    frame: frame - 6,
    fps,
    config: { damping: 12, stiffness: 90 },
  });

  // 3 Cloud Provider Cards
  const c1Scale = spring({
    frame: frame - 16,
    fps,
    config: { damping: 12, stiffness: 100 },
  });
  const c2Scale = spring({
    frame: frame - 22,
    fps,
    config: { damping: 12, stiffness: 100 },
  });
  const c3Scale = spring({
    frame: frame - 28,
    fps,
    config: { damping: 12, stiffness: 100 },
  });

  const pulseNetwork = interpolate(
    Math.sin(frame / 6),
    [-1, 1],
    [0.7, 1]
  );

  return (
    <AbsoluteFill className="flex flex-col items-center justify-center px-10 text-white">
      <Audio src={staticFile("audio/CloudExplainer/scene3_concept1.mp3")} />

      {/* Top Header Badge */}
      <div
        style={{ transform: `scale(${badgeScale})` }}
        className="flex items-center gap-3 rounded-full border-2 border-cyan-400/50 bg-cyan-500/15 px-8 py-3.5 backdrop-blur-md"
      >
        <span className="text-3xl font-black tracking-wider text-cyan-300 uppercase">
          💡 BẢN CHẤT CỐT LÕI
        </span>
      </div>

      {/* Center Content Group */}
      <div className="mt-8 flex w-full flex-col items-center gap-6">
        {/* Core Punchline Card */}
        <div
          style={{ transform: `scale(${quoteScale})` }}
          className="w-full max-w-xl rounded-3xl border-2 border-cyan-400/40 bg-gradient-to-br from-cyan-950/70 via-slate-900/90 to-blue-950/70 p-8 text-center shadow-[0_0_80px_rgba(34,211,238,0.3)] backdrop-blur-xl"
        >
          <div className="flex items-center justify-center gap-3 text-5xl">
            <span>☁️</span>
            <span className="text-4xl text-rose-400">❌</span>
            <span>➡️</span>
            <span>🏢🖥️</span>
          </div>
          <h2 className="mt-4 text-4xl font-black text-cyan-300 leading-tight">
            Cloud không hề ở trên trời!
          </h2>
          <p className="mt-3 text-3xl font-black text-amber-300">
            &quot;Đó chỉ là máy tính của người khác&quot;
          </p>
          <p className="mt-2 text-2xl font-medium text-slate-300">
            Đặt trong những Data Center siêu bảo mật toàn cầu
          </p>
        </div>

        {/* The Big 3 Providers */}
        <div className="grid w-full max-w-xl grid-cols-3 gap-4">
          {/* AWS */}
          <div
            style={{ transform: `scale(${c1Scale})` }}
            className="flex flex-col items-center rounded-3xl border-2 border-amber-500/40 bg-amber-950/30 p-5 text-center shadow-lg backdrop-blur-md"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-500/20 text-3xl font-black text-amber-400">
              AWS
            </div>
            <h3 className="mt-3 text-2xl font-black text-amber-300">Amazon</h3>
            <span className="mt-2 text-lg font-bold text-slate-400">Số 1 thị phần</span>
          </div>

          {/* Google Cloud */}
          <div
            style={{ transform: `scale(${c2Scale})` }}
            className="flex flex-col items-center rounded-3xl border-2 border-blue-500/40 bg-blue-950/30 p-5 text-center shadow-lg backdrop-blur-md"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/20 text-3xl font-black text-blue-400">
              GCP
            </div>
            <h3 className="mt-3 text-2xl font-black text-blue-300">Google</h3>
            <span className="mt-2 text-lg font-bold text-slate-400">AI &amp; Big Data</span>
          </div>

          {/* Microsoft Azure */}
          <div
            style={{ transform: `scale(${c3Scale})` }}
            className="flex flex-col items-center rounded-3xl border-2 border-sky-500/40 bg-sky-950/30 p-5 text-center shadow-lg backdrop-blur-md"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-500/20 text-3xl font-black text-sky-400">
              Azure
            </div>
            <h3 className="mt-3 text-2xl font-black text-sky-300">Microsoft</h3>
            <span className="mt-2 text-lg font-bold text-slate-400">Doanh nghiệp</span>
          </div>
        </div>

        {/* Global Network Indicator */}
        <div
          style={{ opacity: pulseNetwork }}
          className="flex items-center gap-3 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-6 py-2 text-xl font-bold text-cyan-200"
        >
          <span>🌐 Hàng triệu Data Center kết nối cáp quang ngầm</span>
        </div>
      </div>

      {/* Subtitle 1 line */}
      <SubtitleBox
        text="Thực chất, Cloud không hề ở trên trời! Đó chỉ là máy tính của người khác, được các ông lớn như Amazon, Google, Microsoft đặt trong những trung tâm dữ liệu khổng lồ."
        durationInFrames={316}
        highlightKeyword="máy tính"
        className="mt-64"
      />
    </AbsoluteFill>
  );
};
