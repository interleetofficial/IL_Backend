import { z } from "zod";

export const UserSignupSchema = z.object({
  FullName: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(100),

  Username: z
    .string()
    .min(3, "Username must be at least 3 characters")
    .max(30)
    .regex(/^[a-zA-Z0-9_]+$/, "Username can only contain letters, numbers, and underscore"),

  Description: z
    .string()
    .max(500, "Description too long"),

  email: z
    .string()
    .email("Invalid email address"),

  phone: z
    .string()
    .regex(/^[0-9]{10,15}$/, "Invalid phone number"),

  Skill_list: z
    .array(z.string().min(1))
    .min(1, "At least one skill is required"),

  Social_profile: z.object({
    Linkedin: z.string("Invalid LinkedIn URL"),
    Leetcode: z.string("Invalid LeetCode URL"),
    X: z.string("Invalid X profile URL"),
    Discord: z.string(),
    Github: z.string("Invalid GitHub URL"),
  }),

  Languages: z
    .array(z.string().min(1))
    .min(1, "At least one language is required"),

  YOE: z
    .number()
    .min(0, "YOE cannot be negative")
    .max(60, "Invalid years of experience"),

  Education: z
    .string()
    .min(2),

  Occupation: z
    .string()
    .min(2),

  Location: z
    .string()
    .min(2),
});