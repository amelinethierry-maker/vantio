import type { Metadata } from "next";
import Image from "next/image";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { CTA } from "@/components/sections/CTA";
import { siteConfig } from "@/config/site";
import { CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "À propos — Vantio",
  description:
    "22 ans d'expérience commerciale terrain, encore en activité. J'accompagne les TPE, artisans et auto-entrepreneurs par passion, avec des méthodes sur mesure adaptées à chaque profil.",
  alternates: { canonical: "/a-propos" },
};

const values = [
  {
    title: "Sur mesure, pas en kit",
    description:
      "Nous sommes tous différents. La seule vraie méthode commerciale est celle qui est en cohérence avec votre personnalité, votre secteur et votre façon de travailler.",
  },
  {
    title: "Le terrain, pas la théorie",
    description:
      "22 ans de vente en conditions réelles, encore en poste aujourd'hui. Ce que je vous propose, je le pratique moi-même. Ce qui ne fonctionne pas, je l'abandonne.",
  },
  {
    title: "La clarté avant tout",
    description:
      "Un diagnostic honnête, même si la réponse n'est pas celle que vous espériez. Je ne vous vendrai jamais un accompagnement dont vous n'avez pas besoin.",
  },
  {
    title: "La passion comme moteur",
    description:
      "J'accompagne les TPE et indépendants par conviction, pas par obligation. Voir quelqu'un reprendre confiance dans sa démarche commerciale, c'est ça qui me motive.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Vantio",
  jobTitle: "Expert en développement commercial",
  description:
    "22 ans d'expérience commerciale terrain. Accompagnement sur mesure des TPE, artisans et auto-entrepreneurs.",
  url: `${siteConfig.url}/a-propos`,
  image: `${siteConfig.url}/photo-profil.jpg`,
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
                22 ans sur le terrain.
                <br />
                <span className="text-brand-600">Toujours en activité.</span>
              </h1>
              <div className="mt-6 space-y-4 text-neutral-600 leading-relaxed">
                <p>
                  Je suis commercial depuis 22 ans, actuellement en poste dans un grand groupe.
                  Ce n'est pas un CV, c'est une réalité quotidienne. Je vis la prospection,
                  la négociation, les objections, les cycles longs et les doutes, chaque jour.
                </p>
                <p>
                  J'accompagne les TPE, artisans et auto-entrepreneurs par passion.
                  Pas pour en vivre, pour partager ce que 22 ans de terrain m'ont appris
                  sur l'ensemble de la démarche commerciale, de la prospection à la vente,
                  et que personne ne m'a jamais enseigné dans un livre.
                </p>
                <p>
                  Ce que j'ai compris au fil du temps ? Il n'existe pas de méthode universelle.
                  Chaque personne est différente. La seule approche qui fonctionne vraiment
                  est celle qui est en cohérence avec qui vous êtes : votre personnalité,
                  votre secteur, votre façon naturelle d'entrer en contact avec les autres.
                </p>
                <p className="font-medium text-neutral-800">
                  Pas de script copié-collé. Pas de formation générique.
                  Un accompagnement construit pour vous, et uniquement pour vous.
                </p>
              </div>
            </div>

            {/* Photo */}
            <div className="flex justify-center">
              <Image
                src="/photo-profil.jpg"
                alt="Expert commercial Vantio, 22 ans d'expérience terrain"
                width={320}
                height={400}
                className="rounded-2xl object-cover shadow-medium"
                priority
              />
            </div>
          </div>
        </section>

        {/* Pourquoi les TPE */}
        <section className="mt-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-brand-50 border border-brand-100 p-8 lg:p-12">
            <h2 className="text-2xl font-bold text-neutral-950 mb-4">
              Pourquoi les TPE et les indépendants ?
            </h2>
            <div className="space-y-4 text-neutral-600 leading-relaxed max-w-3xl">
              <p>
                Dans les grands groupes, il y a des équipes, des managers, des scripts validés,
                des outils. Quand ça ne va pas, on peut s'appuyer sur quelqu'un.
              </p>
              <p>
                L'artisan, le consultant, l'auto-entrepreneur, lui, est seul face à son
                téléphone, face à ses prospects, face à ses négociations, face à ses doutes.
                Personne ne lui a appris à prospecter. Personne ne lui a dit comment gérer
                un non, défendre son prix ou relancer sans avoir l'impression de déranger.
              </p>
              <p className="font-medium text-neutral-800">
                C'est exactement là que j'interviens. Pas pour transformer quelqu'un en
                commercial qu'il n'est pas, mais pour lui donner les clés qui correspondent
                à ce qu'il est déjà, sur l'ensemble de sa démarche commerciale.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="mt-20 bg-neutral-50 border-y border-neutral-200 py-16">
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
