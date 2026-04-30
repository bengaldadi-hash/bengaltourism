"use client";

import { useState } from "react";
import Image from "next/image";
import { MapPin, Calendar, Users, Star, Clock, Check, Heart, Camera, Trees, Mountain, Navigation, Sun, Compass, Globe, Building, Utensils, Coffee, MapPinIcon, Tent, Footprints, Waves, Shield, Award } from "lucide-react";
import ContactCTA from "@/components/ContactCTA";
import PackagePricing from "@/components/PackagePricing";

const raftingLocations = [
  {
    name: "Teesta River",
    location: "Darjeeling Region",
    difficulty: "All Levels",
    duration: "1.5 - 3 hours",
    description: "White water rafting in the famous Teesta River with turbulent currents",
    highlights: ["Suitable for all ages", "Spectacular scenery", "Government authorized guides", "Quality equipment"],
    bestFor: "Beginners to experienced rafters",
    image: "https://images.unsplash.com/photo-1575012412382-b7c489571d5f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VGVlc3RhJTIwUml2ZXJ8ZW58MHx8MHx8fDA%3D"
  },
  {
    name: "Rangeet River",
    location: "Chitrey",
    difficulty: "Moderate to Advanced",
    duration: "2 - 3 hours",
    description: "Most sought after adventure with magnificent scenery and challenging rapids",
    highlights: ["Chitrey & Rangeet", "First class rafting", "Canoeing adventures", "Accomplished guides"],
    bestFor: "Experienced rafters",
    image: "https://images.unsplash.com/photo-1636294734011-3a642de28d8a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UmFuZ2VldCUyMFJpdmVyfGVufDB8fDB8fHww"
  },
  {
    name: "Ganga River",
    location: "Rishikesh, Uttarakhand",
    difficulty: "Beginner Friendly",
    duration: "2 - 4 hours",
    description: "One of India's major and holiest rivers, perfect for first-timers and families",
    highlights: ["Close to Delhi", "Hub of white-water rafting", "Best rapids", "Weekend getaway"],
    bestFor: "First-timers & families",
    image: "https://images.unsplash.com/photo-1653392083932-d5e9e7d2ccd1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEdhbmdhJTIwUml2ZXJ8ZW58MHx8MHx8fDA%3D"
  },
  {
    name: "Alaknanda River",
    location: "Uttarakhand",
    difficulty: "Challenging",
    duration: "Full Day",
    description: "Second major tributary of the Ganga with spectacular scenery and challenging white water",
    highlights: ["Hillary's Fall rapid", "Expedition rafting", "Spectacular scenery", "Mountain tributaries"],
    bestFor: "Experienced rafters",
    image: "https://images.unsplash.com/photo-1742915424822-e74c3cb6c45b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QWxha25hbmRhJTIwUml2ZXJ8ZW58MHx8MHx8fDA%3D"
  }
];

const raftingRoutes = [
  {
    name: "Melli to 29th Mile",
    difficulty: "Easy",
    duration: "1.5 hours",
    suitableFor: "Non-swimmers",
    description: "Gentle float with magnificent scenery"
  },
  {
    name: "Melli to Kalijhora",
    difficulty: "Easy to Moderate",
    duration: "3 hours",
    suitableFor: "Non-swimmers",
    description: "Longer route with calm waters"
  },
  {
    name: "Tarkhola to Malli",
    difficulty: "Moderate",
    duration: "2 hours",
    suitableFor: "Swimmers",
    description: "Regulated route with moderate rapids"
  },
  {
    name: "Tarkhola to 29 Mile",
    difficulty: "Moderate to Challenging",
    duration: "3 hours",
    suitableFor: "Swimmers",
    description: "Extended route with varied rapids"
  }
];

const hotSpots = [
  {
    name: "Darjeeling",
    package: "5N & 6D",
    highlights: ["Hill station", "Tea gardens", "Mountain views", "Adventure sports"]
  },
  {
    name: "Digha",
    package: "4N & 5D",
    highlights: ["Beach destination", "Sea food", "Coastal beauty", "Water sports"]
  },
  {
    name: "Dooars / Duars",
    package: "5N & 6D",
    highlights: ["Wildlife sanctuaries", "Tea gardens", "Forest trails", "Elephant rides"]
  },
  {
    name: "Kolkata",
    package: "Custom",
    highlights: ["Cultural capital", "Heritage buildings", "Street food", "Art & culture"]
  },
  {
    name: "Sundarban",
    package: "3N & 4D",
    highlights: ["Mangrove forests", "Royal Bengal tigers", "River cruises", "Wildlife"]
  }
];

const packages = [
  {
    name: "Puri & Konark",
    duration: "5N & 6D",
    type: "Religious & Cultural",
    highlights: ["Jagannath Temple", "Sun Temple", "Beach", "Cultural heritage"]
  },
  {
    name: "Sikkim & Gangtok",
    duration: "5N & 6D",
    type: "Hill Station",
    highlights: ["Monasteries", "Mountain views", "Adventure", "Cultural experience"]
  },
  {
    name: "Bhutan & Paro",
    duration: "4N & 5D",
    type: "International",
    highlights: ["Paro Taktsang", "Thimpu", "Cultural heritage", "Mountain views"]
  },
  {
    name: "Bangkok & Pattaya",
    duration: "4N & 5D",
    type: "International",
    highlights: ["City tours", "Beaches", "Shopping", "Nightlife"]
  },
  {
    name: "Nepal/Kathmandu",
    duration: "4N & 5D",
    type: "International",
    highlights: ["Pashupatinath", "Mountain views", "Cultural heritage", "Adventure"]
  }
];

const tailorMadePackages = [
  "Boat Stay",
  "Camping",
  "Eco Tourism",
  "Event Management",
  "Film Shooting",
  "Heritage Tour & Walks",
  "Home Stay",
  "Jungle Safari",
  "Medical Tourism",
  "Religious Tour",
  "River Rafting",
  "Spa / Massage / Yoga",
  "Tea Tourism",
  "Theme Package",
  "Trekking",
  "Village Life"
];

const exclusivePackages = [
  "Medical Tourism"
];

const otherDestinations = [
  "Orissa",
  "Bihar", 
  "Jharkhand",
  "Sikkim",
  "Bhutan",
  "Nepal",
  "Thailand"
];

const requiredGear = [
  "Set of dry clothes",
  "Extra pair of sneakers or footwear",
  "Suntan / sun screen lotion",
  "Shorts",
  "Rain-coats",
  "Passport & photos (for foreign tourists)"
];

const specialOffers = [
  {
    title: "Book for 7 Nights",
    subtitle: "Get 8th Day FREE",
    description: "Extended stay offer for adventure enthusiasts"
  },
  {
    title: "Book, Refer & Earn",
    subtitle: "Cash Back up-to Rs.2.50 lac",
    description: "Refer friends and earn cash back rewards"
  }
];

export default function RiverRaftingPage() {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [activeTab, setActiveTab] = useState("rafting");

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative h-[80vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1629248457649-b082812aea6c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cml2ZXIlMjByYWZ0aW5nfGVufDB8fDB8fHww"
            alt="River Rafting & Adventure Tourism"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-blue-900/40"></div>
        </div>
        
        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-6 py-3 mb-8">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-white font-medium text-sm">Adventure Tourism</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              River Rafting &
              <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent relative">
                Adventure Tourism
                <svg className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-3/4 h-4" viewBox="0 0 300 16" fill="none">
                  <path d="M10 8 Q 75 4, 150 8 T 290 8" stroke="url(#gradient)" strokeWidth="3" strokeLinecap="round" />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#3B82F6" />
                      <stop offset="50%" stopColor="#06B6D4" />
                      <stop offset="100%" stopColor="#14B8A6" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed">
              West Bengal, India with Bengal Tourism • Special Tailor Made Packages
            </p>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">4</div>
                <div className="text-white/80 text-sm">Major Rivers</div>
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

      {/* ================= CATEGORY TABS ================= */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-cyan-50  border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-center">
            <div className="inline-flex rounded-full bg-gray-100 p-1">
              <button
                onClick={() => setActiveTab("rafting")}
                className={`px-6 py-2 rounded-full font-semibold transition ${
                  activeTab === "rafting" 
                    ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white" 
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                River Rafting
              </button>
              <button
                onClick={() => setActiveTab("packages")}
                className={`px-6 py-2 rounded-full font-semibold transition ${
                  activeTab === "packages" 
                    ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white" 
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Tour Packages
              </button>
              <button
                onClick={() => setActiveTab("offers")}
                className={`px-6 py-2 rounded-full font-semibold transition ${
                  activeTab === "offers" 
                    ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white" 
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Special Offers
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= RIVER RAFTING ================= */}
      {activeTab === "rafting" && (
       <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
  <div className="max-w-7xl mx-auto px-6">
    
    {/* Heading */}
    <div className="text-center mb-16">
      <h2 className="text-4xl font-black text-gray-900 mb-6">
        River Rafting Locations
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Experience the thrill of white water rafting in West Bengal and beyond
      </p>
    </div>

    {/* Grid Updated */}
    <div className="grid grid-cols-1 sm:grid-cols-2  gap-8">
      {raftingLocations.map((location, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3"
        >
          
          {/* Image Section */}
          <div className="relative aspect-[4/3] rounded-t-2xl bg-gray-100 flex items-center justify-center overflow-hidden">
            <Image
              src={location.image}
              alt={location.name}
              fill
              className="object-contain p-4"
            />

            {/* Difficulty Badge */}
            <div className="absolute top-3 right-3">
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow">
                {location.difficulty}
              </span>
            </div>

            {/* Location Badge */}
            <div className="absolute bottom-3 left-3">
              <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow">
                {location.location}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              {location.name}
            </h3>

            <p className="text-sm text-gray-600 mb-4">
              {location.description}
            </p>

            {/* Highlights */}
            <div className="mb-4">
              <h4 className="font-semibold text-gray-900 mb-2 text-sm">
                Highlights:
              </h4>
              <div className="flex flex-wrap gap-2">
                {location.highlights.map((highlight, idx) => (
                  <span
                    key={idx}
                    className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </div>

            {/* Info Box */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-sm">
              <div className="flex justify-between mb-2">
                <span className="text-blue-700 font-semibold">Duration:</span>
                <span className="text-gray-900">{location.duration}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-blue-700 font-semibold">Best For:</span>
                <span className="text-gray-900">{location.bestFor}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>

  </div>
</section>

      )}

      {/* ================= RAFTING ROUTES ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-6">Rafting Routes</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect route based on your skill level
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {raftingRoutes.map((route, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{route.name}</h3>
                <p className="text-gray-600 mb-4">{route.description}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Difficulty:</span>
                    <span className="font-semibold text-gray-900">{route.difficulty}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-semibold text-gray-900">{route.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Suitable For:</span>
                    <span className="font-semibold text-gray-900">{route.suitableFor}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TOUR PACKAGES ================= */}
      {activeTab === "packages" && (
        <section className="py-20 bg-gradient-to-br from-cyan-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-gray-900 mb-6">Tour Packages</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive packages for your adventure tourism
              </p>
            </div>

            <div className="space-y-12">
              {/* HOT SPOTS */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">HOT SPOTS</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {hotSpots.map((spot, index) => (
                    <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
                      <h4 className="text-lg font-bold text-gray-900 mb-2">{spot.name}</h4>
                      <p className="text-blue-600 font-semibold mb-3">{spot.package}</p>
                      <div className="flex flex-wrap gap-2">
                        {spot.highlights.map((highlight, idx) => (
                          <span key={idx} className="bg-blue-50 text-blue-700 px-2 py-1 rounded-full text-xs">
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* PACKAGES */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">PACKAGES</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {packages.map((pkg, index) => (
                    <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
                      <h4 className="text-lg font-bold text-gray-900 mb-2">{pkg.name}</h4>
                      <p className="text-green-600 font-semibold mb-2">{pkg.duration}</p>
                      <p className="text-gray-600 text-sm mb-3">{pkg.type}</p>
                      <div className="flex flex-wrap gap-2">
                        {pkg.highlights.map((highlight, idx) => (
                          <span key={idx} className="bg-green-50 text-green-700 px-2 py-1 rounded-full text-xs">
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* TAILOR MADE */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">TAILOR MADE</h3>
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {tailorMadePackages.map((pkg, index) => (
                      <div key={index} className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-4 text-center">
                        <p className="font-semibold text-gray-800">{pkg}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* EXCLUSIVE */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">EXCLUSIVE</h3>
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {exclusivePackages.map((pkg, index) => (
                      <div key={index} className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-lg p-4 text-center">
                        <p className="font-semibold text-gray-800">{pkg}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* OTHERS */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">OTHERS</h3>
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {otherDestinations.map((dest, index) => (
                      <div key={index} className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-lg p-4 text-center">
                        <p className="font-semibold text-gray-800">{dest}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ================= SPECIAL OFFERS ================= */}
      {activeTab === "offers" && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-gray-900 mb-6">Special Offers</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Exciting deals and rewards for adventure enthusiasts
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {specialOffers.map((offer, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all">
                  <div className="text-center mb-6">
                    <Award className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{offer.title}</h3>
                    <p className="text-xl text-blue-600 font-bold mb-4">{offer.subtitle}</p>
                    <p className="text-gray-600">{offer.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
<section className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

      {/* Video Section */}
      <div className="lg:col-span-2">
        <div className="bg-white rounded-3xl shadow-lg p-8">
          <h3 className="text-2xl font-bold mb-6 text-gray-800">
            Watch  River Rafting Tour Video
          </h3>

          <div className="aspect-video rounded-xl overflow-hidden">
            <iframe
              className="w-full h-full"
         src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
              title="Sundarban Boat Stay Tour Video"
              loading="lazy"
              allowFullScreen
            />
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div className="space-y-8 lg:sticky lg:top-24 h-fit">

        {/* Advertisement */}
        <div className="bg-gradient-to-br from-orange-500 to-yellow-500 text-white rounded-3xl shadow-lg p-8 text-center">
          <h3 className="text-xl font-bold mb-4">
            🚀 Advertise With Us
          </h3>

          <p className="text-sm opacity-90 mb-6">
            Promote your travel brand, tour packages, or special offers.
            Reach thousands of travelers visiting our platform.
          </p>

          <a
            href="/contact"
            className="inline-block bg-white text-orange-600 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition"
          >
            Contact For Promotion
          </a>
        </div>

        {/* Special Offer */}
        <div className="bg-gradient-to-br from-blue-600 to-teal-600 text-white rounded-3xl shadow-lg p-8 text-center">
          <h3 className="text-xl font-bold mb-4">
            🌍 Travel Partner Promotion
          </h3>

          <p className="text-sm opacity-90 mb-6">
            Showcase your brand, hotel deals or travel experiences
            to our growing travel audience.
          </p>

          <a
            href="/contact"
            className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition"
          >
            Contact For Promotion
          </a>
        </div>

      </div>
    </div>
  </div>
</section>
      {/* ================= REQUIRED GEAR ================= */}
      <section className="py-20 bg-gradient-to-br from-cyan-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-6">Required Gear</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Essential items for your river rafting adventure
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {requiredGear.map((item, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center text-white mr-4 flex-shrink-0">
                    <Check className="w-6 h-6" />
                  </div>
                  <span className="text-gray-800 font-semibold">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= SAFETY INFO ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-6">Safety Information</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your safety is our top priority
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Best Time to Visit</h3>
                <p className="text-gray-700 mb-4">
                  It is advisable to avoid this sport during monsoon or just a month after monsoon. 
                  Rest of the period is comparatively safe.
                </p>
                <div className="bg-green-100 border border-green-200 rounded-xl p-4">
                  <h4 className="font-bold text-green-900 mb-2">Recommended Seasons:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Spring (March to May)</li>
                    <li>• Autumn (October to December)</li>
                    <li>• Winter (January to February)</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Safety Measures</h3>
                <p className="text-gray-700 mb-4">
                  Well trained members and quality equipment will assure guests a safe and pleasant ride.
                </p>
                <div className="bg-blue-100 border border-blue-200 rounded-xl p-4">
                  <h4 className="font-bold text-blue-900 mb-2">Safety Features:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Government authorized guides</li>
                    <li>• Quality equipment</li>
                    <li>• Safety briefing before rafting</li>
                    <li>• Emergency support available</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

        <PackagePricing 
           title="River Rafting Tour Packages"
           subtitle="Choose your perfect water adventure duration"
         />
   
          
       <ContactCTA />
    </>
  );
}
