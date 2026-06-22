"use client";

import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { Icon } from "@/lib/icon-map";
import { impactStats, secondaryStats } from "@/lib/site-data";

export function ImpactSection() {
  return (
    <section id="impacto" className="scroll-mt-24 bg-crema py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Nuestro impacto"
          title={
            <>
              Cada número es <span className="text-gradient-warm">una vida</span>{" "}
              que cambió.
            </>
          }
          description="Desde 2021, el trabajo del albergue se mide en rescates, esterilizaciones y segundas oportunidades reales."
        />

        {/* Contadores principales */}
        <Stagger className="mt-14 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
          {impactStats.map((s) => (
            <StaggerItem key={s.label}>
              <div className="group h-full rounded-3xl border border-linea bg-crema-2/60 p-6 text-center shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-warm sm:p-8">
                <span className="mx-auto mb-4 inline-grid size-14 place-items-center rounded-2xl bg-naranja/12 text-naranja transition-transform duration-300 group-hover:scale-110">
                  <Icon name={s.icon} className="size-7" />
                </span>
                <div className="font-display text-4xl font-semibold text-cafe-900 sm:text-5xl">
                  <AnimatedCounter value={s.value} suffix={s.suffix ?? ""} />
                </div>
                <p className="mt-2 text-sm font-medium text-tinta-muted">
                  {s.label}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Banda secundaria oscura */}
        <Reveal className="mt-6">
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl bg-linea shadow-warm lg:grid-cols-4">
            {secondaryStats.map((s) => (
              <div
                key={s.unit}
                className="flex items-center gap-4 bg-cafe-900 px-6 py-7 text-crema"
              >
                <span className="inline-grid size-11 shrink-0 place-items-center rounded-xl bg-crema/10 text-durazno">
                  <Icon name={s.icon} className="size-5" />
                </span>
                <div className="leading-tight">
                  <p className="font-display text-2xl font-semibold">{s.value}</p>
                  <p className="text-xs text-crema/65">{s.unit}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
