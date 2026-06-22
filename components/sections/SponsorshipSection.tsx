import { HeartHandshake, Check, Star } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { sponsorship, site } from "@/lib/site-data";

export function SponsorshipSection() {
  const waText = encodeURIComponent(
    "¡Hola! Quiero ser Padrino/Madrina Goyito 🐾 ¿Me cuentan cómo apadrinar a un perrito cada mes?",
  );

  return (
    <section id="apadrina" className="scroll-mt-24 bg-salvia-100/50 py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow={sponsorship.name}
          title={
            <>
              Apadrina a un perrito y{" "}
              <span className="text-gradient-warm">cambia su vida cada mes</span>.
            </>
          }
          description={sponsorship.intro}
        />

        {/* Niveles */}
        <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {sponsorship.tiers.map((t) => (
            <StaggerItem key={t.label}>
              <div
                className={`relative flex h-full flex-col rounded-3xl border p-6 transition-all duration-300 hover:-translate-y-1.5 ${
                  t.highlight
                    ? "border-naranja/30 bg-crema shadow-warm ring-1 ring-naranja/20"
                    : "border-linea bg-crema shadow-soft hover:shadow-warm"
                }`}
              >
                {t.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-naranja px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-wide text-crema shadow-warm">
                    Más elegido
                  </span>
                )}
                <span className="inline-grid size-11 place-items-center rounded-2xl bg-naranja/12 text-naranja">
                  <Star className="size-5" fill="currentColor" strokeWidth={0} />
                </span>
                <p className="mt-4 font-display text-3xl font-semibold text-cafe-900">
                  ${t.amount.toLocaleString("es-MX")}
                  <span className="text-base font-normal text-tinta-muted">/mes</span>
                </p>
                <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-salvia-700">
                  {t.label}
                </p>
                <p className="mt-2 text-sm text-tinta-muted">{t.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Beneficios + CTA */}
        <Reveal className="mt-8">
          <div className="grid items-center gap-8 rounded-[2rem] border border-linea bg-crema p-8 shadow-soft lg:grid-cols-[1.2fr_1fr] lg:p-10">
            <div>
              <h3 className="flex items-center gap-2 font-display text-2xl text-cafe-900">
                <HeartHandshake className="size-6 text-naranja" />
                Beneficios de ser padrino o madrina
              </h3>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {sponsorship.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm text-tinta">
                    <span className="mt-0.5 inline-grid size-5 shrink-0 place-items-center rounded-full bg-salvia text-crema">
                      <Check className="size-3.5" />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-3 rounded-2xl bg-crema-2 p-6 text-center">
              <p className="text-sm text-tinta-muted">
                Tu apoyo mensual da estabilidad al albergue.
              </p>
              <Button
                href={`${site.whatsappUrl}?text=${waText}`}
                external
                variant="primary"
                size="lg"
              >
                Quiero ser padrino/madrina
              </Button>
              <Button href={site.paypalUrl} external variant="secondary" size="sm">
                O haz un donativo único con PayPal
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
