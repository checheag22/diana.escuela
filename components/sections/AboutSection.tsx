"use client";

import { about, site } from "@/lib/site-data";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SmartImage } from "@/components/ui/SmartImage";
import { Icon } from "@/lib/icon-map";
import { cn } from "@/lib/utils";

export function AboutSection() {
  return (
    <section
      id="conocenos"
      className="relative scroll-mt-24 overflow-hidden bg-crema py-20 sm:py-28"
    >
      {/* Halo decorativo cálido */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-24 -z-0 size-96 rounded-full bg-durazno-100/60 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 bottom-0 -z-0 size-[28rem] rounded-full bg-salvia-100/50 blur-3xl"
      />

      <div className="container-x relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* ── Columna izquierda · Imagen + badge flotante ── */}
          <Reveal y={32} className="order-1">
            <div className="relative">
              {/* Acento detrás de la foto */}
              <div
                aria-hidden
                className="absolute -inset-3 -z-10 rounded-[2.25rem] bg-gradient-to-br from-arena via-crema-2 to-salvia-100/60"
              />

              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-linea shadow-warm">
                <SmartImage
                  src="/images/real/photo-3.jpg"
                  alt="Perritos rescatados conviviendo en Casa Hogar Goyito"
                  fill
                  fallbackLabel="Casa Hogar Goyito"
                  className="object-cover transition-transform duration-700 ease-out hover:scale-[1.04]"
                  sizes="(max-width:1024px) 90vw, 45vw"
                />
                {/* Velo inferior para legibilidad del badge */}
                <div
                  aria-hidden
                  className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-cafe-900/55 to-transparent"
                />
              </div>

              {/* Badge flotante · Fundadora */}
              <div className="absolute -bottom-5 left-5 right-5 sm:left-6 sm:right-auto sm:max-w-[18rem]">
                <div className="flex items-center gap-3 rounded-2xl border border-linea bg-crema/95 p-3.5 shadow-lift backdrop-blur">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-salvia-100 text-salvia-700">
                    <Icon name="heartHandshake" className="size-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="truncate font-display text-base font-semibold text-cafe-900">
                      {site.founder}
                    </p>
                    <p className="text-xs font-medium uppercase tracking-[0.14em] text-tinta-muted">
                      Fundadora · Rescatista
                    </p>
                  </div>
                </div>
              </div>

              {/* Pastilla flotante superior · A.C. fundado */}
              <Reveal delay={0.25} y={0}>
                <div className="absolute -top-4 right-4 flex animate-float-slow items-center gap-2 rounded-full border border-linea bg-crema/95 px-4 py-2 shadow-soft backdrop-blur">
                  <span className="flex size-2 rounded-full bg-naranja" />
                  <span className="text-xs font-semibold tracking-tight text-cafe-900">
                    A.C. · Fundado {site.foundedLabel}
                  </span>
                </div>
              </Reveal>
            </div>
          </Reveal>

          {/* ── Columna derecha · Texto ── */}
          <div className="order-2 flex flex-col gap-6">
            <SectionHeading
              align="left"
              eyebrow="Conócenos"
              title={
                <>
                  De una pérdida nació{" "}
                  <span className="text-gradient-warm">una promesa.</span>
                </>
              }
            />

            <Reveal delay={0.12}>
              <p className="text-pretty text-base leading-relaxed text-tinta-muted sm:text-lg">
                {about.story}
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <p className="text-pretty text-base leading-relaxed text-tinta-muted sm:text-lg">
                {about.body}
              </p>
            </Reveal>

            {/* Callout de confianza */}
            <Reveal delay={0.24}>
              <div className="flex items-start gap-4 rounded-2xl border border-salvia/25 bg-salvia-100/45 p-5 shadow-soft">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-salvia text-crema shadow-soft">
                  <Icon name="shield" className="size-6" />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-salvia-700">
                    Confianza y legalidad
                  </p>
                  <p className="text-pretty text-[0.95rem] leading-relaxed text-cafe-700">
                    {about.trust}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* ── Objetivos ── */}
        <div className="mt-16 sm:mt-20">
          <Reveal>
            <h3 className="text-balance text-2xl text-tinta sm:text-3xl">
              Lo que nos mueve cada día
            </h3>
          </Reveal>

          <Stagger className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {about.objectives.map((objective) => (
              <StaggerItem key={objective.text}>
                <ObjectiveCard icon={objective.icon} text={objective.text} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}

function ObjectiveCard({
  icon,
  text,
}: {
  icon: (typeof about.objectives)[number]["icon"];
  text: string;
}) {
  return (
    <div
      className={cn(
        "group flex h-full items-start gap-4 rounded-2xl border border-linea bg-crema p-5",
        "shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-warm",
      )}
    >
      <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-durazno-100 text-naranja-600 transition-colors duration-300 group-hover:bg-naranja group-hover:text-crema">
        <Icon name={icon} className="size-6" />
      </div>
      <p className="text-pretty pt-1 text-[0.95rem] leading-relaxed text-cafe-700">
        {text}
      </p>
    </div>
  );
}
