import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageLayout from "@/components/layout/PageLayout";
import CtaBanner from "@/components/sections/CtaBanner";

const DogGrooming = () => {
  return (
    <PageLayout>
      <Helmet>
        <title>Dog Grooming | Mutt Puddles Dog Wash LLC</title>
      </Helmet>

      <section className="section-pad">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <p className="text-primary font-display font-bold text-sm uppercase tracking-widest mb-4">Dog Grooming</p>
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
              Dog Grooming in Tacoma, WA Has Never Been This Easy
            </h1>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Pets are part of the family, and you will do anything just to keep them happy, loved, and contented. During the warm season, dog grooming is particularly on-demand. A facility like Mutt Puddles Dog Wash LLC in Tacoma, WA is as dedicated as you are in giving your furry friends the look and comfort they rightfully deserve.
              </p>
              <h2 className="font-display text-xl font-bold !text-foreground">Why You Should Groom Your Pets</h2>
              <p>
                Grooming can maintain a healthy coat and skin of your pet. Short nails reinforce a healthy foot structure and good posture, reducing the risk of infections. Your pet will look and smell great. Grooming equipment rental is affordable and provides you with everything you need.
              </p>
              <h2 className="font-display text-xl font-bold !text-foreground">Remarkable Services Just for You!</h2>
              <p>
                From self-service washing to professional grooming, our facility offers the complete package. Our staff is trained to handle all breeds with care, patience, and expertise.
              </p>
            </div>
            <Link to="/contact-us" className="btn-primary mt-8 inline-flex text-sm">
              Get Started
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
            <img
              src="https://muttpuddlesdogwashwa.com/wp-content/uploads/2019/07/Dog-groomer-Mutt-Puddles-Dog-Wash-LLC-237x300.jpg"
              alt="Dog groomer at Mutt Puddles Dog Wash LLC"
              className="w-full rounded-card object-cover"
              style={{ boxShadow: '0 0 0 1px rgba(0,0,0,0.05), 0 12px 24px rgba(0,0,0,0.05)' }}
            />
          </motion.div>
        </div>
      </section>

      <CtaBanner />
    </PageLayout>
  );
};

export default DogGrooming;
