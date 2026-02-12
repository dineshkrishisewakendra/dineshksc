import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";
import AboutPreview from "@/components/sections/AboutPreview";
import ProgramsSection from "@/components/sections/ProgramsSection";
import EventsSection from "@/components/sections/EventsSection";
import PrincipalSection from "@/components/sections/PrincipalSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <AboutPreview />
      <ProgramsSection />
      <EventsSection />
      <PrincipalSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
