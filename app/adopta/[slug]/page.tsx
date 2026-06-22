import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Check,
  Baby,
  Dog as DogIcon,
  Cat,
  Syringe,
  Scissors,
  Heart,
} from "lucide-react";
import { SmartImage } from "@/components/ui/SmartImage";
import { Button } from "@/components/ui/Button";
import { DogCard } from "@/components/adopta/DogCard";
import { dogs, site } from "@/lib/site-data";

export function generateStaticParams() {
  return dogs.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const dog = dogs.find((d) => d.slug === slug);
  if (!dog) return { title: "Perrito no encontrado" };
  return {
    title: `Adopta a ${dog.name}`,
    description: `${dog.name} · ${dog.sex} · ${dog.age} · ${dog.size}. ${dog.story}`,
  };
}

const energyLabel: Record<1 | 2 | 3, string> = {
  1: "Tranquilo",
  2: "Moderado",
  3: "Activo",
};

export default async function DogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const dog = dogs.find((d) => d.slug === slug);
  if (!dog) notFound();

  const others = dogs.filter((d) => d.slug !== dog.slug).slice(0, 4);
  const waText = encodeURIComponent(
    `¡Hola Casa Hogar Goyito! 🐾 Me interesa adoptar a ${dog.name}. ¿Me cuentan más sobre el proceso?`,
  );

  const compat = [
    { ok: dog.goodWith.ninos, label: "Niños", Icon: Baby },
    { ok: dog.goodWith.perros, label: "Otros perros", Icon: DogIcon },
    { ok: dog.goodWith.gatos, label: "Gatos", Icon: Cat },
  ];

  const facts = [
    { label: "Sexo", value: dog.sex },
    { label: "Edad", value: dog.age },
    { label: "Tamaño", value: dog.size },
    { label: "Energía", value: energyLabel[dog.energy] },
  ];

  return (
    <article className="bg-crema pb-20 pt-28 sm:pt-32">
      <div className="container-x">
        <Link
          href="/adopta"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-tinta-muted transition-colors hover:text-cafe-900"
        >
          <ArrowLeft className="size-4" /> Volver a adopciones
        </Link>

        <div className="mt-6 grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Imagen */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-lift">
            <SmartImage
              src={dog.image}
              alt={`${dog.name}, en adopción`}
              fill
              priority
              fallbackLabel={dog.name}
              className="object-cover"
              sizes="(max-width: 1024px) 92vw, 46vw"
            />
            {dog.tag && (
              <span className="absolute left-4 top-4 rounded-full bg-naranja px-3.5 py-1.5 text-xs font-semibold text-crema shadow-warm">
                {dog.tag}
              </span>
            )}
          </div>

          {/* Info */}
          <div>
            <h1 className="font-display text-5xl font-semibold text-tinta">
              {dog.name}
            </h1>

            <div className="mt-2 flex flex-wrap gap-2">
              {dog.personality.map((p) => (
                <span
                  key={p}
                  className="rounded-full bg-salvia-100 px-3 py-1 text-sm font-medium text-salvia-700"
                >
                  {p}
                </span>
              ))}
            </div>

            <p className="mt-6 text-pretty text-lg leading-relaxed text-tinta-muted">
              {dog.story}
            </p>

            {/* Datos rápidos */}
            <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {facts.map((f) => (
                <div
                  key={f.label}
                  className="rounded-2xl border border-linea bg-crema-2 p-4 text-center"
                >
                  <p className="text-xs uppercase tracking-wide text-tinta-muted">
                    {f.label}
                  </p>
                  <p className="mt-1 font-display text-lg font-semibold text-cafe-900">
                    {f.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Salud */}
            <div className="mt-4 flex flex-wrap gap-2">
              <Badge ok={dog.sterilized} Icon={Scissors} label="Esterilizado" />
              <Badge ok={dog.vaccinated} Icon={Syringe} label="Vacunado" />
              <span className="inline-flex items-center gap-1.5 rounded-full bg-naranja/12 px-3 py-1.5 text-sm font-medium text-naranja-600">
                <Heart className="size-3.5" fill="currentColor" /> Microchip
              </span>
            </div>

            {/* Compatibilidad */}
            <div className="mt-6">
              <p className="text-sm font-medium text-tinta">Convive bien con:</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {compat.map(({ ok, label, Icon }) => (
                  <span
                    key={label}
                    className={`inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm ${
                      ok
                        ? "bg-salvia-100 text-salvia-700"
                        : "bg-beige/60 text-tinta-muted line-through decoration-tinta-muted/40"
                    }`}
                  >
                    <Icon className="size-4" /> {label}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                href={`${site.whatsappUrl}?text=${waText}`}
                external
                variant="primary"
                size="lg"
              >
                Quiero adoptar a {dog.name}
              </Button>
              <Button href="/#proceso" variant="secondary" size="lg">
                Ver el proceso
              </Button>
            </div>
            <p className="mt-3 text-xs text-tinta-muted">
              Te responderemos por WhatsApp para iniciar el proceso de adopción
              responsable.
            </p>
          </div>
        </div>

        {/* Otros perritos */}
        <div className="mt-20">
          <h2 className="font-display text-2xl text-cafe-900 sm:text-3xl">
            Más perritos buscando hogar
          </h2>
          <div className="mt-6 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
            {others.map((d) => (
              <DogCard key={d.slug} dog={d} />
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

function Badge({
  ok,
  Icon,
  label,
}: {
  ok: boolean;
  Icon: React.ComponentType<{ className?: string }>;
  label: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-medium ${
        ok
          ? "bg-salvia-100 text-salvia-700"
          : "bg-beige/60 text-tinta-muted"
      }`}
    >
      {ok ? <Check className="size-3.5" /> : <Icon className="size-3.5" />}
      {label}
    </span>
  );
}
