import AboutUs from "@/pages/AboutUs";
import Footer from "@/components/Footer";
import Hero from "@/components/home/Hero";
import LatestCases from "@/components/home/latestCases";
import Portfolio from "@/components/home/Portfolio";
import Services from "@/components/home/Services";
import Testimonials from "@/components/home/Testimonials";
import OurTechnologies from "@/components/home/our-technologies";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Portfolio />
      {/* <AboutUs /> */}
      <OurTechnologies />
      <Testimonials />
      <LatestCases />
      <Footer />
    </>
  );
}
