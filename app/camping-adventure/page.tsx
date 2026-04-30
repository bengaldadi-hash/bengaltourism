"use client";

import { useState } from "react";
import Image from "next/image";
import { MapPin, Calendar, Users, Star, Clock, Check, Heart, Navigation, Camera, Utensils, Trees, Fish, Waves, Mountain, Building, Tent, Shield, Sun } from "lucide-react";
import PackagePricing from '@/components/PackagePricing';
import ContactCTA from "@/components/ContactCTA";

const highlights = [
  {
    icon: Waves,
    title: "White Water Rafting",
    description: "From calm waters to roaring rapids for all skill levels"
  },
  {
    icon: Tent,
    title: "Camping Adventures",
    description: "Modern tents with hygienic facilities in scenic locations"
  },
  {
    icon: Mountain,
    title: "Himalayan Rivers",
    description: "Teesta, Rangeet, Ganga, and Alaknanda river experiences"
  },
  {
    icon: Shield,
    title: "Safety First",
    description: "Well-trained guides and quality equipment for safe adventures"
  }
];

const raftingLocations = [
  {
    name: "Teesta River",
    location: "Darjeeling, Kalimpong",
    difficulty: "All Levels",
    duration: "1.5 - 3 hours",
    bestFor: "Beginners to Experts"
  },
  {
    name: "Rangeet River",
    location: "Chitrey",
    difficulty: "Moderate to Advanced",
    duration: "2 - 3 hours",
    bestFor: "Experienced Rafters"
  },
  {
    name: "Ganga River",
    location: "Rishikesh, Uttarakhand",
    difficulty: "Beginner Friendly",
    duration: "2 - 4 hours",
    bestFor: "First-timers & Families"
  },
  {
    name: "Alaknanda River",
    location: "Uttarakhand",
    difficulty: "Challenging",
    duration: "Full Day",
    bestFor: "Experienced Rafters"
  }
];

const recommendedGear = [
  "Set of dry clothes",
  "Extra pair of sneakers or footwear",
  "Sunscreen lotion and shorts",
  "Raincoats",
  "Waterproof bags",
  "Personal medication"
];

const experiences = [
  {
    icon: Navigation,
    title: "Non-Swimmers Options",
    description: "Melli to 29th Mile (1.5 hours) and Melli to Kalijhora (3 hours)",
    difficulty: "Easy"
  },
  {
    icon: Waves,
    title: "Swimmers Options",
    description: "Tarkhola to Malli (2 hours) and Tarkhola to 29 Mile (3 hours)",
    difficulty: "Moderate"
  },
  {
    icon: Tent,
    title: "Camping Experience",
    description: "Modern tents with all facilities in scenic riverside locations",
    difficulty: "Easy"
  }
];

export default function CampingAdventurePage() {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [activeTab, setActiveTab] = useState("westbengal");

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative h-[80vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Camping & Adventure Tours"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-green-900/40"></div>
        </div>

        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-6 py-3 mb-8">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-white font-medium text-sm">Adventure Tourism</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Camping &
              <span className="block bg-gradient-to-r from-green-400 via-blue-400 to-teal-400 bg-clip-text text-transparent relative">
                Adventure Tours
                <svg className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-3/4 h-4" viewBox="0 0 300 16" fill="none">
                  <path d="M10 8 Q 75 4, 150 8 T 290 8" stroke="url(#gradient)" strokeWidth="3" strokeLinecap="round" />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#10B981" />
                      <stop offset="50%" stopColor="#3B82F6" />
                      <stop offset="100%" stopColor="#14B8A6" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed">
              West Bengal & Uttarakhand, India with Bengal Tourism • Special Tailor Made Packages
            </p>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">Custom</div>
                <div className="text-white/80 text-sm">Package Design</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">All</div>
                <div className="text-white/80 text-sm">Skill Levels</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">Safe</div>
                <div className="text-white/80 text-sm">Equipment</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">Expert</div>
                <div className="text-white/80 text-sm">Guides</div>
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

      <div className="bg-gray-50 py-16 px-6 md:px-12 text-gray-800">
        <div className="max-w-7xl mx-auto space-y-16">

          {/* HEADER */}
          <section className="text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-700">
              Special Tailor-made Combination Package
            </h1>
            <p className="text-lg text-gray-600">
              Number of Days & Cost can be designed on Request
            </p>
          </section>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10">
            <div className="lg:col-span-2 space-y-8">
              {/* WEST BENGAL RAFTING */}
              <section className="bg-white rounded-3xl shadow-xl p-8 md:p-12 space-y-6">
                <h2 className="text-3xl font-semibold text-blue-600 border-b-2 border-blue-500 inline-block pb-2">
                  White Water Rafting – West Bengal
                </h2>

                <p className="leading-8">
                  There is a wide range in the intensity of the rapids making it adequate for all, the young and the aged to enjoy the spectacular sport and the scenery while leisurely floating down the rivers here in West Bengal; which till date were lesser known. The well trained members and quality equipment will assure guest a safe and pleasant ride.
                </p>

                <p className="leading-8">
                  To enjoy rafting guest should spare a day during their stay in Darjeeling, Kalimpong, Tinchuley, Baramangua, ReshiKhola or any other nearby destinations. Take a one and half hour drive down to Teesta Bazar to enjoy this sport.
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
                  <p className="leading-8">
                    It is advisable to avoid this sport during monsoon or just a month after monsoon rest of the period is comparatively safe.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-gray-100 p-6 rounded-2xl shadow">
                    <h3 className="font-semibold text-lg mb-2">For Non-Swimmers</h3>
                    <p>Melli to 29th Mile nearly 1½ Hours</p>
                    <p>Melli to Kalijhora nearly 3 hours</p>
                  </div>

                  <div className="bg-gray-100 p-6 rounded-2xl shadow">
                    <h3 className="font-semibold text-lg mb-2">For Swimmers</h3>
                    <p>Tarkhola to Malli nearly 2 hours</p>
                    <p>Tarkhola to 29 Mile nearly 3 hours</p>
                  </div>
                </div>
              </section>

              {/* CHITREY & RANGET */}
              <section className="bg-white rounded-3xl shadow-xl p-8 md:p-12 space-y-6">
                <h2 className="text-3xl font-semibold text-green-600 border-b-2 border-green-500 inline-block pb-2">
                  Chitrey & Rangeet
                </h2>

                <p className="leading-8">
                  White water rafting in Chitrey is the most sought after adventure for most of the tourist in this part of the region. Water adventure to explore the uniqueness of Darjeeling natural diversity.
                </p>

                <p className="leading-8">
                  The famous Teesta and Rangeet rivers offer first class rafting and canoeing adventures. According to tourist experience and interest, guest can either glide along calm blue waters with magnificent scenery rising out of the banks, or rush through roaring white rapids.
                </p>

                <p className="leading-8">
                  Guest will always be in the capable hands of accomplished guide employed by government authorized rafting agencies. White Water Rafting is relatively new in the banks of Teesta. River Teesta and Rangeet have turbulent currents making it a formidable challenge to even the seasoned rafter.
                </p>
              </section>

              {/* UTTARAKHAND SECTION */}
              <section className="bg-white rounded-3xl shadow-xl p-8 md:p-12 space-y-10">
                <h2 className="text-3xl font-semibold text-purple-600 border-b-2 border-purple-500 inline-block pb-2">
                  White Water Rafting & Camping – Uttarakhand
                </h2>

                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-purple-700">Rishikesh</h3>
                  <p className="leading-8">
                    The Ganga in Uttarakhand is one of India's major and holiest of rivers. With a location close to Delhi, it is a popular choice for first-timers, non-swimmers and families. It is also the hub of white-water rafting in India. It combines an action-packed trip with the best rapids, float sections and wilderness. A perfect introduction to white-water rafting and an ideal weekend getaway to calm overworked nerves.
                  </p>
                </div>

                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-purple-700">Alaknanda</h3>
                  <p className="leading-8">
                    The Alaknanda in Uttarakhand is the second major tributary of the Ganga besides the Bhagirathi. It drains through the big mountains of Garhwal and has numerous mighty tributaries including the Mandakini, Nandakini & Pindar.
                  </p>

                  <p className="leading-8">
                    Apart from challenging white water the river offers some spectacular scenery. A self-contained trip is a great introduction to expedition rafting. Our journey starts at Nandprayag below the big rapid - ‘Hillary's Fall', named after Sir Edmund Hillary's up-stream jet boat expedition, “Ocean to Sky”, many decades ago.
                  </p>
                </div>
              </section>

              {/* STAY & IMPORTANT NOTES */}
              <section className="bg-white rounded-3xl shadow-xl p-8 md:p-12 space-y-6">
                <h2 className="text-2xl font-semibold text-orange-600 border-b-2 border-orange-500 inline-block pb-2">
                  Stay & Important Information
                </h2>

                <p className="leading-8">
                  Recommended to stay in makeshift Tents / Camps but with all modern & hygienic facilities.
                </p>

                <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-lg space-y-3">
                  <p>Please try to have the following:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>A set of dry clothes</li>
                    <li>Extra pair of sneakers or any other footwear</li>
                    <li>Suntan / Sun screen lotion</li>
                    <li>Shorts & Rain-coats</li>
                  </ul>
                  <p>
                    Foreign Tourists are required to produce their passport & photos.
                  </p>
                </div>
              </section>
            </div>
            <div className="space-y-8 lg:sticky lg:top-24 h-fit">

              {/* Video Section */}
              <div className="bg-white rounded-3xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  Watch Camping Adventure Video
                </h3>

                <div className="aspect-video rounded-xl overflow-hidden">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                    title="Tonle Sap Lake Tour"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>

              {/* Advertisement Section */}
              <div className="bg-gradient-to-br from-orange-500 to-yellow-500 text-white rounded-3xl shadow-lg p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">
                  🚀 Paste Your Advertisement Here
                </h3>
                <p className="text-sm opacity-90">
                  Promote your brand, offer or travel deals here.
                  This space is perfect for partner promotions.
                </p>
                <button className="mt-6 bg-white text-orange-600 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition">
                  Contact For Promotion
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* ================= PACKAGE PRICING ================= */}
      <PackagePricing
        title="Camping Adventure Tour Packages"
        subtitle="Choose your perfect outdoor adventure duration"
      />

      <ContactCTA />
    </>
  );
}
