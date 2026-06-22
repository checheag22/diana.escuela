"use client";

import { ReactNode, useEffect } from "react";
import Lenis from "lenis";

/**
 * Smooth scroll global con Lenis. Respeta prefers-reduced-motion
 * y sincroniza con GSAP ScrollTrigger si está presente.
 */
export default function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) return;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.6,
    });

    // Sincroniza con GSAP ScrollTrigger si fue cargado por algún componente.
    const w = window as unknown as {
      ScrollTrigger?: { update: () => void };
    };
    lenis.on("scroll", () => w.ScrollTrigger?.update());

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
