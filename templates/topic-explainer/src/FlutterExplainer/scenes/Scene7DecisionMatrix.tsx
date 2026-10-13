import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import { BrandHeader } from "../components/BrandHeader";
import { SubtitleBox } from "../components/SubtitleBox";

interface SceneProps {
  subtitleText: string;
  durationInFrames: number;
}

export const Scene7DecisionMatrix: React.FC<SceneProps> = ({
  subtitleText,
  durationInFrames,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleSpring = spring({ frame, fps, config: { damping: 14, stiffness: 100 } });
  const matrixSpring = spring({ frame: frame - 12, fps, config: { damping: 13, stiffness: 90 } });

  const criteria = [
    {
      label: "Tốc Độ Ra Mắt (Time-to-Market)",
      score: "X2 TỐC ĐỘ",
      desc: "1 Team Dart triển khai đồng thời cả App Store & Google Play",
      color: "border-cyan-400 bg-cyan-950/60 text-cyan-300",
      badge: "🚀 FASTEST",
    },
    {
      label: "Đồng Nhất Giao Diện (Pixel Match)",
      score: "100% PERFECT",
      desc: "Không lo lệch phông, vỡ khung hình giữa các dòng máy",
      color: "border-sky-400 bg-sky-950/60 text-sky-300",
      badge: "🎯 UNIFIED",
    },
    {
      label: "Chi Phí Phát Triển & Bảo Trì",
      score: "-50% CHI PHÍ",
      desc: "Giảm một nửa nhân sự lập trình, QA test trên 1 luồng duy nhất",
      color: "border-emerald-400 bg-emerald-950/60 text-emerald-300",
      badge: "💰 TỐI ƯU ROI",
    },
    {
      label: "Trải Nghiệm Hoạt Họa & Vuốt Chạm",
      score: "120 FPS NATIVE",
      desc: "Chạy mượt như mơ cho ứng dụng Thương Mại, FinTech & Game",
      color: "border-amber-400 bg-amber-950/60 text-amber-300",
      badge: "⚡ ULTRA FLUID",
    },
  ];

  return (
    <div className="w-[1080px] h-[1920px] bg-gradient-to-b from-[#020814] via-[#05162b] to-[#020b18] text-white flex flex-col justify-between relative overflow-hidden select-none font-sans">
      {/* Blueprint Grid & Glow Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00e5ff12_1px,transparent_1px),linear-gradient(to_bottom,#00e5ff12_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Brand Header */}
      <BrandHeader currentCategory="MA TRẬN QUYẾT ĐỊNH" metricBadge="ENTERPRISE VALUE" />

      {/* Main Content */}
      <div className="w-[980px] mx-auto flex-1 flex flex-col justify-center gap-6 z-10 py-2">
        {/* Title */}
        <div style={{ transform: `scale(${titleSpring})` }} className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-cyan-950/90 border border-cyan-400/50">
            <span className="text-2xl">📊</span>
            <span className="text-xl font-black text-cyan-300 tracking-wider">
              CHIẾN LƯỢC KỸ THUẬT
            </span>
          </div>
          <h2 className="text-6xl font-black text-white tracking-tight">
            Khi Nào Doanh Nghiệp <span className="text-cyan-400">Nên Chọn Flutter?</span>
          </h2>
          <p className="text-2xl font-bold text-slate-300">
            Ma trận 4 chỉ số vàng cho Startup và Doanh nghiệp Chuyển đổi số
          </p>
        </div>

        {/* Decision Matrix Grid */}
        <div
          style={{ opacity: matrixSpring, transform: `scale(${matrixSpring})` }}
          className="w-full bg-slate-900/90 rounded-3xl p-6 border-2 border-cyan-500/50 shadow-[0_0_35px_rgba(6,182,212,0.3)] flex flex-col gap-4"
        >
          <div className="flex items-center justify-between border-b border-cyan-500/30 pb-2">
            <span className="text-lg font-black text-cyan-300 font-mono">
              FLUTTER STRATEGIC EVALUATION MATRIX
            </span>
            <span className="text-xs font-mono px-3 py-1 rounded bg-cyan-950 text-emerald-300 border border-cyan-400/40 font-bold">
              TOP RECOMMENDATION
            </span>
          </div>

          <div className="flex flex-col gap-3">
            {criteria.map((c, idx) => (
              <div
                key={c.label}
                className={`p-4 rounded-2xl border-2 ${c.color} flex items-center justify-between shadow-lg`}
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-black px-2 py-0.5 rounded bg-slate-950/80 border border-slate-700">
                      0{idx + 1}
                    </span>
                    <h4 className="text-xl font-black text-white">{c.label}</h4>
                  </div>
                  <p className="text-xs text-slate-300 font-bold">{c.desc}</p>
                </div>

                <div className="flex flex-col items-end gap-1">
                  <span className="text-2xl font-black text-white">{c.score}</span>
                  <span className="text-[11px] font-mono font-black px-2 py-0.5 rounded bg-slate-950/90 border border-current">
                    {c.badge}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Callout */}
        <div className="bg-gradient-to-r from-cyan-950 via-slate-900 to-blue-950 p-4 rounded-2xl border border-cyan-400/40 flex items-center justify-between">
          <span className="text-base font-black text-white">
            🏆 Lựa chọn hàng đầu cho các sản phẩm cần chiếm lĩnh thị trường nhanh nhất!
          </span>
        </div>
      </div>

      {/* Subtitle Box */}
      <SubtitleBox subtitleText={subtitleText} durationInFrames={durationInFrames} />
    </div>
  );
};
