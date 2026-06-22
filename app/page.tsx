import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ImpactSection } from "@/components/sections/ImpactSection";
import { FeaturedDogsSection } from "@/components/sections/FeaturedDogsSection";
import { HelpSection } from "@/components/sections/HelpSection";
import { TransparencySection } from "@/components/sections/TransparencySection";
import { SponsorshipSection } from "@/components/sections/SponsorshipSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { StoriesSection } from "@/components/sections/StoriesSection";
import { VolunteerSection } from "@/components/sections/VolunteerSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <AboutSection />
      <ImpactSection />
      <FeaturedDogsSection />
      <HelpSection />
      <TransparencySection />
      <SponsorshipSection />
      <ProcessSection />
      <StoriesSection />
      <VolunteerSection />
      <ContactSection />
    </>
  );
}
