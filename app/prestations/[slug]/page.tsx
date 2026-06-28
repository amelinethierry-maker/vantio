import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Accordion } from "@/components/ui/Accordion";
import { CTA } from "@/components/sections/CTA";
import { services, getServiceBySlug } from "@/config/services";
import { siteConfig } from "@/config/site";
import { CheckCircle } from "lucide-react";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const service = getServiceBySlug(params.slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.description,
    alternates: { canonical: `/prestations/${service.slug}` },
    openGraph: {
      title: service.title,
      description: service.description,
      url: `/prestations/${service.slug}`,
    },
  };
}

export default function ServicePage({ params }: Props) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: {
      "@type": "Person",
      name: siteConfig.author.name,
      url: siteConfig.url,
    },
    areaServed: "FR",
    url: `${siteConfig.url}/prestations/${service.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: "Prestations", href: "/prestations" },
              { label: service.shortTitle },
            ]}
            className="mb-8"
          />

          {/* Hero */}
          <div className="max-w-2xl mb-16">
            <h1 className="text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl">
              {service.title}
            </h1>
            <p className="mt-4 text-xl text-neutral-600 leading-relaxed">
              {service.hero}
            </p>
            <p className="mt-4 text-neutral-600 leading-relaxed">
              {service.description}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Problems */}
            <section aria-labelledby="problems-heading">
              <h2
                id="problems-heading"
                className="text-lg font-bold text-neutral-950 mb-6"
              >
                Les problèmes fréquents
              </h2>
              <ul className="space-y-3" role="list">
                {service.problems.map((problem) => (
                  <li
                    key={problem}
                    className="flex items-start gap-3 rounded-lg border border-neutral-100 bg-neutral-25 px-4 py-3"
                  >
                    <span
                      className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-red-100"
                      aria-hidden="true"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                    </span>
                    <span className="text-sm text-neutral-700">{problem}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Benefits */}
            <section aria-labelledby="benefits-heading">
              <h2
                id="benefits-heading"
                className="text-lg font-bold text-neutral-950 mb-6"
              >
                Ce que vous allez obtenir
              </h2>
              <ul className="space-y-3" role="list">
                {service.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <CheckCircle
                      className="mt-0.5 h-5 w-5 shrink-0 text-brand-500"
                      aria-hidden="true"
                    />
                    <span className="text-sm text-neutral-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Process */}
          <section className="mt-16" aria-labelledby="process-heading">
            <h2
              id="process-heading"
              className="text-lg font-bold text-neutral-950 mb-8"
            >
              Comment ça se passe ?
            </h2>
            <ol className="space-y-4" role="list">
              {service.process.map((step) => (
                <li key={step.step} className="flex items-start gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-50 text-xs font-bold text-brand-600">
                    {step.step}
                  </span>
                  <div>
                    <h3 className="font-semibold text-neutral-900">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-sm text-neutral-600">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          {/* FAQ */}
          {service.faq.length > 0 && (
            <section className="mt-16" aria-labelledby="faq-heading">
              <h2
                id="faq-heading"
                className="text-lg font-bold text-neutral-950 mb-6"
              >
                Questions fréquentes
              </h2>
              <div className="max-w-2xl">
                <Accordion items={service.faq} allowMultiple />
              </div>
            </section>
          )}
        </div>
      </div>

      <CTA />
    </>
  );
}
