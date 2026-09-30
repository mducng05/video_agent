import "./index.css";
import { Composition } from "remotion";
import { DockerExplainer } from "./DockerExplainer/DockerExplainer";
import { dockerExplainerSchema } from "./DockerExplainer/types";
import { CloudExplainer } from "./CloudExplainer/CloudExplainer";
import { cloudExplainerSchema } from "./CloudExplainer/types";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      {/* 51s AI Voice Explainer: Cloud là gì? */}
      <Composition
        id="CloudExplainer"
        component={CloudExplainer}
        durationInFrames={1541}
        fps={30}
        width={1080}
        height={1920}
        schema={cloudExplainerSchema}
        defaultProps={{
          title: "Cloud là gì?",
          subtitle: "Hiểu bản chất Điện toán đám mây trong 60 giây",
        }}
      />

      {/* 50s AI Voice Explainer: Docker */}
      <Composition
        id="DockerExplainer"
        component={DockerExplainer}
        durationInFrames={1280}
        fps={30}
        width={1080}
        height={1920}
        schema={dockerExplainerSchema}
        defaultProps={{
          title: "Docker là gì?",
          subtitle: "Giải thích trong 50 giây",
        }}
      />
    </>
  );
};
