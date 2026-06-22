"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { PawPrint, ArrowRight, Heart, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SmartImage } from "@/components/ui/SmartImage";
import { hero, impactStats } from "@/lib/site-data";

const EASE = [0.16, 1, 0.3, 1] as const;

const lineParent: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};
const lineChild: Variants = {
  hidden: { y: "110%" },
  show: { y: 0, transition: { duration: 0.9, ease: EASE } },
};

const marqueeItems = [
  "Adoptar",
  "Donar",
  "Esterilizar",
  "Compartir",
  "Ser voluntario",
  "Rescatar",
];

const pawTrail = [
  { x: "8%", y: "30%", r: -18, d: 0.2 },
  { x: "14%", y: "44%", r: 12, d: 0.35 },
  { x: "10%", y: "60%", r: -8, d: 0.5 },
  { x: "18%", y: "72%", r: 18, d: 0.65 },
  { x: "12%", y: "86%", r: -14, d: 0.8 },
];

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const textY = useTransform(scrollYProgress, [0, 1], [0, 70]);
  const fade = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  const [reducedMotion, setReducedMotion] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100svh] items-center overflow-hidden"
    >
      {/* Video de fondo a sangre completa */}
      <div className="absolute inset-0">
        {reducedMotion ? (
          <SmartImage
            src="/images/site/cta.jpg"
            alt="Perrito rescatado en la calle de León"
            fill
            priority
            fallbackLabel="De la calle a casa"
            className="object-cover object-[center_45%]"
            sizes="100vw"
          />
        ) : (
          <video
            className="size-full scale-[1.08] object-cover object-[center_45%]"
            autoPlay
            muted
            loop
            playsInline
            poster="/images/site/cta.jpg"
            aria-hidden
          >
            <source src="/video/hero-loop.mp4" type="video/mp4" />
          </video>
        )}

        {/* Scrims para legibilidad del texto */}
        <div className="absolute inset-0 bg-gradient-to-r from-cafe-900/92 via-cafe-900/55 to-cafe-900/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-cafe-900/90 via-transparent to-cafe-900/45" />
        <div className="absolute inset-0 bg-naranja/10 mix-blend-soft-light" />
      </div>

      {/* Rastro de huellas */}
      <div className="pointer-events-none absolute inset-0 hidden lg:block">
        {pawTrail.map((p, i) => (
          <motion.div
            key={i}
            className="absolute text-crema/12"
            style={{ left: p.x, top: p.y, rotate: `${p.r}deg` }}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 + p.d, duration: 0.5, ease: EASE }}
          >
            <PawPrint className="size-7" fill="currentColor" strokeWidth={0} />
          </motion.div>
        ))}
      </div>

      {/* Contenido */}
      <motion.div
        style={{ y: textY, opacity: fade }}
        className="container-x relative z-10 pb-28 pt-28 sm:pt-32"
      >
        <div className="max-w-2xl">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="inline-flex items-center gap-2 rounded-full border border-crema/20 bg-crema/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-crema shadow-soft backdrop-blur"
          >
            <Sparkles className="size-3.5 text-durazno" />
            {hero.kicker}
          </motion.span>

          <h1 className="mt-6 font-display text-[3.4rem] font-semibold leading-[0.95] text-crema sm:text-7xl lg:text-[5.4rem]">
            <motion.span
              variants={lineParent}
              initial="hidden"
              animate="show"
              className="block"
            >
              {hero.titleLines.map((line, i) => (
                <span key={i} className="block overflow-hidden pb-1">
                  <motion.span
                    variants={lineChild}
                    className={
                      i === hero.titleLines.length - 1
                        ? "block text-gradient-sun"
                        : "block"
                    }
                  >
                    {line}
                  </motion.span>
                </span>
              ))}
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7, ease: EASE }}
            className="mt-6 max-w-md text-pretty text-lg leading-relaxed text-crema/85"
          >
            {hero.lead}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.7, ease: EASE }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <Button href={hero.primaryCta.href} variant="primary" size="lg">
              {hero.primaryCta.label}
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
            <Button href={hero.secondaryCta.href} variant="light" size="lg">
              <Heart className="size-4" fill="currentColor" />
              {hero.secondaryCta.label}
            </Button>
          </motion.div>

          {/* Mini-stats de confianza */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="mt-10 flex flex-wrap gap-x-8 gap-y-4"
          >
            {impactStats.slice(0, 3).map((s) => (
              <div key={s.label} className="flex flex-col">
                <span className="font-display text-2xl font-semibold text-crema">
                  {s.value.toLocaleString("es-MX")}
                  {s.suffix ?? ""}
                </span>
                <span className="text-xs uppercase tracking-wide text-crema/65">
                  {s.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Chips flotantes sobre el video */}
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 hidden w-1/2 lg:block">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6, ease: EASE }}
          className="absolute right-10 top-36 flex items-center gap-3 rounded-2xl bg-crema/90 px-4 py-3 shadow-warm backdrop-blur"
        >
          <span className="inline-grid size-10 place-items-center rounded-xl bg-naranja/15 text-naranja">
            <PawPrint className="size-5" />
          </span>
          <div className="leading-tight">
            <p className="font-display text-xl font-semibold text-cafe-900">
              +550
            </p>
            <p className="text-[0.7rem] uppercase tracking-wide text-tinta-muted">
              rescates
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.15, duration: 0.6, ease: EASE }}
          className="absolute bottom-16 right-8 flex items-center gap-3 rounded-2xl border border-crema/15 bg-cafe-900/90 px-4 py-3 text-crema shadow-lift backdrop-blur"
        >
          <span className="inline-grid size-10 place-items-center rounded-xl bg-durazno/25 text-durazno">
            <Heart className="size-5" fill="currentColor" />
          </span>
          <div className="leading-tight">
            <p className="font-display text-xl font-semibold">350</p>
            <p className="text-[0.7rem] uppercase tracking-wide text-crema/70">
              adopciones
            </p>
          </div>
        </motion.div>
      </div>

      {/* Indicador de scroll */}
      <motion.div
        style={{ opacity: fade }}
        className="absolute bottom-20 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-crema/70 lg:flex"
      >
        <span className="text-[0.65rem] uppercase tracking-[0.25em]">Desliza</span>
        <span className="flex h-9 w-5 items-start justify-center rounded-full border border-crema/30 p-1">
          <motion.span
            className="size-1.5 rounded-full bg-durazno"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
      </motion.div>

      {/* Marquee inferior */}
      <div className="absolute inset-x-0 bottom-0 z-10 border-t border-crema/10 bg-cafe-900/40 py-3 backdrop-blur">
        <div className="flex w-max animate-marquee items-center gap-6 whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="flex items-center gap-6">
              <span className="font-display text-lg font-medium text-crema/75">
                {item}
              </span>
              <PawPrint
                className="size-4 text-durazno/70"
                fill="currentColor"
                strokeWidth={0}
              />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
