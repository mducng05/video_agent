import "./index.css";
import { Composition } from "remotion";
import { CloudExplainer } from "./CloudExplainer/CloudExplainer";
import { cloudExplainerSchema } from "./CloudExplainer/types";
import { VpsExplainer } from "./VpsExplainer/VpsExplainer";
import { vpsExplainerSchema } from "./VpsExplainer/types";
import { DevOpsExplainer } from "./DevOpsExplainer/DevOpsExplainer";
import { devopsExplainerSchema } from "./DevOpsExplainer/types";
import { MicroservicesExplainer } from "./MicroservicesExplainer/MicroservicesExplainer";
import { microservicesExplainerSchema } from "./MicroservicesExplainer/types";
import { DatabaseExplainer } from "./DatabaseExplainer/DatabaseExplainer";
import { databaseExplainerSchema } from "./DatabaseExplainer/types";
import { AuthExplainer } from "./AuthExplainer/AuthExplainer";
import { authExplainerSchema } from "./AuthExplainer/types";

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

      {/* 51s AI Voice Explainer: CI/CD Pipeline với Docker & Kubernetes (White-Cyan Gradient Edition) */}
      <Composition
        id="DevOpsExplainer"
        component={DevOpsExplainer}
        durationInFrames={1528}
        fps={30}
        width={1080}
        height={1920}
        schema={devopsExplainerSchema}
        defaultProps={{
          title: "Tự động hóa CI/CD với Docker & Kubernetes",
          subtitle: "Từ Git Push đến Production trong 2 phút",
        }}
      />

      {/* 52s AI Voice Explainer: Kiến trúc Microservices Triệu Request/s (High-Impact Large HUD Edition) */}
      <Composition
        id="MicroservicesExplainer"
        component={MicroservicesExplainer}
        durationInFrames={1573}
        fps={30}
        width={1080}
        height={1920}
        schema={microservicesExplainerSchema}
        defaultProps={{
          title: "Giải phẫu Kiến trúc Microservices triệu Request/s",
          subtitle: "Từ NGINX Gateway đến Kafka Event-Driven",
        }}
      />

      {/* 98s (~1.7m) AI Voice Explainer: Tối Ưu Hóa Database Query (White-Blue Gradient & Multi-Layout Edition) */}
      <Composition
        id="DatabaseExplainer"
        component={DatabaseExplainer}
        durationInFrames={2947}
        fps={30}
        width={1080}
        height={1920}
        schema={databaseExplainerSchema}
        defaultProps={{
          title: "Bí mật Tối ưu hóa Database Query",
          subtitle: "Từ Chậm Rùa 10 Giây xuống Millisecond",
        }}
      />

      {/* 119s (~2m) AI Voice Explainer: Giải mã JWT vs Session Cookie (White-Blue Gradient Large Font Edition) */}
      <Composition
        id="AuthExplainer"
        component={AuthExplainer}
        durationInFrames={3567}
        fps={30}
        width={1080}
        height={1920}
        schema={authExplainerSchema}
        defaultProps={{
          title: "Giải mã JWT vs Session Cookie",
          subtitle: "Đâu là Tiêu chuẩn Bảo mật cho Ứng dụng hiện đại?",
        }}
      />
    </>
  );
};
