import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import { BrandHeader } from "../components/BrandHeader";
import { SubtitleBox } from "../components/SubtitleBox";

interface SceneProps {
  subtitleText: string;
  durationInFrames: number;
}

export const Scene1Hook: React.FC<SceneProps> = ({
  subtitleText,
  durationInFrames,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleSpring = spring({ frame, fps, config: { damping: 14, stiffness: 100 } });
  const cookieSpring = spring({ frame: frame - 10, fps, config: { damping: 14, stiffness: 90 } });
  const jwtSpring = spring({ frame: frame - 25, fps, config: { damping: 14, stiffness: 90 } });
  const vsSpring = spring({ frame: frame - 40, fps, config: { damping: 12, stiffness: 120 } });

  return (
    <div className="w-[1080px] h-[1920px] bg-gradient-to-br from-white via-sky-50 to-blue-100 text-slate-900 flex flex-col justify-between relative overflow-hidden select-none font-sans">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0284c710_1px,transparent_1px),linear-gradient(to_bottom,#0284c710_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-blue-300/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 -left-20 w-96 h-96 bg-cyan-300/30 rounded-full blur-3xl pointer-events-none" />

      {/* Brand Header */}
      <BrandHeader currentCategory="BẢO MẬT & XÁC THỰC" metricBadge="AUTH DUEL: JWT VS SESSION" />

      {/* Main Duel Cockpit */}
      <div className="w-[960px] mx-auto flex-1 flex flex-col justify-center gap-7 z-10 py-6">
        {/* Main Title Badge */}
        <div style={{ transform: `scale(${titleSpring})` }} className="text-center space-y-3">
          <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-blue-600 text-white font-black text-xl tracking-wider shadow-md uppercase">
            <span>🛡️ BẢO MẬT ỨNG DỤNG WEB</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-black text-slate-950 tracking-tight leading-[1.15]">
            Giải Mã <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-sky-600 to-indigo-700">
              JWT vs Session Cookie
            </span>
          </h1>
          <p className="text-3xl font-extrabold text-slate-600">
            Đâu Là Tiêu Chuẩn Bảo Mật Cho Ứng Dụng Hiện Đại?
          </p>
        </div>

        {/* Duel Matchup Cards */}
        <div className="flex flex-col gap-5 w-full">
          {/* Card 1: Session Cookie */}
          <div
            style={{ opacity: cookieSpring, transform: `translateY(${(1 - cookieSpring) * 35}px)` }}
            className="w-full bg-white/95 rounded-3xl p-7 border-3 border-emerald-300 shadow-xl flex items-center justify-between"
          >
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-100 text-emerald-800 font-black text-base">
                <span>🍪 SESSION COOKIE (STATEFUL)</span>
              </div>
              <h3 className="text-3xl font-black text-slate-900">
                Lưu Trạng Thái Tại Server
              </h3>
              <p className="text-xl font-bold text-slate-600">
                Kiểm soát quyền tuyệt đối • Thu hồi phiên tức thì 100%
              </p>
            </div>
            <div className="text-right pl-6 border-l-2 border-emerald-200">
              <div className="text-4xl font-black text-emerald-600">STATEFUL</div>
              <span className="text-sm font-black text-emerald-700 uppercase">Server Vault</span>
            </div>
          </div>

          {/* Central VS Dilemma Banner */}
          <div
            style={{ transform: `scale(${vsSpring})` }}
            className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-800 text-white shadow-xl flex items-center justify-between border-2 border-blue-400"
          >
            <div className="flex items-center gap-3">
              <span className="text-3xl">⚖️</span>
              <span className="text-2xl font-black tracking-wide">
                CÂN NÃO LỰA CHỌN KIẾN TRÚC
              </span>
            </div>
            <div className="text-2xl font-black text-amber-300 tracking-tight">
              AI AN TOÀN HƠN?
            </div>
          </div>

          {/* Card 2: JSON Web Token */}
          <div
            style={{ opacity: jwtSpring, transform: `translateY(${(1 - jwtSpring) * 35}px)` }}
            className="w-full bg-white/95 rounded-3xl p-7 border-3 border-indigo-300 shadow-xl flex items-center justify-between"
          >
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-indigo-100 text-indigo-800 font-black text-base">
                <span>🔑 JSON WEB TOKEN (STATELESS)</span>
              </div>
              <h3 className="text-3xl font-black text-slate-900">
                Xác Thực Không Cần Bộ Nhớ
              </h3>
              <p className="text-xl font-bold text-slate-600">
                Mở rộng đa cụm server • Chữ ký mật mã tự chứa dữ liệu
              </p>
            </div>
            <div className="text-right pl-6 border-l-2 border-indigo-200">
              <div className="text-4xl font-black text-indigo-600">STATELESS</div>
              <span className="text-sm font-black text-indigo-700 uppercase">Self-Contained</span>
            </div>
          </div>
        </div>
      </div>

      {/* Subtitle Box */}
      <SubtitleBox subtitleText={subtitleText} durationInFrames={durationInFrames} />
    </div>
  );
};
