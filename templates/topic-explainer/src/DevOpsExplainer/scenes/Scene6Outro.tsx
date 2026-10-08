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
    <AbsoluteFill className="flex flex-col items-center justify-center px-10">
      <Audio src={staticFile("audio/DevOpsExplainer/scene6_outro.mp3")} />

      {/* Main Corporate CTA Card */}
      <div
        style={{
          transform: `scale(${cardScale}) translateY(${floatY}px)`,
        }}
        className="flex w-full max-w-xl flex-col items-center rounded-3xl border-2 border-cyan-200 bg-white/95 p-10 shadow-[0_25px_70px_rgba(14,165,233,0.22)] backdrop-blur-2xl text-slate-900"
      >
        {/* PWS Logo in Elegant Glass Container */}
        <div
          style={{ transform: `scale(${logoScale})` }}
          className="flex h-24 w-60 items-center justify-center rounded-2xl border-2 border-cyan-200 bg-slate-900/5 p-4 shadow-[0_8px_25px_rgba(14,165,233,0.15)]"
        >
          <Img
            src={staticFile("pws-logo.png")}
            alt="PWSolutions Logo"
            style={{ maxHeight: "60px", maxWidth: "100%", objectFit: "contain" }}
          />
        </div>

        {/* Company Title */}
        <h2 className="mt-6 text-center text-4xl font-black tracking-tight text-slate-900">
          PWSolutions Việt Nam
        </h2>
        <p className="mt-2 text-center text-xl font-bold text-cyan-700">
          Hạ Tầng Cloud & Giải Pháp DevOps Toàn Diện
        </p>

        {/* Domain and Channels Contact Box */}
        <div className="mt-8 flex w-full flex-col gap-3 rounded-2xl border border-cyan-200 bg-cyan-50/70 p-5">
          <div className="flex items-center justify-between border-b border-cyan-200/80 pb-3">
            <span className="text-base font-bold text-slate-600">Website Chính Thức</span>
            <span className="text-3xl font-black tracking-wider text-cyan-600 drop-shadow-[0_0_10px_rgba(6,182,212,0.3)]">
              pwsdata.vn
            </span>
          </div>
          <div className="flex items-center justify-between pt-1">
            <span className="text-base font-bold text-slate-600">Cộng Đồng & Hỗ Trợ</span>
            <span className="text-lg font-black text-slate-800">
              facebook.com/pwsvn
            </span>
          </div>
        </div>

        {/* Sleek CTA Button */}
        <div
          style={{ transform: `scale(${pulse})` }}
          className="mt-6 flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 py-4 shadow-[0_8px_30px_rgba(6,182,212,0.35)]"
        >
          <span className="text-xl font-black tracking-wide text-white uppercase">
            Tăng Tốc DevOps Ngay ➔
          </span>
        </div>
      </div>

      {/* Subtitle */}
      <SubtitleBox
        text="Khám phá hạ tầng Cloud Server và giải pháp DevOps tối ưu cho doanh nghiệp tại pwsdata.vn. PWSolutions - Tăng tốc chuyển đổi số!"
        durationInFrames={255}
        highlightKeyword="pwsdata.vn"
        className="mt-64"
      />
    </AbsoluteFill>
  );
};
