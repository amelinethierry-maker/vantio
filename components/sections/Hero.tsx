import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";
import { ArrowRight, Calendar } from "lucide-react";

export function Hero() {
  return (
    <section
      className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Background subtil */}
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-50/60 via-white to-white"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {/* Surtitre */}
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-brand-50 px-4 py-1.5 text-xs font-medium text-brand-700 mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-500" aria-hidden="true" />
            Accompagnement commercial pour TPE, artisans et auto-entrepreneurs
          </div>

          {/* Titre principal */}
          <h1
            id="hero-heading"
            className="text-4xl font-bold tracking-tight text-neutral-950 sm:text-5xl lg:text-6xl"
          >
            Prospection, négociation, vente, relance.{" "}
            <span className="text-brand-600">Reprenez le plaisir de vendre.</span>
          </h1>

          {/* Accroche */}
          <p className="mt-6 text-lg leading-relaxed text-neutral-600 max-w-2xl mx-auto">
            Que vous soyez artisan, consultant ou auto-entrepreneur, la partie
            commerciale de votre métier reste l'une de vos nombreuses
            casquettes — rarement la plus aimée. Je vous accompagne sur
            l'ensemble de votre démarche commerciale pour qu'elle devienne
            enfin naturelle.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              href="/audit-gratuit"
              size="lg"
              className="group"
            >
              <Calendar className="h-4 w-4" aria-hidden="true" />
              Réserver mon audit gratuit
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Button>
            <Button href="/prestations" variant="ghost" size="lg">
              Voir les prestations
            </Button>
          </div>

          {/* Réassurance */}
          <p className="mt-6 text-xs text-neutral-400">
            Audit gratuit · Sans engagement · En visioconférence
          </p>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-3 max-w-2xl mx-auto">
          {[
            { value: "100%", label: "des méthodes testées sur le terrain" },
            { value: "0 €", label: "pour le premier audit commercial" },
            { value: "48h", label: "pour obtenir un premier rendez-vous" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold text-neutral-950">
                {stat.value}
              </div>
              <div className="mt-1 text-xs text-neutral-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
