"use client";

import { useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  PawPrint,
  HandCoins,
  Bone,
  Share2,
  HandHeart,
  Syringe,
  Clock,
  Home,
  Wallet,
  Smile,
  ShieldCheck,
  QrCode,
} from "lucide-react";
import { campaign, problem, expenses, site } from "@/lib/site-data";
import { mxn } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;

/* — Marco con etiqueta para cada pieza — */
function PieceFrame({
  label,
  format,
  children,
  className,
}: {
  label: string;
  format: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className="flex flex-col items-center">
      <div className="mb-4 flex items-center gap-3">
        <span className="rounded-full bg-cafe-900 px-3 py-1 text-xs font-semibold text-crema">
          {label}
        </span>
        <span className="text-xs uppercase tracking-widest text-tinta-muted">
          {format}
        </span>
      </div>
      <div className={className}>{children}</div>
    </div>
  );
}

/* ============================ CARTEL ============================ */
function Poster() {
  return (
    <div className="relative aspect-[3/4] w-full max-w-sm overflow-hidden rounded-[1.5rem] bg-gradient-to-b from-cafe-900 via-cafe-700 to-cafe-900 p-7 text-crema shadow-lift">
      <div className="pointer-events-none absolute -right-10 -top-10 size-44 rounded-full bg-naranja/25 blur-2xl" />
      <div className="relative z-10 flex h-full flex-col">
        <div className="flex items-center gap-2 text-durazno">
          <PawPrint className="size-5" fill="currentColor" strokeWidth={0} />
          <span className="text-sm font-semibold uppercase tracking-[0.2em]">
            {campaign.concept}
          </span>
        </div>

        <h3 className="mt-8 font-display text-3xl font-semibold leading-tight">
          En León, miles de perros siguen esperando una casa.
        </h3>

        <div className="mt-6">
          <p className="font-display text-6xl font-semibold text-durazno">
            {problem.bigStat}
          </p>
          <p className="text-sm text-crema/80">{problem.bigStatLabel}</p>
        </div>

        <p className="mt-auto text-pretty text-sm text-crema/85">
          {campaign.mainMessage}
        </p>

        <div className="mt-5 flex items-center gap-4 border-t border-crema/15 pt-5">
          <div className="grid size-16 place-items-center rounded-xl bg-crema text-cafe-900">
            <QrCode className="size-10" strokeWidth={1.4} />
          </div>
          <div className="text-xs leading-tight text-crema/80">
            <p className="font-semibold text-crema">Escanea para adoptar o donar</p>
            <p>casahogargoyito.org</p>
            <p>WhatsApp {site.phone}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ===================== CARRUSEL DE INSTAGRAM ===================== */
const slides = [
  { n: "01", Icon: HandCoins, title: "Dona dinero", text: "Desde $50 ayudas a alimentar a un perro durante un día." },
  { n: "02", Icon: Bone, title: "Dona alimento", text: "Un bulto de croquetas ayuda a alimentar a todo el albergue." },
  { n: "03", Icon: Share2, title: "Comparte", text: "Compartir una ficha también es una forma de rescate." },
  { n: "04", Icon: HandHeart, title: "Sé voluntario", text: "Pasear, bañar o convivir. No necesitas experiencia." },
  { n: "05", Icon: Syringe, title: "Esteriliza", text: "Esterilizar es la mejor forma de frenar el abandono." },
];

function Carousel() {
  const [i, setI] = useState(0);
  const go = (dir: number) =>
    setI((prev) => (prev + dir + slides.length) % slides.length);
  const s = slides[i];

  return (
    <div className="w-full max-w-sm">
      <div className="relative aspect-square overflow-hidden rounded-[1.5rem] bg-mesh-warm shadow-lift">
        <AnimatePresence mode="wait">
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="flex h-full flex-col justify-between p-8"
          >
            <div className="flex items-center justify-between">
              <span className="font-display text-5xl font-semibold text-naranja/30">
                {s.n}
              </span>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cafe">
                {campaign.concept}
              </span>
            </div>
            <div>
              <span className="inline-grid size-16 place-items-center rounded-2xl bg-naranja text-crema shadow-warm">
                <s.Icon className="size-8" strokeWidth={1.6} />
              </span>
              <h3 className="mt-5 font-display text-3xl font-semibold text-cafe-900">
                {s.title}
              </h3>
              <p className="mt-2 text-tinta-muted">{s.text}</p>
            </div>
            <p className="text-xs text-tinta-muted">
              No todos pueden adoptar, pero todos pueden ayudar.
            </p>
          </motion.div>
        </AnimatePresence>

        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Anterior"
          className="absolute left-3 top-1/2 inline-grid size-9 -translate-y-1/2 place-items-center rounded-full bg-crema/90 text-cafe-900 shadow-soft transition hover:bg-crema"
        >
          <ChevronLeft className="size-5" />
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Siguiente"
          className="absolute right-3 top-1/2 inline-grid size-9 -translate-y-1/2 place-items-center rounded-full bg-crema/90 text-cafe-900 shadow-soft transition hover:bg-crema"
        >
          <ChevronRight className="size-5" />
        </button>
      </div>
      <div className="mt-4 flex justify-center gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            type="button"
            aria-label={`Ir al slide ${idx + 1}`}
            onClick={() => setI(idx)}
            className={`h-2 rounded-full transition-all ${
              idx === i ? "w-6 bg-naranja" : "w-2 bg-beige"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

/* ================== POST DE TRANSPARENCIA ================== */
function TransparencyPost() {
  return (
    <div className="aspect-square w-full max-w-sm overflow-hidden rounded-[1.5rem] border border-linea bg-crema p-8 shadow-lift">
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-naranja-600">
        {campaign.concept}
      </span>
      <h3 className="mt-3 font-display text-3xl font-semibold text-cafe-900">
        ¿A dónde va tu donativo?
      </h3>
      <div className="mt-6 space-y-4">
        {expenses.items.map((it) => (
          <div key={it.label}>
            <div className="flex items-baseline justify-between text-sm">
              <span className="font-medium text-cafe-900">{it.label}</span>
              <span className="text-tinta-muted">
                {mxn(it.amount)} · {it.pct}%
              </span>
            </div>
            <div className="mt-1.5 h-3 overflow-hidden rounded-full bg-beige">
              <span
                className="block h-full rounded-full"
                style={{ width: `${it.pct}%`, backgroundColor: it.color }}
              />
            </div>
          </div>
        ))}
      </div>
      <p className="mt-6 font-display text-xl font-semibold text-cafe-900">
        {mxn(expenses.total)}{" "}
        <span className="text-sm font-normal text-tinta-muted">al mes</span>
      </p>
      <p className="mt-1 text-sm text-tinta-muted">
        Tu donativo sí se ve: comida, medicina y cuidados reales.
      </p>
    </div>
  );
}

/* ===================== INFOGRAFÍA ===================== */
const checklist = [
  { Icon: Clock, t: "Tiempo", d: "¿Puedo convivir y pasearlo cada día?" },
  { Icon: Home, t: "Espacio", d: "¿Mi hogar es seguro y adecuado?" },
  { Icon: Wallet, t: "Economía", d: "¿Cubro alimento, vacunas y veterinario?" },
  { Icon: Smile, t: "Paciencia", d: "¿Le doy tiempo para adaptarse?" },
  { Icon: ShieldCheck, t: "Compromiso", d: "¿Estoy list@ para toda su vida?" },
];

function Infographic() {
  return (
    <div className="aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[1.5rem] bg-salvia-700 p-8 text-crema shadow-lift">
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-durazno">
        {campaign.concept}
      </span>
      <h3 className="mt-3 font-display text-3xl font-semibold">
        Antes de adoptar, pregúntate esto
      </h3>
      <ul className="mt-6 space-y-3">
        {checklist.map(({ Icon, t, d }) => (
          <li key={t} className="flex items-start gap-3 rounded-2xl bg-crema/10 p-3">
            <span className="inline-grid size-10 shrink-0 place-items-center rounded-xl bg-crema/15 text-durazno">
              <Icon className="size-5" />
            </span>
            <div>
              <p className="font-display text-lg font-semibold">{t}</p>
              <p className="text-sm text-crema/80">{d}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function CampanaShowcase() {
  return (
    <div className="grid gap-x-8 gap-y-16 sm:grid-cols-2">
      <PieceFrame label="Cartel impreso" format="Vertical · 3:4">
        <Poster />
      </PieceFrame>
      <PieceFrame label="Carrusel de Instagram" format="Cuadrado · 1:1 · interactivo">
        <Carousel />
      </PieceFrame>
      <PieceFrame label="Post de transparencia" format="Cuadrado · 1:1">
        <TransparencyPost />
      </PieceFrame>
      <PieceFrame label="Infografía" format="Vertical · 4:5">
        <Infographic />
      </PieceFrame>
    </div>
  );
}
