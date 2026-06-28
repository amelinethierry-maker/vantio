import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Conditions Générales d'Utilisation",
  robots: { index: false },
  alternates: { canonical: "/cgu" },
};

export default function CguPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: "CGU" }]} className="mb-8" />

        <h1 className="text-3xl font-bold text-neutral-950 mb-10">
          Conditions Générales d'Utilisation
        </h1>

        <div className="prose-blog space-y-8 text-sm">
          <section>
            <h2>Article 1 — Objet</h2>
            <p>
              Les présentes Conditions Générales d'Utilisation régissent l'accès
              et l'utilisation du site {siteConfig.url} édité par{" "}
              {siteConfig.author.name}.
            </p>
          </section>

          <section>
            <h2>Article 2 — Accès au site</h2>
            <p>
              Le site est accessible gratuitement à tout utilisateur disposant
              d'un accès à internet. Les frais d'accès à internet sont à la
              charge de l'utilisateur. L'éditeur se réserve le droit de modifier,
              suspendre ou interrompre l'accès au site à tout moment.
            </p>
          </section>

          <section>
            <h2>Article 3 — Propriété intellectuelle</h2>
            <p>
              L'ensemble des contenus du site (textes, articles, images,
              graphiques) sont protégés par le droit d'auteur. Toute
              reproduction, même partielle, est strictement interdite sans
              autorisation préalable écrite de {siteConfig.author.name}.
            </p>
          </section>

          <section>
            <h2>Article 4 — Liens hypertextes</h2>
            <p>
              Ce site peut contenir des liens vers des sites tiers.{" "}
              {siteConfig.author.name} n'est pas responsable du contenu de ces
              sites externes.
            </p>
          </section>

          <section>
            <h2>Article 5 — Modification des CGU</h2>
            <p>
              L'éditeur se réserve le droit de modifier les présentes CGU à tout
              moment. Les utilisateurs sont invités à les consulter régulièrement.
            </p>
          </section>

          <section>
            <h2>Article 6 — Droit applicable</h2>
            <p>
              Les présentes CGU sont soumises au droit français. En cas de
              litige, les tribunaux français seront seuls compétents.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
