import Image from "next/image";
import FeaturesImage01 from "@/public/images/6.jpg";
import FeaturesImage03 from "@/public/images/3.jpg";
import FeaturesImage04 from "@/public/images/11.jpg";
import FeaturesImage05 from "@/public/images/1.jpg";
import FeaturesImage06 from "@/public/images/9.jpg";
import FeaturesImage07 from "@/public/images/4.jpg";

export default function FeaturesHome03() {
  return (
    <section className="relative bg-gradient-to-b from-slate-100 to-white">
      {/* Dark background */}
      <div
        className="absolute inset-0  pointer-events-none -z-10 [clip-path:polygon(0_0,_5760px_0,_5760px_calc(100%_-_352px),_0_100%)] h-96 md:h-auto md:mb-64"
        aria-hidden="true"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div id="galerija" className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 font-playfair-display text-slate-900">Galerija</h2>
          </div>

          {/* Section content */}
          <div className="max-w-sm mx-auto md:max-w-none grid gap-12 md:grid-cols-3 md:gap-x-10 md:gap-y-10 items-start">
            {/* 1st div */}
            <div data-aos="fade-up">
              <div className="relative block group mb-2">
                <div
                  className="absolute inset-0 pointer-events-none border-2 border-slate-500 opacity-20 translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-300 ease-out -z-10"
                  aria-hidden="true"></div>
                <div className="overflow-hidden">
                  <Image
                    className="w-full aspect-square object-cover group-hover:scale-105 transition duration-700 ease-out rounded-md"
                    src={FeaturesImage01}
                    width={300}
                    height={300}
                    alt="News 01"
                  />
                </div>
              </div>
            </div>

            {/* 2nd div */}
            <div data-aos="fade-up" data-aos-delay="100">
              <div className="relative block group mb-2">
                <div
                  className="absolute inset-0 pointer-events-none border-2 border-slate-500 opacity-20 translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-300 ease-out -z-10"
                  aria-hidden="true"></div>
                <div className="overflow-hidden">
                  <Image
                    className="w-full aspect-square object-cover group-hover:scale-105 transition duration-700 ease-out rounded-md"
                    src={FeaturesImage04}
                    width={300}
                    height={300}
                    alt="News 02"
                  />
                </div>
              </div>
            </div>

            {/* 3rd div */}
            <div data-aos="fade-up" data-aos-delay="200">
              <div className="relative block group mb-2">
                <div
                  className="absolute inset-0 pointer-events-none border-2 border-slate-500 opacity-20 translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-300 ease-out -z-10"
                  aria-hidden="true"></div>
                <div className="overflow-hidden">
                  <Image
                    className="w-full aspect-square object-cover group-hover:scale-105 transition duration-700 ease-out rounded-md"
                    src={FeaturesImage03}
                    width={300}
                    height={300}
                    alt="News 03"
                  />
                </div>
              </div>
            </div>
            {/* 1st div */}
            <div data-aos="fade-up">
              <div className="relative block group mb-2">
                <div
                  className="absolute inset-0 pointer-events-none border-2 border-slate-500 opacity-20 translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-300 ease-out -z-10"
                  aria-hidden="true"></div>
                <div className="overflow-hidden">
                  <Image
                    className="w-full aspect-square object-cover group-hover:scale-105 transition duration-700 ease-out rounded-md"
                    src={FeaturesImage05}
                    width={300}
                    height={300}
                    alt="News 01"
                  />
                </div>
              </div>
            </div>

            {/* 2nd div */}
            <div data-aos="fade-up" data-aos-delay="100">
              <div className="relative block group mb-2">
                <div
                  className="absolute inset-0 pointer-events-none border-2 border-slate-500 opacity-20 translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-300 ease-out -z-10"
                  aria-hidden="true"></div>
                <div className="overflow-hidden">
                  <Image
                    className="w-full aspect-square object-cover group-hover:scale-105 transition duration-700 ease-out rounded-md"
                    src={FeaturesImage06}
                    width={300}
                    height={300}
                    alt="News 02"
                  />
                </div>
              </div>
            </div>

            {/* 3rd div */}
            <div data-aos="fade-up" data-aos-delay="200">
              <div className="relative block group mb-2">
                <div
                  className="absolute inset-0 pointer-events-none border-2 border-slate-500 opacity-20 translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-300 ease-out -z-10"
                  aria-hidden="true"></div>
                <div className="overflow-hidden">
                  <Image
                    className="w-full aspect-square object-cover group-hover:scale-105 transition duration-700 ease-out rounded-md"
                    src={FeaturesImage07}
                    width={300}
                    height={300}
                    alt="News 03"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
