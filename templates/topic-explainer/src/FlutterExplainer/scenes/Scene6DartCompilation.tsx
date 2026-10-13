import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import { BrandHeader } from "../components/BrandHeader";
import { SubtitleBox } from "../components/SubtitleBox";

interface SceneProps {
  subtitleText: string;
  durationInFrames: number;
}

export const Scene6DartCompilation: React.FC<SceneProps> = ({
  subtitleText,
  durationInFrames,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleSpring = spring({ frame, fps, config: { damping: 14, stiffness: 100 } });
  const jitSpring = spring({ frame: frame - 10, fps, config: { damping: 13, stiffness: 90 } });
  const aotSpring = spring({ frame: frame - 22, fps, config: { damping: 13, stiffness: 90 } });

  return (
    <div className="w-[1080px] h-[1920px] bg-gradient-to-b from-[#020814] via-[#05162b] to-[#020b18] text-white flex flex-col justify-between relative overflow-hidden select-none font-sans">
      {/* Blueprint Grid & Glow Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00e5ff12_1px,transparent_1px),linear-gradient(to_bottom,#00e5ff12_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 w-[650px] h-[650px] bg-blue-500/15 rounded-full blur-[140px] pointer-events-none" />

      {/* Brand Header */}
      <BrandHeader currentCategory="NGÔN NGỮ DART" metricBadge="DUAL COMPILATION PIPELINE" />

      {/* Main Content */}
      <div className="w-[980px] mx-auto flex-1 flex flex-col justify-center gap-6 z-10 py-2">
        {/* Title */}
        <div style={{ transform: `scale(${titleSpring})` }} className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-cyan-950/90 border border-cyan-400/50">
            <span className="text-2xl">🎯</span>
            <span className="text-xl font-black text-cyan-300 tracking-wider">
              VÌ SAO FLUTTER CHỌN DART?
            </span>
          </div>
          <h2 className="text-6xl font-black text-white tracking-tight">
            Sức Mạnh Của Dart: <span className="text-cyan-400">Biên Dịch Kép</span>
          </h2>
          <p className="text-2xl font-bold text-slate-300">
            JIT siêu tốc lúc Dev và AOT mã máy lúc Production
          </p>
        </div>

        {/* Dual Pipeline Model */}
        <div className="w-full flex flex-col gap-5">
          {/* Pipeline 1: Dev Mode (JIT) */}
          <div
            style={{ opacity: jitSpring, transform: `translateY(${(1 - jitSpring) * 30}px)` }}
            className="w-full bg-slate-900/90 rounded-2xl p-6 border-2 border-amber-400/80 shadow-[0_0_30px_rgba(251,191,36,0.25)] flex flex-col gap-4 font-mono"
          >
            <div className="flex items-center justify-between border-b border-amber-400/30 pb-2">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-amber-400 text-slate-950 font-black flex items-center justify-center text-sm">
                  DEV
                </span>
                <span className="text-2xl font-black text-amber-300 font-sans">
                  CHẾ ĐỘ PHÁT TRIỂN: JIT (JUST-IN-TIME)
                </span>
              </div>
              <span className="text-xs font-sans px-3 py-1 rounded bg-amber-950 text-amber-300 border border-amber-400/50 font-black">
                SPEED FOR CODER
              </span>
            </div>

            <div className="grid grid-cols-3 gap-3 text-center text-sm">
              <div className="bg-slate-950 p-3 rounded-xl border border-slate-700 text-slate-200 font-bold">
                Dart Code Thay Đổi
              </div>
              <div className="bg-amber-950/80 p-3 rounded-xl border border-amber-500 text-amber-300 font-black">
                Dart VM JIT Engine ⚡
              </div>
              <div className="bg-amber-400 text-slate-950 p-3 rounded-xl border border-white font-black shadow-lg">
                HOT RELOAD &lt; 0.5s 🚀
              </div>
            </div>

            <p className="text-xs font-sans font-bold text-amber-200/90">
              👉 Sửa code thấy ngay kết quả trên điện thoại mà KHÔNG mất state hay bắt login lại!
            </p>
          </div>

          {/* Pipeline 2: Prod Mode (AOT) */}
          <div
            style={{ opacity: aotSpring, transform: `translateY(${(1 - aotSpring) * 30}px)` }}
            className="w-full bg-slate-900/90 rounded-2xl p-6 border-2 border-cyan-400 shadow-[0_0_35px_rgba(34,211,238,0.3)] flex flex-col gap-4 font-mono"
          >
            <div className="flex items-center justify-between border-b border-cyan-400/30 pb-2">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-cyan-400 text-slate-950 font-black flex items-center justify-center text-sm">
                  PROD
                </span>
                <span className="text-2xl font-black text-cyan-300 font-sans">
                  CHẾ ĐỘ SẢN PHẨM: AOT (AHEAD-OF-TIME)
                </span>
              </div>
              <span className="text-xs font-sans px-3 py-1 rounded bg-cyan-950 text-cyan-300 border border-cyan-400/50 font-black">
                RAW PERFORMANCE
              </span>
            </div>

            <div className="grid grid-cols-3 gap-3 text-center text-sm">
              <div className="bg-slate-950 p-3 rounded-xl border border-slate-700 text-slate-200 font-bold">
                Source Code Hoàn Thiện
              </div>
              <div className="bg-cyan-950/80 p-3 rounded-xl border border-cyan-500 text-cyan-300 font-black">
                Dart AOT Compiler ⚙️
              </div>
              <div className="bg-cyan-400 text-slate-950 p-3 rounded-xl border border-white font-black shadow-lg">
                ARM64 NATIVE MACHINE CODE
              </div>
            </div>

            <p className="text-xs font-sans font-bold text-cyan-200/90">
              👉 Biên dịch thẳng ra mã nhị phân phần cứng, khởi động trong chớp mắt, chống dịch ngược bảo mật cao!
            </p>
          </div>
        </div>

        {/* Highlight Card */}
        <div className="bg-gradient-to-r from-cyan-950 via-slate-900 to-blue-950 p-4 rounded-2xl border border-cyan-400/40 flex items-center justify-between">
          <span className="text-base font-black text-white">
            💡 Sự kết hợp hoàn hảo: Tốc độ lập trình nhanh gấp 3 lần, hiệu năng chạy tối đa 100%!
          </span>
        </div>
      </div>

      {/* Subtitle Box */}
      <SubtitleBox subtitleText={subtitleText} durationInFrames={durationInFrames} />
    </div>
  );
};
