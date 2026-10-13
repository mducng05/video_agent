import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import { BrandHeader } from "../components/BrandHeader";
import { SubtitleBox } from "../components/SubtitleBox";

interface SceneProps {
  subtitleText: string;
  durationInFrames: number;
}

export const Scene2Philosophy: React.FC<SceneProps> = ({
  subtitleText,
  durationInFrames,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleSpring = spring({ frame, fps, config: { damping: 14, stiffness: 100 } });
  const col1 = spring({ frame: frame - 10, fps, config: { damping: 14, stiffness: 90 } });
  const col2 = spring({ frame: frame - 22, fps, config: { damping: 14, stiffness: 90 } });
  const bannerSpring = spring({ frame: frame - 36, fps, config: { damping: 12, stiffness: 100 } });

  return (
    <div className="w-[1080px] h-[1920px] bg-gradient-to-br from-white via-sky-50 to-blue-100 text-slate-900 flex flex-col justify-between relative overflow-hidden select-none font-sans">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0284c710_1px,transparent_1px),linear-gradient(to_bottom,#0284c710_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
      <div className="absolute top-1/3 -left-20 w-96 h-96 bg-red-200/30 rounded-full blur-3xl pointer-events-none" />

      {/* Brand Header */}
      <BrandHeader currentCategory="TRIẾT LÝ TỔ CHỨC MÃ NGUỒN" metricBadge="PHILOSOPHY: FEATURE-FIRST" />

      {/* Main Content */}
      <div className="w-[960px] mx-auto flex-1 flex flex-col justify-center gap-6 z-10 py-4">
        {/* Title */}
        <div style={{ transform: `scale(${titleSpring})` }} className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-red-100 text-red-800 font-extrabold text-lg border border-red-300">
            <span>⚠️ SAI LẦM PHỔ BIẾN KHI BẮT ĐẦU</span>
          </div>
          <h2 className="text-6xl font-black text-slate-950 tracking-tight">
            Layer-First <span className="text-slate-500">Đối Đầu</span> <span className="text-emerald-700">Feature-First</span>
          </h2>
          <p className="text-2xl font-bold text-slate-600">
            Đừng gom file theo vai trò kỹ thuật mà hãy gom theo nghiệp vụ!
          </p>
        </div>

        {/* 2 Philosophy Comparison Columns */}
        <div className="grid grid-cols-2 gap-5 w-full">
          {/* Column 1: Layer-First */}
          <div
            style={{ opacity: col1, transform: `translateY(${(1 - col1) * 30}px)` }}
            className="bg-white/95 rounded-3xl p-6 border-3 border-red-300 shadow-xl flex flex-col justify-between space-y-4"
          >
            <div>
              <div className="inline-block px-3 py-1 rounded-xl bg-red-100 text-red-800 font-black text-sm">
                ❌ LAYER-FIRST (THEO TẦNG)
              </div>
              <h3 className="text-2xl font-black text-slate-900 mt-2">
                Chia Theo Chủng Loại File
              </h3>
              <div className="space-y-2 mt-3 font-mono text-base font-bold text-slate-600 bg-slate-50 p-3 rounded-xl border border-slate-200">
                <div>📁 src/components/ (300 file)</div>
                <div>📁 src/screens/</div>
                <div>📁 src/services/</div>
              </div>
              <p className="text-sm font-bold text-red-700 mt-3">
                ⚠️ Sửa 1 tính năng phải nhảy qua 6 folder khác nhau! Rất mệt mỏi.
              </p>
            </div>
            <div className="p-2.5 rounded-xl bg-red-50 text-red-800 font-black text-center text-xs border border-red-200">
              Chỉ Hợp Cho Dự Án Siêu Nhỏ
            </div>
          </div>

          {/* Column 2: Feature-First */}
          <div
            style={{ opacity: col2, transform: `translateY(${(1 - col2) * 30}px)` }}
            className="bg-white/95 rounded-3xl p-6 border-3 border-emerald-400 shadow-xl flex flex-col justify-between space-y-4"
          >
            <div>
              <div className="inline-block px-3 py-1 rounded-xl bg-emerald-100 text-emerald-800 font-black text-sm">
                ✅ FEATURE-FIRST (NGHIỆP VỤ)
              </div>
              <h3 className="text-2xl font-black text-slate-900 mt-2">
                Chia Theo Từng Tính Năng
              </h3>
              <div className="space-y-2 mt-3 font-mono text-base font-bold text-emerald-950 bg-emerald-50 p-3 rounded-xl border border-emerald-200">
                <div>📁 features/auth/</div>
                <div>📁 features/checkout/</div>
                <div>📁 features/profile/</div>
              </div>
              <p className="text-sm font-bold text-emerald-700 mt-3">
                ⚡ Mọi thứ của 1 màn hình nằm gọn trong 1 chỗ! Xóa hay sửa tức thì.
              </p>
            </div>
            <div className="p-2.5 rounded-xl bg-emerald-100 text-emerald-900 font-black text-center text-xs border border-emerald-300">
              Chuẩn Doanh Nghiệp Lớn
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div
          style={{ opacity: bannerSpring, transform: `scale(${bannerSpring})` }}
          className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-blue-900 to-indigo-900 text-white shadow-xl flex items-center justify-between border border-blue-400"
        >
          <div className="flex items-center gap-3">
            <span className="text-3xl">🎯</span>
            <span className="text-xl font-black">QUY TẮC CỐT LÕI</span>
          </div>
          <div className="text-2xl font-black text-amber-300">
            DỰ ÁN CÀNG LỚN, CÀNG PHẢI FEATURE-FIRST!
          </div>
        </div>
      </div>

      {/* Subtitle Box */}
      <SubtitleBox subtitleText={subtitleText} durationInFrames={durationInFrames} />
    </div>
  );
};
