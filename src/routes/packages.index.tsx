import { createFileRoute, Link } from "@tanstack/react-router";
import { Sparkles, Crown, Wand2, ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/site/Section";

export const Route = createFileRoute("/packages/")({
  head: () => ({
    meta: [
      { title: "Event Packages — Good Look Events" },
      { name: "description", content: "Choose from Classic, Premium or fully Customized event packages. Customize and enquire on WhatsApp." },
      { property: "og:title", content: "Event Packages — Good Look Events" },
    ],
  }),
  component: Packages,
});

const items = [
  {
    name: "Classic",
    Icon: Sparkles,
    desc: "Elegant essentials for an intimate, beautiful celebration. Pick a stage and add the services you need.",
    href: "/packages/classic",
    bullets: ["Curated stage decorations", "Add-on services à la carte", "Ideal for small to mid-size events"],
  },
  {
    name: "Premium",
    Icon: Crown,
    desc: "Luxury decor, dramatic lighting, full-service execution — for events that need to wow.",
    href: "/packages/premium",
    bullets: ["Grand floral installations", "Lighting, sound & LED options", "Full event management"],
    featured: true,
  },
  {
    name: "Customized",
    Icon: Wand2,
    desc: "Tell us your theme, guest count and budget. We design it end-to-end from a blank canvas.",
    href: "/packages/customized",
    bullets: ["Theme-based concept", "Designed to your budget", "Unlimited revisions"],
  },
] as const;

function Packages() {
  return (
    <section className="py-20 container mx-auto px-4 sm:px-6">
      <SectionHeader
        eyebrow="Event Packages"
        title="Three ways to celebrate"
        subtitle="Every package is fully customizable. Pick a starting point — we'll tailor the rest with you on WhatsApp."
      />
      <div className="mt-14 grid md:grid-cols-3 gap-6">
        {items.map(({ name, Icon, desc, href, bullets, featured }) => (
          <div
            key={name}
            className={`relative rounded-3xl p-8 flex flex-col ${
              featured
                ? "bg-gradient-to-br from-[oklch(0.22_0.04_80)] to-[oklch(0.15_0.01_70)] gold-border shadow-[var(--shadow-gold)]"
                : "glass"
            }`}
          >
            {featured && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 btn-gold rounded-full px-3 py-1 text-[10px] uppercase tracking-widest">
                Most Popular
              </div>
            )}
            <div className="h-14 w-14 rounded-2xl grid place-items-center mb-5" style={{ background: "var(--gradient-gold)" }}>
              <Icon className="h-6 w-6 text-[color:var(--onyx)]" />
            </div>
            <h3 className="font-display text-3xl gold-text">{name}</h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{desc}</p>
            <ul className="mt-5 space-y-2 text-sm text-foreground/85">
              {bullets.map((b) => (
                <li key={b} className="flex gap-2"><span className="text-[color:var(--gold)]">✦</span> {b}</li>
              ))}
            </ul>
            <div className="mt-auto pt-8">
              <Link to={href} className="btn-gold rounded-full px-5 py-3 text-sm inline-flex items-center gap-2">
                View Details <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
