"use client";

import { Button } from "@/components/ui/Button";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/lib/icon-map";
import { cn } from "@/lib/utils";
import { donationMethods, needs } from "@/lib/site-data";

type DonationMethod = (typeof donationMethods)[number];
type Need = (typeof needs)[number];

function DonationCard({
  method,
  highlight,
}: {
  method: DonationMethod;
  highlight: boolean;
}) {
  return (
    <div
      className={cn(
        "group relative flex h-full flex-col rounded-[2rem] border p-7 transition-all duration-300 sm:p-8",
        "hover:-translate-y-1.5",
        highlight
          ? "border-naranja/30 bg-crema shadow-warm ring-1 ring-naranja/20 hover:shadow-glow lg:-translate-y-3 lg:scale-[1.03] lg:hover:-translate-y-4"
          : "border-linea bg-crema shadow-soft hover:shadow-warm",
      )}
    >
      {highlight && (
        <span className="absolute -top-3 left-7 inline-flex items-center gap-1.5 rounded-full bg-naranja px-3.5 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-crema shadow-warm">
          <span className="size-1.5 rounded-full bg-crema animate-pulse-soft" />
          Más directo
        </span>
      )}

      <div
        className={cn(
          "flex size-14 items-center justify-center rounded-2xl transition-colors duration-300",
          highlight
            ? "bg-naranja/12 text-naranja group-hover:bg-naranja/18"
            : "bg-salvia-100 text-salvia-700 group-hover:bg-salvia/25",
        )}
      >
        <Icon name={method.icon} className="size-7" />
      </div>

      <h3 className="mt-5 text-xl text-tinta sm:text-2xl">{method.title}</h3>
      <p className="mt-2.5 text-pretty text-[0.95rem] leading-relaxed text-tinta-muted">
        {method.desc}
      </p>

      <div className="mt-6 pt-1">
        <Button
          href={method.href}
          external={method.external}
          variant={highlight ? "primary" : "secondary"}
          size="md"
          className="w-full sm:w-auto"
        >
          {method.cta}
        </Button>
      </div>
    </div>
  );
}

function NeedTile({ need }: { need: Need }) {
  return (
    <div className="group flex items-center gap-3 rounded-2xl border border-linea bg-crema px-4 py-3.5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-naranja/30 hover:shadow-warm">
      <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-durazno-100 text-naranja-600 transition-colors duration-300 group-hover:bg-naranja group-hover:text-crema">
        <Icon name={need.icon} className="size-[1.1rem]" />
      </span>
      <span className="text-sm font-medium leading-snug text-cafe-900 text-balance">
        {need.label}
      </span>
    </div>
  );
}

export function HelpSection() {
  return (
    <section id="ayuda" className="scroll-mt-24 bg-arena py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Cómo ayudar"
          title={
            <>
              No todos pueden adoptar,{" "}
              <span className="text-gradient-warm">pero todos pueden ayudar.</span>
            </>
          }
          description="Cada gesto se convierte en alimento, medicina y una segunda oportunidad. Elige la forma que mejor va contigo."
          align="center"
          tone="dark"
        />

        <Stagger className="mt-14 grid gap-6 sm:mt-16 md:grid-cols-3 md:items-stretch">
          {donationMethods.map((method, i) => (
            <StaggerItem key={method.title} className="h-full">
              <DonationCard method={method} highlight={i === 0} />
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal className="mt-16 sm:mt-20" delay={0.05}>
          <div className="rounded-[2rem] border border-linea bg-crema-2 p-7 shadow-soft sm:p-10">
            <div className="flex flex-col gap-2 text-center sm:text-left">
              <span className="inline-flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-cafe sm:justify-start">
                <span className="size-1.5 rounded-full bg-naranja" />
                Lista de deseos
              </span>
              <h3 className="text-2xl text-tinta sm:text-[1.75rem]">
                Lo que más necesitamos
              </h3>
              <p className="mx-auto max-w-xl text-pretty text-[0.95rem] leading-relaxed text-tinta-muted sm:mx-0">
                Todo suma. Si puedes aportar cualquiera de estas cosas, nos
                ayudas a seguir rescatando.
              </p>
            </div>

            <Stagger className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {needs.map((need) => (
                <StaggerItem key={need.label}>
                  <NeedTile need={need} />
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
