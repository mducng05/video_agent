import React from "react";
import { Audio, Series, staticFile } from "remotion";
import { audioManifest } from "./audioData";
import { AiDevExplainerProps } from "./types";
import { Scene1Hook } from "./scenes/Scene1Hook";
import { Scene2DailyRoutine } from "./scenes/Scene2DailyRoutine";
import { Scene3PairProgramming } from "./scenes/Scene3PairProgramming";
import { Scene4Troubleshooting } from "./scenes/Scene4Troubleshooting";
import { Scene5ReviewTesting } from "./scenes/Scene5ReviewTesting";
import { Scene6LegacyRefactor } from "./scenes/Scene6LegacyRefactor";
import { Scene7MindsetShift } from "./scenes/Scene7MindsetShift";
import { Scene8Outro } from "./scenes/Scene8Outro";

export const AiDevExplainer: React.FC<AiDevExplainerProps> = () => {
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
    <div className="w-full h-full bg-[#060919]">
      <Series>
        {/* Scene 1: Hook & The 10x Developer Hub Model */}
        <Series.Sequence durationInFrames={d1}>
          <Audio src={staticFile(scenes[0].audioPath)} volume={1} />
          <Scene1Hook
            subtitleText={scenes[0].text}
            durationInFrames={d1}
          />
        </Series.Sequence>

        {/* Scene 2: 08:30 Requirement Breakdown Model */}
        <Series.Sequence durationInFrames={d2}>
          <Audio src={staticFile(scenes[1].audioPath)} volume={1} />
          <Scene2DailyRoutine
            subtitleText={scenes[1].text}
            durationInFrames={d2}
          />
        </Series.Sequence>

        {/* Scene 3: 09:30 AI Pair Programming Flow */}
        <Series.Sequence durationInFrames={d3}>
          <Audio src={staticFile(scenes[2].audioPath)} volume={1} />
          <Scene3PairProgramming
            subtitleText={scenes[2].text}
            durationInFrames={d3}
          />
        </Series.Sequence>

        {/* Scene 4: 11:00 Production Root Cause Pipeline */}
        <Series.Sequence durationInFrames={d4}>
          <Audio src={staticFile(scenes[3].audioPath)} volume={1} />
          <Scene4Troubleshooting
            subtitleText={scenes[3].text}
            durationInFrames={d4}
          />
        </Series.Sequence>

        {/* Scene 5: 14:00 AI Quality Gate & Test Coverage */}
        <Series.Sequence durationInFrames={d5}>
          <Audio src={staticFile(scenes[4].audioPath)} volume={1} />
          <Scene5ReviewTesting
            subtitleText={scenes[4].text}
            durationInFrames={d5}
          />
        </Series.Sequence>

        {/* Scene 6: 15:30 Legacy System Modernization */}
        <Series.Sequence durationInFrames={d6}>
          <Audio src={staticFile(scenes[5].audioPath)} volume={1} />
          <Scene6LegacyRefactor
            subtitleText={scenes[5].text}
            durationInFrames={d6}
          />
        </Series.Sequence>

        {/* Scene 7: Mindset Paradigm Shift Matrix */}
        <Series.Sequence durationInFrames={d7}>
          <Audio src={staticFile(scenes[6].audioPath)} volume={1} />
          <Scene7MindsetShift
            subtitleText={scenes[6].text}
            durationInFrames={d7}
          />
        </Series.Sequence>

        {/* Scene 8: Fullstack AI & Cloud Outro */}
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
