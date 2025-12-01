import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Pricing from "@/components/Pricing";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AccessibilityMenu from "@/components/AccessibilityMenu";
import ContactFAB from "@/components/ContactFAB";

const Index = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Pricing />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <AccessibilityMenu />
      <ContactFAB />
    </>
  );
};

export default Index;