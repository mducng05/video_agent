import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import { BrandHeader } from "../components/BrandHeader";
import { SubtitleBox } from "../components/SubtitleBox";

interface SceneProps {
  subtitleText: string;
  durationInFrames: number;
}

export const Scene3SrcTree: React.FC<SceneProps> = ({
  subtitleText,
  durationInFrames,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleSpring = spring({ frame, fps, config: { damping: 14, stiffness: 100 } });
  const treeSpring = spring({ frame: frame - 10, fps, config: { damping: 14, stiffness: 90 } });
  const bottomSpring = spring({ frame: frame - 28, fps, config: { damping: 12, stiffness: 100 } });

  return (
    <div className="w-[1080px] h-[1920px] bg-gradient-to-br from-white via-sky-50 to-blue-100 text-slate-900 flex flex-col justify-between relative overflow-hidden select-none font-sans">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0284c710_1px,transparent_1px),linear-gradient(to_bottom,#0284c710_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-blue-300/30 rounded-full blur-3xl pointer-events-none" />

      {/* Brand Header */}
      <BrandHeader currentCategory="BỘ KHUNG GỐC SRC/" metricBadge="ARCHITECTURE: 5 PILLARS" />

      {/* Main Content */}
      <div className="w-[960px] mx-auto flex-1 flex flex-col justify-center gap-6 z-10 py-4">
        {/* Title */}
        <div style={{ transform: `scale(${titleSpring})` }} className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-100 text-blue-800 font-extrabold text-lg border border-blue-300">
            <span>🏛️ 5 TRỤ CỘT BÊN TRONG SRC/</span>
          </div>
          <h2 className="text-6xl font-black text-slate-950 tracking-tight">
            Bộ Khung Thư Mục <span className="text-blue-700">src/ Chuẩn Mực</span>
          </h2>
          <p className="text-2xl font-bold text-slate-600">
            Rõ ràng vai trò • Phân quyền trách nhiệm rành mạch
          </p>
        </div>

        {/* Directory Tree Card */}
        <div
          style={{ opacity: treeSpring, transform: `translateY(${(1 - treeSpring) * 30}px)` }}
          className="w-full bg-slate-950 text-white rounded-3xl p-6 border-3 border-blue-500 shadow-2xl font-mono flex flex-col gap-3"
        >
          <div className="flex items-center justify-between border-b border-slate-800 pb-2 text-sm font-sans font-bold">
            <span className="text-sky-400">📁 src/ (CẤU TRÚC GỐC ỨNG DỤNG)</span>
            <span className="px-2.5 py-0.5 rounded bg-blue-900 text-blue-200 border border-blue-700">
              5 PILLARS
            </span>
          </div>

          {/* 5 Tree Rows */}
          <div className="space-y-3 pt-1 text-xl">
            {/* Row 1: app */}
            <div className="flex items-center justify-between bg-slate-900 p-3 rounded-xl border border-slate-800">
              <span className="text-amber-400 font-bold">├── 📁 app/</span>
              <span className="text-sm font-sans text-slate-300 font-bold">
                Điều hướng Navigation, App Providers, Khởi tạo
              </span>
            </div>

            {/* Row 2: components */}
            <div className="flex items-center justify-between bg-slate-900 p-3 rounded-xl border border-slate-800">
              <span className="text-sky-400 font-bold">├── 📁 components/</span>
              <span className="text-sm font-sans text-slate-300 font-bold">
                UI dùng chung toàn app (Button, Input, Modal, Typography)
              </span>
            </div>

            {/* Row 3: features */}
            <div className="flex items-center justify-between bg-emerald-950/80 p-3 rounded-xl border border-emerald-600">
              <span className="text-emerald-400 font-bold">├── 📁 features/ 🎯</span>
              <span className="text-sm font-sans text-emerald-300 font-bold">
                Trái tim dự án: Chứa toàn bộ module nghiệp vụ độc lập
              </span>
            </div>

            {/* Row 4: services */}
            <div className="flex items-center justify-between bg-slate-900 p-3 rounded-xl border border-slate-800">
              <span className="text-purple-400 font-bold">├── 📁 services/</span>
              <span className="text-sm font-sans text-slate-300 font-bold">
                API Client Axios, Supabase SDK, Firebase, Storage
              </span>
            </div>

            {/* Row 5: theme */}
            <div className="flex items-center justify-between bg-slate-900 p-3 rounded-xl border border-slate-800">
              <span className="text-rose-400 font-bold">└── 📁 theme/</span>
              <span className="text-sm font-sans text-slate-300 font-bold">
                Design System: Màu sắc Colors, Spacing, Typography Tokens
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Takeaway */}
        <div
          style={{ opacity: bottomSpring, transform: `scale(${bottomSpring})` }}
          className="w-full bg-white/95 rounded-2xl p-5 border-2 border-blue-300 shadow-md flex items-center justify-between"
        >
          <div className="flex items-center gap-4">
            <span className="text-4xl">💡</span>
            <div>
              <div className="text-xl font-black text-slate-900">
                TÁCH BIỆT NHIỆM VỤ RÕ RÀNG
              </div>
              <p className="text-lg font-bold text-slate-600">
                Bất kỳ lập trình viên mới nào vào dự án cũng tìm thấy file trong 5 giây!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Subtitle Box */}
      <SubtitleBox subtitleText={subtitleText} durationInFrames={durationInFrames} />
    </div>
  );
};
