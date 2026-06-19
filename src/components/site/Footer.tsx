import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Youtube, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";
import { SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-[color:var(--gold)]/20 bg-[color:var(--onyx)]">
      <div className="container mx-auto px-4 sm:px-6 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img src={logo} alt="" width={56} height={56} className="h-14 w-14 object-contain" />
            <span className="font-display text-2xl gold-text">{SITE.name}</span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-md leading-relaxed">
            Premium event management. Weddings, receptions, birthdays, corporate events
            and bespoke celebrations — designed with elegance, executed with precision.
          </p>
          <div className="mt-6 flex gap-3">
            {[
              { href: SITE.socials.instagram, Icon: Instagram, label: "Instagram" },
              { href: SITE.socials.facebook, Icon: Facebook, label: "Facebook" },
              { href: SITE.socials.youtube, Icon: Youtube, label: "YouTube" },
            ].map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full gold-border text-[color:var(--gold)] hover:btn-gold transition"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display text-lg text-[color:var(--gold)]">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {[
              ["/", "Home"],
              ["/about", "About"],
              ["/services", "Services"],
              ["/packages", "Packages"],
              ["/gallery", "Gallery"],
              ["/contact", "Contact"],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="hover:text-[color:var(--gold)] transition">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg text-[color:var(--gold)]">Get in Touch</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <Phone className="h-4 w-4 mt-0.5 text-[color:var(--gold)]" />
              <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="hover:text-foreground">
                {SITE.phone}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="h-4 w-4 mt-0.5 text-[color:var(--gold)]" />
              <a href={`mailto:${SITE.email}`} className="hover:text-foreground">
                {SITE.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-0.5 text-[color:var(--gold)]" />
              <span>{SITE.address}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[color:var(--gold)]/15 py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} {SITE.name}. All rights reserved.
      </div>
    </footer>
  );
}
