import { Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 px-6 border-t border-border/50">
      <div className="max-w-5xl mx-auto text-center">
        <h3 className="font-heading text-2xl font-semibold text-foreground mb-1">Joshua Design</h3>
        <p className="font-body text-sm text-muted-foreground mb-6">Creative Graphic Designer</p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6 text-sm font-body text-muted-foreground">
          <a href="mailto:joshuamultimediadesign@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Mail className="h-4 w-4" /> joshuamultimediadesign@gmail.com
          </a>
          <a href="tel:+2347059120709" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Phone className="h-4 w-4" /> +234 705 912 0709
          </a>
        </div>

        <p className="font-heading text-sm italic text-muted-foreground mb-4">
          "Creative design that brings brands to life."
        </p>
        <p className="font-body text-xs text-muted-foreground/60">
          © {new Date().getFullYear()} Joshua Design. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
