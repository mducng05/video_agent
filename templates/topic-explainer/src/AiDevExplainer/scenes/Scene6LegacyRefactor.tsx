import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import { BrandHeader } from "../components/BrandHeader";
import { SubtitleBox } from "../components/SubtitleBox";

interface SceneProps {
  subtitleText: string;
  durationInFrames: number;
}

export const Scene6LegacyRefactor: React.FC<SceneProps> = ({
  subtitleText,
  durationInFrames,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleSpring = spring({ frame, fps, config: { damping: 14, stiffness: 100 } });
  const modelSpring = spring({ frame: frame - 10, fps, config: { damping: 13, stiffness: 90 } });

  return (
    <div className="w-[1080px] h-[1920px] bg-gradient-to-b from-[#060919] via-[#0d1330] to-[#070b1f] text-white flex flex-col justify-between relative overflow-hidden select-none font-sans">
      {/* AI Cyber Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#a855f712_1px,transparent_1px),linear-gradient(to_bottom,#a855f712_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-[650px] h-[650px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />

      {/* Brand Header */}
      <BrandHeader currentCategory="15:30 CHIỀU" metricBadge="LEGACY REFACTORING" />

      {/* Main Content */}
      <div className="w-[980px] mx-auto flex-1 flex flex-col justify-center gap-6 z-10 py-2">
        {/* Title */}
        <div style={{ transform: `scale(${titleSpring})` }} className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-purple-950/90 border border-purple-400/50">
            <span className="text-2xl">🔄</span>
            <span className="text-xl font-black text-purple-300 tracking-wider">
              TÁI CẤU TRÚC MÃ NGUỒN CŨ
            </span>
          </div>
          <h2 className="text-6xl font-black text-white tracking-tight">
            Chuyển Đổi Hệ Thống <span className="text-cyan-400">Từ Rối Như Tơ Vò</span>
          </h2>
          <p className="text-2xl font-bold text-slate-300">
            AI đọc hiểu mã nguồn 10 năm trước và vẽ lại kiến trúc Clean Architecture
          </p>
        </div>

        {/* Legacy Modernization Model */}
        <div
          style={{ opacity: modelSpring, transform: `translateY(${(1 - modelSpring) * 30}px)` }}
          className="w-full bg-slate-900/90 rounded-3xl p-6 border-2 border-purple-500/60 shadow-[0_0_35px_rgba(168,85,247,0.3)] flex flex-col gap-4 font-mono"
        >
          <div className="flex items-center justify-between border-b border-purple-500/30 pb-2">
            <span className="text-lg font-black text-purple-300">
              MÔ HÌNH NÂNG CẤP KIẾN TRÚC DOANH NGHIỆP (MODERNIZATION ENGINE)
            </span>
            <span className="text-xs px-2.5 py-1 rounded bg-purple-950 text-cyan-300 border border-purple-500/40">
              CODE EVOLUTION
            </span>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* Legacy Monolith */}
            <div className="bg-slate-950 p-5 rounded-2xl border border-rose-500/40 flex flex-col justify-between gap-3 shadow-lg">
              <div className="flex items-center justify-between border-b border-rose-500/20 pb-2">
                <span className="text-xs font-bold text-rose-400">DỰ ÁN CŨ (LEGACY SPAGHETTI)</span>
                <span className="text-xl">🍝</span>
              </div>
              <div className="space-y-1.5 text-xs text-rose-200">
                <p>❌ File code 5,000 dòng không chú thích</p>
                <p>❌ Người viết code đã nghỉ việc 5 năm</p>
                <p>❌ Sửa 1 chỗ, gãy toàn bộ tính năng khác</p>
                <p>❌ Không có tài liệu API Swagger</p>
              </div>
              <div className="p-2.5 rounded-xl bg-rose-950/60 text-rose-300 text-xs font-bold text-center">
                Cơn ác mộng của mọi Developer
              </div>
            </div>

            {/* AI Modern Architecture */}
            <div className="bg-gradient-to-b from-purple-950/90 to-cyan-950/90 p-5 rounded-2xl border-2 border-cyan-400 flex flex-col justify-between gap-3 shadow-[0_0_25px_rgba(6,182,212,0.3)]">
              <div className="flex items-center justify-between border-b border-cyan-400/30 pb-2">
                <span className="text-xs font-bold text-cyan-300">CLEAN ARCHITECTURE BỞI AI</span>
                <span className="text-xl">✨</span>
              </div>
              <div className="space-y-1.5 text-xs text-cyan-100">
                <p>✓ Tự động vẽ sơ đồ luồng dữ liệu trực quan</p>
                <p>✓ Bóc tách thành các Module độc lập</p>
                <p>✓ Tự sinh tài liệu API Swagger chuẩn 100%</p>
                <p>✓ Viết test case bảo hộ trước khi Refactor</p>
              </div>
              <div className="p-2.5 rounded-xl bg-cyan-900/80 text-cyan-200 text-xs font-black text-center">
                Hệ thống sạch đẹp, dễ mở rộng
              </div>
            </div>
          </div>

          {/* Bottom Card */}
          <div className="bg-gradient-to-r from-purple-950 via-slate-900 to-cyan-950 p-4 rounded-2xl border border-purple-400/40 flex items-center justify-between font-sans">
            <span className="text-base font-bold text-white">
              💡 <b>Tái sinh dự án cũ:</b> Rút ngắn dự án chuyển đổi kiến trúc từ 6 tháng xuống còn 2 tuần!
            </span>
          </div>
        </div>
      </div>

      {/* Subtitle Box */}
      <SubtitleBox subtitleText={subtitleText} durationInFrames={durationInFrames} />
    </div>
  );
};
