import type { IconKey } from "./icon-map";

/* ============================================================
   CONTENIDO DEL SITIO — Casa Hogar Goyito A.C.
   "De la calle a casa"
   Datos reales confirmados por investigación (jun 2026).
   Las fichas de perros son ejemplos demostrativos para
   reemplazar con perros reales del albergue.
   ============================================================ */

export const site = {
  name: "Casa Hogar Goyito",
  legalName: "Casa Hogar Goyito A.C.",
  brand: "Goyito",
  concept: "De la calle a casa",
  tagline:
    "Rescatamos, rehabilitamos, esterilizamos y damos en adopción a perritos en situación de calle en León, Guanajuato.",
  founder: "Karina Castellanos",
  foundedLabel: "9 de mayo de 2021",
  city: "León, Guanajuato",
  // Contacto real (público)
  phone: "477 853 3412",
  whatsapp: "524778533412",
  whatsappUrl: "https://wa.me/524778533412",
  email: "contacto@casahogargoyito.com",
  website: "https://casahogargoyito.org",
  paypalUrl: "https://www.paypal.com/donate?hosted_button_id=2FF55ZR92ZWWY",
  social: {
    facebook: "https://www.facebook.com/manadagoyito",
    facebookAlt: "https://www.facebook.com/casa.hogar.goyito",
    instagram: "https://www.instagram.com/karina.castellanos.7505468",
    tiktok: "https://www.tiktok.com/@albergue_canino_goyito",
  },
} as const;

export const navLinks = [
  { label: "Conócenos", href: "/#conocenos" },
  { label: "Adopta", href: "/adopta" },
  { label: "Dona", href: "/#dona" },
  { label: "Transparencia", href: "/#transparencia" },
  { label: "Historias", href: "/#historias" },
  { label: "Educación", href: "/educacion" },
  { label: "Voluntariado", href: "/#voluntariado" },
];

/* — Frases del hero — */
export const hero = {
  kicker: "Albergue canino · León, Gto.",
  titleLines: ["De la calle", "a casa"],
  lead: "Ayuda a transformar una historia de abandono en una historia de hogar. Cada rescate empieza con alguien que decidió no voltear la mirada.",
  primaryCta: { label: "Quiero adoptar", href: "/adopta" },
  secondaryCta: { label: "Donar ahora", href: "/#dona" },
};

/* — Estadísticas de impacto (contadores) — */
export const impactStats: {
  value: number;
  label: string;
  suffix?: string;
  icon: IconKey;
}[] = [
  { value: 550, label: "Rescates", icon: "paw" },
  { value: 2500, label: "Esterilizaciones", suffix: "+", icon: "syringe" },
  { value: 350, label: "Adopciones", icon: "home" },
  { value: 300, label: "Perritas gestantes esterilizadas", icon: "heart" },
];

export const secondaryStats = [
  { value: "3", unit: "bultos de comida al día", icon: "bone" as IconKey },
  { value: "~250", unit: "perritos bajo cuidado", icon: "paw" as IconKey },
  { value: "15", unit: "voluntarios activos", icon: "users" as IconKey },
  { value: "2021", unit: "año de fundación", icon: "calendar" as IconKey },
];

/* — Contexto del problema — */
export const problem = {
  bigStat: "200,000",
  bigStatLabel: "perros se estiman abandonados en las calles de León.",
  points: [
    {
      stat: "Millones",
      text: "de perros y gatos viven en situación de calle en México.",
    },
    {
      stat: "Cientos de miles",
      text: "de animales son abandonados cada año en el país.",
    },
    {
      stat: "Esterilizar",
      text: "es una de las estrategias más efectivas para frenar la sobrepoblación.",
    },
  ],
  causes: [
    "Falta de esterilización",
    "Compra impulsiva",
    "Problemas económicos",
    "Mudanzas",
    "Falta de tiempo",
    "Tenencia irresponsable",
    "Expectativas falsas",
    "Abandono al crecer o enfermar",
  ],
};

/* — Quiénes somos — */
export const about = {
  story:
    "Casa Hogar Goyito nació el 9 de mayo de 2021, de la mano de la rescatista Karina Castellanos. Lleva el nombre de «Goyito», un perrito que fue quemado por un grupo de niños en la colonia Puerta Dorada y que, pese a todos los cuidados, no logró sobrevivir. Su historia encendió una promesa: que ningún otro perro tuviera que enfrentar la calle solo.",
  body: "Desde entonces rescatamos, rehabilitamos física y emocionalmente, esterilizamos y damos en adopción a perros víctimas de abandono, maltrato, atropellamiento o enfermedad. No solo los resguardamos: les devolvemos la salud, la confianza y la posibilidad de un hogar responsable.",
  trust:
    "Somos el único albergue en León constituido como Asociación Civil (A.C.), con permisos en regla y visto bueno del Centro de Control y Bienestar Animal.",
  objectives: [
    { icon: "shield", text: "Defender, proteger y rescatar animales en situación de calle o maltrato." },
    { icon: "stethoscope", text: "Rehabilitar física y emocionalmente a los perros rescatados." },
    { icon: "home", text: "Promover la adopción responsable y garantizar su bienestar." },
    { icon: "syringe", text: "Impulsar la esterilización para frenar la sobrepoblación." },
    { icon: "heartHandshake", text: "Fomentar la empatía, el voluntariado y la solidaridad." },
    { icon: "megaphone", text: "Educar sobre tenencia responsable y bienestar animal." },
  ] as { icon: IconKey; text: string }[],
};

/* — Transparencia: gasto mensual ~$41,000 — */
export const expenses = {
  total: 41000,
  items: [
    { label: "Alimento", amount: 27000, pct: 66, color: "var(--color-naranja)", icon: "bone" as IconKey },
    { label: "Renta", amount: 10000, pct: 24, color: "var(--color-cafe)", icon: "home" as IconKey },
    { label: "Gastos adicionales", amount: 4000, pct: 10, color: "var(--color-salvia)", icon: "sparkles" as IconKey },
  ],
};

/* — Tiers de impacto de donación — */
export const impactTiers: {
  amount: string;
  text: string;
  icon: IconKey;
  highlight?: boolean;
}[] = [
  { amount: "$50", text: "Alimentas a un perro durante un día.", icon: "bone" },
  { amount: "$100", text: "Apoyas parte de sus medicinas.", icon: "stethoscope", highlight: true },
  { amount: "1 bulto", text: "Ayudas a alimentar a todo el albergue.", icon: "gift" },
  { amount: "Compartir", text: "Acercas a un perro a encontrar familia.", icon: "share" },
];

/* — Necesidades — */
export const needs: { label: string; icon: IconKey }[] = [
  { label: "Alimento para perro", icon: "bone" },
  { label: "Medicamentos", icon: "stethoscope" },
  { label: "Vacunas y desparasitantes", icon: "syringe" },
  { label: "Productos de limpieza", icon: "droplets" },
  { label: "Camas, cobijas y transportadoras", icon: "home" },
  { label: "Apoyo para la renta", icon: "shield" },
  { label: "Voluntarios", icon: "users" },
  { label: "Difusión en redes", icon: "megaphone" },
];

/* — Métodos de donación (reales) — */
export const donationMethods = [
  {
    title: "Donativo en línea",
    desc: "Aporta de forma segura con PayPal o tarjeta. El albergue emite facturas electrónicas.",
    cta: "Donar con PayPal",
    href: site.paypalUrl,
    icon: "heartHandshake" as IconKey,
    external: true,
  },
  {
    title: "Donación en especie",
    desc: "Croquetas, medicinas o artículos de limpieza. El alimento debe entregarse sellado, en su empaque original.",
    cta: "Coordinar por WhatsApp",
    href: site.whatsappUrl,
    icon: "gift" as IconKey,
    external: true,
  },
  {
    title: "Voluntariado y difusión",
    desc: "Regala tu tiempo: bañar, pasear, convivir, tomar fotos o compartir. No necesitas experiencia.",
    cta: "Quiero ayudar",
    href: "/#voluntariado",
    icon: "handHeart" as IconKey,
    external: false,
  },
];

/* — Línea del tiempo del rescate (de la calle a casa) — */
export const rescueTimeline: {
  step: string;
  title: string;
  desc: string;
  icon: IconKey;
}[] = [
  { step: "01", title: "Rescate", desc: "Llegamos por un perro en situación de calle, abandono o maltrato.", icon: "paw" },
  { step: "02", title: "Revisión veterinaria", desc: "Valoración, curaciones y atención de urgencias.", icon: "stethoscope" },
  { step: "03", title: "Rehabilitación", desc: "Recupera salud, peso y, sobre todo, la confianza en las personas.", icon: "heart" },
  { step: "04", title: "Esterilización", desc: "Esterilizamos para frenar la sobrepoblación canina.", icon: "syringe" },
  { step: "05", title: "Publicación", desc: "Creamos su ficha y lo presentamos en busca de familia.", icon: "camera" },
  { step: "06", title: "Hogar", desc: "Encuentra una familia responsable. De la calle, a casa.", icon: "home" },
];

/* — Proceso de adopción — */
export const adoptionSteps: {
  step: string;
  title: string;
  desc: string;
  icon: IconKey;
}[] = [
  { step: "1", title: "Conoce a los perritos", desc: "Explora las fichas y elige con quién hay química.", icon: "search" },
  { step: "2", title: "Solicita y platica", desc: "Llenas una solicitud y tenemos una entrevista.", icon: "clipboard" },
  { step: "3", title: "Revisamos el hogar", desc: "Confirmamos que sea un espacio seguro y adecuado.", icon: "shield" },
  { step: "4", title: "Firma de compromiso", desc: "Aceptas cuidarlo y no abandonarlo nunca.", icon: "signature" },
  { step: "5", title: "¡A casa!", desc: "El perrito llega esterilizado y con microchip.", icon: "home" },
  { step: "6", title: "Seguimiento", desc: "Visitas de seguimiento cada 15 días a un mes.", icon: "heartHandshake" },
];

export const adoptionRequisitos = [
  "Vivienda propia (no rentada).",
  "Una referencia laboral y una personal.",
  "Estabilidad para alimento, vacunas y veterinario.",
  "Compromiso de esterilizar si aún no lo está.",
  "Nunca mantenerlo amarrado, encerrado o en azoteas.",
  "Permitir visitas de seguimiento.",
];

/* — Mitos y realidades — */
export const myths: { myth: string; reality: string }[] = [
  {
    myth: "Los perros rescatados son agresivos.",
    reality: "La mayoría son nobles y cariñosos. Algunos solo necesitan tiempo y paciencia para adaptarse.",
  },
  {
    myth: "Un perro adulto ya no se adapta.",
    reality: "Sí lo hace, y con una personalidad ya definida es más fácil encontrarle el hogar ideal.",
  },
  {
    myth: "Adoptar es muy complicado.",
    reality: "El proceso tiene requisitos porque busca proteger al perro y evitar que vuelva a ser abandonado.",
  },
  {
    myth: "Mejor comprar un cachorro de raza.",
    reality: "Adoptar reduce el abandono y le da una oportunidad a un perro que ya existe y necesita hogar.",
  },
  {
    myth: "Si dono poquito, no sirve.",
    reality: "Todo suma. Un donativo pequeño se vuelve alimento, medicina o parte de una consulta.",
  },
  {
    myth: "Los perros mestizos son inferiores.",
    reality: "Los mestizos suelen ser sanos, cariñosos, inteligentes y muy leales.",
  },
];

/* — Voluntariado — */
export const volunteerActivities: { title: string; icon: IconKey }[] = [
  { title: "Pasear perritos", icon: "footprints" },
  { title: "Bañar y convivir", icon: "droplets" },
  { title: "Apoyar en limpieza", icon: "sparkles" },
  { title: "Tomar fotos para adopción", icon: "camera" },
  { title: "Compartir publicaciones", icon: "share" },
  { title: "Apoyar en eventos", icon: "megaphone" },
];

/* — Perros en adopción (ejemplos demostrativos) — */
export type Dog = {
  slug: string;
  name: string;
  age: string;
  sex: "Macho" | "Hembra";
  size: "Chico" | "Mediano" | "Grande";
  energy: 1 | 2 | 3;
  sterilized: boolean;
  vaccinated: boolean;
  goodWith: { ninos: boolean; perros: boolean; gatos: boolean };
  personality: string[];
  story: string;
  image: string;
  tag?: string;
};

export const dogs: Dog[] = [
  {
    slug: "canela",
    name: "Canela",
    age: "2 años",
    sex: "Hembra",
    size: "Mediano",
    energy: 2,
    sterilized: true,
    vaccinated: true,
    goodWith: { ninos: true, perros: true, gatos: true },
    personality: ["Dulce", "Apegada", "Tranquila"],
    story: "Rescatada de una colonia donde sobrevivía entre coches. Hoy es pura ternura y busca un sillón donde quedarse.",
    image: "/images/dogs/canela.jpg",
    tag: "Lista para adopción",
  },
  {
    slug: "rocky",
    name: "Rocky",
    age: "3 años",
    sex: "Macho",
    size: "Grande",
    energy: 3,
    sterilized: true,
    vaccinated: true,
    goodWith: { ninos: true, perros: true, gatos: false },
    personality: ["Leal", "Juguetón", "Protector"],
    story: "Llegó flaco y desconfiado tras un atropellamiento. Se recuperó por completo y ahora ama correr y los abrazos.",
    image: "/images/dogs/rocky.jpg",
  },
  {
    slug: "luna",
    name: "Luna",
    age: "1 año",
    sex: "Hembra",
    size: "Chico",
    energy: 2,
    sterilized: true,
    vaccinated: true,
    goodWith: { ninos: true, perros: true, gatos: true },
    personality: ["Curiosa", "Cariñosa", "Sociable"],
    story: "Abandonada en una caja siendo cachorra. Es chiquita, valiente y se lleva bien con todos.",
    image: "/images/dogs/luna.jpg",
    tag: "Cachorra",
  },
  {
    slug: "max",
    name: "Max",
    age: "2 años",
    sex: "Macho",
    size: "Mediano",
    energy: 3,
    sterilized: true,
    vaccinated: true,
    goodWith: { ninos: true, perros: true, gatos: true },
    personality: ["Alegre", "Energético", "Fiel"],
    story: "Pura sonrisa y cola moviéndose sin parar. Ideal para una familia activa que ame los paseos.",
    image: "/images/dogs/max.jpg",
  },
  {
    slug: "nina",
    name: "Nina",
    age: "8 meses",
    sex: "Hembra",
    size: "Chico",
    energy: 2,
    sterilized: false,
    vaccinated: true,
    goodWith: { ninos: true, perros: true, gatos: true },
    personality: ["Tierna", "Tímida", "Noble"],
    story: "Nació en el albergue. Es reservada al inicio, pero cuando confía se vuelve tu sombra favorita.",
    image: "/images/dogs/nina.jpg",
    tag: "Cachorra",
  },
  {
    slug: "toby",
    name: "Toby",
    age: "4 años",
    sex: "Macho",
    size: "Mediano",
    energy: 1,
    sterilized: true,
    vaccinated: true,
    goodWith: { ninos: true, perros: true, gatos: false },
    personality: ["Relajado", "Cariñoso", "Maduro"],
    story: "Un alma vieja y noble. Perfecto para quien busca un compañero tranquilo y agradecido.",
    image: "/images/dogs/toby.jpg",
  },
  {
    slug: "frida",
    name: "Frida",
    age: "6 años",
    sex: "Hembra",
    size: "Mediano",
    energy: 1,
    sterilized: true,
    vaccinated: true,
    goodWith: { ninos: true, perros: true, gatos: true },
    personality: ["Serena", "Dulce", "Agradecida"],
    story: "Los perros senior también merecen hogar. Frida solo pide una cama calientita y compañía.",
    image: "/images/dogs/frida.jpg",
    tag: "Senior",
  },
  {
    slug: "simon",
    name: "Simón",
    age: "1.5 años",
    sex: "Macho",
    size: "Mediano",
    energy: 3,
    sterilized: true,
    vaccinated: true,
    goodWith: { ninos: true, perros: true, gatos: true },
    personality: ["Inteligente", "Sociable", "Aprende rápido"],
    story: "Listísimo y con muchas ganas de aprender. Sueña con una familia que juegue y lo eduque con cariño.",
    image: "/images/dogs/simon.jpg",
  },
];

/* — Historias felices — */
export const happyStories: {
  name: string;
  before: string;
  after: string;
  quote: string;
  owner: string;
  image: string;
}[] = [
  {
    name: "Pelusa",
    before: "Encontrada bajo la lluvia, con sarna y desconfianza.",
    after: "Hoy duerme en una cama suave y recibe a su familia en la puerta.",
    quote: "Llegó asustada y nos enseñó lo que es la lealtad. No cambiaríamos nada.",
    owner: "Familia Hernández",
    image: "/images/historias/historia-1.jpg",
  },
  {
    name: "Bruno",
    before: "Abandonado al crecer y dejar de ser «cachorrito».",
    after: "Ahora es el mejor amigo de dos niños y duerme panza arriba.",
    quote: "Adoptar a Bruno cambió dos vidas: la suya y la nuestra.",
    owner: "Familia Ramírez",
    image: "/images/historias/historia-2.jpg",
  },
  {
    name: "Maya",
    before: "Rescatada de una jauría, esterilizada y rehabilitada.",
    after: "Vive en el campo, corre libre y por fin sabe lo que es un hogar.",
    quote: "Pensábamos que la salvábamos a ella; en realidad nos salvó a nosotros.",
    owner: "Familia Torres",
    image: "/images/historias/historia-3.jpg",
  },
];

/* — Mensajes de campaña "De la calle a casa" — */
export const campaign = {
  concept: "De la calle a casa",
  mainMessage:
    "No basta con sentir empatía. Ayuda a convertirla en hogar, alimento y una segunda oportunidad.",
  secondary: [
    "Adoptar cambia dos vidas: la suya y la tuya.",
    "Tu donativo sí se ve: comida, medicina y cuidados reales.",
    "Un perro rescatado no necesita lástima, necesita una familia responsable.",
    "No todos pueden adoptar, pero todos pueden ayudar.",
    "Cada bulto de comida también es una forma de rescate.",
  ],
};

export const faq = [
  {
    q: "¿Cómo puedo adoptar?",
    a: "Explora las fichas en la sección Adopta, contáctanos por WhatsApp y te guiamos en el proceso: solicitud, entrevista, revisión de hogar y firma de compromiso.",
  },
  {
    q: "¿Puedo deducir mi donativo?",
    a: "El albergue emite facturas electrónicas. Para conocer el estatus de donataria autorizada y solicitar tu comprobante, escríbenos por WhatsApp.",
  },
  {
    q: "¿Cómo dono alimento de forma segura?",
    a: "Solo recibimos alimento sellado en su empaque original. Por seguridad de los perritos, pedimos identificación y una foto con el producto al momento de la entrega.",
  },
  {
    q: "¿Dónde están ubicados?",
    a: "Estamos en León, Guanajuato. Coordinamos visitas y entregas por WhatsApp para recibirte de la mejor manera.",
  },
];

/* — Apadrinamiento "Padrino Goyito" (donación mensual recurrente) — */
export const sponsorship = {
  name: "Padrino Goyito",
  intro:
    "Conviértete en padrino o madrina y apoya cada mes a un perrito rescatado. Tu aportación recurrente nos da la estabilidad para alimento, medicinas y cuidados constantes.",
  tiers: [
    { amount: 100, label: "Amigo", desc: "Ayudas con alimento y cariño." },
    { amount: 250, label: "Padrino", desc: "Cubres parte de sus medicinas y vacunas.", highlight: true },
    { amount: 500, label: "Guardián", desc: "Apoyas su atención veterinaria continua." },
    { amount: 1000, label: "Héroe", desc: "Sostienes su rescate y rehabilitación." },
  ] as { amount: number; label: string; desc: string; highlight?: boolean }[],
  benefits: [
    "Certificado digital de padrino o madrina.",
    "Foto del perrito que apadrinas.",
    "Actualización mensual de su progreso.",
    "Su historia de impacto.",
  ],
};

/* — Contenido educativo — */
export const compraVsAdopta = {
  comprar: [
    "Fomenta la compra impulsiva y los criaderos.",
    "No reduce el abandono ni la sobrepoblación.",
    "Suele implicar un costo más alto.",
    "El perrito puede llegar sin esterilizar ni vacunas.",
  ],
  adoptar: [
    "Le das una segunda oportunidad a un perro rescatado.",
    "Ayudas a reducir el abandono y liberas espacio para otro rescate.",
    "Apoyas directamente a un albergue local.",
    "Llega esterilizado, vacunado y con microchip.",
  ],
};

export const sterilization = {
  title: "La esterilización lo cambia todo",
  body: "Esterilizar es la forma más efectiva de frenar la sobrepoblación canina. Una sola perrita sin esterilizar puede dar origen a cientos de cachorros en pocos años. Por eso esterilizamos a cada perro antes de darlo en adopción.",
  stat: "2,500+",
  statLabel: "esterilizaciones, 300 de ellas en perritas gestantes",
};

export const tenencia = [
  "Agua limpia y alimento de calidad siempre disponibles.",
  "Esterilización para evitar camadas no deseadas.",
  "Vacunas y desparasitación al día.",
  "Un espacio seguro: nunca amarrado, encerrado ni en azoteas.",
  "Paseos, juego y convivencia diaria.",
  "Atención veterinaria preventiva y ante emergencias.",
  "Identificación o microchip.",
  "Compromiso de cuidarlo durante toda su vida.",
];

export const educationStats = [
  { value: "200,000", label: "perros abandonados estimados en León" },
  { value: "Millones", label: "de perros y gatos en situación de calle en México" },
  { value: "Cientos de miles", label: "de animales abandonados cada año en el país" },
];
