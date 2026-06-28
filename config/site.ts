export const siteConfig = {
  name: "Accompagnement Commercial",
  tagline: "Des méthodes commerciales qui fonctionnent sur le terrain",
  description:
    "Accompagnement commercial sur mesure pour TPE et auto-entrepreneurs. Prospection, organisation, scripts, CRM. Pas de théorie — des méthodes testées en conditions réelles.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://vantio.fr",
  author: {
    name: "Votre Nom",
    title: "Expert en développement commercial",
    email: "contact@votre-domaine.fr",
    phone: "+33 6 00 00 00 00",
    linkedin: "https://linkedin.com/in/votre-profil",
    location: "France (visioconférence)",
  },
  calendly: process.env.NEXT_PUBLIC_CALENDLY_URL ?? "https://calendly.com",
  social: {
    linkedin: "https://linkedin.com/in/votre-profil",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Accompagnement Commercial",
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
