import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import { BrandHeader } from "../components/BrandHeader";
import { SubtitleBox } from "../components/SubtitleBox";

interface SceneProps {
  subtitleText: string;
  durationInFrames: number;
}

export const Scene5JwtRisks: React.FC<SceneProps> = ({
  subtitleText,
  durationInFrames,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleSpring = spring({ frame, fps, config: { damping: 14, stiffness: 100 } });
  const danger1 = spring({ frame: frame - 10, fps, config: { damping: 14, stiffness: 90 } });
  const danger2 = spring({ frame: frame - 25, fps, config: { damping: 14, stiffness: 90 } });
  const bottomAlert = spring({ frame: frame - 40, fps, config: { damping: 12, stiffness: 100 } });

  return (
    <div className="w-[1080px] h-[1920px] bg-gradient-to-br from-white via-sky-50 to-blue-100 text-slate-900 flex flex-col justify-between relative overflow-hidden select-none font-sans">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0284c710_1px,transparent_1px),linear-gradient(to_bottom,#0284c710_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
      <div className="absolute top-1/3 -left-20 w-96 h-96 bg-red-300/30 rounded-full blur-3xl pointer-events-none" />

      {/* Brand Header */}
      <BrandHeader currentCategory="PHẦN 4: HIỂM HỌA BẢO MẬT JWT" metricBadge="HAZARD: REVOKE & XSS" />

      {/* Main Content */}
      <div className="w-[960px] mx-auto flex-1 flex flex-col justify-center gap-6 z-10 py-4">
        {/* Title */}
        <div style={{ transform: `scale(${titleSpring})` }} className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-red-100 text-red-800 font-extrabold text-lg border border-red-300">
            <span>🚨 CẢNH BÁO LỖ HỔNG CHÍ MẠNG</span>
          </div>
          <h2 className="text-6xl font-black text-slate-950 tracking-tight">
            Góc Khuất Nguy Hiểm Của <span className="text-red-600">JWT</span>
          </h2>
          <p className="text-2xl font-bold text-slate-600">
            Không thể thu hồi tức thì & nguy cơ rò rỉ token qua XSS
          </p>
        </div>

        {/* 2 Danger Cards */}
        <div className="flex flex-col gap-5 w-full">
          {/* Danger 1: Revocation */}
          <div
            style={{ opacity: danger1, transform: `translateY(${(1 - danger1) * 30}px)` }}
            className="w-full bg-red-50/95 rounded-3xl p-6 border-3 border-red-500 shadow-xl flex items-center justify-between"
          >
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-red-200 text-red-950 font-black text-base">
                <span>⛔ KHÔNG THỂ HỦY TOKEN TRƯỚC HẠN</span>
              </div>
              <h3 className="text-3xl font-black text-red-950">
                Token Bị Lộ = Hacker Toàn Quyền
              </h3>
              <p className="text-xl font-bold text-red-800">
                Dù bạn đổi mật khẩu, token cũ vẫn hợp lệ cho đến khi hết hạn!
              </p>
            </div>
            <div className="text-right pl-6 border-l-2 border-red-300">
              <div className="text-4xl font-black text-red-700">NO REVOKE</div>
              <span className="text-xs font-black uppercase text-red-600">Stateless Trap</span>
            </div>
          </div>

          {/* Danger 2: LocalStorage XSS */}
          <div
            style={{ opacity: danger2, transform: `translateY(${(1 - danger2) * 30}px)` }}
            className="w-full bg-amber-50/95 rounded-3xl p-6 border-3 border-amber-400 shadow-xl flex items-center justify-between"
          >
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-amber-200 text-amber-950 font-black text-base">
                <span>⚠️ LƯU TRỮ TRONG LOCALSTORAGE</span>
              </div>
              <h3 className="text-3xl font-black text-amber-950">
                Phơi Bày Trước Cuộc Tấn Công XSS
              </h3>
              <p className="text-xl font-bold text-amber-900">
                Bất kỳ đoạn JavaScript độc hại nào cũng có thể đánh cắp token dễ dàng!
              </p>
            </div>
            <div className="text-right pl-6 border-l-2 border-amber-300">
              <div className="text-4xl font-black text-amber-700">XSS VULN</div>
              <span className="text-xs font-black uppercase text-amber-800">Local Storage</span>
            </div>
          </div>
        </div>

        {/* Callout Warning */}
        <div
          style={{ opacity: bottomAlert, transform: `scale(${bottomAlert})` }}
          className="w-full bg-slate-900 text-white rounded-2xl p-5 shadow-xl border border-red-500 flex items-center justify-between"
        >
          <div className="flex items-center gap-4">
            <span className="text-4xl">🛡️</span>
            <div>
              <div className="text-xl font-black text-rose-400">GIẢI PHÁP ĐỘT PHÁ LÀ GÌ?</div>
              <div className="text-2xl font-black text-white">
                Hãy Kết Hợp Kiến Trúc Lai (Hybrid Architecture)!
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtitle Box */}
      <SubtitleBox subtitleText={subtitleText} durationInFrames={durationInFrames} />
    </div>
  );
};
