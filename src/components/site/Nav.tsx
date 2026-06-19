import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import logo from "@/assets/logo.png";
import { SITE, whatsappUrl } from "@/lib/site";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/packages", label: "Packages" },
  { to: "/gallery", label: "Gallery" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const bookHref = whatsappUrl(
    `Hello ${SITE.name}, I'd like to book an event. Please share details.`,
  );

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass py-2 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.6)]"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 grid grid-cols-[auto_1fr_auto] items-center gap-4">
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <img
            src={logo}
            alt={`${SITE.name} logo`}
            width={48}
            height={48}
            className="h-10 w-10 sm:h-12 sm:w-12 object-contain"
          />
          <span className="hidden sm:block font-display text-lg sm:text-xl tracking-wide gold-text">
            {SITE.name}
          </span>
        </Link>

        <nav className="hidden lg:flex items-center justify-center gap-7">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm uppercase tracking-[0.15em] text-foreground/80 hover:text-[color:var(--gold)] transition-colors"
              activeProps={{ className: "text-[color:var(--gold)]" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 justify-self-end">
          <a
            href={bookHref}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 btn-gold rounded-full px-5 py-2.5 text-sm"
          >
            <MessageCircle className="h-4 w-4" />
            Book Now
          </a>
          <button
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full gold-border text-[color:var(--gold)]"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden glass mt-2 mx-4 rounded-2xl p-4 animate-fade-up">
          <nav className="flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="px-4 py-3 rounded-lg text-sm uppercase tracking-widest text-foreground/85 hover:bg-[color:var(--gold)]/10 hover:text-[color:var(--gold)]"
                activeProps={{ className: "text-[color:var(--gold)] bg-[color:var(--gold)]/10" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
            <a
              href={bookHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 btn-gold rounded-full px-5 py-3 text-center text-sm"
            >
              Book Now on WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
