import Link from "next/link";
import { Heart, MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { FacebookIcon, InstagramIcon, TikTokIcon } from "@/components/ui/SocialIcons";
import { navLinks, site } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden bg-cafe-900 text-crema">
      {/* CTA superior */}
      <div className="container-x relative z-10 -mb-px">
        <div className="relative -translate-y-1/2 overflow-hidden rounded-[2rem] bg-gradient-to-br from-naranja to-naranja-600 px-7 py-10 shadow-lift sm:px-12 sm:py-12">
          <div className="relative z-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div className="max-w-xl">
              <h3 className="text-balance font-display text-2xl text-crema sm:text-3xl">
                Cada historia de hogar empieza con una decisión.
              </h3>
              <p className="mt-2 text-crema/85">
                Adopta, dona o comparte. Tú decides cómo cambiar una vida hoy.
              </p>
            </div>
            <div className="flex flex-shrink-0 flex-col gap-3 sm:flex-row">
              <Button href="/adopta" variant="dark" size="lg">
                Adoptar
              </Button>
              <Button href={site.paypalUrl} external variant="soft" size="lg">
                <Heart className="size-4" fill="currentColor" /> Donar
              </Button>
            </div>
          </div>
          <div className="pointer-events-none absolute -right-10 -top-10 size-48 rounded-full bg-crema/10 blur-2xl" />
        </div>
      </div>

      <div className="container-x grid gap-12 pb-12 pt-8 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <Logo tone="light" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-crema/70">
            {site.tagline}
          </p>
          <div className="mt-5 flex gap-2.5">
            <a href={site.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="inline-grid size-10 place-items-center rounded-xl bg-crema/10 text-crema transition-colors hover:bg-naranja">
              <FacebookIcon className="size-[18px]" />
            </a>
            <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="inline-grid size-10 place-items-center rounded-xl bg-crema/10 text-crema transition-colors hover:bg-naranja">
              <InstagramIcon className="size-[18px]" />
            </a>
            <a href={site.social.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="inline-grid size-10 place-items-center rounded-xl bg-crema/10 text-crema transition-colors hover:bg-naranja">
              <TikTokIcon className="size-[18px]" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-display text-base text-crema">Explora</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-crema/70 transition-colors hover:text-durazno">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-base text-crema">Cómo ayudar</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link href="/adopta" className="text-crema/70 transition-colors hover:text-durazno">Adoptar</Link></li>
            <li><a href={site.paypalUrl} target="_blank" rel="noopener noreferrer" className="text-crema/70 transition-colors hover:text-durazno">Donar con PayPal</a></li>
            <li><Link href="/#voluntariado" className="text-crema/70 transition-colors hover:text-durazno">Voluntariado</Link></li>
            <li><Link href="/#transparencia" className="text-crema/70 transition-colors hover:text-durazno">Transparencia</Link></li>
            <li><Link href="/campana" className="text-crema/70 transition-colors hover:text-durazno">Campaña</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-base text-crema">Contacto</h4>
          <ul className="mt-4 space-y-3 text-sm text-crema/70">
            <li className="flex items-center gap-3">
              <Phone className="size-4 text-durazno" />
              <a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-durazno">
                {site.phone} · WhatsApp
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="size-4 text-durazno" />
              <a href={`mailto:${site.email}`} className="hover:text-durazno">{site.email}</a>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="size-4 text-durazno" />
              {site.city}
            </li>
            <li>
              <a href={site.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-durazno hover:underline">
                casahogargoyito.org <ArrowUpRight className="size-3.5" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-crema/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-center text-xs text-crema/55 sm:flex-row sm:text-left">
          <p>© {new Date().getFullYear()} {site.legalName} · Fundado el {site.foundedLabel}.</p>
          <p>
            Sitio de la campaña «De la calle a casa» · Proyecto de comunicación visual,
            Universidad Iberoamericana León.
          </p>
        </div>
      </div>
    </footer>
  );
}
