import "./index.css";
import { Composition } from "remotion";
import { CloudExplainer } from "./CloudExplainer/CloudExplainer";
import { cloudExplainerSchema } from "./CloudExplainer/types";
import { VpsExplainer } from "./VpsExplainer/VpsExplainer";
import { vpsExplainerSchema } from "./VpsExplainer/types";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      {/* 49s AI Voice Explainer: Cloud là gì? (PWSolutions Corporate Edition) */}
      <Composition
        id="CloudExplainer"
        component={CloudExplainer}
        durationInFrames={1469}
        fps={30}
        width={1080}
        height={1920}
        schema={cloudExplainerSchema}
        defaultProps={{
          title: "Điện toán đám mây là gì?",
          subtitle: "Hạ tầng số vững chắc cùng PWSolutions",
        }}
      />

      {/* 47s AI Voice Explainer: VPS & Giới thiệu Cloud VPS PWSolutions */}
      <Composition
        id="VpsExplainer"
        component={VpsExplainer}
        durationInFrames={1416}
        fps={30}
        width={1080}
        height={1920}
        schema={vpsExplainerSchema}
        defaultProps={{
          title: "VPS là gì?",
          subtitle: "Giải pháp Cloud VPS tối ưu cùng PWSolutions",
        }}
      />
    </>
  );
};
