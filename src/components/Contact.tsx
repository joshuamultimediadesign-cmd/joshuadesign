import { useState } from "react";
import { MessageCircle, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:joshuamultimediadesign@gmail.com?subject=Message from ${form.name}&body=${encodeURIComponent(form.message)}%0A%0AFrom: ${form.name} (${form.email})`;
    window.open(mailto);
    toast.success("Opening your email client...");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm uppercase tracking-[0.3em] text-primary font-body mb-4 text-center">Contact</p>
        <h2 className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-16 text-center">
          Let's Work Together
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="font-heading text-2xl font-semibold text-foreground mb-6">Get in Touch</h3>
            <div className="space-y-4 mb-8">
              <a href="mailto:joshuamultimediadesign@gmail.com" className="flex items-center gap-3 font-body text-sm text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-5 w-5 text-primary" />
                joshuamultimediadesign@gmail.com
              </a>
              <a href="tel:+2347059120709" className="flex items-center gap-3 font-body text-sm text-muted-foreground hover:text-primary transition-colors">
                <Phone className="h-5 w-5 text-primary" />
                +234 705 912 0709
              </a>
              <a href="tel:+2349069981120" className="flex items-center gap-3 font-body text-sm text-muted-foreground hover:text-primary transition-colors">
                <Phone className="h-5 w-5 text-primary" />
                +234 906 998 1120
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full font-body" asChild>
                <a href="https://wa.me/2347059120709" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-4 w-4" /> Chat on WhatsApp
                </a>
              </Button>
              <Button variant="outline" className="rounded-full font-body border-foreground/20 hover:bg-foreground/5" asChild>
                <a href="mailto:joshuamultimediadesign@gmail.com">
                  <Mail className="mr-2 h-4 w-4" /> Send Email
                </a>
              </Button>
              <Button variant="outline" className="rounded-full font-body border-foreground/20 hover:bg-foreground/5" asChild>
                <a href="tel:+2347059120709">
                  <Phone className="mr-2 h-4 w-4" /> Call Now
                </a>
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className="rounded-xl bg-card border-border/50 font-body"
            />
            <Input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              className="rounded-xl bg-card border-border/50 font-body"
            />
            <Textarea
              placeholder="Your Message"
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
              className="rounded-xl bg-card border-border/50 font-body resize-none"
            />
            <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl font-body">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
