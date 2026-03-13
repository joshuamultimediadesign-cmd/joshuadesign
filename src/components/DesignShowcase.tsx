import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import portfolioLogos from "@/assets/portfolio-logos.jpg";
import portfolioBranding from "@/assets/portfolio-branding-new.jpg";
import portfolioTrendzBrand from "@/assets/portfolio-trendz-brand.png";
import portfolioPromods from "@/assets/portfolio-promods.png";
import portfolioLogoJoshua from "@/assets/portfolio-logo-joshua.jpg";

const showcaseProjects = [
  {
    title: "Joshua Design 3D Logo",
    category: "Brand Identity",
    desc: "Bold 3D typographic logo representing the Joshua Design brand.",
    image: portfolioLogoJoshua,
  },
  {
    title: "Luxury Brand Logo Collection",
    category: "Logo Design",
    desc: "A set of premium, modern logos designed for high-end brands.",
    image: portfolioLogos,
  },
  {
    title: "Trendz By Future – Brand Campaign",
    category: "Brand Identity",
    desc: "Complete visual branding and campaign design for Trendz By Future fashion brand.",
    image: portfolioTrendzBrand,
  },
  {
    title: "Corporate Identity and Branding",
    category: "Brand Identity",
    desc: "Full branding package including logo, business cards, and stationery.",
    image: portfolioBranding,
  },
  {
    title: "Pro Mods Social Media Design",
    category: "Social Media Graphics",
    desc: "Eye-catching social media graphic for gaming and tech brand promotion.",
    image: portfolioPromods,
  },
];

const DesignShowcase = () => {
  const [current, setCurrent] = useState(0);
  const { ref, isVisible } = useScrollAnimation();

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % showcaseProjects.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + showcaseProjects.length) % showcaseProjects.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const project = showcaseProjects[current];

  return (
    <section id="showcase" className="py-20 px-6 bg-card/50">
      <div ref={ref} className={`max-w-6xl mx-auto transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
        <p className="text-sm uppercase tracking-[0.3em] text-primary font-body mb-4 text-center">Showcase</p>
        <h2 className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-12 text-center">
          Design Showcase
        </h2>

        <div className="relative rounded-2xl overflow-hidden bg-background border border-border/50">
          {/* Image */}
          <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden">
            <img
              key={current}
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover animate-scale-in"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />

            {/* Info overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
              <span className="text-xs uppercase tracking-widest text-primary font-body">{project.category}</span>
              <h3 className="font-heading text-2xl md:text-4xl font-semibold text-primary-foreground mt-2">{project.title}</h3>
              <p className="font-body text-sm text-primary-foreground/70 mt-2 max-w-lg">{project.desc}</p>
              <button
                onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
                className="mt-4 px-6 py-2 rounded-full bg-primary text-primary-foreground font-body text-sm hover:bg-primary/90 transition-colors"
              >
                View Project
              </button>
            </div>
          </div>

          {/* Nav arrows */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/20 backdrop-blur-sm text-primary-foreground hover:bg-background/40 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/20 backdrop-blur-sm text-primary-foreground hover:bg-background/40 transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Dots */}
          <div className="absolute bottom-4 right-6 md:right-10 flex gap-2">
            {showcaseProjects.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${i === current ? "bg-primary w-6" : "bg-primary-foreground/40"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignShowcase;
