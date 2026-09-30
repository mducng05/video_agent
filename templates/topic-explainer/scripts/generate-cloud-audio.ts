import { generateTopicVoices, SceneItem } from "./generate-tts";

const cloudScenes: SceneItem[] = [
  {
    id: "scene1_hook",
    text: "Bạn nghe người ta nhắc đến Cloud mỗi ngày, nhưng bạn có thực sự biết Cloud là gì không?",
  },
  {
    id: "scene2_problem",
    text: "Ngày xưa, muốn chạy một website, công ty phải mua máy chủ vật lý hàng trăm triệu, thuê phòng máy lạnh 24/7 và một đội ngũ bảo trì túc trực.",
  },
  {
    id: "scene3_concept1",
    text: "Thực chất, Cloud không hề ở trên trời! Đó chỉ là máy tính của người khác, được các ông lớn như Amazon, Google, Microsoft đặt trong những trung tâm dữ liệu khổng lồ.",
  },
  {
    id: "scene4_concept2",
    text: "Bạn chỉ việc thuê tài nguyên qua Internet và trả tiền theo nhu cầu sử dụng. Từ máy ảo, cơ sở dữ liệu, cho đến những ứng dụng quen thuộc như Google Drive hay Gmail.",
  },
  {
    id: "scene5_benefits",
    text: "Ưu điểm lớn nhất là bạn có thể nâng cấp từ 1 lên 1.000 máy chủ chỉ sau một cú click chuột, tự động mở rộng khi có hàng triệu người dùng truy cập.",
  },
  {
    id: "scene6_outro",
    text: "Cloud đã thay đổi hoàn toàn cách thế giới công nghệ vận hành. Thả tim và follow kênh để đón xem những kiến thức thú vị tiếp theo nhé!",
  },
];

async function main() {
  const result = await generateTopicVoices("CloudExplainer", cloudScenes);
  console.log(`\n🎉 Generated ${result.results.length} scenes, total frames: ${result.totalDurationFrames}`);
}

main().catch(console.error);
