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

export const Scene2Problem: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Header Badge spring
  const badgeScale = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 100 },
  });

  // Problem Alert Card spring
  const cardScale = spring({
    frame: frame - 6,
    fps,
    config: { damping: 12, stiffness: 90 },
  });

  // 3 Pain Point Cards Stagger
  const item1X = spring({
    frame: frame - 15,
    fps,
    from: -60,
    to: 0,
    config: { damping: 14, stiffness: 100 },
  });
  const item2X = spring({
    frame: frame - 22,
    fps,
    from: 60,
    to: 0,
    config: { damping: 14, stiffness: 100 },
  });
  const item3Y = spring({
    frame: frame - 29,
    fps,
    from: 60,
    to: 0,
    config: { damping: 14, stiffness: 100 },
  });

  const warningPulse = interpolate(
    Math.sin(frame / 6),
    [-1, 1],
    [0.97, 1.03]
  );

  return (
    <AbsoluteFill className="flex flex-col items-center justify-center px-10 text-white">
      <Audio src={staticFile("audio/CloudExplainer/scene2_problem.mp3")} />

      {/* Top Header Badge */}
      <div
        style={{ transform: `scale(${badgeScale})` }}
        className="flex items-center gap-3 rounded-full border-2 border-rose-500/50 bg-rose-500/15 px-8 py-3.5 backdrop-blur-md"
      >
        <span className="text-3xl font-black tracking-wider text-rose-400 uppercase">
          ⚠️ THỜI KỲ TRƯỚC CLOUD: MÁY CHỦ VẬT LÝ
        </span>
      </div>

      {/* Center Content Group */}
      <div className="mt-8 flex w-full flex-col items-center gap-6">
        {/* Pain Banner */}
        <div
          style={{ transform: `scale(${cardScale})` }}
          className="w-full max-w-xl rounded-3xl border-2 border-amber-500/40 bg-gradient-to-r from-amber-500/15 via-slate-900/95 to-amber-500/15 p-8 text-center shadow-2xl backdrop-blur-xl"
        >
          <div className="text-6xl">🏢🔥</div>
          <h2 className="mt-3 text-4xl font-black text-amber-300 leading-tight">
            Mua máy chủ vật lý hàng trăm triệu!
          </h2>
          <p className="mt-2 text-2xl font-semibold text-slate-300">
            Chưa kịp có khách thì đã tốn cả đống tiền phần cứng
          </p>
        </div>

        {/* 3 Physical Pain Points */}
        <div className="grid w-full max-w-xl grid-cols-2 gap-5">
          {/* Card 1: Server Rack Cost */}
          <div
            style={{ transform: `translateX(${item1X}px)` }}
            className="flex flex-col items-center rounded-3xl border-2 border-red-500/40 bg-red-950/40 p-6 text-center shadow-xl backdrop-blur-md"
          >
            <div className="text-5xl">🖥️💸</div>
            <h3 className="mt-3 text-2xl font-black text-rose-300">Phần Cứng Đắt Đỏ</h3>
            <span className="mt-2 inline-flex items-center rounded-full bg-rose-500/25 px-4 py-1 text-xl font-bold text-rose-200">
              Chi phí ban đầu cực lớn
            </span>
          </div>

          {/* Card 2: 24/7 AC & Power */}
          <div
            style={{ transform: `translateX(${item2X}px)` }}
            className="flex flex-col items-center rounded-3xl border-2 border-amber-500/40 bg-amber-950/40 p-6 text-center shadow-xl backdrop-blur-md"
          >
            <div className="text-5xl">❄️⚡</div>
            <h3 className="mt-3 text-2xl font-black text-amber-300">Phòng Lạnh 24/7</h3>
            <span className="mt-2 inline-flex items-center rounded-full bg-amber-500/25 px-4 py-1 text-xl font-bold text-amber-200">
              Tiền điện & hạ tầng nặng
            </span>
          </div>
        </div>

        {/* Card 3: Maintenance Team */}
        <div
          style={{
            transform: `translateY(${item3Y}px) scale(${warningPulse})`,
          }}
          className="w-full max-w-xl flex items-center justify-between rounded-3xl border-2 border-rose-500/50 bg-rose-950/40 px-8 py-5 shadow-xl backdrop-blur-md"
        >
          <div className="flex items-center gap-4">
            <span className="text-5xl">👨‍💻🛠️</span>
            <div className="text-left">
              <h4 className="text-2xl font-black text-rose-200">Đội ngũ IT túc trực 24/7</h4>
              <p className="text-lg text-slate-300">Sự cố sập nguồn, cháy ổ cứng là mất ngủ</p>
            </div>
          </div>
          <span className="rounded-full bg-rose-500/30 px-4 py-1.5 text-lg font-black text-rose-300">
            Cạn kiệt tài nguyên
          </span>
        </div>
      </div>

      {/* Subtitle 1 line */}
      <SubtitleBox
        text="Ngày xưa, muốn chạy một website, công ty phải mua máy chủ vật lý hàng trăm triệu, thuê phòng máy lạnh 24/7 và một đội ngũ bảo trì túc trực."
        durationInFrames={265}
        highlightKeyword="máy chủ"
        className="mt-64"
      />
    </AbsoluteFill>
  );
};
