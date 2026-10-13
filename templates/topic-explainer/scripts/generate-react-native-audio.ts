import { generateTopicVoices, SceneItem } from "./generate-tts";

const reactNativeScenes: SceneItem[] = [
  {
    id: "scene1_hook",
    text: "Làm thế nào để chỉ viết một lần mã nguồn JavaScript duy nhất mà ứng dụng vẫn chạy mượt mà trên cả iOS lẫn Android với tốc độ 60 khung hình trên giây? Hãy cùng giải mã bí mật công nghệ đằng sau React Native ngay sau đây!",
    voice: "vi-VN-NamMinhNeural",
    rate: "+8%",
  },
  {
    id: "scene2_architecture",
    text: "Trước đây, React Native dựa vào cây cầu Bridge để truyền dữ liệu tuần tự hóa JSON giữa JavaScript và Native, gây ra hiện tượng giật lag khi người dùng cuộn danh sách quá nhanh hoặc thao tác animation phức tạp.",
    voice: "vi-VN-NamMinhNeural",
    rate: "+8%",
  },
  {
    id: "scene3_new_arch",
    text: "Bước ngoặt lịch sử chính là New Architecture với JavaScript Interface JSI! Giờ đây, JavaScript có thể gọi trực tiếp hàm Native bằng con trỏ C cộng cộng trong bộ nhớ mà không cần qua bất kỳ cây cầu trung gian nào.",
    voice: "vi-VN-NamMinhNeural",
    rate: "+8%",
  },
  {
    id: "scene4_fabric",
    text: "Đi kèm là bộ dựng hình Fabric Renderer và TurboModules: Giao diện người dùng được đồng bộ đa luồng tức thì, loại bỏ hoàn toàn độ trễ hiển thị và giúp ứng dụng phản hồi mượt mà không thua kém gì Swift hay Kotlin thuần túy.",
    voice: "vi-VN-NamMinhNeural",
    rate: "+8%",
  },
  {
    id: "scene5_optimization",
    text: "Để ứng dụng đạt hiệu năng tối đa, các chuyên gia luôn kích hoạt công cụ máy ảo Hermes Engine, thay thế FlatList bằng FlashList để tối ưu bộ nhớ đệm, và nén hình ảnh chuẩn WebP để giảm 70% tải RAM.",
    voice: "vi-VN-NamMinhNeural",
    rate: "+8%",
  },
  {
    id: "scene6_codepush",
    text: "Vũ khí bí mật khiến các doanh nghiệp mê mẩn React Native chính là OTA CodePush: Cho phép bạn sửa lỗi và cập nhật tính năng mới cho hàng triệu người dùng tức thì mà không cần chờ Apple hay Google xét duyệt hàng tuần.",
    voice: "vi-VN-NamMinhNeural",
    rate: "+8%",
  },
  {
    id: "scene7_business_roi",
    text: "Với React Native, doanh nghiệp tiết kiệm đến 50% chi phí phát triển, rút ngắn một nửa thời gian ra mắt thị trường, và chỉ cần duy trì một đội ngũ lập trình viên tinh gọn duy nhất cho toàn bộ hệ thống mobile.",
    voice: "vi-VN-NamMinhNeural",
    rate: "+8%",
  },
  {
    id: "scene8_outro",
    text: "Bạn muốn phát triển ứng dụng di động hiệu năng cao và xây dựng hạ tầng Cloud vững chắc cho doanh nghiệp? PWSolutions đồng hành cùng bạn bứt phá công nghệ. Truy cập ngay pwsdata.vn để được tư vấn chuyên sâu!",
    voice: "vi-VN-NamMinhNeural",
    rate: "+8%",
  },
];

async function main() {
  const result = await generateTopicVoices("ReactNativeExplainer", reactNativeScenes);
  console.log(`\n🎉 Generated ${result.results.length} scenes, total frames: ${result.totalDurationFrames}`);
}

main().catch(console.error);
