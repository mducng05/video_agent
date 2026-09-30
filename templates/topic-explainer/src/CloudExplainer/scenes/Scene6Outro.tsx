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

export const Scene6Outro: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Header Badge spring
  const badgeScale = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 100 },
  });

  // Summary Card spring
  const summaryScale = spring({
    frame: frame - 6,
    fps,
    config: { damping: 12, stiffness: 90 },
  });

  // Action Button spring
  const actionScale = spring({
    frame: frame - 18,
    fps,
    config: { damping: 10, stiffness: 110 },
  });

  const heartPulse = interpolate(
    Math.sin(frame / 5),
    [-1, 1],
    [0.9, 1.15]
  );

  return (
    <AbsoluteFill className="flex flex-col items-center justify-center px-10 text-white">
      <Audio src={staticFile("audio/CloudExplainer/scene6_outro.mp3")} />

      {/* Top Header Badge */}
      <div
        style={{ transform: `scale(${badgeScale})` }}
        className="flex items-center gap-3 rounded-full border-2 border-indigo-400/50 bg-indigo-500/15 px-8 py-3.5 backdrop-blur-md"
      >
        <span className="text-3xl font-black tracking-wider text-indigo-300 uppercase">
          🔥 KẾT LUẬN &amp; HỌC HỎI
        </span>
      </div>

      {/* Center Group */}
      <div className="mt-8 flex w-full max-w-xl flex-col items-center gap-6">
        {/* Core Lesson Card */}
        <div
          style={{ transform: `scale(${summaryScale})` }}
          className="w-full rounded-3xl border-2 border-cyan-400/40 bg-gradient-to-br from-cyan-950/70 via-slate-900/95 to-indigo-950/70 p-9 text-center shadow-[0_0_90px_rgba(34,211,238,0.4)] backdrop-blur-xl"
        >
          <div className="text-6xl">☁️👑</div>
          <h2 className="mt-4 text-4xl font-black text-cyan-300 leading-tight">
            Xương Sống Kỷ Nguyên Số!
          </h2>
          <p className="mt-3 text-2xl font-bold text-slate-200">
            Không có Cloud, sẽ không có Netflix, TikTok, ChatGPT hay Shopee mượt mà như hôm nay.
          </p>
        </div>

        {/* Call to Action Container */}
        <div
          style={{ transform: `scale(${actionScale})` }}
          className="flex w-full flex-col items-center gap-4 rounded-3xl border-2 border-rose-500/50 bg-gradient-to-r from-rose-950/40 via-slate-950/90 to-rose-950/40 p-7 shadow-2xl backdrop-blur-xl"
        >
          <div className="flex items-center gap-6">
            <span
              style={{ transform: `scale(${heartPulse})` }}
              className="text-6xl select-none"
            >
              ❤️
            </span>
            <span className="text-4xl font-black text-white">Thả Tim &amp; Follow Kênh</span>
          </div>

          <div className="flex items-center gap-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-3 font-black text-2xl text-white shadow-lg">
            <span>⚡ CƯỜNG IT</span>
            <span>•</span>
            <span>Đón xem video công nghệ mỗi ngày!</span>
          </div>
        </div>
      </div>

      {/* Subtitle 1 line */}
      <SubtitleBox
        text="Cloud đã thay đổi hoàn toàn cách thế giới công nghệ vận hành. Thả tim và follow kênh để đón xem những kiến thức thú vị tiếp theo nhé!"
        durationInFrames={240}
        highlightKeyword="công nghệ"
        className="mt-64"
      />
    </AbsoluteFill>
  );
};
