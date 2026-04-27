import AboutUs from "@/pages/AboutUs";
import Footer from "@/pages/Footer";
import Hero from "@/pages/Hero";
import LatestCases from "@/pages/latestCases";
import Portfolio from "@/pages/Portfolio";
import Services from "@/pages/Services";
import Testimonials from "@/pages/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Portfolio />
      {/* <AboutUs /> */}
      <Testimonials />
      <LatestCases />
      <Footer />
    </>
  );
}
