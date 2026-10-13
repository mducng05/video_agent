import { z } from "zod";

export const reactNativeExplainerSchema = z.object({
  title: z.string().default("Giải mã Công nghệ React Native"),
  subtitle: z.string().default("Từ JavaScript đến Ứng dụng Di động Native 60 FPS"),
});

export type ReactNativeExplainerProps = z.infer<typeof reactNativeExplainerSchema>;
