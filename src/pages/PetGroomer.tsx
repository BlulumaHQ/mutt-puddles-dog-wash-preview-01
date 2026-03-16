import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageLayout from "@/components/layout/PageLayout";
import CtaBanner from "@/components/sections/CtaBanner";

const PetGroomer = () => {
  return (
    <PageLayout>
      <Helmet>
        <title>Pet Groomer | Mutt Puddles Dog Wash LLC</title>
      </Helmet>

      <section className="section-pad">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <p className="text-primary font-display font-bold text-sm uppercase tracking-widest mb-4">Drop-off Baths</p>
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
              Let a Reliable Pet Groomer Bathe and Groom Your Pets
            </h1>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                If you don't have the time to personally groom and bathe your dog, you should let a pet groomer from Mutt Puddles Dog Wash LLC do the work. We offer streamlined, safe, and comprehensive drop-off bathing services. Based in Tacoma, WA, we can help you maintain the good hygiene of your pet.
              </p>
              <h2 className="font-display text-xl font-bold !text-foreground">What Are Drop-off Baths?</h2>
              <p>
                For those who are juggling a lot of responsibilities, you can always opt for professional drop-off baths. A professional pet groomer will wash and comprehensively bathe your pets using high-caliber equipment and tools.
              </p>
              <h2 className="font-display text-xl font-bold !text-foreground">Why Choose Our Services?</h2>
              <p>
                We are your go-to company for quality and dependable drop-off baths. We are equipped with the needed grooming facilities and equipment. Before grooming, we will first assess your pet's health. Our drop-off baths are provided at affordable rates.
              </p>
            </div>
            <Link to="/contact-us" className="btn-primary mt-8 inline-flex text-sm">
              Schedule a Drop-off
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
            <img
              src="https://muttpuddlesdogwashwa.com/wp-content/uploads/2019/07/Pet-groomer-Mutt-Puddles-Dog-Wash-LLC-300x199.jpg"
              alt="Pet groomer at Mutt Puddles Dog Wash LLC"
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

export default PetGroomer;
