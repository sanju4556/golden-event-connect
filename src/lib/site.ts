// Central place to update business contact details.
export const SITE = {
  name: "Good Look Events",
  tagline: "Creating Unforgettable Celebrations with Style & Elegance.",
  // Format: country code + number, digits only (used for wa.me link)
  whatsappNumber: "919999999999",
  whatsappDisplay: "+91 99999 99999",
  phone: "+91 99999 99999",
  email: "hello@goodlookevents.com",
  address: "123 Banquet Avenue, City, India",
  mapEmbedSrc:
    "https://www.google.com/maps?q=India&output=embed",
  socials: {
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
    youtube: "https://youtube.com/",
  },
} as const;

export function whatsappUrl(message: string): string {
  const text = encodeURIComponent(message.trim());
  return `https://wa.me/${SITE.whatsappNumber}?text=${text}`;
}
