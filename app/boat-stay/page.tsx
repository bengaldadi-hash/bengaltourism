"use client";

import { useState } from "react";
import Image from "next/image";
import { MapPin, Calendar, Users, Star, Clock, Check, Heart, Navigation, Camera, Utensils, Trees, Fish, Waves } from "lucide-react";
import PackagePricing from '@/components/PackagePricing';
import ContactCTA from "@/components/ContactCTA";

const highlights = [
  {
    icon: Trees,
    title: "Sundarban Mangroves",
    description: "World's largest mangrove forest (4000 sq kms)"
  },
  {
    icon: Fish,
    title: "Royal Bengal Tiger",
    description: "Kingdom of the majestic Royal Bengal Tiger"
  },
  {
    icon: Navigation,
    title: "River Cruises",
    description: "Luxury cruises on Hooghly/Ganges rivers"
  },
  {
    icon: Camera,
    title: "Wildlife Photography",
    description: "Perfect for nature and wildlife photography"
  }
];

const placesOfInterest = [
  "Sajne Khali",
  "Dabu Picnic Spot", 
  "Marich Jhapi",
  "Gosaba",
  "Kumir Mari",
  "Sudhaannya Khali Watch Tower",
  "Do Banki Watch Tower",
  "Deulbharani Khari",
  "Pirkhali",
  "Chora Gaji Khali",
  "Naubanki",
  "Jhar Khal",
  "Sarak Khali",
  "Netidhopani Watch Tower",
  "Bana Bibi Bharani",
  "Saptamukhani",
  "Thakurani",
  "Hatiani",
  "Doani",
  "Chemaguri",
  "Luxury River Cruises on the river Hooghly/Ganges",
  "Bhagabatpur Crocodile Project"
];

const nearbyPlaces = [
  { name: "Sajnekhali", description: "Main tourist hub" },
  { name: "Peechkali", description: "Scenic viewpoint" },
  { name: "Namkhana", description: "Gateway to Sundarbans" },
  { name: "Dhamakhali", description: "River crossing point" },
  { name: "Bakkhali", description: "Tropical cocktail beach" },
  { name: "Henry's Island", description: "Serene island getaway" },
  { name: "Frazergunj", description: "Fishing harbour" },
  { name: "Gadiara", description: "Three rivers meet" },
  { name: "Raichak", description: "Mouth of river Hooghly" },
  { name: "Diamond Harbour", description: "Historic port town" }
];

const experiences = [
  {
    icon: Heart,
    title: "Local Culture",
    description: "Experience authentic Bengali rituals and traditions"
  },
  {
    icon: Utensils,
    title: "Must Try Cuisine",
    items: [
      "Authentic Bengali Fish curries",
      "Crab & Prawn preparations", 
      "Lamb curries & Vegetable dishes",
      "Traditional Rice preparations",
      "Rosogolla, Mishti Doi & Sondesh"
    ]
  },
  {
    icon: Camera,
    title: "Photography Opportunities",
    description: "Capture stunning landscapes and wildlife"
  }
];

export default function BoatStayPage() {
  const [selectedPackage, setSelectedPackage] = useState("");

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative h-[80vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1715285615481-bc99e14eecc2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Uml2ZXIlMjBDcnVpc2VzfGVufDB8fDB8fHww"
            alt="Boat Stay & River Cruises"
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
              <span className="text-white font-medium text-sm">Tailor Made Experience</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Boat Stay &
              <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent relative">
                River Cruises
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
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">4000</div>
                <div className="text-white/80 text-sm">Sq kms Forest</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">Custom</div>
                <div className="text-white/80 text-sm">Package Design</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">Luxury</div>
                <div className="text-white/80 text-sm">River Cruises</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">24/7</div>
                <div className="text-white/80 text-sm">Support</div>
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

      {/* ================= PACKAGE DESCRIPTION ================= */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-6">Special Tailor Made Combination Package</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Number of Days & Cost can be designed on Request
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Kingdom of the Majestic Royal Bengal Tiger</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  World's largest mangrove forest spanning 4000 square kilometers. Experience the rustic jungle, 
                  magical moments of suspended reality and much more...
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <h4 className="font-bold text-blue-900 mb-3">Package Highlights:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Accomodation in AC cabins in Launch</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Expert naturalist guides for wildlife spotting</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>All meals featuring authentic Bengali cuisine</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Photography equipment and guidance</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="relative h-96 rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1710661428083-2bdb61d37aaa?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fFJpdmVyJTIwQ3J1aXNlc3xlbnwwfHwwfHx8MA%3D%3D"
                  alt="Sundarban Boat Stay"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PLACES OF INTEREST ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-6">Places of Interest</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore the diverse attractions of Sundarbans
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {placesOfInterest.map((place, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl p-4 text-center hover:shadow-lg transition-all">
                <MapPin className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                <p className="text-sm font-semibold text-gray-800">{place}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= NEARBY ATTRACTIONS ================= */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-6">At a Short Distance</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore nearby attractions and experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {nearbyPlaces.map((place, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all">
                <div className="flex items-center mb-4">
                  <MapPin className="w-6 h-6 text-blue-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">{place.name}</h3>
                </div>
                <p className="text-gray-600">{place.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= EXPERIENCES ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-6">Authentic Experiences</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Immerse yourself in local culture and cuisine
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {experiences.map((experience, index) => (
              <div key={index} className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-yellow-600 rounded-2xl flex items-center justify-center mb-6">
                  <experience.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{experience.title}</h3>
                <p className="text-gray-700 mb-4">{experience.description}</p>
                {experience.items && (
                  <ul className="space-y-2">
                    {experience.items.map((item, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-600">
                        <span className="text-orange-600 mr-2">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ADDITIONAL ATTRACTIONS ================= */}
      <section className="py-20 bg-gradient-to-br from-teal-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-6">More Attractions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Additional experiences and nearby destinations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Bhagabatpur Crocodile Project</h3>
              <p className="text-gray-700 mb-4">
                Visit the crocodile breeding and research center to learn about conservation efforts 
                and see these magnificent reptiles up close.
              </p>
              <div className="flex items-center text-blue-600">
                <Waves className="w-5 h-5 mr-2" />
                <span className="font-semibold">Wildlife Sanctuary</span>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Jungle Safari - Dooars Forest</h3>
              <p className="text-gray-700 mb-4">
                Extend your adventure with jungle safari experiences in the Dooars forest ranges 
                for more wildlife encounters.
              </p>
              <div className="flex items-center text-green-600">
                <Trees className="w-5 h-5 mr-2" />
                <span className="font-semibold">Forest Adventure</span>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ================= VIDEO & ADS SECTION ================= */}
<section className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

      {/* Video Section */}
      <div className="lg:col-span-2">
        <div className="bg-white rounded-3xl shadow-lg p-8">
          <h3 className="text-2xl font-bold mb-6 text-gray-800">
            Watch  Boat Stay Tour Video
          </h3>

          <div className="aspect-video rounded-xl overflow-hidden">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/nS4aH2tXqjo"
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

      {/* ================= PACKAGE PRICING ================= */}
      <PackagePricing 
        title="Boat Stay Tour Packages"
        subtitle="Choose your perfect water adventure duration"
      />
          
      <ContactCTA />
    </>
  );
}
