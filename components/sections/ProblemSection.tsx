"use client";

import { problem } from "@/lib/site-data";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SmartImage } from "@/components/ui/SmartImage";
import { cn } from "@/lib/utils";

type Point = (typeof problem.points)[number];

export function ProblemSection() {
  return (
    <section
      id="problema"
      className="scroll-mt-24 relative overflow-hidden bg-cafe-900 text-crema py-20 sm:py-28"
    >
      {/* Glow ambiental sutil */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute -top-24 -left-24 size-[28rem] rounded-full bg-naranja/15 blur-3xl animate-blob" />
        <div className="absolute bottom-0 right-0 size-[24rem] rounded-full bg-durazno/10 blur-3xl animate-float-slow" />
      </div>

      <div className="container-x relative">
        <SectionHeading
          align="center"
          tone="light"
          eyebrow="El problema"
          title="El abandono no es un problema lejano."
          description="Pasa en nuestras calles, todos los días. Conocer la magnitud no es para sentir culpa, es para entender por qué cada rescate cuenta."
        />

        {/* Gran estadística + imagen */}
        <div className="mt-14 grid items-center gap-10 lg:mt-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <Reveal y={32}>
            <div className="text-center lg:text-left">
              <p className="font-display text-7xl font-bold leading-none text-gradient-warm sm:text-8xl md:text-[8.5rem]">
                <AnimatedCounter value={200000} />
              </p>
              <p className="mt-2 font-display text-2xl font-semibold tracking-wide text-durazno sm:text-3xl">
                perros
              </p>
              <p className="mx-auto mt-4 max-w-md text-pretty text-base leading-relaxed text-crema/75 lg:mx-0 sm:text-lg">
                {problem.bigStatLabel}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.12} y={32}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-crema/10 shadow-lift">
              <SmartImage
                src="/images/site/problema.jpg"
                alt="Perrito en situación de calle en León, Guanajuato"
                fill
                fallbackLabel="Casa Hogar Goyito"
                className="object-cover"
                sizes="(max-width:1024px) 90vw, 42vw"
              />
              {/* Velo oscuro para legibilidad y tono digno */}
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-cafe-900/85 via-cafe-900/25 to-transparent"
              />
            </div>
          </Reveal>
        </div>

        {/* Tres bloques de contexto */}
        <Stagger className="mt-16 grid gap-5 sm:grid-cols-3 sm:gap-6">
          {problem.points.map((point: Point) => (
            <StaggerItem key={point.stat}>
              <article className="group h-full rounded-3xl border border-crema/12 bg-crema/[0.06] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-crema/25 hover:bg-crema/[0.1] sm:p-7">
                <p className="font-display text-2xl font-semibold text-durazno sm:text-[1.7rem]">
                  {point.stat}
                </p>
                <p className="mt-3 text-pretty text-sm leading-relaxed text-crema/75 sm:text-base">
                  {point.text}
                </p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Causas como pills */}
        <Reveal delay={0.1} className="mt-16">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-crema/55">
              Las causas más comunes del abandono
            </p>
            <ul className="mt-5 flex flex-wrap items-center justify-center gap-2.5">
              {problem.causes.map((cause: string) => (
                <li
                  key={cause}
                  className={cn(
                    "rounded-full border border-crema/15 bg-crema/10 px-4 py-2",
                    "text-sm text-crema/80 transition-colors duration-200 hover:border-crema/30 hover:text-crema",
                  )}
                >
                  {cause}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* Cierre esperanzador */}
        <Reveal delay={0.15} className="mt-16">
          <p className="mx-auto max-w-2xl text-balance text-center font-display text-2xl font-medium leading-snug text-crema sm:text-3xl">
            Pero cada historia{" "}
            <span className="text-gradient-warm font-semibold">
              puede cambiar.
            </span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
