import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ValueSection from "@/components/ValueSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import GitHubSection from "@/components/GitHubSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ValueSection />
      <SkillsSection />
      <ProjectsSection />
      <GitHubSection />
      <ExperienceSection />
      <EducationSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
