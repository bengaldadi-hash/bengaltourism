"use client";

import { useState } from "react";
import Image from "next/image";
import { MapPin, Calendar, Users, Star, Clock, Check, Heart, Navigation, Camera, Utensils, Trees, Fish, Waves, Mountain, Building } from "lucide-react";

interface TourPackageProps {
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  price: string;
  image: string;
  highlights: string[];
  inclusions: string[];
  exclusions: string[];
  itinerary: { day: string; activities: string[] }[];
  bestTime: string;
  difficulty: string;
  category: string;
}

const TourPackage: React.FC<TourPackageProps> = ({
  title,
  subtitle,
  description,
  duration,
  price,
  image,
  highlights,
  inclusions,
  exclusions,
  itinerary,
  bestTime,
  difficulty,
  category
}) => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative h-[80vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-yellow-900/40"></div>
        </div>
        
        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-6 py-3 mb-8">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-white font-medium text-sm">{category}</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              {title}
              <span className="block bg-gradient-to-r from-yellow-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent relative">
                {subtitle}
                <svg className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-3/4 h-4" viewBox="0 0 300 16" fill="none">
                  <path d="M10 8 Q 75 4, 150 8 T 290 8" stroke="url(#gradient)" strokeWidth="3" strokeLinecap="round" />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#EF4444" />
                      <stop offset="50%" stopColor="#F59E0B" />
                      <stop offset="100%" stopColor="#F97316" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed">
              {description}
            </p>

            {/* Package Info */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{duration}</div>
                <div className="text-white/80 text-sm">Duration</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{price}</div>
                <div className="text-white/80 text-sm">Starting Price</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{difficulty}</div>
                <div className="text-white/80 text-sm">Difficulty</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{bestTime}</div>
                <div className="text-white/80 text-sm">Best Time</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* ================= TABS ================= */}
      <section className="py-16 bg-white sticky top-0 z-40 shadow-lg border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-center">
            <div className="inline-flex rounded-full bg-gray-100 p-1">
              <button
                onClick={() => setActiveTab("overview")}
                className={`px-6 py-2 rounded-full font-semibold transition ${
                  activeTab === "overview" 
                    ? "bg-gradient-to-r from-yellow-600 to-orange-600 text-white" 
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab("itinerary")}
                className={`px-6 py-2 rounded-full font-semibold transition ${
                  activeTab === "itinerary" 
                    ? "bg-gradient-to-r from-yellow-600 to-orange-600 text-white" 
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Itinerary
              </button>
              <button
                onClick={() => setActiveTab("inclusions")}
                className={`px-6 py-2 rounded-full font-semibold transition ${
                  activeTab === "inclusions" 
                    ? "bg-gradient-to-r from-yellow-600 to-orange-600 text-white" 
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Inclusions
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          {activeTab === "overview" && (
            <div className="space-y-16">
              {/* Highlights */}
              <div>
                <h2 className="text-3xl font-black text-gray-900 mb-8">Package Highlights</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {highlights.map((highlight, index) => (
                    <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                      <Check className="w-8 h-8 text-green-500 mb-4" />
                      <p className="text-gray-700">{highlight}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "itinerary" && (
            <div className="space-y-8">
              <h2 className="text-3xl font-black text-gray-900 mb-8">Detailed Itinerary</h2>
              {itinerary.map((day, index) => (
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{day.day}</h3>
                  <ul className="space-y-3">
                    {day.activities.map((activity, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-yellow-600 mr-3">•</span>
                        <span className="text-gray-700">{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {activeTab === "inclusions" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">What's Included</h2>
                <div className="bg-green-50 rounded-xl p-6">
                  <ul className="space-y-3">
                    {inclusions.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="w-5 h-5 text-green-600 mr-3 mt-1" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">What's Excluded</h2>
                <div className="bg-yellow-50 rounded-xl p-6">
                  <ul className="space-y-3">
                    {exclusions.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-yellow-600 mr-3">•</span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 bg-gradient-to-br from-yellow-600 to-orange-600">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black text-white mb-6">Ready to Book Your Adventure?</h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-12">
            Experience the best of {title} with our expert guides
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/book-tour" className="px-8 py-3 bg-white text-yellow-600 font-bold rounded-xl hover:bg-gray-100 transition">
              Book Now
            </a>
            <a href="/contact" className="px-8 py-3 bg-white text-yellow-600 font-bold rounded-xl hover:bg-gray-100 transition">
              Get Quote
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default TourPackage;
