import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

interface SubtitleBoxProps {
  text: string;
  durationInFrames: number;
  highlightKeyword?: string;
  className?: string;
}

function chunkText(text: string, wordsPerChunk = 5): string[] {
  const words = text.trim().split(/\s+/);
  const chunks: string[] = [];

  for (let i = 0; i < words.length; i += wordsPerChunk) {
    chunks.push(words.slice(i, i + wordsPerChunk).join(" "));
  }

  return chunks.length > 0 ? chunks : [text];
}

export const SubtitleBox: React.FC<SubtitleBoxProps> = ({
  text,
  durationInFrames,
  highlightKeyword,
  className = "mt-48",
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const chunks = chunkText(text, 5);
  const totalChunks = chunks.length;
  const framesPerChunk = Math.max(1, durationInFrames / totalChunks);

  const currentChunkIndex = Math.min(
    Math.floor(frame / framesPerChunk),
    totalChunks - 1
  );

  const activeChunkText = chunks[currentChunkIndex] || "";
  const chunkStartFrame = currentChunkIndex * framesPerChunk;
  const chunkRelativeFrame = frame - chunkStartFrame;

  const scale = spring({
    frame: chunkRelativeFrame,
    fps,
    config: { damping: 14, stiffness: 140, mass: 0.6 },
  });

  const opacity = interpolate(
    chunkRelativeFrame,
    [0, 4],
    [0, 1],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  const words = activeChunkText.split(" ");

  return (
    <div
      style={{
        transform: `scale(${scale})`,
        opacity,
      }}
      className={`z-40 flex w-full max-w-[980px] items-center justify-center ${className}`}
    >
      <div className="flex w-full items-center justify-center gap-4 rounded-3xl border-2 border-cyan-400/80 bg-slate-950/95 px-8 py-6 shadow-[0_20px_60px_rgba(0,0,0,0.9)] backdrop-blur-2xl">
        <span className="text-4xl select-none text-cyan-400">⚡</span>
        <p className="text-5xl font-black tracking-wide text-white leading-tight text-center">
          {words.map((word, idx) => {
            const isKeyword =
              highlightKeyword &&
              word.toLowerCase().includes(highlightKeyword.toLowerCase());

            return (
              <span
                key={idx}
                className={`inline-block mx-2 ${
                  isKeyword
                    ? "text-amber-300 drop-shadow-[0_0_20px_rgba(252,211,77,0.9)]"
                    : "text-slate-100"
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
