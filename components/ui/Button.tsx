import Link from "next/link";
import { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "dark" | "soft";
type Size = "sm" | "md" | "lg";

const base =
  "group relative inline-flex items-center justify-center gap-2 font-medium tracking-tight rounded-full transition-all duration-300 ease-out will-change-transform active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-naranja/50 focus-visible:ring-offset-2 focus-visible:ring-offset-crema disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-naranja text-crema shadow-warm hover:bg-naranja-600 hover:-translate-y-0.5 hover:shadow-glow",
  secondary:
    "bg-transparent text-cafe-900 border border-cafe/30 hover:border-cafe hover:bg-cafe/5 hover:-translate-y-0.5",
  ghost: "bg-transparent text-cafe-900 hover:bg-cafe/8",
  dark: "bg-cafe-900 text-crema hover:bg-cafe-700 hover:-translate-y-0.5 shadow-soft",
  soft: "bg-salvia-100 text-salvia-700 hover:bg-salvia/25 hover:-translate-y-0.5",
};

const sizes: Record<Size, string> = {
  sm: "text-sm px-4 py-2",
  md: "text-[0.95rem] px-6 py-3",
  lg: "text-base px-8 py-4",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
};

type ButtonAsButton = CommonProps &
  ComponentPropsWithoutRef<"button"> & { href?: undefined };
type ButtonAsLink = CommonProps & {
  href: string;
  external?: boolean;
};

export function Button(props: ButtonAsButton | ButtonAsLink) {
  const {
    variant = "primary",
    size = "md",
    children,
    className,
  } = props;
  const classes = cn(base, variants[variant], sizes[size], className);

  if ("href" in props && props.href) {
    const { href, external } = props;
    const isInternal = href.startsWith("/") && !external;
    if (isInternal) {
      return (
        <Link href={href} className={classes}>
          {children}
        </Link>
      );
    }
    return (
      <a
        href={href}
        className={classes}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  const { variant: _v, size: _s, className: _c, children: _ch, ...rest } =
    props as ButtonAsButton;
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
