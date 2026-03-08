import { Star, Quote } from "lucide-react";

const testimonials = [
  { text: "Joshua transformed our brand completely. The logo and designs he created made our business look very professional.", author: "Daniel O." },
  { text: "Excellent designer! Fast delivery and amazing creativity. Highly recommended.", author: "Grace A." },
  { text: "Our social media designs improved our brand image instantly. Joshua is truly talented.", author: "Michael T." },
  { text: "I've worked with many designers, but Joshua's attention to detail is outstanding.", author: "Sarah K." },
  { text: "Professional, creative, and easy to work with. The designs exceeded my expectations.", author: "David O." },
  { text: "The flyer designs Joshua created helped promote our event successfully.", author: "Esther M." },
  { text: "Very reliable and creative designer. I will definitely work with him again.", author: "Victor L." },
  { text: "Our brand identity now looks premium thanks to Joshua Design.", author: "Anthony J." },
  { text: "The video editing was smooth, professional, and high quality.", author: "Linda P." },
  { text: "Joshua is one of the best graphic designers I've worked with.", author: "Kelvin A." },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 px-6 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm uppercase tracking-[0.3em] text-primary font-body mb-4 text-center">Testimonials</p>
        <h2 className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-16 text-center">
          Client Love
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-background border border-border/50 hover:border-primary/30 transition-colors"
            >
              <Quote className="h-5 w-5 text-primary/40 mb-3" />
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">"{t.text}"</p>
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="h-3.5 w-3.5 fill-primary text-primary" />
                  ))}
                </div>
                <span className="text-xs font-body font-medium text-foreground">— {t.author}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
