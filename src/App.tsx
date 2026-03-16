import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import DogWashStudio from "./pages/DogWashStudio";
import ServiceDogWash from "./pages/ServiceDogWash";
import PetGroomer from "./pages/PetGroomer";
import DogGrooming from "./pages/DogGrooming";
import DogGroomer from "./pages/DogGroomer";
import Testimonials from "./pages/Testimonials";
import ContactUs from "./pages/ContactUs";
import FAQ from "./pages/FAQ";
import Tips from "./pages/Tips";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/dog-wash-studio-tacoma-wa" element={<DogWashStudio />} />
            <Route path="/service-dog-wash-tacoma-wa" element={<ServiceDogWash />} />
            <Route path="/pet-groomer-in-tacoma-wa" element={<PetGroomer />} />
            <Route path="/dog-grooming-tacoma-wa" element={<DogGrooming />} />
            <Route path="/dog-groomer-tacoma-wa" element={<DogGroomer />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/frequently-asked-questions" element={<FAQ />} />
            <Route path="/tips" element={<Tips />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
