import { Sparkles, FileImage, Layers, Share2, Video, Camera, Building, PenTool, BookOpen } from "lucide-react";
import { useStaggerAnimation } from "@/hooks/useScrollAnimation";

const services = [
  { icon: Sparkles, title: "Logo Design", desc: "Unique, memorable logos that define your brand." },
  { icon: FileImage, title: "Flyer & Poster Design", desc: "Eye-catching print designs that grab attention." },
  { icon: Layers, title: "Brand Identity Design", desc: "Complete brand systems with consistency." },
  { icon: Share2, title: "Social Media Graphics", desc: "Scroll-stopping visuals for every platform." },
  { icon: Video, title: "Video Editing", desc: "Professional edits that tell compelling stories." },
  { icon: Camera, title: "Photo Editing", desc: "Polished, high-quality image retouching." },
  { icon: Building, title: "Business Branding", desc: "End-to-end branding for growth." },
  { icon: PenTool, title: "Creative Copywriting", desc: "Words that sell and inspire action." },
  { icon: BookOpen, title: "Script Writing", desc: "Engaging scripts for video and media." },
];

const Services = () => {
  const { ref, visibleItems } = useStaggerAnimation();

  return (
    <section id="services" className="py-24 px-6 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm uppercase tracking-[0.3em] text-primary font-body mb-4 text-center">Services</p>
        <h2 className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-4 text-center">
          What I Do
        </h2>
        <p className="font-body text-muted-foreground text-center mb-16 max-w-xl mx-auto">
          Professional creative services for businesses and brands looking to grow through strong visual identity.
        </p>

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={service.title}
              data-stagger
              className={`group p-6 rounded-2xl bg-background border border-border/50 hover:border-primary/40 hover:shadow-lg transition-all duration-500 ${
                visibleItems.has(i) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
