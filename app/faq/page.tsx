import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Accordion } from "@/components/ui/Accordion";
import { CTA } from "@/components/sections/CTA";
import { faqItems } from "@/config/faq";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "FAQ — Questions fréquentes",
  description:
    "Toutes les réponses à vos questions sur l'accompagnement commercial : tarifs, durée, méthodes, outils et garanties.",
  alternates: { canonical: "/faq" },
};

const categories = Array.from(
  new Set(faqItems.map((item) => item.category).filter(Boolean))
);

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="pt-24 pb-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "FAQ" }]} className="mb-8" />

          <h1 className="text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl mb-4">
            Questions fréquentes
          </h1>
          <p className="text-lg text-neutral-600 mb-12">
            Toutes les réponses aux questions que vous vous posez avant de
            démarrer.
          </p>

          {categories.map((category) => {
            const items = faqItems.filter(
              (item) => item.category === category
            );
            return (
              <section
                key={category}
                className="mb-12"
                aria-labelledby={`faq-${category}`}
              >
                <h2
                  id={`faq-${category}`}
                  className="text-sm font-semibold uppercase tracking-wider text-neutral-400 mb-4"
                >
                  {category}
                </h2>
                <Accordion
                  items={items}
                  allowMultiple
                  className="rounded-xl border border-neutral-200 bg-white px-5"
                />
              </section>
            );
          })}
        </div>
      </div>

      <CTA variant="light" />
    </>
  );
}
