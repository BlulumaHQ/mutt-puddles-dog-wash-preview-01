import { motion } from "framer-motion";

const trustItems = [
  { label: "Est. 2007", sublabel: "Trusted for 17+ years" },
  { label: "Police K-9 Free", sublabel: "Community support" },
  { label: "Military Discount", sublabel: "Thank you for service" },
  { label: "Senior Discount", sublabel: "Affordable for all" },
];

const TrustBar = () => {
  return (
    <section className="bg-primary">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {trustItems.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="text-center py-2"
            >
              <p className="font-display font-bold text-primary-foreground text-sm md:text-base">
                {item.label}
              </p>
              <p className="text-primary-foreground/70 text-xs mt-0.5">{item.sublabel}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
