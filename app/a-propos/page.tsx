import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { CTA } from "@/components/sections/CTA";
import { siteConfig } from "@/config/site";
import { CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "À propos",
  description: `Découvrez la philosophie et l'expérience derrière ${siteConfig.name}. Pas de théorie, pas de recettes miracles — uniquement des méthodes commerciales testées sur le terrain.`,
  alternates: { canonical: "/a-propos" },
};

const values = [
  {
    title: "La clarté avant tout",
    description:
      "Je ne vous vendrai jamais quelque chose que vous n'avez pas besoin. Le diagnostic est honnête, même si la réponse n'est pas celle que vous espériez.",
  },
  {
    title: "Le terrain, pas la théorie",
    description:
      "Toutes les méthodes proposées ont été testées en conditions réelles. Ce qui ne fonctionne pas disparaît du programme.",
  },
  {
    title: "Le résultat, pas le processus",
    description:
      "L'objectif n'est pas de vous accompagner indéfiniment. C'est de vous rendre autonome le plus vite possible.",
  },
  {
    title: "La simplicité plutôt que la complexité",
    description:
      "Les meilleures méthodes commerciales sont souvent les plus simples. Si c'est trop compliqué à mettre en place, ça ne sera pas mis en place.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.author.name,
  jobTitle: siteConfig.author.title,
  url: `${siteConfig.url}/a-propos`,
  sameAs: [siteConfig.social.linkedin],
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="pt-24 pb-16">
        {/* Breadcrumb */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-8">
          <Breadcrumb items={[{ label: "À propos" }]} />
        </div>

        {/* Hero */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl">
                Ce site n'existe pas pour parler de moi.
                <br />
                <span className="text-brand-600">Il existe pour résoudre vos problèmes.</span>
              </h1>
              <div className="mt-6 space-y-4 text-neutral-600 leading-relaxed">
                <p>
                  J'accompagne des indépendants, des artisans, des consultants et
                  des dirigeants de TPE depuis plusieurs années. Dans des dizaines
                  de secteurs différents. Avec des profils très variés.
                </p>
                <p>
                  Ce que j'ai observé ? La grande majorité des problèmes
                  commerciaux ne viennent pas d'un manque de talent ou de
                  motivation. Ils viennent d'un manque de méthode, d'organisation
                  et d'outils adaptés.
                </p>
                <p>
                  J'ai construit cet accompagnement en partant d'une obsession
                  simple : qu'est-ce qui fonctionne réellement, en conditions
                  réelles, pour des gens qui n'ont pas une équipe commerciale
                  derrière eux ?
                </p>
                <p className="font-medium text-neutral-800">
                  Pas de théorie. Pas de recettes miracles. Seulement des méthodes
                  qui ont fait leurs preuves sur le terrain.
                </p>
              </div>
            </div>

            {/* Photo placeholder */}
            <div className="flex justify-center">
              <div
                className="h-80 w-64 rounded-2xl bg-neutral-100 flex items-center justify-center text-neutral-400 text-sm"
                aria-label="Photo professionnelle à ajouter"
              >
                Photo à ajouter
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="mt-20 bg-neutral-25 border-y border-neutral-200 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-neutral-950 mb-10">
              Ma philosophie de travail
            </h2>
            <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2" role="list">
              {values.map((value) => (
                <li key={value.title} className="flex items-start gap-4">
                  <CheckCircle
                    className="mt-0.5 h-5 w-5 shrink-0 text-brand-500"
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="font-semibold text-neutral-900">
                      {value.title}
                    </h3>
                    <p className="mt-1 text-sm text-neutral-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>

      <CTA variant="light" />
    </>
  );
}
