import React from "react";
import { Audio, Series, staticFile } from "remotion";
import { audioManifest } from "./audioData";
import { FlutterExplainerProps } from "./types";
import { Scene1Hook } from "./scenes/Scene1Hook";
import { Scene2ArchitectureComparison } from "./scenes/Scene2ArchitectureComparison";
import { Scene3ThreeLayers } from "./scenes/Scene3ThreeLayers";
import { Scene4WidgetTrees } from "./scenes/Scene4WidgetTrees";
import { Scene5ImpellerEngine } from "./scenes/Scene5ImpellerEngine";
import { Scene6DartCompilation } from "./scenes/Scene6DartCompilation";
import { Scene7DecisionMatrix } from "./scenes/Scene7DecisionMatrix";
import { Scene8Outro } from "./scenes/Scene8Outro";

export const FlutterExplainer: React.FC<FlutterExplainerProps> = () => {
  const scenes = audioManifest.scenes;

  // Snappy transition buffer (+4 frames per scene, +15 on outro)
  const d1 = scenes[0].durationInFrames + 4;
  const d2 = scenes[1].durationInFrames + 4;
  const d3 = scenes[2].durationInFrames + 4;
  const d4 = scenes[3].durationInFrames + 4;
  const d5 = scenes[4].durationInFrames + 4;
  const d6 = scenes[5].durationInFrames + 4;
  const d7 = scenes[6].durationInFrames + 4;
  const d8 = scenes[7].durationInFrames + 15;

  return (
    <div className="w-full h-full bg-[#020814]">
      <Series>
        {/* Scene 1: Hook & Ecosystem Hub Model */}
        <Series.Sequence durationInFrames={d1}>
          <Audio src={staticFile(scenes[0].audioPath)} volume={1} />
          <Scene1Hook
            subtitleText={scenes[0].text}
            durationInFrames={d1}
          />
        </Series.Sequence>

        {/* Scene 2: 3-Gen Architecture Comparison Model */}
        <Series.Sequence durationInFrames={d2}>
          <Audio src={staticFile(scenes[1].audioPath)} volume={1} />
          <Scene2ArchitectureComparison
            subtitleText={scenes[1].text}
            durationInFrames={d2}
          />
        </Series.Sequence>

        {/* Scene 3: 3-Tier Layered Architecture Model */}
        <Series.Sequence durationInFrames={d3}>
          <Audio src={staticFile(scenes[2].audioPath)} volume={1} />
          <Scene3ThreeLayers
            subtitleText={scenes[2].text}
            durationInFrames={d3}
          />
        </Series.Sequence>

        {/* Scene 4: The 3-Tree Architecture Model */}
        <Series.Sequence durationInFrames={d4}>
          <Audio src={staticFile(scenes[3].audioPath)} volume={1} />
          <Scene4WidgetTrees
            subtitleText={scenes[3].text}
            durationInFrames={d4}
          />
        </Series.Sequence>

        {/* Scene 5: Impeller Next-Gen Graphics Pipeline */}
        <Series.Sequence durationInFrames={d5}>
          <Audio src={staticFile(scenes[4].audioPath)} volume={1} />
          <Scene5ImpellerEngine
            subtitleText={scenes[4].text}
            durationInFrames={d5}
          />
        </Series.Sequence>

        {/* Scene 6: Dart Dual Compilation Model */}
        <Series.Sequence durationInFrames={d6}>
          <Audio src={staticFile(scenes[5].audioPath)} volume={1} />
          <Scene6DartCompilation
            subtitleText={scenes[5].text}
            durationInFrames={d6}
          />
        </Series.Sequence>

        {/* Scene 7: Enterprise Decision Matrix */}
        <Series.Sequence durationInFrames={d7}>
          <Audio src={staticFile(scenes[6].audioPath)} volume={1} />
          <Scene7DecisionMatrix
            subtitleText={scenes[6].text}
            durationInFrames={d7}
          />
        </Series.Sequence>

        {/* Scene 8: Fullstack Outro & PWSolutions Authority */}
        <Series.Sequence durationInFrames={d8}>
          <Audio src={staticFile(scenes[7].audioPath)} volume={1} />
          <Scene8Outro
            subtitleText={scenes[7].text}
            durationInFrames={d8}
          />
        </Series.Sequence>
      </Series>
    </div>
  );
};
