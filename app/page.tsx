import AboutUsSection from "@/components/Home/AboutUsSection";
import BannerSection from "@/components/Home/BannerSection";
import ContactSection from "@/components/Home/ContactSection";
import PortfolioSection from "@/components/Home/PortfolioSection";
import ServiceSection from "@/components/Home/ServiceSection";
import TestimonialSection from "@/components/Home/TestimonialSection";

export default function Home() {
  return (
    <main className="">
      <BannerSection />
      <ServiceSection />
      <PortfolioSection />
      <AboutUsSection />
      <ContactSection />
      <TestimonialSection />
    </main>
  );
}
