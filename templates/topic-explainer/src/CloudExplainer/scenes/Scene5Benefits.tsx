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

  // Header Badge spring
  const badgeScale = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 100 },
  });

  // Scale Hero Counter Card
  const heroScale = spring({
    frame: frame - 6,
    fps,
    config: { damping: 12, stiffness: 90 },
  });

  // Server Counter: interpolates from 1 to 1000
  const serverCount = Math.floor(
    interpolate(frame, [10, 45], [1, 1000], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    })
  );

  // 2 Side Benefit Cards
  const b1X = spring({
    frame: frame - 20,
    fps,
    from: -60,
    to: 0,
    config: { damping: 14, stiffness: 100 },
  });
  const b2X = spring({
    frame: frame - 26,
    fps,
    from: 60,
    to: 0,
    config: { damping: 14, stiffness: 100 },
  });

  return (
    <AbsoluteFill className="flex flex-col items-center justify-center px-10 text-white">
      <Audio src={staticFile("audio/CloudExplainer/scene5_benefits.mp3")} />

      {/* Top Header Badge */}
      <div
        style={{ transform: `scale(${badgeScale})` }}
        className="flex items-center gap-3 rounded-full border-2 border-amber-400/50 bg-amber-500/15 px-8 py-3.5 backdrop-blur-md"
      >
        <span className="text-3xl font-black tracking-wider text-amber-300 uppercase">
          🚀 SỨC MẠNH VƯỢT TRỘI
        </span>
      </div>

      {/* Center Group */}
      <div className="mt-8 flex w-full max-w-xl flex-col gap-6">
        {/* Elastic Auto-Scale Hero Card */}
        <div
          style={{ transform: `scale(${heroScale})` }}
          className="rounded-3xl border-2 border-cyan-400/50 bg-gradient-to-r from-cyan-950/70 via-slate-900/95 to-blue-950/70 p-8 text-center shadow-[0_0_80px_rgba(34,211,238,0.4)] backdrop-blur-xl"
        >
          <div className="flex items-center justify-center gap-3 text-5xl">
            <span>🖱️</span>
            <span>⚡</span>
            <span>🚀</span>
          </div>

          <div className="mt-3 flex items-center justify-center gap-4">
            <span className="text-6xl font-black text-slate-300">1</span>
            <span className="text-4xl text-cyan-400 font-bold">➡️</span>
            <span className="text-7xl font-black bg-gradient-to-r from-cyan-300 via-amber-300 to-rose-400 bg-clip-text text-transparent">
              {serverCount.toLocaleString()}
            </span>
            <span className="text-3xl font-black text-cyan-300">Servers</span>
          </div>

          <p className="mt-2 text-3xl font-bold text-amber-300">
            Tự động Scale sau 1 cú click chuột!
          </p>
          <span className="mt-1 inline-block text-xl text-slate-300">
            Dù 100 hay 1.000.000 người vào cùng lúc vẫn mượt mà
          </span>
        </div>

        {/* 2 Benefit Cards */}
        <div className="grid grid-cols-2 gap-5">
          {/* Cost Savings */}
          <div
            style={{ transform: `translateX(${b1X}px)` }}
            className="flex flex-col items-center rounded-3xl border-2 border-emerald-400/40 bg-emerald-950/40 p-6 text-center shadow-xl backdrop-blur-md"
          >
            <div className="text-5xl">💰📉</div>
            <h3 className="mt-3 text-3xl font-black text-emerald-300">Tiết Kiệm 70%</h3>
            <p className="mt-2 text-xl font-medium text-slate-200">
              Không mua phần cứng, không tốn bảo trì
            </p>
          </div>

          {/* High Availability */}
          <div
            style={{ transform: `translateX(${b2X}px)` }}
            className="flex flex-col items-center rounded-3xl border-2 border-sky-400/40 bg-sky-950/40 p-6 text-center shadow-xl backdrop-blur-md"
          >
            <div className="text-5xl">🌍🛡️</div>
            <h3 className="mt-3 text-3xl font-black text-sky-300">Uptime 99.99%</h3>
            <p className="mt-2 text-xl font-medium text-slate-200">
              Hệ thống tự sửa lỗi &amp; backup toàn cầu
            </p>
          </div>
        </div>
      </div>

      {/* Subtitle 1 line */}
      <SubtitleBox
        text="Ưu điểm lớn nhất là bạn có thể nâng cấp từ 1 lên 1.000 máy chủ chỉ sau một cú click chuột, tự động mở rộng khi có hàng triệu người dùng truy cập."
        durationInFrames={235}
        highlightKeyword="máy chủ"
        className="mt-64"
      />
    </AbsoluteFill>
  );
};
