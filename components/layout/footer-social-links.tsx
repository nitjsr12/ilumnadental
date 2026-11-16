"use client";

import { MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { formatPhoneHref, formatWhatsAppHref } from "@/lib/utils";
import { cn } from "@/lib/utils";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" strokeWidth="1.75" />
      <path strokeWidth="1.75" d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M21.58 7.19a2.43 2.43 0 0 0-1.71-1.72C17.88 5 12 5 12 5s-5.88 0-7.87.47A2.43 2.43 0 0 0 2.42 7.19 25.3 25.3 0 0 0 2 12a25.3 25.3 0 0 0 .42 4.81 2.43 2.43 0 0 0 1.71 1.72c2 .46 7.87.46 7.87.46s5.88 0 7.87-.46a2.43 2.43 0 0 0 1.71-1.72 25.3 25.3 0 0 0 .42-4.81 25.3 25.3 0 0 0-.42-4.81ZM10 15V9l5.2 3-5.2 3Z" />
    </svg>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

const iconBtn =
  "footer-social-icon flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white/90 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/40 hover:bg-white hover:text-[#04437f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#05a2a4]";

type FooterSocialLinksProps = {
  className?: string;
};

export function FooterSocialLinks({ className }: FooterSocialLinksProps) {
  const { contact, social } = siteConfig;
  const whatsappHref = formatWhatsAppHref(contact.whatsapp);
  const phoneHref = formatPhoneHref(contact.phone);

  return (
    <div className={cn("flex flex-wrap items-center gap-2.5", className)}>
      <a href={phoneHref} className={iconBtn} aria-label="Call clinic">
        <Phone className="h-[1.125rem] w-[1.125rem]" strokeWidth={1.85} aria-hidden />
      </a>
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className={iconBtn}
        aria-label="Chat on WhatsApp"
      >
        <WhatsAppIcon className="h-[1.2rem] w-[1.2rem]" />
      </a>
      <a
        href={contact.instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={iconBtn}
        aria-label="Instagram"
      >
        <InstagramIcon className="h-[1.125rem] w-[1.125rem]" />
      </a>
      <a
        href={social.youtube}
        target="_blank"
        rel="noopener noreferrer"
        className={iconBtn}
        aria-label="YouTube"
      >
        <YoutubeIcon className="h-[1.2rem] w-[1.2rem]" />
      </a>
      <a
        href={contact.mapLink}
        target="_blank"
        rel="noopener noreferrer"
        className={iconBtn}
        aria-label="Clinic location on Google Maps"
      >
        <MapPin className="h-[1.125rem] w-[1.125rem]" strokeWidth={1.85} aria-hidden />
      </a>
    </div>
  );
}