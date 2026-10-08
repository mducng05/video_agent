import { generateTopicVoices, SceneItem } from "./generate-tts";

const microservicesScenes: SceneItem[] = [
  {
    id: "scene1_hook",
    text: "Làm thế nào để hệ thống xử lý hàng triệu request mỗi giây mà không hề nghẽn sập? Hãy cùng giải phẫu kiến trúc Microservices triệu request trên giây!",
    voice: "vi-VN-NamMinhNeural",
    rate: "+10%",
  },
  {
    id: "scene2_nginx",
    text: "Lớp cửa ngõ đầu tiên là NGINX API Gateway: tiếp nhận traffic khổng lồ, cân bằng tải cực đại, giới hạn tần suất và chặn đứng tấn công DDoS.",
    voice: "vi-VN-NamMinhNeural",
    rate: "+10%",
  },
  {
    id: "scene3_services",
    text: "Phía sau là các cụm Microservices chuyên biệt, kết hợp bộ nhớ đệm Redis Cache tốc độ cao giúp phản hồi dữ liệu tức thì dưới 5 mili giây.",
    voice: "vi-VN-NamMinhNeural",
    rate: "+10%",
  },
  {
    id: "scene4_kafka",
    text: "Trục xương sống chính là kiến trúc hướng sự kiện Kafka: đệm hàng triệu message mỗi giây, xử lý bất đồng bộ triệt để, xóa tan mọi nguy cơ nghẽn cổ chai.",
    voice: "vi-VN-NamMinhNeural",
    rate: "+10%",
  },
  {
    id: "scene5_benefits",
    text: "Kiến trúc này giúp hệ thống mở rộng linh hoạt theo tải thực tế, tự cô lập sự cố từng dịch vụ và duy trì Uptime ổn định 99,99%.",
    voice: "vi-VN-NamMinhNeural",
    rate: "+10%",
  },
  {
    id: "scene6_outro",
    text: "Xây dựng hạ tầng Cloud Server và kiến trúc Microservices chịu tải cao cùng PWSolutions. Truy cập pwsdata.vn để bứt phá hiệu năng ngay hôm nay!",
    voice: "vi-VN-NamMinhNeural",
    rate: "+10%",
  },
];

async function main() {
  const result = await generateTopicVoices("MicroservicesExplainer", microservicesScenes);
  console.log(`\n🎉 Generated ${result.results.length} scenes, total frames: ${result.totalDurationFrames}`);
}

main().catch(console.error);
