import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Card } from "@/components/ui/Card";
import { CTA } from "@/components/sections/CTA";
import { services } from "@/config/services";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Prestations",
  description:
    "Découvrez toutes les prestations d'accompagnement commercial : prospection, scripts, CRM, LinkedIn, formation et suivi mensuel pour TPE et auto-entrepreneurs.",
  alternates: { canonical: "/prestations" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Prestations d'accompagnement commercial",
  itemListElement: services.map((service, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: service.title,
    url: `/prestations/${service.slug}`,
    description: service.description,
  })),
};

export default function PrestationsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Prestations" }]} className="mb-8" />

          <div className="max-w-2xl mb-12">
            <h1 className="text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl">
              Des prestations sur mesure, pas des forfaits génériques
            </h1>
            <p className="mt-4 text-lg text-neutral-600 leading-relaxed">
              Chaque accompagnement est construit selon votre situation, votre
              activité et vos objectifs. Vous pouvez commencer par un audit
              gratuit pour définir ensemble ce dont vous avez réellement besoin.
            </p>
          </div>

          <ul
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
            role="list"
          >
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/prestations/${service.slug}`}
                  className="group flex flex-col h-full rounded-xl border border-neutral-200 bg-white p-6 transition-all duration-150 hover:shadow-medium hover:border-neutral-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
                >
                  <h2 className="font-semibold text-neutral-900 group-hover:text-brand-600 transition-colors">
                    {service.title}
                  </h2>
                  <p className="mt-2 text-sm text-neutral-600 leading-relaxed flex-1">
                    {service.description}
                  </p>
                  <div className="mt-4 flex items-center gap-1 text-xs font-medium text-brand-600">
                    En savoir plus
                    <ArrowRight
                      className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <CTA variant="light" />
    </>
  );
}
