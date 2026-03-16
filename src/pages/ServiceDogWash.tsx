import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageLayout from "@/components/layout/PageLayout";
import CtaBanner from "@/components/sections/CtaBanner";

const ServiceDogWash = () => {
  return (
    <PageLayout>
      <Helmet>
        <title>Self Service Dog Wash | Mutt Puddles Dog Wash LLC</title>
      </Helmet>

      <section className="section-pad">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <p className="text-primary font-display font-bold text-sm uppercase tracking-widest mb-4">Self-Service Wash</p>
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
              What Is Our Self Service Dog Wash All About?
            </h1>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Mutt Puddles Dog Wash LLC is a renowned local self-service pet bathing facility that is conveniently based in Tacoma, WA and supplied with professional-grade tubs and cosmetics to ensure the maximum comfort and safety of all pets and owners that come to us.
              </p>
              <p>
                As a dog owner, the hassle of keeping your dog clean is no news to you. This is where Mutt Puddles Dog Wash LLC comes in to offer a nice, cozy, well-equipped, and supplied dog bathing facility where you and your dog can have a really great time at a price that is nothing compared to what a professional would charge.
              </p>
              <h2 className="font-display text-xl font-bold !text-foreground">Why Come to Us Specifically</h2>
              <p>
                Apart from our well-furnished salon, we have a team of passionate animal lovers who are there to help if you need assistance or advice. Once you visit, you'll never want to go to a regular groomer again!
              </p>
            </div>
            <Link to="/contact-us" className="btn-primary mt-8 inline-flex text-sm">
              Book Now
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
            <img
              src="https://muttpuddlesdogwashwa.com/wp-content/uploads/2019/07/Self-service-dog-wash-by-Mutt-Puddles-Dog-Wash-LLC-300x300.jpg"
              alt="Self service dog wash by Mutt Puddles Dog Wash LLC"
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

export default ServiceDogWash;
