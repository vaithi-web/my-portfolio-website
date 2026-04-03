import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import LoadingScreen from "@/components/LoadingScreen";
import CursorGlow from "@/components/CursorGlow";
import Navbar from "@/components/Navbar";
import ParticleSphere from "@/components/ParticleSphere";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <div className="relative min-h-screen">
          <CursorGlow />
          <ParticleSphere />
          <Navbar />
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
        </div>
      )}
    </>
  );
};

export default Index;
