import { createFileRoute } from "@tanstack/react-router";
import { SectionHeader } from "@/components/site/Section";
import { Award, Heart, Sparkles } from "lucide-react";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Good Look Events" },
      { name: "description", content: "Meet Good Look Events — a premium event management studio specializing in weddings, receptions, birthdays, corporate events and bespoke celebrations." },
      { property: "og:title", content: "About — Good Look Events" },
      { property: "og:description", content: "Premium event design & planning studio." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <section className="py-20 container mx-auto px-4 sm:px-6">
      <SectionHeader
        eyebrow="Our Story"
        title="A studio devoted to memorable celebrations"
        subtitle={`At ${SITE.name}, we plan and design events that feel intentional — from intimate gatherings to grand weddings.`}
      />
      <div className="mt-14 grid md:grid-cols-3 gap-6">
        {[
          { Icon: Heart, t: "Crafted with care", d: "Every event begins with listening — your story shapes every design choice." },
          { Icon: Sparkles, t: "Designed to amaze", d: "Florals, lighting, drapes and props chosen to deliver a wow on arrival." },
          { Icon: Award, t: "Delivered flawlessly", d: "Experienced crew, contingency plans and tight timelines you can rely on." },
        ].map(({ Icon, t, d }) => (
          <div key={t} className="glass rounded-2xl p-8">
            <Icon className="h-8 w-8 text-[color:var(--gold)]" />
            <h3 className="mt-4 font-display text-2xl">{t}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{d}</p>
          </div>
        ))}
      </div>

      <div className="mt-20 grid md:grid-cols-4 gap-6 text-center">
        {[
          ["500+", "Events Delivered"],
          ["12", "Years of Craft"],
          ["100%", "Customisable"],
          ["4.9★", "Client Rating"],
        ].map(([n, l]) => (
          <div key={l} className="rounded-2xl p-8 gold-border">
            <div className="font-display text-4xl gold-text">{n}</div>
            <div className="mt-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">{l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
