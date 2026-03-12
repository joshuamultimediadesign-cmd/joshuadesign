import { useState } from "react";
import portfolioLogos from "@/assets/portfolio-logos.jpg";
import portfolioFlyers from "@/assets/portfolio-flyers.jpg";
import portfolioSocial from "@/assets/portfolio-socialmedia.jpg";
import portfolioBranding from "@/assets/portfolio-branding-new.jpg";
import portfolioVideo from "@/assets/portfolio-videoedit.jpg";
import portfolioProduct from "@/assets/portfolio-productdesign.jpg";
import portfolioPortraitEditing from "@/assets/portfolio-portrait-editing.jpg";
import portfolioLogoJoshua from "@/assets/portfolio-logo-joshua.jpg";
import portfolioBannerJoshua from "@/assets/portfolio-banner-joshua.jpg";
import portfolioSocialJoshua from "@/assets/portfolio-social-joshua.jpg";
import portfolioClientFlyer from "@/assets/portfolio-client-flyer.jpg";
import portfolioClientEvent from "@/assets/portfolio-client-event.jpg";
import portfolioClientHiring from "@/assets/portfolio-client-hiring.png";
import portfolioClientLogo from "@/assets/portfolio-client-logo.png";
import portfolioClientPainters from "@/assets/portfolio-client-painters.png";
import portfolioClientCertificate from "@/assets/portfolio-client-certificate.png";
import { useStaggerAnimation } from "@/hooks/useScrollAnimation";

type Category = "all" | "brand" | "client";

interface Project {
  title: string;
  category: string;
  desc: string;
  image: string;
  type: "brand" | "client";
}

const projects: Project[] = [
  // Joshua Design Brand Projects
  { title: "Joshua Design 3D Logo", category: "Brand Identity", desc: "Bold 3D typographic logo representing the Joshua Design brand.", image: portfolioLogoJoshua, type: "brand" },
  { title: "Joshua Design Services Banner", category: "Marketing Visual", desc: "Professional services banner showcasing all Joshua Design offerings.", image: portfolioBannerJoshua, type: "brand" },
  { title: "Happy New Month – December", category: "Social Media Graphics", desc: "Creative social media post for monthly brand engagement.", image: portfolioSocialJoshua, type: "brand" },
  { title: "Luxury Brand Logo Collection", category: "Logo Design", desc: "A set of premium, modern logos designed for high-end brands.", image: portfolioLogos, type: "brand" },
  { title: "Social Media Branding Package", category: "Social Media Graphics", desc: "Engaging social media visuals to boost brand presence online.", image: portfolioSocial, type: "brand" },
  { title: "Product Design Collection", category: "Product Design", desc: "Premium product packaging and mockup designs for luxury brands.", image: portfolioProduct, type: "brand" },
  { title: "Portrait Photo Editing", category: "Photo Editing", desc: "Professional portrait retouching and color grading for human photography.", image: portfolioPortraitEditing, type: "brand" },

  // Client Projects
  { title: "Urban Taste BBQ & Grills Menu", category: "Flyer Design", desc: "Premium restaurant menu design for Urban Taste BBQ & Grills.", image: portfolioClientFlyer, type: "client" },
  { title: "Apst Iren Emmanuel Birthday", category: "Event Design", desc: "Stunning event poster design celebrating a special birthday.", image: portfolioClientEvent, type: "client" },
  { title: "Harris Pizza Hiring Flyer", category: "Flyer Design", desc: "Eye-catching hiring flyer for Harris Pizza restaurant.", image: portfolioClientHiring, type: "client" },
  { title: "Trendz By Future Logo", category: "Logo Design", desc: "Elegant fashion brand logo for Trendz By Future.", image: portfolioClientLogo, type: "client" },
  { title: "De Royal Painters Branding", category: "Brand Identity", desc: "Complete branding design for De Royal Painters.", image: portfolioClientPainters, type: "client" },
  { title: "TeamWork Certificate Design", category: "Certificate Design", desc: "Professional certificate of completion design.", image: portfolioClientCertificate, type: "client" },
  { title: "Restaurant Event Flyer Designs", category: "Flyer & Poster Design", desc: "Creative flyers for restaurant promotions and events.", image: portfolioFlyers, type: "client" },
  { title: "Corporate Identity and Branding", category: "Brand Identity", desc: "Full branding package including logo, business cards, and stationery.", image: portfolioBranding, type: "client" },
  { title: "Event Video Highlights", category: "Video Editing", desc: "Professionally edited video highlights for corporate events.", image: portfolioVideo, type: "client" },
];

const filters: { label: string; value: Category }[] = [
  { label: "All Work", value: "all" },
  { label: "Joshua Design", value: "brand" },
  { label: "Client Projects", value: "client" },
];

const Portfolio = () => {
  const [active, setActive] = useState<Category>("all");
  const { ref, visibleItems } = useStaggerAnimation();

  const filtered = active === "all" ? projects : projects.filter((p) => p.type === active);

  return (
    <section id="portfolio" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm uppercase tracking-[0.3em] text-primary font-body mb-4 text-center">Portfolio</p>
        <h2 className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-4 text-center">
          Selected Works
        </h2>

        {active === "brand" && (
          <p className="font-body text-sm text-muted-foreground text-center max-w-2xl mx-auto mb-4">
            These are original designs created for my personal brand Joshua Design, showcasing my creative direction, branding style, and design identity.
          </p>
        )}
        {active === "client" && (
          <p className="font-body text-sm text-muted-foreground text-center max-w-2xl mx-auto mb-4">
            These projects were created for businesses, brands, and clients who trusted Joshua Design to develop professional visual designs for their companies.
          </p>
        )}

        {/* Filter Buttons */}
        <div className="flex justify-center gap-3 mb-12">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActive(f.value)}
              className={`px-5 py-2 rounded-full font-body text-sm transition-all duration-300 ${
                active === f.value
                  ? "bg-primary text-primary-foreground"
                  : "bg-card border border-border/50 text-muted-foreground hover:text-foreground hover:border-foreground/30"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
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
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs uppercase tracking-widest text-primary font-body">{project.category}</span>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-body ${
                    project.type === "brand" ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"
                  }`}>
                    {project.type === "brand" ? "Joshua Design" : "Client"}
                  </span>
                </div>
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
