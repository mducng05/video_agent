import React from "react";
import { Img, spring, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import { BrandHeader } from "../components/BrandHeader";
import { SubtitleBox } from "../components/SubtitleBox";

interface SceneProps {
  subtitleText: string;
  durationInFrames: number;
}

export const Scene8Outro: React.FC<SceneProps> = ({
  subtitleText,
  durationInFrames,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleSpring = spring({ frame, fps, config: { damping: 14, stiffness: 100 } });
  const tipsSpring = spring({ frame: frame - 15, fps, config: { damping: 14, stiffness: 90 } });
  const pwsCardSpring = spring({ frame: frame - 30, fps, config: { damping: 14, stiffness: 90 } });
  const ctaSpring = spring({ frame: frame - 45, fps, config: { damping: 12, stiffness: 110 } });

  return (
    <div className="w-[1080px] h-[1920px] bg-gradient-to-br from-white via-orange-50/70 to-amber-50 text-slate-900 flex flex-col justify-between relative overflow-hidden select-none font-sans">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ea580c0f_1px,transparent_1px),linear-gradient(to_bottom,#ea580c0f_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
      <div className="absolute top-1/4 -right-24 w-96 h-96 bg-orange-300/35 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 -left-24 w-96 h-96 bg-amber-300/30 rounded-full blur-3xl pointer-events-none" />

      <BrandHeader currentCategory="KẾT LUẬN & HẠ TẦNG" metricBadge="PWSOLUTIONS CLOUD INFRASTRUCTURE" />

      <div className="w-[960px] mx-auto flex-1 flex flex-col justify-center gap-7 z-10 py-6">
        {/* Title */}
        <div style={{ transform: `scale(${titleSpring})` }} className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-orange-500 text-white font-black text-lg shadow-sm uppercase">
            <span>🎯 LỰA CHỌN NÀO CHO DOANH NGHIỆP?</span>
          </div>
          <h1 className="text-6xl font-black text-slate-950 tracking-tight leading-tight">
            Nền Móng Backend & Cloud <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500">
              Quyết Định Thành Bại
            </span>
          </h1>
          <p className="text-2xl font-extrabold text-slate-600">
            Dù Chọn Web Hay Mobile, Ứng Dụng Đều Cần API Siêu Tốc
          </p>
        </div>

        {/* 2 Decision Cards */}
        <div
          style={{ opacity: tipsSpring, transform: `translateY(${(1 - tipsSpring) * 25}px)` }}
          className="grid grid-cols-2 gap-4 w-full"
        >
          <div className="bg-white/95 rounded-2xl p-5 border-2 border-orange-200 shadow-md space-y-2">
            <span className="text-xs font-black px-2.5 py-1 rounded-full bg-orange-100 text-orange-900 uppercase">
              🌐 KHI NÀO CHỌN REACT JS?
            </span>
            <div className="text-xl font-black text-slate-900">Tiếp Cận Khách Nhanh</div>
            <p className="text-sm font-bold text-slate-600">
              Cần tối ưu SEO mạnh mẽ, chi phí khởi tạo rẻ, người dùng chỉ cần click link là dùng ngay trên trình duyệt.
            </p>
          </div>

          <div className="bg-white/95 rounded-2xl p-5 border-2 border-amber-300 shadow-md space-y-2">
            <span className="text-xs font-black px-2.5 py-1 rounded-full bg-amber-100 text-amber-900 uppercase">
              📱 KHI NÀO CHỌN REACT NATIVE?
            </span>
            <div className="text-xl font-black text-slate-900">Giữ Chân Khách Hàng</div>
            <p className="text-sm font-bold text-slate-600">
              Cần thông báo đẩy (Push Notifications), tương tác phần cứng mượt mà và hiện diện trực tiếp trên màn hình điện thoại.
            </p>
          </div>
        </div>

        {/* PWSolutions Corporate Banner */}
        <div
          style={{ opacity: pwsCardSpring, transform: `scale(${pwsCardSpring})` }}
          className="w-full bg-gradient-to-r from-orange-600 via-amber-600 to-orange-700 rounded-3xl p-7 text-white shadow-2xl shadow-orange-600/25 border-2 border-orange-400 space-y-4"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-white p-2 shadow-md flex items-center justify-center">
                <Img
                  src={staticFile("pws-logo.png")}
                  alt="PWS Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <div className="text-3xl font-black tracking-tight">PWSolutions</div>
                <p className="text-sm font-extrabold text-amber-200 tracking-wider uppercase">
                  Giải Pháp Điện Toán Đám Mây Doanh Nghiệp
                </p>
              </div>
            </div>
            <div className="px-4 py-2 rounded-xl bg-white/20 backdrop-blur-md text-sm font-black border border-white/30 uppercase">
              NVMe 10Gbps
            </div>
          </div>

          <p className="text-lg font-extrabold text-white/95 leading-relaxed">
            Hạ tầng Cloud Server NVMe siêu tốc độ cao, hỗ trợ tự động hóa CI/CD cho cả hệ thống Web React JS và backend Mobile React Native.
          </p>

          <div className="pt-3 border-t border-white/20 flex items-center justify-between">
            <div className="flex items-center gap-2 text-xl font-black text-amber-200">
              <span>🌐</span>
              <span>pwsdata.vn</span>
            </div>
            <span className="text-base font-black text-white/90">
              Hotline: 0989.288.790
            </span>
          </div>
        </div>

        {/* CTA Follow Button */}
        <div
          style={{ transform: `scale(${ctaSpring})` }}
          className="w-full py-4 px-6 rounded-2xl bg-slate-950 text-white shadow-xl flex items-center justify-between border-2 border-orange-400"
        >
          <div className="flex items-center gap-3">
            <span className="text-3xl">🔔</span>
            <span className="text-xl font-black tracking-wide">
              FOLLOW KÊNH ĐỂ CẬP NHẬT KIẾN THỨC CÔNG NGHỆ MỖI NGÀY!
            </span>
          </div>
          <div className="text-lg font-black text-orange-400">
            LIKE & SHARE
          </div>
        </div>
      </div>

      <SubtitleBox subtitleText={subtitleText} durationInFrames={durationInFrames} />
    </div>
  );
};
