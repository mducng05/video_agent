import { z } from "zod";

export const rnFolderExplainerSchema = z.object({
  title: z.string().default("Cấu Trúc Thư Mục React Native Chuẩn"),
  subtitle: z.string().default("Từ Dự Án Lộn Xộn Đến Scalable Clean Architecture"),
});

export type RnFolderExplainerProps = z.infer<typeof rnFolderExplainerSchema>;
