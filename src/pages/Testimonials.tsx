import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import CtaBanner from "@/components/sections/CtaBanner";

const reviews = [
  {
    name: "Christina",
    date: "Jun 24, 2023",
    title: "What amazing place",
    rating: 5,
    text: "I just have to say I'm not one who takes time to do a review but after my experience I just had too. I have a 1 year old English bulldog and he can be difficult sometimes when it's something new to him. But I have been looking around for a place I can take him to where I could get him groomed or be able to do it myself. I was up late looking at all these different places that offer self wash or grooming and came across this amazing place and so glad I did. I made the phone call and brought my baby Winston in the same day. I never used a service like this before and wow!! The owners were so helpful and patient with me. They made me feel very comfortable and addressed any or all my questions. I found my spot for Winston's pampering days. And the cost for him was great along with the extra perks they offer. If you are looking for a relaxing experience with your pet this is the place. I can go on and on but I would definitely recommend this place. Thank you guys again. Winston and I will see you soon",
  },
  {
    name: "Lonnie Lawson",
    date: "Jun 10, 2019",
    title: "The Right Grooming Salon",
    rating: 5,
    text: "I always visit these experts when I want to give my dog a good bath. Here, I can get an affordable grooming service and sometimes, I take pleasure in bathing my dog on my own. They have everything I need and I gladly recommend their grooming facility.",
  },
];

const Testimonials = () => {
  return (
    <PageLayout>
      <Helmet>
        <title>Testimonials | Mutt Puddles Dog Wash LLC</title>
      </Helmet>

      <section className="section-pad">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mb-12">
          <p className="text-primary font-display font-bold text-sm uppercase tracking-widest mb-4">Testimonials</p>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
            Read the Testimonials of Our Clients
          </h1>
          <p className="text-muted-foreground leading-relaxed">
            If you are looking for a self service dog wash in Tacoma, WA, we are the professionals who will ensure your satisfaction. We invite our clients to leave us reviews.
          </p>
        </motion.div>

        <div className="space-y-8">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card-service"
            >
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div>
                  <h3 className="font-display font-bold text-foreground">{r.name}</h3>
                  <p className="text-xs text-muted-foreground">{r.date}</p>
                </div>
                <div className="flex gap-0.5">
                  {[...Array(r.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-primary fill-primary" />
                  ))}
                </div>
              </div>
              <h4 className="font-display font-bold text-foreground">{r.title}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">{r.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <CtaBanner />
    </PageLayout>
  );
};

export default Testimonials;
