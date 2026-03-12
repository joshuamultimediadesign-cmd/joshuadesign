import { Palette, Video, Camera, PenTool, FileText, BookOpen } from "lucide-react";
import { useStaggerAnimation } from "@/hooks/useScrollAnimation";
import joshuaProfile from "@/assets/joshua-profile.jpg";

const skills = [
  { icon: Palette, label: "Graphic Design" },
  { icon: Video, label: "Video Editing" },
  { icon: Camera, label: "Photo Editing" },
  { icon: PenTool, label: "Branding" },
  { icon: FileText, label: "Copywriting" },
  { icon: BookOpen, label: "Script Writing" },
];

const About = () => {
  const { ref, visibleItems } = useStaggerAnimation();

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm uppercase tracking-[0.3em] text-primary font-body mb-4 text-center md:text-left">About</p>
        <h2 className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-10 text-center md:text-left">
          Meet Joshua
        </h2>

        <div className="flex flex-col md:flex-row gap-10 items-center mb-12">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden border-4 border-primary/20 shadow-lg">
              <img
                src={joshuaProfile}
                alt="Joshua — Creative Designer"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          {/* Bio Text */}
          <p className="font-body text-lg text-muted-foreground leading-relaxed text-center md:text-left">
            Joshua is a passionate multimedia creative and the founder of Joshua Design.
            With years of experience crafting compelling visuals, he helps businesses, brands,
            and entrepreneurs create strong visual identities that attract customers and build trust.
            From logo design to video editing, every project is approached with precision,
            creativity, and a deep understanding of what makes brands unforgettable.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {skills.map((skill, i) => (
            <div
              key={skill.label}
              data-stagger
              className={`flex items-center gap-3 p-4 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-500 ${
                visibleItems.has(i) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <skill.icon className="h-5 w-5 text-primary flex-shrink-0" />
              <span className="font-body text-sm text-foreground">{skill.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;