import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageLayout from "@/components/layout/PageLayout";
import CtaBanner from "@/components/sections/CtaBanner";

const services = [
  {
    title: "Self-serve Bath",
    description: "Learn how to groom your furry friend on your own with our skilled professionals. Our facility has all the necessary equipment, tubs, and products. Use top-quality shampoos, conditioners, colognes, ear cleansing pads, and towels.",
    image: "https://muttpuddlesdogwashwa.com/wp-content/uploads/2019/06/Affordable-Grooming-Service.jpg",
    link: "/dog-wash-studio-tacoma-wa",
  },
  {
    title: "Drop-off Baths",
    description: "We groom large and small dogs with professional skills. Our grooming services include bathing, drying, brushing, ear cleaning, and cologne application. We will exceed your expectations.",
    link: "/pet-groomer-in-tacoma-wa",
  },
  {
    title: "Bath Extras",
    description: "Nail trimming, tooth brushing and paste application, spa facials, de-shedding, shampoo & conditioner application, skunk neutralizing, glitter tattoo services, flea treatment, hot oil treatment, and more.",
    link: "/services",
  },
  {
    title: "Grooming Equipment Rental",
    description: "Rent different grooming equipment and tools from dryers and assorted scissors to nail clippers. You can even purchase nutrient-rich dog food.",
    link: "/services",
  },
];

const Services = () => {
  return (
    <PageLayout>
      <Helmet>
        <title>Services | Mutt Puddles Dog Wash LLC</title>
      </Helmet>

      <section className="section-pad">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mb-12">
          <p className="text-primary font-display font-bold text-sm uppercase tracking-widest mb-4">Our Services</p>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
            Exceptional Grooming Services in Tacoma, WA for Your Furry Friends
          </h1>
          <p className="text-muted-foreground leading-relaxed">
            Mutt Puddles Dog Wash LLC provides viable solutions to pet owners who want to learn how to groom their pets or want to rely on expert groomers. Based in Tacoma, WA, we offer a variety of services.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card-service"
            >
              {s.image && (
                <img src={s.image} alt={s.title} className="w-full h-48 object-cover rounded-btn" />
              )}
              <h3 className="font-display text-xl font-bold text-foreground">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.description}</p>
              <Link to={s.link} className="text-primary font-display font-bold text-sm hover:underline mt-auto">
                Learn More →
              </Link>
            </motion.div>
          ))}
        </div>

        <p className="text-muted-foreground text-center mt-12">
          Known for our professionalism, in business since 2007, operating at reasonable rates, and located in Tacoma, WA.
        </p>
      </section>

      <CtaBanner />
    </PageLayout>
  );
};

export default Services;
