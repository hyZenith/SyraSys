import AboutUs from "@/pages/AboutUs";
import Footer from "@/pages/Footer";
import Hero from "@/pages/Hero";
import Portfolio from "@/pages/Portfolio";
import Pricing from "@/pages/Pricing";
import Services from "@/pages/Services";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Pricing />
      <AboutUs />
      <Portfolio />
      <Footer />
    </>
  );
}
