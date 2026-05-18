import Hero from "@/components/hero-home";
import FeaturesBlocks from "@/components/features-blocks";
import Features02 from "@/components/features-home-02";
import Features03 from "@/components/features-home-03";
import PricingSection from "@/components/pricing";
import RequestDemo from "@/components/request-demo";
import Faqs from "@/components/faqs";
import Reviews from "@/components/reviews";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturesBlocks />
      <Features03 />
      <Features02 />
      <PricingSection />
      <Reviews />
      <Faqs />
      <div className="flex">
        <RequestDemo />
      </div>
    </>
  );
}
