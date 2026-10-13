import React from "react";
import { Img, spring, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import { BrandHeader } from "../components/BrandHeader";
import { SubtitleBox } from "../components/SubtitleBox";

interface SceneProps {
  subtitleText: string;
  durationInFrames: number;
}

export const Scene8Outro: React.FC<SceneProps> = ({
  subtitleText,
  durationInFrames,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleSpring = spring({ frame, fps, config: { damping: 14, stiffness: 100 } });
  const modelSpring = spring({ frame: frame - 10, fps, config: { damping: 13, stiffness: 90 } });
  const ctaSpring = spring({ frame: frame - 22, fps, config: { damping: 12, stiffness: 100 } });

  return (
    <div className="w-[1080px] h-[1920px] bg-gradient-to-b from-[#060919] via-[#0d1330] to-[#070b1f] text-white flex flex-col justify-between relative overflow-hidden select-none font-sans">
      {/* AI Cyber Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#a855f712_1px,transparent_1px),linear-gradient(to_bottom,#a855f712_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] bg-purple-600/20 rounded-full blur-[150px] pointer-events-none" />

      {/* Brand Header */}
      <BrandHeader currentCategory="HẠ TẦNG SẴN SÀNG CHO AI" metricBadge="PWSOLUTIONS INFRASTRUCTURE" />

      {/* Main Content */}
      <div className="w-[980px] mx-auto flex-1 flex flex-col justify-center gap-6 z-10 py-2">
        {/* Title */}
        <div style={{ transform: `scale(${titleSpring})` }} className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-purple-950/90 border border-purple-400/50">
            <span className="text-2xl">⚡</span>
            <span className="text-xl font-black text-purple-300 tracking-wider">
              TĂNG TỐC DỰ ÁN THỜI ĐẠI AI
            </span>
          </div>
          <h2 className="text-6xl font-black text-white tracking-tight leading-tight">
            Vận Hành Ứng Dụng Thông Minh <br />
            <span className="text-purple-400">Cùng PWSolutions</span>
          </h2>
          <p className="text-2xl font-bold text-slate-300">
            Từ ứng dụng tích hợp AI đến hạ tầng Cloud Server hiệu năng cao
          </p>
        </div>

        {/* AI & Cloud Architecture Model */}
        <div
          style={{ opacity: modelSpring, transform: `scale(${modelSpring})` }}
          className="w-full bg-slate-900/90 rounded-3xl p-6 border-2 border-purple-500/60 shadow-[0_0_40px_rgba(168,85,247,0.3)] flex flex-col gap-4 font-mono"
        >
          <div className="flex items-center justify-between border-b border-purple-500/30 pb-2">
            <span className="text-lg font-black text-purple-300">
              HẠ TẦNG SỐ CHO DOANH NGHIỆP THỜI ĐẠI MỚI (AI CLOUD BLUEPRINT)
            </span>
            <span className="text-xs px-2.5 py-1 rounded bg-purple-950 text-cyan-300 border border-purple-500/40">
              HIGH PERFORMANCE
            </span>
          </div>

          <div className="grid grid-cols-3 gap-3 text-center text-xs">
            {/* Tier 1 */}
            <div className="bg-slate-950 p-4 rounded-2xl border-2 border-purple-500/50 flex flex-col justify-between gap-2">
              <span className="text-3xl">🤖</span>
              <span className="text-purple-300 font-black text-sm">AI-POWERED APP</span>
              <p className="text-[11px] font-sans text-slate-300">
                Tích hợp LLM, Trợ lý ảo thông minh, tự động hóa quy trình nghiệp vụ
              </p>
            </div>

            {/* Tier 2 */}
            <div className="bg-slate-950 p-4 rounded-2xl border-2 border-indigo-500/50 flex flex-col justify-between gap-2">
              <span className="text-3xl">⚡</span>
              <span className="text-indigo-300 font-black text-sm">ENTERPRISE SOFTWARE</span>
              <p className="text-[11px] font-sans text-slate-300">
                Phát triển phần mềm theo yêu cầu, kiến trúc Clean & Microservices
              </p>
            </div>

            {/* Tier 3 */}
            <div className="bg-purple-950/80 p-4 rounded-2xl border-2 border-purple-300 flex flex-col justify-between gap-2 shadow-[0_0_20px_rgba(168,85,247,0.4)]">
              <span className="text-3xl">☁️</span>
              <span className="text-white font-black text-sm">PWS CLOUD SERVERS</span>
              <p className="text-[11px] font-sans text-purple-200">
                VPS NVMe cực nhanh, Kubernetes chịu tải lớn, Băng thông 10Gbps
              </p>
            </div>
          </div>
        </div>

        {/* CTA Card with PWSolutions Logo */}
        <div
          style={{ opacity: ctaSpring, transform: `scale(${ctaSpring})` }}
          className="w-full bg-gradient-to-r from-purple-700 via-indigo-700 to-blue-700 p-6 rounded-3xl border-2 border-white shadow-[0_0_40px_rgba(168,85,247,0.6)] flex items-center justify-between"
        >
          <div className="flex items-center gap-5">
            <div className="w-20 h-20 bg-slate-950 rounded-2xl p-2.5 flex items-center justify-center border-2 border-purple-400 shadow-lg">
              <Img
                src={staticFile("pws-logo.png")}
                className="w-full h-full object-contain"
                alt="PWSolutions Logo"
              />
            </div>
            <div>
              <span className="text-xs font-mono font-black px-3 py-1 rounded bg-slate-950/80 text-amber-300 border border-amber-300/40">
                GIẢI PHÁP PHẦN MỀM & CLOUD SERVER CHUYÊN NGHIỆP
              </span>
              <h3 className="text-3xl font-black text-white mt-1">PWSolutions Việt Nam</h3>
              <p className="text-sm font-bold text-purple-100">
                Đồng hành cùng lập trình viên và doanh nghiệp công nghệ
              </p>
            </div>
          </div>

          <div className="text-right">
            <div className="text-xs font-mono font-black text-purple-100 tracking-wider">
              TRUY CẬP NGAY TẠI
            </div>
            <div className="text-4xl font-black text-amber-300 tracking-tight drop-shadow-[0_0_15px_rgba(252,211,77,0.8)]">
              pwsdata.vn
            </div>
          </div>
        </div>
      </div>

      {/* Subtitle Box */}
      <SubtitleBox subtitleText={subtitleText} durationInFrames={durationInFrames} />
    </div>
  );
};
