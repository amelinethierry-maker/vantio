import type { Metadata } from "next";
import { services } from "@/config/services";
import { getAllPosts } from "@/lib/blog";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Plan du site",
  description: "Plan du site complet.",
  alternates: { canonical: "/plan-du-site" },
};

export default function SitemapPage() {
  const posts = getAllPosts();

  const sections = [
    {
      title: "Pages principales",
      links: [
        { href: "/", label: "Accueil" },
        { href: "/a-propos", label: "À propos" },
        { href: "/audit-gratuit", label: "Audit Commercial Gratuit" },
        { href: "/faq", label: "FAQ" },
        { href: "/contact", label: "Contact" },
      ],
    },
    {
      title: "Prestations",
      links: [
        { href: "/prestations", label: "Toutes les prestations" },
        ...services.map((s) => ({
          href: `/prestations/${s.slug}`,
          label: s.title,
        })),
      ],
    },
    {
      title: "Blog",
      links: [
        { href: "/blog", label: "Tous les articles" },
        ...posts.map((p) => ({ href: `/blog/${p.slug}`, label: p.title })),
      ],
    },
    {
      title: "Légal",
      links: [
        { href: "/mentions-legales", label: "Mentions légales" },
        {
          href: "/politique-confidentialite",
          label: "Politique de confidentialité",
        },
        { href: "/cgu", label: "CGU" },
      ],
    },
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: "Plan du site" }]} className="mb-8" />

        <h1 className="text-3xl font-bold text-neutral-950 mb-10">
          Plan du site
        </h1>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-4">
                {section.title}
              </h2>
              <ul className="space-y-2" role="list">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-neutral-700 hover:text-brand-600 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
