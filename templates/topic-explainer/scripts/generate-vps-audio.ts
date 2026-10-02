import { generateTopicVoices, SceneItem } from "./generate-tts";

const vpsScenes: SceneItem[] = [
  {
    id: "scene1_hook",
    text: "Bạn muốn website hoặc ứng dụng chạy mượt mà, nhưng chi phí thuê máy chủ riêng lại quá đắt đỏ?",
    voice: "vi-VN-NamMinhNeural",
    rate: "+10%",
  },
  {
    id: "scene2_problem",
    text: "Shared Hosting giá rẻ thì liên tục nghẽn mạng và thiếu bảo mật, còn thuê máy chủ vật lý riêng lại tốn hàng chục triệu mỗi tháng.",
    voice: "vi-VN-NamMinhNeural",
    rate: "+10%",
  },
  {
    id: "scene3_concept",
    text: "Giải pháp hoàn hảo chính là VPS - Máy chủ ảo riêng biệt, phân chia tài nguyên độc lập từ cụm máy chủ vật lý bằng công nghệ ảo hóa.",
    voice: "vi-VN-NamMinhNeural",
    rate: "+10%",
  },
  {
    id: "scene4_pwsshowcase",
    text: "Cloud VPS tại PWSolutions được trang bị ổ cứng chuẩn Enterprise NVMe SSD siêu tốc, đường truyền băng thông mười Gbps và chống DDoS tự động.",
    voice: "vi-VN-NamMinhNeural",
    rate: "+10%",
  },
  {
    id: "scene5_benefits",
    text: "Toàn quyền quản trị root, khởi tạo tự động trong 60 giây, cam kết uptime 99,99% cùng đội ngũ kỹ thuật hỗ trợ 24/7.",
    voice: "vi-VN-NamMinhNeural",
    rate: "+10%",
  },
  {
    id: "scene6_outro",
    text: "Nâng tầm hạ tầng doanh nghiệp cùng PWSolutions ngay hôm nay. Truy cập pwsdata.vn để nhận ưu đãi Cloud VPS tốt nhất!",
    voice: "vi-VN-NamMinhNeural",
    rate: "+10%",
  },
];

async function main() {
  const result = await generateTopicVoices("VpsExplainer", vpsScenes);
  console.log(`\n🎉 Generated ${result.results.length} scenes, total frames: ${result.totalDurationFrames}`);
}

main().catch(console.error);
