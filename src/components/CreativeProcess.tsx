import { MessageSquare, Search, Palette, RefreshCw, Send } from "lucide-react";
import { useStaggerAnimation } from "@/hooks/useScrollAnimation";

const steps = [
  {
    icon: MessageSquare,
    title: "Project Discussion",
    desc: "I communicate with the client to understand the project goals, brand identity, and design needs.",
  },
  {
    icon: Search,
    title: "Research & Concept",
    desc: "I research the client's industry and develop creative design ideas and visual direction.",
  },
  {
    icon: Palette,
    title: "Design Creation",
    desc: "I create professional designs using Adobe Photoshop, Illustrator, and other creative software.",
  },
  {
    icon: RefreshCw,
    title: "Review & Revisions",
    desc: "Clients review the design and request revisions to ensure the final result meets expectations.",
  },
  {
    icon: Send,
    title: "Final Delivery",
    desc: "The client receives the final design files ready for print, social media, or marketing use.",
  },
];

const CreativeProcess = () => {
  const { ref, visibleItems } = useStaggerAnimation(0.1);

  return (
    <section className="py-20 px-6 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm uppercase tracking-[0.3em] text-primary font-body mb-4 text-center">
          How I Work
        </p>
        <h2 className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-4 text-center">
          My Creative Process
        </h2>
        <p className="font-body text-sm text-muted-foreground text-center max-w-xl mx-auto mb-16">
          From initial discussion to final delivery, here's how I bring your design vision to life.
        </p>

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={i}
                data-stagger
                className={`relative text-center group transition-all duration-700 ${
                  visibleItems.has(i) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              >
                {/* Connector line (hidden on first and on small screens) */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-px bg-border/50" />
                )}

                {/* Step number */}
                <span className="font-body text-[10px] uppercase tracking-widest text-muted-foreground mb-3 block">
                  Step {i + 1}
                </span>

                {/* Icon */}
                <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                  <Icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>

                <h3 className="font-heading text-base font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="font-body text-xs text-muted-foreground leading-relaxed">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CreativeProcess;
