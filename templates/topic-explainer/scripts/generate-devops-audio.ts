import { generateTopicVoices, SceneItem } from "./generate-tts";

const devopsScenes: SceneItem[] = [
  {
    id: "scene1_hook",
    text: "Deploy code lên production thủ công mất hàng giờ và dễ gây lỗi hệ thống? Đã đến lúc tự động hóa toàn diện với C I C D Pipeline hiện đại.",
    voice: "vi-VN-NamMinhNeural",
    rate: "+10%",
  },
  {
    id: "scene2_build",
    text: "Ngay khi lập trình viên Git Push, hệ thống tự động kích hoạt: chạy unit test, đóng gói Docker image chuẩn hóa và quét bảo mật trong tích tắc.",
    voice: "vi-VN-NamMinhNeural",
    rate: "+10%",
  },
  {
    id: "scene3_k8s",
    text: "Tiếp theo, Kubernetes tự động kéo image mới, thực hiện Rolling Update không gây gián đoạn dịch vụ và tự động cân bằng tải traffic.",
    voice: "vi-VN-NamMinhNeural",
    rate: "+10%",
  },
  {
    id: "scene4_aidevops",
    text: "Đặc biệt, tích hợp A I giám sát thông minh giúp tự động phát hiện dị thường, cảnh báo lỗi và tự động Rollback an toàn nếu có sự cố.",
    voice: "vi-VN-NamMinhNeural",
    rate: "+10%",
  },
  {
    id: "scene5_benefits",
    text: "Rút ngắn thời gian phát hành từ nhiều giờ xuống chỉ dưới 2 phút, đảm bảo hệ thống vận hành ổn định 99,99% và tối ưu chi phí vận hành.",
    voice: "vi-VN-NamMinhNeural",
    rate: "+10%",
  },
  {
    id: "scene6_outro",
    text: "Khám phá hạ tầng Cloud Server và giải pháp DevOps tối ưu cho doanh nghiệp tại pwsdata.vn. PWSolutions - Tăng tốc chuyển đổi số!",
    voice: "vi-VN-NamMinhNeural",
    rate: "+10%",
  },
];

async function main() {
  const result = await generateTopicVoices("DevOpsExplainer", devopsScenes);
  console.log(`\n🎉 Generated ${result.results.length} scenes, total frames: ${result.totalDurationFrames}`);
}

main().catch(console.error);
