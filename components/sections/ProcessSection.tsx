"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/lib/icon-map";
import { cn } from "@/lib/utils";
import {
  rescueTimeline,
  adoptionSteps,
  adoptionRequisitos,
} from "@/lib/site-data";

/* — PARTE A: nodo de la línea del tiempo de rescate — */
function TimelineNode({
  item,
  index,
  total,
}: {
  item: (typeof rescueTimeline)[number];
  index: number;
  total: number;
}) {
  const isLast = index === total - 1;

  return (
    <Reveal
      delay={index * 0.1}
      className="relative flex gap-5 lg:block lg:gap-0"
    >
      {/* Conector vertical (móvil) */}
      {!isLast && (
        <span
          aria-hidden
          className="absolute left-[27px] top-14 bottom-0 w-px bg-gradient-to-b from-naranja/40 to-linea lg:hidden"
        />
      )}

      {/* Nodo: número + icono */}
      <div className="relative z-10 flex shrink-0 flex-col items-center lg:items-start">
        <div className="group relative grid size-14 place-items-center rounded-2xl bg-crema shadow-soft ring-1 ring-linea transition-all duration-300 hover:-translate-y-1 hover:shadow-warm lg:size-16">
          <Icon
            name={item.icon}
            className="size-6 text-naranja transition-colors group-hover:text-naranja-600 lg:size-7"
          />
          <span className="absolute -right-2 -top-2 grid size-6 place-items-center rounded-full bg-cafe-900 font-display text-[0.65rem] font-semibold text-crema shadow-soft">
            {item.step}
          </span>
        </div>
      </div>

      {/* Texto */}
      <div className="pt-1 lg:mt-6 lg:pt-0">
        <h3 className="text-lg font-semibold text-tinta lg:text-xl">
          {item.title}
        </h3>
        <p className="mt-1.5 text-pretty text-sm leading-relaxed text-tinta-muted">
          {item.desc}
        </p>
      </div>
    </Reveal>
  );
}

export function ProcessSection() {
  return (
    <section
      id="proceso"
      className="scroll-mt-24 bg-crema py-20 sm:py-28"
    >
      <div className="container-x">
        {/* ===== PARTE A: Línea del tiempo del rescate ===== */}
        <SectionHeading
          eyebrow="El camino"
          title="De la calle a casa"
          description="Cada rescate sigue un camino de cuidado, paciencia y confianza. Así acompañamos a cada perrito hasta encontrar su hogar."
          align="center"
        />

        <div className="relative mt-14 sm:mt-16">
          {/* Línea conectora horizontal (desktop) */}
          <span
            aria-hidden
            className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-linea via-naranja/40 to-linea lg:block"
          />

          <ol className="grid gap-8 sm:gap-10 lg:grid-cols-6 lg:gap-6">
            {rescueTimeline.map((item, index) => (
              <li key={item.step} className="relative">
                <TimelineNode
                  item={item}
                  index={index}
                  total={rescueTimeline.length}
                />
              </li>
            ))}
          </ol>
        </div>

        {/* ===== PARTE B: Proceso de adopción ===== */}
        <div className="mt-24 sm:mt-32">
          <SectionHeading
            eyebrow="Adopción responsable"
            title="Proceso de adopción"
            description="Un proceso sencillo y transparente, pensado para que cada perrito llegue a un hogar seguro y para siempre."
            align="center"
          />

          <div className="mt-14 grid gap-10 lg:grid-cols-5 lg:gap-12">
            {/* Pasos numerados */}
            <Stagger className="grid gap-4 sm:grid-cols-2 lg:col-span-3 lg:gap-5">
              {adoptionSteps.map((item) => (
                <StaggerItem key={item.step}>
                  <article
                    className={cn(
                      "group flex h-full items-start gap-4 rounded-2xl border border-linea bg-crema-2 p-5",
                      "shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-warm",
                    )}
                  >
                    <div className="relative grid size-12 shrink-0 place-items-center rounded-xl bg-salvia-100 text-salvia-700 transition-colors group-hover:bg-salvia/25">
                      <Icon name={item.icon} className="size-5" />
                      <span className="absolute -right-1.5 -top-1.5 grid size-5 place-items-center rounded-full bg-naranja font-display text-[0.6rem] font-bold text-crema">
                        {item.step}
                      </span>
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-tinta">
                        {item.title}
                      </h4>
                      <p className="mt-1 text-pretty text-sm leading-relaxed text-tinta-muted">
                        {item.desc}
                      </p>
                    </div>
                  </article>
                </StaggerItem>
              ))}
            </Stagger>

            {/* Checklist de requisitos */}
            <Reveal delay={0.1} className="lg:col-span-2">
              <div className="flex h-full flex-col rounded-[2rem] border border-linea bg-cafe-900 p-7 shadow-lift sm:p-8">
                <span className="inline-flex w-fit items-center gap-2 rounded-full bg-crema/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-crema/90">
                  <span className="size-1.5 rounded-full bg-naranja" />
                  Requisitos
                </span>
                <h3 className="mt-4 text-2xl text-crema">
                  Lo que pedimos a una familia
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-crema/70">
                  Cada requisito existe para proteger al perrito y asegurar
                  que su nuevo hogar sea para siempre.
                </p>

                <ul className="mt-6 flex flex-col gap-3">
                  {adoptionRequisitos.map((req) => (
                    <li key={req} className="flex items-start gap-3">
                      <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-salvia/25 text-salvia-100">
                        <Check className="size-3.5" strokeWidth={2.5} />
                      </span>
                      <span className="text-pretty text-sm leading-relaxed text-crema/85">
                        {req}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-2">
                  <Button
                    href="/adopta"
                    variant="primary"
                    size="lg"
                    className="w-full"
                  >
                    Conoce a los perritos en adopción
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
