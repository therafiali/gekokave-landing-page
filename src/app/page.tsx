import Footer from "@/components/shared/Footer/Footer";
import Header from "@/components/shared/header/Header";
import FAQ from "@/components/views/FAQ";
import FeatureSection from "@/components/views/Hero/FeatureSection";
import HeroSection from "@/components/views/Hero/HeroSection";
import { StickyScrollRevealDemo } from "@/components/views/Showcase/ProductShowcase";


export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <FeatureSection />
      <StickyScrollRevealDemo />
      <FAQ />
      <Footer />
    </>
  );
}
