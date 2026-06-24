# Good Look Events

A premium, fully responsive website for **Good Look Events** — a luxury event management company specialising in weddings, receptions, baptisms, inaugurations, haldi, sangeeth, bridal showers, birthdays and bespoke celebrations.

The site showcases services and packages and converts visitors into enquiries by pre-filling a WhatsApp message with everything the customer selected.

## ✨ Features

- **Luxury Gold & Black theme** with elegant typography (Playfair Display + Inter)
- **Mobile-first responsive design** optimised for all screen sizes
- **WhatsApp enquiry flow** — browse packages, pick decorations & services, enter event details, send pre-filled WhatsApp message
- **Package tiers**: Classic, Premium, and fully Customized
- **Filterable gallery** with lightbox viewer
- **Service pages** for Weddings, Receptions, Birthdays, Baptism, Inauguration, Haldi, Sangeeth, Bridal Shower
- **Testimonials, About, Contact** with embedded Google Map
- **SEO-ready** — per-route meta tags, sitemap.xml, robots.txt

## 🛠 Tech Stack

- **TanStack Start v1** (React 19, file-based routing, SSR-ready)
- **Vite 7**
- **Tailwind CSS v4** (semantic design tokens in `src/styles.css`)
- **shadcn/ui** components
- **TypeScript** (strict)
- **Lucide** icons

## 📞 Contact

- **Phone / WhatsApp:** +91 93881 03579
- **Email:** goodlookstagedecorating@gmail.com
- **Address:** Goodlook Events, Changaramkulam, Nannamukku P.O, Malappuram
- **Instagram:** [@goodlook_event](https://www.instagram.com/goodlook_event/)
- **Facebook:** [goodlookevents](https://www.facebook.com/goodlookevents)
- **YouTube:** [@goodlookevent](https://www.youtube.com/@goodlookevent)

## 🚀 Getting Started

```bash
# Install dependencies
bun install

# Start the dev server
bun run dev

# Build for production
bun run build
```

The dev server runs on `http://localhost:8080`.

## 📁 Project Structure

```
src/
├── routes/             # File-based routes (pages)
│   ├── __root.tsx      # Root layout + global head tags
│   ├── index.tsx       # Home page
│   ├── about.tsx
│   ├── services.tsx
│   ├── packages.*.tsx  # Classic / Premium / Customized
│   ├── gallery.tsx
│   ├── testimonials.tsx
│   └── contact.tsx
├── components/
│   ├── site/           # Nav, Footer, shared site chrome
│   └── ui/             # shadcn/ui primitives
├── lib/
│   └── site.ts         # ⭐ Central business info (phone, email, socials, map)
├── assets/             # Logo & generated imagery
└── styles.css          # Tailwind v4 theme tokens
```

## ⚙️ Updating Business Info

All contact details, social links, WhatsApp number, and the Google Map embed live in **`src/lib/site.ts`**. Update once and changes propagate across every page (nav, footer, contact, enquiry messages).

## ▲ Deploying to Vercel

This project is configured to deploy on Vercel out of the box via `vercel.json`.

1. Push the repository to GitHub.
2. In Vercel, click **Add New → Project** and import the repo.
3. Leave Framework Preset as **Other** (the included `vercel.json` overrides build/install commands).
4. Click **Deploy**.

Under the hood:

- `vercel.json` sets `buildCommand` to `NITRO_PRESET=vercel bun run build` so TanStack Start's Nitro server builds for the Vercel runtime instead of the default Cloudflare target.
- `installCommand` uses `bun install` to match local development.
- No environment variables are required — all business info is static in `src/lib/site.ts`.

If you prefer npm on Vercel, change `installCommand` to `npm install` and `buildCommand` to `NITRO_PRESET=vercel npm run build`.

## 📜 License

© Good Look Events. All rights reserved.
