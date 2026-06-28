import { ArrowRight } from "lucide-react";

const outcomes = [
  "Une méthode de prospection adaptée à votre activité",
  "Des scripts d'appels et d'emails prêts à l'emploi",
  "Un processus commercial documenté et reproductible",
  "Un système de relance efficace",
  "Un CRM configuré et opérationnel",
  "Des modèles réutilisables pour chaque situation",
  "Une stratégie de prospection LinkedIn",
  "Une meilleure organisation de votre temps commercial",
  "Des routines hebdomadaires pour maintenir votre activité",
  "Une meilleure conversion de vos rendez-vous en clients",
];

export function WhatYouGet() {
  return (
    <section className="py-20 bg-brand-600" aria-labelledby="outcomes-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
          <div>
            <h2
              id="outcomes-heading"
              className="text-2xl font-bold text-white sm:text-3xl"
            >
              Ce que vous allez obtenir
            </h2>
            <p className="mt-4 text-brand-100 leading-relaxed">
              Des outils concrets, des méthodes éprouvées et une organisation
              commerciale qui fonctionne — même quand vous n'avez pas le temps.
            </p>
          </div>

          <ul className="space-y-3" role="list">
            {outcomes.map((outcome) => (
              <li key={outcome} className="flex items-start gap-3">
                <ArrowRight
                  className="mt-0.5 h-4 w-4 shrink-0 text-brand-200"
                  aria-hidden="true"
                />
                <span className="text-sm text-white">{outcome}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
