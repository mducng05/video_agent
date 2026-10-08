import React from "react";
import {
  AbsoluteFill,
  Series,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { DevOpsExplainerProps } from "./types";
import { audioManifest } from "./audioData";
import { Scene1Hook } from "./scenes/Scene1Hook";
import { Scene2Build } from "./scenes/Scene2Build";
import { Scene3K8s } from "./scenes/Scene3K8s";
import { Scene4AiDevOps } from "./scenes/Scene4AiDevOps";
import { Scene5Benefits } from "./scenes/Scene5Benefits";
import { Scene6Outro } from "./scenes/Scene6Outro";
import { BrandHeader } from "./components/BrandHeader";

export const DevOpsExplainer: React.FC<DevOpsExplainerProps> = () => {
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
      className="relative overflow-hidden bg-gradient-to-b from-white via-cyan-50 to-sky-100 font-sans select-none"
    >
      {/* Top Center Channel Brand Header (PWSolutions Light Edition) */}
      <BrandHeader channelName="PWSolutions" subText="pwsdata.vn" />

      {/* Luminous White-Cyan Mesh Gradient Glows */}
      <div className="absolute -top-32 -left-32 h-[700px] w-[700px] rounded-full bg-cyan-200/50 blur-[140px]" />
      <div className="absolute top-1/3 -right-36 h-[750px] w-[750px] rounded-full bg-sky-200/40 blur-[160px]" />
      <div className="absolute -bottom-32 left-1/4 h-[650px] w-[650px] rounded-full bg-blue-200/35 blur-[140px]" />

      {/* Subtle Futuristic Tech Background Grid Lines */}
      <svg className="absolute inset-0 h-full w-full opacity-30" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="lightGrid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#0284c7" strokeWidth="0.8" strokeOpacity="0.25" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#lightGrid)" />
      </svg>

      {/* Series of 6 Scenes */}
      <Series>
        {/* Scene 1: Hook */}
        <Series.Sequence durationInFrames={d1}>
          <Scene1Hook />
        </Series.Sequence>

        {/* Scene 2: Build & Test Automation */}
        <Series.Sequence durationInFrames={d2}>
          <Scene2Build />
        </Series.Sequence>

        {/* Scene 3: Kubernetes Zero Downtime */}
        <Series.Sequence durationInFrames={d3}>
          <Scene3K8s />
        </Series.Sequence>

        {/* Scene 4: AI Monitoring & Auto Rollback */}
        <Series.Sequence durationInFrames={d4}>
          <Scene4AiDevOps />
        </Series.Sequence>

        {/* Scene 5: Business Benefits & Speed */}
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
