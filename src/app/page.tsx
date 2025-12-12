import Footer from "@/components/shared/Footer/Footer";
import Header from "@/components/shared/header/Header";
import FAQ from "@/components/views/FAQ";
import FeatureSection from "@/components/views/Hero/FeatureSection";
import HeroSection from "@/components/views/Hero/HeroSection";


export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <FeatureSection />
      <FAQ />
      <Footer />
    </>
  );
}
