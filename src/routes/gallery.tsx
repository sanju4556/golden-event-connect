import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { X } from "lucide-react";
import { SectionHeader } from "@/components/site/Section";
import wedding from "@/assets/gallery-wedding.jpg";
import engagement from "@/assets/gallery-engagement.jpg";
import birthday from "@/assets/gallery-birthday.jpg";
import reception from "@/assets/gallery-reception.jpg";
import corporate from "@/assets/gallery-corporate.jpg";
import stage from "@/assets/gallery-stage.jpg";
import s1 from "@/assets/stage-classic-1.jpg";
import s2 from "@/assets/stage-classic-2.jpg";
import s3 from "@/assets/stage-classic-3.jpg";
import p1 from "@/assets/stage-premium-1.jpg";
import p2 from "@/assets/stage-premium-2.jpg";
import p3 from "@/assets/stage-premium-3.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Good Look Events" },
      { name: "description", content: "Browse our gallery of weddings, engagements, birthdays, receptions, corporate events and stage decorations." },
      { property: "og:title", content: "Gallery — Good Look Events" },
      { property: "og:image", content: wedding },
    ],
  }),
  component: Gallery,
});

const categories = ["All", "Weddings", "Engagements", "Birthdays", "Receptions", "Corporate", "Stage"] as const;
type Cat = (typeof categories)[number];

type Item = { src: string; cat: Exclude<Cat, "All">; alt: string };
const items: Item[] = [
  { src: wedding, cat: "Weddings", alt: "Wedding mandap with red and gold florals" },
  { src: stage, cat: "Stage", alt: "Ornate stage with gold drapes" },
  { src: engagement, cat: "Engagements", alt: "Pink and gold engagement setup" },
  { src: reception, cat: "Receptions", alt: "Reception ballroom" },
  { src: birthday, cat: "Birthdays", alt: "Black and gold birthday setup" },
  { src: corporate, cat: "Corporate", alt: "Corporate gala stage" },
  { src: s1, cat: "Stage", alt: "Gold drape stage" },
  { src: s2, cat: "Stage", alt: "Rose ring stage" },
  { src: s3, cat: "Weddings", alt: "Rustic wedding arch" },
  { src: p1, cat: "Weddings", alt: "Crystal chandelier orchid setup" },
  { src: p2, cat: "Weddings", alt: "Royal mandap" },
  { src: p3, cat: "Stage", alt: "Modern luxe stage" },
];

function Gallery() {
  const [cat, setCat] = useState<Cat>("All");
  const [open, setOpen] = useState<string | null>(null);

  const filtered = cat === "All" ? items : items.filter((i) => i.cat === cat);

  return (
    <section className="py-16 container mx-auto px-4 sm:px-6">
      <SectionHeader eyebrow="Gallery" title="A glimpse of our craft" subtitle="Tap any image to view." />

      <div className="mt-10 flex flex-wrap justify-center gap-2">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setCat(c)}
            className={`rounded-full px-4 py-2 text-xs uppercase tracking-widest transition ${
              cat === c ? "btn-gold" : "gold-border text-foreground/80 hover:text-[color:var(--gold)]"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filtered.map((i, idx) => (
          <button
            key={`${i.src}-${idx}`}
            onClick={() => setOpen(i.src)}
            className="group relative overflow-hidden rounded-2xl aspect-square gold-border"
          >
            <img
              src={i.src}
              alt={i.alt}
              loading="lazy"
              width={1024}
              height={1024}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition" />
            <div className="absolute bottom-3 left-4 text-xs uppercase tracking-widest text-foreground opacity-0 group-hover:opacity-100 transition">
              {i.cat}
            </div>
          </button>
        ))}
      </div>

      {open && (
        <div
          className="fixed inset-0 z-[60] grid place-items-center bg-black/90 backdrop-blur-sm p-4 animate-fade-up"
          onClick={() => setOpen(null)}
        >
          <button
            className="absolute top-4 right-4 h-11 w-11 grid place-items-center rounded-full gold-border text-[color:var(--gold)]"
            onClick={() => setOpen(null)}
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
          <img src={open} alt="" className="max-h-[88vh] max-w-full rounded-2xl object-contain shadow-[var(--shadow-elegant)]" />
        </div>
      )}
    </section>
  );
}
