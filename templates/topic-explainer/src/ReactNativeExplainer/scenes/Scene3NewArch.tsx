import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import { BrandHeader } from "../components/BrandHeader";
import { SubtitleBox } from "../components/SubtitleBox";

interface SceneProps {
  subtitleText: string;
  durationInFrames: number;
}

export const Scene3NewArch: React.FC<SceneProps> = ({
  subtitleText,
  durationInFrames,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleSpring = spring({ frame, fps, config: { damping: 14, stiffness: 100 } });
  const jsiSpring = spring({ frame: frame - 10, fps, config: { damping: 14, stiffness: 90 } });
  const compareSpring = spring({ frame: frame - 22, fps, config: { damping: 14, stiffness: 90 } });
  const bannerSpring = spring({ frame: frame - 36, fps, config: { damping: 12, stiffness: 100 } });

  return (
    <div className="w-[1080px] h-[1920px] bg-gradient-to-br from-white via-sky-50 to-blue-100 text-slate-900 flex flex-col justify-between relative overflow-hidden select-none font-sans">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0284c710_1px,transparent_1px),linear-gradient(to_bottom,#0284c710_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-emerald-300/30 rounded-full blur-3xl pointer-events-none" />

      {/* Brand Header */}
      <BrandHeader currentCategory="BƯỚC NGOẶT CÔNG NGHỆ" metricBadge="NEW ARCHITECTURE: JSI ENGINE" />

      {/* Main Content */}
      <div className="w-[960px] mx-auto flex-1 flex flex-col justify-center gap-6 z-10 py-4">
        {/* Title */}
        <div style={{ transform: `scale(${titleSpring})` }} className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-100 text-emerald-800 font-extrabold text-lg border border-emerald-300">
            <span>🚀 ĐỘT PHÁ JSI (JAVASCRIPT INTERFACE)</span>
          </div>
          <h2 className="text-6xl font-black text-slate-950 tracking-tight">
            Xóa Bỏ Bridge Bằng <span className="text-emerald-700">Con Trỏ C++</span>
          </h2>
          <p className="text-2xl font-bold text-slate-600">
            JavaScript gọi trực tiếp Native trong bộ nhớ RAM chia sẻ
          </p>
        </div>

        {/* JSI Direct Highway Card */}
        <div
          style={{ opacity: jsiSpring, transform: `translateY(${(1 - jsiSpring) * 30}px)` }}
          className="w-full bg-white/95 rounded-3xl p-7 border-3 border-emerald-400 shadow-xl flex flex-col gap-4"
        >
          <div className="flex items-center justify-between">
            <span className="px-3.5 py-1 rounded-xl bg-emerald-100 text-emerald-800 font-black text-lg">
              ⚡ JSI HOST OBJECTS DIRECT CALL
            </span>
            <span className="text-2xl font-black text-emerald-600">ZERO SERIALIZATION</span>
          </div>
          <div className="bg-slate-950 text-white p-5 rounded-2xl flex items-center justify-between font-mono">
            <div>
              <div className="text-xs text-sky-400 font-bold uppercase">Mã Nguồn JavaScript</div>
              <div className="text-2xl font-black text-emerald-400 mt-1">global.nativeModule.calculate()</div>
            </div>
            <div className="text-3xl text-amber-400 font-black">➔</div>
            <div className="text-right">
              <div className="text-xs text-indigo-400 font-bold uppercase">Bộ Nhớ C++ Con Trỏ</div>
              <div className="text-2xl font-black text-cyan-300 mt-1">Direct Pointer 0x7F</div>
            </div>
          </div>
        </div>

        {/* Comparison Speed Box */}
        <div
          style={{ opacity: compareSpring, transform: `translateY(${(1 - compareSpring) * 30}px)` }}
          className="grid grid-cols-2 gap-5 w-full"
        >
          <div className="bg-red-50 rounded-2xl p-5 border-2 border-red-300 shadow">
            <div className="text-lg font-extrabold text-red-600 uppercase">Cây Cầu Cũ (Old Bridge)</div>
            <div className="text-4xl font-black text-red-800 mt-1">15ms - 30ms</div>
            <div className="text-base font-bold text-red-600 mt-1">Nghẽn hàng đợi JSON bất đồng bộ</div>
          </div>
          <div className="bg-emerald-50 rounded-2xl p-5 border-2 border-emerald-400 shadow">
            <div className="text-lg font-extrabold text-emerald-700 uppercase">JSI Mới (Direct Call)</div>
            <div className="text-4xl font-black text-emerald-800 mt-1">&lt; 0.01ms</div>
            <div className="text-base font-bold text-emerald-700 mt-1">Gọi đồng bộ tức thì trong RAM</div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div
          style={{ opacity: bannerSpring, transform: `scale(${bannerSpring})` }}
          className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-blue-900 to-indigo-900 text-white shadow-xl flex items-center justify-between border border-blue-400"
        >
          <div className="flex items-center gap-3">
            <span className="text-3xl">🎯</span>
            <span className="text-xl font-black">KẾT QUẢ VƯỢT TRỘI</span>
          </div>
          <div className="text-2xl font-black text-amber-300">
            TỰ DO TRUY CẬP PHẦN CỨNG NATIVE
          </div>
        </div>
      </div>

      {/* Subtitle Box */}
      <SubtitleBox subtitleText={subtitleText} durationInFrames={durationInFrames} />
    </div>
  );
};
