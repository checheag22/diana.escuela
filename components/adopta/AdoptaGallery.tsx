"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { DogCard } from "./DogCard";
import { dogs } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const sizeFilters = ["Todos", "Chico", "Mediano", "Grande"] as const;
const sexFilters = ["Todos", "Macho", "Hembra"] as const;

export function AdoptaGallery() {
  const [size, setSize] = useState<(typeof sizeFilters)[number]>("Todos");
  const [sex, setSex] = useState<(typeof sexFilters)[number]>("Todos");

  const filtered = useMemo(
    () =>
      dogs.filter(
        (d) =>
          (size === "Todos" || d.size === size) &&
          (sex === "Todos" || d.sex === sex),
      ),
    [size, sex],
  );

  return (
    <div>
      {/* Filtros */}
      <div className="flex flex-col gap-4 rounded-3xl border border-linea bg-crema p-4 shadow-soft sm:flex-row sm:items-center sm:justify-between sm:p-5">
        <div className="flex flex-wrap items-center gap-2">
          <span className="mr-1 text-sm font-medium text-tinta-muted">Tamaño:</span>
          {sizeFilters.map((f) => (
            <FilterChip key={f} active={size === f} onClick={() => setSize(f)}>
              {f}
            </FilterChip>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <span className="mr-1 text-sm font-medium text-tinta-muted">Sexo:</span>
          {sexFilters.map((f) => (
            <FilterChip key={f} active={sex === f} onClick={() => setSex(f)}>
              {f}
            </FilterChip>
          ))}
        </div>
      </div>

      <p className="mt-5 text-sm text-tinta-muted">
        {filtered.length} {filtered.length === 1 ? "perrito" : "perritos"}{" "}
        esperando una familia.
      </p>

      {/* Grid */}
      <motion.div
        layout
        className="mt-5 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((dog) => (
            <motion.div
              key={dog.slug}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <DogCard dog={dog} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <div className="mt-10 rounded-3xl border border-dashed border-linea bg-crema-2 p-10 text-center text-tinta-muted">
          No hay perritos con esos filtros ahora mismo. Prueba otra combinación 🐾
        </div>
      )}
    </div>
  );
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200",
        active
          ? "bg-cafe-900 text-crema shadow-soft"
          : "bg-crema-2 text-tinta-muted hover:bg-beige/70 hover:text-cafe-900",
      )}
    >
      {children}
    </button>
  );
}
