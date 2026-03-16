import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, MapPin, Phone, Clock } from "lucide-react";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      await fetch("https://formspree.io/f/mbdabbql", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      setSubmitted(true);
      form.reset();
    } catch {
      // silent fail
    }
  };

  return (
    <section id="contact-section">
      <div className="section-pad">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Get in Touch
            </h2>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="font-display font-bold text-foreground">Address</p>
                  <p className="text-muted-foreground text-sm">605 156th St E, Tacoma, WA 98445</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="font-display font-bold text-foreground">Phone</p>
                  <a href="tel:2535313387" className="text-muted-foreground text-sm hover:text-primary transition-colors font-tabular-nums">(253) 531-3387</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="font-display font-bold text-foreground">Hours</p>
                  <p className="text-muted-foreground text-sm">Emergency Hours Available Upon Request</p>
                </div>
              </div>
            </div>

            <div className="rounded-card overflow-hidden h-64 md:h-80" style={{ boxShadow: '0 0 0 1px rgba(0,0,0,0.05), 0 2px 4px rgba(0,0,0,0.05), 0 12px 24px rgba(0,0,0,0.05)' }}>
              <iframe
                title="Mutt Puddles Dog Wash Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2710.5!2d-122.4442!3d47.1957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490fdef1b5f6b8d%3A0x2ab13e1febe1cc3e!2s605%20156th%20St%20E%2C%20Tacoma%2C%20WA%2098445!5e0!3m2!1sen!2sus!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="card-service h-full">
              <h3 className="font-display text-2xl font-bold text-foreground mb-2">Send Us a Message</h3>
              <p className="text-muted-foreground text-sm mb-6">We'd love to hear from you. Fill out the form and we'll get back to you soon.</p>

              {submitted ? (
                <div className="text-center py-12">
                  <p className="font-display text-xl font-bold text-primary mb-2">Thanks!</p>
                  <p className="text-muted-foreground">Your message has been sent.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-btn bg-accent border-none text-foreground placeholder:text-muted-foreground/50 focus:ring-2 focus:ring-primary focus:outline-none transition-shadow text-sm"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-btn bg-accent border-none text-foreground placeholder:text-muted-foreground/50 focus:ring-2 focus:ring-primary focus:outline-none transition-shadow text-sm"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1.5">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 rounded-btn bg-accent border-none text-foreground placeholder:text-muted-foreground/50 focus:ring-2 focus:ring-primary focus:outline-none transition-shadow text-sm"
                      placeholder="(253) 000-0000"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className="w-full px-4 py-3 rounded-btn bg-accent border-none text-foreground placeholder:text-muted-foreground/50 focus:ring-2 focus:ring-primary focus:outline-none transition-shadow text-sm resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full text-sm gap-2">
                    <Send className="w-4 h-4" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
