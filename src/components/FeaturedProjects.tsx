import portfolioLogos from "@/assets/portfolio-logos.jpg";
import portfolioBranding from "@/assets/portfolio-branding-new.jpg";
import portfolioSocial from "@/assets/portfolio-socialmedia.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const featured = [
  { title: "Luxury Brand Logo Collection", category: "Logo Design", image: portfolioLogos },
  { title: "Corporate Identity and Branding", category: "Brand Identity", image: portfolioBranding },
  { title: "Social Media Branding Package", category: "Social Media Graphics", image: portfolioSocial },
];

const FeaturedProjects = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 px-6 bg-muted/30">
      <div ref={ref} className={`max-w-6xl mx-auto transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
        <p className="text-sm uppercase tracking-[0.3em] text-primary font-body mb-4 text-center">Featured</p>
        <h2 className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-16 text-center">
          Best Works
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {featured.map((project) => (
            <a
              key={project.title}
              href="#portfolio"
              className="group rounded-2xl overflow-hidden bg-card border border-border/50 hover:shadow-xl transition-all duration-500"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/60 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="text-center px-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-xs uppercase tracking-widest text-primary-foreground/80 font-body">{project.category}</span>
                    <h3 className="font-heading text-lg font-semibold text-primary-foreground mt-1">{project.title}</h3>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
