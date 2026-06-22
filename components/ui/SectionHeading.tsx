import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
  className?: string;
  tone?: "dark" | "light";
};

/** Encabezado de sección reutilizable: eyebrow + título (Fraunces) + descripción. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
  tone = "dark",
}: Props) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center mx-auto max-w-2xl" : "items-start text-left max-w-xl",
        className,
      )}
    >
      {eyebrow && (
        <Reveal>
          <span
            className={cn(
              "inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em]",
              tone === "dark"
                ? "bg-cafe/8 text-cafe"
                : "bg-crema/15 text-crema",
            )}
          >
            <span className="size-1.5 rounded-full bg-naranja" />
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.08}>
        <h2
          className={cn(
            "text-balance text-3xl sm:text-4xl md:text-[2.9rem]",
            tone === "dark" ? "text-tinta" : "text-crema",
          )}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.16}>
          <p
            className={cn(
              "text-pretty text-base sm:text-lg leading-relaxed",
              tone === "dark" ? "text-tinta-muted" : "text-crema/75",
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
