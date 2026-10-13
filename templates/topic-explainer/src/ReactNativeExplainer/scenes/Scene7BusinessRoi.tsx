import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import { BrandHeader } from "../components/BrandHeader";
import { SubtitleBox } from "../components/SubtitleBox";

interface SceneProps {
  subtitleText: string;
  durationInFrames: number;
}

export const Scene7BusinessRoi: React.FC<SceneProps> = ({
  subtitleText,
  durationInFrames,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleSpring = spring({ frame, fps, config: { damping: 14, stiffness: 100 } });
  const card1 = spring({ frame: frame - 10, fps, config: { damping: 14, stiffness: 90 } });
  const card2 = spring({ frame: frame - 22, fps, config: { damping: 14, stiffness: 90 } });
  const card3 = spring({ frame: frame - 34, fps, config: { damping: 14, stiffness: 90 } });

  return (
    <div className="w-[1080px] h-[1920px] bg-gradient-to-br from-white via-sky-50 to-blue-100 text-slate-900 flex flex-col justify-between relative overflow-hidden select-none font-sans">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0284c710_1px,transparent_1px),linear-gradient(to_bottom,#0284c710_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-emerald-300/30 rounded-full blur-3xl pointer-events-none" />

      {/* Brand Header */}
      <BrandHeader currentCategory="HIỆU QUẢ KINH DOANH" metricBadge="BUSINESS ROI: -50% COST" />

      {/* Main Content */}
      <div className="w-[960px] mx-auto flex-1 flex flex-col justify-center gap-6 z-10 py-4">
        {/* Title */}
        <div style={{ transform: `scale(${titleSpring})` }} className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-100 text-emerald-800 font-extrabold text-lg border border-emerald-300">
            <span>📊 GIÁ TRỊ THỰC TIỄN CHO DOANH NGHIỆP</span>
          </div>
          <h2 className="text-6xl font-black text-slate-950 tracking-tight">
            Hiệu Quả Kinh Doanh <span className="text-emerald-700">Vượt Trội</span>
          </h2>
          <p className="text-2xl font-bold text-slate-600">
            Lựa chọn số 1 của Meta, Microsoft, Shopify, Tesla
          </p>
        </div>

        {/* 3 ROI Scoreboard Cards */}
        <div className="flex flex-col gap-4 w-full">
          {/* ROI 1 */}
          <div
            style={{ opacity: card1, transform: `translateY(${(1 - card1) * 30}px)` }}
            className="w-full bg-white/95 rounded-3xl p-6 border-3 border-emerald-300 shadow-xl flex items-center justify-between"
          >
            <div className="space-y-1">
              <span className="text-xs font-black text-emerald-700 uppercase">
                💰 CHI PHÍ ĐẦU TƯ
              </span>
              <h3 className="text-3xl font-black text-slate-900">
                Tiết Kiệm 50% Ngân Sách
              </h3>
              <p className="text-lg font-bold text-slate-500">
                Không cần nuôi 2 đội ngũ iOS & Android riêng biệt
              </p>
            </div>
            <div className="text-right pl-6 border-l-2 border-emerald-200">
              <div className="text-5xl font-black text-emerald-600">-50%</div>
              <span className="text-xs font-black text-emerald-700 uppercase">Cost Reduction</span>
            </div>
          </div>

          {/* ROI 2 */}
          <div
            style={{ opacity: card2, transform: `translateY(${(1 - card2) * 30}px)` }}
            className="w-full bg-white/95 rounded-3xl p-6 border-3 border-blue-300 shadow-xl flex items-center justify-between"
          >
            <div className="space-y-1">
              <span className="text-xs font-black text-blue-700 uppercase">
                ⏱️ THỜI GIAN GO-TO-MARKET
              </span>
              <h3 className="text-3xl font-black text-slate-900">
                Ra Mắt Nhanh Gấp 2 Lần
              </h3>
              <p className="text-lg font-bold text-slate-500">
                Phát hành đồng thời trên cả App Store & Google Play
              </p>
            </div>
            <div className="text-right pl-6 border-l-2 border-blue-200">
              <div className="text-5xl font-black text-blue-600">x2 NHANH</div>
              <span className="text-xs font-black text-blue-700 uppercase">Speed to Market</span>
            </div>
          </div>

          {/* ROI 3 */}
          <div
            style={{ opacity: card3, transform: `translateY(${(1 - card3) * 30}px)` }}
            className="w-full bg-white/95 rounded-3xl p-6 border-3 border-indigo-300 shadow-xl flex items-center justify-between"
          >
            <div className="space-y-1">
              <span className="text-xs font-black text-indigo-700 uppercase">
                👥 QUẢN TRỊ ĐỘI NGŨ
              </span>
              <h3 className="text-3xl font-black text-slate-900">
                1 Team Kỹ Thuật Tinh Gọn
              </h3>
              <p className="text-lg font-bold text-slate-500">
                Tái sử dụng 95% logic kinh doanh và giao diện UI
              </p>
            </div>
            <div className="text-right pl-6 border-l-2 border-indigo-200">
              <div className="text-5xl font-black text-indigo-600">95%</div>
              <span className="text-xs font-black text-indigo-700 uppercase">Code Sharing</span>
            </div>
          </div>
        </div>
      </div>

      {/* Subtitle Box */}
      <SubtitleBox subtitleText={subtitleText} durationInFrames={durationInFrames} />
    </div>
  );
};
