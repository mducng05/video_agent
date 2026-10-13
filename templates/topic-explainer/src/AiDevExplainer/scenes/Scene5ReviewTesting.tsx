import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import { BrandHeader } from "../components/BrandHeader";
import { SubtitleBox } from "../components/SubtitleBox";

interface SceneProps {
  subtitleText: string;
  durationInFrames: number;
}

export const Scene5ReviewTesting: React.FC<SceneProps> = ({
  subtitleText,
  durationInFrames,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleSpring = spring({ frame, fps, config: { damping: 14, stiffness: 100 } });
  const modelSpring = spring({ frame: frame - 10, fps, config: { damping: 13, stiffness: 90 } });

  const gates = [
    { title: "Bảo Mật Tự Động", desc: "Quét SQLi, rò rỉ API Token, CVE", icon: "🛡️", color: "border-rose-400 text-rose-300" },
    { title: "Kiểm Thử >90%", desc: "Tự sinh 100+ Unit Test tự động", icon: "🧪", color: "border-emerald-400 text-emerald-300" },
    { title: "Review Phong Cách", desc: "Soát chuẩn SOLID & Clean Code", icon: "💎", color: "border-cyan-400 text-cyan-300" },
  ];

  return (
    <div className="w-[1080px] h-[1920px] bg-gradient-to-b from-[#060919] via-[#0d1330] to-[#070b1f] text-white flex flex-col justify-between relative overflow-hidden select-none font-sans">
      {/* AI Cyber Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#a855f712_1px,transparent_1px),linear-gradient(to_bottom,#a855f712_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[650px] h-[650px] bg-emerald-600/15 rounded-full blur-[140px] pointer-events-none" />

      {/* Brand Header */}
      <BrandHeader currentCategory="14:00 CHIỀU" metricBadge="AI QUALITY GATE" />

      {/* Main Content */}
      <div className="w-[980px] mx-auto flex-1 flex flex-col justify-center gap-6 z-10 py-2">
        {/* Title */}
        <div style={{ transform: `scale(${titleSpring})` }} className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-purple-950/90 border border-purple-400/50">
            <span className="text-2xl">🛡️</span>
            <span className="text-xl font-black text-purple-300 tracking-wider">
              KIỂM SOÁT CHẤT LƯỢNG MÃ NGUỒN
            </span>
          </div>
          <h2 className="text-6xl font-black text-white tracking-tight">
            AI Tự Động Test & <span className="text-emerald-400">Quét Bảo Mật PR</span>
          </h2>
          <p className="text-2xl font-bold text-slate-300">
            Đạt 90% Code Coverage không cần tốn hàng tuần viết test chay
          </p>
        </div>

        {/* AI Quality Gate Model */}
        <div
          style={{ opacity: modelSpring, transform: `translateY(${(1 - modelSpring) * 30}px)` }}
          className="w-full bg-slate-900/90 rounded-3xl p-6 border-2 border-purple-500/60 shadow-[0_0_35px_rgba(168,85,247,0.3)] flex flex-col gap-4 font-mono"
        >
          <div className="flex items-center justify-between border-b border-purple-500/30 pb-2">
            <span className="text-lg font-black text-purple-300">
              CỔNG KIỂM DUYỆT PULL REQUEST (AI CI/CD GATE)
            </span>
            <span className="text-xs px-2.5 py-1 rounded bg-purple-950 text-emerald-300 border border-purple-500/40 font-bold">
              ZERO REGRESSION
            </span>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {gates.map((g) => (
              <div
                key={g.title}
                className={`p-4 rounded-2xl border-2 ${g.color} bg-slate-950 flex flex-col justify-between gap-3 text-center shadow-lg`}
              >
                <div className="text-3xl">{g.icon}</div>
                <div>
                  <h4 className="text-lg font-black text-white">{g.title}</h4>
                  <p className="text-xs text-slate-300 font-sans mt-1">{g.desc}</p>
                </div>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-900 border border-current mt-auto">
                  VERIFIED BY AI
                </span>
              </div>
            ))}
          </div>

          {/* Test Coverage Bar */}
          <div className="bg-slate-950 p-4 rounded-2xl border border-slate-700 flex flex-col gap-2">
            <div className="flex items-center justify-between text-xs font-bold">
              <span className="text-slate-300">ĐỘ BAO PHỦ BÀI KIỂM THỬ (CODE COVERAGE):</span>
              <span className="text-emerald-400 font-black text-base">94.8% AUTO GENERATED</span>
            </div>
            <div className="w-full h-3 bg-slate-900 rounded-full overflow-hidden border border-slate-700">
              <div className="w-[95%] h-full bg-gradient-to-r from-emerald-500 to-cyan-400 rounded-full shadow-[0_0_15px_#10b981]" />
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-purple-950/90 border border-purple-400/40 text-purple-200 text-sm font-bold flex items-center justify-between font-sans">
            <span>🚀 <b>Tự tin triển khai lên Production:</b> Không còn nỗi lo lỗi vặt khi bàn giao cho khách hàng!</span>
          </div>
        </div>
      </div>

      {/* Subtitle Box */}
      <SubtitleBox subtitleText={subtitleText} durationInFrames={durationInFrames} />
    </div>
  );
};
