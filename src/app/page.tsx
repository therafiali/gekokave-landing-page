import Footer from "@/components/shared/Footer/Footer";
import Header from "@/components/shared/header/Header";
import FAQ from "@/components/views/FAQ";
import FeatureSection from "@/components/views/Hero/FeatureSection";
import HeroSection from "@/components/views/Hero/HeroSection";
import { StickyScrollRevealDemo } from "@/components/views/Showcase/ProductShowcase";
import ScrollReveal from "@/components/shared/ScrollReveal";

export default function Home() {
  return (
    <>
      <ScrollReveal width="100%">
        <HeroSection />
      </ScrollReveal>
      <ScrollReveal width="100%">
        <FeatureSection />
      </ScrollReveal>
      <ScrollReveal width="100%">
        <StickyScrollRevealDemo />
      </ScrollReveal>
      <ScrollReveal width="100%">
        <FAQ />
      </ScrollReveal>
    </>
  );
}
