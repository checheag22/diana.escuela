"use client";

import { motion } from "framer-motion";
import { ArrowRight, Quote } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SmartImage } from "@/components/ui/SmartImage";
import { Button } from "@/components/ui/Button";
import { happyStories } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;

type Story = (typeof happyStories)[number];

function StoryRow({ story, index }: { story: Story; index: number }) {
  const flipped = index % 2 === 1;

  return (
    <article
      className={cn(
        "group grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-14",
      )}
    >
      {/* Foto */}
      <Reveal
        y={32}
        className={cn(flipped && "lg:order-2")}
        delay={0.05}
      >
        <div className="relative">
          {/* halo cálido detrás de la foto */}
          <div
            aria-hidden
            className="absolute -inset-3 -z-10 rounded-[2.2rem] bg-gradient-to-br from-durazno-100 via-arena to-salvia-100 opacity-70 blur-xl transition-opacity duration-500 group-hover:opacity-100"
          />
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-linea shadow-soft transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-warm">
            <SmartImage
              src={story.image}
              alt={`${story.name}, hoy en su nuevo hogar`}
              fill
              fallbackLabel={story.name}
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
              sizes="(max-width:1024px) 90vw, 45vw"
            />
            {/* sutil degradado inferior para asentar la etiqueta */}
            <div
              aria-hidden
              className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-cafe-900/45 to-transparent"
            />
            {/* nombre del perrito sobre la foto */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2">
              <span className="inline-flex items-center gap-2 rounded-full bg-crema/90 px-4 py-1.5 text-sm font-semibold text-cafe-900 shadow-soft backdrop-blur">
                <span className="size-1.5 rounded-full bg-naranja" />
                {story.name}
              </span>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Texto */}
      <Reveal
        y={28}
        delay={0.14}
        className={cn(flipped && "lg:order-1")}
      >
        <div className="flex flex-col gap-6">
          {/* Antes / Ahora */}
          <div className="grid gap-3">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 inline-flex shrink-0 items-center rounded-full bg-arena px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-cafe-700">
                Antes
              </span>
              <p className="text-pretty text-[0.95rem] leading-relaxed text-tinta-muted">
                {story.before}
              </p>
            </div>

            <div
              aria-hidden
              className="ml-1 flex items-center gap-2 text-naranja"
            >
              <ArrowRight className="size-4 rotate-90" strokeWidth={2.2} />
            </div>

            <div className="flex items-start gap-3">
              <span className="mt-0.5 inline-flex shrink-0 items-center rounded-full bg-salvia-100 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-salvia-700">
                Ahora
              </span>
              <p className="text-pretty text-[0.95rem] font-medium leading-relaxed text-tinta">
                {story.after}
              </p>
            </div>
          </div>

          {/* Cita */}
          <blockquote className="relative rounded-2xl border border-linea bg-crema-2 p-6 shadow-soft transition-all duration-300 group-hover:shadow-warm sm:p-7">
            <Quote
              aria-hidden
              className="absolute -top-3 left-6 size-7 fill-naranja/15 text-naranja"
              strokeWidth={1.5}
            />
            <p className="text-balance font-display text-lg leading-snug text-cafe-900 sm:text-xl">
              &ldquo;{story.quote}&rdquo;
            </p>
            <footer className="mt-4 flex items-center gap-2 text-sm font-semibold text-tinta-muted">
              <span className="h-px w-6 bg-naranja/50" aria-hidden />
              {story.owner}
            </footer>
          </blockquote>
        </div>
      </Reveal>
    </article>
  );
}

export function StoriesSection() {
  return (
    <section
      id="historias"
      className="scroll-mt-24 bg-crema py-20 sm:py-28"
    >
      <div className="container-x">
        <SectionHeading
          eyebrow="Historias felices"
          title={
            <>
              Finales felices que empezaron en la{" "}
              <span className="text-gradient-warm">calle</span>.
            </>
          }
          description="Cada adopción es una segunda oportunidad que cambia dos vidas. Estas son algunas de las familias que abrieron la puerta y el corazón."
          align="center"
        />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mt-16 flex flex-col gap-16 sm:mt-20 sm:gap-24"
        >
          {happyStories.map((story, index) => (
            <StoryRow key={story.name} story={story} index={index} />
          ))}
        </motion.div>

        {/* Cierre cálido + CTA */}
        <Reveal
          y={24}
          delay={0.1}
          className="mt-16 sm:mt-24"
        >
          <div className="mx-auto flex max-w-2xl flex-col items-center gap-5 text-center">
            <p className="text-pretty text-lg leading-relaxed text-tinta-muted sm:text-xl">
              La próxima historia feliz podría empezar contigo.{" "}
              <span className="font-semibold text-cafe-900">
                Hay un perrito esperando ser tu mejor decisión.
              </span>
            </p>
            <Button href="/adopta" size="lg">
              Conoce a los perritos en adopción
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
