import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import { BrandHeader } from "../components/BrandHeader";
import { SubtitleBox } from "../components/SubtitleBox";

interface SceneProps {
  subtitleText: string;
  durationInFrames: number;
}

export const Scene4UiStyling: React.FC<SceneProps> = ({
  subtitleText,
  durationInFrames,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleSpring = spring({ frame, fps, config: { damping: 14, stiffness: 100 } });
  const reactCodeSpring = spring({ frame: frame - 15, fps, config: { damping: 14, stiffness: 90 } });
  const rnCodeSpring = spring({ frame: frame - 30, fps, config: { damping: 14, stiffness: 90 } });
  const flexNoteSpring = spring({ frame: frame - 45, fps, config: { damping: 12, stiffness: 110 } });

  return (
    <div className="w-[1080px] h-[1920px] bg-gradient-to-br from-white via-orange-50/70 to-amber-50 text-slate-900 flex flex-col justify-between relative overflow-hidden select-none font-sans">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ea580c0f_1px,transparent_1px),linear-gradient(to_bottom,#ea580c0f_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
      <div className="absolute top-1/3 -right-24 w-96 h-96 bg-orange-300/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -left-24 w-96 h-96 bg-amber-300/30 rounded-full blur-3xl pointer-events-none" />

      <BrandHeader currentCategory="CÚ PHÁP & GIAO DIỆN" metricBadge="UI SYNTAX: HTML VS NATIVE VIEWS" />

      <div className="w-[960px] mx-auto flex-1 flex flex-col justify-center gap-7 z-10 py-6">
        {/* Title */}
        <div style={{ transform: `scale(${titleSpring})` }} className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-orange-100 text-orange-900 font-black text-lg border border-orange-300 uppercase">
            <span>💻 SO SÁNH TỪNG DÒNG CODE</span>
          </div>
          <h1 className="text-6xl font-black text-slate-950 tracking-tight leading-tight">
            Thẻ HTML & CSS <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500">
              Khác Biệt Với StyleSheet
            </span>
          </h1>
          <p className="text-2xl font-extrabold text-slate-600">
            Không Thể Copy Nguyên Xi Giao Diện Từ Web Sang Mobile
          </p>
        </div>

        {/* 2 Code Comparison Cards */}
        <div className="grid grid-cols-2 gap-5 w-full">
          {/* React JS Code Box */}
          <div
            style={{ opacity: reactCodeSpring, transform: `translateX(${(1 - reactCodeSpring) * -30}px)` }}
            className="bg-white/95 rounded-3xl p-6 border-2 border-orange-200 shadow-xl shadow-orange-950/5 flex flex-col justify-between space-y-4"
          >
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-orange-100">
                <span className="text-base font-black text-orange-600 uppercase tracking-wide">
                  🌐 REACT JS (WEB)
                </span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-800 font-bold">
                  HTML5 + CSS
                </span>
              </div>
              <div className="mt-4 font-mono text-sm leading-relaxed bg-slate-950 text-slate-100 p-4 rounded-2xl shadow-inner space-y-2">
                <div className="text-emerald-400 font-bold">// Thẻ DOM Trình duyệt</div>
                <div>&lt;<span className="text-amber-400">div</span> className=<span className="text-emerald-300">"box"</span>&gt;</div>
                <div className="pl-4">&lt;<span className="text-cyan-400">h1</span>&gt;Tiêu đề web&lt;/<span className="text-cyan-400">h1</span>&gt;</div>
                <div className="pl-4">&lt;<span className="text-cyan-400">p</span>&gt;Nội dung văn bản&lt;/<span className="text-cyan-400">p</span>&gt;</div>
                <div className="pl-4">&lt;<span className="text-pink-400">button</span>&gt;Click Me&lt;/<span className="text-pink-400">button</span>&gt;</div>
                <div>&lt;/<span className="text-amber-400">div</span>&gt;</div>
              </div>
            </div>

            <div className="space-y-1.5 pt-3 border-t border-orange-100 text-sm font-extrabold text-slate-700">
              <div className="flex justify-between">
                <span>Styling:</span>
                <span className="text-orange-600">CSS, SCSS, Tailwind</span>
              </div>
              <div className="flex justify-between">
                <span>Flexbox mặc định:</span>
                <span className="text-slate-900">row (ngang)</span>
              </div>
            </div>
          </div>

          {/* React Native Code Box */}
          <div
            style={{ opacity: rnCodeSpring, transform: `translateX(${(1 - rnCodeSpring) * 30}px)` }}
            className="bg-white/95 rounded-3xl p-6 border-2 border-amber-300 shadow-xl shadow-amber-950/5 flex flex-col justify-between space-y-4"
          >
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-amber-100">
                <span className="text-base font-black text-amber-700 uppercase tracking-wide">
                  📱 REACT NATIVE (APP)
                </span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 font-bold">
                  StyleSheet API
                </span>
              </div>
              <div className="mt-4 font-mono text-sm leading-relaxed bg-slate-950 text-slate-100 p-4 rounded-2xl shadow-inner space-y-2">
                <div className="text-emerald-400 font-bold">// Component Native OS</div>
                <div>&lt;<span className="text-amber-400">View</span> style=<span className="text-emerald-300">&#123;styles.box&#125;</span>&gt;</div>
                <div className="pl-4">&lt;<span className="text-cyan-400">Text</span> style=<span className="text-emerald-300">&#123;styles.h1&#125;</span>&gt;Tiêu đề app&lt;/<span className="text-cyan-400">Text</span>&gt;</div>
                <div className="pl-4">&lt;<span className="text-cyan-400">Text</span>&gt;Nội dung văn bản&lt;/<span className="text-cyan-400">Text</span>&gt;</div>
                <div className="pl-4">&lt;<span className="text-pink-400">Pressable</span>&gt;&lt;<span className="text-cyan-400">Text</span>&gt;Bấm&lt;/<span className="text-cyan-400">Text</span>&gt;&lt;/<span className="text-pink-400">Pressable</span>&gt;</div>
                <div>&lt;/<span className="text-amber-400">View</span>&gt;</div>
              </div>
            </div>

            <div className="space-y-1.5 pt-3 border-t border-amber-100 text-sm font-extrabold text-slate-700">
              <div className="flex justify-between">
                <span>Styling:</span>
                <span className="text-amber-700">StyleSheet.create()</span>
              </div>
              <div className="flex justify-between">
                <span>Flexbox mặc định:</span>
                <span className="text-slate-900">column (dọc)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Golden Rule Highlight Pill */}
        <div
          style={{ transform: `scale(${flexNoteSpring})` }}
          className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-orange-600 via-amber-600 to-orange-700 text-white shadow-xl shadow-orange-600/20 flex items-center justify-between border border-orange-400"
        >
          <div className="flex items-center gap-3">
            <span className="text-3xl">📐</span>
            <span className="text-xl font-black tracking-wide">
              QUY TẮC VÀNG FLEXBOX TRÊN MOBILE
            </span>
          </div>
          <div className="text-lg font-black text-amber-200">
            flexDirection luôn là COLUMN theo màn hình dọc!
          </div>
        </div>
      </div>

      <SubtitleBox subtitleText={subtitleText} durationInFrames={durationInFrames} />
    </div>
  );
};
