import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import { BrandHeader } from "../components/BrandHeader";
import { SubtitleBox } from "../components/SubtitleBox";

interface SceneProps {
  subtitleText: string;
  durationInFrames: number;
}

export const Scene2ReactWeb: React.FC<SceneProps> = ({
  subtitleText,
  durationInFrames,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleSpring = spring({ frame, fps, config: { damping: 14, stiffness: 100 } });
  const step1Spring = spring({ frame: frame - 10, fps, config: { damping: 14, stiffness: 90 } });
  const step2Spring = spring({ frame: frame - 25, fps, config: { damping: 14, stiffness: 90 } });
  const step3Spring = spring({ frame: frame - 40, fps, config: { damping: 14, stiffness: 90 } });
  const cardSpring = spring({ frame: frame - 55, fps, config: { damping: 14, stiffness: 85 } });

  return (
    <div className="w-[1080px] h-[1920px] bg-gradient-to-br from-white via-orange-50/70 to-amber-50 text-slate-900 flex flex-col justify-between relative overflow-hidden select-none font-sans">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ea580c0f_1px,transparent_1px),linear-gradient(to_bottom,#ea580c0f_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
      <div className="absolute top-1/3 -right-24 w-96 h-96 bg-orange-300/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -left-24 w-96 h-96 bg-amber-300/25 rounded-full blur-3xl pointer-events-none" />

      <BrandHeader currentCategory="KIẾN TRÚC FRONTEND" metricBadge="REACT JS: WEB & VIRTUAL DOM" />

      <div className="w-[960px] mx-auto flex-1 flex flex-col justify-center gap-7 z-10 py-6">
        {/* Title */}
        <div style={{ transform: `scale(${titleSpring})` }} className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-orange-100 text-orange-900 font-black text-lg border border-orange-300 uppercase">
            <span>🌐 THƯ VIỆN GIAO DIỆN WEB</span>
          </div>
          <h1 className="text-6xl font-black text-slate-950 tracking-tight leading-tight">
            React JS Hoạt Động <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500">
              Dựa Trên Virtual DOM
            </span>
          </h1>
          <p className="text-2xl font-extrabold text-slate-600">
            Tính Toán Chênh Lệch Nhỏ Nhất Trước Khi Đụng Vào DOM Thật
          </p>
        </div>

        {/* 3-Step Architecture Flow */}
        <div className="flex flex-col gap-4 w-full">
          {/* Step 1 */}
          <div
            style={{ opacity: step1Spring, transform: `translateX(${(1 - step1Spring) * -30}px)` }}
            className="w-full bg-white/95 rounded-2xl p-6 border-2 border-orange-200 shadow-md flex items-center gap-5"
          >
            <div className="w-16 h-16 rounded-2xl bg-orange-500 text-white font-black text-2xl flex items-center justify-center shrink-0 shadow-md">
              01
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-black text-slate-900">State / Prop Thay Đổi</h3>
                <span className="text-sm font-extrabold px-3 py-0.5 rounded-full bg-orange-100 text-orange-800">
                  JSX Trigger
                </span>
              </div>
              <p className="text-lg font-bold text-slate-600 mt-1">
                Component kích hoạt chu kỳ render mới trong bộ nhớ JavaScript
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div
            style={{ opacity: step2Spring, transform: `translateX(${(1 - step2Spring) * 30}px)` }}
            className="w-full bg-white/95 rounded-2xl p-6 border-2 border-amber-300 shadow-md flex items-center gap-5"
          >
            <div className="w-16 h-16 rounded-2xl bg-amber-500 text-white font-black text-2xl flex items-center justify-center shrink-0 shadow-md">
              02
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-black text-slate-900">Virtual DOM Diffing</h3>
                <span className="text-sm font-extrabold px-3 py-0.5 rounded-full bg-amber-100 text-amber-900">
                  Reconciliation
                </span>
              </div>
              <p className="text-lg font-bold text-slate-600 mt-1">
                So sánh cây ảo cũ và mới bằng thuật toán O(n) siêu tốc
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div
            style={{ opacity: step3Spring, transform: `translateX(${(1 - step3Spring) * -30}px)` }}
            className="w-full bg-white/95 rounded-2xl p-6 border-2 border-orange-300 shadow-md flex items-center gap-5"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-600 to-amber-600 text-white font-black text-2xl flex items-center justify-center shrink-0 shadow-md">
              03
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-black text-slate-900">Batch Patch Vào Real DOM</h3>
                <span className="text-sm font-extrabold px-3 py-0.5 rounded-full bg-orange-100 text-orange-800">
                  HTML/CSS Render
                </span>
              </div>
              <p className="text-lg font-bold text-slate-600 mt-1">
                Chỉ cập nhật đúng node bị sửa đổi, hạn chế tối đa Reflow & Repaint
              </p>
            </div>
          </div>
        </div>

        {/* Browser Target Footer Card */}
        <div
          style={{ opacity: cardSpring, transform: `scale(${cardSpring})` }}
          className="w-full bg-gradient-to-r from-orange-50 via-white to-amber-50 rounded-3xl p-6 border-2 border-orange-200/90 shadow-lg flex items-center justify-between"
        >
          <div className="space-y-1">
            <span className="text-sm font-black text-orange-700 uppercase tracking-wider">
              MÔI TRƯỜNG THỰC THI (RUNTIME)
            </span>
            <div className="text-3xl font-black text-slate-900">
              Trình Duyệt Web • V8 Engine • WebKit
            </div>
            <p className="text-base font-bold text-slate-600">
              Mã đóng gói cuối cùng là các file tĩnh: index.html, bundle.js, style.css
            </p>
          </div>
          <div className="text-5xl">🖥️</div>
        </div>
      </div>

      <SubtitleBox subtitleText={subtitleText} durationInFrames={durationInFrames} />
    </div>
  );
};
