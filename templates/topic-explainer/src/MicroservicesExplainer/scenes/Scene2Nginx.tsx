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

export const Scene2Nginx: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleScale = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 120 },
  });

  const b1 = spring({ frame: frame - 4, fps, config: { damping: 14, stiffness: 110 } });
  const b2 = spring({ frame: frame - 12, fps, config: { damping: 14, stiffness: 110 } });
  const b3 = spring({ frame: frame - 20, fps, config: { damping: 14, stiffness: 110 } });

  return (
    <AbsoluteFill className="flex flex-col items-center justify-center px-10 text-white">
      <Audio src={staticFile("audio/MicroservicesExplainer/scene2_nginx.mp3")} />

      {/* Top Header Badge */}
      <div
        style={{ transform: `scale(${titleScale})` }}
        className="flex items-center gap-4 rounded-full border-2 border-emerald-400/80 bg-slate-900/90 px-10 py-4 shadow-[0_10px_40px_rgba(16,185,129,0.3)] backdrop-blur-2xl"
      >
        <span className="h-4 w-4 rounded-full bg-emerald-400 shadow-[0_0_12px_#34d399] animate-pulse" />
        <span className="text-3xl font-black tracking-widest text-emerald-300 uppercase">
          LAYER 1: CỔNG VÀO NGINX GATEWAY
        </span>
      </div>

      {/* 3 High-Impact Large Feature Decks (Full 960px Width) */}
      <div className="mt-8 flex w-full max-w-[960px] flex-col gap-5">
        {/* Deck 1: Load Balancing */}
        <div
          style={{ transform: `translateY(${(1 - b1) * 35}px)`, opacity: b1 }}
          className="flex items-center justify-between rounded-3xl border-2 border-emerald-500/40 bg-gradient-to-r from-slate-900/95 via-slate-950/98 to-slate-900/95 p-7 shadow-xl backdrop-blur-2xl"
        >
          <div className="flex items-center gap-6">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-emerald-500/20 text-emerald-400 text-3xl font-black border border-emerald-400/40">
              01
            </div>
            <div>
              <h3 className="text-3xl font-black text-white">Cân Bằng Tải Triệu Request</h3>
              <p className="mt-1 text-2xl font-bold text-slate-300">
                Phân phối lưu lượng cực đại qua Round-Robin & Least Connections
              </p>
            </div>
          </div>
          <span className="shrink-0 rounded-2xl border border-emerald-400/50 bg-emerald-500/15 px-6 py-2.5 text-xl font-black text-emerald-300">
            LOAD BALANCER
          </span>
        </div>

        {/* Deck 2: Rate Limiting & Anti-DDoS */}
        <div
          style={{ transform: `translateY(${(1 - b2) * 35}px)`, opacity: b2 }}
          className="flex items-center justify-between rounded-3xl border-2 border-cyan-500/40 bg-gradient-to-r from-slate-900/95 via-slate-950/98 to-slate-900/95 p-7 shadow-xl backdrop-blur-2xl"
        >
          <div className="flex items-center gap-6">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-cyan-500/20 text-cyan-400 text-3xl font-black border border-cyan-400/40">
              02
            </div>
            <div>
              <h3 className="text-3xl font-black text-white">Rate Limiting & Chặn DDoS</h3>
              <p className="mt-1 text-2xl font-bold text-slate-300">
                Kiểm soát tần suất request theo IP, triệt tiêu tấn công bão lưu lượng
              </p>
            </div>
          </div>
          <span className="shrink-0 rounded-2xl border border-cyan-400/50 bg-cyan-500/15 px-6 py-2.5 text-xl font-black text-cyan-300">
            DDoS SHIELD
          </span>
        </div>

        {/* Deck 3: SSL Termination */}
        <div
          style={{ transform: `translateY(${(1 - b3) * 35}px)`, opacity: b3 }}
          className="flex items-center justify-between rounded-3xl border-2 border-purple-500/40 bg-gradient-to-r from-slate-900/95 via-slate-950/98 to-slate-900/95 p-7 shadow-xl backdrop-blur-2xl"
        >
          <div className="flex items-center gap-6">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-purple-500/20 text-purple-400 text-3xl font-black border border-purple-400/40">
              03
            </div>
            <div>
              <h3 className="text-3xl font-black text-white">SSL Termination Tầng Biên</h3>
              <p className="mt-1 text-2xl font-bold text-slate-300">
                Giải mã bảo mật tại Gateway, giải phóng 40% CPU cho backend
              </p>
            </div>
          </div>
          <span className="shrink-0 rounded-2xl border border-purple-400/50 bg-purple-500/15 px-6 py-2.5 text-xl font-black text-purple-300">
            TLS OFFLOAD
          </span>
        </div>
      </div>

      {/* Massive Readable Subtitle */}
      <SubtitleBox
        text="Lớp cửa ngõ đầu tiên là NGINX API Gateway: tiếp nhận traffic khổng lồ, cân bằng tải cực đại, giới hạn tần suất và chặn đứng tấn công DDoS."
        durationInFrames={282}
        highlightKeyword="NGINX API Gateway"
        className="mt-40"
      />
    </AbsoluteFill>
  );
};
