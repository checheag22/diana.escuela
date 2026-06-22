"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";
import { PawPrint } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = Omit<ImageProps, "onError"> & {
  /** Texto opcional mostrado en el placeholder si la imagen falla. */
  fallbackLabel?: string;
  wrapperClassName?: string;
};

/**
 * next/image con fallback elegante de marca si la imagen no carga,
 * para que un slot vacío siempre se vea intencional (no roto).
 */
export function SmartImage({
  fallbackLabel,
  className,
  wrapperClassName,
  alt,
  ...props
}: Props) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div
        className={cn(
          "flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-beige via-arena to-durazno-100 text-cafe/45",
          wrapperClassName,
          className,
        )}
        aria-label={typeof alt === "string" ? alt : fallbackLabel}
      >
        <PawPrint className="size-8 animate-float-slow" strokeWidth={1.6} />
        {fallbackLabel && (
          <span className="px-4 text-center text-xs font-medium uppercase tracking-widest">
            {fallbackLabel}
          </span>
        )}
      </div>
    );
  }

  return (
    <Image
      alt={alt}
      className={className}
      onError={() => setError(true)}
      {...props}
    />
  );
}
