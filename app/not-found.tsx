import { Button } from "@/components/ui/Button";
import { Home, ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page introuvable — 404",
  robots: { index: false },
};

export default function NotFoundPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <p className="text-sm font-semibold text-brand-600 mb-4">Erreur 404</p>
      <h1 className="text-4xl font-bold text-neutral-950">
        Cette page n'existe pas
      </h1>
      <p className="mt-4 text-neutral-600 max-w-sm">
        La page que vous cherchez a peut-être été déplacée ou supprimée.
      </p>
      <div className="mt-8 flex items-center gap-4">
        <Button href="/" variant="primary">
          <Home className="h-4 w-4" aria-hidden="true" />
          Retour à l'accueil
        </Button>
        <Button href="/blog" variant="ghost">
          Voir le blog
        </Button>
      </div>
    </div>
  );
}
