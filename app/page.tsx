import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ImpactSection } from "@/components/sections/ImpactSection";
import { HelpSection } from "@/components/sections/HelpSection";
import { TransparencySection } from "@/components/sections/TransparencySection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { StoriesSection } from "@/components/sections/StoriesSection";
import { MythsSection } from "@/components/sections/MythsSection";
import { VolunteerSection } from "@/components/sections/VolunteerSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <AboutSection />
      <ImpactSection />
      <HelpSection />
      <TransparencySection />
      <ProcessSection />
      <StoriesSection />
      <MythsSection />
      <VolunteerSection />
      <ContactSection />
    </>
  );
}
