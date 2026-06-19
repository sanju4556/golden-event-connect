import { createFileRoute } from "@tanstack/react-router";
import { SectionHeader } from "@/components/site/Section";
import { PackageCustomizer } from "@/components/site/PackageCustomizer";
import s1 from "@/assets/stage-premium-1.jpg";
import s2 from "@/assets/stage-premium-2.jpg";
import s3 from "@/assets/stage-premium-3.jpg";

export const Route = createFileRoute("/packages/premium")({
  head: () => ({
    meta: [
      { title: "Premium Package — Good Look Events" },
      { name: "description", content: "Customize the Premium package: luxury stage decor, full services, WhatsApp enquiry." },
    ],
  }),
  component: Premium,
});

const stages = [
  { id: "chandelier-orchid", label: "Crystal Chandelier & Orchids", src: s1 },
  { id: "royal-mandap", label: "Royal Red & Gold Mandap", src: s2 },
  { id: "modern-luxe", label: "Modern Luxe Geometric", src: s3 },
];

const services = [
  { id: "photography-cinema", label: "Cinematic Photography" },
  { id: "drone", label: "Drone Coverage" },
  { id: "videography-4k", label: "4K Videography" },
  { id: "led-wall-xl", label: "LED Wall (XL)" },
  { id: "sound", label: "Pro Sound System" },
  { id: "flowers-imported", label: "Imported Florals" },
  { id: "dj", label: "DJ + Live Band" },
  { id: "valet", label: "Valet Service" },
  { id: "welcome-board", label: "Custom Welcome Board" },
  { id: "lighting-arch", label: "Architectural Lighting" },
  { id: "fog-sparks", label: "Cold Pyro & Fog" },
  { id: "host", label: "MC / Host" },
];

function Premium() {
  return (
    <section className="py-16 container mx-auto px-4 sm:px-6">
      <SectionHeader
        eyebrow="Premium Package"
        title="A grander celebration awaits"
        subtitle="Premium decor options, luxury add-ons, and full-service execution — customized and sent via WhatsApp."
      />
      <div className="mt-14 max-w-5xl mx-auto">
        <PackageCustomizer packageName="Premium" stageOptions={stages} serviceOptions={services} />
      </div>
    </section>
  );
}
