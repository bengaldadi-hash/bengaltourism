"use client";

import Image from "next/image";
import { Globe, IndianRupee, Clock, Users, HeadphonesIcon, MapPin } from "lucide-react";

const features = [
  { title: "Worldwide Tour Coverage", icon: "/bengal-tour-icon.svg" },
  { title: "Competitive Pricing", icon: "/CompetitivePricing.svg" },
  { title: "Fast Booking", icon: "/clock.svg" },
  { title: "Local Guided Tours", icon: "/Users.svg" },
  { title: "Best Support 24/7", icon: "/HeadphonesIcon.svg"},
  { title: "Tour Flexibility", icon: "/MapPin.svg" },
];

export default function WhyChooseBengal() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
      {/* RIGHT IMAGES */}
        <div className="relative w-full h-[520px] hidden md:flex justify-center items-center">

          {/* BIG CIRCLE IMAGE */}
          <div className="absolute right-0 w-[420px] h-[420px] rounded-full overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D"
              alt="Feature Image 1"
              fill
              className="object-cover"
            />
          </div>

          {/* SMALL CIRCLE IMAGE */}
          <div className="absolute bottom-0 left-16 w-[260px] h-[260px] rounded-full overflow-hidden border-[10px] border-white">
            <Image
              src="https://images.unsplash.com/photo-1528543606781-2f6e6857f318?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D"
              alt="Feature Image 2"
              fill
              className="object-cover"
            />
          </div>
        </div>
        {/* LEFT CONTENT */}
        <div>
          <span className="inline-block  text-[#EA3323] text-xs font-semibold ">
            WHY CHOOSE US
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
            We Are Exploring The Tour <br  className="md:block hidden"/> With Excitement
          </h2>

          <p className="text-gray-600 max-w-xl mb-10 leading-relaxed">
            Etiam ac tortor id purus commodo vulputate. Vestibulum porttitor erat
            felis and sed vehicula tortor malesuada gravida. Mauris volutpat enim
            quis pulvinar congoue. Suspendisse ullamcorper.
          </p>

          {/* FEATURES GRID */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 bg-[#EA3323]/10 rounded-xl px-6 py-4"
              >
                <img src={item.icon} alt="" />
                <h4 className="font-semibold text-gray-800">
                  {item.title}
                </h4>
              </div>
            ))}
          </div>
        </div>

  

      </div>
    </section>
  );
}
