import type { Metadata } from "next";
import Link from "next/link";
import { GraduationCap, X, Check, Syringe } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { MythsSection } from "@/components/sections/MythsSection";
import {
  educationStats,
  compraVsAdopta,
  sterilization,
  tenencia,
} from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Educación",
  description:
    "Aprende sobre el abandono animal, la adopción responsable, la importancia de la esterilización y la tenencia responsable de un perro rescatado.",
};

export default function EducacionPage() {
  return (
    <>
      {/* Header */}
      <header className="relative overflow-hidden bg-mesh-warm pb-12 pt-32 sm:pt-40">
        <div className="pointer-events-none absolute -right-16 top-10 size-80 rounded-full bg-salvia-100/70 blur-3xl" />
        <div className="container-x relative z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-tinta-muted transition-colors hover:text-cafe-900"
          >
            ← Inicio
          </Link>
          <div className="mt-5 max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-cafe/15 bg-crema/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-cafe shadow-soft">
              <GraduationCap className="size-3.5 text-naranja" /> Educación
            </span>
            <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.02] text-tinta sm:text-6xl">
              Adoptar con{" "}
              <span className="text-gradient-warm">conciencia</span>.
            </h1>
            <p className="mt-5 max-w-xl text-pretty text-lg text-tinta-muted">
              Entender el abandono animal es el primer paso para ayudar. Aquí te
              compartimos por qué adoptar, la importancia de esterilizar y cómo
              ser un tutor responsable.
            </p>
          </div>
        </div>
      </header>

      {/* Abandono en números */}
      <section className="bg-crema py-20 sm:py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="El problema"
            title="El abandono animal en números"
            description="El abandono no es un problema lejano: pasa en nuestras calles todos los días."
          />
          <Stagger className="mt-12 grid gap-4 sm:grid-cols-3">
            {educationStats.map((s) => (
              <StaggerItem key={s.label}>
                <div className="h-full rounded-3xl border border-linea bg-crema-2 p-7 text-center shadow-soft">
                  <p className="font-display text-4xl font-semibold text-cafe-900">
                    {s.value}
                  </p>
                  <p className="mt-2 text-sm text-tinta-muted">{s.label}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Comprar vs Adoptar */}
      <section className="bg-crema-2 py-20 sm:py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="Adopta, no compres"
            title="Comprar vs. adoptar"
            description="Adoptar no es un acto de lástima: es una decisión responsable y consciente."
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-3xl border border-linea bg-crema p-7">
                <h3 className="font-display text-2xl text-tinta-muted">Comprar</h3>
                <ul className="mt-5 flex flex-col gap-3">
                  {compraVsAdopta.comprar.map((c) => (
                    <li key={c} className="flex items-start gap-3 text-sm text-tinta-muted">
                      <span className="mt-0.5 inline-grid size-5 shrink-0 place-items-center rounded-full bg-beige text-cafe-900/50">
                        <X className="size-3.5" />
                      </span>
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="h-full rounded-3xl border border-naranja/25 bg-crema p-7 shadow-warm ring-1 ring-naranja/15">
                <h3 className="font-display text-2xl text-cafe-900">
                  Adoptar <span className="text-naranja">♥</span>
                </h3>
                <ul className="mt-5 flex flex-col gap-3">
                  {compraVsAdopta.adoptar.map((a) => (
                    <li key={a} className="flex items-start gap-3 text-sm text-tinta">
                      <span className="mt-0.5 inline-grid size-5 shrink-0 place-items-center rounded-full bg-salvia text-crema">
                        <Check className="size-3.5" />
                      </span>
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Esterilización */}
      <section className="bg-cafe-900 py-20 text-crema sm:py-24">
        <div className="container-x">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.8fr]">
            <Reveal>
              <span className="inline-grid size-14 place-items-center rounded-2xl bg-crema/10 text-durazno">
                <Syringe className="size-7" />
              </span>
              <h2 className="mt-5 text-balance font-display text-3xl text-crema sm:text-4xl">
                {sterilization.title}
              </h2>
              <p className="mt-4 max-w-xl text-pretty text-lg leading-relaxed text-crema/80">
                {sterilization.body}
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="rounded-[2rem] bg-crema/5 p-8 text-center ring-1 ring-crema/10">
                <p className="font-display text-6xl font-semibold text-durazno">
                  {sterilization.stat}
                </p>
                <p className="mt-2 text-sm text-crema/75">
                  {sterilization.statLabel}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Mitos y realidades (reutilizado) */}
      <MythsSection />

      {/* Tenencia responsable */}
      <section className="bg-crema py-20 sm:py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="Tenencia responsable"
            title="Tener un perro es un compromiso de por vida"
            description="Antes de adoptar, asegúrate de poder ofrecer estos cuidados."
          />
          <Stagger className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {tenencia.map((t) => (
              <StaggerItem key={t}>
                <div className="flex h-full items-start gap-3 rounded-2xl border border-linea bg-crema-2 p-4 text-sm text-tinta">
                  <span className="mt-0.5 inline-grid size-5 shrink-0 place-items-center rounded-full bg-salvia text-crema">
                    <Check className="size-3.5" />
                  </span>
                  {t}
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal className="mt-10 flex justify-center">
            <Button href="/adopta" variant="primary" size="lg">
              Conoce a los perritos en adopción
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
