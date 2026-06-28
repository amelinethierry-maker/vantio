import { Button } from "@/components/ui/Button";
import { Calendar, CheckCircle } from "lucide-react";

interface CTAProps {
  title?: string;
  description?: string;
  variant?: "default" | "light";
}

export function CTA({
  title = "Prêt à structurer votre démarche commerciale ?",
  description = "Prenez 45 minutes. Je vous donne un diagnostic honnête de votre situation et des recommandations concrètes. Gratuit. Sans engagement.",
  variant = "default",
}: CTAProps) {
  const isLight = variant === "light";

  return (
    <section
      className={`py-20 ${isLight ? "bg-neutral-25 border-t border-neutral-200" : "bg-white border-t border-neutral-100"}`}
      aria-labelledby="cta-heading"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <h2
          id="cta-heading"
          className="text-2xl font-bold text-neutral-950 sm:text-3xl"
        >
          {title}
        </h2>
        <p className="mt-4 text-neutral-600 leading-relaxed">{description}</p>

        <div className="mt-8">
          <Button href="/audit-gratuit" size="lg" className="group">
            <Calendar className="h-4 w-4" aria-hidden="true" />
            Réserver mon audit gratuit
          </Button>
        </div>

        <ul
          className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2"
          role="list"
        >
          {[
            "Gratuit",
            "Sans engagement",
            "En visioconférence",
            "Réponse sous 24h",
          ].map((item) => (
            <li key={item} className="flex items-center gap-1.5 text-xs text-neutral-500">
              <CheckCircle className="h-3.5 w-3.5 text-brand-500" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
