import React from "react";
import { Img, spring, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import { BrandHeader } from "../components/BrandHeader";
import { SubtitleBox } from "../components/SubtitleBox";

interface SceneProps {
  subtitleText: string;
  durationInFrames: number;
}

export const Scene8Outro: React.FC<SceneProps> = ({
  subtitleText,
  durationInFrames,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const cardSpring = spring({ frame, fps, config: { damping: 14, stiffness: 100 } });
  const buttonSpring = spring({ frame: frame - 20, fps, config: { damping: 12, stiffness: 120 } });

  return (
    <div className="w-[1080px] h-[1920px] bg-gradient-to-br from-white via-sky-50 to-blue-100 text-slate-900 flex flex-col justify-between relative overflow-hidden select-none font-sans">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0284c710_1px,transparent_1px),linear-gradient(to_bottom,#0284c710_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-96 h-96 bg-blue-300/30 rounded-full blur-3xl pointer-events-none" />

      {/* Brand Header */}
      <BrandHeader currentCategory="PWSOLUTIONS ENTERPRISE" metricBadge="SECURE CLOUD PLATFORM" />

      {/* Main Content */}
      <div className="w-[960px] mx-auto flex-1 flex flex-col justify-center items-center gap-7 z-10 py-4">
        {/* Central Enterprise Card */}
        <div
          style={{ transform: `scale(${cardSpring})` }}
          className="w-full bg-white/95 rounded-3xl p-8 border-3 border-blue-300 shadow-2xl flex flex-col items-center text-center space-y-6"
        >
          {/* Logo PWS */}
          <div className="w-24 h-24 rounded-2xl bg-white p-3 shadow-xl border-2 border-blue-200 flex items-center justify-center">
            <Img
              src={staticFile("pws-logo.png")}
              alt="PWS Logo"
              className="w-full h-full object-contain"
            />
          </div>

          <div className="space-y-2">
            <h2 className="text-5xl font-black text-blue-950 tracking-tight">
              PWSolutions / PWS Việt Nam
            </h2>
            <p className="text-2xl font-extrabold text-blue-700">
              Đối Tác Hạ Tầng Cloud Server & Tư Vấn Kiến Trúc Bảo Mật
            </p>
          </div>

          {/* 4 Feature Highlights Grid */}
          <div className="grid grid-cols-2 gap-4 w-full text-left pt-2">
            <div className="p-4 rounded-2xl bg-sky-50 border border-sky-200">
              <div className="text-lg font-black text-blue-900">🛡️ Kiến Trúc Xác Thực Chuẩn</div>
              <div className="text-sm font-bold text-slate-600">JWT Hybrid, OAuth2, SSO Enterprise</div>
            </div>
            <div className="p-4 rounded-2xl bg-indigo-50 border border-indigo-200">
              <div className="text-lg font-black text-indigo-900">⚡ Cloud Server NVMe</div>
              <div className="text-sm font-bold text-slate-600">Tốc độ I/O hàng trăm nghìn IOPS</div>
            </div>
            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200">
              <div className="text-lg font-black text-emerald-900">🔒 Chống Tấn Công DDoS</div>
              <div className="text-sm font-bold text-slate-600">Lớp tường lửa chuyên sâu đa tầng</div>
            </div>
            <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200">
              <div className="text-lg font-black text-blue-900">🌐 Uptime 99.99% Toàn Diện</div>
              <div className="text-sm font-bold text-slate-600">Đội ngũ kỹ thuật hỗ trợ 24/7/365</div>
            </div>
          </div>

          {/* Website URL */}
          <div className="w-full pt-4 border-t-2 border-slate-100 flex flex-col items-center">
            <span className="text-base font-extrabold text-slate-500 uppercase tracking-widest">
              Khám Phá Giải Pháp Tại
            </span>
            <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-sky-600 to-indigo-800 tracking-tight mt-1">
              pwsdata.vn
            </div>
          </div>

          {/* Action Button */}
          <div
            style={{ transform: `scale(${buttonSpring})` }}
            className="w-full py-5 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white font-black text-2xl shadow-xl border-2 border-blue-400 cursor-pointer flex items-center justify-center gap-3 tracking-wide"
          >
            <span>🚀</span>
            <span>TƯ VẤN & BẢO VỆ HẠ TẦNG NGAY HÔM NAY</span>
          </div>
        </div>
      </div>

      {/* Subtitle Box */}
      <SubtitleBox subtitleText={subtitleText} durationInFrames={durationInFrames} />
    </div>
  );
};
