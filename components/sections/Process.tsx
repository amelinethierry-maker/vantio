const steps = [
  {
    number: "01",
    title: "Audit",
    description:
      "On commence par comprendre précisément votre situation commerciale actuelle. Vos forces, vos blocages, vos priorités.",
  },
  {
    number: "02",
    title: "Identification des blocages",
    description:
      "On identifie ensemble les vrais freins à votre développement commercial. Souvent différents de ce qu'on imagine.",
  },
  {
    number: "03",
    title: "Plan d'action",
    description:
      "On construit un plan d'action réaliste, priorisé et adapté à vos ressources. Pas un plan idéal sur le papier.",
  },
  {
    number: "04",
    title: "Mise en place des méthodes",
    description:
      "On implémente les méthodes, les outils et les scripts. Étape par étape, sans brûler les étapes.",
  },
  {
    number: "05",
    title: "Suivi",
    description:
      "On suit les résultats ensemble et on ajuste. Ce qui ne fonctionne pas est modifié. Ce qui marche est amplifié.",
  },
];

export function Process() {
  return (
    <section
      className="py-20 bg-neutral-950 text-white"
      aria-labelledby="process-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-xl mx-auto text-center mb-16">
          <h2
            id="process-heading"
            className="text-2xl font-bold sm:text-3xl"
          >
            Comment se déroule un accompagnement ?
          </h2>
          <p className="mt-4 text-neutral-400">
            Un processus clair. Pas de surprise. Vous savez à chaque étape où
            vous en êtes.
          </p>
        </div>

        {/* Steps */}
        <ol className="relative" role="list">
          {/* Ligne verticale */}
          <div
            className="absolute left-6 top-0 h-full w-px bg-neutral-800 sm:left-1/2"
            aria-hidden="true"
          />

          <div className="space-y-10">
            {steps.map((step, index) => (
              <li
                key={step.number}
                className={`relative flex items-start gap-6 sm:items-center ${
                  index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-neutral-700 bg-neutral-900 text-brand-400 font-mono text-xs font-bold">
                  {step.number}
                </div>

                {/* Content */}
                <div
                  className={`max-w-sm ${
                    index % 2 !== 0 ? "sm:text-right" : ""
                  }`}
                >
                  <h3 className="font-semibold text-white">{step.title}</h3>
                  <p className="mt-1.5 text-sm text-neutral-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </div>
        </ol>
      </div>
    </section>
  );
}
