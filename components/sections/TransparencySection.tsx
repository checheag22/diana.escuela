"use client";

import { motion } from "framer-motion";
import { ShieldCheck, FileText } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/lib/icon-map";
import { expenses, impactTiers, site } from "@/lib/site-data";
import { mxn } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;

function DonutChart() {
  const CX = 100;
  const CY = 100;
  const R = 78;
  let acc = 0;

  return (
    <div className="relative mx-auto aspect-square w-full max-w-xs">
      <svg viewBox="0 0 200 200" className="size-full -rotate-0">
        {/* pista */}
        <circle
          cx={CX}
          cy={CY}
          r={R}
          fill="none"
          stroke="var(--color-beige)"
          strokeWidth={26}
        />
        {expenses.items.map((it, i) => {
          const start = -90 + acc * 3.6;
          acc += it.pct;
          return (
            <motion.circle
              key={it.label}
              cx={CX}
              cy={CY}
              r={R}
              fill="none"
              stroke={it.color}
              strokeWidth={26}
              strokeLinecap="butt"
              pathLength={1}
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: it.pct / 100 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 1.1, delay: 0.15 * i, ease: EASE }}
              transform={`rotate(${start} ${CX} ${CY})`}
            />
          );
        })}
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <span className="text-xs uppercase tracking-[0.2em] text-tinta-muted">
          Gasto mensual
        </span>
        <span className="font-display text-3xl font-semibold text-cafe-900">
          {mxn(expenses.total)}
        </span>
        <span className="text-xs text-tinta-muted">aproximado</span>
      </div>
    </div>
  );
}

export function TransparencySection() {
  return (
    <section
      id="transparencia"
      className="scroll-mt-24 bg-crema-2 py-20 sm:py-28"
    >
      <div className="container-x">
        <SectionHeading
          eyebrow="Transparencia"
          title={
            <>
              Tu donativo <span className="text-gradient-warm">sí se ve</span>.
            </>
          }
          description="Sostener el albergue cuesta alrededor de $41,000 al mes. Así se reparte cada peso que nos confías."
        />

        {/* Gráfica + leyenda */}
        <div className="mt-14 grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <DonutChart />
          </Reveal>

          <Reveal delay={0.1}>
            <ul className="flex flex-col gap-4">
              {expenses.items.map((it) => (
                <li
                  key={it.label}
                  className="flex items-center gap-4 rounded-2xl border border-linea bg-crema p-4 shadow-soft"
                >
                  <span
                    className="inline-grid size-11 shrink-0 place-items-center rounded-xl text-crema"
                    style={{ backgroundColor: it.color }}
                  >
                    <Icon name={it.icon} className="size-5" />
                  </span>
                  <div className="flex-1">
                    <div className="flex items-baseline justify-between">
                      <span className="font-medium text-cafe-900">
                        {it.label}
                      </span>
                      <span className="font-display text-lg font-semibold text-cafe-900">
                        {mxn(it.amount)}
                      </span>
                    </div>
                    <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-beige">
                      <motion.span
                        className="block h-full rounded-full"
                        style={{ backgroundColor: it.color }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${it.pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: EASE }}
                      />
                    </div>
                  </div>
                  <span className="w-10 text-right font-display text-lg font-semibold text-tinta-muted">
                    {it.pct}%
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-5 flex items-start gap-2 text-sm text-tinta-muted">
              <FileText className="mt-0.5 size-4 shrink-0 text-salvia-700" />
              El albergue emite facturas electrónicas. El alimento es, por mucho,
              el gasto más grande: 3 bultos cada día.
            </p>
          </Reveal>
        </div>

        {/* Bloque DONA */}
        <div id="dona" className="mt-16 scroll-mt-24">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-cafe-900 via-cafe-700 to-cafe-900 p-8 text-crema shadow-lift sm:p-12">
              <div className="pointer-events-none absolute -right-16 -top-16 size-64 rounded-full bg-naranja/20 blur-3xl" />
              <div className="relative z-10">
                <div className="max-w-xl">
                  <span className="inline-flex items-center gap-2 rounded-full bg-crema/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-durazno">
                    <ShieldCheck className="size-3.5" /> Dona con confianza
                  </span>
                  <h3 className="mt-4 text-balance font-display text-3xl text-crema sm:text-4xl">
                    Convierte tu empatía en hogar, alimento y una segunda
                    oportunidad.
                  </h3>
                </div>

                {/* Tiers de impacto */}
                <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {impactTiers.map((t) => (
                    <div
                      key={t.amount}
                      className={`rounded-2xl border p-5 transition-transform duration-300 hover:-translate-y-1 ${
                        t.highlight
                          ? "border-naranja/40 bg-naranja/15"
                          : "border-crema/12 bg-crema/5"
                      }`}
                    >
                      <span className="inline-grid size-10 place-items-center rounded-xl bg-crema/10 text-durazno">
                        <Icon name={t.icon} className="size-5" />
                      </span>
                      <p className="mt-3 font-display text-2xl font-semibold text-crema">
                        {t.amount}
                      </p>
                      <p className="mt-1 text-sm text-crema/75">{t.text}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button href={site.paypalUrl} external variant="primary" size="lg">
                    Donar con PayPal
                  </Button>
                  <Button
                    href={site.whatsappUrl}
                    external
                    variant="soft"
                    size="lg"
                  >
                    Donar en especie por WhatsApp
                  </Button>
                </div>
                <p className="mt-4 text-xs text-crema/55">
                  Donación de alimento: solo sellado y en su empaque original. Por
                  seguridad pedimos identificación y una foto con el producto.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
