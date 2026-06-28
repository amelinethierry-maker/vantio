import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { AuditForm } from "@/components/sections/AuditForm";
import { siteConfig } from "@/config/site";
import { CheckCircle, Clock, Shield, Video } from "lucide-react";

export const metadata: Metadata = {
  title: "Réserver mon audit commercial gratuit",
  description:
    "Obtenez un diagnostic honnête de votre situation commerciale. 45 minutes en visioconférence. Entièrement gratuit. Sans engagement.",
  alternates: { canonical: "/audit-gratuit" },
};

const guarantees = [
  {
    icon: Shield,
    title: "Entièrement gratuit",
    description: "Pas de carte bancaire. Pas de frais cachés.",
  },
  {
    icon: Clock,
    title: "45 minutes",
    description: "Un échange structuré et efficace.",
  },
  {
    icon: Video,
    title: "En visioconférence",
    description: "Partout en France, sans déplacement.",
  },
  {
    icon: CheckCircle,
    title: "Sans engagement",
    description: "Vous n'êtes pas obligé de travailler ensemble ensuite.",
  },
];

const auditCovers = [
  "Analyse de votre processus commercial actuel",
  "Identification de vos principaux points de blocage",
  "Revue de vos outils et de votre organisation",
  "Évaluation de vos méthodes de prospection",
  "Recommandations concrètes et prioritaires",
  "Plan d'action réaliste adapté à votre situation",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Audit Commercial Gratuit",
  description:
    "Audit commercial gratuit de 45 minutes en visioconférence pour identifier vos blocages et définir un plan d'action.",
  provider: {
    "@type": "Person",
    name: siteConfig.author.name,
  },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "EUR",
  },
};

export default function AuditPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[{ label: "Audit Commercial Gratuit" }]}
            className="mb-8"
          />

          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-start">
            {/* Left — explanation */}
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl">
                Réservez votre audit commercial gratuit
              </h1>
              <p className="mt-4 text-lg text-neutral-600 leading-relaxed">
                En 45 minutes, je vous donne un diagnostic honnête de votre
                situation commerciale et des recommandations concrètes.
              </p>
              <p className="mt-3 text-neutral-600 leading-relaxed">
                Pas de pitch commercial. Pas de pression. Juste un échange
                professionnel où vous repartez avec de la valeur — que vous
                décidiez de travailler ensemble ou non.
              </p>

              {/* Guarantees */}
              <ul className="mt-8 grid grid-cols-2 gap-4" role="list">
                {guarantees.map(({ icon: Icon, title, description }) => (
                  <li key={title} className="flex items-start gap-3">
                    <Icon
                      className="mt-0.5 h-5 w-5 shrink-0 text-brand-500"
                      aria-hidden="true"
                    />
                    <div>
                      <div className="text-sm font-semibold text-neutral-900">
                        {title}
                      </div>
                      <div className="text-xs text-neutral-500">
                        {description}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              {/* What will be covered */}
              <div className="mt-10">
                <h2 className="text-base font-semibold text-neutral-950 mb-4">
                  Ce qui sera analysé lors de l'audit
                </h2>
                <ul className="space-y-2.5" role="list">
                  {auditCovers.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckCircle
                        className="mt-0.5 h-4 w-4 shrink-0 text-brand-500"
                        aria-hidden="true"
                      />
                      <span className="text-sm text-neutral-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* What will NOT be done */}
              <div className="mt-6 rounded-xl border border-neutral-200 bg-neutral-25 p-5">
                <h3 className="text-sm font-semibold text-neutral-900 mb-3">
                  Ce qui ne sera PAS fait
                </h3>
                <ul className="space-y-1.5 text-sm text-neutral-600" role="list">
                  <li>— Aucun pitch commercial ou présentation de tarifs non sollicitée</li>
                  <li>— Aucune pression pour s'engager immédiatement</li>
                  <li>— Aucune promesse de résultats irréalistes</li>
                </ul>
              </div>
            </div>

            {/* Right — form */}
            <div>
              <AuditForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
