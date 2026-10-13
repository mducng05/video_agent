import { generateTopicVoices, SceneItem } from "./generate-tts";

const aiDevScenes: SceneItem[] = [
  {
    id: "scene1_hook",
    text: "Trí tuệ nhân tạo đang thay đổi một ngày làm việc của lập trình viên tại các công ty công nghệ như thế nào? AI không hề cướp mất việc làm, mà đang biến mỗi lập trình viên bình thường thành một kỹ sư siêu cường với năng suất gấp mười lần!",
    voice: "vi-VN-NamMinhNeural",
    rate: "+8%",
  },
  {
    id: "scene2_daily_routine",
    text: "Bắt đầu ngày mới lúc tám giờ ba mươi: Thay vì ngồi vò đầu bứt tai đọc yêu cầu dự án dài ngoằng, lập trình viên ném bản mô tả vào AI để tự động phân tích nghiệp vụ, chỉ ra các trường hợp ngoại lệ và bóc tách thành từng công việc chi tiết trên Jira.",
    voice: "vi-VN-NamMinhNeural",
    rate: "+8%",
  },
  {
    id: "scene3_pair_programming",
    text: "Đến giờ gõ code, AI đóng vai trò một cộng sự thông minh ngồi cạnh. Bạn chỉ cần viết tên hàm hoặc chú thích ngắn gọn, AI Copilot sẽ tự động hoàn thành toàn bộ đoạn mã lặp lại, gợi ý thuật toán tối ưu và viết sẵn các biểu thức chính quy phức tạp chỉ trong một phím bấm.",
    voice: "vi-VN-NamMinhNeural",
    rate: "+8%",
  },
  {
    id: "scene4_troubleshooting",
    text: "Cơn ác mộng sửa lỗi máy chủ lúc nửa đêm đã chấm dứt! Khi hệ thống báo lỗi, lập trình viên chỉ cần chuyển log máy chủ vào AI. Nó sẽ lập tức giải mã chuỗi lỗi, tìm ra dòng code gây nghẽn và đưa ra bản vá chính xác trong chưa đầy ba phút thay vì ba tiếng tìm kiếm.",
    voice: "vi-VN-NamMinhNeural",
    rate: "+8%",
  },
  {
    id: "scene5_review_testing",
    text: "Trước khi tạo yêu cầu trộn mã nguồn, AI tự động quét toàn bộ lỗ hổng bảo mật, kiểm tra chuẩn mực phong cách viết code và tự sinh ra hàng trăm bài kiểm thử tự động với độ bao phủ trên chín mươi phần trăm, giúp loại bỏ hoàn toàn lỗi vặt trước khi lên môi trường thực tế.",
    voice: "vi-VN-NamMinhNeural",
    rate: "+8%",
  },
  {
    id: "scene6_legacy_refactor",
    text: "Đối mặt với những dự án lâu đời khó bảo trì, AI trở thành cứu cánh khi tự động vẽ lại sơ đồ kiến trúc, giải thích các đoạn mã nguồn phức tạp của người đi trước để lại và hỗ trợ chuyển đổi từ hệ thống nguyên khối sang kiến trúc Clean Architecture một cách an toàn.",
    voice: "vi-VN-NamMinhNeural",
    rate: "+8%",
  },
  {
    id: "scene7_mindset_shift",
    text: "Quy luật mới tại các doanh nghiệp công nghệ: AI không thay thế lập trình viên, nhưng lập trình viên biết làm chủ AI sẽ bỏ xa những ai từ chối thay đổi! Giá trị cốt lõi của kỹ sư giờ đây chuyển từ việc gõ phím sang tư duy thiết kế hệ thống và giải quyết bài toán kinh doanh.",
    voice: "vi-VN-NamMinhNeural",
    rate: "+8%",
  },
  {
    id: "scene8_outro",
    text: "Xây dựng và vận hành ứng dụng thông minh thời đại AI cùng PWSolutions. Chúng tôi cung cấp hạ tầng Cloud Server tối ưu cho máy học và các giải pháp phần mềm doanh nghiệp hiệu năng cao. Khám phá ngay tại website pwsdata.vn để tăng tốc dự án của bạn!",
    voice: "vi-VN-NamMinhNeural",
    rate: "+8%",
  },
];

async function main() {
  const result = await generateTopicVoices("AiDevExplainer", aiDevScenes);
  console.log(`\n🎉 Generated ${result.results.length} scenes, total frames: ${result.totalDurationFrames}`);
}

main().catch(console.error);
