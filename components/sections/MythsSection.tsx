"use client";

import { motion } from "framer-motion";
import { X, CircleCheck, Sparkles } from "lucide-react";
import { myths } from "@/lib/site-data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;

type Myth = { myth: string; reality: string };

function MythCard({ item, index }: { item: Myth; index: number }) {
  // La última tarjeta puede quedar sola en una fila de 2 columnas:
  // si el total es impar, la centramos ocupando el ancho completo.
  const isLastAlone = myths.length % 2 === 1 && index === myths.length - 1;

  return (
    <StaggerItem className={cn("h-full", isLastAlone && "sm:col-span-2 sm:max-w-2xl sm:mx-auto sm:w-full")}>
      <motion.article
        initial="rest"
        animate="rest"
        whileHover="hover"
        whileFocus="hover"
        tabIndex={0}
        aria-label={`Mito: ${item.myth}. Realidad: ${item.reality}`}
        className={cn(
          "group relative flex h-full flex-col overflow-hidden rounded-[2rem]",
          "border border-linea bg-crema shadow-soft",
          "transition-shadow duration-500 hover:shadow-warm",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-salvia/50 focus-visible:ring-offset-2 focus-visible:ring-offset-crema-2",
        )}
      >
        {/* Resplandor salvia que aparece al hover/focus */}
        <motion.span
          aria-hidden
          variants={{ rest: { opacity: 0 }, hover: { opacity: 1 } }}
          transition={{ duration: 0.5, ease: EASE }}
          className="pointer-events-none absolute -right-16 -top-16 size-44 rounded-full bg-salvia/20 blur-3xl"
        />

        {/* — El MITO (tachado, tono apagado) — */}
        <div className="relative flex items-start gap-3 px-6 pt-6 sm:px-7 sm:pt-7">
          <span
            aria-hidden
            className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full bg-cafe/8 text-tinta-muted transition-colors duration-300 group-hover:bg-cafe/12"
          >
            <X className="size-4" strokeWidth={2.2} />
          </span>
          <p className="text-pretty text-[0.95rem] font-medium leading-snug text-tinta-muted line-through decoration-tinta-muted/40 decoration-2">
            <span className="mr-1.5 align-middle text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-tinta-muted/70 no-underline">
              Mito
            </span>
            {item.myth}
          </p>
        </div>

        {/* Separador suave */}
        <div className="mx-6 my-5 h-px bg-linea sm:mx-7" />

        {/* — La REALIDAD (resaltada) — */}
        <div className="relative flex flex-1 items-start gap-3 px-6 pb-6 sm:px-7 sm:pb-7">
          <motion.span
            aria-hidden
            variants={{
              rest: { scale: 1, rotate: 0 },
              hover: { scale: 1.08, rotate: -6 },
            }}
            transition={{ duration: 0.45, ease: EASE }}
            className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full bg-salvia-100 text-salvia-700 shadow-sm transition-colors duration-300 group-hover:bg-salvia/25"
          >
            <CircleCheck className="size-5" strokeWidth={2} />
          </motion.span>
          <p className="text-pretty text-[1.02rem] font-medium leading-relaxed text-tinta">
            <span className="mr-1.5 align-middle text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-naranja-600">
              Realidad
            </span>
            {item.reality}
          </p>
        </div>

        {/* Barra de acento inferior que se llena al hover */}
        <motion.span
          aria-hidden
          variants={{ rest: { scaleX: 0 }, hover: { scaleX: 1 } }}
          transition={{ duration: 0.55, ease: EASE }}
          style={{ transformOrigin: "left" }}
          className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-salvia via-naranja to-durazno"
        />
      </motion.article>
    </StaggerItem>
  );
}

export function MythsSection() {
  return (
    <section
      id="mitos"
      className="scroll-mt-24 bg-crema-2 py-20 sm:py-28"
      aria-labelledby="mitos-titulo"
    >
      <div className="container-x">
        <SectionHeading
          eyebrow="Mitos y realidades"
          title={
            <span id="mitos-titulo">
              Rompamos los mitos sobre los{" "}
              <span className="text-gradient-warm">perros rescatados.</span>
            </span>
          }
          description="Detrás de muchas dudas hay buenas noticias. Aquí separamos lo que se dice de lo que de verdad pasa cuando le abres la puerta a un perrito rescatado."
          align="center"
        />

        <Stagger className="mt-14 grid gap-5 sm:mt-16 sm:grid-cols-2 sm:gap-6">
          {myths.map((item, index) => (
            <MythCard key={item.myth} item={item} index={index} />
          ))}
        </Stagger>

        {/* Cierre cálido y tranquilizador */}
        <div className="mt-12 flex justify-center sm:mt-14">
          <p className="inline-flex items-center gap-2.5 rounded-full border border-linea bg-crema px-5 py-2.5 text-sm font-medium text-tinta-muted shadow-soft">
            <Sparkles className="size-4 shrink-0 text-naranja" strokeWidth={2} />
            Adoptar no es un salto al vacío: te acompañamos en cada paso.
          </p>
        </div>
      </div>
    </section>
  );
}
