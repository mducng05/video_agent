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

export const Scene3K8s: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleScale = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 120 },
  });

  const cardScale = spring({
    frame: frame - 6,
    fps,
    config: { damping: 16, stiffness: 100 },
  });

  const pulse = interpolate(Math.sin(frame / 8), [-1, 1], [0.95, 1.05]);

  return (
    <AbsoluteFill className="flex flex-col items-center justify-center px-10">
      <Audio src={staticFile("audio/DevOpsExplainer/scene3_k8s.mp3")} />

      {/* Top Header Badge */}
      <div
        style={{ transform: `scale(${titleScale})` }}
        className="flex items-center gap-3 rounded-full border-2 border-blue-300 bg-white/95 px-8 py-3 shadow-[0_8px_30px_rgba(59,130,246,0.2)] backdrop-blur-xl"
      >
        <span className="h-3 w-3 rounded-full bg-blue-500 shadow-[0_0_10px_#3b82f6]" />
        <span className="text-2xl font-black tracking-widest text-blue-900 uppercase">
          BƯỚC 2: KUBERNETES ZERO DOWNTIME
        </span>
      </div>

      {/* Center Architecture Container */}
      <div
        style={{ transform: `scale(${cardScale})` }}
        className="mt-8 flex w-full max-w-2xl flex-col items-center rounded-3xl border-2 border-cyan-200 bg-white/95 p-8 shadow-[0_20px_60px_rgba(14,165,233,0.18)] backdrop-blur-2xl text-slate-900"
      >
        <h2 className="text-3xl font-black text-slate-900">
          Kubernetes <span className="text-blue-600">Rolling Update</span>
        </h2>
        <p className="mt-1 text-lg font-semibold text-slate-500">
          Triển khai phiên bản mới tức thì - Không rớt 1 request người dùng
        </p>

        {/* 3 Pod Slices showing Rolling Upgrade */}
        <div className="mt-6 grid grid-cols-3 gap-4 w-full">
          {/* Pod 1 */}
          <div className="flex flex-col items-center rounded-2xl border-2 border-emerald-300 bg-emerald-50/80 p-4 text-center">
            <span className="rounded-full bg-emerald-500 text-white px-3 py-0.5 text-xs font-black">ACTIVE</span>
            <span className="mt-3 text-lg font-black text-slate-900">Pod 01 (V2)</span>
            <span className="mt-1 text-xs font-bold text-emerald-700">Đã cập nhật mới</span>
          </div>

          {/* Pod 2 (In Progress - Pulsing) */}
          <div
            style={{ transform: `scale(${pulse})` }}
            className="flex flex-col items-center rounded-2xl border-2 border-blue-400 bg-blue-50 p-4 text-center shadow-lg"
          >
            <span className="rounded-full bg-blue-600 text-white px-3 py-0.5 text-xs font-black animate-pulse">UPDATING</span>
            <span className="mt-3 text-lg font-black text-blue-900">Pod 02 (V2)</span>
            <span className="mt-1 text-xs font-bold text-blue-700">Đang đồng bộ</span>
          </div>

          {/* Pod 3 */}
          <div className="flex flex-col items-center rounded-2xl border-2 border-slate-200 bg-slate-50 p-4 text-center">
            <span className="rounded-full bg-slate-400 text-white px-3 py-0.5 text-xs font-black">PENDING</span>
            <span className="mt-3 text-lg font-black text-slate-700">Pod 03</span>
            <span className="mt-1 text-xs font-bold text-slate-500">Chờ cập nhật</span>
          </div>
        </div>

        {/* Traffic Load Balancer Bar */}
        <div className="mt-5 flex w-full items-center justify-between rounded-xl border border-cyan-300 bg-cyan-50/90 px-6 py-3.5">
          <div className="flex items-center gap-3">
            <span className="h-3 w-3 rounded-full bg-cyan-500 animate-ping" />
            <span className="text-base font-extrabold text-cyan-900">Ingress Controller & Cân Bằng Tải</span>
          </div>
          <span className="rounded-md bg-cyan-600 px-2.5 py-1 text-xs font-black text-white">100% TRAFFIC MƯỢT MÀ</span>
        </div>
      </div>

      {/* Subtitle */}
      <SubtitleBox
        text="Tiếp theo, Kubernetes tự động kéo image mới, thực hiện Rolling Update không gây gián đoạn dịch vụ và tự động cân bằng tải traffic."
        durationInFrames={236}
        highlightKeyword="Rolling Update không gây gián đoạn"
        className="mt-64"
      />
    </AbsoluteFill>
  );
};
