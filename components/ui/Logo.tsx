import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Marca de Casa Hogar Goyito A.C. — emblema oficial (corazón con perro y gato)
 * sobre un chip claro + wordmark con el concepto "De la calle a casa".
 */
export function Logo({
  tone = "dark",
  className,
  showTagline = true,
}: {
  tone?: "dark" | "light";
  className?: string;
  showTagline?: boolean;
}) {
  return (
    <Link
      href="/"
      aria-label="Casa Hogar Goyito A.C. — inicio"
      className={cn("group inline-flex items-center gap-3", className)}
    >
      <span className="relative inline-grid size-11 place-items-center overflow-hidden rounded-2xl bg-white shadow-warm ring-1 ring-cafe-900/5 transition-transform duration-300 group-hover:-rotate-3 group-hover:scale-105">
        <Image
          src="/images/logo-mark.png"
          alt="Casa Hogar Goyito A.C."
          width={120}
          height={102}
          className="h-8 w-auto object-contain"
          priority
        />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-xl font-semibold tracking-tight",
            tone === "dark" ? "text-tinta" : "text-crema",
          )}
        >
          Goyito <span className="opacity-60">A.C.</span>
        </span>
        {showTagline && (
          <span
            className={cn(
              "text-[0.66rem] font-medium uppercase tracking-[0.22em]",
              tone === "dark" ? "text-naranja-600" : "text-durazno",
            )}
          >
            De la calle a casa
          </span>
        )}
      </span>
    </Link>
  );
}
