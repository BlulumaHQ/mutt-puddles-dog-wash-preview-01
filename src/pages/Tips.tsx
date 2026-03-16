import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import PageLayout from "@/components/layout/PageLayout";
import CtaBanner from "@/components/sections/CtaBanner";

const tips = [
  "Why Is It Best to Visit an Expert Dog Groomer?",
  "Why Get an Affordable Dog Grooming Service in Tacoma, WA?",
  "What to Expect From Hiring a Dog Groomer in Tacoma, WA?",
  "Why Hiring a Professional Pet Grooming Service Provider is Important?",
  "Why Taking Your Pet to a Professional Groomer Regularly Is One of the Best Choices You Will Ever Make",
  "Why You Should Get an Affordable Grooming Service in Tacoma, WA",
  "Why Entrust the Grooming to a Trusted Dog Groomer in Tacoma, WA",
  "Mistakes That a Pet Groomer Should Avoid",
  "How You Can Benefit From an Affordable Grooming Service in Tacoma, WA",
  "How to Find the Right Self-Service Pet Bathing Establishment in Tacoma, WA",
  "Professional Pet Grooming: All You Need to Know Before You Get Your Pampered Pet to the Groomers",
  "Simple Things You Could Try Before A Professional Dog Wash in Tacoma, WA",
  "Three Tips for the Perfect Dog Grooming in Tacoma, WA",
  "The Importance of Hiring a Pet Groomer in Tacoma, WA",
  "What are the Advantages of Hiring a Pet Groomer in Tacoma, WA?",
  "Reasons to Hire a Professional Service Dog Wash Provider in Tacoma, WA",
  "Achieve Better Grooming Work for Your Pets With Experts",
  "The Benefits of Hiring a Dog Groomer in Tacoma, WA",
];

const Tips = () => {
  return (
    <PageLayout>
      <Helmet>
        <title>Tips | Mutt Puddles Dog Wash LLC</title>
      </Helmet>

      <section className="section-pad">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mb-12">
          <p className="text-primary font-display font-bold text-sm uppercase tracking-widest mb-4">Tips</p>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
            Pet Grooming Tips & Advice
          </h1>
          <p className="text-muted-foreground leading-relaxed">
            Explore our collection of grooming tips and advice to help you keep your furry friend looking and feeling their best.
          </p>
        </motion.div>

        <div className="max-w-3xl space-y-3">
          {tips.map((tip, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              className="card-service !p-5 !flex-row items-center gap-4"
            >
              <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-display font-bold text-sm shrink-0">
                {i + 1}
              </span>
              <p className="text-foreground text-sm font-medium">{tip}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <CtaBanner />
    </PageLayout>
  );
};

export default Tips;
