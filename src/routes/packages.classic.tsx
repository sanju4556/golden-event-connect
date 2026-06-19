import { createFileRoute } from "@tanstack/react-router";
import { SectionHeader } from "@/components/site/Section";
import { PackageCustomizer } from "@/components/site/PackageCustomizer";
import s1 from "@/assets/stage-classic-1.jpg";
import s2 from "@/assets/stage-classic-2.jpg";
import s3 from "@/assets/stage-classic-3.jpg";

export const Route = createFileRoute("/packages/classic")({
  head: () => ({
    meta: [
      { title: "Classic Package — Good Look Events" },
      { name: "description", content: "Customize the Classic package: pick a stage decoration, add services, and enquire on WhatsApp." },
    ],
  }),
  component: Classic,
});

const stages = [
  { id: "gold-drape", label: "Gold Drapes & White Florals", src: s1 },
  { id: "rose-ring", label: "Rose Ring Pastel", src: s2 },
  { id: "rustic", label: "Rustic Wood & Lanterns", src: s3 },
];

const services = [
  { id: "photography", label: "Photography" },
  { id: "videography", label: "Videography" },
  { id: "led-wall", label: "LED Wall" },
  { id: "sound", label: "Sound System" },
  { id: "flowers", label: "Flower Decoration" },
  { id: "dj", label: "DJ" },
  { id: "welcome-board", label: "Welcome Board" },
  { id: "lighting", label: "Lighting" },
];

function Classic() {
  return (
    <section className="py-16 container mx-auto px-4 sm:px-6">
      <SectionHeader
        eyebrow="Classic Package"
        title="Customize your celebration"
        subtitle="Choose a stage style, add the services you need, share your details — and send your enquiry on WhatsApp."
      />
      <div className="mt-14 max-w-5xl mx-auto">
        <PackageCustomizer packageName="Classic" stageOptions={stages} serviceOptions={services} />
      </div>
    </section>
  );
}
