import Link from "next/link";
import { ArrowRight, Baby, Dog as DogIcon, Cat } from "lucide-react";
import { SmartImage } from "@/components/ui/SmartImage";
import type { Dog } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const energyLabel: Record<1 | 2 | 3, string> = {
  1: "Tranquilo",
  2: "Moderado",
  3: "Activo",
};

export function DogCard({ dog }: { dog: Dog }) {
  const compat = [
    { ok: dog.goodWith.ninos, label: "Niños", Icon: Baby },
    { ok: dog.goodWith.perros, label: "Perros", Icon: DogIcon },
    { ok: dog.goodWith.gatos, label: "Gatos", Icon: Cat },
  ];

  return (
    <Link
      href={`/adopta/${dog.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-linea bg-crema shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-warm"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <SmartImage
          src={dog.image}
          alt={`${dog.name}, en adopción`}
          fill
          fallbackLabel={dog.name}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 24vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cafe-900/55 via-transparent to-transparent" />
        {dog.tag && (
          <span className="absolute left-3 top-3 rounded-full bg-naranja px-3 py-1 text-xs font-semibold text-crema shadow-warm">
            {dog.tag}
          </span>
        )}
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-4">
          <div>
            <h3 className="font-display text-2xl font-semibold text-crema">
              {dog.name}
            </h3>
            <p className="text-sm text-crema/85">
              {dog.sex} · {dog.age} · {dog.size}
            </p>
          </div>
          <span className="inline-grid size-9 place-items-center rounded-full bg-crema text-cafe-900 opacity-0 transition-all duration-300 group-hover:opacity-100">
            <ArrowRight className="size-4" />
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="flex flex-wrap gap-1.5">
          {dog.personality.map((p) => (
            <span
              key={p}
              className="rounded-full bg-salvia-100 px-2.5 py-1 text-xs font-medium text-salvia-700"
            >
              {p}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between pt-2">
          {/* Energía */}
          <div className="flex items-center gap-1.5">
            <span className="text-xs text-tinta-muted">Energía</span>
            <span className="flex gap-1">
              {[1, 2, 3].map((n) => (
                <span
                  key={n}
                  className={cn(
                    "size-2 rounded-full",
                    n <= dog.energy ? "bg-naranja" : "bg-beige",
                  )}
                />
              ))}
            </span>
            <span className="sr-only">{energyLabel[dog.energy]}</span>
          </div>

          {/* Compatibilidad */}
          <div className="flex items-center gap-2">
            {compat.map(({ ok, label, Icon }) => (
              <span
                key={label}
                title={`${ok ? "Compatible con" : "Con reservas con"} ${label}`}
                className={cn(
                  "inline-grid size-7 place-items-center rounded-lg",
                  ok
                    ? "bg-salvia-100 text-salvia-700"
                    : "bg-beige/60 text-tinta-muted/50",
                )}
              >
                <Icon className="size-3.5" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
