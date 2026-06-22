import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { SectionHeader } from "@/components/site/Section";
import { SITE, whatsappUrl } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Good Look Events" },
      { name: "description", content: "Call, WhatsApp, email or visit Good Look Events. We'd love to plan your celebration." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const wa = whatsappUrl(`Hello ${SITE.name}, I'd like to get in touch.`);
  return (
    <section className="py-16 container mx-auto px-4 sm:px-6">
      <SectionHeader eyebrow="Contact Us" title="Let's create something beautiful" subtitle="Reach out — we usually reply within a few hours." />

      <div className="mt-14 grid lg:grid-cols-2 gap-8">
        <div className="glass rounded-3xl p-8 space-y-5">
          {[
            { Icon: Phone, label: "Phone", value: SITE.phone, href: `tel:${SITE.phone.replace(/\s/g, "")}` },
            { Icon: MessageCircle, label: "WhatsApp", value: SITE.whatsappDisplay, href: wa, accent: true },
            { Icon: Mail, label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
            { Icon: MapPin, label: "Address", value: SITE.address },
          ].map(({ Icon, label, value, href, accent }) => (
            <div key={label} className="flex items-start gap-4 min-w-0">
              <div className="h-12 w-12 rounded-2xl grid place-items-center shrink-0" style={{ background: accent ? "var(--whatsapp)" : "var(--gradient-gold)" }}>
                <Icon className={`h-5 w-5 ${accent ? "text-white" : "text-[color:var(--onyx)]"}`} />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">{label}</div>
                {href ? (
                  <a href={href} target={accent ? "_blank" : undefined} rel="noopener noreferrer" className="text-lg font-display hover:text-[color:var(--gold)] transition break-all">
                    {value}
                  </a>
                ) : (
                  <div className="text-lg font-display break-words">{value}</div>
                )}
              </div>
            </div>
          ))}
          <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-gold rounded-full px-6 py-3 text-sm inline-flex items-center gap-2">
            <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
          </a>
        </div>

        <div className="overflow-hidden rounded-3xl gold-border min-h-[400px]">
          <iframe
            src={SITE.mapEmbedSrc}
            title="Our location"
            className="h-full w-full min-h-[400px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
