import { createFileRoute } from "@tanstack/react-router";
import { useState, type ChangeEvent } from "react";
import { SectionHeader } from "@/components/site/Section";
import { SITE, whatsappUrl } from "@/lib/site";
import { MessageCircle } from "lucide-react";

export const Route = createFileRoute("/packages/customized")({
  head: () => ({
    meta: [
      { title: "Customized Package — Good Look Events" },
      { name: "description", content: "Tell us your event type, budget, theme, guest count and ideas. We'll design it end-to-end via WhatsApp." },
    ],
  }),
  component: Customized,
});

function Customized() {
  const [f, setF] = useState({
    name: "",
    phone: "",
    eventType: "",
    budget: "",
    theme: "",
    guests: "",
    ideas: "",
    other: "",
    date: "",
    location: "",
  });

  const up = (k: keyof typeof f) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setF((p) => ({ ...p, [k]: e.target.value }));

  const message = [
    `*New Enquiry — Customized Package*`,
    ``,
    `Event Type: ${f.eventType || "—"}`,
    `Budget: ${f.budget || "—"}`,
    `Preferred Theme: ${f.theme || "—"}`,
    `Number of Guests: ${f.guests || "—"}`,
    `Event Date: ${f.date || "—"}`,
    `Event Location: ${f.location || "—"}`,
    ``,
    `*Decoration Ideas:*`,
    f.ideas || "—",
    ``,
    `*Additional Requirements:*`,
    f.other || "—",
    ``,
    `*Customer*`,
    `Name: ${f.name || "—"}`,
    `Phone: ${f.phone || "—"}`,
    ``,
    `Sent via ${SITE.name} website.`,
  ].join("\n");

  return (
    <section className="py-16 container mx-auto px-4 sm:px-6">
      <SectionHeader
        eyebrow="Customized Package"
        title="Designed from scratch — your way"
        subtitle="Share your vision below. We'll respond on WhatsApp with concepts, options and a quote."
      />
      <div className="mt-14 max-w-3xl mx-auto glass rounded-3xl p-6 sm:p-10">
        <div className="grid sm:grid-cols-2 gap-4">
          <Field label="Event Type" value={f.eventType} onChange={up("eventType")} placeholder="Wedding, birthday, corporate…" />
          <Field label="Budget (approx.)" value={f.budget} onChange={up("budget")} placeholder="e.g. ₹1,00,000+" />
          <Field label="Preferred Theme" value={f.theme} onChange={up("theme")} placeholder="Royal, pastel, rustic, modern…" />
          <Field label="Number of Guests" value={f.guests} onChange={up("guests")} placeholder="e.g. 150" />
          <Field label="Event Date" type="date" value={f.date} onChange={up("date")} />
          <Field label="Event Location" value={f.location} onChange={up("location")} placeholder="Venue / city" />
        </div>
        <div className="mt-4">
          <Label>Decoration Ideas</Label>
          <textarea rows={4} value={f.ideas} onChange={up("ideas")} placeholder="Colors, props, inspirations, references…" className="mt-2 w-full rounded-xl bg-[color:var(--input)] border border-[color:var(--gold)]/20 px-4 py-3 text-sm outline-none focus:border-[color:var(--gold)]" />
        </div>
        <div className="mt-4">
          <Label>Additional Requirements</Label>
          <textarea rows={3} value={f.other} onChange={up("other")} placeholder="Catering, photography, entertainment…" className="mt-2 w-full rounded-xl bg-[color:var(--input)] border border-[color:var(--gold)]/20 px-4 py-3 text-sm outline-none focus:border-[color:var(--gold)]" />
        </div>
        <div className="mt-6 grid sm:grid-cols-2 gap-4">
          <Field label="Your Name" value={f.name} onChange={up("name")} placeholder="Full name" />
          <Field label="Phone Number" value={f.phone} onChange={up("phone")} placeholder="+91 98765 43210" />
        </div>
        <div className="mt-8 flex flex-wrap gap-4 items-center">
          <a
            href={whatsappUrl(message)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold rounded-full px-8 py-4 text-sm inline-flex items-center gap-2"
          >
            <MessageCircle className="h-4 w-4" /> Send Enquiry on WhatsApp
          </a>
          <p className="text-xs text-muted-foreground">We typically reply within a few hours.</p>
        </div>
      </div>
    </section>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{children}</label>;
}
function Field({ label, value, onChange, type = "text", placeholder }: { label: string; value: string; onChange: (e: ChangeEvent<HTMLInputElement>) => void; type?: string; placeholder?: string }) {
  return (
    <div>
      <Label>{label}</Label>
      <input type={type} value={value} onChange={onChange} placeholder={placeholder} className="mt-2 w-full rounded-xl bg-[color:var(--input)] border border-[color:var(--gold)]/20 px-4 py-3 text-sm outline-none focus:border-[color:var(--gold)] [color-scheme:dark]" />
    </div>
  );
}
