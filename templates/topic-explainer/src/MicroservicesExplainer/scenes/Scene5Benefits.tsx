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

export const Scene5Benefits: React.FC = () => {
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
    <AbsoluteFill className="flex flex-col items-center justify-center px-10 text-white">
      <Audio src={staticFile("audio/MicroservicesExplainer/scene5_benefits.mp3")} />

      {/* Top Header Badge */}
      <div
        style={{ transform: `scale(${titleScale})` }}
        className="flex items-center gap-4 rounded-full border-2 border-emerald-400/80 bg-slate-900/90 px-10 py-4 shadow-[0_10px_40px_rgba(16,185,129,0.3)] backdrop-blur-2xl"
      >
        <span className="h-4 w-4 rounded-full bg-emerald-400 shadow-[0_0_12px_#34d399] animate-pulse" />
        <span className="text-3xl font-black tracking-widest text-emerald-300 uppercase">
          LỢI ÍCH HẠ TẦNG VƯỢT TRỘI
        </span>
      </div>

      {/* 3 High-Impact Full-Width Feature Cards */}
      <div className="mt-8 flex w-full max-w-[960px] flex-col gap-5">
        {/* Benefit 1 */}
        <div
          style={{ transform: `translateY(${(1 - c1) * 35}px)`, opacity: c1 }}
          className="flex items-center justify-between rounded-3xl border-2 border-cyan-500/40 bg-gradient-to-r from-slate-900/95 via-slate-950/98 to-slate-900/95 p-7 shadow-xl backdrop-blur-2xl"
        >
          <div className="flex items-center gap-6">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-cyan-500/20 text-cyan-400 text-3xl font-black border border-cyan-400/40">
              🚀
            </div>
            <div>
              <h3 className="text-3xl font-black text-white">Auto-Scaling Vô Hạn</h3>
              <p className="mt-1 text-2xl font-bold text-slate-300">
                Tự động tăng giảm tài nguyên theo tải thực tế, tối ưu 60% chi phí
              </p>
            </div>
          </div>
          <span className="shrink-0 rounded-2xl border border-cyan-400/50 bg-cyan-500/15 px-6 py-2.5 text-xl font-black text-cyan-300">
            ELASTIC SCALE
          </span>
        </div>

        {/* Benefit 2 */}
        <div
          style={{ transform: `translateY(${(1 - c2) * 35}px)`, opacity: c2 }}
          className="flex items-center justify-between rounded-3xl border-2 border-emerald-500/40 bg-gradient-to-r from-slate-900/95 via-slate-950/98 to-slate-900/95 p-7 shadow-xl backdrop-blur-2xl"
        >
          <div className="flex items-center gap-6">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-emerald-500/20 text-emerald-400 text-3xl font-black border border-emerald-400/40">
              🛡️
            </div>
            <div>
              <h3 className="text-3xl font-black text-white">Cô Lập Sự Cố 100%</h3>
              <p className="mt-1 text-2xl font-bold text-slate-300">
                Một service gián đoạn không bao giờ ảnh hưởng toàn bộ hệ sinh thái
              </p>
            </div>
          </div>
          <span className="shrink-0 rounded-2xl border border-emerald-400/50 bg-emerald-500/15 px-6 py-2.5 text-xl font-black text-emerald-300">
            FAULT ISOLATION
          </span>
        </div>

        {/* Benefit 3 */}
        <div
          style={{ transform: `translateY(${(1 - c3) * 35}px)`, opacity: c3 }}
          className="flex items-center justify-between rounded-3xl border-2 border-amber-500/40 bg-gradient-to-r from-slate-900/95 via-slate-950/98 to-slate-900/95 p-7 shadow-xl backdrop-blur-2xl"
        >
          <div className="flex items-center gap-6">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-amber-500/20 text-amber-400 text-3xl font-black border border-amber-400/40">
              📈
            </div>
            <div>
              <h3 className="text-3xl font-black text-white">Cam Kết Uptime 99.99%</h3>
              <p className="mt-1 text-2xl font-bold text-slate-300">
                Hệ thống vận hành liên tục 24/7 với độ sẵn sàng cao nhất
              </p>
            </div>
          </div>
          <span className="shrink-0 rounded-2xl border border-amber-400/50 bg-amber-500/15 px-6 py-2.5 text-xl font-black text-amber-300">
            99.99% SLA
          </span>
        </div>
      </div>

      {/* Massive Readable Subtitle */}
      <SubtitleBox
        text="Kiến trúc này giúp hệ thống mở rộng linh hoạt theo tải thực tế, tự cô lập sự cố từng dịch vụ và duy trì Uptime ổn định 99,99%."
        durationInFrames={255}
        highlightKeyword="Uptime ổn định 99,99%"
        className="mt-40"
      />
    </AbsoluteFill>
  );
};
