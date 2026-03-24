import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import SkillsSection from "../components/SkillsSection";
import ProjectsSection from "../components/ProjectsSection";
import Certifications from "../components/Certifications";
import ResumeSection from "../components/ResumeSection";
import ContactSection from "../components/ContactSection";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <Certifications />
      <ResumeSection />
      <ContactSection />
    </div>
  );
};

export default Home;

/*import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import SkillsSection from "../components/SkillsSection";
import ProjectsSection from "../components/ProjectsSection";
import Certifications from "../components/Certifications";
import ResumeSection from "../components/ResumeSection";
import ContactSection from "../components/ContactSection";

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <Certifications />
        <ResumeSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Home;*/