import React from "react";
import { interpolate, useCurrentFrame } from "remotion";

interface SubtitleBoxProps {
  text?: string;
  subtitleText?: string;
  durationInFrames: number;
}

export const SubtitleBox: React.FC<SubtitleBoxProps> = ({
  text,
  subtitleText,
  durationInFrames,
}) => {
  const frame = useCurrentFrame();

  const rawText = subtitleText || text || "";
  const words = rawText.split(" ");
  const totalWords = words.length;

  const currentWordIndex = Math.min(
    Math.floor(
      interpolate(frame, [0, Math.max(1, durationInFrames - 8)], [0, totalWords], {
        extrapolateRight: "clamp",
        extrapolateLeft: "clamp",
      })
    ),
    totalWords - 1
  );

  // Group into readable chunks of 5 words
  const chunkSize = 5;
  const chunkIndex = Math.floor(currentWordIndex / chunkSize);
  const startIdx = chunkIndex * chunkSize;
  const endIdx = Math.min(startIdx + chunkSize, totalWords);
  const visibleWords = words.slice(startIdx, endIdx);

  return (
    <div className="w-[960px] mx-auto mb-14 px-6 flex justify-center">
      <div className="w-full bg-slate-950/90 backdrop-blur-xl border-2 border-sky-400/80 rounded-2xl px-8 py-5 shadow-2xl shadow-blue-950/40 flex items-center justify-center min-h-[120px]">
        <p className="text-4xl md:text-5xl font-black text-center leading-snug tracking-tight">
          {visibleWords.map((word, idx) => {
            const absoluteIdx = startIdx + idx;
            const isCurrent = absoluteIdx === currentWordIndex;
            const isPassed = absoluteIdx < currentWordIndex;

            return (
              <span
                key={`${word}-${idx}`}
                className={`inline-block mr-3 transition-colors duration-150 ${
                  isCurrent
                    ? "text-amber-400 scale-105 drop-shadow-[0_0_12px_rgba(251,191,36,0.9)] underline decoration-amber-400 decoration-4 underline-offset-8"
                    : isPassed
                    ? "text-white font-extrabold"
                    : "text-slate-400/90"
                }`}
              >
                {word}
              </span>
            );
          })}
        </p>
      </div>
    </div>
  );
};
