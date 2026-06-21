## Plan: Content Updates Across Good Look Events Website

### Objective
Apply comprehensive content updates across the site to reflect the current business focus (wedding-centric, Malayali audience), updated contact details, and social links.

---

### 1. Site Configuration (`src/lib/site.ts`)
- Change `tagline` to `"We make your wedding dream come true"`.
- Change `whatsappNumber` to `919388103579`.
- Change `whatsappDisplay` and `phone` to `+91 93881 03579`.
- Change `socials.instagram` to `https://www.instagram.com/goodlook_event/`.
- Change `socials.facebook` to `https://www.facebook.com/goodlookevents`.
- Change `mapEmbedSrc` to `https://maps.app.goo.gl/T2VoSBJVNLEeaF8D6`.

### 2. Home Page (`src/routes/index.tsx`)
- **Services Grid:** Remove `Corporate Events` card. Add 5 new cards:
  - **Baptism** (icon: `Church`)
  - **Inauguration** (icon: `Scissors`)
  - **Haldi** (icon: `Flower2`)
  - **Sangeeth** (icon: `Music`)
  - **Bridal Shower** (icon: `Gift`)
- **Testimonials Teaser:** Replace names with Malayali names:
  - `Anjana & Arjun Nair`
  - `Rohit Menon` (update role text to reference inauguration)
  - `Ananya Pillai`

### 3. Services Page (`src/routes/services.tsx`)
- Remove the `Corporate Events` service card.
- Add 5 new service cards with luxury descriptions:
  - **Baptism** — Sacred and elegant setups for christening ceremonies.
  - **Inauguration** — Grand ribbon-cutting backdrops and ceremonial decor.
  - **Haldi** — Vibrant turmeric-themed florals and traditional seating.
  - **Sangeeth** — Lively musical night decor with lights and drapery.
  - **Bridal Shower** — Intimate, chic celebrations for the bride-to-be.
- Import matching Lucide icons (`Church`, `Scissors`, `Flower2`, `Music`, `Gift`).

### 4. Testimonials Page (`src/routes/testimonials.tsx`)
- Replace all reviewer names with Malayali equivalents:
  - `Priya & Arjun` → `Anjana & Arjun Nair`
  - `Rohit Mehra` → `Rohit Menon` (role: `Inauguration`)
  - `Anita Sharma` → `Ananya Pillai`
  - `Karan & Neha` → `Kiran & Nimisha Thomas`
  - `Vikram Joshi` → `Vivek Krishnan`
  - `Meera & Family` → `Meera Nambiar & Family`
- Keep all review text and other roles unchanged.

### 5. Footer (`src/components/site/Footer.tsx`)
- Update description paragraph to:  
  *"Premium event management. Weddings, receptions, birthdays, baptisms, inaugurations, haldi, sangeeth, bridal showers and bespoke celebrations — designed with elegance, executed with precision."*
- Instagram link will auto-update from `SITE.socials.instagram`.

### 6. Gallery Preview (Home Page)
- Replace the `corporate` image/label in the gallery preview grid with one of the new services (e.g., `Baptism` or `Haldi`) to maintain visual consistency, or remove the corporate entry if no replacement image is available.

### 7. Meta Descriptions & SEO
- Update `<meta name="description">` and OpenGraph descriptions on `index.tsx` and `services.tsx` to remove "corporate events" and include the new services list.

---

### Technical Details
- **No new dependencies** required — all icons come from `lucide-react`.
- **No routing changes** — all edits are content-only within existing components.
- **No styling changes** — existing glass cards, gradients, and layouts remain intact.