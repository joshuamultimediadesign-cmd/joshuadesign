import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import DesignShowcase from "@/components/DesignShowcase";
import FeaturedProjects from "@/components/FeaturedProjects";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Clients from "@/components/Clients";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollReveal from "@/components/ScrollReveal";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <ScrollReveal><About /></ScrollReveal>
      <ScrollReveal><Services /></ScrollReveal>
      <ScrollReveal><Skills /></ScrollReveal>
      <ScrollReveal><DesignShowcase /></ScrollReveal>
      <ScrollReveal><FeaturedProjects /></ScrollReveal>
      <ScrollReveal><Portfolio /></ScrollReveal>
      <ScrollReveal><Testimonials /></ScrollReveal>
      <ScrollReveal><Clients /></ScrollReveal>
      <ScrollReveal><FAQ /></ScrollReveal>
      <ScrollReveal><Contact /></ScrollReveal>
      <ScrollReveal><Footer /></ScrollReveal>
      <WhatsAppButton />
    </div>
  );
};

export default Index;
