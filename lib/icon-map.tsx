import {
  Bone,
  Heart,
  HeartHandshake,
  HandHeart,
  Stethoscope,
  Syringe,
  Home,
  Sparkles,
  PawPrint,
  Share2,
  Users,
  Camera,
  Droplets,
  Footprints,
  ShieldCheck,
  Megaphone,
  Gift,
  Calendar,
  Search,
  ClipboardCheck,
  FileSignature,
  type LucideIcon,
} from "lucide-react";

export const iconMap = {
  bone: Bone,
  heart: Heart,
  heartHandshake: HeartHandshake,
  handHeart: HandHeart,
  stethoscope: Stethoscope,
  syringe: Syringe,
  home: Home,
  sparkles: Sparkles,
  paw: PawPrint,
  share: Share2,
  users: Users,
  camera: Camera,
  droplets: Droplets,
  footprints: Footprints,
  shield: ShieldCheck,
  megaphone: Megaphone,
  gift: Gift,
  calendar: Calendar,
  search: Search,
  clipboard: ClipboardCheck,
  signature: FileSignature,
} satisfies Record<string, LucideIcon>;

export type IconKey = keyof typeof iconMap;

export function Icon({
  name,
  className,
  strokeWidth = 1.7,
}: {
  name: IconKey;
  className?: string;
  strokeWidth?: number;
}) {
  const Cmp = iconMap[name];
  return <Cmp className={className} strokeWidth={strokeWidth} />;
}
