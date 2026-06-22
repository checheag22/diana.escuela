import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { DogCard } from "@/components/adopta/DogCard";
import { dogs } from "@/lib/site-data";

export function FeaturedDogsSection() {
  const featured = dogs.slice(0, 4);

  return (
    <section id="destacados" className="scroll-mt-24 bg-crema-2 py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="En adopción"
          title={
            <>
              Perros listos para{" "}
              <span className="text-gradient-warm">encontrar familia</span>.
            </>
          }
          description="Cada uno fue rescatado de la calle. Vienen esterilizados, vacunados y con muchas ganas de querer."
        />

        <Stagger className="mt-12 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
          {featured.map((d) => (
            <StaggerItem key={d.slug}>
              <DogCard dog={d} />
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal className="mt-10 flex justify-center">
          <Button href="/adopta" variant="primary" size="lg">
            Ver todos los perros
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
