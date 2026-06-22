import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * Marca de Casa Hogar Goyito: una casita cálida con una huella dentro,
 * acompañada del wordmark y el concepto "De la calle a casa".
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
      aria-label="Casa Hogar Goyito — inicio"
      className={cn("group inline-flex items-center gap-3", className)}
    >
      <span className="relative inline-grid size-11 place-items-center rounded-2xl bg-gradient-to-br from-naranja via-naranja-600 to-cafe shadow-warm transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105">
        <svg
          viewBox="0 0 24 24"
          className="size-6 text-crema"
          fill="none"
          aria-hidden
        >
          {/* casita */}
          <path
            d="M4 11.2 12 4.5l8 6.7"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.6 10.2v8.3a1 1 0 0 0 1 1h10.8a1 1 0 0 0 1-1v-8.3"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* huella */}
          <g fill="currentColor">
            <circle cx="9.4" cy="14.1" r="0.95" />
            <circle cx="12" cy="13.3" r="0.95" />
            <circle cx="14.6" cy="14.1" r="0.95" />
            <path d="M12 14.6c1.7 0 2.7 1.1 2.7 2.3 0 1-.9 1.5-2.7 1.5s-2.7-.5-2.7-1.5c0-1.2 1-2.3 2.7-2.3Z" />
          </g>
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-xl font-semibold tracking-tight",
            tone === "dark" ? "text-tinta" : "text-crema",
          )}
        >
          Goyito
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
