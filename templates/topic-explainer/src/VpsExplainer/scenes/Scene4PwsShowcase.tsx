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

export const Scene4PwsShowcase: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleScale = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 120 },
  });

  const card1Y = spring({ frame: frame - 4, fps, config: { damping: 14, stiffness: 110 } });
  const card2Y = spring({ frame: frame - 10, fps, config: { damping: 14, stiffness: 110 } });
  const card3Y = spring({ frame: frame - 16, fps, config: { damping: 14, stiffness: 110 } });

  return (
    <AbsoluteFill className="flex flex-col items-center justify-center px-10 text-white">
      <Audio src={staticFile("audio/VpsExplainer/scene4_pwsshowcase.mp3")} />

      {/* Top Header Badge */}
      <div
        style={{ transform: `scale(${titleScale})` }}
        className="flex items-center gap-3 rounded-full border border-cyan-400/50 bg-cyan-950/40 px-8 py-3 backdrop-blur-xl shadow-lg"
      >
        <span className="h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
        <span className="text-2xl font-black tracking-widest text-cyan-300 uppercase">
          CLOUD VPS PWSOLUTIONS
        </span>
      </div>

      {/* 3 Tech Spec Cards */}
      <div className="mt-8 flex w-full max-w-2xl flex-col gap-4">
        {/* Spec 1: Enterprise NVMe SSD */}
        <div
          style={{ transform: `translateY(${(1 - card1Y) * 40}px)`, opacity: card1Y }}
          className="flex items-center justify-between rounded-2xl border border-cyan-500/30 bg-gradient-to-r from-slate-900/90 via-slate-950/95 to-slate-900/90 p-5 shadow-lg backdrop-blur-xl"
        >
          <div className="flex items-center gap-5">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-500/20 text-cyan-300">
              <svg viewBox="0 0 24 24" className="h-8 w-8 stroke-current" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
                <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
                <line x1="6" y1="6" x2="6.01" y2="6" />
                <line x1="6" y1="18" x2="6.01" y2="18" />
              </svg>
            </div>
            <div>
              <h3 className="text-2xl font-black text-white">Enterprise NVMe SSD</h3>
              <p className="text-base text-slate-300">Tốc độ đọc ghi siêu tốc, IOPS hàng trăm nghìn</p>
            </div>
          </div>
          <span className="rounded-xl border border-cyan-400/40 bg-cyan-500/15 px-4 py-2 text-base font-black text-cyan-300">
            x10 Speed
          </span>
        </div>

        {/* Spec 2: 10Gbps High-Speed Bandwidth */}
        <div
          style={{ transform: `translateY(${(1 - card2Y) * 40}px)`, opacity: card2Y }}
          className="flex items-center justify-between rounded-2xl border border-cyan-500/30 bg-gradient-to-r from-slate-900/90 via-slate-950/95 to-slate-900/90 p-5 shadow-lg backdrop-blur-xl"
        >
          <div className="flex items-center gap-5">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-300">
              <svg viewBox="0 0 24 24" className="h-8 w-8 stroke-current" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
            </div>
            <div>
              <h3 className="text-2xl font-black text-white">Băng Thông 10Gbps+</h3>
              <p className="text-base text-slate-300">Hạ tầng mạng trong nước & quốc tế thông suốt</p>
            </div>
          </div>
          <span className="rounded-xl border border-emerald-400/40 bg-emerald-500/15 px-4 py-2 text-base font-black text-emerald-300">
            10 Gbps
          </span>
        </div>

        {/* Spec 3: Anti-DDoS Automatic Shield */}
        <div
          style={{ transform: `translateY(${(1 - card3Y) * 40}px)`, opacity: card3Y }}
          className="flex items-center justify-between rounded-2xl border border-cyan-500/30 bg-gradient-to-r from-slate-900/90 via-slate-950/95 to-slate-900/90 p-5 shadow-lg backdrop-blur-xl"
        >
          <div className="flex items-center gap-5">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-purple-500/20 text-purple-300">
              <svg viewBox="0 0 24 24" className="h-8 w-8 stroke-current" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <div>
              <h3 className="text-2xl font-black text-white">Chống DDoS Tự Động</h3>
              <p className="text-base text-slate-300">Hệ thống Firewall bảo vệ Layer 3/4 và Layer 7</p>
            </div>
          </div>
          <span className="rounded-xl border border-purple-400/40 bg-purple-500/15 px-4 py-2 text-base font-black text-purple-300">
            Shield 24/7
          </span>
        </div>
      </div>

      {/* Subtitle */}
      <SubtitleBox
        text="Cloud VPS tại PWSolutions được trang bị ổ cứng chuẩn Enterprise NVMe SSD siêu tốc, đường truyền băng thông mười Gbps và chống DDoS tự động."
        durationInFrames={260}
        highlightKeyword="Enterprise NVMe SSD"
        className="mt-64"
      />
    </AbsoluteFill>
  );
};
