import type { Metadata } from "next";
import Link from "next/link";
import { Check, PawPrint, ArrowRight } from "lucide-react";
import { AdoptaGallery } from "@/components/adopta/AdoptaGallery";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/lib/icon-map";
import { adoptionRequisitos, adoptionSteps, site } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Adopta",
  description:
    "Conoce a los perritos rescatados de Casa Hogar Goyito que buscan una familia responsable en León, Guanajuato. Adopta, no compres.",
};

export default function AdoptaPage() {
  return (
    <>
      {/* Header */}
      <header className="relative overflow-hidden bg-mesh-warm pb-12 pt-32 sm:pt-40">
        <div className="pointer-events-none absolute -right-16 top-10 size-80 rounded-full bg-durazno/25 blur-3xl" />
        <div className="container-x relative z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-tinta-muted transition-colors hover:text-cafe-900"
          >
            ← Inicio
          </Link>
          <div className="mt-5 max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-cafe/15 bg-crema/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-cafe shadow-soft">
              <PawPrint className="size-3.5 text-naranja" /> En adopción
            </span>
            <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.02] text-tinta sm:text-6xl">
              Encuentra a tu nuevo{" "}
              <span className="text-gradient-warm">mejor amigo</span>.
            </h1>
            <p className="mt-5 max-w-xl text-pretty text-lg text-tinta-muted">
              Cada uno de estos perritos fue rescatado de la calle. Vienen
              esterilizados, con vacunas y muchas ganas de querer. Adoptar no es
              lástima: es una decisión responsable y consciente.
            </p>
          </div>
        </div>
      </header>

      {/* Galería */}
      <section className="bg-crema py-12 sm:py-16">
        <div className="container-x">
          <AdoptaGallery />
          <p className="mt-6 text-center text-xs text-tinta-muted">
            Las fichas son ejemplos demostrativos. Para conocer a los perritos
            disponibles hoy, escríbenos por WhatsApp.
          </p>
        </div>
      </section>

      {/* Proceso + requisitos */}
      <section className="bg-crema-2 py-20 sm:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Proceso de adopción"
            title="Adoptar es sencillo (y pensado para cuidarlos)."
            description="Estos pasos existen para proteger a cada perrito y asegurar que no vuelva a ser abandonado."
          />

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {adoptionSteps.map((s, i) => (
              <Reveal key={s.step} delay={i * 0.05}>
                <div className="flex h-full gap-4 rounded-3xl border border-linea bg-crema p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-warm">
                  <span className="inline-grid size-12 shrink-0 place-items-center rounded-2xl bg-naranja/12 font-display text-xl font-semibold text-naranja">
                    {s.step}
                  </span>
                  <div>
                    <h3 className="flex items-center gap-2 font-display text-lg text-cafe-900">
                      <Icon name={s.icon} className="size-4 text-salvia-700" />
                      {s.title}
                    </h3>
                    <p className="mt-1 text-sm text-tinta-muted">{s.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Requisitos */}
          <div className="mt-10 grid gap-8 rounded-[2rem] border border-linea bg-crema p-8 shadow-soft lg:grid-cols-[1fr_1.2fr] lg:p-10">
            <div>
              <h3 className="font-display text-2xl text-cafe-900">
                Requisitos para adoptar
              </h3>
              <p className="mt-2 text-sm text-tinta-muted">
                Buscamos hogares responsables y de por vida.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <Button href={site.whatsappUrl} external variant="primary" size="lg">
                  Iniciar adopción por WhatsApp
                  <ArrowRight className="size-4" />
                </Button>
              </div>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {adoptionRequisitos.map((r) => (
                <li
                  key={r}
                  className="flex items-start gap-3 rounded-2xl bg-crema-2 p-4 text-sm text-tinta"
                >
                  <span className="mt-0.5 inline-grid size-5 shrink-0 place-items-center rounded-full bg-salvia text-crema">
                    <Check className="size-3.5" />
                  </span>
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
