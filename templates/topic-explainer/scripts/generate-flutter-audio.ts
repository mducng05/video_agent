import { generateTopicVoices, SceneItem } from "./generate-tts";

const flutterScenes: SceneItem[] = [
  {
    id: "scene1_hook",
    text: "Flutter là gì mà khiến các ông lớn công nghệ từ Google, BMW đến ByteDance phát cuồng? Đây là bộ công cụ giao diện mã nguồn mở đột phá, cho phép lập trình viên chỉ viết một mã nguồn duy nhất nhưng chạy mượt mà trên cả iOS, Android, Web và máy tính!",
    voice: "vi-VN-NamMinhNeural",
    rate: "+8%",
  },
  {
    id: "scene2_architecture_comparison",
    text: "Khác biệt lớn nhất của Flutter nằm ở kiến trúc! Các công nghệ cũ dùng WebView chậm chạp hoặc dùng cầu nối JavaScript như React Native truyền thống. Còn Flutter tự mang theo cỗ máy đồ họa riêng, trực tiếp vẽ từng điểm ảnh lên màn hình với tốc độ 60 đến 120 khung hình mỗi giây!",
    voice: "vi-VN-NamMinhNeural",
    rate: "+8%",
  },
  {
    id: "scene3_three_layers",
    text: "Kiến trúc Flutter gồm ba tầng rõ rệt: Tầng trên cùng là Framework viết bằng Dart cung cấp các widget Material và Cupertino. Tầng giữa là Engine C++ siêu mạnh mẽ xử lý đồ họa và máy ảo Dart. Tầng dưới cùng là Embedder giao tiếp với phần cứng hệ điều hành.",
    voice: "vi-VN-NamMinhNeural",
    rate: "+8%",
  },
  {
    id: "scene4_widget_trees",
    text: "Trong Flutter, mọi thứ đều là Widget! Nhưng điều kỳ diệu nằm ở bộ ba cây song song: Cây Widget chứa cấu hình siêu nhẹ, Cây Element quản lý vòng đời và trạng thái, và Cây RenderObject trực tiếp tính toán tọa độ, kích thước để chuyển lệnh vẽ xuống chip đồ họa GPU.",
    voice: "vi-VN-NamMinhNeural",
    rate: "+8%",
  },
  {
    id: "scene5_impeller_engine",
    text: "Điểm sáng giá nhất hiện nay là cỗ máy Impeller thay thế cho Skia cũ. Impeller biên dịch sẵn toàn bộ Shader đồ họa từ trước, loại bỏ hoàn toàn hiện tượng khựng khung hình khi mở ứng dụng lần đầu, mang lại trải nghiệm vuốt chạm mượt mà như ứng dụng gốc Native!",
    voice: "vi-VN-NamMinhNeural",
    rate: "+8%",
  },
  {
    id: "scene6_dart_compilation",
    text: "Flutter tỏa sáng nhờ ngôn ngữ Dart với cơ chế biên dịch kép: Trong lúc phát triển, máy ảo JIT mang đến tính năng Hot Reload chỉ mất nửa giây để thấy ngay thay đổi. Nhưng khi đóng gói sản phẩm, trình biên dịch AOT dịch thẳng ra mã máy ARM gốc chạy với hiệu năng tối đa!",
    voice: "vi-VN-NamMinhNeural",
    rate: "+8%",
  },
  {
    id: "scene7_decision_matrix",
    text: "Doanh nghiệp nên chọn Flutter khi cần phát triển ứng dụng thần tốc, giao diện đồng nhất tuyệt đối trên cả hai hệ điều hành, tối ưu năm mươi phần trăm chi phí nhân sự và bảo trì dễ dàng. Đây là vũ khí hoàn hảo cho các dự án Startup và chuyển đổi số quy mô lớn!",
    voice: "vi-VN-NamMinhNeural",
    rate: "+8%",
  },
  {
    id: "scene8_outro",
    text: "Hiện thực hóa ứng dụng di động đỉnh cao cùng PWSolutions. Chúng tôi cung cấp dịch vụ lập trình Mobile App chuyên nghiệp và hạ tầng Cloud Server hiệu năng cao tối ưu cho Flutter. Truy cập ngay website pwsdata.vn để bắt đầu dự án của bạn ngay hôm nay!",
    voice: "vi-VN-NamMinhNeural",
    rate: "+8%",
  },
];

async function main() {
  const result = await generateTopicVoices("FlutterExplainer", flutterScenes);
  console.log(`\n🎉 Generated ${result.results.length} scenes, total frames: ${result.totalDurationFrames}`);
}

main().catch(console.error);
