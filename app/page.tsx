"use client";

// import CallToAction from "@/components/CallToAction";
import CallToAction from "./components/CallToAction";
import DevelopmentProcess from "./components/DevelopmentProcess";
import FeaturedProjects from "./components/FeaturedProjects";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Partners from "./components/Partners";
import Services from "./components/Services";
import Stats from "./components/Stats";
import Technologies from "./components/Technologies";
import Testimonials from "./components/Testimonials";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Stats Section */}
      <Stats />

      {/* Services Section */}
      <Services />

      {/* Technologies Section */}
      <Technologies />

      {/* Development Process Section */}
      <DevelopmentProcess />

      {/* Work Process Section */}
      {/* <WorkProcess /> */}

      {/* Featured Projects Section */}
      <FeaturedProjects />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Partners Section */}
      <Partners />

      {/* Call to Action Section */}
      <CallToAction />

      <Footer />
    </div>
  );
}
