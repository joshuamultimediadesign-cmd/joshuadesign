import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Can you design logos and branding for my business?",
    a: "Yes. Joshua Design provides professional logo design and full brand identity services for businesses and entrepreneurs.",
  },
  {
    q: "Can you create flyers for events or promotions?",
    a: "Yes. I design promotional flyers, posters, and marketing graphics for events, businesses, and social media campaigns.",
  },
  {
    q: "How long does a design project usually take?",
    a: "Most projects are completed within a few days depending on the complexity and revisions required.",
  },
  {
    q: "Can I request revisions to my design?",
    a: "Yes. Clients can request revisions to ensure the final design meets their expectations.",
  },
  {
    q: "Do you also edit videos and photos?",
    a: "Yes. Joshua Design provides professional video editing and photo editing services.",
  },
  {
    q: "How can I contact you to start a project?",
    a: "You can contact Joshua Design through WhatsApp or email using the contact section of the website.",
  },
];

const FAQ = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="faq" className="py-20 px-6">
      <div ref={ref} className={`max-w-3xl mx-auto transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
        <p className="text-sm uppercase tracking-[0.3em] text-primary font-body mb-4 text-center">FAQ</p>
        <h2 className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-12 text-center">
          Frequently Asked Questions
        </h2>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="rounded-2xl border border-border/50 bg-card px-6 overflow-hidden"
            >
              <AccordionTrigger className="font-body text-sm font-semibold text-foreground hover:text-primary py-5 hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="font-body text-sm text-muted-foreground pb-5 leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
