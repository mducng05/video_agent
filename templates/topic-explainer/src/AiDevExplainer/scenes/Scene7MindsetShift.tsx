import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import { BrandHeader } from "../components/BrandHeader";
import { SubtitleBox } from "../components/SubtitleBox";

interface SceneProps {
  subtitleText: string;
  durationInFrames: number;
}

export const Scene7MindsetShift: React.FC<SceneProps> = ({
  subtitleText,
  durationInFrames,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleSpring = spring({ frame, fps, config: { damping: 14, stiffness: 100 } });
  const modelSpring = spring({ frame: frame - 10, fps, config: { damping: 13, stiffness: 90 } });

  const paradigm = [
    {
      role: "LẬP TRÌNH VIÊN CŨ (TRƯỚC AI)",
      action: "70% Thời Gian Gõ Boilerplate & Nhớ Cú Pháp",
      value: "Giá trị đo bằng số dòng code viết ra mỗi ngày",
      badge: "THỢ GÕ PHÍM ⌨️",
      color: "border-slate-700 bg-slate-950 text-slate-300",
    },
    {
      role: "LẬP TRÌNH VIÊN THỜI AI (HIỆN NAY)",
      action: "80% Thời Gian Thiết Kế Kiến Trúc & Nghiệp Vụ",
      value: "Giá trị đo bằng tốc độ giải quyết bài toán kinh doanh",
      badge: "KIẾN TRÚC SƯ HỆ THỐNG 🏛️",
      color: "border-purple-400 bg-purple-950/70 text-purple-200",
    },
  ];

  return (
    <div className="w-[1080px] h-[1920px] bg-gradient-to-b from-[#060919] via-[#0d1330] to-[#070b1f] text-white flex flex-col justify-between relative overflow-hidden select-none font-sans">
      {/* AI Cyber Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#a855f712_1px,transparent_1px),linear-gradient(to_bottom,#a855f712_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none" />

      {/* Brand Header */}
      <BrandHeader currentCategory="TƯ DUY THỜI ĐẠI MỚI" metricBadge="DEVELOPER EVOLUTION" />

      {/* Main Content */}
      <div className="w-[980px] mx-auto flex-1 flex flex-col justify-center gap-6 z-10 py-2">
        {/* Title */}
        <div style={{ transform: `scale(${titleSpring})` }} className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-purple-950/90 border border-purple-400/50">
            <span className="text-2xl">🧠</span>
            <span className="text-xl font-black text-purple-300 tracking-wider">
              BƯỚC CHUYỂN TƯ DUY CỐT LÕI
            </span>
          </div>
          <h2 className="text-6xl font-black text-white tracking-tight">
            AI Không Thay Thế Bạn, <br />
            <span className="text-amber-400">Nhưng Người Làm Chủ AI Sẽ Dẫn Đầu!</span>
          </h2>
          <p className="text-2xl font-bold text-slate-300">
            Từ thợ gõ phím trở thành Kiến trúc sư hệ thống thực thụ
          </p>
        </div>

        {/* Evolution Paradigm Model */}
        <div
          style={{ opacity: modelSpring, transform: `scale(${modelSpring})` }}
          className="w-full bg-slate-900/90 rounded-3xl p-6 border-2 border-purple-500/60 shadow-[0_0_35px_rgba(168,85,247,0.3)] flex flex-col gap-4"
        >
          <div className="flex items-center justify-between border-b border-purple-500/30 pb-2">
            <span className="text-lg font-black text-purple-300 font-mono">
              MA TRẬN CHUYỂN DỊCH GIÁ TRỊ LẬP TRÌNH VIÊN (PARADIGM SHIFT)
            </span>
            <span className="text-xs font-mono px-3 py-1 rounded bg-purple-950 text-cyan-300 border border-purple-400/40 font-bold">
              FUTURE PROOF
            </span>
          </div>

          <div className="flex flex-col gap-3">
            {paradigm.map((p) => (
              <div
                key={p.role}
                className={`p-5 rounded-2xl border-2 ${p.color} flex flex-col gap-2 shadow-lg`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-mono font-black tracking-wide text-slate-300">
                    {p.role}
                  </span>
                  <span className="text-xs font-mono font-black px-2.5 py-1 rounded bg-slate-900 text-amber-300 border border-amber-400/40">
                    {p.badge}
                  </span>
                </div>
                <h4 className="text-2xl font-black text-white">{p.action}</h4>
                <p className="text-sm font-bold text-slate-300">{p.value}</p>
              </div>
            ))}
          </div>

          {/* Golden Quote */}
          <div className="bg-gradient-to-r from-purple-950 via-slate-900 to-indigo-950 p-4 rounded-2xl border border-purple-400/50 flex items-center justify-between">
            <span className="text-lg font-black text-white">
              🚀 <b>Vũ khí bí mật:</b> Người biết đặt câu hỏi đúng cho AI sẽ nắm giữ tương lai của ngành công nghệ!
            </span>
          </div>
        </div>
      </div>

      {/* Subtitle Box */}
      <SubtitleBox subtitleText={subtitleText} durationInFrames={durationInFrames} />
    </div>
  );
};
