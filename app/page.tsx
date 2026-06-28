import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { ProblemCards } from "@/components/sections/ProblemCards";
import { WhyMe } from "@/components/sections/WhyMe";
import { Process } from "@/components/sections/Process";
import { WhatYouGet } from "@/components/sections/WhatYouGet";
import { CTA } from "@/components/sections/CTA";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `${siteConfig.name} — Accompagnement commercial pour TPE et auto-entrepreneurs`,
  description: siteConfig.description,
  alternates: { canonical: "/" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  telephone: siteConfig.author.phone,
  email: siteConfig.author.email,
  areaServed: "FR",
  serviceType: "Accompagnement commercial",
  priceRange: "Sur devis",
  sameAs: [siteConfig.social.linkedin],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <ProblemCards />
      <WhyMe />
      <Process />
      <WhatYouGet />
      <CTA />
    </>
  );
}
