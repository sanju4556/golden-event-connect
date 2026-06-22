## Changes

### 1. About page stats (`src/routes/about.tsx`)
- "12" Years of Craft → **"26"**
- "500+" Events Delivered → **"30000+"**

### 2. Fix map "refused to connect" (`src/lib/site.ts`)
Replace the `maps.app.goo.gl` share link (Google blocks it in iframes) with a frameable embed URL:
```
https://www.google.com/maps?q=Good+Look+Events+Kerala&output=embed
```

### 3. Replace logo with uploaded image, background removed
- Run AI background removal on `user-uploads://logogoodlook.jpg` → transparent PNG.
- Upload via `lovable-assets create` to `src/assets/logo.png.asset.json`.
- Delete the old `src/assets/logo.png` binary.
- Update `src/components/site/Nav.tsx` and `src/components/site/Footer.tsx` to import the `.asset.json` pointer and use `logo.url` as the `src`.

No routing, styling, or logic changes beyond the above.