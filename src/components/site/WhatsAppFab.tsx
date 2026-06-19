import { SITE, whatsappUrl } from "@/lib/site";
import { MessageCircle } from "lucide-react";

export function WhatsAppFab() {
  const href = whatsappUrl(`Hello ${SITE.name}, I'd like to enquire about your services.`);
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full text-white shadow-[0_10px_40px_-8px_rgba(37,211,102,0.6)] animate-float-slow"
      style={{ background: "var(--whatsapp)" }}
    >
      <MessageCircle className="h-6 w-6" />
      <span className="sr-only">WhatsApp</span>
    </a>
  );
}
