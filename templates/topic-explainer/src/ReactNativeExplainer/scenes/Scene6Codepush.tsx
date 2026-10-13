import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import { BrandHeader } from "../components/BrandHeader";
import { SubtitleBox } from "../components/SubtitleBox";

interface SceneProps {
  subtitleText: string;
  durationInFrames: number;
}

export const Scene6Codepush: React.FC<SceneProps> = ({
  subtitleText,
  durationInFrames,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleSpring = spring({ frame, fps, config: { damping: 14, stiffness: 100 } });
  const traditionalSpring = spring({ frame: frame - 10, fps, config: { damping: 14, stiffness: 90 } });
  const codepushSpring = spring({ frame: frame - 22, fps, config: { damping: 14, stiffness: 90 } });
  const bottomSpring = spring({ frame: frame - 36, fps, config: { damping: 12, stiffness: 100 } });

  return (
    <div className="w-[1080px] h-[1920px] bg-gradient-to-br from-white via-sky-50 to-blue-100 text-slate-900 flex flex-col justify-between relative overflow-hidden select-none font-sans">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0284c710_1px,transparent_1px),linear-gradient(to_bottom,#0284c710_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
      <div className="absolute top-1/3 -left-20 w-96 h-96 bg-blue-300/30 rounded-full blur-3xl pointer-events-none" />

      {/* Brand Header */}
      <BrandHeader currentCategory="VŨ KHÍ ĐỘT PHÁ DOANH NGHIỆP" metricBadge="DEPLOYMENT: OTA CODEPUSH" />

      {/* Main Content */}
      <div className="w-[960px] mx-auto flex-1 flex flex-col justify-center gap-6 z-10 py-4">
        {/* Title */}
        <div style={{ transform: `scale(${titleSpring})` }} className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-indigo-100 text-indigo-800 font-extrabold text-lg border border-indigo-300">
            <span>🚀 CẬP NHẬT TỨC THÌ (OVER-THE-AIR)</span>
          </div>
          <h2 className="text-6xl font-black text-slate-950 tracking-tight">
            Sức Mạnh Của <span className="text-indigo-700">OTA CodePush</span>
          </h2>
          <p className="text-2xl font-bold text-slate-600">
            Fix bug & cập nhật tính năng đến người dùng trong 30 giây
          </p>
        </div>

        {/* Comparison Cards: Traditional Store vs OTA CodePush */}
        <div className="flex flex-col gap-5 w-full">
          {/* Card 1: Traditional Way */}
          <div
            style={{ opacity: traditionalSpring, transform: `translateY(${(1 - traditionalSpring) * 30}px)` }}
            className="w-full bg-slate-100/90 rounded-3xl p-6 border-2 border-slate-300 shadow flex items-center justify-between"
          >
            <div className="space-y-1">
              <span className="text-xs font-black text-slate-500 uppercase">
                QUY TRÌNH NATIVE TRUYỀN THỐNG
              </span>
              <h3 className="text-2xl font-black text-slate-800">
                Nộp Lại Bản Build Lên App Store
              </h3>
              <p className="text-base font-bold text-slate-500">
                Chờ duyệt từ 2 đến 7 ngày • Người dùng phải cập nhật thủ công
              </p>
            </div>
            <div className="text-right pl-4 border-l border-slate-300">
              <div className="text-3xl font-black text-slate-600">2-7 NGÀY</div>
              <span className="text-xs font-bold text-slate-500">Store Review</span>
            </div>
          </div>

          {/* Card 2: CodePush Way */}
          <div
            style={{ opacity: codepushSpring, transform: `translateY(${(1 - codepushSpring) * 30}px)` }}
            className="w-full bg-white/95 rounded-3xl p-6 border-3 border-emerald-400 shadow-xl flex items-center justify-between"
          >
            <div className="space-y-1">
              <span className="text-xs font-black text-emerald-700 uppercase">
                REACT NATIVE OTA CODEPUSH
              </span>
              <h3 className="text-3xl font-black text-slate-900">
                Triển Khai Tức Thì Qua Cloud
              </h3>
              <p className="text-xl font-bold text-slate-600">
                Cập nhật âm thầm khi mở app • Không cần nộp lại bản cài
              </p>
            </div>
            <div className="text-right pl-6 border-l-2 border-emerald-200">
              <div className="text-4xl font-black text-emerald-600">30 GIÂY</div>
              <span className="text-xs font-black uppercase text-emerald-700">Instant Rollout</span>
            </div>
          </div>
        </div>

        {/* Bottom Callout */}
        <div
          style={{ opacity: bottomSpring, transform: `scale(${bottomSpring})` }}
          className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-blue-900 to-indigo-900 text-white shadow-xl flex items-center justify-between border border-blue-400"
        >
          <div className="flex items-center gap-3">
            <span className="text-3xl">🛡️</span>
            <span className="text-xl font-black">XỬ LÝ KHỦNG HOẢNG</span>
          </div>
          <div className="text-2xl font-black text-amber-300">
            FIX LỖI CRITICAL TỨC THỜI CHO TRIỆU USER
          </div>
        </div>
      </div>

      {/* Subtitle Box */}
      <SubtitleBox subtitleText={subtitleText} durationInFrames={durationInFrames} />
    </div>
  );
};
