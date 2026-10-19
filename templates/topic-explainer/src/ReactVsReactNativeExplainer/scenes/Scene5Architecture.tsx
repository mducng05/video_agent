import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import { BrandHeader } from "../components/BrandHeader";
import { SubtitleBox } from "../components/SubtitleBox";

interface SceneProps {
  subtitleText: string;
  durationInFrames: number;
}

export const Scene5Architecture: React.FC<SceneProps> = ({
  subtitleText,
  durationInFrames,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleSpring = spring({ frame, fps, config: { damping: 14, stiffness: 100 } });
  const browserArchSpring = spring({ frame: frame - 12, fps, config: { damping: 14, stiffness: 90 } });
  const rnArchSpring = spring({ frame: frame - 25, fps, config: { damping: 14, stiffness: 90 } });
  const jsiBadgeSpring = spring({ frame: frame - 40, fps, config: { damping: 12, stiffness: 110 } });

  return (
    <div className="w-[1080px] h-[1920px] bg-gradient-to-br from-white via-orange-50/70 to-amber-50 text-slate-900 flex flex-col justify-between relative overflow-hidden select-none font-sans">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ea580c0f_1px,transparent_1px),linear-gradient(to_bottom,#ea580c0f_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
      <div className="absolute top-1/4 -right-24 w-96 h-96 bg-orange-300/35 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 -left-24 w-96 h-96 bg-amber-300/30 rounded-full blur-3xl pointer-events-none" />

      <BrandHeader currentCategory="KIẾN TRÚC VẬN HÀNH" metricBadge="ENGINE: BROWSER VS JSI & FABRIC" />

      <div className="w-[960px] mx-auto flex-1 flex flex-col justify-center gap-7 z-10 py-6">
        {/* Title */}
        <div style={{ transform: `scale(${titleSpring})` }} className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-orange-500 text-white font-black text-lg shadow-sm uppercase">
            <span>⚙️ ĐỘNG CƠ THỰC THI BÊN DƯỚI</span>
          </div>
          <h1 className="text-6xl font-black text-slate-950 tracking-tight leading-tight">
            Engine Trình Duyệt <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500">
              Đối Đầu JSI & Fabric
            </span>
          </h1>
          <p className="text-2xl font-extrabold text-slate-600">
            Bước Đột Phá Loại Bỏ Hoàn Toàn Điểm Nghẽn Cũ
          </p>
        </div>

        {/* 2 Architecture Pipelines */}
        <div className="flex flex-col gap-5 w-full">
          {/* React JS Architecture Pipeline */}
          <div
            style={{ opacity: browserArchSpring, transform: `translateY(${(1 - browserArchSpring) * 25}px)` }}
            className="w-full bg-white/95 rounded-3xl p-6 border-2 border-orange-200 shadow-xl shadow-orange-950/5 space-y-3"
          >
            <div className="flex items-center justify-between pb-2 border-b border-orange-100">
              <span className="text-xl font-black text-slate-900">
                🌐 REACT JS: BROWSER ENGINE PIPELINE
              </span>
              <span className="text-sm font-extrabold px-3 py-1 rounded-full bg-orange-100 text-orange-900">
                Single Thread Event Loop
              </span>
            </div>
            <div className="grid grid-cols-3 gap-3 pt-1">
              <div className="bg-orange-50/80 p-3 rounded-xl border border-orange-200 text-center space-y-1">
                <div className="text-xs font-black text-orange-700 uppercase">BƯỚC 1</div>
                <div className="text-lg font-black text-slate-900">V8 / JS Engine</div>
                <p className="text-xs font-bold text-slate-600">Thực thi React Hooks & State</p>
              </div>
              <div className="bg-orange-50/80 p-3 rounded-xl border border-orange-200 text-center space-y-1">
                <div className="text-xs font-black text-orange-700 uppercase">BƯỚC 2</div>
                <div className="text-lg font-black text-slate-900">DOM Tree Update</div>
                <p className="text-xs font-bold text-slate-600">Ghép nhánh qua document API</p>
              </div>
              <div className="bg-orange-50/80 p-3 rounded-xl border border-orange-200 text-center space-y-1">
                <div className="text-xs font-black text-orange-700 uppercase">BƯỚC 3</div>
                <div className="text-lg font-black text-slate-900">Raster & Paint</div>
                <p className="text-xs font-bold text-slate-600">GPU vẽ pixel lên màn hình</p>
              </div>
            </div>
          </div>

          {/* React Native New Architecture Pipeline */}
          <div
            style={{ opacity: rnArchSpring, transform: `translateY(${(1 - rnArchSpring) * 25}px)` }}
            className="w-full bg-white/95 rounded-3xl p-6 border-2 border-amber-300 shadow-xl shadow-amber-950/5 space-y-3"
          >
            <div className="flex items-center justify-between pb-2 border-b border-amber-100">
              <span className="text-xl font-black text-slate-900">
                📱 REACT NATIVE: NEW ARCHITECTURE
              </span>
              <span className="text-sm font-extrabold px-3 py-1 rounded-full bg-amber-100 text-amber-900">
                JSI + C++ Direct Call
              </span>
            </div>
            <div className="grid grid-cols-3 gap-3 pt-1">
              <div className="bg-amber-50/80 p-3 rounded-xl border border-amber-200 text-center space-y-1">
                <div className="text-xs font-black text-amber-700 uppercase">HERMES ENGINE</div>
                <div className="text-lg font-black text-slate-900">Bytecode AOT</div>
                <p className="text-xs font-bold text-slate-600">Khởi động app dưới 0.1 giây</p>
              </div>
              <div className="bg-amber-50/80 p-3 rounded-xl border border-amber-200 text-center space-y-1">
                <div className="text-xs font-black text-amber-700 uppercase">JSI INTERFACE</div>
                <div className="text-lg font-black text-slate-900">C++ Shared Memory</div>
                <p className="text-xs font-bold text-slate-600">Gọi hàm trực tiếp, 0 serial JSON</p>
              </div>
              <div className="bg-amber-50/80 p-3 rounded-xl border border-amber-200 text-center space-y-1">
                <div className="text-xs font-black text-amber-700 uppercase">FABRIC RENDERER</div>
                <div className="text-lg font-black text-slate-900">Native UI Thread</div>
                <p className="text-xs font-bold text-slate-600">Mượt mà 60-120 FPS không rớt frame</p>
              </div>
            </div>
          </div>
        </div>

        {/* Breakthrough Badge */}
        <div
          style={{ transform: `scale(${jsiBadgeSpring})` }}
          className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-orange-600 via-amber-600 to-orange-700 text-white shadow-xl shadow-orange-600/20 flex items-center justify-between border border-orange-400"
        >
          <div className="flex items-center gap-3">
            <span className="text-3xl">🚀</span>
            <span className="text-xl font-black tracking-wide">
              ĐỘT PHÁ JSI: KHÔNG CÒN NGHẼN BRIDGE
            </span>
          </div>
          <div className="text-lg font-black text-amber-200">
            TỐC ĐỘ GIAO TIẾP TƯƠNG ĐƯƠNG NATIVE THUẦN
          </div>
        </div>
      </div>

      <SubtitleBox subtitleText={subtitleText} durationInFrames={durationInFrames} />
    </div>
  );
};
