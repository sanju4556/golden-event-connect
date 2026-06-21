import { createFileRoute } from "@tanstack/react-router";
import { SectionHeader } from "@/components/site/Section";
import { Heart, Gem, Cake, Sparkles, Church, Scissors, Flower2, Music, Gift, Baby, Home, Crown, Wand2 } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Good Look Events" },
      { name: "description", content: "Weddings, engagements, birthdays, receptions, corporate events, baby showers, housewarmings, stage decoration and custom events." },
      { property: "og:title", content: "Services — Good Look Events" },
      { property: "og:description", content: "Full-service event design & planning." },
    ],
  }),
  component: Services,
});

const services = [
  { Icon: Heart, t: "Weddings", d: "Mandap, stage, reception, catering coordination and full décor." },
  { Icon: Gem, t: "Engagements", d: "Romantic floral setups, ring-ceremony backdrops, photo zones." },
  { Icon: Cake, t: "Birthday Parties", d: "Themes for kids and adults — balloons, props, cake tables." },
  { Icon: Sparkles, t: "Reception Events", d: "Banquet styling, head tables, lighting and entertainment." },
  { Icon: Church, t: "Baptism", d: "Sacred, elegant setups for christening ceremonies and family blessings." },
  { Icon: Scissors, t: "Inauguration", d: "Grand ribbon-cutting backdrops, floral arches and ceremonial decor." },
  { Icon: Flower2, t: "Haldi", d: "Vibrant turmeric-themed florals, marigolds and traditional low seating." },
  { Icon: Music, t: "Sangeeth", d: "Lively musical-night decor with stage lights, drapes and dance floors." },
  { Icon: Gift, t: "Bridal Shower", d: "Intimate, chic celebrations curated for the bride-to-be." },
  { Icon: Baby, t: "Baby Showers", d: "Whimsical decor, themed photo walls, dessert tables." },
  { Icon: Home, t: "Housewarming", d: "Traditional pooja setups with elegant modern touches." },
  { Icon: Crown, t: "Stage Decoration", d: "Bespoke backdrops, drapes, florals, lighting design." },
  { Icon: Wand2, t: "Customized Events", d: "Have a vision? We'll design it end-to-end." },
];

function Services() {
  return (
    <section className="py-20 container mx-auto px-4 sm:px-6">
      <SectionHeader eyebrow="What We Do" title="Services" subtitle="A complete suite of event design and management services, tailored to your moment." />
      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map(({ Icon, t, d }) => (
          <div key={t} className="glass rounded-2xl p-7 hover:-translate-y-1 transition">
            <div className="h-12 w-12 rounded-xl grid place-items-center" style={{ background: "var(--gradient-gold)" }}>
              <Icon className="h-5 w-5 text-[color:var(--onyx)]" />
            </div>
            <h3 className="mt-5 font-display text-2xl">{t}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
