import { createFileRoute } from "@tanstack/react-router";
import { Star } from "lucide-react";
import { SectionHeader } from "@/components/site/Section";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Testimonials — Good Look Events" },
      { name: "description", content: "Real reviews from couples, families and companies who celebrated with Good Look Events." },
    ],
  }),
  component: Testimonials,
});

const reviews = [
  { name: "Priya & Arjun", role: "Wedding", text: "They turned our wedding into a fairytale. Every flower, every light — absolutely perfect. We received compliments for weeks." },
  { name: "Rohit Mehra", role: "Corporate Gala", text: "Our annual gala has never looked this premium. Flawless execution, beautiful stage, on time and on budget." },
  { name: "Anita Sharma", role: "Baby Shower", text: "From baby shower to housewarming, Good Look Events is now our only call. Creative, warm and so easy to work with." },
  { name: "Karan & Neha", role: "Engagement", text: "The pastel theme they designed was beyond our imagination. So many photos, so many memories." },
  { name: "Vikram Joshi", role: "50th Birthday", text: "They understood exactly what dad wanted — classy, not loud. The setup was timeless." },
  { name: "Meera & Family", role: "Reception", text: "The reception ballroom was breathtaking. Guests are still talking about the florals." },
];

function Testimonials() {
  return (
    <section className="py-16 container mx-auto px-4 sm:px-6">
      <SectionHeader eyebrow="Kind Words" title="Testimonials" subtitle="A few notes from the people we've had the joy of celebrating with." />
      <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((r) => (
          <div key={r.name} className="glass rounded-2xl p-7 flex flex-col">
            <div className="flex gap-1 text-[color:var(--gold)]">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <p className="mt-4 text-sm text-foreground/90 leading-relaxed italic flex-1">"{r.text}"</p>
            <div className="mt-6 flex items-center gap-3">
              <div className="h-11 w-11 rounded-full grid place-items-center font-display text-[color:var(--onyx)]" style={{ background: "var(--gradient-gold)" }}>
                {r.name[0]}
              </div>
              <div>
                <div className="text-sm font-medium">{r.name}</div>
                <div className="text-xs text-muted-foreground">{r.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
