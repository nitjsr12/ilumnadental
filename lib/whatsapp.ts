import { siteConfig } from "@/lib/site-config";
import { formatWhatsAppHref } from "@/lib/utils";
import type { AppointmentFormValues, ContactFormValues } from "@/lib/validations";

export function buildContactWhatsAppMessage(values: ContactFormValues): string {
  const lines = [
    "Hello iLUMNA Dental,",
    "",
    "*Contact form message*",
    `Name: ${values.name}`,
    `Email: ${values.email}`,
  ];
  if (values.phone?.trim()) {
    lines.push(`Phone: ${values.phone.trim()}`);
  }
  lines.push("", values.message.trim());
  return lines.join("\n");
}

export function buildAppointmentWhatsAppMessage(values: AppointmentFormValues): string {
  const lines = [
    "Hello iLUMNA Dental,",
    "",
    "*Appointment request*",
    `Name: ${values.name}`,
    `Phone: ${values.phone}`,
  ];
  if (values.email?.trim()) {
    lines.push(`Email: ${values.email.trim()}`);
  }
  lines.push(
    `Preferred date: ${values.preferredDate}`,
    `Preferred time: ${values.preferredTime}`,
    "",
    `Reason for visit:`,
    values.reason.trim(),
  );
  return lines.join("\n");
}

/** Opens WhatsApp (web or app) with a pre-filled message to the clinic number. */
export function openClinicWhatsApp(message: string) {
  const url = formatWhatsAppHref(siteConfig.contact.whatsapp, message);
  window.open(url, "_blank", "noopener,noreferrer");
}
