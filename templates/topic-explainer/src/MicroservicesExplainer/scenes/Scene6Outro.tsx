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
      <Audio src={staticFile("audio/MicroservicesExplainer/scene6_outro.mp3")} />

      {/* Main Corporate CTA Card (Full Width 960px) */}
      <div
        style={{
          transform: `scale(${cardScale}) translateY(${floatY}px)`,
        }}
        className="flex w-full max-w-[960px] flex-col items-center rounded-3xl border-2 border-cyan-500/50 bg-gradient-to-b from-slate-900/95 via-slate-950/98 to-slate-900/95 p-12 shadow-[0_25px_70px_rgba(6,182,212,0.25)] backdrop-blur-3xl"
      >
        {/* PWS Logo in Elegant Glass Container */}
        <div
          style={{ transform: `scale(${logoScale})` }}
          className="flex h-28 w-80 items-center justify-center rounded-2xl border-2 border-cyan-400/40 bg-white/5 p-5 shadow-[0_12px_35px_rgba(0,0,0,0.6)]"
        >
          <Img
            src={staticFile("pws-logo.png")}
            alt="PWSolutions Logo"
            style={{ maxHeight: "72px", maxWidth: "100%", objectFit: "contain" }}
          />
        </div>

        {/* Company Title */}
        <h2 className="mt-8 text-center text-5xl font-black tracking-tight text-white">
          PWSolutions Việt Nam
        </h2>
        <p className="mt-3 text-center text-2xl font-bold text-cyan-300">
          Chuyên Gia Hạ Tầng Cloud & Microservices Chịu Tải Cao
        </p>

        {/* Domain and Channels Contact Box */}
        <div className="mt-8 flex w-full flex-col gap-4 rounded-2xl border-2 border-slate-700/80 bg-slate-950/90 p-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <span className="text-2xl font-bold text-slate-400">Website Chính Thức</span>
            <span className="text-5xl font-black tracking-wider text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.6)]">
              pwsdata.vn
            </span>
          </div>
          <div className="flex items-center justify-between pt-1">
            <span className="text-2xl font-bold text-slate-400">Cộng Đồng & Hỗ Trợ</span>
            <span className="text-2xl font-black text-white">
              facebook.com/pwsvn
            </span>
          </div>
        </div>

        {/* Sleek CTA Button */}
        <div
          style={{ transform: `scale(${pulse})` }}
          className="mt-8 flex w-full items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 py-5 shadow-[0_10px_35px_rgba(6,182,212,0.4)]"
        >
          <span className="text-2xl font-black tracking-wide text-white uppercase">
            Tư Vấn Kiến Trúc Microservices Ngay ➔
          </span>
        </div>
      </div>

      {/* Massive Readable Subtitle */}
      <SubtitleBox
        text="Xây dựng hạ tầng Cloud Server và kiến trúc Microservices chịu tải cao cùng PWSolutions. Truy cập pwsdata.vn để bứt phá hiệu năng ngay hôm nay!"
        durationInFrames={275}
        highlightKeyword="pwsdata.vn"
        className="mt-40"
      />
    </AbsoluteFill>
  );
};
