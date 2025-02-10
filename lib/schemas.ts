import { z, ZodSchema } from "zod";

export const emptySchema = z.object({});

export function validateWithZodSchema<T>(
  schema: ZodSchema<T>,
  data: unknown
): T {
  const result = schema.safeParse(data);
  if (!result.success) {
    const errors = result.error.errors.map((error) => error.message);
    throw new Error(errors.join(","));
  }
  return result.data;
}

export const signInSchema = z.object({
  email: z.string().email("Invalid email format").min(1, "Email is required"),
  password: z.string().nonempty("Password is required."),
});

export const signUpSchema = z
  .object({
    name: z
      .string()
      .min(2, "Name must be at least two characters long.")
      .max(50, "Name must be less than 50 characters long.")
      .nonempty("Name is required."),
    email: z
      .string()
      .email("Invalid email format")
      .nonempty("Email is required"),
    password: z
      .string()
      .min(6, "Password must be at least 6 characters long")
      // .regex(/[A-Z]/, "Password must contain at least one uppercase letter.")
      // .regex(/[a-z]/, "Password must contain at least one lowercase letter.")
      // .regex(/[0-9]/, "Password must contain at least one number.")
      // .regex(
      //   /[@$!%*?&#]/,
      //   "Password must contain at least one special character."
      // )
      .nonempty("Password is required"),
    confirmPassword: z.string().nonempty("Password confirmation is required"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const updateProfileSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least two characters long.")
    .max(50, "Name must be less than 50 characters long.")
    .nonempty("Name is required."),
  displayName: z.string().optional(),
  email: z
    .string()
    .email({ message: "Invalid email address." })
    .max(100, { message: "Email must be less than 100 characters." }),
  nationalId: z
    .string()
    .optional()
    .refine((val) => !val || /^[a-zA-Z0-9]{6,12}$/.test(val), {
      message: "Please provide a valid national ID.",
    }),
  phoneNumber: z.coerce
    .string()
    .min(6, { message: "Phone number must be at least 6 characters." })
    .max(15, { message: "Phone number must be less than 15 characters." })
    .regex(/^\+?\d+$/, { message: "Phone number must be numeric." })
    .optional(),
  address: z.string().optional(),
  nationality: z.coerce
    .string()
    .optional()
    .refine((value) => value !== "undefined", {
      message: "Please select a country.",
    }),
});

export const reservationSchema = z.object({
  startDate: z.string(),
  endDate: z.string(),
  userId: z.string(),
  cabinId: z.string(),
  status: z.string(),
  totalPrice: z.number(),
});

export const reviewSchema = z.object({
  rating: z.coerce
    .number()
    .int()
    .min(1, "Rating must be at least 1")
    .max(5, "Rating must be at most 5"),
  title: z
    .string()
    .min(2, "Title must be more than two characters.")
    .max(100, "Title Cannot be more than 100 characters long."),
  comment: z
    .string()
    .min(10, "Comment must be more than 10 characters long.")
    .max(1000, "Comment cannot be more than 1000 characters long"),
  cabinId: z.string(),
});
