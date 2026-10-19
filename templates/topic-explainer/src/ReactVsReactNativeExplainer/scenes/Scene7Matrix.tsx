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
  const row1Spring = spring({ frame: frame - 10, fps, config: { damping: 14, stiffness: 90 } });
  const row2Spring = spring({ frame: frame - 20, fps, config: { damping: 14, stiffness: 90 } });
  const row3Spring = spring({ frame: frame - 30, fps, config: { damping: 14, stiffness: 90 } });
  const row4Spring = spring({ frame: frame - 40, fps, config: { damping: 14, stiffness: 90 } });
  const row5Spring = spring({ frame: frame - 50, fps, config: { damping: 14, stiffness: 90 } });

  return (
    <div className="w-[1080px] h-[1920px] bg-gradient-to-br from-white via-orange-50/70 to-amber-50 text-slate-900 flex flex-col justify-between relative overflow-hidden select-none font-sans">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ea580c0f_1px,transparent_1px),linear-gradient(to_bottom,#ea580c0f_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
      <div className="absolute top-1/4 -right-24 w-96 h-96 bg-orange-300/35 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 -left-24 w-96 h-96 bg-amber-300/30 rounded-full blur-3xl pointer-events-none" />

      <BrandHeader currentCategory="MA TRẬN QUYẾT ĐỊNH" metricBadge="COMPARISON MATRIX: REACT VS RN" />

      <div className="w-[960px] mx-auto flex-1 flex flex-col justify-center gap-7 z-10 py-6">
        {/* Title */}
        <div style={{ transform: `scale(${titleSpring})` }} className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-orange-500 text-white font-black text-lg shadow-sm uppercase">
            <span>📊 BẢNG TỔNG KẾT ĐẶC TẢ KỸ THUẬT</span>
          </div>
          <h1 className="text-6xl font-black text-slate-950 tracking-tight leading-tight">
            Ma Trận So Sánh <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500">
              Chi Tiết Từng Tiêu Chí
            </span>
          </h1>
          <p className="text-2xl font-extrabold text-slate-600">
            Nắm Trọn Bức Tranh Toàn Cảnh Trong Một Ánh Nhìn
          </p>
        </div>

        {/* Matrix Table */}
        <div className="w-full bg-white/95 rounded-3xl p-6 border-2 border-orange-200 shadow-xl shadow-orange-950/5 space-y-3">
          {/* Table Header */}
          <div className="grid grid-cols-12 gap-3 pb-3 border-b-2 border-orange-200 text-slate-900 font-black text-lg">
            <div className="col-span-4 text-slate-600 uppercase">TIÊU CHÍ</div>
            <div className="col-span-4 text-orange-600 uppercase">🌐 REACT JS (WEB)</div>
            <div className="col-span-4 text-amber-700 uppercase">📱 REACT NATIVE (APP)</div>
          </div>

          {/* Row 1 */}
          <div
            style={{ opacity: row1Spring, transform: `translateY(${(1 - row1Spring) * 15}px)` }}
            className="grid grid-cols-12 gap-3 py-3 border-b border-orange-100 items-center text-base"
          >
            <div className="col-span-4 font-black text-slate-900">Nền Tảng Đích</div>
            <div className="col-span-4 font-bold text-slate-700">Trình duyệt Web</div>
            <div className="col-span-4 font-black text-amber-600">iOS & Android Mobile</div>
          </div>

          {/* Row 2 */}
          <div
            style={{ opacity: row2Spring, transform: `translateY(${(1 - row2Spring) * 15}px)` }}
            className="grid grid-cols-12 gap-3 py-3 border-b border-orange-100 items-center text-base"
          >
            <div className="col-span-4 font-black text-slate-900">Cơ Chế Render</div>
            <div className="col-span-4 font-bold text-slate-700">Virtual DOM ➔ HTML</div>
            <div className="col-span-4 font-black text-amber-600">Native UI (UIView / View)</div>
          </div>

          {/* Row 3 */}
          <div
            style={{ opacity: row3Spring, transform: `translateY(${(1 - row3Spring) * 15}px)` }}
            className="grid grid-cols-12 gap-3 py-3 border-b border-orange-100 items-center text-base"
          >
            <div className="col-span-4 font-black text-slate-900">Tối Ưu SEO</div>
            <div className="col-span-4 font-black text-emerald-600">Tuyệt vời (SSR / Next.js)</div>
            <div className="col-span-4 font-bold text-slate-500">Không áp dụng (App Store)</div>
          </div>

          {/* Row 4 */}
          <div
            style={{ opacity: row4Spring, transform: `translateY(${(1 - row4Spring) * 15}px)` }}
            className="grid grid-cols-12 gap-3 py-3 border-b border-orange-100 items-center text-base"
          >
            <div className="col-span-4 font-black text-slate-900">Tốc Độ Cập Nhật</div>
            <div className="col-span-4 font-black text-orange-600">Tức thì qua Cloud CDN</div>
            <div className="col-span-4 font-bold text-slate-700">Chờ duyệt Store / OTA</div>
          </div>

          {/* Row 5 */}
          <div
            style={{ opacity: row5Spring, transform: `translateY(${(1 - row5Spring) * 15}px)` }}
            className="grid grid-cols-12 gap-3 pt-3 items-center text-base"
          >
            <div className="col-span-4 font-black text-slate-900">Tái Sử Dụng Code</div>
            <div className="col-span-8 font-black text-orange-600 bg-orange-50/80 p-2.5 rounded-xl border border-orange-200 text-center">
              Tái sử dụng tới 80% Logic nghiệp vụ, Custom Hooks & API Client!
            </div>
          </div>
        </div>

        {/* Bottom Takeaway */}
        <div className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-orange-600 to-amber-600 text-white shadow-xl shadow-orange-600/20 text-center text-xl font-black">
          💡 HỌC 1 LẦN — VIẾT CHO MỌI NƠI (LEARN ONCE, WRITE ANYWHERE)
        </div>
      </div>

      <SubtitleBox subtitleText={subtitleText} durationInFrames={durationInFrames} />
    </div>
  );
};
