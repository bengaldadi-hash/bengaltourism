"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";

export default function CTASection() {
  return (
    <section className="relative bg-[#EA3323]  px-6 overflow-hidden">


      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-6 h-6" />
              <span className="text-white/90 font-semibold text-sm uppercase tracking-wide">
                Special Offer
              </span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Ready to explore 
              <span className="block text-orange-100">Bengal Tourism?</span>
            </h2>
            
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              It only takes a few minutes to register your FREE Bengal Tourism account and start your journey to amazing destinations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="inline-flex items-center gap-2 bg-white text-[#EA3323] px-8 py-4 rounded-xl font-semibold hover:bg-orange-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                <span>Book Your Trip</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              
              <button className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#EA3323] transition-all duration-300">
                <span>Learn More</span>
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="relative lg:mt-0">
            <div className="relative">
              <div className="relative   p-8 ">
                <Image
                  src="/newsletter.png"
                  alt="Person booking travel"
                  width={500}
                  height={350}
                  className="rounded-2xl w-full h-auto object-cover"
                />
              </div>
            </div>
            
            {/* Floating Elements */}
      
          </div>
        </div>
      </div>
    </section>
  );
}
