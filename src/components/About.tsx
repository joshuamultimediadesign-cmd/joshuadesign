import { Palette, Video, Camera, PenTool, FileText, BookOpen } from "lucide-react";

const skills = [
  { icon: Palette, label: "Graphic Design" },
  { icon: Video, label: "Video Editing" },
  { icon: Camera, label: "Photo Editing" },
  { icon: PenTool, label: "Branding" },
  { icon: FileText, label: "Copywriting" },
  { icon: BookOpen, label: "Script Writing" },
];

const About = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm uppercase tracking-[0.3em] text-primary font-body mb-4">About</p>
        <h2 className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-8">
          Meet Joshua
        </h2>
        <p className="font-body text-lg text-muted-foreground leading-relaxed max-w-3xl mb-12">
          Joshua is a passionate multimedia creative and the founder of Joshua Design.
          With years of experience crafting compelling visuals, he helps businesses, brands,
          and entrepreneurs create strong visual identities that attract customers and build trust.
          From logo design to video editing, every project is approached with precision,
          creativity, and a deep understanding of what makes brands unforgettable.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {skills.map((skill) => (
            <div
              key={skill.label}
              className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-colors"
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
