import { z } from "zod";

const schema = z.object({
  title: z.string().min(3),
  price: z.number().min(1),
  description: z.string(),
});

export default schema;
