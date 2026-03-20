import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import heroBg from "@/assets/hero-bg.jpg";
import heroBg2 from "@/assets/hero-bg-2.jpg";

const slides = [heroBg, heroBg2];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[90vh] md:min-h-[85vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <AnimatePresence mode="popLayout">
          <motion.img
            key={current}
            src={slides[current]}
            alt="Professional dog grooming studio"
            className="absolute inset-0 w-full h-full object-cover object-[82%_center] md:object-[90%_center]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/30" />
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === current ? "bg-primary w-8" : "bg-background/50"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      <div className="relative z-10 section-pad w-full">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-primary font-display font-bold text-sm uppercase tracking-widest mb-4"
          >
            Serving Tacoma Since 2007
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-bold text-background leading-[1.1] mb-6"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
          >
            Professional Grooming & Upscale Self-Serve Facilities
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-background/80 text-lg leading-relaxed mb-8 max-w-lg"
          >
            Treat your pet to a premium grooming experience or learn to groom like a pro at our fully-equipped self-service facility in Tacoma, WA.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link to="/contact-us" className="btn-primary text-base">
              Book Grooming
            </Link>
            <a href="tel:2535313387" className="btn-secondary text-base gap-2">
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
