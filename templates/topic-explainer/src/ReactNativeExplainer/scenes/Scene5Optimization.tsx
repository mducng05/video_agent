import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import { BrandHeader } from "../components/BrandHeader";
import { SubtitleBox } from "../components/SubtitleBox";

interface SceneProps {
  subtitleText: string;
  durationInFrames: number;
}

export const Scene5Optimization: React.FC<SceneProps> = ({
  subtitleText,
  durationInFrames,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleSpring = spring({ frame, fps, config: { damping: 14, stiffness: 100 } });
  const opt1 = spring({ frame: frame - 10, fps, config: { damping: 14, stiffness: 90 } });
  const opt2 = spring({ frame: frame - 22, fps, config: { damping: 14, stiffness: 90 } });
  const opt3 = spring({ frame: frame - 34, fps, config: { damping: 14, stiffness: 90 } });

  return (
    <div className="w-[1080px] h-[1920px] bg-gradient-to-br from-white via-sky-50 to-blue-100 text-slate-900 flex flex-col justify-between relative overflow-hidden select-none font-sans">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0284c710_1px,transparent_1px),linear-gradient(to_bottom,#0284c710_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-cyan-300/30 rounded-full blur-3xl pointer-events-none" />

      {/* Brand Header */}
      <BrandHeader currentCategory="BÍ QUYẾT TỐI ƯU HIỆU NĂNG" metricBadge="PERFORMANCE: FLASHLIST & HERMES" />

      {/* Main Content */}
      <div className="w-[960px] mx-auto flex-1 flex flex-col justify-center gap-6 z-10 py-4">
        {/* Title */}
        <div style={{ transform: `scale(${titleSpring})` }} className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-100 text-emerald-800 font-extrabold text-lg border border-emerald-300">
            <span>⚡ BỘ 3 VŨ KHÍ TĂNG TỐC</span>
          </div>
          <h2 className="text-6xl font-black text-slate-950 tracking-tight">
            Tối Ưu <span className="text-emerald-700">Bộ Nhớ & Tốc Độ</span>
          </h2>
          <p className="text-2xl font-bold text-slate-600">
            Bí quyết đưa app lên chuẩn hiệu năng cao từ chuyên gia
          </p>
        </div>

        {/* 3 Performance Weapon Cards */}
        <div className="flex flex-col gap-4 w-full">
          {/* Weapon 1: Hermes */}
          <div
            style={{ opacity: opt1, transform: `translateY(${(1 - opt1) * 30}px)` }}
            className="w-full bg-white/95 rounded-2xl p-5 border-3 border-emerald-300 shadow-lg flex items-center justify-between"
          >
            <div className="space-y-1">
              <span className="text-xs font-black text-emerald-700 uppercase">
                1. MÁY ẢO TỐI ƯU
              </span>
              <h3 className="text-2xl font-black text-slate-900">
                Hermes Engine (AOT Bytecode)
              </h3>
              <p className="text-base font-bold text-slate-500">
                Biên dịch sẵn mã nguồn • Giảm kích thước file cài & mở app ngay
              </p>
            </div>
            <div className="px-4 py-2 rounded-xl bg-emerald-100 text-emerald-800 font-black text-xl border border-emerald-300">
              FAST BOOT
            </div>
          </div>

          {/* Weapon 2: FlashList */}
          <div
            style={{ opacity: opt2, transform: `translateY(${(1 - opt2) * 30}px)` }}
            className="w-full bg-white/95 rounded-2xl p-5 border-3 border-blue-300 shadow-lg flex items-center justify-between"
          >
            <div className="space-y-1">
              <span className="text-xs font-black text-blue-700 uppercase">
                2. DANH SÁCH CUỘN VÔ TẬN
              </span>
              <h3 className="text-2xl font-black text-slate-900">
                Shopify FlashList (Thay thế FlatList)
              </h3>
              <p className="text-base font-bold text-slate-500">
                Tái sử dụng ô hiển thị • Cuộn 100.000 phần tử mượt 120 FPS
              </p>
            </div>
            <div className="px-4 py-2 rounded-xl bg-blue-100 text-blue-800 font-black text-xl border border-blue-300">
              10x RECYCLE
            </div>
          </div>

          {/* Weapon 3: WebP Image Cache */}
          <div
            style={{ opacity: opt3, transform: `translateY(${(1 - opt3) * 30}px)` }}
            className="w-full bg-white/95 rounded-2xl p-5 border-3 border-indigo-300 shadow-lg flex items-center justify-between"
          >
            <div className="space-y-1">
              <span className="text-xs font-black text-indigo-700 uppercase">
                3. ĐỆM HÌNH ẢNH THÔNG MINH
              </span>
              <h3 className="text-2xl font-black text-slate-900">
                FastImage & Nén WebP
              </h3>
              <p className="text-base font-bold text-slate-500">
                Tiết kiệm 70% bộ nhớ RAM • Không lo sự cố Out-Of-Memory Crash
              </p>
            </div>
            <div className="px-4 py-2 rounded-xl bg-indigo-100 text-indigo-800 font-black text-xl border border-indigo-300">
              -70% RAM
            </div>
          </div>
        </div>
      </div>

      {/* Subtitle Box */}
      <SubtitleBox subtitleText={subtitleText} durationInFrames={durationInFrames} />
    </div>
  );
};
