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
    <div className="w-[1080px] h-[1920px] bg-gradient-to-b from-[#020814] via-[#05162b] to-[#020b18] text-white flex flex-col justify-between relative overflow-hidden select-none font-sans">
      {/* Blueprint Grid & Glow Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00e5ff12_1px,transparent_1px),linear-gradient(to_bottom,#00e5ff12_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] bg-cyan-500/20 rounded-full blur-[150px] pointer-events-none" />

      {/* Brand Header */}
      <BrandHeader currentCategory="HỆ SINH THÁI TOÀN DIỆN" metricBadge="PWSOLUTIONS CLOUD" />

      {/* Main Content */}
      <div className="w-[980px] mx-auto flex-1 flex flex-col justify-center gap-6 z-10 py-2">
        {/* Title */}
        <div style={{ transform: `scale(${titleSpring})` }} className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-cyan-950/90 border border-cyan-400/50">
            <span className="text-2xl">⚡</span>
            <span className="text-xl font-black text-cyan-300 tracking-wider">
              END-TO-END MOBILE & CLOUD
            </span>
          </div>
          <h2 className="text-6xl font-black text-white tracking-tight leading-tight">
            Xây Dựng Ứng Dụng Flutter <br />
            <span className="text-cyan-400">Đỉnh Cao Cùng PWSolutions</span>
          </h2>
          <p className="text-2xl font-bold text-slate-300">
            Từ thiết kế App di động đến hạ tầng Cloud Server chịu tải triệu user
          </p>
        </div>

        {/* Fullstack Architecture Model */}
        <div
          style={{ opacity: modelSpring, transform: `scale(${modelSpring})` }}
          className="w-full bg-slate-900/90 rounded-3xl p-6 border-2 border-cyan-400 shadow-[0_0_40px_rgba(6,182,212,0.3)] flex flex-col gap-4 font-mono"
        >
          <div className="flex items-center justify-between border-b border-cyan-500/30 pb-2">
            <span className="text-lg font-black text-cyan-300">
              MÔ HÌNH HỆ SINH THÁI TOÀN DIỆN (FULLSTACK DEPLOYMENT)
            </span>
            <span className="text-xs px-2.5 py-1 rounded bg-cyan-950 text-cyan-300 border border-cyan-500/40">
              ENTERPRISE READY
            </span>
          </div>

          <div className="grid grid-cols-3 gap-3 text-center text-xs">
            {/* Tier 1 */}
            <div className="bg-slate-950 p-4 rounded-2xl border-2 border-cyan-500/50 flex flex-col justify-between gap-2">
              <span className="text-2xl">📱</span>
              <span className="text-cyan-300 font-black text-sm">FLUTTER FRONTEND</span>
              <p className="text-[11px] font-sans text-slate-300">
                iOS, Android, Web & Desktop từ 1 codebase mượt mà 120 FPS
              </p>
            </div>

            {/* Tier 2 */}
            <div className="bg-slate-950 p-4 rounded-2xl border-2 border-sky-500/50 flex flex-col justify-between gap-2">
              <span className="text-2xl">⚡</span>
              <span className="text-sky-300 font-black text-sm">API & WEBSOCKETS</span>
              <p className="text-[11px] font-sans text-slate-300">
                Kết nối thời gian thực, bảo mật mã hóa SSL, chống DDoS
              </p>
            </div>

            {/* Tier 3 */}
            <div className="bg-cyan-950/80 p-4 rounded-2xl border-2 border-cyan-300 flex flex-col justify-between gap-2 shadow-[0_0_20px_rgba(34,211,238,0.4)]">
              <span className="text-2xl">☁️</span>
              <span className="text-white font-black text-sm">PWS CLOUD SERVERS</span>
              <p className="text-[11px] font-sans text-cyan-200">
                VPS NVMe, Kubernetes Cluster, Băng thông 10Gbps không giới hạn
              </p>
            </div>
          </div>
        </div>

        {/* CTA Card with PWSolutions Official Logo */}
        <div
          style={{ opacity: ctaSpring, transform: `scale(${ctaSpring})` }}
          className="w-full bg-gradient-to-r from-cyan-600 via-blue-600 to-sky-600 p-6 rounded-3xl border-2 border-white shadow-[0_0_40px_rgba(34,211,238,0.6)] flex items-center justify-between"
        >
          <div className="flex items-center gap-5">
            <div className="w-20 h-20 bg-slate-950 rounded-2xl p-2.5 flex items-center justify-center border-2 border-cyan-300 shadow-lg">
              <Img
                src={staticFile("pws-logo.png")}
                className="w-full h-full object-contain"
                alt="PWSolutions Logo"
              />
            </div>
            <div>
              <span className="text-xs font-mono font-black px-3 py-1 rounded bg-slate-950/80 text-amber-300 border border-amber-300/40">
                DỊCH VỤ MOBILE APP & CLOUD CHUYÊN NGHIỆP
              </span>
              <h3 className="text-3xl font-black text-white mt-1">PWSolutions Việt Nam</h3>
              <p className="text-sm font-bold text-cyan-100">
                Đối tác công nghệ tin cậy cho mọi giải pháp chuyển đổi số
              </p>
            </div>
          </div>

          <div className="text-right">
            <div className="text-xs font-mono font-black text-cyan-100 tracking-wider">
              KHÁM PHÁ NGAY TẠI
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
