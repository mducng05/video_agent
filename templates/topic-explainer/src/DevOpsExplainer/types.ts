import { z } from "zod";

export const devopsExplainerSchema = z.object({
  title: z.string().default("Tự động hóa CI/CD với Docker & Kubernetes"),
  subtitle: z.string().default("Từ Git Push đến Production trong 2 phút"),
});

export type DevOpsExplainerProps = z.infer<typeof devopsExplainerSchema>;
