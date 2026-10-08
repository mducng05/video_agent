import { z } from "zod";

export const databaseExplainerSchema = z.object({
  title: z.string().default("Bí mật Tối ưu hóa Database Query"),
  subtitle: z.string().default("Từ Chậm Rùa 10 Giây xuống Millisecond"),
});

export type DatabaseExplainerProps = z.infer<typeof databaseExplainerSchema>;
