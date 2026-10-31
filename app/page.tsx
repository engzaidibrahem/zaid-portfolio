import { AboutSection } from "@/components/site/AboutSection";
import { CapabilitiesSection } from "@/components/site/CapabilitiesSection";
import { ContactSection } from "@/components/site/ContactSection";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { WorkSection } from "@/components/site/WorkSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WorkSection />
        <CapabilitiesSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
