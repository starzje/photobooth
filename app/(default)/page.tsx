export const metadata = {
  title: "Photobooth Zagreb",
  description: "Iznajmljivanje phootobootha za vjenčanja i evente",
};

import Head from "next/head";
import Hero from "@/components/hero-home";
import FeaturesBlocks from "@/components/features-blocks";
import Features02 from "@/components/features-home-02";
import Features03 from "@/components/features-home-03";
import PricingSection from "@/components/pricing";
import RequestDemo from "@/components/request-demo";
import Faqs from "@/components/faqs";

export default function Home() {
  return (
    <>
      <Head>
        <title>Photobooth Zagreb</title>
        <meta name="description" content="Iznajmljivanje phootobootha za vjenčanja i evente" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Photobooth Zagreb" />
        <meta name="author" content="Ivan Starčević" />
        <meta name="robots" content="index, follow" />
        <meta property="og:description" content="Iznajmljivanje phootobootha za vjenčanja i evente" />
        <meta property="og:url" content="https://photobooth-zagreb.com" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="hr_HR" />
        <meta property="og:site_name" content="Photobooth Zagreb" />
      </Head>
      <Hero />
      <FeaturesBlocks />
      <Features03 />
      <Features02 />
      <PricingSection />
      <Faqs />
      <div className="flex">
        <RequestDemo />
      </div>
    </>
  );
}
