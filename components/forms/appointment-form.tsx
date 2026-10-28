"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MessageCircle } from "lucide-react";
import {
  appointmentSchema,
  type AppointmentFormValues,
} from "@/lib/validations";
import {
  buildAppointmentWhatsAppMessage,
  openClinicWhatsApp,
} from "@/lib/whatsapp";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const inputClass =
  "w-full rounded-lg border border-primary/12 bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted/60 focus-visible:border-secondary/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-secondary/40";

export function AppointmentForm({ compact }: { compact?: boolean }) {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AppointmentFormValues>({
    resolver: zodResolver(appointmentSchema),
    defaultValues: { consent: false },
  });

  function onSubmit(values: AppointmentFormValues) {
    setStatus("loading");
    const message = buildAppointmentWhatsAppMessage(values);
    openClinicWhatsApp(message);
    setStatus("success");
    reset({ consent: false });
  }

  return (
    <div className={cn(!compact && "rounded-2xl border border-primary/10 bg-surface p-6 shadow-lg sm:p-8")}>
      {status === "success" ? (
        <div
          role="status"
          className="rounded-xl border border-secondary/30 bg-accent p-6 text-sm text-foreground"
        >
          <p className="font-semibold">WhatsApp opened</p>
          <p className="mt-2 text-muted">
            Your appointment request is ready in WhatsApp — tap{" "}
            <strong className="font-medium text-foreground">Send</strong> to share it with our
            team. We&apos;ll confirm your slot by phone or WhatsApp.
          </p>
          <Button
            type="button"
            variant="secondary"
            className="mt-4"
            onClick={() => setStatus("idle")}
          >
            Submit another request
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 sm:grid-cols-2" noValidate>
          <div className="sm:col-span-2 sm:grid sm:grid-cols-2 sm:gap-4">
            <div>
              <label htmlFor="appt-name" className="mb-1.5 block text-sm font-medium">
                Full name *
              </label>
              <input id="appt-name" className={inputClass} {...register("name")} />
              {errors.name && (
                <p className="mt-1 text-xs text-red-600" role="alert">
                  {errors.name.message}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="appt-phone" className="mb-1.5 block text-sm font-medium">
                Phone *
              </label>
              <input id="appt-phone" className={inputClass} {...register("phone")} />
              {errors.phone && (
                <p className="mt-1 text-xs text-red-600" role="alert">
                  {errors.phone.message}
                </p>
              )}
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="appt-email" className="mb-1.5 block text-sm font-medium">
              Email (optional)
            </label>
            <input id="appt-email" type="email" className={inputClass} {...register("email")} />
            {errors.email && (
              <p className="mt-1 text-xs text-red-600" role="alert">
                {errors.email.message}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="appt-date" className="mb-1.5 block text-sm font-medium">
              Preferred date *
            </label>
            <input id="appt-date" type="date" className={inputClass} {...register("preferredDate")} />
            {errors.preferredDate && (
              <p className="mt-1 text-xs text-red-600" role="alert">
                {errors.preferredDate.message}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="appt-time" className="mb-1.5 block text-sm font-medium">
              Preferred time *
            </label>
            <select id="appt-time" className={inputClass} {...register("preferredTime")} defaultValue="">
              <option value="" disabled>
                Select a time
              </option>
              {["09:00", "10:00", "11:00", "12:00", "16:00", "17:00", "18:00"].map(
                (t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ),
              )}
            </select>
            {errors.preferredTime && (
              <p className="mt-1 text-xs text-red-600" role="alert">
                {errors.preferredTime.message}
              </p>
            )}
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="appt-reason" className="mb-1.5 block text-sm font-medium">
              Reason for visit *
            </label>
            <textarea
              id="appt-reason"
              rows={3}
              className={inputClass}
              {...register("reason")}
            />
            {errors.reason && (
              <p className="mt-1 text-xs text-red-600" role="alert">
                {errors.reason.message}
              </p>
            )}
          </div>
          <div className="sm:col-span-2">
            <label className="flex gap-3 text-sm">
              <input
                type="checkbox"
                className="mt-1 h-4 w-4 rounded border-primary/30 text-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-secondary"
                {...register("consent", {
                  setValueAs: (v) => v === true || v === "on",
                })}
              />
              <span>
                I consent to being contacted about this appointment request and understand
                this form does not replace emergency care. *
              </span>
            </label>
            {errors.consent && (
              <p className="mt-1 text-xs text-red-600" role="alert">
                {errors.consent.message}
              </p>
            )}
          </div>
          <div className="sm:col-span-2">
            <Button
              type="submit"
              disabled={status === "loading"}
              showArrow
              className="gap-2"
            >
              <MessageCircle className="h-4 w-4" aria-hidden />
              {status === "loading" ? "Opening WhatsApp…" : "Send request via WhatsApp"}
            </Button>
            <p className="mt-2 text-xs text-muted">
              Opens WhatsApp to {siteConfig.contact.phone} with your details pre-filled.
            </p>
          </div>
        </form>
      )}
    </div>
  );
}
