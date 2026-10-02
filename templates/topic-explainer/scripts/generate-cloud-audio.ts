import { generateTopicVoices, SceneItem } from "./generate-tts";

const cloudScenes: SceneItem[] = [
  {
    id: "scene1_hook",
    text: "Điện toán đám mây hay Cloud Computing thực chất là gì và tại sao đang là hạ tầng sống còn của mọi doanh nghiệp?",
    voice: "vi-VN-NamMinhNeural",
    rate: "+10%",
  },
  {
    id: "scene2_problem",
    text: "Trước đây, doanh nghiệp phải tốn hàng trăm triệu mua máy chủ vật lý, chi phí phòng máy lạnh, điện năng và đội ngũ vận hành 24/7.",
    voice: "vi-VN-NamMinhNeural",
    rate: "+10%",
  },
  {
    id: "scene3_concept1",
    text: "Về bản chất, Cloud là hạ tầng máy chủ và lưu trữ tập trung tại các Data Center chuẩn quốc tế, kết nối an toàn qua Internet tốc độ cao.",
    voice: "vi-VN-NamMinhNeural",
    rate: "+10%",
  },
  {
    id: "scene4_concept2",
    text: "Doanh nghiệp chỉ chi trả theo đúng nhu cầu sử dụng, từ máy chủ Cloud Server, lưu trữ Cloud Storage, đến hệ thống sao lưu dự phòng tự động.",
    voice: "vi-VN-NamMinhNeural",
    rate: "+10%",
  },
  {
    id: "scene5_benefits",
    text: "Tối ưu tới 60% chi phí vận hành, mở rộng tài nguyên linh hoạt trong vài giây, và đảm bảo an toàn dữ liệu doanh nghiệp liên tục 99,99%.",
    voice: "vi-VN-NamMinhNeural",
    rate: "+10%",
  },
  {
    id: "scene6_outro",
    text: "Khám phá giải pháp máy chủ và lưu trữ đám mây tối ưu cho doanh nghiệp tại pwsdata.vn. PWSolutions - Hạ tầng số vững chắc!",
    voice: "vi-VN-NamMinhNeural",
    rate: "+10%",
  },
];

async function main() {
  const result = await generateTopicVoices("CloudExplainer", cloudScenes);
  console.log(`\n🎉 Generated ${result.results.length} scenes, total frames: ${result.totalDurationFrames}`);
}

main().catch(console.error);
