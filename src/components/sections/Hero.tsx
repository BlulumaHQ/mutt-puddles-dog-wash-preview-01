import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] md:min-h-[85vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Professional dog grooming studio"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/30" />
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
