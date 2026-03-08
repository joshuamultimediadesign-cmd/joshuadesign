import portfolioLogo from "@/assets/portfolio-logo.jpg";
import portfolioFlyer from "@/assets/portfolio-flyer.jpg";
import portfolioBranding from "@/assets/portfolio-branding.jpg";
import portfolioSocial from "@/assets/portfolio-social.jpg";
import portfolioVideo from "@/assets/portfolio-video.jpg";
import portfolioEvent from "@/assets/portfolio-event.jpg";

const projects = [
  { title: "Modern Business Logo Design", category: "Logo Design", desc: "A sleek, modern logo for a growing tech brand.", image: portfolioLogo },
  { title: "Restaurant Promotional Flyer", category: "Flyer Design", desc: "Eye-catching flyer design for a restaurant launch event.", image: portfolioFlyer },
  { title: "Corporate Branding Package", category: "Brand Identity", desc: "Complete brand identity with stationery and guidelines.", image: portfolioBranding },
  { title: "Social Media Campaign Graphics", category: "Social Media Design", desc: "Cohesive social media visuals for a marketing campaign.", image: portfolioSocial },
  { title: "Professional Video Editing Project", category: "Video Editing", desc: "Cinematic video editing with color grading and effects.", image: portfolioVideo },
  { title: "Event Promotion Flyer", category: "Flyer Design", desc: "Bold, vibrant event flyer to maximize attendance.", image: portfolioEvent },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm uppercase tracking-[0.3em] text-primary font-body mb-4 text-center">Portfolio</p>
        <h2 className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-16 text-center">
          Selected Works
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group rounded-2xl overflow-hidden bg-card border border-border/50 hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300" />
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
