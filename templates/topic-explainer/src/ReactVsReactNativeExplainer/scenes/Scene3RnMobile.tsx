import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import { BrandHeader } from "../components/BrandHeader";
import { SubtitleBox } from "../components/SubtitleBox";

interface SceneProps {
  subtitleText: string;
  durationInFrames: number;
}

export const Scene3RnMobile: React.FC<SceneProps> = ({
  subtitleText,
  durationInFrames,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleSpring = spring({ frame, fps, config: { damping: 14, stiffness: 100 } });
  const alertSpring = spring({ frame: frame - 12, fps, config: { damping: 12, stiffness: 110 } });
  const iosSpring = spring({ frame: frame - 25, fps, config: { damping: 14, stiffness: 90 } });
  const androidSpring = spring({ frame: frame - 40, fps, config: { damping: 14, stiffness: 90 } });
  const fpsSpring = spring({ frame: frame - 55, fps, config: { damping: 14, stiffness: 100 } });

  return (
    <div className="w-[1080px] h-[1920px] bg-gradient-to-br from-white via-orange-50/70 to-amber-50 text-slate-900 flex flex-col justify-between relative overflow-hidden select-none font-sans">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ea580c0f_1px,transparent_1px),linear-gradient(to_bottom,#ea580c0f_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
      <div className="absolute top-1/4 -right-24 w-96 h-96 bg-amber-300/35 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 -left-24 w-96 h-96 bg-orange-300/30 rounded-full blur-3xl pointer-events-none" />

      <BrandHeader currentCategory="KIẾN TRÚC FRONTEND" metricBadge="REACT NATIVE: NATIVE MOBILE UI" />

      <div className="w-[960px] mx-auto flex-1 flex flex-col justify-center gap-7 z-10 py-6">
        {/* Title */}
        <div style={{ transform: `scale(${titleSpring})` }} className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-orange-500 text-white font-black text-lg shadow-sm uppercase">
            <span>📱 FRAMEWORK DI ĐỘNG CROSS-PLATFORM</span>
          </div>
          <h1 className="text-6xl font-black text-slate-950 tracking-tight leading-tight">
            React Native Render <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500">
              Giao Diện Gốc (Native UI)
            </span>
          </h1>
          <p className="text-2xl font-extrabold text-slate-600">
            Không Chạy Qua WebView • Trực Tiếp Gọi Component Của OS
          </p>
        </div>

        {/* Warning / Alert Callout */}
        <div
          style={{ transform: `scale(${alertSpring})` }}
          className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-orange-600 via-amber-600 to-orange-700 text-white shadow-xl shadow-orange-600/15 flex items-center justify-between border border-orange-400"
        >
          <div className="flex items-center gap-3">
            <span className="text-3xl">🚫</span>
            <span className="text-2xl font-black tracking-wide">
              KHÔNG PHẢI WEBVIEW GIẢ LẬP
            </span>
          </div>
          <div className="text-xl font-black text-amber-200">
            100% NATIVE COMPONENT
          </div>
        </div>

        {/* 2 Native Platform Columns */}
        <div className="grid grid-cols-2 gap-5 w-full">
          {/* iOS Card */}
          <div
            style={{ opacity: iosSpring, transform: `translateY(${(1 - iosSpring) * 35}px)` }}
            className="bg-white/95 rounded-3xl p-6 border-2 border-orange-200 shadow-xl shadow-orange-950/5 space-y-4"
          >
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-xl bg-orange-50 text-2xl flex items-center justify-center border border-orange-200">
                🍎
              </div>
              <span className="text-sm font-black px-3 py-1 rounded-full bg-orange-100 text-orange-900">
                APPLE iOS
              </span>
            </div>
            <div>
              <h3 className="text-2xl font-black text-slate-900">Swift / UIKit</h3>
              <p className="text-base font-bold text-slate-600 mt-1">
                Ánh xạ component thành UI thật của Apple:
              </p>
            </div>
            <div className="space-y-2 pt-2 border-t border-orange-100 text-base font-extrabold text-slate-700">
              <div className="flex justify-between py-1 px-2.5 bg-orange-50/60 rounded-lg">
                <span>&lt;View&gt;</span>
                <span className="text-orange-700 font-mono">UIView</span>
              </div>
              <div className="flex justify-between py-1 px-2.5 bg-orange-50/60 rounded-lg">
                <span>&lt;Text&gt;</span>
                <span className="text-orange-700 font-mono">UILabel / UITextView</span>
              </div>
              <div className="flex justify-between py-1 px-2.5 bg-orange-50/60 rounded-lg">
                <span>&lt;Image&gt;</span>
                <span className="text-orange-700 font-mono">UIImageView</span>
              </div>
            </div>
          </div>

          {/* Android Card */}
          <div
            style={{ opacity: androidSpring, transform: `translateY(${(1 - androidSpring) * 35}px)` }}
            className="bg-white/95 rounded-3xl p-6 border-2 border-amber-300 shadow-xl shadow-amber-950/5 space-y-4"
          >
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-2xl flex items-center justify-center border border-amber-200">
                🤖
              </div>
              <span className="text-sm font-black px-3 py-1 rounded-full bg-amber-100 text-amber-900">
                GOOGLE ANDROID
              </span>
            </div>
            <div>
              <h3 className="text-2xl font-black text-slate-900">Kotlin / Java</h3>
              <p className="text-base font-bold text-slate-600 mt-1">
                Ánh xạ component thành Widget gốc của Google:
              </p>
            </div>
            <div className="space-y-2 pt-2 border-t border-amber-100 text-base font-extrabold text-slate-700">
              <div className="flex justify-between py-1 px-2.5 bg-amber-50/60 rounded-lg">
                <span>&lt;View&gt;</span>
                <span className="text-amber-700 font-mono">ViewGroup</span>
              </div>
              <div className="flex justify-between py-1 px-2.5 bg-amber-50/60 rounded-lg">
                <span>&lt;Text&gt;</span>
                <span className="text-amber-700 font-mono">TextView</span>
              </div>
              <div className="flex justify-between py-1 px-2.5 bg-amber-50/60 rounded-lg">
                <span>&lt;Image&gt;</span>
                <span className="text-amber-700 font-mono">ImageView</span>
              </div>
            </div>
          </div>
        </div>

        {/* 60-120 FPS Card */}
        <div
          style={{ opacity: fpsSpring, transform: `scale(${fpsSpring})` }}
          className="w-full bg-white/95 rounded-2xl p-5 border-2 border-orange-200 flex items-center justify-between shadow-md"
        >
          <div className="flex items-center gap-4">
            <span className="text-4xl">🚀</span>
            <div>
              <div className="text-2xl font-black text-slate-900">
                Hiệu Năng 60 Đến 120 FPS
              </div>
              <p className="text-base font-bold text-slate-600">
                Tương tác vuốt chạm, cuộn trang mượt mà như app Native thuần túy
              </p>
            </div>
          </div>
          <div className="px-4 py-2 rounded-xl bg-orange-100 text-orange-800 font-black text-lg border border-orange-300">
            HERMES ENGINE
          </div>
        </div>
      </div>

      <SubtitleBox subtitleText={subtitleText} durationInFrames={durationInFrames} />
    </div>
  );
};
