import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Palette, Film, PenTool, Camera, Type, Sparkles, Layout } from "lucide-react";

const designTools = [
  { name: "Adobe Photoshop", desc: "Photo editing, flyer design, social media graphics", icon: Palette },
  { name: "Adobe Illustrator", desc: "Logo design, brand identity, vector artwork", icon: PenTool },
  { name: "Adobe InDesign", desc: "Layout design, brochures, print media", icon: Layout },
  { name: "Canva", desc: "Quick social media designs and marketing materials", icon: Sparkles },
];

const videoTools = [
  { name: "Adobe Premiere Pro", desc: "Professional video editing and storytelling", icon: Film },
  { name: "CapCut", desc: "Social media video editing and short-form content", icon: Film },
];

const creativeSkills = [
  { name: "Graphic Design", icon: Palette },
  { name: "Branding & Visual Identity", icon: Type },
  { name: "Video Editing", icon: Film },
  { name: "Photo Retouching", icon: Camera },
  { name: "Copywriting", icon: PenTool },
  { name: "Script Writing", icon: PenTool },
];

const ToolCard = ({ tool }: { tool: { name: string; desc: string; icon: React.ElementType } }) => (
  <div className="p-4 rounded-xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-md transition-all duration-300">
    <div className="flex items-center gap-3">
      <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
        <tool.icon className="h-4 w-4 text-primary" />
      </div>
      <div className="min-w-0">
        <span className="font-body text-sm font-semibold text-foreground block">{tool.name}</span>
        <p className="font-body text-xs text-muted-foreground leading-snug">{tool.desc}</p>
      </div>
    </div>
  </div>
);

const Skills = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="skills" className="py-20 px-6 bg-muted/30">
      <div ref={ref} className={`max-w-5xl mx-auto transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
        <p className="text-sm uppercase tracking-[0.3em] text-primary font-body mb-4 text-center">Tools & Skills</p>
        <h2 className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-12 text-center">
          What I Work With
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {/* Design Tools */}
          <div className="lg:col-span-2">
            <h3 className="font-heading text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <Palette className="h-5 w-5 text-primary" /> Design Tools
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {designTools.map((tool) => (
                <ToolCard key={tool.name} tool={tool} />
              ))}
            </div>
          </div>

          {/* Video Tools */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <Film className="h-5 w-5 text-primary" /> Video Editing
            </h3>
            <div className="grid grid-cols-1 gap-3">
              {videoTools.map((tool) => (
                <ToolCard key={tool.name} tool={tool} />
              ))}
            </div>
          </div>
        </div>

        {/* Creative Skills */}
        <div>
          <h3 className="font-heading text-lg font-semibold text-foreground mb-4 flex items-center gap-2 justify-center">
            <Sparkles className="h-5 w-5 text-primary" /> Creative Skills
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {creativeSkills.map((skill) => (
              <div
                key={skill.name}
                className="p-3 rounded-xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-md transition-all duration-300 flex flex-col items-center gap-2 text-center"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <skill.icon className="h-5 w-5 text-primary" />
                </div>
                <span className="font-body text-xs font-semibold text-foreground leading-tight">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
