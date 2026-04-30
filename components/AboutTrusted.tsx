"use client";

import Image from "next/image";
import { PhoneCall, ShieldCheck, UserCheck, Clock, Award } from "lucide-react";

export default function AboutTrusted() {
  return (
    <section className="relative py-28 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center">

        {/* LEFT IMAGE STACK */}
        <div className="relative">
               <div className="relative order-2 lg:order-1 mt-8 lg:mt-0">
          {/* background shape */}
          <Image
            src="https://demo.egenslab.com/html/triprex/preview/assets/img/home5/about-img-bg.png"
            alt="bg"
            width={520}
            height={520}
            className="absolute left-20 -top-16 opacity-90"
          />

        {/* top image */}
            <div className="relative z-10 rounded-[10px] overflow-hidden w-64 h-80 sm:w-80 sm:h-96 lg:w-[380px] lg:h-[520px] mx-auto">
              <Image
                src="/bangal2.jpg"
                alt="about"
                fill
                className="object-cover"
              />
            </div>

         <div className="absolute bottom-[-20px] sm:bottom-[-30px] lg:bottom-[-60px] right-[-20px] sm:right-[-30px] lg:right-[-40px] z-20 rounded-[10px] overflow-hidden w-48 h-32 sm:w-56 sm:h-40 lg:w-[380px] lg:h-[260px]">
              <Image
                src="/bangal1.jpg"
                alt="travel"
                fill
                className="object-cover"
              />
          </div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="relative">
          {/* badge */}
          <span className="inline-block text-[#EA3323]  py-2 rounded-full text-sm font-semibold ">
            ABOUT US NOW
          </span>

          <h2 className="text-4xl xl:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
            We Are Whom You Trusted <br /> Travel Companion.
          </h2>

          <p className="text-gray-600 max-w-xl mb-10">
           We design unforgettable journeys with care, comfort, and confidence. From seamless planning to on-ground support, our expert team ensures every detail is handled perfectly. Whether you seek adventure, culture, relaxation, or exploration, we deliver tailor-made travel experiences that are safe, stress-free, and truly memorable.
          </p>

          {/* FEATURES */}
          <div className="grid sm:grid-cols-2 gap-5 mb-12">
            <Feature icon={ShieldCheck} text="Safety First Always" rotate={-3} />
            <Feature icon={UserCheck} text="Trusted Travel Guide" rotate={3} />
            <Feature icon={Clock} text="Time Stress Savings" rotate={-3} />
            <Feature icon={Award} text="3.5K Tour Success" rotate={3} />
          </div>

          {/* CTA */}
          <div className="flex flex-nowrap items-center gap-6">
            <button className="text-sm text-black px-8 py-4 font-semibold transition secondary-btn3-bg">
              Discover More
            </button>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border-2 border-[#EA3323] flex items-center justify-center ">
                <PhoneCall className="text-[#EA3323]" />
              </div>
              <div>
                <p className="text-sm text-[#EA3323]">To More Inquiry</p>
                {/* <p className="text-lg font-bold text-green-600">
                  +990-737 621 432
                </p> */}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

/* FEATURE ITEM */
interface FeatureProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  text: string;
  rotate?: number;
}

function Feature({ icon: Icon, text, rotate = 0 }: FeatureProps) {
  return (
    <div
      className={`flex items-center gap-4 bg-[#EA3323]/10 px-6 py-4 rounded-xl
        transform
        rotate-0
        md:[transform:rotate(var(--rotate))]
      `}
      style={{ "--rotate": `${rotate}deg` } as React.CSSProperties}
    >
      <Icon className="text-[#EA3323] w-6 h-6" />
      <span className="font-semibold text-gray-900">{text}</span>
    </div>
  );
}


 