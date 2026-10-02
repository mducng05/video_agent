import React from "react";
import {
  AbsoluteFill,
  Audio,
  Img,
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

  const logoScale = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 100 },
  });

  const cardScale = spring({
    frame: frame - 6,
    fps,
    config: { damping: 16, stiffness: 90 },
  });

  const floatY = Math.sin(frame / 15) * 6;
  const pulse = interpolate(Math.sin(frame / 8), [-1, 1], [0.98, 1.02]);

  return (
    <AbsoluteFill className="flex flex-col items-center justify-center px-10 text-white">
      <Audio src={staticFile("audio/VpsExplainer/scene6_outro.mp3")} />

      {/* Main Corporate CTA Card */}
      <div
        style={{
          transform: `scale(${cardScale}) translateY(${floatY}px)`,
        }}
        className="flex w-full max-w-xl flex-col items-center rounded-3xl border border-cyan-500/40 bg-gradient-to-b from-slate-900/95 via-slate-950/98 to-slate-900/95 p-10 shadow-[0_20px_70px_rgba(6,182,212,0.15)] backdrop-blur-2xl"
      >
        {/* PWS Logo in Elegant Glass Container */}
        <div
          style={{ transform: `scale(${logoScale})` }}
          className="flex h-24 w-60 items-center justify-center rounded-2xl border border-white/15 bg-white/5 p-4 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
        >
          <Img
            src={staticFile("pws-logo.png")}
            alt="PWSolutions Logo"
            style={{ maxHeight: "60px", maxWidth: "100%", objectFit: "contain" }}
          />
        </div>

        {/* Company Title */}
        <h2 className="mt-6 text-center text-4xl font-black tracking-tight text-white">
          PWSolutions Việt Nam
        </h2>
        <p className="mt-2 text-center text-xl font-medium text-cyan-300">
          Hạ Tầng Cloud & Dữ Liệu Vững Chắc
        </p>

        {/* Domain and Channels Contact Box */}
        <div className="mt-8 flex w-full flex-col gap-3 rounded-2xl border border-slate-700/60 bg-slate-950/80 p-5">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <span className="text-base font-semibold text-slate-400">Website Chính Thức</span>
            <span className="text-2xl font-black tracking-wider text-cyan-400 drop-shadow-[0_0_12px_rgba(34,211,238,0.5)]">
              pwsdata.vn
            </span>
          </div>
          <div className="flex items-center justify-between pt-1">
            <span className="text-base font-semibold text-slate-400">Cộng Đồng & Hỗ Trợ</span>
            <span className="text-lg font-bold text-slate-200">
              facebook.com/pwsvn
            </span>
          </div>
        </div>

        {/* Sleek CTA Button */}
        <div
          style={{ transform: `scale(${pulse})` }}
          className="mt-6 flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-4 shadow-[0_8px_30px_rgba(6,182,212,0.4)]"
        >
          <span className="text-xl font-black tracking-wide text-white uppercase">
            Khám Phá Cloud VPS Ngay ➔
          </span>
        </div>
      </div>

      {/* Subtitle */}
      <SubtitleBox
        text="Nâng tầm hạ tầng doanh nghiệp cùng PWSolutions ngay hôm nay. Truy cập pwsdata.vn để nhận ưu đãi Cloud VPS tốt nhất!"
        durationInFrames={241}
        highlightKeyword="pwsdata.vn"
        className="mt-64"
      />
    </AbsoluteFill>
  );
};
