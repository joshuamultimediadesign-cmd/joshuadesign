import portfolioLogos from "@/assets/portfolio-logos.jpg";
import portfolioFlyers from "@/assets/portfolio-flyers.jpg";
import portfolioSocial from "@/assets/portfolio-socialmedia.jpg";
import portfolioBranding from "@/assets/portfolio-branding-new.jpg";
import portfolioVideo from "@/assets/portfolio-videoedit.jpg";
import portfolioPhoto from "@/assets/portfolio-photoediting.jpg";
import { useStaggerAnimation } from "@/hooks/useScrollAnimation";

const projects = [
  { title: "Luxury Brand Logo Collection", category: "Logo Design", desc: "A set of premium, modern logos designed for high-end brands.", image: portfolioLogos },
  { title: "Restaurant Event Flyer Designs", category: "Flyer & Poster Design", desc: "Creative flyers for restaurant promotions and events.", image: portfolioFlyers },
  { title: "Social Media Branding Package", category: "Social Media Graphics", desc: "Engaging social media visuals to boost brand presence online.", image: portfolioSocial },
  { title: "Corporate Identity and Branding", category: "Brand Identity", desc: "Full branding package including logo, business cards, and stationery.", image: portfolioBranding },
  { title: "Event Video Highlights", category: "Video Editing", desc: "Professionally edited video highlights for corporate events.", image: portfolioVideo },
  { title: "Photo Editing Portfolio", category: "Photo Editing", desc: "Retouched and enhanced images for clients' marketing campaigns.", image: portfolioPhoto },
];

const Portfolio = () => {
  const { ref, visibleItems } = useStaggerAnimation();

  return (
    <section id="portfolio" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm uppercase tracking-[0.3em] text-primary font-body mb-4 text-center">Portfolio</p>
        <h2 className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-16 text-center">
          Selected Works
        </h2>

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div
              key={project.title}
              data-stagger
              className={`group rounded-2xl overflow-hidden bg-card border border-border/50 hover:shadow-xl transition-all duration-500 ${
                visibleItems.has(i) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
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
              <div className="p-5">
                <span className="text-xs uppercase tracking-widest text-primary font-body">{project.category}</span>
                <h3 className="font-heading text-lg font-semibold text-foreground mt-1 mb-1">{project.title}</h3>
                <p className="font-body text-sm text-muted-foreground">{project.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
