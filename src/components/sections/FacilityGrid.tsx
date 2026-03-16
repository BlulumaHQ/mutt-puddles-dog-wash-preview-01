import { motion } from "framer-motion";
import cleanTubsImg from "@/assets/clean-tubs.jpg";
import proShampoosImg from "@/assets/pro-shampoos.jpg";
import expertStaffImg from "@/assets/expert-staff.jpg";

const facilities = [
  {
    title: "Clean Tubs",
    description: "Top-of-the-line tubs ensuring maximum comfort and safety for your pet during every wash.",
    image: cleanTubsImg,
  },
  {
    title: "Professional Shampoos",
    description: "Premium shampoos, conditioners, colognes, and eco-friendly cosmetic products for every coat type.",
    image: proShampoosImg,
  },
  {
    title: "Expert Assistance",
    description: "Our passionate team is always ready to help with grooming techniques, tool usage, and advice.",
    image: expertStaffImg,
  },
];

const FacilityGrid = () => {
  return (
    <section className="section-surface">
      <div className="section-pad">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4"
          >
            What We Provide
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground max-w-xl mx-auto"
          >
            Everything you need for a perfect grooming experience, all under one roof.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {facilities.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="card-service items-center text-center p-6"
            >
              <div className="w-full aspect-square rounded-btn overflow-hidden mb-4">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacilityGrid;
