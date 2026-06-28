import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

const problems = [
  {
    text: "Je ne trouve pas de nouveaux clients.",
    href: "/prestations/prospection-commerciale",
  },
  {
    text: "Je ne sais jamais quoi dire au téléphone.",
    href: "/prestations/prospection-telephonique",
  },
  {
    text: "Je prospecte sans résultat.",
    href: "/prestations/prospection-commerciale",
  },
  {
    text: "Je manque d'organisation.",
    href: "/prestations/organisation-commerciale",
  },
  {
    text: "Je travaille au feeling.",
    href: "/prestations/processus-commerciaux",
  },
  {
    text: "Je n'ai pas de méthode.",
    href: "/prestations/prospection-commerciale",
  },
  {
    text: "Je n'utilise pas de CRM.",
    href: "/prestations/mise-en-place-crm",
  },
  {
    text: "Je n'arrive pas à relancer mes prospects.",
    href: "/prestations/scripts-commerciaux",
  },
  {
    text: "Je perds des opportunités.",
    href: "/prestations/organisation-commerciale",
  },
];

export function ProblemCards() {
  return (
    <section
      className="py-20 bg-neutral-25"
      aria-labelledby="problems-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-xl mx-auto text-center mb-12">
          <h2
            id="problems-heading"
            className="text-2xl font-bold text-neutral-950 sm:text-3xl"
          >
            Est-ce que vous vous reconnaissez ?
          </h2>
          <p className="mt-4 text-neutral-600">
            Ces difficultés sont très courantes chez les indépendants et les
            dirigeants de TPE. Vous n'êtes pas seul.
          </p>
        </div>

        {/* Cards */}
        <ul
          className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3"
          role="list"
        >
          {problems.map((problem) => (
            <li key={problem.text}>
              <Link
                href={problem.href}
                className="group block rounded-xl border border-neutral-200 bg-white p-5 transition-all duration-150 hover:border-brand-200 hover:shadow-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
              >
                <div className="flex items-start gap-3">
                  <span
                    className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-50 text-red-500"
                    aria-hidden="true"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-current" />
                  </span>
                  <p className="text-sm font-medium text-neutral-800 group-hover:text-brand-700 transition-colors">
                    {problem.text}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-12 text-center">
          <Button href="/audit-gratuit" variant="secondary">
            Je veux une solution — Réserver l'audit gratuit
          </Button>
        </div>
      </div>
    </section>
  );
}
