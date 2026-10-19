import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import { BrandHeader } from "../components/BrandHeader";
import { SubtitleBox } from "../components/SubtitleBox";

interface SceneProps {
  subtitleText: string;
  durationInFrames: number;
}

export const Scene6HardwareDeploy: React.FC<SceneProps> = ({
  subtitleText,
  durationInFrames,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleSpring = spring({ frame, fps, config: { damping: 14, stiffness: 100 } });
  const col1Spring = spring({ frame: frame - 15, fps, config: { damping: 14, stiffness: 90 } });
  const col2Spring = spring({ frame: frame - 30, fps, config: { damping: 14, stiffness: 90 } });
  const bannerSpring = spring({ frame: frame - 45, fps, config: { damping: 12, stiffness: 110 } });

  return (
    <div className="w-[1080px] h-[1920px] bg-gradient-to-br from-white via-orange-50/70 to-amber-50 text-slate-900 flex flex-col justify-between relative overflow-hidden select-none font-sans">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ea580c0f_1px,transparent_1px),linear-gradient(to_bottom,#ea580c0f_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
      <div className="absolute top-1/3 -right-24 w-96 h-96 bg-orange-300/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -left-24 w-96 h-96 bg-amber-300/30 rounded-full blur-3xl pointer-events-none" />

      <BrandHeader currentCategory="THỰC CHIẾN HỆ THỐNG" metricBadge="CAPABILITIES: HARDWARE & DEPLOY" />

      <div className="w-[960px] mx-auto flex-1 flex flex-col justify-center gap-7 z-10 py-6">
        {/* Title */}
        <div style={{ transform: `scale(${titleSpring})` }} className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-orange-100 text-orange-900 font-black text-lg border border-orange-300 uppercase">
            <span>🛡️ PHẦN CỨNG & QUY TRÌNH PHÁT HÀNH</span>
          </div>
          <h1 className="text-6xl font-black text-slate-950 tracking-tight leading-tight">
            Sandbox Trình Duyệt <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500">
              Đối Lập Quyền Can Thiệp Thiết Bị
            </span>
          </h1>
          <p className="text-2xl font-extrabold text-slate-600">
            Đánh Đổi Giữa Tốc Độ Triển Khai Và Trải Nghiệm Phần Cứng
          </p>
        </div>

        {/* 2 Comparative Cards */}
        <div className="grid grid-cols-2 gap-5 w-full">
          {/* React JS Card */}
          <div
            style={{ opacity: col1Spring, transform: `translateX(${(1 - col1Spring) * -30}px)` }}
            className="bg-white/95 rounded-3xl p-6 border-2 border-orange-200 shadow-xl shadow-orange-950/5 flex flex-col justify-between space-y-5"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-orange-100">
                <span className="text-lg font-black text-orange-700 uppercase">
                  🌐 REACT JS (WEB)
                </span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-800 font-bold">
                  Sandbox An Toàn
                </span>
              </div>

              <div className="space-y-3">
                <div className="bg-orange-50/70 p-3.5 rounded-xl border border-orange-200 space-y-1">
                  <div className="text-sm font-black text-slate-900">🔒 Truy Cập Phần Cứng:</div>
                  <p className="text-xs font-bold text-slate-600">
                    Bị giới hạn bởi Browser Sandbox. Chỉ dùng Web APIs cơ bản qua quyền cấp phép.
                  </p>
                </div>

                <div className="bg-orange-50/70 p-3.5 rounded-xl border border-orange-200 space-y-1">
                  <div className="text-sm font-black text-slate-900">⚡ Tốc Độ Deploy:</div>
                  <p className="text-xs font-bold text-slate-600">
                    Cực nhanh! Build tĩnh & đẩy lên Cloud Server, CDN trong 10 giây. Cập nhật tức thì 100% users.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-emerald-800 text-xs font-extrabold flex items-center gap-2">
              <span>✅</span>
              <span>Deploy tự động không cần ai phê duyệt</span>
            </div>
          </div>

          {/* React Native Card */}
          <div
            style={{ opacity: col2Spring, transform: `translateX(${(1 - col2Spring) * 30}px)` }}
            className="bg-white/95 rounded-3xl p-6 border-2 border-amber-300 shadow-xl shadow-amber-950/5 flex flex-col justify-between space-y-5"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-amber-100">
                <span className="text-lg font-black text-amber-700 uppercase">
                  📱 REACT NATIVE (APP)
                </span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 font-bold">
                  Toàn Quyền Native
                </span>
              </div>

              <div className="space-y-3">
                <div className="bg-amber-50/70 p-3.5 rounded-xl border border-amber-200 space-y-1">
                  <div className="text-sm font-black text-slate-900">🎯 Truy Cập Phần Cứng:</div>
                  <p className="text-xs font-bold text-slate-600">
                    Toàn diện! Camera chuyên sâu, Bluetooth BLE, GPS nền, FaceID & Push Notification hệ thống.
                  </p>
                </div>

                <div className="bg-amber-50/70 p-3.5 rounded-xl border border-amber-200 space-y-1">
                  <div className="text-sm font-black text-slate-900">⏳ Quy Trình Phát Hành:</div>
                  <p className="text-xs font-bold text-slate-600">
                    Phức tạp. Đóng gói APK/AAB, IPA. Phải chờ Apple và Google kiểm duyệt mất 1 đến 3 ngày.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-amber-900 text-xs font-extrabold flex items-center gap-2">
              <span>⚠️</span>
              <span>Cần chứng chỉ ký số & chính sách Store khắt khe</span>
            </div>
          </div>
        </div>

        {/* Tradeoff Summary Banner */}
        <div
          style={{ transform: `scale(${bannerSpring})` }}
          className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-orange-600 via-amber-600 to-orange-700 text-white shadow-xl shadow-orange-600/20 flex items-center justify-between border border-orange-400"
        >
          <div className="flex items-center gap-3">
            <span className="text-3xl">⚖️</span>
            <span className="text-xl font-black tracking-wide">
              SỰ ĐÁNH ĐỔI TRONG PHÁT TRIỂN
            </span>
          </div>
          <div className="text-lg font-black text-amber-200">
            WEB: NHANH & DỄ TIẾP CẬN • MOBILE: SÂU & GIỮ CHÂN KHÁCH
          </div>
        </div>
      </div>

      <SubtitleBox subtitleText={subtitleText} durationInFrames={durationInFrames} />
    </div>
  );
};
