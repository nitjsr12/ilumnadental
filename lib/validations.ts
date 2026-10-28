import { z } from "zod";

export const appointmentSchema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  phone: z
    .string()
    .min(10, "Enter a valid phone number")
    .regex(/^[\d\s+\-()]+$/, "Enter a valid phone number"),
  email: z
    .string()
    .email("Enter a valid email")
    .optional()
    .or(z.literal("")),
  preferredDate: z.string().min(1, "Select a preferred date"),
  preferredTime: z.string().min(1, "Select a preferred time"),
  reason: z.string().min(3, "Briefly describe your reason for visit"),
  consent: z
    .boolean()
    .refine((v) => v === true, { message: "Consent is required to submit" }),
});

export type AppointmentFormValues = z.infer<typeof appointmentSchema>;

export const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().optional(),
  message: z.string().min(10, "Please enter a message"),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
