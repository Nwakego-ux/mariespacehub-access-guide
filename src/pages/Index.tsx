import HeroSection from "@/components/HeroSection";
import ToolsSection from "@/components/ToolsSection";
import RequirementsSection from "@/components/RequirementsSection";
import ProcessSection from "@/components/ProcessSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <ToolsSection />
      <RequirementsSection />
      <ProcessSection />
      <ContactSection />
    </main>
  );
};

export default Index;
