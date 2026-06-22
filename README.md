# 🐾 Casa Hogar Goyito — «De la calle a casa»

Sitio web y campaña de comunicación visual para **Casa Hogar Goyito A.C.**, albergue canino en León, Guanajuato. Rescata, rehabilita, esteriliza y da en adopción a perros en situación de calle.

> Proyecto de comunicación visual · Universidad Iberoamericana León
> Concepto: **«De la calle a casa»** — transformar la empatía en adopciones, donativos y voluntariado.

---

## 🧱 Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** (design tokens cálidos en `app/globals.css`)
- **Framer Motion** + **GSAP** + **Lenis** (animaciones y smooth scroll)
- **lucide-react** (íconos) · íconos de marca propios en `components/ui/SocialIcons.tsx`
- Deploy en **Vercel**

## 🚀 Scripts

```bash
npm run dev     # desarrollo (http://localhost:3000)
npm run build   # build de producción
npm run start   # servir el build
```

## 🗂️ Estructura

```
app/
  layout.tsx            # fuentes (Fraunces + Inter), navbar, footer, metadata
  page.tsx              # inicio (11 secciones en flujo narrativo)
  adopta/page.tsx       # galería filtrable de perros
  adopta/[slug]/        # ficha individual (SSG por perro)
  campana/page.tsx      # piezas de campaña (cartel, carrusel IG, etc.)
components/
  sections/             # secciones del inicio
  adopta/               # galería y tarjetas de perro
  campana/              # piezas de campaña
  ui/ · layout/ · providers/
lib/
  site-data.ts          # 👈 TODO el contenido (datos reales) vive aquí
  icon-map.tsx · utils.ts
public/images/          # fotos (licencia libre) + CREDITS.md
```

## ✏️ Editar contenido

Casi todo el texto, datos y fichas de perros están en **`lib/site-data.ts`**. Cambia ahí los números, contactos, perros y mensajes sin tocar los componentes.

## 🖼️ Reemplazar fotos por las reales del albergue

Las fotos actuales son de **licencia libre** (Unsplash/Pexels, ver `public/images/CREDITS.md`) y sirven como placeholders. Para usar las reales:

1. Sustituye los archivos en `public/images/` **conservando el mismo nombre** (ej. `dogs/canela.jpg`).
2. O genera nuevas con IA usando **`IMAGE-PROMPTS.md`**.
3. Para el video de fondo opcional del hero, ver **`VIDEO-PROMPTS.md`**.

El componente `SmartImage` ya muestra un placeholder de marca elegante si alguna imagen llegara a faltar.

---

## ⚠️ Datos por confirmar con el albergue

El contenido usa datos **públicos confirmados** (WhatsApp 477 853 3412, PayPal, redes, gasto mensual ~$41,000, impacto reportado). Conviene confirmar con Casa Hogar Goyito:

- **Dirección exacta** (no está publicada; hoy se coordina por WhatsApp).
- **CLABE / cuenta bancaria** para transferencias (no es pública).
- **Estatus de donataria autorizada** (deducibilidad) y RFC para facturas.
- **Número actual de perros** (varía: ~250–300+).
- **Fotos reales** y permiso de uso.
- Las **fichas de perros** (`lib/site-data.ts`) son ejemplos demostrativos.

## 🙏 Créditos de contenido

Datos reales recopilados de fuentes públicas: sitio oficial casahogargoyito.org, prensa de León (Milenio, AM, Periódico Correo, El Sol de León, Telediario) y redes sociales del albergue. Fotos: ver `public/images/CREDITS.md`.
