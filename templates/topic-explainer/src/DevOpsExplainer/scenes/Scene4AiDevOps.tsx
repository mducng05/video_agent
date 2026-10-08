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

export const Scene4AiDevOps: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleScale = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 120 },
  });

  const card1Y = spring({ frame: frame - 4, fps, config: { damping: 14, stiffness: 110 } });
  const card2Y = spring({ frame: frame - 12, fps, config: { damping: 14, stiffness: 110 } });
  const card3Y = spring({ frame: frame - 20, fps, config: { damping: 14, stiffness: 110 } });

  return (
    <AbsoluteFill className="flex flex-col items-center justify-center px-10">
      <Audio src={staticFile("audio/DevOpsExplainer/scene4_aidevops.mp3")} />

      {/* Top Header Badge */}
      <div
        style={{ transform: `scale(${titleScale})` }}
        className="flex items-center gap-3 rounded-full border-2 border-indigo-300 bg-white/95 px-8 py-3 shadow-[0_8px_30px_rgba(99,102,241,0.2)] backdrop-blur-xl"
      >
        <span className="h-3 w-3 rounded-full bg-indigo-500 shadow-[0_0_10px_#6366f1]" />
        <span className="text-2xl font-black tracking-widest text-indigo-900 uppercase">
          AI DEVOPS & BẢO VỆ TOÀN DIỆN
        </span>
      </div>

      {/* 3 AI Smart Feature Cards */}
      <div className="mt-8 flex w-full max-w-2xl flex-col gap-4 text-slate-900">
        {/* Feature 1: AI Anomaly Detection */}
        <div
          style={{ transform: `translateY(${(1 - card1Y) * 35}px)`, opacity: card1Y }}
          className="flex items-center justify-between rounded-2xl border-2 border-indigo-200 bg-white/95 p-5 shadow-[0_10px_35px_rgba(99,102,241,0.12)] backdrop-blur-xl"
        >
          <div className="flex items-center gap-5">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-indigo-100 text-indigo-700 font-black text-xl">
              AI
            </div>
            <div>
              <h3 className="text-2xl font-black text-slate-900">AI Anomaly Detection</h3>
              <p className="text-base text-slate-600">Phân tích logs & metrics thời gian thực phát hiện lỗi sớm</p>
            </div>
          </div>
          <span className="rounded-xl border border-indigo-300 bg-indigo-50 px-4 py-1.5 text-sm font-black text-indigo-800">
            SMART MONITOR
          </span>
        </div>

        {/* Feature 2: Auto Rollback */}
        <div
          style={{ transform: `translateY(${(1 - card2Y) * 35}px)`, opacity: card2Y }}
          className="flex items-center justify-between rounded-2xl border-2 border-amber-200 bg-white/95 p-5 shadow-[0_10px_35px_rgba(245,158,11,0.12)] backdrop-blur-xl"
        >
          <div className="flex items-center gap-5">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-amber-100 text-amber-700 font-black text-xl">
              10s
            </div>
            <div>
              <h3 className="text-2xl font-black text-slate-900">Tự Động Rollback &lt; 10 Giây</h3>
              <p className="text-base text-slate-600">Tự quay về bản ổn định trước đó nếu tỷ lệ lỗi tăng cao</p>
            </div>
          </div>
          <span className="rounded-xl border border-amber-300 bg-amber-50 px-4 py-1.5 text-sm font-black text-amber-800">
            ZERO RISK
          </span>
        </div>

        {/* Feature 3: Smart Alert */}
        <div
          style={{ transform: `translateY(${(1 - card3Y) * 35}px)`, opacity: card3Y }}
          className="flex items-center justify-between rounded-2xl border-2 border-cyan-300 bg-white/95 p-5 shadow-[0_10px_35px_rgba(6,182,212,0.15)] backdrop-blur-xl"
        >
          <div className="flex items-center gap-5">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-100 text-cyan-700 font-black text-xl">
              24/7
            </div>
            <div>
              <h3 className="text-2xl font-black text-slate-900">Cảnh Báo & Tự Khắc Phục</h3>
              <p className="text-base text-slate-600">Báo cáo tức thời qua Slack/Telegram, bảo đảm 100% tin cậy</p>
            </div>
          </div>
          <span className="rounded-xl border border-cyan-400 bg-cyan-50 px-4 py-1.5 text-sm font-black text-cyan-800">
            INSTANT NOTIFY
          </span>
        </div>
      </div>

      {/* Subtitle */}
      <SubtitleBox
        text="Đặc biệt, tích hợp AI giám sát thông minh giúp tự động phát hiện dị thường, cảnh báo lỗi và tự động Rollback an toàn nếu có sự cố."
        durationInFrames={231}
        highlightKeyword="tự động Rollback an toàn"
        className="mt-64"
      />
    </AbsoluteFill>
  );
};
