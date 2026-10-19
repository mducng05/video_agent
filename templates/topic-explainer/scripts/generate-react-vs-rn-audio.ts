import { generateTopicVoices, SceneItem } from "./generate-tts";

const scenes: SceneItem[] = [
  {
    id: "scene1_hook",
    text: "Cùng mang họ React, cùng dùng cú pháp JSX và tư duy Component, nhưng tại sao React JS và React Native lại là hai thế giới hoàn toàn khác biệt? Một bên thống trị nền tảng Web, còn một bên là bá chủ ứng dụng Di động đa nền tảng. Đâu là sự khác biệt cốt lõi mà lập trình viên bắt buộc phải nắm rõ?",
    voice: "vi-VN-NamMinhNeural",
    rate: "+8%",
  },
  {
    id: "scene2_react_web",
    text: "Trước hết, React JS là một thư viện JavaScript chuyên xây dựng giao diện người dùng trên trình duyệt web. Nó hoạt động dựa trên cơ chế Virtual DOM: khi state thay đổi, React so sánh cây DOM ảo và chỉ cập nhật những phần tử thay đổi vào DOM thật của trình duyệt, xuất ra các mã HTML, CSS và JavaScript chuẩn.",
    voice: "vi-VN-NamMinhNeural",
    rate: "+8%",
  },
  {
    id: "scene3_rn_mobile",
    text: "Ngược lại, React Native là một Framework hoàn chỉnh để phát triển ứng dụng di động cho iOS và Android. React Native không hề render HTML hay DOM ảo trên trình duyệt, mà trực tiếp ánh xạ sang các thành phần giao diện gốc của hệ điều hành, như UIView trên iOS và android.view trên Android, đem lại hiệu năng 60 FPS mượt mà.",
    voice: "vi-VN-NamMinhNeural",
    rate: "+8%",
  },
  {
    id: "scene4_ui_styling",
    text: "Sự khác biệt rõ nhất thể hiện ngay trong từng dòng code: Ở React JS, bạn xây dựng giao diện bằng các thẻ div, p, span, form và tùy biến bằng CSS hay Tailwind. Còn với React Native, bạn bắt buộc phải dùng View, Text, Image, ScrollView và tạo kiểu bằng StyleSheet với hệ thống Flexbox luôn mặc định theo chiều dọc column.",
    voice: "vi-VN-NamMinhNeural",
    rate: "+8%",
  },
  {
    id: "scene5_architecture",
    text: "Về kiến trúc vận hành: React JS chạy hoàn toàn trên Engine của trình duyệt như V8 hay SpiderMonkey. Trong khi đó, React Native phiên bản mới sử dụng kiến trúc New Architecture với JSI và Fabric, cho phép JavaScript giao tiếp đồng bộ trực tiếp với C++ và Native Thread, loại bỏ hoàn toàn hiện tượng nghẽn cổ chai của Bridge cũ.",
    voice: "vi-VN-NamMinhNeural",
    rate: "+8%",
  },
  {
    id: "scene6_hardware_deploy",
    text: "Về khả năng can thiệp phần cứng và triển khai: React JS bị khóa chặt trong Sandbox của trình duyệt, chỉ truy cập được những Web API cơ bản. Còn React Native có toàn quyền can thiệp vào Camera, GPS, Bluetooth, Cảm biến sinh trắc học và Hệ thống Push Notification. Nhưng đổi lại, phát hành app di động đòi hỏi quy trình kiểm duyệt khắt khe của App Store và Google Play, trong khi Web có thể deploy lên Cloud chỉ trong vài giây.",
    voice: "vi-VN-NamMinhNeural",
    rate: "+8%",
  },
  {
    id: "scene7_matrix",
    text: "Tóm lại ma trận so sánh: React JS dành cho Web, render DOM, cập nhật tức thì qua server, tối ưu mạnh mẽ cho SEO. Còn React Native dành cho Di Động iOS và Android, render Native UI, hiệu năng phần cứng vượt trội, và có thể tái sử dụng tới 80% logic nghiệp vụ giữa hai nền tảng.",
    voice: "vi-VN-NamMinhNeural",
    rate: "+8%",
  },
  {
    id: "scene8_outro",
    text: "Dù bạn chọn React JS cho Web hay React Native cho App Di Động, một hệ thống Backend và Cloud Server ổn định luôn là xương sống quyết định thành bại. PWSolutions cung cấp giải pháp Cloud Server NVMe siêu tốc độ cao và hạ tầng phân tán chuẩn quốc tế, giúp ứng dụng của bạn vận hành trơn tru hàng triệu người dùng. Khám phá ngay tại pwsdata.vn!",
    voice: "vi-VN-NamMinhNeural",
    rate: "+8%",
  },
];

async function main() {
  const result = await generateTopicVoices("ReactVsReactNativeExplainer", scenes);
  console.log(`\n🎉 Generated ${result.results.length} scenes, total frames: ${result.totalDurationFrames}`);
}

main().catch(console.error);
