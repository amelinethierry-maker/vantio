import type { Metadata } from "next";
import Image from "next/image";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";
import { MapPin, Users, Sparkles, CheckCircle, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Outil de prospection terrain",
  description:
    "Une application de prospection terrain conçue par un commercial pour des commerciaux : carte des comptes, suivi de visite, fiches clients, aide à la préparation de tournée par IA.",
  alternates: { canonical: "/outil-prospection" },
};

const features = [
  {
    icon: MapPin,
    title: "Une carte de vos comptes prospects et clients",
    description:
      "Chaque compte est un point sur la carte. Sa couleur évolue selon l'ancienneté de la dernière visite : plus c'est foncé, plus ça fait longtemps que vous n'y êtes pas passé. En un coup d'œil, vous voyez qui a été délaissé.",
  },
  {
    icon: Users,
    title: "Une fiche complète pour chaque compte",
    description:
      "Coordonnées, contact, équipement déjà en place chez le client, historique de visite, besoins identifiés. Tout ce qu'un commercial doit savoir avant de sonner à une porte, centralisé au même endroit.",
  },
  {
    icon: Sparkles,
    title: "Une aide à la préparation de tournée par IA",
    description:
      "Un connecteur intégré aide à préparer une tournée terrain : quels comptes prioriser, quoi vérifier avant d'y aller, quels points aborder. Moins de temps à préparer, plus de temps sur le terrain.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Outil de prospection terrain Vantio",
  applicationCategory: "BusinessApplication",
  description:
    "Application de prospection terrain avec carte des comptes, suivi de visite et aide à la préparation de tournée par IA.",
  url: `${siteConfig.url}/outil-prospection`,
};

export default function OutilProspectionPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="pt-24 pb-16">
        {/* Breadcrumb */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-8">
          <Breadcrumb items={[{ label: "Outil de prospection" }]} />
        </div>

        {/* Hero */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl">
              Un outil de prospection terrain, conçu par quelqu'un qui fait le
              terrain.
            </h1>
            <p className="mt-6 text-lg text-neutral-600 leading-relaxed">
              22 ans de vente m'ont appris ce qui manque le plus à un
              commercial en tournée : savoir d'un coup d'œil quels comptes
              n'ont pas été visités depuis trop longtemps, et arriver préparé
              plutôt qu'à l'improvisation. J'ai construit cette application
              pour mes collègues et moi. Elle peut être dupliquée et adaptée à
              votre activité, en BtoB comme en BtoC.
            </p>
            <div className="mt-8">
              <Button href="/contact" size="lg" className="group">
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Discuter de mon besoin
              </Button>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="mt-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title}>
                <feature.icon
                  className="h-8 w-8 text-brand-600"
                  aria-hidden="true"
                />
                <h2 className="mt-4 text-lg font-semibold text-neutral-900">
                  {feature.title}
                </h2>
                <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Screenshots */}
        <section className="mt-20 bg-neutral-50 border-y border-neutral-200 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-neutral-950 mb-2">
              À quoi ça ressemble
            </h2>
            <p className="text-neutral-600 mb-10 max-w-2xl">
              Captures sur un compte de démonstration, données fictives.
            </p>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
              <div>
                <Image
                  src="/expertise-carte.jpg"
                  alt="Carte des comptes prospects avec code couleur selon l'ancienneté de visite"
                  width={400}
                  height={800}
                  className="rounded-2xl border border-neutral-200 shadow-soft object-cover w-full h-auto"
                />
                <p className="mt-3 text-sm text-neutral-600">
                  La carte : chaque point est un compte, sa couleur indique
                  depuis combien de temps il n'a pas été visité.
                </p>
              </div>
              <div>
                <Image
                  src="/expertise-fiche-compte.jpg"
                  alt="Fiche compte détaillée avec équipement en place et suivi commercial"
                  width={400}
                  height={800}
                  className="rounded-2xl border border-neutral-200 shadow-soft object-cover w-full h-auto"
                />
                <p className="mt-3 text-sm text-neutral-600">
                  La fiche compte : coordonnées, équipement déjà en place,
                  historique et suivi commercial.
                </p>
              </div>
              <div>
                <Image
                  src="/expertise-nouveau-contact.jpg"
                  alt="Formulaire d'ajout d'un nouveau compte prospect sur le terrain"
                  width={400}
                  height={800}
                  className="rounded-2xl border border-neutral-200 shadow-soft object-cover w-full h-auto"
                />
                <p className="mt-3 text-sm text-neutral-600">
                  L'ajout d'un compte directement depuis le terrain, en
                  quelques champs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pour qui */}
        <section className="mt-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-brand-50 border border-brand-100 p-8 lg:p-12">
            <h2 className="text-2xl font-bold text-neutral-950 mb-4">
              Pensé pour être adapté à votre activité
            </h2>
            <div className="space-y-4 text-neutral-600 leading-relaxed max-w-3xl">
              <p>
                L'outil est né d'un besoin de terrain précis : couvrir un
                secteur géographique avec plusieurs commerciaux sans perdre le
                fil de qui a été vu, et quand. Mais la structure — carte,
                fiches comptes, suivi de visite — s'adapte à d'autres
                contextes commerciaux, en BtoB comme en BtoC.
              </p>
              <p className="font-medium text-neutral-800">
                Si vous gérez une équipe terrain ou un portefeuille de
                comptes à couvrir régulièrement, on peut regarder ensemble ce
                que ça donnerait pour votre activité.
              </p>
            </div>
            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2" role="list">
              {["Duplicable", "Personnalisable", "BtoB ou BtoC"].map(
                (item) => (
                  <li
                    key={item}
                    className="flex items-center gap-1.5 text-sm text-neutral-700"
                  >
                    <CheckCircle
                      className="h-4 w-4 text-brand-500"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-20 py-16 border-t border-neutral-200">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-neutral-950 sm:text-3xl">
              Une équipe terrain à équiper ?
            </h2>
            <p className="mt-4 text-neutral-600 leading-relaxed">
              Parlons de votre organisation commerciale et de ce que cet
              outil pourrait vous apporter, concrètement.
            </p>
            <div className="mt-8">
              <Button href="/contact" size="lg">
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Me contacter
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
