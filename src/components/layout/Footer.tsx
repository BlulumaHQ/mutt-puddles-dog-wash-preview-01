import { Link } from "react-router-dom";
import { Phone, MapPin } from "lucide-react";

const quickLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about-us" },
  { label: "Services", path: "/services" },
  { label: "Testimonials", path: "/testimonials" },
  { label: "FAQ", path: "/frequently-asked-questions" },
  { label: "Contact Us", path: "/contact-us" },
  { label: "Tips", path: "/tips" },
];

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div>
            <h3 className="font-display text-xl font-bold mb-4">
              Mutt Puddles<span className="text-primary"> Dog Wash</span>
            </h3>
            <p className="text-background/70 text-sm leading-relaxed max-w-xs">
              Quality pet grooming and upscale self-service dog wash facility in Tacoma, WA. Professional tools, clean tubs, and expert staff since 2007.
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider mb-4 text-background/50">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm text-background/70 hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider mb-4 text-background/50">Contact</h4>
            <div className="flex flex-col gap-3 text-sm text-background/70">
              <a href="tel:2535313387" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="w-4 h-4 shrink-0" />
                <span className="font-tabular-nums">(253) 531-3387</span>
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                <span>605 156th St E, Tacoma, WA 98445</span>
              </div>
              <p className="text-background/50 text-xs mt-2">Emergency Hours Available Upon Request</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-background/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-background/40">
            © {new Date().getFullYear()} Mutt Puddles Dog Wash LLC | Website Launch by{" "}
            <a href="https://swiftlift.app" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors underline">
              SwiftLift
            </a>
          </p>
          <div className="flex items-center gap-3">
            <img src="https://muttpuddlesdogwashwa.com/wp-content/plugins/Contact-Form-7/images/visa.jpg" alt="Visa" className="h-5 rounded-sm" />
            <img src="https://muttpuddlesdogwashwa.com/wp-content/plugins/Contact-Form-7/images/mastercard.jpg" alt="Mastercard" className="h-5 rounded-sm" />
            <img src="https://muttpuddlesdogwashwa.com/wp-content/plugins/Contact-Form-7/images/americanexpress.jpg" alt="American Express" className="h-5 rounded-sm" />
            <img src="https://muttpuddlesdogwashwa.com/wp-content/plugins/Contact-Form-7/images/discover.jpg" alt="Discover" className="h-5 rounded-sm" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
