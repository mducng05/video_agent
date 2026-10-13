import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import { BrandHeader } from "../components/BrandHeader";
import { SubtitleBox } from "../components/SubtitleBox";

interface SceneProps {
  subtitleText: string;
  durationInFrames: number;
}

export const Scene4WidgetTrees: React.FC<SceneProps> = ({
  subtitleText,
  durationInFrames,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleSpring = spring({ frame, fps, config: { damping: 14, stiffness: 100 } });
  const tree1Spring = spring({ frame: frame - 10, fps, config: { damping: 13, stiffness: 90 } });
  const tree2Spring = spring({ frame: frame - 20, fps, config: { damping: 13, stiffness: 90 } });
  const tree3Spring = spring({ frame: frame - 30, fps, config: { damping: 13, stiffness: 90 } });

  return (
    <div className="w-[1080px] h-[1920px] bg-gradient-to-b from-[#020814] via-[#05162b] to-[#020b18] text-white flex flex-col justify-between relative overflow-hidden select-none font-sans">
      {/* Blueprint Grid & Glow Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00e5ff12_1px,transparent_1px),linear-gradient(to_bottom,#00e5ff12_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-cyan-500/15 rounded-full blur-[140px] pointer-events-none" />

      {/* Brand Header */}
      <BrandHeader currentCategory="KIẾN TRÚC RENDER" metricBadge="THE 3-TREE MODEL" />

      {/* Main Content */}
      <div className="w-[980px] mx-auto flex-1 flex flex-col justify-center gap-6 z-10 py-2">
        {/* Title */}
        <div style={{ transform: `scale(${titleSpring})` }} className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-cyan-950/90 border border-cyan-400/50">
            <span className="text-2xl">🌲</span>
            <span className="text-xl font-black text-cyan-300 tracking-wider">
              TƯ DUY EVERYTHING IS A WIDGET
            </span>
          </div>
          <h2 className="text-6xl font-black text-white tracking-tight">
            Bí Mật <span className="text-cyan-400">Bộ Ba Cây Song Song</span>
          </h2>
          <p className="text-2xl font-bold text-slate-300">
            Cơ chế giúp Flutter đạt tốc độ 120 FPS không tốn RAM
          </p>
        </div>

        {/* 3 Interconnected Trees Pipeline Model */}
        <div className="w-full grid grid-cols-3 gap-4">
          {/* Tree 1: Widget Tree */}
          <div
            style={{ opacity: tree1Spring, transform: `translateY(${(1 - tree1Spring) * 30}px)` }}
            className="bg-slate-900/90 rounded-2xl p-5 border-2 border-sky-400/80 shadow-[0_0_25px_rgba(56,189,248,0.3)] flex flex-col justify-between gap-4"
          >
            <div>
              <div className="flex items-center justify-between pb-2 border-b border-sky-400/30">
                <span className="text-xs font-mono font-black text-sky-300">CÂY 1</span>
                <span className="text-xl">📋</span>
              </div>
              <h4 className="text-2xl font-black text-white mt-2">Widget Tree</h4>
              <p className="text-xs text-sky-200 font-bold mt-1">Cấu Hình Bất Biến (Immutable)</p>
            </div>

            <div className="flex flex-col gap-2 font-mono text-xs">
              <div className="bg-slate-950 p-2.5 rounded-lg border border-sky-500/40 text-center text-sky-300 font-bold">
                Container
              </div>
              <div className="text-center text-sky-400 font-black">⬇️ child</div>
              <div className="bg-slate-950 p-2.5 rounded-lg border border-sky-500/40 text-center text-sky-300 font-bold">
                Column
              </div>
              <div className="text-center text-sky-400 font-black">⬇️ children</div>
              <div className="bg-slate-950 p-2.5 rounded-lg border border-sky-500/40 text-center text-sky-300 font-bold">
                Text / Button
              </div>
            </div>

            <div className="p-2.5 rounded-xl bg-sky-950/80 border border-sky-400/30 text-sky-200 text-xs font-bold text-center">
              💡 Bản thiết kế siêu nhẹ, tạo mới liên tục không tốn tài nguyên
            </div>
          </div>

          {/* Tree 2: Element Tree */}
          <div
            style={{ opacity: tree2Spring, transform: `translateY(${(1 - tree2Spring) * 30}px)` }}
            className="bg-slate-900/90 rounded-2xl p-5 border-2 border-amber-400/80 shadow-[0_0_25px_rgba(251,191,36,0.3)] flex flex-col justify-between gap-4"
          >
            <div>
              <div className="flex items-center justify-between pb-2 border-b border-amber-400/30">
                <span className="text-xs font-mono font-black text-amber-300">CÂY 2</span>
                <span className="text-xl">🧠</span>
              </div>
              <h4 className="text-2xl font-black text-white mt-2">Element Tree</h4>
              <p className="text-xs text-amber-200 font-bold mt-1">Quản Lý Lifecycle & State</p>
            </div>

            <div className="flex flex-col gap-2 font-mono text-xs">
              <div className="bg-slate-950 p-2.5 rounded-lg border border-amber-500/40 text-center text-amber-300 font-bold">
                ComponentElement
              </div>
              <div className="text-center text-amber-400 font-black">⬇️ link</div>
              <div className="bg-slate-950 p-2.5 rounded-lg border border-amber-500/40 text-center text-amber-300 font-bold">
                MultiChildElement
              </div>
              <div className="text-center text-amber-400 font-black">⬇️ link</div>
              <div className="bg-slate-950 p-2.5 rounded-lg border border-amber-500/40 text-center text-amber-300 font-bold">
                RenderObjectElement
              </div>
            </div>

            <div className="p-2.5 rounded-xl bg-amber-950/80 border border-amber-400/30 text-amber-200 text-xs font-bold text-center">
              ⚡ So khớp canUpdate: Giữ nguyên state, không render lại thừa!
            </div>
          </div>

          {/* Tree 3: RenderObject Tree */}
          <div
            style={{ opacity: tree3Spring, transform: `translateY(${(1 - tree3Spring) * 30}px)` }}
            className="bg-slate-900/90 rounded-2xl p-5 border-2 border-cyan-400 shadow-[0_0_30px_rgba(34,211,238,0.4)] flex flex-col justify-between gap-4"
          >
            <div>
              <div className="flex items-center justify-between pb-2 border-b border-cyan-400/30">
                <span className="text-xs font-mono font-black text-cyan-300">CÂY 3</span>
                <span className="text-xl">🎨</span>
              </div>
              <h4 className="text-2xl font-black text-white mt-2">Render Tree</h4>
              <p className="text-xs text-cyan-200 font-bold mt-1">Tính Toán Tọa Độ & Paint</p>
            </div>

            <div className="flex flex-col gap-2 font-mono text-xs">
              <div className="bg-slate-950 p-2.5 rounded-lg border border-cyan-400/50 text-center text-cyan-300 font-bold">
                RenderPadding
              </div>
              <div className="text-center text-cyan-400 font-black">⬇️ layout constraint</div>
              <div className="bg-slate-950 p-2.5 rounded-lg border border-cyan-400/50 text-center text-cyan-300 font-bold">
                RenderFlex
              </div>
              <div className="text-center text-cyan-400 font-black">⬇️ paint commands</div>
              <div className="bg-cyan-500 p-2.5 rounded-lg border border-white text-center text-slate-950 font-black">
                GPU DRAW CALLS 🚀
              </div>
            </div>

            <div className="p-2.5 rounded-xl bg-cyan-950/90 border border-cyan-400/40 text-cyan-200 text-xs font-bold text-center">
              🎯 Gắn trực tiếp vào GPU Canvas để vẽ từng pixel
            </div>
          </div>
        </div>

        {/* Golden Rule Summary */}
        <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-cyan-950 p-4 rounded-2xl border border-cyan-400/50 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-3xl">🔑</span>
            <div className="text-base font-bold text-slate-200">
              <span className="text-cyan-300 font-black">Nguyên Tắc Vàng:</span> Cây Widget có thể tái tạo hàng nghìn lần trong 1 giây, nhưng Cây RenderObject chỉ thay đổi khi toạ độ thực sự biến đổi!
            </div>
          </div>
        </div>
      </div>

      {/* Subtitle Box */}
      <SubtitleBox subtitleText={subtitleText} durationInFrames={durationInFrames} />
    </div>
  );
};
