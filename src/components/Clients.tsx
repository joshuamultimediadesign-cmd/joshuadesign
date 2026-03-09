import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Building2, User, CalendarDays, Globe } from "lucide-react";

const clientTypes = [
  { label: "Local Businesses", icon: Building2 },
  { label: "Entrepreneurs", icon: User },
  { label: "Event Organizers", icon: CalendarDays },
  { label: "Online Brands", icon: Globe },
];

const Clients = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="clients" className="py-20 px-6">
      <div ref={ref} className={`max-w-5xl mx-auto text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
        <p className="text-sm uppercase tracking-[0.3em] text-primary font-body mb-4">Trusted By</p>
        <h2 className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-6">
          Clients & Brands
        </h2>
        <p className="font-body text-muted-foreground mb-12 max-w-2xl mx-auto">
          Joshua Design has proudly worked with a range of clients — from small startups to growing brands — delivering professional visual solutions.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {clientTypes.map((c) => (
            <div key={c.label} className="p-6 rounded-2xl bg-card border border-border/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <c.icon className="h-8 w-8 text-primary mx-auto mb-3" />
              <span className="font-body text-sm font-semibold text-foreground">{c.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
