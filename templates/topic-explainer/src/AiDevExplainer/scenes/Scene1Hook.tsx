import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import { BrandHeader } from "../components/BrandHeader";
import { SubtitleBox } from "../components/SubtitleBox";

interface SceneProps {
  subtitleText: string;
  durationInFrames: number;
}

export const Scene1Hook: React.FC<SceneProps> = ({
  subtitleText,
  durationInFrames,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleSpring = spring({ frame, fps, config: { damping: 14, stiffness: 100 } });
  const hubSpring = spring({ frame: frame - 12, fps, config: { damping: 13, stiffness: 85 } });
  const pulseScale = 1 + Math.sin(frame / 12) * 0.03;

  const satellites = [
    { title: "AI Pair Coding", icon: "⚡", role: "Viết mã & Boilerplate", badge: "Copilot / Cursor" },
    { title: "Bug Diagnostics", icon: "🔍", role: "Phân tích Log Prod", badge: "Root Cause" },
    { title: "Auto Test & Audit", icon: "🛡️", role: "Quét bảo mật PR", badge: ">90% Coverage" },
    { title: "Cloud & DevOps", icon: "☁️", role: "Tối ưu K8s & Docker", badge: "Auto CI/CD" },
  ];

  return (
    <div className="w-[1080px] h-[1920px] bg-gradient-to-b from-[#060919] via-[#0d1330] to-[#070b1f] text-white flex flex-col justify-between relative overflow-hidden select-none font-sans">
      {/* AI Cyber Grid & Purple Glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#a855f712_1px,transparent_1px),linear-gradient(to_bottom,#a855f712_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none" />

      {/* Brand Header */}
      <BrandHeader currentCategory="AI TRONG DOANH NGHIỆP" metricBadge="THE 10X DEVELOPER" />

      {/* Main Content */}
      <div className="w-[980px] mx-auto flex-1 flex flex-col justify-center gap-7 z-10 py-2">
        {/* Title */}
        <div style={{ transform: `scale(${titleSpring})` }} className="text-center space-y-3">
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-purple-950/90 border border-purple-400/60 shadow-[0_0_20px_rgba(168,85,247,0.4)]">
            <span className="w-3.5 h-3.5 rounded-full bg-purple-400 animate-ping" />
            <span className="text-xl font-black text-purple-300 tracking-wider">
              ENTERPRISE AI REVOLUTION
            </span>
          </div>

          <h1 className="text-6xl md:text-7xl font-black tracking-tight text-white leading-tight">
            AI Trong Cuộc Sống <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(192,132,252,0.5)]">
              Developer Ở Công Ty Như Thế Nào?
            </span>
          </h1>

          <p className="text-2xl font-bold text-slate-300">
            Không cướp việc, mà biến kỹ sư thành cỗ máy năng suất gấp 10 lần!
          </p>
        </div>

        {/* Central Model: The 10x AI Developer Hub */}
        <div
          style={{ opacity: hubSpring, transform: `scale(${hubSpring})` }}
          className="w-full bg-slate-900/85 backdrop-blur-2xl rounded-3xl p-7 border-2 border-purple-500/50 shadow-[0_0_40px_rgba(168,85,247,0.25)] flex flex-col gap-6"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-purple-500/30 pb-3">
            <div className="flex items-center gap-3">
              <span className="text-3xl">🤖</span>
              <span className="text-2xl font-black text-purple-300">
                MÔ HÌNH TRUNG TÂM LẬP TRÌNH VIÊN SIÊU CƯỜNG (10X HUB)
              </span>
            </div>
            <span className="text-xs font-mono px-3 py-1 rounded bg-purple-950 text-cyan-300 border border-purple-400/40 font-bold">
              SUPER ENGINEER
            </span>
          </div>

          {/* Central Dev Node */}
          <div
            style={{ transform: `scale(${pulseScale})` }}
            className="w-full py-5 px-6 rounded-2xl bg-gradient-to-r from-purple-700 via-indigo-700 to-blue-700 border-2 border-purple-300 shadow-[0_0_35px_rgba(168,85,247,0.6)] flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-slate-950/80 flex items-center justify-center text-3xl font-black text-purple-300 border border-purple-400">
                👨‍💻
              </div>
              <div>
                <h3 className="text-3xl font-black text-white">DEVELOPER IS THE ARCHITECT</h3>
                <p className="text-base font-bold text-purple-200">
                  Ra quyết định kiến trúc, điều phối hệ thống trí tuệ nhân tạo
                </p>
              </div>
            </div>
            <div className="text-right">
              <span className="text-xs font-mono font-black px-3 py-1.5 rounded-lg bg-slate-950/80 text-amber-300 border border-amber-400/50">
                10X PRODUCTIVITY
              </span>
            </div>
          </div>

          {/* 4 AI Satellites */}
          <div className="grid grid-cols-4 gap-3">
            {satellites.map((s, idx) => (
              <div
                key={s.title}
                style={{
                  transform: `translateY(${Math.sin((frame + idx * 12) / 10) * 4}px)`,
                }}
                className="bg-slate-950/90 rounded-2xl p-4 border border-purple-500/40 flex flex-col items-center text-center gap-2 shadow-lg"
              >
                <div className="text-3xl">{s.icon}</div>
                <span className="text-lg font-black text-white leading-tight">{s.title}</span>
                <p className="text-[11px] text-slate-300 font-semibold">{s.role}</p>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-purple-950 text-cyan-300 border border-purple-500/40 mt-auto">
                  {s.badge}
                </span>
              </div>
            ))}
          </div>

          {/* Metric Bar */}
          <div className="bg-gradient-to-r from-purple-950 via-slate-900 to-indigo-950 p-4 rounded-2xl border border-purple-400/40 flex items-center justify-around">
            <div className="text-center">
              <div className="text-3xl font-black text-purple-300">+55%</div>
              <div className="text-xs font-bold text-slate-400">Tốc Độ Viết Code</div>
            </div>
            <div className="h-10 w-px bg-purple-500/30" />
            <div className="text-center">
              <div className="text-3xl font-black text-amber-300">X4 LẦN</div>
              <div className="text-xs font-bold text-slate-400">Tốc Độ Fix Bug Prod</div>
            </div>
            <div className="h-10 w-px bg-purple-500/30" />
            <div className="text-center">
              <div className="text-3xl font-black text-cyan-300">0% NHÀM CHÁN</div>
              <div className="text-xs font-bold text-slate-400">Xóa Sổ Boilerplate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtitle Box */}
      <SubtitleBox subtitleText={subtitleText} durationInFrames={durationInFrames} />
    </div>
  );
};
