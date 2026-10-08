import { generateTopicVoices, SceneItem } from "./generate-tts";

const authScenes: SceneItem[] = [
  {
    id: "scene1_hook",
    text: "Khi xây dựng ứng dụng hiện đại, hàng triệu lập trình viên luôn đau đầu: Nên chọn JSON Web Token không trạng thái hay Session Cookie truyền thống? Đâu mới là tiêu chuẩn bảo mật tối ưu nhất cho hệ thống của bạn?",
    voice: "vi-VN-NamMinhNeural",
    rate: "+8%",
  },
  {
    id: "scene2_session",
    text: "Hãy bắt đầu với Session Cookie: Sau khi đăng nhập, Server lưu Session ID vào Database hoặc RAM Redis, đồng thời gửi Cookie có cờ HttpOnly về trình duyệt. Cơ chế này giúp Server nắm quyền kiểm soát tuyệt đối, có thể hủy phiên ngay lập tức khi phát hiện tài khoản bị hack.",
    voice: "vi-VN-NamMinhNeural",
    rate: "+8%",
  },
  {
    id: "scene3_session_flaws",
    text: "Tuy nhiên, Session gặp trở ngại lớn khi mở rộng hệ thống sang đa cụm máy chủ Microservices. Server phải đồng bộ bộ nhớ tập trung, đồng thời ứng dụng luôn phải đối mặt với nguy cơ tấn công CSRF nếu không cấu hình SameSite nghiêm ngặt.",
    voice: "vi-VN-NamMinhNeural",
    rate: "+8%",
  },
  {
    id: "scene4_jwt",
    text: "Ngược lại, JWT hoàn toàn Stateless! Token gồm ba phần: Header, Payload và Chữ ký mật mã. Server không cần lưu phiên trong bộ nhớ mà chỉ cần giải mã chữ ký để xác thực, giúp hệ thống mở rộng quy mô không giới hạn trên hàng trăm cụm Cloud Server.",
    voice: "vi-VN-NamMinhNeural",
    rate: "+8%",
  },
  {
    id: "scene5_jwt_risks",
    text: "Nhưng cẩn thận! Điểm yếu chí mạng của JWT là không thể thu hồi trước hạn. Nếu token bị lộ, hacker có thể tự do truy cập cho đến khi token hết hạn. Hơn nữa, lưu JWT ở LocalStorage sẽ khiến bạn phơi mình trước các cuộc tấn công XSS đánh cắp dữ liệu.",
    voice: "vi-VN-NamMinhNeural",
    rate: "+8%",
  },
  {
    id: "scene6_hybrid",
    text: "Vậy giải pháp tối ưu của các chuyên gia là gì? Hãy kết hợp cả hai! Dùng Access Token JWT ngắn hạn chỉ năm phút, kèm Refresh Token được lưu trong HttpOnly Cookie bảo mật, kết hợp cơ chế Token Rotation để bảo vệ an toàn tuyệt đối.",
    voice: "vi-VN-NamMinhNeural",
    rate: "+8%",
  },
  {
    id: "scene7_matrix",
    text: "Tóm lại: Chọn Session Cookie cho ứng dụng Web nguyên khối truyền thống, yêu cầu thu hồi quyền tức thì. Chọn kiến trúc JWT cho ứng dụng Mobile, API công khai và hệ thống Microservices phân tán nhiều domain.",
    voice: "vi-VN-NamMinhNeural",
    rate: "+8%",
  },
  {
    id: "scene8_outro",
    text: "Bảo vệ hệ thống và tối ưu hạ tầng ứng dụng của bạn cùng PWSolutions. Chúng tôi cung cấp Cloud Server NVMe bảo mật cao và tư vấn kiến trúc chuẩn doanh nghiệp. Truy cập ngay pwsdata.vn để nâng tầm bảo mật hệ thống!",
    voice: "vi-VN-NamMinhNeural",
    rate: "+8%",
  },
];

async function main() {
  const result = await generateTopicVoices("AuthExplainer", authScenes);
  console.log(`\n🎉 Generated ${result.results.length} scenes, total frames: ${result.totalDurationFrames}`);
}

main().catch(console.error);
