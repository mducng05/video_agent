import { z } from "zod";

export const reactVsReactNativeExplainerSchema = z.object({
  title: z.string().default("So Sánh React JS vs React Native"),
  subtitle: z.string().default("Thế Giới Web vs Bá Chủ Di Động"),
});

export type ReactVsReactNativeExplainerProps = z.infer<
  typeof reactVsReactNativeExplainerSchema
>;
