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

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

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
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-mesh-warm pb-16 pt-28 sm:pt-32"
    >
      {/* Blobs de fondo */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-24 top-10 size-[28rem] rounded-full bg-durazno/30 blur-3xl animate-float-slow" />
        <div className="absolute -right-20 top-1/3 size-[24rem] rounded-full bg-salvia-100/70 blur-3xl animate-float" />
        <div className="absolute bottom-0 left-1/3 size-[20rem] rounded-full bg-naranja/15 blur-3xl animate-pulse-soft" />
      </div>

      {/* Rastro de huellas decorativo */}
      <div className="pointer-events-none absolute inset-0 hidden lg:block">
        {[
          { x: "6%", y: "78%", r: -18, d: 0.2 },
          { x: "13%", y: "66%", r: 12, d: 0.35 },
          { x: "20%", y: "74%", r: -8, d: 0.5 },
          { x: "27%", y: "60%", r: 18, d: 0.65 },
          { x: "35%", y: "68%", r: -14, d: 0.8 },
        ].map((p, i) => (
          <motion.div
            key={i}
            className="absolute text-cafe/15"
            style={{ left: p.x, top: p.y, rotate: `${p.r}deg` }}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 + p.d, duration: 0.5, ease: EASE }}
          >
            <PawPrint className="size-7" fill="currentColor" strokeWidth={0} />
          </motion.div>
        ))}
      </div>

      <div className="container-x relative z-10 grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Columna de texto */}
        <motion.div style={{ y: textY }} className="max-w-xl">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="inline-flex items-center gap-2 rounded-full border border-cafe/15 bg-crema/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-cafe shadow-soft backdrop-blur"
          >
            <Sparkles className="size-3.5 text-naranja" />
            {hero.kicker}
          </motion.span>

          <h1 className="mt-6 font-display text-[3.4rem] font-semibold leading-[0.95] text-tinta sm:text-7xl lg:text-[5.2rem]">
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
                        ? "block text-gradient-warm"
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
            className="mt-6 max-w-md text-pretty text-lg leading-relaxed text-tinta-muted"
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
            <Button href={hero.secondaryCta.href} variant="secondary" size="lg">
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
                <span className="font-display text-2xl font-semibold text-cafe-900">
                  {s.value.toLocaleString("es-MX")}
                  {s.suffix ?? ""}
                </span>
                <span className="text-xs uppercase tracking-wide text-tinta-muted">
                  {s.label}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Columna visual */}
        <motion.div
          style={{ y: imgY }}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 1, ease: EASE }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="relative aspect-[4/5] w-full animate-blob overflow-hidden rounded-[2.5rem] shadow-lift">
            {reducedMotion ? (
              <SmartImage
                src="/images/site/cta.jpg"
                alt="Perrito rescatado feliz con su nueva familia"
                fill
                priority
                fallbackLabel="De la calle a casa"
                className="object-cover object-[center_58%]"
                sizes="(max-width: 1024px) 90vw, 45vw"
              />
            ) : (
              <video
                className="absolute inset-0 size-full object-cover object-[center_58%]"
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
            <div className="absolute inset-0 bg-gradient-to-t from-cafe-900/60 via-cafe-900/10 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-tr from-naranja/20 via-transparent to-salvia-700/15 mix-blend-soft-light" />
            <div className="absolute inset-0 rounded-[2.5rem] ring-1 ring-inset ring-cafe-900/10" />
          </div>

          {/* Chip flotante: rescates */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6, ease: EASE }}
            className="absolute -left-3 top-8 flex items-center gap-3 rounded-2xl bg-crema/90 px-4 py-3 shadow-warm backdrop-blur sm:-left-6"
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

          {/* Chip flotante: adopciones */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.15, duration: 0.6, ease: EASE }}
            className="absolute -right-2 bottom-12 flex items-center gap-3 rounded-2xl bg-cafe-900/95 px-4 py-3 text-crema shadow-lift sm:-right-5"
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
        </motion.div>
      </div>

      {/* Indicador de scroll */}
      <motion.div
        style={{ opacity: fade }}
        className="absolute bottom-24 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-tinta-muted lg:flex"
      >
        <span className="text-[0.65rem] uppercase tracking-[0.25em]">Desliza</span>
        <span className="flex h-9 w-5 items-start justify-center rounded-full border border-cafe/25 p-1">
          <motion.span
            className="size-1.5 rounded-full bg-naranja"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
      </motion.div>

      {/* Marquee inferior */}
      <div className="absolute inset-x-0 bottom-0 border-y border-linea/70 bg-crema/50 py-3 backdrop-blur">
        <div className="flex w-max animate-marquee items-center gap-6 whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="flex items-center gap-6">
              <span className="font-display text-lg font-medium text-cafe/70">
                {item}
              </span>
              <PawPrint className="size-4 text-naranja/60" fill="currentColor" strokeWidth={0} />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
