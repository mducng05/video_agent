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

  const titleScale = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 110 },
  });

  const card1X = interpolate(frame, [5, 18], [-100, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const card1Opacity = interpolate(frame, [5, 18], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const card2X = interpolate(frame, [14, 27], [100, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const card2Opacity = interpolate(frame, [14, 27], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill className="flex flex-col items-center justify-center px-10 text-white">
      <Audio src={staticFile("audio/VpsExplainer/scene2_problem.mp3")} />

      {/* Top Warning Badge */}
      <div
        style={{ transform: `scale(${titleScale})` }}
        className="flex items-center gap-3 rounded-full border border-rose-500/40 bg-rose-950/40 px-8 py-3 backdrop-blur-xl"
      >
        <span className="h-2.5 w-2.5 rounded-full bg-rose-400 shadow-[0_0_8px_#f43f5e]" />
        <span className="text-2xl font-bold tracking-widest text-rose-300 uppercase">
          BÀI TOÁN HẠ TẦNG TRUYỀN THỐNG
        </span>
      </div>

      {/* Two Comparative Bottleneck Cards */}
      <div className="mt-8 flex w-full max-w-2xl flex-col gap-6">
        {/* Card 1: Shared Hosting */}
        <div
          style={{
            transform: `translateX(${card1X}px)`,
            opacity: card1Opacity,
          }}
          className="flex items-center gap-6 rounded-2xl border border-rose-800/40 bg-gradient-to-r from-rose-950/70 via-slate-900/90 to-slate-950/90 p-7 shadow-xl backdrop-blur-xl"
        >
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-rose-500/30 bg-rose-900/30 text-rose-300">
            <svg viewBox="0 0 24 24" className="h-9 w-9 stroke-current" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
              <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
              <line x1="6" y1="6" x2="6.01" y2="6" />
              <line x1="6" y1="18" x2="6.01" y2="18" />
            </svg>
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h3 className="text-3xl font-black text-white">Shared Hosting</h3>
              <span className="rounded bg-rose-500/20 px-3 py-1 text-xs font-bold text-rose-400">CHẬM & BỊ ẢNH HƯỞNG</span>
            </div>
            <p className="mt-2 text-xl font-medium text-slate-300 leading-snug">
              Dùng chung CPU/RAM với hàng trăm website khác. Dễ nghẽn mạng, sập trang giờ cao điểm và thiếu an toàn dữ liệu.
            </p>
          </div>
        </div>

        {/* Card 2: Dedicated Physical Server */}
        <div
          style={{
            transform: `translateX(${card2X}px)`,
            opacity: card2Opacity,
          }}
          className="flex items-center gap-6 rounded-2xl border border-amber-800/40 bg-gradient-to-r from-amber-950/70 via-slate-900/90 to-slate-950/90 p-7 shadow-xl backdrop-blur-xl"
        >
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-amber-500/30 bg-amber-900/30 text-amber-300">
            <svg viewBox="0 0 24 24" className="h-9 w-9 stroke-current" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="4" y="4" width="16" height="16" rx="2" />
              <rect x="9" y="9" width="6" height="6" />
              <line x1="9" y1="1" x2="9" y2="4" />
              <line x1="15" y1="1" x2="15" y2="4" />
              <line x1="9" y1="20" x2="9" y2="23" />
              <line x1="15" y1="20" x2="15" y2="23" />
            </svg>
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h3 className="text-3xl font-black text-white">Máy Chủ Vật Lý Riêng</h3>
              <span className="rounded bg-amber-500/20 px-3 py-1 text-xs font-bold text-amber-400">CHI PHÍ QUÁ ĐẮT</span>
            </div>
            <p className="mt-2 text-xl font-medium text-slate-300 leading-snug">
              Chi phí thuê từ hàng chục triệu/tháng. Lãng phí tài nguyên khi chưa dùng hết, nâng cấp phần cứng tốn thời gian.
            </p>
          </div>
        </div>
      </div>

      {/* Subtitle */}
      <SubtitleBox
        text="Shared Hosting giá rẻ thì liên tục nghẽn mạng và thiếu bảo mật, còn thuê máy chủ vật lý riêng lại tốn hàng chục triệu mỗi tháng."
        durationInFrames={210}
        highlightKeyword="nghẽn mạng"
        className="mt-64"
      />
    </AbsoluteFill>
  );
};
