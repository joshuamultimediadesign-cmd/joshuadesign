import { MessageCircle, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[85vh] flex items-center justify-center px-6 pt-16 overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto text-center animate-fade-in-up">
        <p className="text-sm font-body uppercase tracking-[0.3em] text-muted-foreground mb-6">
          Joshua Design Studio
        </p>
        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-semibold leading-[1.1] tracking-tight text-foreground mb-8">
          Design That Makes Your Brand{" "}
          <span className="text-primary italic">Stand Out</span>
        </h1>
        <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
          Professional graphic design, video editing, branding, and creative solutions
          that help businesses look powerful and unforgettable.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-6 text-base font-body"
            onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
          >
            View Portfolio
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full px-8 py-6 text-base font-body border-foreground/20 hover:bg-foreground/5"
            asChild
          >
            <a href="https://wa.me/2347059120709" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" />
              Chat on WhatsApp
            </a>
          </Button>
        </div>
      </div>

      <button
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
      >
        <ArrowDown className="h-6 w-6" />
      </button>
    </section>
  );
};

export default Hero;
