import { generateTopicVoices, SceneItem } from "./generate-tts";

const rnFolderScenes: SceneItem[] = [
  {
    id: "scene1_hook",
    text: "Bạn có đang phát điên khi dự án React Native phình to: Hàng chục màn hình vứt bừa bãi, file code dài hàng nghìn dòng và import chấm chấm gạch chéo vô tận? Hãy cùng chuẩn hóa cấu trúc thư mục chuẩn Clean Architecture ngay sau đây!",
    voice: "vi-VN-NamMinhNeural",
    rate: "+8%",
  },
  {
    id: "scene2_philosophy",
    text: "Sai lầm lớn nhất của người mới là chia thư mục theo tầng kỹ thuật như components, screens, services. Khi dự án lớn lên, bạn phải nhảy qua lại giữa hàng chục folder chỉ để sửa một nút bấm! Giải pháp chân ái chính là kiến trúc Feature-First.",
    voice: "vi-VN-NamMinhNeural",
    rate: "+8%",
  },
  {
    id: "scene3_src_tree",
    text: "Bộ khung chuẩn của thư mục src gồm có: app chứa cấu hình điều hướng navigation, components chứa giao diện dùng chung, features chứa toàn bộ nghiệp vụ theo từng chức năng, services xử lý gọi API, và theme quản lý màu sắc phông chữ.",
    voice: "vi-VN-NamMinhNeural",
    rate: "+8%",
  },
  {
    id: "scene4_feature_anatomy",
    text: "Hãy giải phẫu một tính năng: Ví dụ thư mục features xuyệt auth, bên trong sẽ tự gói gọn các màn hình screens, linh kiện components riêng, hook xử lý logic, api gọi máy chủ và file index đóng vai trò cổng giao tiếp duy nhất ra bên ngoài.",
    voice: "vi-VN-NamMinhNeural",
    rate: "+8%",
  },
  {
    id: "scene5_path_aliases",
    text: "Để xóa sổ địa ngục import chấm chấm xuyệt, hãy cấu hình Path Aliases trong TypeScript! Bạn có thể gọi thẳng a còng components hay a còng features ở bất kỳ đâu, giúp mã nguồn sạch đẹp, dễ tái cấu trúc và chống gãy liên kết khi di chuyển file.",
    voice: "vi-VN-NamMinhNeural",
    rate: "+8%",
  },
  {
    id: "scene6_separation",
    text: "Nguyên tắc sống còn: Tách biệt hoàn toàn giao diện và logic! Màn hình screen chỉ làm nhiệm vụ hiển thị giao diện, đẩy toàn bộ xử lý nghiệp vụ vào Custom Hooks, và sử dụng Zustand hoặc React Query để quản lý dữ liệu máy chủ tối ưu.",
    voice: "vi-VN-NamMinhNeural",
    rate: "+8%",
  },
  {
    id: "scene7_rules",
    text: "Bốn quy tắc vàng cho dự án quy mô lớn: Giới hạn mỗi file dưới hai trăm dòng, tuyệt đối không import chéo phụ thuộc giữa các feature, dùng barrel export kiểm soát quyền truy cập, và đặt file test ngay cạnh component cần kiểm thử.",
    voice: "vi-VN-NamMinhNeural",
    rate: "+8%",
  },
  {
    id: "scene8_outro",
    text: "Xây dựng ứng dụng di động chuẩn kiến trúc Clean Architecture cùng PWSolutions. Chúng tôi cung cấp giải pháp phát triển Mobile App và hạ tầng Cloud Server hiệu năng cao. Truy cập ngay pwsdata.vn để nâng tầm dự án của bạn!",
    voice: "vi-VN-NamMinhNeural",
    rate: "+8%",
  },
];

async function main() {
  const result = await generateTopicVoices("RnFolderExplainer", rnFolderScenes);
  console.log(`\n🎉 Generated ${result.results.length} scenes, total frames: ${result.totalDurationFrames}`);
}

main().catch(console.error);
