"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Heart } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { navLinks, site } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const pathname = usePathname();
  const onDarkHero = !scrolled && (pathname === "/" || pathname === "/campana");

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled
            ? "border-b border-linea/70 glass-warm py-2 shadow-soft"
            : "border-b border-transparent bg-transparent py-4",
        )}
      >
        <nav className="container-x flex items-center justify-between gap-4">
          <Logo tone={onDarkHero ? "light" : "dark"} />

          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={cn(
                    "relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                    onDarkHero
                      ? "text-crema/85 hover:text-crema"
                      : "text-tinta/80 hover:text-cafe-900",
                  )}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-2 lg:flex">
            <Button
              href={site.whatsappUrl}
              external
              variant="ghost"
              size="sm"
              className={onDarkHero ? "text-crema hover:bg-crema/10" : undefined}
            >
              Adopta
            </Button>
            <Button href="/#dona" variant="primary" size="sm">
              <Heart className="size-4" fill="currentColor" />
              Donar
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className={cn(
              "inline-grid size-11 place-items-center rounded-2xl border transition-colors lg:hidden",
              onDarkHero
                ? "border-crema/25 bg-crema/10 text-crema backdrop-blur"
                : "border-linea bg-crema/70 text-cafe-900",
            )}
            aria-label="Abrir menú"
          >
            <Menu className="size-5" />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-cafe-900/40 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.aside
              className="absolute right-0 top-0 flex h-full w-[82%] max-w-sm flex-col gap-2 bg-crema p-6 shadow-lift"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 280 }}
            >
              <div className="flex items-center justify-between">
                <Logo />
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="inline-grid size-11 place-items-center rounded-2xl border border-linea text-cafe-900"
                  aria-label="Cerrar menú"
                >
                  <X className="size-5" />
                </button>
              </div>

              <ul className="mt-6 flex flex-col gap-1">
                {navLinks.map((l, i) => (
                  <motion.li
                    key={l.href}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + i * 0.05 }}
                  >
                    <Link
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between rounded-2xl px-4 py-3.5 font-display text-lg text-tinta transition-colors hover:bg-cafe/5"
                    >
                      {l.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-auto flex flex-col gap-3">
                <Button href="/#dona" variant="primary" size="lg" className="w-full">
                  <Heart className="size-4" fill="currentColor" /> Donar ahora
                </Button>
                <Button
                  href={site.whatsappUrl}
                  external
                  variant="secondary"
                  size="lg"
                  className="w-full"
                >
                  Escríbenos por WhatsApp
                </Button>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
