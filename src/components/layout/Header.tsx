import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about-us" },
  { label: "Services", path: "/services" },
  { label: "Testimonials", path: "/testimonials" },
  { label: "Tips", path: "/tips" },
  { label: "FAQ", path: "/frequently-asked-questions" },
  { label: "Contact", path: "/contact-us" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm" style={{ boxShadow: '0 0 0 1px rgba(0,0,0,0.05), 0 2px 4px rgba(0,0,0,0.05)' }}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="font-display text-lg md:text-xl font-bold text-foreground tracking-tight">
          Mutt Puddles<span className="text-primary"> Dog Wash</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-3 py-2 text-sm font-medium rounded-btn transition-colors duration-150 ${
                location.pathname === link.path
                  ? "text-primary"
                  : "text-foreground/70 hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="tel:2535313387"
            className="btn-secondary hidden sm:inline-flex !px-5 !py-2.5 text-sm gap-2"
          >
            <Phone className="w-4 h-4" />
            <span className="font-tabular-nums">(253) 531-3387</span>
          </a>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-btn text-foreground hover:bg-accent transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-background border-t border-border">
          <nav className="flex flex-col px-4 py-4 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={`px-4 py-3 text-sm font-medium rounded-btn transition-colors ${
                  location.pathname === link.path
                    ? "text-primary bg-accent"
                    : "text-foreground/70 hover:bg-accent"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:2535313387"
              className="btn-secondary mt-2 text-sm gap-2 justify-center"
            >
              <Phone className="w-4 h-4" />
              (253) 531-3387
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
