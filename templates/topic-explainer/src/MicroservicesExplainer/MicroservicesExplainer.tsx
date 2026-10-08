import React from "react";
import {
  AbsoluteFill,
  Series,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { MicroservicesExplainerProps } from "./types";
import { audioManifest } from "./audioData";
import { Scene1Hook } from "./scenes/Scene1Hook";
import { Scene2Nginx } from "./scenes/Scene2Nginx";
import { Scene3Services } from "./scenes/Scene3Services";
import { Scene4Kafka } from "./scenes/Scene4Kafka";
import { Scene5Benefits } from "./scenes/Scene5Benefits";
import { Scene6Outro } from "./scenes/Scene6Outro";
import { BrandHeader } from "./components/BrandHeader";

export const MicroservicesExplainer: React.FC<MicroservicesExplainerProps> = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  // Gentle fade in at start and fade out at end
  const fadeIn = interpolate(frame, [0, 15], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const fadeOut = interpolate(
    frame,
    [durationInFrames - 20, durationInFrames],
    [1, 0],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );
  const opacity = fadeIn * fadeOut;

  // Scene durations dynamically mapped from audioManifest (+3 frames buffer for seamless transition)
  const d1 = audioManifest.scenes[0].durationInFrames + 3;
  const d2 = audioManifest.scenes[1].durationInFrames + 3;
  const d3 = audioManifest.scenes[2].durationInFrames + 3;
  const d4 = audioManifest.scenes[3].durationInFrames + 3;
  const d5 = audioManifest.scenes[4].durationInFrames + 3;
  const d6 = audioManifest.scenes[5].durationInFrames + 10;

  return (
    <AbsoluteFill
      style={{ opacity }}
      className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-black font-sans text-white select-none"
    >
      {/* Top Center Channel Brand Header (High-Throughput HUD Edition) */}
      <BrandHeader channelName="PWSolutions" subText="pwsdata.vn" />

      {/* Cyber Technical Luminous Glows */}
      <div className="absolute -top-32 -left-32 h-[750px] w-[750px] rounded-full bg-cyan-600/15 blur-[160px]" />
      <div className="absolute top-1/3 -right-36 h-[800px] w-[800px] rounded-full bg-emerald-600/12 blur-[170px]" />
      <div className="absolute -bottom-32 left-1/4 h-[700px] w-[700px] rounded-full bg-blue-600/15 blur-[150px]" />

      {/* Technical Hexagonal / Grid Lines */}
      <svg className="absolute inset-0 h-full w-full opacity-20" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="microGrid" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#38bdf8" strokeWidth="1" strokeOpacity="0.3" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#microGrid)" />
      </svg>

      {/* Series of 6 Scenes */}
      <Series>
        {/* Scene 1: Hook */}
        <Series.Sequence durationInFrames={d1}>
          <Scene1Hook />
        </Series.Sequence>

        {/* Scene 2: Layer 1 - NGINX Gateway */}
        <Series.Sequence durationInFrames={d2}>
          <Scene2Nginx />
        </Series.Sequence>

        {/* Scene 3: Layer 2 - Microservices & Redis Cache */}
        <Series.Sequence durationInFrames={d3}>
          <Scene3Services />
        </Series.Sequence>

        {/* Scene 4: Layer 3 - Kafka Event-Driven */}
        <Series.Sequence durationInFrames={d4}>
          <Scene4Kafka />
        </Series.Sequence>

        {/* Scene 5: Benefits & Scalability */}
        <Series.Sequence durationInFrames={d5}>
          <Scene5Benefits />
        </Series.Sequence>

        {/* Scene 6: Outro & Call to Action */}
        <Series.Sequence durationInFrames={d6}>
          <Scene6Outro />
        </Series.Sequence>
      </Series>
    </AbsoluteFill>
  );
};
