import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageLayout from "@/components/layout/PageLayout";
import CtaBanner from "@/components/sections/CtaBanner";

const DogWashStudio = () => {
  return (
    <PageLayout>
      <Helmet>
        <title>Dog Wash Studio | Mutt Puddles Dog Wash LLC</title>
      </Helmet>

      <section className="section-pad">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <p className="text-primary font-display font-bold text-sm uppercase tracking-widest mb-4">Self-Service</p>
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
              Be Your Dog's Own Pet Groomer at Our Pet Bathing Salon
            </h1>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Conveniently based in Tacoma, WA, Mutt Puddles Dog Wash LLC is a renowned local self-service pet bathing facility supplied with top-of-the-line tubs to ensure the maximum comfort and safety for pets and their owners. We started our pet care business back in 2007, and it was through our continuous demonstration of care, knowledge, and passion.
              </p>
              <h2 className="font-display text-xl font-bold !text-foreground">Why being your own dog's groomer is better and more affordable?</h2>
              <p>
                We have always promoted the importance of pet owners caring for their own 4-pawed friends including grooming them. Our facility in Tacoma, WA is supplied with all necessary tubs, towels, shampoos, conditioners, perfumes, and cosmetic products that are clean and eco-friendly. We have professional grooming tools and tables so you will not have to worry about bringing anything but yourself and your dog.
              </p>
              <h2 className="font-display text-xl font-bold !text-foreground">Why Come to Us Specifically</h2>
              <p>
                Apart from our well-furnished pet bathing facility, we also have a team of passionate animal lovers who are always there to help if you need assistance or advice on grooming techniques and tools usage. Once you come to our place in Tacoma, WA, you will never consider turning to a professional pet groomer when we make that experience a fun, inexpensive, and hassle-free one!
              </p>
            </div>
            <Link to="/contact-us" className="btn-primary mt-8 inline-flex text-sm">
              Book a Self-Wash Session
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
            <img
              src="https://muttpuddlesdogwashwa.com/wp-content/uploads/2019/07/Pet-grooming-by-Mutt-Puddles-Dog-Wash-LLC-300x197.jpg"
              alt="Pet grooming by Mutt Puddles Dog Wash LLC"
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

export default DogWashStudio;
