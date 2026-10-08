import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import { BrandHeader } from "../components/BrandHeader";
import { SubtitleBox } from "../components/SubtitleBox";

interface SceneProps {
  subtitleText: string;
  durationInFrames: number;
}

export const Scene7Matrix: React.FC<SceneProps> = ({
  subtitleText,
  durationInFrames,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleSpring = spring({ frame, fps, config: { damping: 14, stiffness: 100 } });
  const col1 = spring({ frame: frame - 10, fps, config: { damping: 14, stiffness: 90 } });
  const col2 = spring({ frame: frame - 22, fps, config: { damping: 14, stiffness: 90 } });
  const bottomBar = spring({ frame: frame - 36, fps, config: { damping: 12, stiffness: 100 } });

  return (
    <div className="w-[1080px] h-[1920px] bg-gradient-to-br from-white via-sky-50 to-blue-100 text-slate-900 flex flex-col justify-between relative overflow-hidden select-none font-sans">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0284c710_1px,transparent_1px),linear-gradient(to_bottom,#0284c710_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-300/30 rounded-full blur-3xl pointer-events-none" />

      {/* Brand Header */}
      <BrandHeader currentCategory="PHẦN 6: BẢNG MA TRẬN QUYẾT ĐỊNH" metricBadge="DECISION: CHỌN GÌ CHO ĐÚNG?" />

      {/* Main Content */}
      <div className="w-[960px] mx-auto flex-1 flex flex-col justify-center gap-6 z-10 py-4">
        {/* Title */}
        <div style={{ transform: `scale(${titleSpring})` }} className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-100 text-blue-800 font-extrabold text-lg border border-blue-300">
            <span>⚖️ HƯỚNG DẪN LỰA CHỌN THỰC CHIẾN</span>
          </div>
          <h2 className="text-6xl font-black text-slate-950 tracking-tight">
            Khi Nào Nên <span className="text-blue-700">Dùng Giải Pháp Nào?</span>
          </h2>
          <p className="text-2xl font-bold text-slate-600">
            Tùy thuộc quy mô hệ thống và tính chất của ứng dụng
          </p>
        </div>

        {/* 2 Decision Columns */}
        <div className="grid grid-cols-2 gap-5 w-full">
          {/* Column 1: Session Cookie */}
          <div
            style={{ opacity: col1, transform: `translateY(${(1 - col1) * 30}px)` }}
            className="bg-white/95 rounded-3xl p-6 border-3 border-emerald-300 shadow-xl flex flex-col justify-between space-y-4"
          >
            <div>
              <div className="inline-block px-3.5 py-1 rounded-xl bg-emerald-100 text-emerald-800 font-black text-base">
                🍪 NÊN CHỌN SESSION
              </div>
              <h3 className="text-3xl font-black text-slate-900 mt-2">
                Web Monolith & Banking
              </h3>
              <ul className="space-y-3 mt-4 text-lg font-bold text-slate-600">
                <li className="flex items-center gap-2">
                  <span className="text-emerald-600 text-xl">✓</span> Web truyền thống (SSR, Laravel, Rails)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-600 text-xl">✓</span> Yêu cầu hủy quyền tức thì 100%
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-600 text-xl">✓</span> Hoạt động trên cùng một domain
                </li>
              </ul>
            </div>
            <div className="p-3 rounded-xl bg-emerald-50 text-emerald-900 font-extrabold text-center text-sm border border-emerald-200">
              Kiểm Soát Tối Thượng
            </div>
          </div>

          {/* Column 2: JWT Hybrid */}
          <div
            style={{ opacity: col2, transform: `translateY(${(1 - col2) * 30}px)` }}
            className="bg-white/95 rounded-3xl p-6 border-3 border-indigo-300 shadow-xl flex flex-col justify-between space-y-4"
          >
            <div>
              <div className="inline-block px-3.5 py-1 rounded-xl bg-indigo-100 text-indigo-800 font-black text-base">
                🔑 NÊN CHỌN JWT
              </div>
              <h3 className="text-3xl font-black text-slate-900 mt-2">
                Microservices & Mobile App
              </h3>
              <ul className="space-y-3 mt-4 text-lg font-bold text-slate-600">
                <li className="flex items-center gap-2">
                  <span className="text-indigo-600 text-xl">✓</span> Ứng dụng Mobile (iOS / Android)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-indigo-600 text-xl">✓</span> Cụm Microservices đa server
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-indigo-600 text-xl">✓</span> Hệ sinh thái Single Sign-On (SSO)
                </li>
              </ul>
            </div>
            <div className="p-3 rounded-xl bg-indigo-50 text-indigo-900 font-extrabold text-center text-sm border border-indigo-200">
              Mở Rộng Không Giới Hạn
            </div>
          </div>
        </div>

        {/* Bottom Takeaway Bar */}
        <div
          style={{ opacity: bottomBar, transform: `scale(${bottomBar})` }}
          className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-900 text-white shadow-xl flex items-center justify-between border border-blue-400"
        >
          <div className="flex items-center gap-3">
            <span className="text-3xl">🎯</span>
            <span className="text-xl font-black">LỰA CHỌN ĐÚNG KIẾN TRÚC</span>
          </div>
          <div className="text-2xl font-black text-amber-300">
            TIẾT KIỆM 90% CHI PHÍ VẬN HÀNH
          </div>
        </div>
      </div>

      {/* Subtitle Box */}
      <SubtitleBox subtitleText={subtitleText} durationInFrames={durationInFrames} />
    </div>
  );
};
