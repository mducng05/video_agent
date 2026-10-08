import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import { BrandHeader } from "../components/BrandHeader";
import { SubtitleBox } from "../components/SubtitleBox";

interface SceneProps {
  subtitleText: string;
  durationInFrames: number;
}

export const Scene6Hybrid: React.FC<SceneProps> = ({
  subtitleText,
  durationInFrames,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleSpring = spring({ frame, fps, config: { damping: 14, stiffness: 100 } });
  const shield1 = spring({ frame: frame - 10, fps, config: { damping: 14, stiffness: 90 } });
  const shield2 = spring({ frame: frame - 22, fps, config: { damping: 14, stiffness: 90 } });
  const rotation = spring({ frame: frame - 36, fps, config: { damping: 12, stiffness: 100 } });

  return (
    <div className="w-[1080px] h-[1920px] bg-gradient-to-br from-white via-sky-50 to-blue-100 text-slate-900 flex flex-col justify-between relative overflow-hidden select-none font-sans">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0284c710_1px,transparent_1px),linear-gradient(to_bottom,#0284c710_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-emerald-300/30 rounded-full blur-3xl pointer-events-none" />

      {/* Brand Header */}
      <BrandHeader currentCategory="PHẦN 5: KIẾN TRÚC LAI TỐI ƯU" metricBadge="GOLD STANDARD: HYBRID SHIELD" />

      {/* Main Content */}
      <div className="w-[960px] mx-auto flex-1 flex flex-col justify-center gap-6 z-10 py-4">
        {/* Title */}
        <div style={{ transform: `scale(${titleSpring})` }} className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-100 text-emerald-800 font-extrabold text-lg border border-emerald-300">
            <span>🛡️ GIẢI PHÁP CHUẨN CỦA CHUYÊN GIA</span>
          </div>
          <h2 className="text-6xl font-black text-slate-950 tracking-tight">
            Kiến Trúc Lai <span className="text-emerald-700">Hybrid Security</span>
          </h2>
          <p className="text-2xl font-bold text-slate-600">
            Kết hợp hoàn hảo sức mạnh của cả JWT và HttpOnly Cookie
          </p>
        </div>

        {/* 2 Main Shields */}
        <div className="flex flex-col gap-4 w-full">
          {/* Shield 1: Short-lived Access Token */}
          <div
            style={{ opacity: shield1, transform: `translateY(${(1 - shield1) * 30}px)` }}
            className="w-full bg-white/95 rounded-3xl p-6 border-3 border-indigo-300 shadow-xl flex items-center justify-between"
          >
            <div className="space-y-1">
              <span className="text-sm font-black text-indigo-700 uppercase">
                LỚP 1 • TRUY CẬP API TỨC THỜI
              </span>
              <h3 className="text-3xl font-black text-slate-900">
                Access Token JWT (Hạn Chỉ 5 Phút)
              </h3>
              <p className="text-xl font-bold text-slate-600">
                Lưu trong RAM trình duyệt • Hạn cực ngắn, hạn chế rò rỉ tối đa
              </p>
            </div>
            <div className="text-right pl-6 border-l-2 border-indigo-200">
              <div className="text-4xl font-black text-indigo-600">5 PHÚT</div>
              <span className="text-xs font-black uppercase text-indigo-700">Short Lived</span>
            </div>
          </div>

          {/* Shield 2: Secure HttpOnly Refresh Token */}
          <div
            style={{ opacity: shield2, transform: `translateY(${(1 - shield2) * 30}px)` }}
            className="w-full bg-white/95 rounded-3xl p-6 border-3 border-emerald-400 shadow-xl flex items-center justify-between"
          >
            <div className="space-y-1">
              <span className="text-sm font-black text-emerald-700 uppercase">
                LỚP 2 • LÀM MỚI BẢO MẬT
              </span>
              <h3 className="text-3xl font-black text-slate-900">
                Refresh Token Trong HttpOnly Cookie
              </h3>
              <p className="text-xl font-bold text-slate-600">
                Miễn nhiễm hoàn toàn trước XSS • Lưu an toàn phía trình duyệt
              </p>
            </div>
            <div className="text-right pl-6 border-l-2 border-emerald-200">
              <div className="text-4xl font-black text-emerald-600">HTTPONLY</div>
              <span className="text-xs font-black uppercase text-emerald-700">Anti-XSS Safe</span>
            </div>
          </div>
        </div>

        {/* Feature 3: Token Rotation Banner */}
        <div
          style={{ opacity: rotation, transform: `scale(${rotation})` }}
          className="w-full bg-gradient-to-r from-emerald-800 to-teal-900 text-white rounded-2xl p-5 shadow-xl border border-emerald-400 flex items-center justify-between"
        >
          <div className="flex items-center gap-4">
            <span className="text-4xl">🔄</span>
            <div>
              <div className="text-xl font-black text-amber-300">CƠ CHẾ REFRESH TOKEN ROTATION</div>
              <div className="text-2xl font-black text-white">
                Mỗi lần cấp mới, hủy ngay token cũ — Phát hiện và chặn đứng tái sử dụng token trộm!
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
