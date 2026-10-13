import { z } from "zod";

export const aiDevExplainerSchema = z.object({
  title: z.string().default("AI Trong Cuộc Sống Developer"),
  subtitle: z.string().default("Một Ngày Làm Việc Thực Tế Tại Công Ty Công Nghệ"),
});

export type AiDevExplainerProps = z.infer<typeof aiDevExplainerSchema>;
