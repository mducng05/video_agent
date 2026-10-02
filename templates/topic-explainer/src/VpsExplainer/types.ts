import { z } from "zod";

export const vpsExplainerSchema = z.object({
  title: z.string().default("VPS là gì?"),
  subtitle: z.string().default("Giải pháp Cloud VPS tối ưu cùng PWSolutions"),
});

export type VpsExplainerProps = z.infer<typeof vpsExplainerSchema>;
