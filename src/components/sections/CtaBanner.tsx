import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";

const CtaBanner = () => {
  return (
    <section className="bg-foreground">
      <div className="section-pad text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-4xl font-bold text-background mb-4"
        >
          Ready to Pamper Your Pet?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-background/70 mb-8 max-w-lg mx-auto"
        >
          Conveniently located in Tacoma, WA. Call us today for further details or stop by for a visit!
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link to="/contact-us" className="btn-primary text-base">
            Contact Us
          </Link>
          <a href="tel:2535313387" className="btn-secondary text-base gap-2">
            <Phone className="w-5 h-5" />
            (253) 531-3387
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaBanner;
