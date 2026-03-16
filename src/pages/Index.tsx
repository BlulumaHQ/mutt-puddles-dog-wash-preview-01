import { Helmet } from "react-helmet-async";
import PageLayout from "@/components/layout/PageLayout";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import ServiceCards from "@/components/sections/ServiceCards";
import Testimonial from "@/components/sections/Testimonial";
import FacilityGrid from "@/components/sections/FacilityGrid";
import ContactSection from "@/components/sections/ContactSection";
import CtaBanner from "@/components/sections/CtaBanner";

const Index = () => {
  return (
    <PageLayout>
      <Helmet>
        <title>Home | Mutt Puddles Dog Wash LLC</title>
        <meta name="description" content="Quality pet grooming and upscale self-service dog wash facility in Tacoma, WA. Professional tools, clean tubs, and expert staff since 2007." />
      </Helmet>
      <Hero />
      <TrustBar />
      <ServiceCards />
      <Testimonial />
      <FacilityGrid />
      <CtaBanner />
      <ContactSection />
    </PageLayout>
  );
};

export default Index;
