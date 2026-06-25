## Problem

The logo is stored as a Lovable CDN asset pointer (`src/assets/logo.png.asset.json`) which resolves to `/__l5e/assets-v1/...`. That path is served by Lovable's preview/publish infrastructure only. On Vercel, that URL returns 404, so the logo doesn't display in the Nav and Footer.

Same applies to any other `.asset.json` files (hero image, gallery images, etc.) — they will all break on Vercel.

## Fix

1. Download the logo binary from the Lovable CDN URL into `src/assets/logo.png` (a real file in the repo, bundled by Vite).
2. Update `src/components/site/Nav.tsx` and `src/components/site/Footer.tsx` to `import logo from "@/assets/logo.png"` instead of reading `logoAsset.url` from the JSON pointer.
3. Delete `src/assets/logo.png.asset.json`.
4. Do the same migration for every other `.asset.json` referenced in the app (hero, gallery, service images, etc.) so the Vercel deployment renders all images. I'll scan `src/` for `.asset.json` imports and migrate each one the same way.
5. Add `public/favicon.png` (copy of logo) and reference it in `__root.tsx` head links so the browser tab icon works on Vercel too.

No visual or content changes — only swapping the asset delivery mechanism from Lovable CDN to bundled Vite assets so the build is fully portable to Vercel.

After this, the Lovable preview will keep working (Vite serves the bundled file), and Vercel will serve the same file from its own static output.