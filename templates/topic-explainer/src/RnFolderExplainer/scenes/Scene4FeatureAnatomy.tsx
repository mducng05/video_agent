import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import { BrandHeader } from "../components/BrandHeader";
import { SubtitleBox } from "../components/SubtitleBox";

interface SceneProps {
  subtitleText: string;
  durationInFrames: number;
}

export const Scene4FeatureAnatomy: React.FC<SceneProps> = ({
  subtitleText,
  durationInFrames,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleSpring = spring({ frame, fps, config: { damping: 14, stiffness: 100 } });
  const featureSpring = spring({ frame: frame - 10, fps, config: { damping: 14, stiffness: 90 } });
  const barrelSpring = spring({ frame: frame - 28, fps, config: { damping: 12, stiffness: 100 } });

  return (
    <div className="w-[1080px] h-[1920px] bg-gradient-to-br from-white via-sky-50 to-blue-100 text-slate-900 flex flex-col justify-between relative overflow-hidden select-none font-sans">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0284c710_1px,transparent_1px),linear-gradient(to_bottom,#0284c710_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
      <div className="absolute top-1/3 -left-20 w-96 h-96 bg-emerald-300/30 rounded-full blur-3xl pointer-events-none" />

      {/* Brand Header */}
      <BrandHeader currentCategory="GIẢI PHẪU 1 TÍNH NĂNG" metricBadge="MODULE: FEATURES/AUTH" />

      {/* Main Content */}
      <div className="w-[960px] mx-auto flex-1 flex flex-col justify-center gap-6 z-10 py-4">
        {/* Title */}
        <div style={{ transform: `scale(${titleSpring})` }} className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-100 text-emerald-800 font-extrabold text-lg border border-emerald-300">
            <span>📦 TỰ GÓI GỌN ĐỘC LẬP</span>
          </div>
          <h2 className="text-6xl font-black text-slate-950 tracking-tight">
            Giải Phẫu 1 Module <span className="text-emerald-700">features/auth/</span>
          </h2>
          <p className="text-2xl font-bold text-slate-600">
            Mọi tài nguyên của tính năng được đóng gói bên trong
          </p>
        </div>

        {/* Feature Sub-structure Grid */}
        <div
          style={{ opacity: featureSpring, transform: `translateY(${(1 - featureSpring) * 30}px)` }}
          className="w-full bg-white/95 rounded-3xl p-6 border-3 border-emerald-400 shadow-xl flex flex-col gap-3 font-mono"
        >
          <div className="flex items-center justify-between border-b border-emerald-200 pb-2">
            <span className="text-emerald-800 font-black text-xl">📁 features/auth/</span>
            <span className="text-xs font-sans px-2.5 py-1 rounded bg-emerald-100 text-emerald-800 font-bold border border-emerald-300">
              SELF-CONTAINED
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3 text-lg font-bold">
            <div className="bg-slate-900 text-white p-3.5 rounded-xl border border-slate-700">
              <span className="text-emerald-400">📁 api/</span>
              <p className="text-xs font-sans text-slate-300 mt-1">authApi.ts, mutations</p>
            </div>
            <div className="bg-slate-900 text-white p-3.5 rounded-xl border border-slate-700">
              <span className="text-sky-400">📁 components/</span>
              <p className="text-xs font-sans text-slate-300 mt-1">LoginForm, SocialButtons</p>
            </div>
            <div className="bg-slate-900 text-white p-3.5 rounded-xl border border-slate-700">
              <span className="text-amber-400">📁 screens/</span>
              <p className="text-xs font-sans text-slate-300 mt-1">LoginScreen, RegisterScreen</p>
            </div>
            <div className="bg-slate-900 text-white p-3.5 rounded-xl border border-slate-700">
              <span className="text-purple-400">📁 hooks/</span>
              <p className="text-xs font-sans text-slate-300 mt-1">useAuthSession, useLogin</p>
            </div>
          </div>

          {/* Barrel Export */}
          <div className="bg-emerald-950 text-emerald-300 p-4 rounded-xl border border-emerald-500 flex items-center justify-between">
            <div>
              <span className="text-xl font-black">📄 index.ts (CỔNG GIAO TIẾP DUY NHẤT)</span>
              <p className="text-xs font-sans text-emerald-200 mt-0.5">
                Chỉ export những màn hình và hook mà bên ngoài cần dùng!
              </p>
            </div>
            <span className="text-xs font-sans px-2.5 py-1 rounded bg-emerald-900 text-amber-300 font-black border border-emerald-700">
              BARREL API
            </span>
          </div>
        </div>

        {/* Golden Rule Callout */}
        <div
          style={{ opacity: barrelSpring, transform: `scale(${barrelSpring})` }}
          className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-blue-900 to-indigo-900 text-white shadow-xl flex items-center justify-between border border-blue-400"
        >
          <div className="flex items-center gap-3">
            <span className="text-3xl">🛡️</span>
            <span className="text-xl font-black">LỢI ÍCH TUYỆT VỜI</span>
          </div>
          <div className="text-2xl font-black text-amber-300">
            KHI MUỐN XÓA TÍNH NĂNG, CHỈ CẦN XÓA 1 FOLDER!
          </div>
        </div>
      </div>

      {/* Subtitle Box */}
      <SubtitleBox subtitleText={subtitleText} durationInFrames={durationInFrames} />
    </div>
  );
};
