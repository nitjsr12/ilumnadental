"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MessageCircle } from "lucide-react";
import { contactSchema, type ContactFormValues } from "@/lib/validations";
import {
  buildContactWhatsAppMessage,
  openClinicWhatsApp,
} from "@/lib/whatsapp";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

const inputClass =
  "w-full rounded-xl border border-primary/15 bg-surface px-4 py-3 text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-secondary";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  function onSubmit(values: ContactFormValues) {
    const message = buildContactWhatsAppMessage(values);
    openClinicWhatsApp(message);
    setSent(true);
    reset();
  }

  if (sent) {
    return (
      <div role="status" className="rounded-xl border border-secondary/25 bg-accent p-5 text-sm">
        <p className="font-semibold text-foreground">WhatsApp opened</p>
        <p className="mt-2 text-muted">
          Your message is ready in WhatsApp — tap <strong className="font-medium text-foreground">Send</strong>{" "}
          there to deliver it to our team. If nothing opened, check pop-up blockers or use
          the WhatsApp button in the header.
        </p>
        <Button
          type="button"
          variant="secondary"
          className="mt-4"
          onClick={() => setSent(false)}
        >
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
      <div>
        <label htmlFor="contact-name" className="mb-1 block text-sm font-medium">
          Name
        </label>
        <input id="contact-name" className={inputClass} {...register("name")} />
        {errors.name && (
          <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>
        )}
      </div>
      <div>
        <label htmlFor="contact-email" className="mb-1 block text-sm font-medium">
          Email
        </label>
        <input id="contact-email" type="email" className={inputClass} {...register("email")} />
        {errors.email && (
          <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>
        )}
      </div>
      <div>
        <label htmlFor="contact-phone" className="mb-1 block text-sm font-medium">
          Phone (optional)
        </label>
        <input id="contact-phone" className={inputClass} {...register("phone")} />
      </div>
      <div>
        <label htmlFor="contact-message" className="mb-1 block text-sm font-medium">
          Message
        </label>
        <textarea id="contact-message" rows={4} className={inputClass} {...register("message")} />
        {errors.message && (
          <p className="mt-1 text-xs text-red-600">{errors.message.message}</p>
        )}
      </div>
      <Button type="submit" disabled={isSubmitting} showArrow className="gap-2">
        <MessageCircle className="h-4 w-4" aria-hidden />
        {isSubmitting ? "Opening WhatsApp…" : "Send via WhatsApp"}
      </Button>
      <p className="text-xs text-muted">
        You&apos;ll continue in WhatsApp to send the message to {siteConfig.contact.phone}.
      </p>
    </form>
  );
}
