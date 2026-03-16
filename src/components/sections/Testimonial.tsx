import { motion } from "framer-motion";
import { Star } from "lucide-react";

const Testimonial = () => {
  return (
    <section className="bg-secondary">
      <div className="section-pad">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-primary fill-primary" />
              ))}
            </div>
            <blockquote className="text-secondary-foreground text-lg md:text-xl leading-relaxed mb-6 text-left md:text-center">
              "I have a 1 year old English bulldog and he can be difficult sometimes when it's something new to him. I came across this amazing place and so glad I did. The owners were so helpful and patient with me. They made me feel very comfortable and addressed any or all my questions. I found my spot for Winston's pampering days. If you are looking for a relaxing experience with your pet this is the place."
            </blockquote>
            <p className="text-secondary-foreground/80 font-display font-bold">
              — Christina & Winston
            </p>
            <p className="text-secondary-foreground/50 text-sm mt-1">English Bulldog Owner</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
