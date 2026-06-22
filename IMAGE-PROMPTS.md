# 🎨 Prompts de imágenes — Casa Hogar Goyito

Prompts listos para generar fotos con IA (Gemini / Imagen / Flux / Midjourney / DALL·E) o para guiar una sesión de foto real. Mantén la **misma identidad cálida** del sitio: luz dorada suave, tonos beige/café/naranja, emoción esperanzadora (nunca triste ni de lástima).

**Cómo usarlas:** genera la imagen, renómbrala con el nombre exacto del slot y colócala en `public/images/...` reemplazando la actual.

**Dirección de arte común (pégalo al final de cada prompt):**
> Warm golden-hour natural light, soft shadows, shallow depth of field, authentic documentary style, earthy palette of cream, beige, warm brown and terracotta orange, hopeful and tender mood, photorealistic, high detail, no text, no watermark.

---

## Hero / CTA — `public/images/site/cta.jpg`  · 4:5 (vertical)
> A rescued mixed-breed Mexican street dog being gently hugged by a happy young person at home, both looking content, cozy living room with warm light, the dog calm and trusting. Vertical composition with room at the top.

## El problema — `public/images/site/problema.jpg` · 3:2 (horizontal)
> A single stray dog standing on a quiet León street at dawn, dignified and hopeful (not injured, not distressing), looking toward the camera, soft urban background blurred. Documentary, respectful.

## Conócenos — `public/images/site/conocenos.jpg` · 4:5 (vertical)
> A female shelter volunteer (rescatista) crouching to embrace a calm senior rescued dog in a simple shelter yard in Mexico, genuine connection, both faces gentle, warm afternoon light.

## Voluntariado — `public/images/site/voluntariado.jpg` · 3:2 (horizontal)
> A volunteer walking a happy medium-sized rescued dog outdoors on a sunny day, both in motion, joyful, natural park or dirt path, candid.

## Perros en adopción — `public/images/dogs/<slug>.jpg` · 4:5 (vertical)
Genera un retrato individual, fondo simple y cálido, perro mirando a cámara, expresión amable. Un prompt por perro:

| Archivo | Prompt específico |
|---|---|
| `canela.jpg` | A sweet tan/brown medium mixed-breed female dog, gentle calm expression, sitting, warm bokeh background |
| `rocky.jpg` | A strong but gentle large black-and-brown mixed-breed male dog, friendly eyes, sitting proudly |
| `luna.jpg` | A small light-colored young female dog, curious and calm, soft expression |
| `max.jpg` | A happy medium male dog, tongue out, playful joyful energy, bright eyes |
| `nina.jpg` | A small tender female puppy, shy and noble, big soulful eyes |
| `toby.jpg` | A scruffy characterful medium mixed-breed male dog, relaxed mature vibe |
| `frida.jpg` | A calm senior female dog, serene soulful eyes, grey muzzle, gentle |
| `simon.jpg` | A smart medium male dog looking attentively at camera, hopeful, alert ears |

## Historias felices — `public/images/historias/historia-{1,2,3}.jpg` · 3:2 (horizontal)
> A formerly-rescued dog now happy and healthy at home with its adoptive family, warm domestic scene, the dog relaxed and loved, candid joyful moment.

---

### Consejos de generación
- Pide **fotorrealismo** y evita estética de estudio/comercial (nada de fondos blancos tipo catálogo).
- Prefiere **perros mestizos** ("street/mixed-breed", "perro mestizo"), no razas puras de exposición.
- Relación de aspecto: respeta la indicada para que el recorte calce con el diseño.
- Evita texto, logos y marcas de agua dentro de la imagen.
