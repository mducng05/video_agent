import { z } from "zod";

export const microservicesExplainerSchema = z.object({
  title: z.string().default("Kiến trúc Microservices triệu Request/s"),
  subtitle: z.string().default("Từ NGINX Gateway đến Kafka Event-Driven"),
});

export type MicroservicesExplainerProps = z.infer<typeof microservicesExplainerSchema>;
