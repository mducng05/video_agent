import React from "react";
import {
  AbsoluteFill,
  Audio,
  Series,
  interpolate,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { ReactNativeExplainerProps } from "./types";
import { audioManifest } from "./audioData";
import { Scene1Hook } from "./scenes/Scene1Hook";
import { Scene2Architecture } from "./scenes/Scene2Architecture";
import { Scene3NewArch } from "./scenes/Scene3NewArch";
import { Scene4Fabric } from "./scenes/Scene4Fabric";
import { Scene5Optimization } from "./scenes/Scene5Optimization";
import { Scene6Codepush } from "./scenes/Scene6Codepush";
import { Scene7BusinessRoi } from "./scenes/Scene7BusinessRoi";
import { Scene8Outro } from "./scenes/Scene8Outro";

export const ReactNativeExplainer: React.FC<ReactNativeExplainerProps> = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

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

  // Scene durations with buffer for seamless transitions
  const d1 = audioManifest.scenes[0].durationInFrames + 6;
  const d2 = audioManifest.scenes[1].durationInFrames + 6;
  const d3 = audioManifest.scenes[2].durationInFrames + 6;
  const d4 = audioManifest.scenes[3].durationInFrames + 6;
  const d5 = audioManifest.scenes[4].durationInFrames + 6;
  const d6 = audioManifest.scenes[5].durationInFrames + 6;
  const d7 = audioManifest.scenes[6].durationInFrames + 6;
  const d8 = audioManifest.scenes[7].durationInFrames + 15;

  return (
    <AbsoluteFill style={{ opacity }} className="select-none bg-slate-900 font-sans">
      <Series>
        {/* Scene 1: Cross-Platform Duel Cockpit */}
        <Series.Sequence durationInFrames={d1}>
          <Audio src={staticFile(audioManifest.scenes[0].audioPath)} />
          <Scene1Hook
            subtitleText={audioManifest.scenes[0].text}
            durationInFrames={d1}
          />
        </Series.Sequence>

        {/* Scene 2: The Old Bridge Bottleneck */}
        <Series.Sequence durationInFrames={d2}>
          <Audio src={staticFile(audioManifest.scenes[1].audioPath)} />
          <Scene2Architecture
            subtitleText={audioManifest.scenes[1].text}
            durationInFrames={d2}
          />
        </Series.Sequence>

        {/* Scene 3: New Architecture JSI Direct Memory Highway */}
        <Series.Sequence durationInFrames={d3}>
          <Audio src={staticFile(audioManifest.scenes[2].audioPath)} />
          <Scene3NewArch
            subtitleText={audioManifest.scenes[2].text}
            durationInFrames={d3}
          />
        </Series.Sequence>

        {/* Scene 4: Fabric Renderer & TurboModules Cockpit */}
        <Series.Sequence durationInFrames={d4}>
          <Audio src={staticFile(audioManifest.scenes[3].audioPath)} />
          <Scene4Fabric
            subtitleText={audioManifest.scenes[3].text}
            durationInFrames={d4}
          />
        </Series.Sequence>

        {/* Scene 5: Performance Optimization Toolkit */}
        <Series.Sequence durationInFrames={d5}>
          <Audio src={staticFile(audioManifest.scenes[4].audioPath)} />
          <Scene5Optimization
            subtitleText={audioManifest.scenes[4].text}
            durationInFrames={d5}
          />
        </Series.Sequence>

        {/* Scene 6: OTA CodePush Instant Deployment */}
        <Series.Sequence durationInFrames={d6}>
          <Audio src={staticFile(audioManifest.scenes[5].audioPath)} />
          <Scene6Codepush
            subtitleText={audioManifest.scenes[5].text}
            durationInFrames={d6}
          />
        </Series.Sequence>

        {/* Scene 7: Business Value & ROI Scoreboard */}
        <Series.Sequence durationInFrames={d7}>
          <Audio src={staticFile(audioManifest.scenes[6].audioPath)} />
          <Scene7BusinessRoi
            subtitleText={audioManifest.scenes[6].text}
            durationInFrames={d7}
          />
        </Series.Sequence>

        {/* Scene 8: PWSolutions Mobile Authority Outro */}
        <Series.Sequence durationInFrames={d8}>
          <Audio src={staticFile(audioManifest.scenes[7].audioPath)} />
          <Scene8Outro
            subtitleText={audioManifest.scenes[7].text}
            durationInFrames={d8}
          />
        </Series.Sequence>
      </Series>
    </AbsoluteFill>
  );
};
