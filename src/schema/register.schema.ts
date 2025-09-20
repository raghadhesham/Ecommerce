import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const registerSchema = z
  .object({
    name: z
      .string()
      .min(3, "Name must be at least 3 characters"),
    email: z
      .string()
      .email("Please enter a valid email"),
    password: z
      .string()
      .min(6, "Password must be at least 6 characters"), // adjust if API has stricter rules
    rePassword: z
      .string()
      .min(6, "Passwords must match "),
    phone: z
      .string()
      .min(10, "Phone number must be at least 10 digits"),
  })
  .refine((data) => data.password === data.rePassword, {
    message: "Passwords must match",
    path: ["rePassword"], // show error on rePassword field
  });
