"use client";

import { Button } from "@/components/ui/Button";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SmartImage } from "@/components/ui/SmartImage";
import { Icon } from "@/lib/icon-map";
import { volunteerActivities, site } from "@/lib/site-data";

export function VolunteerSection() {
  return (
    <section
      id="voluntariado"
      className="relative scroll-mt-24 overflow-hidden bg-cafe-900 py-20 text-crema sm:py-28"
    >
      {/* Resplandor cálido de fondo, sutil y decorativo */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-12 size-80 rounded-full bg-naranja/20 blur-3xl animate-blob"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-28 right-0 size-96 rounded-full bg-salvia/15 blur-3xl animate-float-slow"
      />

      <div className="container-x relative">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* IZQUIERDA — Texto */}
          <div>
            <SectionHeading
              align="left"
              tone="light"
              eyebrow="Voluntariado"
              title="Regala tu tiempo, cambia una historia."
              description="No necesitas experiencia: solo ganas de ayudar. Una tarde a la semana ya transforma el día de un perrito que espera su hogar."
            />

            <Reveal delay={0.24} className="mt-8">
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <Button
                  href={site.whatsappUrl}
                  external
                  variant="primary"
                  size="lg"
                >
                  Quiero ser voluntario
                </Button>
                <Button
                  href={site.social.facebook}
                  external
                  variant="ghost"
                  size="lg"
                  className="text-crema hover:bg-crema/10"
                >
                  <Icon name="megaphone" className="size-5" />
                  Síguenos en Facebook
                </Button>
              </div>
            </Reveal>
          </div>

          {/* DERECHA — Imagen */}
          <Reveal y={32} delay={0.1}>
            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-crema/15 shadow-lift">
                <SmartImage
                  src="/images/site/voluntariado.jpg"
                  alt="Voluntarios conviviendo y paseando a los perritos de Casa Hogar Goyito"
                  fill
                  fallbackLabel="Casa Hogar Goyito"
                  className="object-cover transition-transform duration-700 ease-out hover:scale-[1.04]"
                  sizes="(max-width:1024px) 90vw, 45vw"
                />
                {/* Velo cálido para integrar la imagen con el fondo oscuro */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-cafe-900/45 via-transparent to-transparent"
                />
              </div>

              {/* Tarjeta flotante de confianza */}
              <div className="absolute -bottom-5 left-5 right-5 hidden rounded-2xl border border-crema/15 bg-crema/10 p-4 backdrop-blur-md sm:left-auto sm:right-6 sm:flex sm:max-w-[16rem]">
                <p className="flex items-center gap-3 text-sm leading-snug text-crema/90">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-naranja/90 text-crema">
                    <Icon name="handHeart" className="size-5" />
                  </span>
                  <span>
                    Más de{" "}
                    <strong className="font-display font-semibold text-crema">
                      15 voluntarios
                    </strong>{" "}
                    ya forman parte de la manada.
                  </span>
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* GRID — Actividades de voluntariado */}
        <Reveal className="mt-16 sm:mt-20" delay={0.1}>
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.18em] text-crema/60">
            Así puedes ayudar
          </p>
        </Reveal>

        <Stagger className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {volunteerActivities.map((activity) => (
            <StaggerItem key={activity.title}>
              <div className="group flex h-full items-center gap-4 rounded-2xl border border-crema/15 bg-crema/10 p-5 transition duration-300 hover:-translate-y-1 hover:border-crema/30 hover:bg-crema/15 hover:shadow-warm">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-naranja/15 text-naranja transition-colors duration-300 group-hover:bg-naranja group-hover:text-crema">
                  <Icon name={activity.icon} className="size-6" />
                </span>
                <h3 className="text-lg font-semibold text-crema">
                  {activity.title}
                </h3>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
