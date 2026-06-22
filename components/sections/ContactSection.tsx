"use client";

import { useState, type SVGProps } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronDown,
  Globe,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";
import { faq, site } from "@/lib/site-data";

const EASE = [0.16, 1, 0.3, 1] as const;

type ContactRow = {
  icon: typeof MessageCircle;
  label: string;
  value: string;
  hint: string;
  href: string;
  external?: boolean;
};

const contactRows: ContactRow[] = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: site.phone,
    hint: "La forma más rápida de contactarnos",
    href: site.whatsappUrl,
    external: true,
  },
  {
    icon: Mail,
    label: "Correo",
    value: site.email,
    hint: "Para facturas y temas formales",
    href: `mailto:${site.email}`,
    external: true,
  },
  {
    icon: MapPin,
    label: "Ubicación",
    value: site.city,
    hint: "Coordinamos visitas y entregas",
    href: site.whatsappUrl,
    external: true,
  },
  {
    icon: Globe,
    label: "Sitio web",
    value: site.website.replace(/^https?:\/\//, ""),
    hint: "Conoce más sobre el albergue",
    href: site.website,
    external: true,
  },
];

/* — Marcas de redes como SVG inline (lucide ya no incluye logos de marca) — */
function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.9 3.78-3.9 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.78-1.63 1.57v1.87h2.78l-.44 2.91h-2.34V22c4.78-.79 8.43-4.94 8.43-9.94Z" />
    </svg>
  );
}

function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function TikTokIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M16.6 5.82a4.28 4.28 0 0 1-1.05-2.82h-3.2v12.6a2.6 2.6 0 1 1-1.84-2.49V9.83a5.79 5.79 0 1 0 5.04 5.74V9.3a7.5 7.5 0 0 0 4.37 1.4V7.5a4.28 4.28 0 0 1-3.32-1.68Z" />
    </svg>
  );
}

type SocialLink = {
  icon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
  label: string;
  href: string;
};

const socialLinks: SocialLink[] = [
  { icon: FacebookIcon, label: "Facebook", href: site.social.facebook },
  { icon: InstagramIcon, label: "Instagram", href: site.social.instagram },
  { icon: TikTokIcon, label: "TikTok", href: site.social.tiktok },
];

function ContactDetailRow({ row, index }: { row: ContactRow; index: number }) {
  const RowIcon = row.icon;
  return (
    <StaggerItem>
      <a
        href={row.href}
        target={row.external ? "_blank" : undefined}
        rel={row.external ? "noopener noreferrer" : undefined}
        className="group flex items-center gap-4 rounded-2xl border border-linea bg-crema p-4 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-naranja/30 hover:shadow-warm sm:p-5"
      >
        <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-durazno-100 text-naranja-600 transition-colors duration-300 group-hover:bg-naranja group-hover:text-crema">
          <RowIcon className="size-5" strokeWidth={1.8} />
        </span>
        <span className="min-w-0 flex-1">
          <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-tinta-muted">
            {row.label}
          </span>
          <span className="block truncate text-base font-semibold text-cafe-900">
            {row.value}
          </span>
          <span className="mt-0.5 block truncate text-sm text-tinta-muted">
            {row.hint}
          </span>
        </span>
        <ChevronDown
          className="size-5 shrink-0 -rotate-90 text-tinta-muted/60 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-naranja"
          aria-hidden="true"
        />
      </a>
    </StaggerItem>
  );
}

function FaqItem({
  item,
  isOpen,
  onToggle,
  id,
}: {
  item: { q: string; a: string };
  isOpen: boolean;
  onToggle: () => void;
  id: string;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border bg-crema transition-colors duration-300",
        isOpen
          ? "border-naranja/40 shadow-warm"
          : "border-linea shadow-soft hover:border-cafe/25",
      )}
    >
      <h3>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={`${id}-panel`}
          id={`${id}-button`}
          className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition-colors duration-200 sm:px-6"
        >
          <span className="text-base font-semibold text-cafe-900 sm:text-lg">
            {item.q}
          </span>
          <span
            className={cn(
              "grid size-9 shrink-0 place-items-center rounded-full transition-colors duration-300",
              isOpen
                ? "bg-naranja text-crema"
                : "bg-cafe/8 text-cafe group-hover:bg-cafe/12",
            )}
          >
            <motion.span
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.35, ease: EASE }}
              className="grid place-items-center"
            >
              <ChevronDown className="size-5" strokeWidth={2} aria-hidden="true" />
            </motion.span>
          </span>
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`${id}-panel`}
            role="region"
            aria-labelledby={`${id}-button`}
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="overflow-hidden"
          >
            <p className="px-5 pb-6 text-pretty text-[0.95rem] leading-relaxed text-tinta-muted sm:px-6">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function ContactSection() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section
      id="contacto"
      className="scroll-mt-24 bg-crema py-20 sm:py-28"
    >
      <div className="container-x">
        <div className="grid items-start gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* ── Columna izquierda: datos de contacto ── */}
          <div>
            <SectionHeading
              align="left"
              eyebrow="Contacto"
              title={
                <>
                  ¿Listo para ayudar?{" "}
                  <span className="text-gradient-warm">Hablemos.</span>
                </>
              }
              description="Escríbenos por WhatsApp y te respondemos a la brevedad. Estamos para resolver tus dudas sobre adopciones, donativos o voluntariado."
            />

            <Stagger className="mt-10 flex flex-col gap-3">
              {contactRows.map((row, i) => (
                <ContactDetailRow key={row.label} row={row} index={i} />
              ))}
            </Stagger>

            {/* Redes sociales */}
            <Reveal delay={0.1} className="mt-8">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-tinta-muted">
                Síguenos
              </p>
              <div className="flex flex-wrap items-center gap-3">
                {socialLinks.map(({ icon: SocialIcon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Síguenos en ${label}`}
                    className="group grid size-12 place-items-center rounded-full border border-linea bg-crema text-cafe shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-naranja/40 hover:bg-naranja hover:text-crema hover:shadow-warm"
                  >
                    <SocialIcon
                      className="size-5 transition-transform duration-300 group-hover:scale-110"
                      strokeWidth={1.8}
                    />
                  </a>
                ))}
              </div>
            </Reveal>

            {/* Nota de dirección */}
            <Reveal delay={0.16} className="mt-8">
              <div className="flex items-start gap-3 rounded-2xl border border-linea bg-crema-2 p-5">
                <span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-full bg-salvia-100 text-salvia-700">
                  <MapPin className="size-4" strokeWidth={2} aria-hidden="true" />
                </span>
                <p className="text-sm leading-relaxed text-tinta-muted">
                  Por seguridad de los perritos, la dirección exacta la
                  coordinamos contigo directamente por WhatsApp al agendar tu
                  visita o entrega.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.22} className="mt-8">
              <Button
                href={site.whatsappUrl}
                external
                size="lg"
                className="w-full sm:w-auto"
              >
                <MessageCircle className="size-5" strokeWidth={2} aria-hidden="true" />
                Escríbenos por WhatsApp
              </Button>
            </Reveal>
          </div>

          {/* ── Columna derecha: FAQ acordeón ── */}
          <Reveal y={32} className="lg:sticky lg:top-28">
            <div className="rounded-[2rem] border border-linea bg-crema-2 p-6 shadow-soft sm:p-8">
              <div className="mb-6 flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-2xl bg-cafe-900 text-crema">
                  <MessageCircle className="size-5" strokeWidth={1.8} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-xl text-tinta sm:text-2xl">
                    Preguntas frecuentes
                  </h3>
                  <p className="text-sm text-tinta-muted">
                    Resolvemos las dudas más comunes
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                {faq.map((item, i) => (
                  <FaqItem
                    key={item.q}
                    id={`faq-${i}`}
                    item={item}
                    isOpen={openIndex === i}
                    onToggle={() =>
                      setOpenIndex((prev) => (prev === i ? -1 : i))
                    }
                  />
                ))}
              </div>

              <div className="mt-6 rounded-2xl bg-crema p-5 text-center">
                <p className="text-sm text-tinta-muted">
                  ¿Tu duda no está aquí?
                </p>
                <Button
                  href={site.whatsappUrl}
                  external
                  variant="soft"
                  size="sm"
                  className="mt-3"
                >
                  Pregúntanos por WhatsApp
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
