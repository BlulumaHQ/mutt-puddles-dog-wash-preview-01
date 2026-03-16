import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Sparkles, Bath } from "lucide-react";

const ServiceCards = () => {
  return (
    <section className="section-pad">
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4"
        >
          Our Dog Grooming Services
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground max-w-2xl mx-auto text-lg"
        >
          Whether you prefer hands-on DIY grooming or professional care, we have the perfect option for your pet.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="card-service"
        >
          <div className="w-12 h-12 rounded-btn bg-primary/10 flex items-center justify-center mb-2">
            <Bath className="w-6 h-6 text-primary" />
          </div>
          <h3 className="font-display text-2xl font-bold text-foreground">Self-Service Wash</h3>
          <p className="text-muted-foreground leading-relaxed">
            Our facility offers clean tubs, towels, shampoos, conditioners, and perfumes. Professional grooming tools and tables are all included. Our staff will assist you through the entire process.
          </p>
          <ul className="space-y-2 text-sm text-foreground/80">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
              Top-of-the-line tubs & equipment
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
              Premium shampoos & conditioners
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
              Expert staff guidance included
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
              Spa ambiance environment
            </li>
          </ul>
          <Link to="/dog-wash-studio-tacoma-wa" className="btn-primary mt-auto self-start text-sm !px-6 !py-3">
            Learn More
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="card-service"
        >
          <div className="w-12 h-12 rounded-btn bg-secondary/10 flex items-center justify-center mb-2">
            <Sparkles className="w-6 h-6 text-secondary" />
          </div>
          <h3 className="font-display text-2xl font-bold text-foreground">Professional Grooming</h3>
          <p className="text-muted-foreground leading-relaxed">
            Let our skilled specialists handle the grooming. We offer drop-off baths, full grooming sessions, and a wide range of extra services at affordable rates.
          </p>
          <ul className="space-y-2 text-sm text-foreground/80">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
              Skilled, experienced groomers
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
              Bathing, drying, brushing & ear cleaning
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
              Nail trimming & tooth brushing
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
              Affordable rates for all breeds
            </li>
          </ul>
          <Link to="/pet-groomer-in-tacoma-wa" className="btn-secondary mt-auto self-start text-sm !px-6 !py-3">
            Learn More
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceCards;
