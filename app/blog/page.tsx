import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ArticleCard } from "@/components/sections/ArticleCard";
import { Badge } from "@/components/ui/Badge";
import { getAllPosts } from "@/lib/blog";
import { blogCategories } from "@/types/blog";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog — Méthodes et conseils commerciaux",
  description:
    "Articles pratiques sur la prospection, l'organisation commerciale, le CRM, LinkedIn et l'intelligence artificielle pour les TPE et auto-entrepreneurs.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage({
  searchParams,
}: {
  searchParams: { categorie?: string };
}) {
  const allPosts = getAllPosts();
  const activeCategory = searchParams.categorie;

  const filtered = activeCategory
    ? allPosts.filter((p) => p.category === activeCategory)
    : allPosts;

  return (
    <div className="pt-24 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: "Blog" }]} className="mb-8" />

        <div className="max-w-2xl mb-10">
          <h1 className="text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl">
            Ressources commerciales
          </h1>
          <p className="mt-4 text-neutral-600 leading-relaxed">
            Des articles pratiques pour vous aider à prospecter, organiser
            votre activité et convertir plus de clients. Pas de théorie — des
            méthodes applicables immédiatement.
          </p>
        </div>

        {/* Categories filter */}
        <nav
          aria-label="Filtrer par catégorie"
          className="mb-10 flex flex-wrap gap-2"
        >
          <Link
            href="/blog"
            className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-colors ${
              !activeCategory
                ? "bg-neutral-950 text-white"
                : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
            }`}
          >
            Tous
          </Link>
          {blogCategories.map((cat) => (
            <Link
              key={cat}
              href={`/blog?categorie=${encodeURIComponent(cat)}`}
              className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                activeCategory === cat
                  ? "bg-brand-600 text-white"
                  : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
              }`}
              aria-current={activeCategory === cat ? "true" : undefined}
            >
              {cat}
            </Link>
          ))}
        </nav>

        {filtered.length === 0 ? (
          <p className="text-neutral-500">
            Aucun article dans cette catégorie pour le moment.
          </p>
        ) : (
          <ul
            className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
            role="list"
          >
            {filtered.map((post) => (
              <li key={post.slug}>
                <ArticleCard post={post} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
