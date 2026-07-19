export const siteConfig = {
  name: "Vantio — Coaching Commercial pour TPE",
  shortName: "Vantio",
  tagline: "Prospection, négociation, vente, relance — une méthode qui vous ressemble",
  description:
    "Vantio accompagne les TPE, artisans et auto-entrepreneurs sur toute leur démarche commerciale : prospection, négociation, vente, relance, réseaux sociaux.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.vantio.fr",
  author: {
    name: "Vantio",
    title: "Expert en développement commercial",
    email: "contact@vantio.fr",
    phone: "06 52 20 98 83",
    linkedin: "",
    location: "France (visioconférence)",
  },
  calendly: process.env.NEXT_PUBLIC_CALENDLY_URL ?? "",
  social: {
    linkedin: "",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Vantio — Coaching Commercial pour TPE",
  },
  keywords: [
    "accompagnement commercial",
    "prospection commerciale",
    "négociation commerciale",
    "techniques de vente",
    "formation commerciale",
    "audit commercial gratuit",
    "développement commercial TPE",
    "relance client",
    "réseaux sociaux vente",
    "CRM TPE",
    "méthode commerciale",
  ],
};
