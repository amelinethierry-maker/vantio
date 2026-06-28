import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";
import { Mail, Phone, Video, Linkedin, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez-moi par email, téléphone ou LinkedIn. Ou réservez directement votre audit commercial gratuit.",
  alternates: { canonical: "/contact" },
};

const contactMethods = [
  {
    icon: Calendar,
    label: "Réserver l'audit gratuit",
    value: "En ligne, directement",
    href: "/audit-gratuit",
    description: "La façon la plus rapide de démarrer.",
    primary: true,
  },
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.author.email,
    href: `mailto:${siteConfig.author.email}`,
    description: "Réponse sous 24h.",
  },
  {
    icon: Phone,
    label: "Téléphone",
    value: siteConfig.author.phone,
    href: `tel:${siteConfig.author.phone.replace(/\s/g, "")}`,
    description: "Du lundi au vendredi, 9h-18h.",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Mon profil LinkedIn",
    href: siteConfig.social.linkedin,
    description: "Pour échanger avant de planifier.",
  },
];

export default function ContactPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: "Contact" }]} className="mb-8" />

        <h1 className="text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl mb-4">
          Entrons en contact
        </h1>
        <p className="text-lg text-neutral-600 mb-12">
          Choisissez le moyen qui vous convient le mieux. Je réponds
          personnellement à tous les messages.
        </p>

        <ul className="space-y-4" role="list">
          {contactMethods.map(({ icon: Icon, label, value, href, description, primary }) => (
            <li key={label}>
              <a
                href={href}
                {...(href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className={`flex items-start gap-5 rounded-xl border p-5 transition-all duration-150 hover:shadow-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 ${
                  primary
                    ? "border-brand-200 bg-brand-50 hover:border-brand-300"
                    : "border-neutral-200 bg-white hover:border-neutral-300"
                }`}
              >
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${
                    primary ? "bg-brand-100" : "bg-neutral-100"
                  }`}
                >
                  <Icon
                    className={`h-5 w-5 ${primary ? "text-brand-600" : "text-neutral-600"}`}
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <div className="text-xs font-medium uppercase tracking-wider text-neutral-400">
                    {label}
                  </div>
                  <div
                    className={`mt-0.5 font-semibold ${primary ? "text-brand-700" : "text-neutral-900"}`}
                  >
                    {value}
                  </div>
                  <div className="mt-0.5 text-sm text-neutral-500">
                    {description}
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-10 rounded-xl border border-neutral-100 bg-neutral-25 p-5 text-sm text-neutral-600">
          <p>
            <strong className="text-neutral-900">Délai de réponse :</strong>{" "}
            Je réponds à toutes les demandes dans les 24h ouvrées. Si vous avez
            une urgence, le téléphone reste le moyen le plus rapide.
          </p>
        </div>
      </div>
    </div>
  );
}
