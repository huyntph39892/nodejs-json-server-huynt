import * as z from "zod";

export const productSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  brand: z.string().min(2, "Brand is required"),
  capacity: z.enum(["110", "150"], {
    errorMap: () => ({ message: "Please select a capacity" }),
  }),
  price: z
    .number({ invalid_type_error: "Price is required" })
    .min(0, "Price must be positive"),
  quantity: z
    .number({ invalid_type_error: "Quantity is required" })
    .min(1, "Quantity must be at least 1"),
  description: z.string().optional(),
  image: z.any().refine((file) => file?.[0], {
    message: "Them anh",
  }),
});
