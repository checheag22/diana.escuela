import type { Metadata } from "next";
import Link from "next/link";
import { Megaphone, Download } from "lucide-react";
import { CampanaShowcase } from "@/components/campana/CampanaShowcase";
import { campaign } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Campaña · De la calle a casa",
  description:
    "Piezas de la campaña de comunicación visual «De la calle a casa» para Casa Hogar Goyito A.C.: cartel, carrusel de Instagram, post de transparencia e infografía.",
};

export default function CampanaPage() {
  return (
    <>
      <header className="relative overflow-hidden bg-cafe-900 pb-16 pt-32 text-crema sm:pt-40">
        <div className="pointer-events-none absolute -left-16 top-10 size-80 rounded-full bg-naranja/25 blur-3xl" />
        <div className="container-x relative z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-crema/70 transition-colors hover:text-durazno"
          >
            ← Inicio
          </Link>
          <div className="mt-5 max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-crema/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-durazno">
              <Megaphone className="size-3.5" /> Campaña gráfica
            </span>
            <h1 className="mt-5 font-display text-5xl font-semibold leading-[1.02] sm:text-7xl">
              {campaign.concept}
            </h1>
            <p className="mt-5 max-w-xl text-pretty text-lg text-crema/80">
              {campaign.mainMessage}
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {campaign.secondary.map((m) => (
                <span
                  key={m}
                  className="rounded-full border border-crema/15 bg-crema/5 px-4 py-2 text-sm text-crema/85"
                >
                  {m}
                </span>
              ))}
            </div>
          </div>
        </div>
      </header>

      <section className="bg-crema py-16 sm:py-24">
        <div className="container-x">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <h2 className="font-display text-3xl text-cafe-900 sm:text-4xl">
              Piezas de la campaña
            </h2>
            <p className="mt-3 text-tinta-muted">
              Diseñadas para redes sociales e impresos, manteniendo la misma
              identidad cálida y confiable del sitio.
            </p>
          </div>

          <CampanaShowcase />

          <div className="mx-auto mt-16 flex max-w-xl items-start gap-3 rounded-2xl border border-linea bg-crema-2 p-5 text-sm text-tinta-muted">
            <Download className="mt-0.5 size-5 shrink-0 text-salvia-700" />
            <p>
              Cada pieza está construida a su proporción real (3:4, 1:1, 4:5).
              Puedes capturarlas o exportarlas a PNG para imprimir o publicar en
              redes sociales.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
