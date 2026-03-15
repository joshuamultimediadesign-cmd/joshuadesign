import { useState, useEffect, useCallback } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import avatarDaniel from "@/assets/avatar-daniel.jpg";
import avatarGrace from "@/assets/avatar-grace.jpg";
import avatarMichael from "@/assets/avatar-michael.jpg";
import avatarSarah from "@/assets/avatar-sarah.jpg";
import avatarDavid from "@/assets/avatar-david.jpg";
import avatarEsther from "@/assets/avatar-esther.jpg";
import avatarVictor from "@/assets/avatar-victor.jpg";
import avatarAnthony from "@/assets/avatar-anthony.jpg";
import avatarLinda from "@/assets/avatar-linda.jpg";
import avatarKelvin from "@/assets/avatar-kelvin.jpg";

const testimonials = [
  { text: "Joshua transformed our brand completely. The logo and designs he created made our business look very professional.", author: "Daniel O.", avatar: avatarDaniel, project: "Logo & Brand Identity" },
  { text: "Exceptional flyer and social media designs that really captured our audience. Fast delivery and amazing creativity.", author: "Grace A.", avatar: avatarGrace, project: "Event Promotion & Social Media" },
  { text: "Our social media designs improved our brand image instantly. Joshua is truly talented and understands modern branding.", author: "Michael T.", avatar: avatarMichael, project: "Social Media Branding" },
  { text: "I've worked with many designers, but Joshua's attention to detail is outstanding. Every revision was handled perfectly.", author: "Sarah K.", avatar: avatarSarah, project: "Corporate Branding" },
  { text: "Professional, creative, and easy to work with. The designs exceeded my expectations every single time.", author: "David O.", avatar: avatarDavid, project: "Marketing Materials" },
  { text: "The flyer designs Joshua created helped promote our event successfully. We received so many compliments.", author: "Esther M.", avatar: avatarEsther, project: "Event Flyer Design" },
  { text: "Very reliable and creative designer. I will definitely work with him again for all my future projects.", author: "Victor L.", avatar: avatarVictor, project: "Brand Identity & Logo" },
  { text: "Our brand identity now looks premium thanks to Joshua Design. He truly elevated our visual presence.", author: "Anthony J.", avatar: avatarAnthony, project: "Full Brand Package" },
  { text: "The video editing was smooth, professional, and high quality. Joshua delivered exactly what we envisioned.", author: "Linda P.", avatar: avatarLinda, project: "Video Editing" },
  { text: "Joshua is one of the best graphic designers I've worked with. His creativity and professionalism are unmatched.", author: "Kelvin A.", avatar: avatarKelvin, project: "Logo Design & Flyers" },
];

const Testimonials = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [current, setCurrent] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const updateView = () => {
      if (window.innerWidth < 640) setItemsPerView(1);
      else if (window.innerWidth < 1024) setItemsPerView(2);
      else setItemsPerView(3);
    };
    updateView();
    window.addEventListener("resize", updateView);
    return () => window.removeEventListener("resize", updateView);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - itemsPerView);

  const next = useCallback(() => {
    setCurrent((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  // Auto-scroll
  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section id="testimonials" className="py-20 px-6 bg-card/50">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <p className="text-sm uppercase tracking-[0.3em] text-primary font-body mb-4 text-center">
          Testimonials
        </p>
        <h2 className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-4 text-center">
          Client Love
        </h2>
        <p className="font-body text-sm text-muted-foreground text-center max-w-xl mx-auto mb-12">
          Hear what clients say about working with Joshua Design.
        </p>

        {/* Carousel */}
        <div className="relative">
          {/* Nav arrows */}
          <button
            onClick={prev}
            className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-background border border-border/50 text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 shadow-sm"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-background border border-border/50 text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 shadow-sm"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Cards container */}
          <div className="overflow-hidden mx-6">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${current * (100 / itemsPerView)}%)`,
              }}
            >
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 px-3"
                  style={{ width: `${100 / itemsPerView}%` }}
                >
                  <div className="p-6 rounded-2xl bg-background border border-border/50 hover:border-primary/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                    <Quote className="h-5 w-5 text-primary/30 mb-4" />
                    <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                      "{t.text}"
                    </p>
                    <div className="flex items-center gap-3">
                      <img
                        src={t.avatar}
                        alt={t.author}
                        className="w-11 h-11 rounded-full object-cover border-2 border-primary/20"
                      />
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-heading font-semibold text-foreground">
                            {t.author}
                          </span>
                          <div className="flex gap-0.5">
                            {[...Array(5)].map((_, j) => (
                              <Star
                                key={j}
                                className="h-3 w-3 fill-primary text-primary"
                              />
                            ))}
                          </div>
                        </div>
                        <span className="text-[11px] font-body text-muted-foreground">
                          {t.project}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current
                    ? "bg-primary w-6"
                    : "bg-muted-foreground/30 w-2 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
