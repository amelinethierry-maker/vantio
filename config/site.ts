export const siteConfig = {
  name: "Vantio — Coaching Commercial pour TPE",
  tagline: "Des méthodes commerciales qui fonctionnent sur le terrain",
  description:
    "Vantio accompagne les TPE et auto-entrepreneurs pour développer leurs ventes. Prospection, organisation commerciale, scripts, CRM. Pas de théorie — des méthodes testées en conditions réelles.",
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
    "formation commerciale",
    "audit commercial gratuit",
    "développement commercial TPE",
    "prospection téléphonique",
    "scripts commerciaux",
    "CRM TPE",
    "prospection LinkedIn",
    "méthode commerciale",
  ],
};
