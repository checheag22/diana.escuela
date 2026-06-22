# 🎬 Prompts de video con IA — Casa Hogar Goyito

Para un **video de fondo opcional en el hero** (loop sutil detrás del titular «De la calle a casa»). Genéralo con **Veo / Gemini**, Runway, Pika o Kling. Exporta en **MP4 (H.264) + WebM**, mudo, ~6–10 s, loopeable, y colócalo en `public/video/`.

## Prompt principal (hero loop) — 16:9, vertical-safe
> Cinematic slow-motion shot following a hopeful mixed-breed street dog as it walks from a quiet dawn street toward the warm glow of an open home doorway, golden-hour light, soft focus, dust particles floating, gentle camera push-in, earthy cream and terracotta tones, tender and hopeful mood, no people's faces, seamless loop, no text. 8 seconds.

## Variante A — huellas / journey abstracto
> Macro slow-motion of soft dog paw prints appearing one by one on warm sandy ground leading toward home, golden light, shallow depth of field, calm and emotional, loopable, no text.

## Variante B — perrito feliz en casa
> A rescued dog lying happily in a cozy sunlit living room, tail wagging slowly, dust motes in warm light, intimate and peaceful, subtle camera drift, seamless loop, no text.

## Cómo integrarlo en el hero (opcional)

En `components/sections/HeroSection.tsx`, dentro del contenedor del blob (`relative aspect-[4/5] ...`), reemplaza/acompaña `SmartImage` con:

```tsx
<video
  className="absolute inset-0 size-full object-cover"
  autoPlay
  muted
  loop
  playsInline
  poster="/images/site/cta.jpg"
>
  <source src="/video/hero-loop.webm" type="video/webm" />
  <source src="/video/hero-loop.mp4" type="video/mp4" />
</video>
```

Mantén `poster="/images/site/cta.jpg"` como respaldo mientras carga el video y para `prefers-reduced-motion`.

### Recomendaciones
- Mudo y `playsInline` (obligatorio para autoplay en móvil).
- Comprime a < 3–4 MB para no afectar la carga.
- Respeta `prefers-reduced-motion`: si el usuario lo activa, muestra solo el `poster`.
- Sin texto ni logos dentro del video (los pone el sitio encima).
