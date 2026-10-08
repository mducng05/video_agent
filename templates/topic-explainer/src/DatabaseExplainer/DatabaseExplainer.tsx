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
import { DatabaseExplainerProps } from "./types";
import { audioManifest } from "./audioData";
import { Scene1Hook } from "./scenes/Scene1Hook";
import { Scene2Explain } from "./scenes/Scene2Explain";
import { Scene3BTree } from "./scenes/Scene3BTree";
import { Scene4SqlDiff } from "./scenes/Scene4SqlDiff";
import { Scene5Cache } from "./scenes/Scene5Cache";
import { Scene6Metrics } from "./scenes/Scene6Metrics";
import { Scene7Outro } from "./scenes/Scene7Outro";

export const DatabaseExplainer: React.FC<DatabaseExplainerProps> = () => {
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

  // Durations mapped directly from audio manifest (+4 buffer per scene, +10 on outro)
  const d1 = audioManifest.scenes[0].durationInFrames + 4;
  const d2 = audioManifest.scenes[1].durationInFrames + 4;
  const d3 = audioManifest.scenes[2].durationInFrames + 4;
  const d4 = audioManifest.scenes[3].durationInFrames + 4;
  const d5 = audioManifest.scenes[4].durationInFrames + 4;
  const d6 = audioManifest.scenes[5].durationInFrames + 4;
  const d7 = audioManifest.scenes[6].durationInFrames + 12;

  return (
    <AbsoluteFill style={{ opacity }} className="select-none bg-slate-900 font-sans">
      <Series>
        {/* Scene 1: Hook & Cockpit Before vs Target */}
        <Series.Sequence durationInFrames={d1}>
          <Audio src={staticFile(audioManifest.scenes[0].audioPath)} />
          <Scene1Hook
            subtitleText={audioManifest.scenes[0].text}
            durationInFrames={d1}
          />
        </Series.Sequence>

        {/* Scene 2: EXPLAIN ANALYZE Tree Planner */}
        <Series.Sequence durationInFrames={d2}>
          <Audio src={staticFile(audioManifest.scenes[1].audioPath)} />
          <Scene2Explain
            subtitleText={audioManifest.scenes[1].text}
            durationInFrames={d2}
          />
        </Series.Sequence>

        {/* Scene 3: B-Tree & Composite Index */}
        <Series.Sequence durationInFrames={d3}>
          <Audio src={staticFile(audioManifest.scenes[2].audioPath)} />
          <Scene3BTree
            subtitleText={audioManifest.scenes[2].text}
            durationInFrames={d3}
          />
        </Series.Sequence>

        {/* Scene 4: SQL Diff & Covering Index */}
        <Series.Sequence durationInFrames={d4}>
          <Audio src={staticFile(audioManifest.scenes[3].audioPath)} />
          <Scene4SqlDiff
            subtitleText={audioManifest.scenes[3].text}
            durationInFrames={d4}
          />
        </Series.Sequence>

        {/* Scene 5: Dual Data Highway Cache & Replicas */}
        <Series.Sequence durationInFrames={d5}>
          <Audio src={staticFile(audioManifest.scenes[4].audioPath)} />
          <Scene5Cache
            subtitleText={audioManifest.scenes[4].text}
            durationInFrames={d5}
          />
        </Series.Sequence>

        {/* Scene 6: Triple Benchmark Scoreboard */}
        <Series.Sequence durationInFrames={d6}>
          <Audio src={staticFile(audioManifest.scenes[5].audioPath)} />
          <Scene6Metrics
            subtitleText={audioManifest.scenes[5].text}
            durationInFrames={d6}
          />
        </Series.Sequence>

        {/* Scene 7: PWSolutions Enterprise Authority Outro */}
        <Series.Sequence durationInFrames={d7}>
          <Audio src={staticFile(audioManifest.scenes[6].audioPath)} />
          <Scene7Outro
            subtitleText={audioManifest.scenes[6].text}
            durationInFrames={d7}
          />
        </Series.Sequence>
      </Series>
    </AbsoluteFill>
  );
};
