import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Palette, Film, PenTool, Camera, Type, Sparkles } from "lucide-react";

const designTools = [
  { name: "Adobe Photoshop", desc: "Photo editing, flyer design, social media graphics", icon: Palette },
  { name: "Adobe Illustrator", desc: "Logo design, brand identity, vector artwork", icon: PenTool },
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

const Skills = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="skills" className="py-20 px-6 bg-muted/30">
      <div ref={ref} className={`max-w-6xl mx-auto transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
        <p className="text-sm uppercase tracking-[0.3em] text-primary font-body mb-4 text-center">Tools & Skills</p>
        <h2 className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-16 text-center">
          What I Work With
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Design Tools */}
          <div>
            <h3 className="font-heading text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <Palette className="h-5 w-5 text-primary" /> Design Tools
            </h3>
            <div className="space-y-4">
              {designTools.map((tool) => (
                <div key={tool.name} className="p-4 rounded-xl bg-card border border-border/50 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-1">
                    <tool.icon className="h-4 w-4 text-primary" />
                    <span className="font-body text-sm font-semibold text-foreground">{tool.name}</span>
                  </div>
                  <p className="font-body text-xs text-muted-foreground ml-7">{tool.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Video Tools */}
          <div>
            <h3 className="font-heading text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <Film className="h-5 w-5 text-primary" /> Video Editing
            </h3>
            <div className="space-y-4">
              {videoTools.map((tool) => (
                <div key={tool.name} className="p-4 rounded-xl bg-card border border-border/50 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-1">
                    <tool.icon className="h-4 w-4 text-primary" />
                    <span className="font-body text-sm font-semibold text-foreground">{tool.name}</span>
                  </div>
                  <p className="font-body text-xs text-muted-foreground ml-7">{tool.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Creative Skills */}
          <div>
            <h3 className="font-heading text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-primary" /> Creative Skills
            </h3>
            <div className="space-y-4">
              {creativeSkills.map((skill) => (
                <div key={skill.name} className="p-4 rounded-xl bg-card border border-border/50 hover:shadow-md transition-shadow flex items-center gap-3">
                  <skill.icon className="h-4 w-4 text-primary" />
                  <span className="font-body text-sm font-semibold text-foreground">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
