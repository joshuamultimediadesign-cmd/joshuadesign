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
import portfolioBAPortrait from "@/assets/portfolio-ba-portrait.jpg";
import portfolioBASkin from "@/assets/portfolio-ba-skin.jpg";
import portfolioBACouple from "@/assets/portfolio-ba-couple.jpg";
import portfolioResumeDesign from "@/assets/portfolio-resume-design.png";
import portfolioTrendzLogo from "@/assets/portfolio-trendz-logo.png";
import portfolioAqeelFlyer from "@/assets/portfolio-aqeel-flyer.png";
import portfolioPromods from "@/assets/portfolio-promods.png";
import portfolioTrendzBrand from "@/assets/portfolio-trendz-brand.png";
import { useStaggerAnimation } from "@/hooks/useScrollAnimation";
import PortfolioLightbox from "./PortfolioLightbox";
import BeforeAfterSlider from "./BeforeAfterSlider";
import { Eye, Play, MessageCircle } from "lucide-react";

type Category = "all" | "brand" | "client" | "logo" | "flyer" | "social" | "video" | "photo";

interface Project {
  title: string;
  category: string;
  desc: string;
  image: string;
  type: "brand" | "client";
  filterTags: string[];
  clientGoal?: string;
  approach?: string;
  tools?: string[];
}

const projects: Project[] = [
  // ---- JOSHUA DESIGN BRAND ----
  {
    title: "Joshua Design 3D Logo",
    category: "Brand Identity",
    desc: "Bold 3D typographic logo representing the Joshua Design brand.",
    image: portfolioLogoJoshua,
    type: "brand",
    filterTags: ["logo"],
    approach: "Crafted a bold 3D typographic wordmark to establish a strong, memorable brand identity.",
    tools: ["Adobe Illustrator", "Adobe Photoshop"],
  },
  {
    title: "Joshua Design Services Banner",
    category: "Marketing Visual",
    desc: "Professional services banner showcasing all Joshua Design offerings.",
    image: portfolioBannerJoshua,
    type: "brand",
    filterTags: ["social"],
    approach: "Designed a comprehensive visual layout highlighting all creative services offered.",
    tools: ["Adobe Photoshop"],
  },
  {
    title: "Happy New Month – December",
    category: "Social Media Graphics",
    desc: "Creative social media post for monthly brand engagement.",
    image: portfolioSocialJoshua,
    type: "brand",
    filterTags: ["social"],
    approach: "Created festive, on-brand social media content to maintain audience engagement.",
    tools: ["Adobe Photoshop", "Canva"],
  },
  {
    title: "Joshua Design Resume Template",
    category: "Brand Identity",
    desc: "Professional resume/CV template designed for the Joshua Design brand.",
    image: portfolioResumeDesign,
    type: "brand",
    filterTags: [],
    approach: "Created a clean, professional resume layout showcasing skills and experience.",
    tools: ["Adobe Photoshop", "Adobe InDesign"],
  },
  {
    title: "Luxury Brand Logo Collection",
    category: "Logo Design",
    desc: "A set of premium, modern logos designed for high-end brands.",
    image: portfolioLogos,
    type: "brand",
    filterTags: ["logo"],
    approach: "Developed elegant, minimal logomarks that convey luxury and professionalism.",
    tools: ["Adobe Illustrator"],
  },
  {
    title: "Social Media Branding Package",
    category: "Social Media Graphics",
    desc: "Engaging social media visuals to boost brand presence online.",
    image: portfolioSocial,
    type: "brand",
    filterTags: ["social"],
    approach: "Created a cohesive visual system for consistent social media branding.",
    tools: ["Adobe Photoshop", "Canva"],
  },
  {
    title: "Product Design Collection",
    category: "Product Design",
    desc: "Premium product packaging and mockup designs for luxury brands.",
    image: portfolioProduct,
    type: "brand",
    filterTags: [],
    approach: "Designed realistic product mockups and packaging that elevate brand perception.",
    tools: ["Adobe Photoshop", "Adobe Illustrator"],
  },
  {
    title: "Portrait Photo Editing",
    category: "Photo Editing",
    desc: "Professional portrait retouching and color grading for human photography.",
    image: portfolioPortraitEditing,
    type: "brand",
    filterTags: ["photo"],
    approach: "Applied professional skin retouching, color grading, and enhancement techniques.",
    tools: ["Adobe Photoshop", "Adobe Lightroom"],
  },
  // ---- CLIENT PROJECTS ----
  {
    title: "Trendz By Future – Logo Design",
    category: "Logo Design",
    desc: "Elegant luxury fashion brand logo for Trendz By Future.",
    image: portfolioTrendzLogo,
    type: "client",
    filterTags: ["logo"],
    clientGoal: "Establish a modern, fashionable brand identity for a luxury clothing line.",
    approach: "Created a sleek, gold-themed emblem with fashion iconography and royal crown motifs.",
    tools: ["Adobe Illustrator", "Adobe Photoshop"],
  },
  {
    title: "Trendz By Future – Brand Campaign",
    category: "Brand Identity",
    desc: "Full visual branding campaign for Trendz By Future fashion brand.",
    image: portfolioTrendzBrand,
    type: "client",
    filterTags: ["logo", "social"],
    clientGoal: "Create a premium brand campaign showcasing luxury fashion and lifestyle.",
    approach: "Designed a cinematic brand visual with models, accessories, and elegant typography.",
    tools: ["Adobe Photoshop", "Adobe Illustrator"],
  },
  {
    title: "Aqeel Academy Flyer Design",
    category: "Flyer Design",
    desc: "Academic package flyer design for Aqeel Academy educational institution.",
    image: portfolioAqeelFlyer,
    type: "client",
    filterTags: ["flyer"],
    clientGoal: "Promote their year one academic package to new students.",
    approach: "Used clean layout with molecular graphics and bold typography for academic appeal.",
    tools: ["Adobe Photoshop", "Adobe InDesign"],
  },
  {
    title: "Pro Mods Social Media Design",
    category: "Social Media Graphics",
    desc: "Eye-catching social media graphic for gaming and tech brand.",
    image: portfolioPromods,
    type: "client",
    filterTags: ["social"],
    clientGoal: "Create an attention-grabbing social media post for gaming mod promotions.",
    approach: "Used futuristic neon aesthetics with 3D elements for maximum visual impact.",
    tools: ["Adobe Photoshop"],
  },
  {
    title: "Urban Taste BBQ & Grills Menu",
    category: "Flyer Design",
    desc: "Premium restaurant menu design for Urban Taste BBQ & Grills.",
    image: portfolioClientFlyer,
    type: "client",
    filterTags: ["flyer"],
    clientGoal: "Create an appetizing menu that showcases their food offerings.",
    approach: "Used bold typography and warm color palette to evoke appetite appeal.",
    tools: ["Adobe Photoshop", "Adobe Illustrator"],
  },
  {
    title: "Apst Iren Emmanuel Birthday",
    category: "Event Design",
    desc: "Stunning event poster design celebrating a special birthday.",
    image: portfolioClientEvent,
    type: "client",
    filterTags: ["flyer"],
    clientGoal: "Design a memorable birthday celebration poster.",
    approach: "Combined elegant typography with vibrant imagery for a celebratory feel.",
    tools: ["Adobe Photoshop"],
  },
  {
    title: "Harris Pizza Hiring Flyer",
    category: "Flyer Design",
    desc: "Eye-catching hiring flyer for Harris Pizza restaurant.",
    image: portfolioClientHiring,
    type: "client",
    filterTags: ["flyer"],
    clientGoal: "Attract new employees with an engaging hiring flyer.",
    approach: "Used strong color contrast and clear call-to-action for maximum impact.",
    tools: ["Adobe Photoshop"],
  },
  {
    title: "Trendz By Future Logo",
    category: "Logo Design",
    desc: "Elegant fashion brand logo for Trendz By Future.",
    image: portfolioClientLogo,
    type: "client",
    filterTags: ["logo"],
    clientGoal: "Establish a modern, fashionable brand identity.",
    approach: "Created a sleek, contemporary wordmark reflecting current fashion trends.",
    tools: ["Adobe Illustrator"],
  },
  {
    title: "De Royal Painters Branding",
    category: "Brand Identity",
    desc: "Complete branding design for De Royal Painters.",
    image: portfolioClientPainters,
    type: "client",
    filterTags: ["logo"],
    clientGoal: "Build a professional brand identity for their painting business.",
    approach: "Developed regal branding with crown motifs and sophisticated color palette.",
    tools: ["Adobe Illustrator", "Adobe Photoshop"],
  },
  {
    title: "TeamWork Certificate Design",
    category: "Certificate Design",
    desc: "Professional certificate of completion design.",
    image: portfolioClientCertificate,
    type: "client",
    filterTags: [],
    clientGoal: "Create official-looking certificates for program graduates.",
    approach: "Used formal layout with elegant borders and typography for credibility.",
    tools: ["Adobe Illustrator"],
  },
  {
    title: "Restaurant Event Flyer Designs",
    category: "Flyer & Poster Design",
    desc: "Creative flyers for restaurant promotions and events.",
    image: portfolioFlyers,
    type: "client",
    filterTags: ["flyer"],
    clientGoal: "Promote weekend food festival.",
    approach: "Used bold typography and strong color contrast to attract attention.",
    tools: ["Adobe Photoshop", "Adobe Illustrator"],
  },
  {
    title: "Corporate Identity and Branding",
    category: "Brand Identity",
    desc: "Full branding package including logo, business cards, and stationery.",
    image: portfolioBranding,
    type: "client",
    filterTags: ["logo"],
    clientGoal: "Unify all brand materials under one cohesive identity.",
    approach: "Developed complete brand guidelines with consistent visual language.",
    tools: ["Adobe Illustrator", "Adobe Photoshop"],
  },
  {
    title: "Event Video Highlights",
    category: "Video Editing",
    desc: "Professionally edited video highlights for corporate events.",
    image: portfolioVideo,
    type: "client",
    filterTags: ["video"],
    clientGoal: "Create a compelling recap video of their corporate event.",
    approach: "Applied cinematic editing with dynamic transitions and color grading.",
    tools: ["Adobe Premiere Pro", "CapCut"],
  },
];

const filters: { label: string; value: Category }[] = [
  { label: "All Work", value: "all" },
  { label: "Joshua Design", value: "brand" },
  { label: "Client Projects", value: "client" },
  { label: "Logo Design", value: "logo" },
  { label: "Flyer Design", value: "flyer" },
  { label: "Social Media", value: "social" },
  { label: "Video Editing", value: "video" },
  { label: "Photo Editing", value: "photo" },
];

const Portfolio = () => {
  const [active, setActive] = useState<Category>("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [expandedProject, setExpandedProject] = useState<number | null>(null);
  const { ref, visibleItems } = useStaggerAnimation();

  const filtered = active === "all"
    ? projects
    : active === "brand" || active === "client"
      ? projects.filter((p) => p.type === active)
      : projects.filter((p) => p.filterTags.includes(active));

  const lightboxImages = filtered.map((p) => ({ src: p.image, title: p.title, category: p.category }));

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

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
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => { setActive(f.value); setExpandedProject(null); }}
              className={`px-4 py-2 rounded-full font-body text-xs sm:text-sm transition-all duration-300 ${
                active === f.value
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-card border border-border/50 text-muted-foreground hover:text-foreground hover:border-foreground/30"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Joshua Design Video Showreel */}
        {(active === "all" || active === "brand" || active === "video") && (
          <div className="mb-12">
            <p className="text-sm uppercase tracking-[0.3em] text-primary font-body mb-6 text-center flex items-center justify-center gap-2">
              <Play className="w-4 h-4" /> Joshua Design Video Showreel
            </p>
            <div className="max-w-3xl mx-auto rounded-2xl overflow-hidden border border-border/50 bg-card">
              <video
                controls
                className="w-full aspect-video"
                poster={portfolioLogoJoshua}
                preload="metadata"
              >
                <source src="/videos/joshua-showreel.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        )}

        {/* Before/After Section for Photo Editing */}
        {(active === "all" || active === "photo") && (
          <div className="mb-12">
            <p className="text-sm uppercase tracking-[0.3em] text-primary font-body mb-6 text-center">Before & After</p>
            <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <BeforeAfterSlider before={portfolioBAPortrait} after={portfolioBAPortrait} title="Portrait Enhancement" />
              <BeforeAfterSlider before={portfolioBASkin} after={portfolioBASkin} title="Skin Retouching" />
              <BeforeAfterSlider before={portfolioBACouple} after={portfolioBACouple} title="Photo Retouching" />
            </div>
          </div>
        )}

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <div
              key={`${project.title}-${i}`}
              data-stagger
              className={`group rounded-2xl overflow-hidden bg-card border border-border/50 hover:shadow-xl transition-all duration-500 ${
                visibleItems.has(i) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <div
                className="relative overflow-hidden aspect-[4/3] cursor-pointer"
                onClick={() => openLightbox(i)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/60 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="text-center px-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <Eye className="w-8 h-8 text-primary-foreground mx-auto mb-2" />
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

                {/* Expandable case study */}
                <button
                  onClick={() => setExpandedProject(expandedProject === i ? null : i)}
                  className="font-body text-xs text-primary hover:text-primary/80 mt-3 transition-colors"
                >
                  {expandedProject === i ? "Hide Details ↑" : "View Details →"}
                </button>

                <div className={`overflow-hidden transition-all duration-500 ${expandedProject === i ? "max-h-80 mt-3 opacity-100" : "max-h-0 opacity-0"}`}>
                  {project.clientGoal && (
                    <div className="mb-2">
                      <span className="font-body text-xs font-semibold text-foreground">Client Goal:</span>
                      <p className="font-body text-xs text-muted-foreground">{project.clientGoal}</p>
                    </div>
                  )}
                  {project.approach && (
                    <div className="mb-2">
                      <span className="font-body text-xs font-semibold text-foreground">Design Approach:</span>
                      <p className="font-body text-xs text-muted-foreground">{project.approach}</p>
                    </div>
                  )}
                  {project.tools && (
                    <div className="mb-3">
                      <span className="font-body text-xs font-semibold text-foreground">Tools Used:</span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {project.tools.map((tool) => (
                          <span key={tool} className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary font-body">{tool}</span>
                        ))}
                      </div>
                    </div>
                  )}
                  {/* CTA */}
                  <a
                    href={`https://wa.me/2347059120709?text=${encodeURIComponent(`Hello Joshua, I saw your "${project.title}" project and I would like to discuss a similar design.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary text-primary-foreground font-body text-xs hover:bg-primary/90 transition-colors"
                  >
                    <MessageCircle className="w-3 h-3" />
                    Need a design like this?
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <PortfolioLightbox
        images={lightboxImages}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </section>
  );
};

export default Portfolio;
