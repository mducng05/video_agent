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

export const Scene2Build: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleScale = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 120 },
  });

  const c1 = spring({ frame: frame - 4, fps, config: { damping: 14, stiffness: 110 } });
  const c2 = spring({ frame: frame - 12, fps, config: { damping: 14, stiffness: 110 } });
  const c3 = spring({ frame: frame - 20, fps, config: { damping: 14, stiffness: 110 } });

  return (
    <AbsoluteFill className="flex flex-col items-center justify-center px-10">
      <Audio src={staticFile("audio/DevOpsExplainer/scene2_build.mp3")} />

      {/* Top Header Badge */}
      <div
        style={{ transform: `scale(${titleScale})` }}
        className="flex items-center gap-3 rounded-full border-2 border-cyan-300 bg-white/95 px-8 py-3 shadow-[0_8px_30px_rgba(14,165,233,0.2)] backdrop-blur-xl"
      >
        <span className="h-3 w-3 rounded-full bg-cyan-500 shadow-[0_0_10px_#06b6d4]" />
        <span className="text-2xl font-black tracking-widest text-cyan-800 uppercase">
          BƯỚC 1: TỰ ĐỘNG HÓA BUILD & TEST
        </span>
      </div>

      {/* 3 Pipeline Step Cards */}
      <div className="mt-8 flex w-full max-w-2xl flex-col gap-4 text-slate-900">
        {/* Step 1: Git Push */}
        <div
          style={{ transform: `translateY(${(1 - c1) * 35}px)`, opacity: c1 }}
          className="flex items-center justify-between rounded-2xl border-2 border-cyan-200 bg-white/95 p-5 shadow-[0_10px_35px_rgba(14,165,233,0.12)] backdrop-blur-xl"
        >
          <div className="flex items-center gap-5">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-sky-100 text-sky-700 font-black text-xl">
              01
            </div>
            <div>
              <h3 className="text-2xl font-black text-slate-900">Git Push Trigger</h3>
              <p className="text-base text-slate-600">Webhook kích hoạt Pipeline ngay khi commit code</p>
            </div>
          </div>
          <span className="rounded-xl border border-sky-300 bg-sky-50 px-4 py-1.5 text-sm font-black text-sky-700">
            AUTO TRIGGER
          </span>
        </div>

        {/* Step 2: Automated Tests */}
        <div
          style={{ transform: `translateY(${(1 - c2) * 35}px)`, opacity: c2 }}
          className="flex items-center justify-between rounded-2xl border-2 border-emerald-200 bg-white/95 p-5 shadow-[0_10px_35px_rgba(16,185,129,0.12)] backdrop-blur-xl"
        >
          <div className="flex items-center gap-5">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 font-black text-xl">
              02
            </div>
            <div>
              <h3 className="text-2xl font-black text-slate-900">Unit Test & Security Scan</h3>
              <p className="text-base text-slate-600">Kiểm thử tự động & rà soát mã độc trong tích tắc</p>
            </div>
          </div>
          <span className="rounded-xl border border-emerald-300 bg-emerald-50 px-4 py-1.5 text-sm font-black text-emerald-700">
            100% PASSED
          </span>
        </div>

        {/* Step 3: Docker Build */}
        <div
          style={{ transform: `translateY(${(1 - c3) * 35}px)`, opacity: c3 }}
          className="flex items-center justify-between rounded-2xl border-2 border-cyan-300 bg-white/95 p-5 shadow-[0_10px_35px_rgba(6,182,212,0.15)] backdrop-blur-xl"
        >
          <div className="flex items-center gap-5">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-100 text-cyan-700 font-black text-xl">
              03
            </div>
            <div>
              <h3 className="text-2xl font-black text-slate-900">Docker Image Build</h3>
              <p className="text-base text-slate-600">Đóng gói Container siêu nhẹ, đẩy lên Registry an toàn</p>
            </div>
          </div>
          <span className="rounded-xl border border-cyan-400 bg-cyan-50 px-4 py-1.5 text-sm font-black text-cyan-800">
            CONTAINERIZED
          </span>
        </div>
      </div>

      {/* Subtitle */}
      <SubtitleBox
        text="Ngay khi lập trình viên Git Push, hệ thống tự động kích hoạt: chạy unit test, đóng gói Docker image chuẩn hóa và quét bảo mật trong tích tắc."
        durationInFrames={250}
        highlightKeyword="Docker image chuẩn hóa"
        className="mt-64"
      />
    </AbsoluteFill>
  );
};
