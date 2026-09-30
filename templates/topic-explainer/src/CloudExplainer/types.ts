import { z } from "zod";

export const cloudExplainerSchema = z.object({
  title: z.string().default("Cloud là gì?"),
  subtitle: z.string().default("Hiểu bản chất Điện toán đám mây trong 60 giây"),
});

export type CloudExplainerProps = z.infer<typeof cloudExplainerSchema>;
