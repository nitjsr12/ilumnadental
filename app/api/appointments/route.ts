import { NextResponse } from "next/server";
import { appointmentSchema } from "@/lib/validations";
import { siteConfig } from "@/lib/site-config";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = appointmentSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, message: "Invalid form data", issues: parsed.error.flatten() },
        { status: 400 },
      );
    }

    if (!siteConfig.booking.apiEnabled) {
      console.info("[appointments demo]", parsed.data);
      return NextResponse.json({
        ok: true,
        mode: "demo",
        message: "Stored in demo mode. Set APPOINTMENT_API_ENABLED=true and integrate your backend.",
      });
    }

    // Example integration point:
    // await fetch(process.env.APPOINTMENT_WEBHOOK_URL!, { method: 'POST', body: JSON.stringify(parsed.data) });

    return NextResponse.json({ ok: true, mode: "live" });
  } catch {
    return NextResponse.json(
      { ok: false, message: "Server error processing appointment" },
      { status: 500 },
    );
  }
}
