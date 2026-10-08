import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import { BrandHeader } from "../components/BrandHeader";
import { SubtitleBox } from "../components/SubtitleBox";

interface SceneProps {
  subtitleText: string;
  durationInFrames: number;
}

export const Scene3SessionFlaws: React.FC<SceneProps> = ({
  subtitleText,
  durationInFrames,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleSpring = spring({ frame, fps, config: { damping: 14, stiffness: 100 } });
  const flaw1 = spring({ frame: frame - 10, fps, config: { damping: 14, stiffness: 90 } });
  const flaw2 = spring({ frame: frame - 24, fps, config: { damping: 14, stiffness: 90 } });
  const bottomCard = spring({ frame: frame - 38, fps, config: { damping: 12, stiffness: 100 } });

  return (
    <div className="w-[1080px] h-[1920px] bg-gradient-to-br from-white via-sky-50 to-blue-100 text-slate-900 flex flex-col justify-between relative overflow-hidden select-none font-sans">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0284c710_1px,transparent_1px),linear-gradient(to_bottom,#0284c710_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-red-200/30 rounded-full blur-3xl pointer-events-none" />

      {/* Brand Header */}
      <BrandHeader currentCategory="PHẦN 2: ĐIỂM NGHẼN SESSION" metricBadge="FLAW: SCALE & CSRF RISKS" />

      {/* Main Content */}
      <div className="w-[960px] mx-auto flex-1 flex flex-col justify-center gap-6 z-10 py-4">
        {/* Title */}
        <div style={{ transform: `scale(${titleSpring})` }} className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-red-100 text-red-800 font-extrabold text-lg border border-red-300">
            <span>⚠️ TRỞ NGẠI KHI HỆ THỐNG PHÌNH TO</span>
          </div>
          <h2 className="text-6xl font-black text-slate-950 tracking-tight">
            Điểm Yếu Của <span className="text-red-600">Session Cookie</span>
          </h2>
          <p className="text-2xl font-bold text-slate-600">
            Nghẽn mở rộng cụm máy chủ & hiểm họa tấn công CSRF
          </p>
        </div>

        {/* 2 Flaw Breakdown Cards */}
        <div className="flex flex-col gap-5 w-full">
          {/* Flaw 1: Scaling Bottleneck */}
          <div
            style={{ opacity: flaw1, transform: `translateY(${(1 - flaw1) * 30}px)` }}
            className="w-full bg-white/95 rounded-3xl p-6 border-3 border-amber-300 shadow-xl flex items-center justify-between"
          >
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-amber-100 text-amber-900 font-black text-base">
                <span>⚡ KHÓ KHĂN KHI MỞ RỘNG (SCALING)</span>
              </div>
              <h3 className="text-3xl font-black text-slate-900">
                Nghẽn Cụm Microservices Đa Server
              </h3>
              <p className="text-xl font-bold text-slate-600">
                Hàng trăm máy chủ phải đồng bộ liên tục vào cụm Redis tập trung
              </p>
            </div>
            <div className="text-right pl-6 border-l-2 border-amber-200">
              <div className="text-4xl font-black text-amber-600">SPOF</div>
              <span className="text-xs font-black uppercase text-amber-700">Centralized DB</span>
            </div>
          </div>

          {/* Flaw 2: CSRF Risk */}
          <div
            style={{ opacity: flaw2, transform: `translateY(${(1 - flaw2) * 30}px)` }}
            className="w-full bg-white/95 rounded-3xl p-6 border-3 border-red-400 shadow-xl flex items-center justify-between"
          >
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-red-100 text-red-800 font-black text-base">
                <span>🚨 LỖ HỔNG BẢO MẬT BROWSER</span>
              </div>
              <h3 className="text-3xl font-black text-slate-900">
                Hiểm Họa CSRF (Giả Mạo Yêu Cầu)
              </h3>
              <p className="text-xl font-bold text-slate-600">
                Trình duyệt tự động đính kèm Cookie ngay cả từ trang web độc hại
              </p>
            </div>
            <div className="text-right pl-6 border-l-2 border-red-200">
              <div className="text-4xl font-black text-red-600">CSRF</div>
              <span className="text-xs font-black uppercase text-red-600">Needs SameSite</span>
            </div>
          </div>
        </div>

        {/* Transition Conclusion Card */}
        <div
          style={{ opacity: bottomCard, transform: `scale(${bottomCard})` }}
          className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-slate-900 to-indigo-950 text-white shadow-xl flex items-center justify-between border border-indigo-400"
        >
          <div className="flex items-center gap-3">
            <span className="text-3xl">💡</span>
            <span className="text-xl font-black">GIẢI PHÁP THAY THẾ?</span>
          </div>
          <div className="text-2xl font-black text-cyan-300">
            KIẾN TRÚC KHÔNG TRẠNG THÁI: JWT!
          </div>
        </div>
      </div>

      {/* Subtitle Box */}
      <SubtitleBox subtitleText={subtitleText} durationInFrames={durationInFrames} />
    </div>
  );
};
