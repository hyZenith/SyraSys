import AboutUs from "@/pages/AboutUs";
import Footer from "@/pages/Footer";
import Hero from "@/pages/Hero";
import LatestCases from "@/pages/latestCases";
import Portfolio from "@/pages/Portfolio";
import Pricing from "@/pages/Pricing";
import Services from "@/pages/Sevices";
import Testimonials from "@/pages/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      {/* <ServicesT /> */}
      {/* <TutServices /> */}
      <Pricing />
      <AboutUs />
      <Portfolio />
      <Testimonials />
      <LatestCases />
      <Footer />
    </>
  );
}
