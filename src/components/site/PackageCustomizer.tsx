import { useState, type ChangeEvent } from "react";
import { SITE, whatsappUrl } from "@/lib/site";
import { MessageCircle, Check } from "lucide-react";

export type StageOption = { id: string; label: string; src: string };
export type ServiceOption = { id: string; label: string };

export function PackageCustomizer({
  packageName,
  stageOptions,
  serviceOptions,
}: {
  packageName: string;
  stageOptions: StageOption[];
  serviceOptions: ServiceOption[];
}) {
  const [stage, setStage] = useState<string>(stageOptions[0]?.id ?? "");
  const [services, setServices] = useState<Set<string>>(new Set());
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    location: "",
    notes: "",
  });

  const update = (k: keyof typeof form) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const toggleService = (id: string) => {
    setServices((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const buildMessage = () => {
    const stageLabel = stageOptions.find((s) => s.id === stage)?.label ?? "—";
    const selectedServices = serviceOptions
      .filter((s) => services.has(s.id))
      .map((s) => `• ${s.label}`)
      .join("\n") || "• None";

    return [
      `*New Enquiry — ${packageName} Package*`,
      ``,
      `*Stage Decoration:* ${stageLabel}`,
      ``,
      `*Additional Services:*`,
      selectedServices,
      ``,
      `*Customer Details*`,
      `Name: ${form.name || "—"}`,
      `Phone: ${form.phone || "—"}`,
      `Email: ${form.email || "—"}`,
      `Event Date: ${form.date || "—"}`,
      `Event Time: ${form.time || "—"}`,
      `Event Location: ${form.location || "—"}`,
      `Special Requirements: ${form.notes || "—"}`,
      ``,
      `Sent via ${SITE.name} website.`,
    ].join("\n");
  };

  return (
    <div className="space-y-14">
      {/* Stage selection */}
      <section>
        <h2 className="font-display text-2xl sm:text-3xl gold-text">1. Choose your stage decoration</h2>
        <p className="mt-2 text-sm text-muted-foreground">Tap an option to select.</p>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {stageOptions.map((opt) => {
            const active = stage === opt.id;
            return (
              <button
                type="button"
                key={opt.id}
                onClick={() => setStage(opt.id)}
                className={`relative group overflow-hidden rounded-2xl aspect-[4/3] text-left transition ${
                  active ? "ring-2 ring-[color:var(--gold)] shadow-[var(--shadow-gold)]" : "gold-border"
                }`}
              >
                <img src={opt.src} alt={opt.label} loading="lazy" width={1024} height={768} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 to-transparent" />
                <div className="absolute bottom-3 left-4 font-display text-lg text-foreground">{opt.label}</div>
                {active && (
                  <div className="absolute top-3 right-3 h-8 w-8 rounded-full grid place-items-center" style={{ background: "var(--gradient-gold)" }}>
                    <Check className="h-4 w-4 text-[color:var(--onyx)]" />
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </section>

      {/* Services */}
      <section>
        <h2 className="font-display text-2xl sm:text-3xl gold-text">2. Additional services</h2>
        <p className="mt-2 text-sm text-muted-foreground">Select any add-ons you'd like included.</p>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {serviceOptions.map((s) => {
            const checked = services.has(s.id);
            return (
              <label
                key={s.id}
                className={`cursor-pointer rounded-xl p-4 flex items-center gap-3 transition ${
                  checked ? "btn-gold text-[color:var(--onyx)]" : "glass hover:border-[color:var(--gold)]"
                }`}
              >
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => toggleService(s.id)}
                  className="sr-only"
                />
                <span className={`h-5 w-5 rounded grid place-items-center border ${checked ? "bg-[color:var(--onyx)] border-[color:var(--onyx)]" : "border-[color:var(--gold)]/60"}`}>
                  {checked && <Check className="h-3.5 w-3.5 text-[color:var(--gold)]" />}
                </span>
                <span className="text-sm font-medium">{s.label}</span>
              </label>
            );
          })}
        </div>
      </section>

      {/* Customer details */}
      <section>
        <h2 className="font-display text-2xl sm:text-3xl gold-text">3. Your details</h2>
        <div className="mt-6 grid sm:grid-cols-2 gap-4">
          <Field label="Full Name" value={form.name} onChange={update("name")} placeholder="e.g. Priya Sharma" />
          <Field label="Phone Number" value={form.phone} onChange={update("phone")} placeholder="+91 98765 43210" />
          <Field label="Email" type="email" value={form.email} onChange={update("email")} placeholder="you@email.com" />
          <Field label="Event Date" type="date" value={form.date} onChange={update("date")} />
          <Field label="Event Time" type="time" value={form.time} onChange={update("time")} />
          <Field label="Event Location" value={form.location} onChange={update("location")} placeholder="Venue / city" />
        </div>
        <div className="mt-4">
          <Label>Special Requirements</Label>
          <textarea
            value={form.notes}
            onChange={update("notes")}
            rows={4}
            placeholder="Tell us anything specific — colors, themes, guest count, etc."
            className="mt-2 w-full rounded-xl bg-[color:var(--input)] border border-[color:var(--gold)]/20 px-4 py-3 text-sm outline-none focus:border-[color:var(--gold)]"
          />
        </div>
      </section>

      <div className="flex flex-wrap gap-4">
        <a
          href={whatsappUrl(buildMessage())}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold rounded-full px-8 py-4 text-sm inline-flex items-center gap-2"
        >
          <MessageCircle className="h-4 w-4" /> Send Enquiry on WhatsApp
        </a>
        <p className="self-center text-xs text-muted-foreground">No payment required — we'll discuss everything on WhatsApp.</p>
      </div>
    </div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{children}</label>;
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <Label>{label}</Label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl bg-[color:var(--input)] border border-[color:var(--gold)]/20 px-4 py-3 text-sm outline-none focus:border-[color:var(--gold)] [color-scheme:dark]"
      />
    </div>
  );
}
