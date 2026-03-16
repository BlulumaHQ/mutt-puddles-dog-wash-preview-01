import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import PageLayout from "@/components/layout/PageLayout";
import CtaBanner from "@/components/sections/CtaBanner";

const faqs = [
  {
    q: "What kind of pet grooming services do you offer?",
    a: "We offer self-serve grooming, bathing, and dog washing, grooming equipment rentals, and drop-off bathing services. Our facility has all the necessary equipment, tubs, and products you need.",
  },
  {
    q: "Why would I need your services?",
    a: "If you don't know how to groom your pet on your own or you want help to improve your technique or make your pet comfortable when getting groomed, our services are right for you. Grooming is a time for you to bond with your pet. For those who don't have the time, our drop-off grooming services come in handy.",
  },
  {
    q: "What if I don't know how to groom my pet on my own?",
    a: "No problem! We will teach you how to do it and ensure that both you and your pet are comfortable with the process. We will provide you with the tools and equipment that are required.",
  },
  {
    q: "Do I need to bring my pet grooming equipment?",
    a: "No. However, you can do so if that is what you prefer. Many pet owners have the equipment and tools to do the job, but not the space that is required. We can provide all that you need – tools and all.",
  },
  {
    q: "My pet gets scared when it comes to grooming. What can I do?",
    a: "Many pets get scared or nervous before, during, or after grooming. It is normal. At our facility, our goal is to ensure that your pet is comfortable from start to finish. We have trained groomers that know how to treat your pets. If you have trouble performing the grooming yourself, we can do it for you.",
  },
  {
    q: "How much will it cost to use your services?",
    a: "The cost is dependent on the services you need. We make sure to provide affordable prices for pet grooming and for all of the products that we have to offer. We also have Happy Hour, military and senior discounts. We also provide free Police K-9 grooming services.",
  },
  {
    q: "Do I need to schedule an appointment?",
    a: "Our dog groomer in Tacoma, WA does not require you to have scheduled appointments. If you are in a rush or want to ensure a shorter wait time, feel free to give us a call and we will do what we can to accommodate you.",
  },
];

const FAQ = () => {
  return (
    <PageLayout>
      <Helmet>
        <title>FAQ | Mutt Puddles Dog Wash LLC</title>
      </Helmet>

      <section className="section-pad">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mb-12">
          <p className="text-primary font-display font-bold text-sm uppercase tracking-widest mb-4">FAQ</p>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
            Common Questions and Answers
          </h1>
          <p className="text-muted-foreground leading-relaxed">
            If you are thinking about hiring a professional dog groomer, you may be wondering if our company is the right choice for you. Here are answers to the most common questions.
          </p>
        </motion.div>

        <div className="max-w-3xl space-y-6">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="card-service !p-6"
            >
              <h3 className="font-display font-bold text-foreground text-lg">{faq.q}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <CtaBanner />
    </PageLayout>
  );
};

export default FAQ;
