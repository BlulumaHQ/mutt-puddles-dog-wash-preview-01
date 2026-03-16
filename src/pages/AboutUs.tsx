import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageLayout from "@/components/layout/PageLayout";
import CtaBanner from "@/components/sections/CtaBanner";

const AboutUs = () => {
  return (
    <PageLayout>
      <Helmet>
        <title>About Us | Mutt Puddles Dog Wash LLC</title>
      </Helmet>

      <section className="section-pad">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <p className="text-primary font-display font-bold text-sm uppercase tracking-widest mb-4">About Us</p>
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
              Learn More About Our Service Dog Wash & Services in Tacoma, WA
            </h1>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Mutt Puddles Dog Wash LLC offers an affordable grooming service to its customers, as well as facilitating self-service dog bathing. Based in Tacoma, WA, we have a variety of convenient options for you, whether you need our services or you wish to purchase various pet accessories or grooming products.
              </p>
              <p>
                We have been in the pet care & ownership business for decades and felt we should create a place where pet owners could learn to bath and groom their pets by themselves. This comes at a fraction of the cost of hiring a professional pet groomer and helps people create a stronger bond with their pets.
              </p>
              <p>
                We understand how busy life can get, and are here to help people make things simpler. Grooming your pet can be difficult and extremely uncomfortable, and it will surely help you create a mess that you have to clean up afterward. With us, this does not have to be the case. At our facility, you can use quality equipment and supplies to not only groom your pet but make it an unforgettable experience.
              </p>
            </div>
            <Link to="/contact-us" className="btn-primary mt-8 inline-flex text-sm">
              Book an Appointment
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
            <img
              src="https://muttpuddlesdogwashwa.com/wp-content/uploads/2019/06/Professional-Pet-Groomer.jpg"
              alt="Professional Pet Groomer at Mutt Puddles"
              className="w-full rounded-card object-cover"
              style={{ boxShadow: '0 0 0 1px rgba(0,0,0,0.05), 0 12px 24px rgba(0,0,0,0.05)' }}
            />
          </motion.div>
        </div>
      </section>

      <section className="section-surface">
        <div className="section-pad">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8">Services List</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {["Self-serve Bath", "Drop-off Baths", "Bath Extras", "Grooming Equipment Rental"].map((s) => (
              <div key={s} className="card-service !p-6 !flex-row items-center gap-4">
                <span className="w-3 h-3 rounded-full bg-primary shrink-0" />
                <span className="font-display font-bold text-foreground">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </PageLayout>
  );
};

export default AboutUs;
