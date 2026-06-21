// Central place to update business contact details.
export const SITE = {
  name: "Good Look Events",
  tagline: "We make your wedding dreams come true.",
  // Format: country code + number, digits only (used for wa.me link)
  whatsappNumber: "919388103579",
  whatsappDisplay: "+91 93881 03579",
  phone: "+91 93881 03579",
  email: "goodlookstagedecorating@gmail.com",
  address: "Kerala, India",
  mapEmbedSrc:
    "https://maps.app.goo.gl/T2VoSBJVNLEeaF8D6",
  socials: {
    instagram: "https://www.instagram.com/goodlook_event/",
    facebook: "https://www.facebook.com/goodlookevents",
    youtube: "https://www.youtube.com/@goodlookevent",
  },
} as const;

export function whatsappUrl(message: string): string {
  const text = encodeURIComponent(message.trim());
  return `https://wa.me/${SITE.whatsappNumber}?text=${text}`;
}
