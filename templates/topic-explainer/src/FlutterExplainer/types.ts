import { z } from "zod";

export const flutterExplainerSchema = z.object({
  title: z.string().default("Flutter Là Gì?"),
  subtitle: z.string().default("Bản Đồ Kiến Trúc & Cỗ Máy Đồ Họa Đa Nền Tảng"),
});

export type FlutterExplainerProps = z.infer<typeof flutterExplainerSchema>;
