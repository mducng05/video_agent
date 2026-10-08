import { generateTopicVoices, SceneItem } from "./generate-tts";

const databaseScenes: SceneItem[] = [
  {
    id: "scene1_hook",
    text: "Tại sao database của bạn lại chạy chậm như rùa bò, query mất tới 10 giây khiến toàn bộ ứng dụng bị tê liệt? Hãy khám phá bí mật tối ưu hóa câu lệnh SQL từ 10 giây xuống chỉ vài mili giây ngay sau đây!",
    voice: "vi-VN-NamMinhNeural",
    rate: "+8%",
  },
  {
    id: "scene2_explain",
    text: "Bước đầu tiên của mọi kỹ sư: Đừng đoán mò, hãy chạy lệnh EXPLAIN ANALYZE! Công cụ này sẽ vạch trần việc cơ sở dữ liệu đang phải quét cạn toàn bộ hàng triệu dòng dữ liệu bằng Sequential Scan, làm nghẽn toàn bộ ổ đĩa I/O.",
    voice: "vi-VN-NamMinhNeural",
    rate: "+8%",
  },
  {
    id: "scene3_btree",
    text: "Bí mật thứ hai: Đánh Index thông minh với B-Tree. Thay vì quét tuần tự từng dòng, cấu trúc B-Tree giúp database tìm đúng bản ghi theo cấp số nhân Log N. Đặc biệt, hãy kết hợp Composite Index cho các trường thường xuyên nằm trong WHERE và ORDER BY.",
    voice: "vi-VN-NamMinhNeural",
    rate: "+8%",
  },
  {
    id: "scene4_sqldiff",
    text: "Bí mật thứ ba: Tiêu diệt triệt để SELECT sao và lỗi N cộng một! SELECT sao ép cơ sở dữ liệu đọc toàn bộ cột thô và làm phình to băng thông mạng. Hãy chỉ lấy đúng cột cần thiết và tận dụng Covering Index để trả dữ liệu siêu tốc ngay từ bộ nhớ RAM.",
    voice: "vi-VN-NamMinhNeural",
    rate: "+8%",
  },
  {
    id: "scene5_cache",
    text: "Bí mật thứ tư: Bộ đệm In-Memory và tách luồng Đọc Ghi. Đưa 90% truy vấn đọc lặp lại vào Redis Cache và định tuyến traffic sang cụm Read Replica, giúp Database Master luôn nhẹ tải và sẵn sàng ghi dữ liệu.",
    voice: "vi-VN-NamMinhNeural",
    rate: "+8%",
  },
  {
    id: "scene6_metrics",
    text: "Kết quả kinh ngạc sau khi áp dụng chuỗi tối ưu: Thời gian thực thi giảm từ 10,2 giây xuống chỉ còn 3,8 mili giây, giảm 86% tải CPU và hệ thống đáp ứng mượt mà hàng chục nghìn truy vấn đồng thời!",
    voice: "vi-VN-NamMinhNeural",
    rate: "+8%",
  },
  {
    id: "scene7_outro",
    text: "Bạn đang đau đầu vì database chậm chạp hay hạ tầng nghẽn tải? PWSolutions cung cấp giải pháp Cloud Server hiệu năng cao và tư vấn tối ưu cơ sở dữ liệu chuyên sâu. Truy cập ngay pwsdata.vn để tăng tốc hệ thống của bạn!",
    voice: "vi-VN-NamMinhNeural",
    rate: "+8%",
  },
];

async function main() {
  const result = await generateTopicVoices("DatabaseExplainer", databaseScenes);
  console.log(`\n🎉 Generated ${result.results.length} scenes, total frames: ${result.totalDurationFrames}`);
}

main().catch(console.error);
