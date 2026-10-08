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
import { AuthExplainerProps } from "./types";
import { audioManifest } from "./audioData";
import { Scene1Hook } from "./scenes/Scene1Hook";
import { Scene2Session } from "./scenes/Scene2Session";
import { Scene3SessionFlaws } from "./scenes/Scene3SessionFlaws";
import { Scene4Jwt } from "./scenes/Scene4Jwt";
import { Scene5JwtRisks } from "./scenes/Scene5JwtRisks";
import { Scene6Hybrid } from "./scenes/Scene6Hybrid";
import { Scene7Matrix } from "./scenes/Scene7Matrix";
import { Scene8Outro } from "./scenes/Scene8Outro";

export const AuthExplainer: React.FC<AuthExplainerProps> = () => {
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
  const d1 = audioManifest.scenes[0].durationInFrames + 4;
  const d2 = audioManifest.scenes[1].durationInFrames + 4;
  const d3 = audioManifest.scenes[2].durationInFrames + 4;
  const d4 = audioManifest.scenes[3].durationInFrames + 4;
  const d5 = audioManifest.scenes[4].durationInFrames + 4;
  const d6 = audioManifest.scenes[5].durationInFrames + 4;
  const d7 = audioManifest.scenes[6].durationInFrames + 4;
  const d8 = audioManifest.scenes[7].durationInFrames + 10;

  return (
    <AbsoluteFill style={{ opacity }} className="select-none bg-slate-900 font-sans">
      <Series>
        {/* Scene 1: Hook & Duel Matchup */}
        <Series.Sequence durationInFrames={d1}>
          <Audio src={staticFile(audioManifest.scenes[0].audioPath)} />
          <Scene1Hook
            subtitleText={audioManifest.scenes[0].text}
            durationInFrames={d1}
          />
        </Series.Sequence>

        {/* Scene 2: Session Cookie Mechanics */}
        <Series.Sequence durationInFrames={d2}>
          <Audio src={staticFile(audioManifest.scenes[1].audioPath)} />
          <Scene2Session
            subtitleText={audioManifest.scenes[1].text}
            durationInFrames={d2}
          />
        </Series.Sequence>

        {/* Scene 3: Session Flaws & Scaling Bottlenecks */}
        <Series.Sequence durationInFrames={d3}>
          <Audio src={staticFile(audioManifest.scenes[2].audioPath)} />
          <Scene3SessionFlaws
            subtitleText={audioManifest.scenes[2].text}
            durationInFrames={d3}
          />
        </Series.Sequence>

        {/* Scene 4: JWT Anatomy & Stateless Scale */}
        <Series.Sequence durationInFrames={d4}>
          <Audio src={staticFile(audioManifest.scenes[3].audioPath)} />
          <Scene4Jwt
            subtitleText={audioManifest.scenes[3].text}
            durationInFrames={d4}
          />
        </Series.Sequence>

        {/* Scene 5: JWT Dark Side & Security Hazards */}
        <Series.Sequence durationInFrames={d5}>
          <Audio src={staticFile(audioManifest.scenes[4].audioPath)} />
          <Scene5JwtRisks
            subtitleText={audioManifest.scenes[4].text}
            durationInFrames={d5}
          />
        </Series.Sequence>

        {/* Scene 6: Best Practice Hybrid Security */}
        <Series.Sequence durationInFrames={d6}>
          <Audio src={staticFile(audioManifest.scenes[5].audioPath)} />
          <Scene6Hybrid
            subtitleText={audioManifest.scenes[5].text}
            durationInFrames={d6}
          />
        </Series.Sequence>

        {/* Scene 7: Decision Matrix Grid */}
        <Series.Sequence durationInFrames={d7}>
          <Audio src={staticFile(audioManifest.scenes[6].audioPath)} />
          <Scene7Matrix
            subtitleText={audioManifest.scenes[6].text}
            durationInFrames={d7}
          />
        </Series.Sequence>

        {/* Scene 8: PWSolutions Enterprise Authority Outro */}
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
