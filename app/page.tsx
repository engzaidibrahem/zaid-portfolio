import { AmbientBackground } from "@/components/site/AmbientBackground";
import { AboutSection } from "@/components/site/AboutSection";
import { ContactSection } from "@/components/site/ContactSection";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { ScrollSection } from "@/components/site/ScrollSection";
import { StackSection } from "@/components/site/StackSection";
import { WorkSection } from "@/components/site/WorkSection";

export default function Home() {
  return (
    <>
      <AmbientBackground />
      <Header />
      <main>
        <Hero />
        <ScrollSection tone="mint">
          <WorkSection />
        </ScrollSection>
        <ScrollSection tone="cool">
          <StackSection />
        </ScrollSection>
        <ScrollSection tone="warm">
          <AboutSection />
        </ScrollSection>
        <ScrollSection tone="mint">
          <ContactSection />
        </ScrollSection>
      </main>
      <Footer />
    </>
  );
}
