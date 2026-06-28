import { navigation } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { Linkedin } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-200 bg-white" aria-label="Pied de page">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="font-bold text-lg text-neutral-950">
              {siteConfig.name}
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-neutral-500 max-w-xs">
              {siteConfig.tagline}
            </p>
            <div className="mt-4 flex items-center gap-3">
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-brand-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Pages */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
              Pages
            </h3>
            <ul className="mt-4 space-y-2.5" role="list">
              {navigation.footer.pages.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Legal */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
              Contact
            </h3>
            <ul className="mt-4 space-y-2.5" role="list">
              <li>
                <a
                  href={`mailto:${siteConfig.author.email}`}
                  className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
                >
                  {siteConfig.author.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.author.phone.replace(/\s/g, "")}`}
                  className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
                >
                  {siteConfig.author.phone}
                </a>
              </li>
            </ul>

            <h3 className="mt-6 text-xs font-semibold uppercase tracking-wider text-neutral-400">
              Légal
            </h3>
            <ul className="mt-4 space-y-2.5" role="list">
              {navigation.footer.legal.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-neutral-100 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-400">
            © {year} {siteConfig.name}. Tous droits réservés.
          </p>
          <p className="text-xs text-neutral-400">
            {siteConfig.author.location}
          </p>
        </div>
      </div>
    </footer>
  );
}
