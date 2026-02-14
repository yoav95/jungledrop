import styles from "./App.module.css";
import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features";
import GardenDesign from "./components/GardenDesign/GardenDesign";
import SemiHydro from "./components/SemiHydro/SemiHydro";
import ShowerSection from "./components/ShowerSection/ShowerSection";
import IndoorGardens from "./components/IndoorGardens/IndoorGardens";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp/FloatingWhatsApp";
import MidPageCTA from "./components/MidPageCTA/MidPageCTA";
import useScrollReveal from "./hooks/useScrollReveal";

export default function App() {
  useScrollReveal();

  return (
    <div className={styles.container}>
      <Hero />
      <Features />
      <IndoorGardens />
      <ShowerSection />
      <MidPageCTA />
      <SemiHydro />
      <GardenDesign />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
