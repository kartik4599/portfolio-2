import AboutSection from "./About";
import BentoPortfolio from "./BentoPortfolio";
import ContactSection from "./ContactSection";
import ExperienceSection from "./ExperienceSection";
import Footer from "./Footer";
import Navbar from "./Navbar";
import ProjectShowcase from "./ProjectShowcase";
import TechStack from "./TechStack";

function App() {
  return (
    <div className="w-full flex flex-col overflow-y-auto bg-amber-100">
      <Navbar />
      <BentoPortfolio />
      <AboutSection />
      <ExperienceSection />
      <TechStack />
      <ProjectShowcase />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
