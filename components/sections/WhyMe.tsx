import { CheckCircle } from "lucide-react";

const benefits = [
  {
    title: "Expérience terrain",
    description:
      "Toutes les méthodes proposées ont été testées en conditions réelles. Pas de théorie. Pas de recettes miracles.",
  },
  {
    title: "Méthodes concrètes",
    description:
      "Scripts, templates, processus documentés. Vous repartez avec des outils applicables immédiatement.",
  },
  {
    title: "Accompagnement personnalisé",
    description:
      "Pas de programme générique. Chaque accompagnement est construit selon votre situation, votre activité et vos objectifs.",
  },
  {
    title: "Vision pragmatique",
    description:
      "Je ne vous dirai pas ce que vous voulez entendre. Je vous dirai ce qui fonctionne réellement.",
  },
  {
    title: "Résultats mesurables",
    description:
      "On définit ensemble des indicateurs concrets. Vous savez exactement si l'accompagnement fonctionne.",
  },
  {
    title: "Sans pression commerciale",
    description:
      "Pas de contrat long terme imposé. Pas d'upsell agressif. On avance à votre rythme.",
  },
];

export function WhyMe() {
  return (
    <section className="py-20" aria-labelledby="why-me-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start">
          {/* Left */}
          <div>
            <h2
              id="why-me-heading"
              className="text-2xl font-bold text-neutral-950 sm:text-3xl"
            >
              Pourquoi cet accompagnement fonctionne là où les autres ont
              échoué ?
            </h2>
            <p className="mt-4 text-neutral-600 leading-relaxed">
              Beaucoup d'indépendants ont déjà essayé des formations, des livres
              ou des conseils de leur entourage. Sans résultat durable. La raison
              est simple : les méthodes génériques ne s'adaptent pas à votre
              réalité.
            </p>
            <p className="mt-4 text-neutral-600 leading-relaxed">
              Ce qui fait la différence ici, c'est le diagnostic préalable.
              Avant de proposer quoi que ce soit, je comprends précisément votre
              situation — votre activité, vos cibles, vos ressources, vos
              blocages.
            </p>
            <p className="mt-4 font-medium text-neutral-800">
              Pas de solution générique. Pas de promesse irréaliste. Seulement
              des méthodes adaptées à votre contexte réel.
            </p>
          </div>

          {/* Right */}
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2" role="list">
            {benefits.map((benefit) => (
              <li
                key={benefit.title}
                className="flex items-start gap-3 rounded-xl border border-neutral-100 bg-neutral-25 p-5"
              >
                <CheckCircle
                  className="mt-0.5 h-5 w-5 shrink-0 text-brand-500"
                  aria-hidden="true"
                />
                <div>
                  <h3 className="text-sm font-semibold text-neutral-900">
                    {benefit.title}
                  </h3>
                  <p className="mt-1 text-sm text-neutral-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
