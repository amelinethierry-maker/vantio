import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: "Politique de confidentialité et protection des données personnelles.",
  robots: { index: false },
  alternates: { canonical: "/politique-confidentialite" },
};

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="pt-24 pb-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Breadcrumb
          items={[{ label: "Politique de confidentialité" }]}
          className="mb-8"
        />

        <h1 className="text-3xl font-bold text-neutral-950 mb-10">
          Politique de confidentialité
        </h1>

        <div className="prose-blog space-y-8 text-sm">
          <section>
            <h2>Responsable du traitement</h2>
            <p>
              {siteConfig.author.name} — {siteConfig.author.email}
            </p>
          </section>

          <section>
            <h2>Données collectées</h2>
            <p>
              Les données collectées via les formulaires de ce site sont les
              suivantes : nom, prénom, email, téléphone, nom de l'entreprise et
              informations relatives à votre activité commerciale. Ces données
              sont collectées dans le but de répondre à vos demandes d'audit et
              de contact.
            </p>
          </section>

          <section>
            <h2>Base légale du traitement</h2>
            <p>
              Le traitement de vos données est fondé sur votre consentement,
              exprimé lors de la soumission des formulaires de ce site.
            </p>
          </section>

          <section>
            <h2>Durée de conservation</h2>
            <p>
              Vos données sont conservées pendant 3 ans à compter du dernier
              contact, sauf obligation légale de conservation plus longue.
            </p>
          </section>

          <section>
            <h2>Destinataires des données</h2>
            <p>
              Vos données ne sont pas transmises à des tiers à des fins
              commerciales. Elles peuvent être partagées avec des prestataires
              techniques nécessaires au fonctionnement du site (hébergement,
              envoi d'emails) dans le strict cadre de l'exécution de ces
              services.
            </p>
          </section>

          <section>
            <h2>Vos droits</h2>
            <p>
              Conformément au RGPD, vous disposez des droits suivants :
            </p>
            <ul>
              <li>Droit d'accès à vos données</li>
              <li>Droit de rectification</li>
              <li>Droit à l'effacement (droit à l'oubli)</li>
              <li>Droit à la portabilité</li>
              <li>Droit d'opposition au traitement</li>
            </ul>
            <p>
              Pour exercer ces droits, contactez-nous à :{" "}
              {siteConfig.author.email}
            </p>
          </section>

          <section>
            <h2>Cookies</h2>
            <p>
              Ce site utilise des cookies analytiques pour mesurer l'audience
              (Google Analytics). Vous pouvez refuser ces cookies via les
              paramètres de votre navigateur.
            </p>
          </section>

          <section>
            <h2>Réclamation</h2>
            <p>
              Vous avez le droit d'introduire une réclamation auprès de la CNIL
              (Commission Nationale de l'Informatique et des Libertés) si vous
              estimez que le traitement de vos données n'est pas conforme à la
              réglementation.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
