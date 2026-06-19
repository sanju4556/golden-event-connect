import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Sparkles,
  Crown,
  Wand2,
  Heart,
  Cake,
  Briefcase,
  Baby,
  Home as HomeIcon,
  Gem,
  Users,
  Star,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import hero from "@/assets/hero.jpg";
import wedding from "@/assets/gallery-wedding.jpg";
import engagement from "@/assets/gallery-engagement.jpg";
import birthday from "@/assets/gallery-birthday.jpg";
import reception from "@/assets/gallery-reception.jpg";
import corporate from "@/assets/gallery-corporate.jpg";
import stage from "@/assets/gallery-stage.jpg";
import { SITE, whatsappUrl } from "@/lib/site";
import { SectionHeader } from "@/components/site/Section";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Good Look Events — Luxury Event Management & Decor" },
      {
        name: "description",
        content:
          "Unforgettable weddings, receptions, birthdays and corporate events. Bespoke decor by Good Look Events — enquire on WhatsApp.",
      },
      { property: "og:title", content: "Good Look Events" },
      { property: "og:description", content: SITE.tagline },
      { property: "og:image", content: hero },
    ],
  }),
  component: Home,
});

const services = [
  { Icon: Heart, label: "Weddings" },
  { Icon: Gem, label: "Engagements" },
  { Icon: Cake, label: "Birthdays" },
  { Icon: Sparkles, label: "Receptions" },
  { Icon: Briefcase, label: "Corporate Events" },
  { Icon: Baby, label: "Baby Showers" },
  { Icon: HomeIcon, label: "Housewarmings" },
  { Icon: Crown, label: "Stage Decoration" },
];

const whyUs = [
  { title: "Professional Team", desc: "Seasoned planners, designers and on-ground crew." },
  { title: "Premium Decorations", desc: "Curated florals, drapes and lighting that wow." },
  { title: "Affordable Packages", desc: "Honest pricing, transparent inclusions." },
  { title: "Creative Designs", desc: "Bespoke themes tailored to your story." },
  { title: "Timely Execution", desc: "On-schedule setup, every single time." },
  { title: "Customer Satisfaction", desc: "Hundreds of celebrations, glowing reviews." },
];

const galleryPreview = [
  { src: wedding, label: "Weddings" },
  { src: engagement, label: "Engagements" },
  { src: birthday, label: "Birthdays" },
  { src: reception, label: "Receptions" },
  { src: corporate, label: "Corporate" },
  { src: stage, label: "Stage Decor" },
];

const packages = [
  {
    name: "Classic",
    Icon: Sparkles,
    desc: "Elegant essentials for an intimate, beautiful celebration.",
    href: "/packages/classic",
  },
  {
    name: "Premium",
    Icon: Crown,
    desc: "Luxury decor and full-service execution for a grand event.",
    href: "/packages/premium",
    featured: true,
  },
  {
    name: "Customized",
    Icon: Wand2,
    desc: "Tell us your vision and budget — we'll craft it from scratch.",
    href: "/packages/customized",
  },
] as const;

function Home() {
  const exploreHref = "/packages";
  const enquireHref = whatsappUrl(
    `Hello ${SITE.name}, I'd like to enquire about an event.`,
  );

  return (
    <>
      {/* HERO */}
      <section className="relative -mt-20 min-h-[100svh] flex items-center justify-center overflow-hidden">
        <img
          src={hero}
          alt="Luxury wedding stage decoration"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center pt-24 pb-16">
          <div className="ornate-divider text-xs uppercase tracking-[0.5em]">
            Est. Premium Events
          </div>
          <h1 className="mt-6 font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05]">
            <span className="block text-foreground">Good Look</span>
            <span className="block gold-text">Events</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-foreground/85 italic font-display">
            {SITE.tagline}
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to={exploreHref}
              className="btn-gold rounded-full px-7 py-3.5 text-sm inline-flex items-center gap-2"
            >
              Explore Packages <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={enquireHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-gold rounded-full px-7 py-3.5 text-sm inline-flex items-center gap-2"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp Enquiry
            </a>
          </div>
        </div>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-[color:var(--gold)]/80 text-xs tracking-[0.4em] uppercase animate-float-slow">
          Scroll
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-24 container mx-auto px-4 sm:px-6">
        <SectionHeader
          eyebrow="About Us"
          title={<>Crafted with love, <br className="hidden sm:block" /> executed with precision</>}
          subtitle={
            <>
              {SITE.name} is a full-service event management studio designing
              weddings, engagements, birthdays, receptions, corporate events,
              baby showers, housewarmings, stage decorations and bespoke
              celebrations. Every event is a story — we bring yours to life.
            </>
          }
        />
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {services.map(({ Icon, label }) => (
            <div
              key={label}
              className="glass rounded-2xl p-6 text-center hover:scale-[1.02] transition-transform"
            >
              <div className="mx-auto h-12 w-12 rounded-full grid place-items-center mb-3" style={{ background: "var(--gradient-gold)" }}>
                <Icon className="h-5 w-5 text-[color:var(--onyx)]" />
              </div>
              <div className="font-display text-base">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="py-24 bg-[color:var(--onyx)] border-y border-[color:var(--gold)]/15">
        <div className="container mx-auto px-4 sm:px-6">
          <SectionHeader
            eyebrow="Why Choose Us"
            title="The signature Good Look difference"
            subtitle="From the first sketch to the final farewell, every detail is intentional."
          />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map((f, i) => (
              <div key={f.title} className="glass rounded-2xl p-7 group">
                <div className="text-[color:var(--gold)] font-display text-3xl mb-3">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-display text-xl">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="py-24 container mx-auto px-4 sm:px-6">
        <SectionHeader
          eyebrow="Event Packages"
          title="Choose your celebration"
          subtitle="Three thoughtful starting points — every package is fully customizable on WhatsApp."
        />
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {packages.map(({ name, Icon, desc, href, featured }) => (
            <div
              key={name}
              className={`relative rounded-3xl p-8 transition hover:-translate-y-1 ${
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
              <Link
                to={href}
                className="mt-6 inline-flex items-center gap-2 text-sm uppercase tracking-widest text-[color:var(--gold)] hover:gap-3 transition-all"
              >
                View Details <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="py-24 bg-[color:var(--onyx)] border-y border-[color:var(--gold)]/15">
        <div className="container mx-auto px-4 sm:px-6">
          <SectionHeader
            eyebrow="Gallery"
            title="Moments we've designed"
          />
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryPreview.map((g) => (
              <Link
                key={g.label}
                to="/gallery"
                className="group relative overflow-hidden rounded-2xl aspect-[4/5] gold-border"
              >
                <img
                  src={g.src}
                  alt={g.label}
                  loading="lazy"
                  width={1024}
                  height={1280}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-5 font-display text-xl text-foreground">{g.label}</div>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/gallery" className="btn-outline-gold rounded-full px-6 py-3 text-sm inline-flex items-center gap-2">
              View Full Gallery <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL TEASER */}
      <section className="py-24 container mx-auto px-4 sm:px-6">
        <SectionHeader
          eyebrow="Testimonials"
          title="Loved by our couples & clients"
        />
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {[
            { name: "Priya & Arjun", text: "They turned our wedding into a fairytale. Every flower, every light — perfect." },
            { name: "Rohit Mehra", text: "Our corporate gala has never looked this premium. Flawless execution." },
            { name: "Anita Sharma", text: "From baby shower to housewarming, Good Look Events is our only call." },
          ].map((t) => (
            <div key={t.name} className="glass rounded-2xl p-7">
              <div className="flex gap-1 text-[color:var(--gold)]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-sm text-foreground/90 leading-relaxed italic">"{t.text}"</p>
              <div className="mt-5 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full grid place-items-center font-display text-[color:var(--onyx)]" style={{ background: "var(--gradient-gold)" }}>
                  {t.name[0]}
                </div>
                <div className="text-sm font-medium">{t.name}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 sm:px-6 pb-24">
        <div className="relative overflow-hidden rounded-3xl p-10 md:p-16 text-center gold-border" style={{ background: "var(--gradient-onyx)" }}>
          <Users className="mx-auto h-10 w-10 text-[color:var(--gold)]" />
          <h2 className="mt-5 font-display text-4xl md:text-5xl gold-text">Let's plan something unforgettable</h2>
          <p className="mt-4 max-w-xl mx-auto text-muted-foreground">
            Tell us about your event. We'll respond on WhatsApp with ideas, options and a quote.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <a href={enquireHref} target="_blank" rel="noopener noreferrer" className="btn-gold rounded-full px-7 py-3.5 text-sm inline-flex items-center gap-2">
              <MessageCircle className="h-4 w-4" /> WhatsApp Us
            </a>
            <Link to="/contact" className="btn-outline-gold rounded-full px-7 py-3.5 text-sm">
              Contact Details
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
