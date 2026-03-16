import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageLayout from "@/components/layout/PageLayout";
import CtaBanner from "@/components/sections/CtaBanner";

const DogGroomer = () => {
  return (
    <PageLayout>
      <Helmet>
        <title>Dog Groomer | Mutt Puddles Dog Wash LLC</title>
      </Helmet>

      <section className="section-pad">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <p className="text-primary font-display font-bold text-sm uppercase tracking-widest mb-4">Dog Groomer</p>
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
              Looking for a Dog Groomer in Tacoma, WA? Choose Our Professional Services!
            </h1>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Most of us are fond of pets at home. Every pet owner would want the best of care for their pets, including proper pet grooming. At times, we would want to do it on our own. Sometimes, hiring a dog groomer can come in handy. If you are in need of one, turn to Mutt Puddles Dog Wash LLC.
              </p>
              <h2 className="font-display text-xl font-bold !text-foreground">Benefits of Dog Bath</h2>
              <p>
                Regularly grooming your dogs not only keeps them pretty, but you are also keeping them healthy and happy. Grooming can maintain a healthy coat and skin, reinforce a healthy foot structure, reduce the risk of infections, and keep your pet looking and smelling great.
              </p>
              <h2 className="font-display text-xl font-bold !text-foreground">Why Choose Our Services?</h2>
              <p>
                Our establishment provides various pet grooming services in Tacoma, WA. We have experienced groomers, quality equipment, and affordable rates. Come and take advantage of our services!
              </p>
            </div>
            <Link to="/contact-us" className="btn-primary mt-8 inline-flex text-sm">
              Contact Us Today
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
            <img
              src="https://muttpuddlesdogwashwa.com/wp-content/uploads/2019/06/Pet-Groomer-1080x720.jpg"
              alt="Pet Groomer at Mutt Puddles"
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

export default DogGroomer;
