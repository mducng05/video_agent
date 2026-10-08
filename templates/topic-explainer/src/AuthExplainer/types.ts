import { z } from "zod";

export const authExplainerSchema = z.object({
  title: z.string().default("Giải mã JWT vs Session Cookie"),
  subtitle: z.string().default("Đâu là Tiêu chuẩn Bảo mật cho Ứng dụng hiện đại?"),
});

export type AuthExplainerProps = z.infer<typeof authExplainerSchema>;
