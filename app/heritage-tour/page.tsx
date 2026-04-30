"use client";

import { useState } from "react";
import Image from "next/image";
import { MapPin, Calendar, Users, Star, Clock, Check, Heart, Camera, Building, Book, Trees, Church, University, Globe, Utensils, ShoppingBag, Coffee, Navigation, Sunset, Mountain } from "lucide-react";
import ContactCTA from "@/components/ContactCTA";
import PackagePricing from "@/components/PackagePricing";

const kolkataHeritage = [
  {
    name: "Dalhausi Square",
    description: "Business Hub & Street Food",
    year: "1867",
    icon: Building,
    features: ["Colonial architecture", "Street food paradise", "Shopping district", "Cultural hub"],
    image: "/DalhausiSquare.jpeg"
  },
  {
    name: "Botanical Gardens",
    description: "World's largest Banyan tree",
    year: "1787",
    icon: Trees,
    features: ["Largest banyan tree", "Rare plant species", "Research center", "Beautiful gardens"],
    image: "/BotanicalGardens.jpeg"
  },
  {
    name: "College Street",
    description: "Book lovers Paradise",
    year: "19th Century",
    icon: Book,
    features: ["Book stores", "Academic hub", "Literary cafes", "Student area"],
    image: "/CollegeStreet.jpeg"
  },
  {
    name: "Indian Museum",
    description: "Founded in 1814",
    year: "1814",
    icon: Building,
    features: ["Oldest museum", "Rare artifacts", "Natural history", "Art collections"],
    image: "/IndianMuseum.jpeg"
  },
  {
    name: "Victoria Memorial Hall",
    description: "In memory of Queen Victoria of England",
    year: "1921",
    icon: Building,
    features: ["Marble architecture", "British heritage", "Museum", "Gardens"],
    image: "/VictoriaMemorial.jpeg"
  },
  {
    name: "Marble Palace",
    description: "House of Raja Rajendra Mullick",
    year: "1835",
    icon: Building,
    features: ["Marble architecture", "Art collections", "Historic furniture", "Royal heritage"],
    image: "/MarblePalace.jpeg"
  },
  {
    name: "Town Hall",
    description: "Roman Doric style",
    year: "1853",
    icon: Building,
    features: ["Greek architecture", "Civic center", "Historic meetings", "Public building"],
    image: "/TownHall.jpeg"
  },
  {
    name: "St. Paul's Cathedral",
    description: "Gothic Revival style",
    year: "1847",
    icon: Church,
    features: ["Gothic architecture", "Religious heritage", "Stained glass", "Historic church"],
    image: "/StPaul.jpeg"
  }
];



const countrysideHeritage = [
  {
    name: "Bandel Church & European Campsite",
    location: "Bandel",
    description: "Historic church and colonial remnants",
    features: ["Colonial architecture", "Religious heritage", "Historical campsite"],
    image: "/Bandel.jpeg"
  },
  {
    name: "Baluchar Sari, Dokra & Panchmura",
    location: "Bishnupur",
    description: "Traditional crafts and textiles",
    features: ["Baluchari saris", "Dokra metal crafts", "Panchmura temples"],
    image: "/Baluchar.jpeg"
  },
  {
    name: "Cooch Behar Palace",
    location: "Cooch Behar",
    description: "Royal palace of Cooch Behar",
    features: ["Mughal architecture", "Royal heritage", "Historic palace"],
    image: "/CoochBeharPalace.jpeg"
  },
  {
    name: "French Institute",
    location: "Chandernagore",
    description: "French colonial heritage",
    features: ["French architecture", "Historical institute", "Cultural heritage"],
    image: "/Chandernagore.jpeg"
  },
  {
    name: "Madan Mohan Temple",
    location: "Bishnupur",
    description: "Terracotta temple",
    features: ["Terracotta architecture", "Religious heritage", "Temple town"],
    image: "/Madan.jpeg"
  },
  {
    name: "Hazarduari & Imambara",
    location: "Murshidabad",
    description: "Mughal architecture",
    features: ["Mughal heritage", "Historic monuments", "Architectural marvels"],
    image: "/Hazarduari.jpeg"
  },
  {
    name: "Shantiniketan & Bolpur",
    location: "Birbhum",
    description: "Abode of Peace",
    features: ["Visva-Bharati University", "Rabindranath Tagore", "Cultural center"],
    image: "/Shantiniketan.jpeg"
  }
];

const experiences = [
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
    description: "Capture the beauty of Bengal's heritage"
  },
  {
    icon: ShoppingBag,
    title: "Local Shopping",
    description: "Traditional crafts and souvenirs"
  },
  {
    icon: Coffee,
    title: "Cultural Experiences",
    description: "Experience local traditions and rituals"
  }
];

export default function HeritageTourPage() {
  const [selectedCategory, setSelectedCategory] = useState("kolkata");
  const [showDetails, setShowDetails] = useState(null);

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative h-[80vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1765510103179-0c2f628d2ff2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGN1bHR1cmFsJTIwdG91cmlzbXxlbnwwfHwwfHx8MA%3D%3D"
            alt="Heritage Tour & Trails"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-brown-900/40"></div>
        </div>
        
        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-6 py-3 mb-8">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-white font-medium text-sm">Heritage Tourism</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Heritage Tour &
              <span className="block bg-gradient-to-r from-amber-400 via-orange-400 to-brown-400 bg-clip-text text-transparent relative">
                Trails
                <svg className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-3/4 h-4" viewBox="0 0 300 16" fill="none">
                  <path d="M10 8 Q 75 4, 150 8 T 290 8" stroke="url(#gradient)" strokeWidth="3" strokeLinecap="round" />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#F59E0B" />
                      <stop offset="50%" stopColor="#F97316" />
                      <stop offset="100%" stopColor="#92400E" />
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
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">50+</div>
                <div className="text-white/80 text-sm">Heritage Sites</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">200+</div>
                <div className="text-white/80 text-sm">Years History</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">Custom</div>
                <div className="text-white/80 text-sm">Packages</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">Guided</div>
                <div className="text-white/80 text-sm">Tours</div>
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
      <section className="py-16 bg-gradient-to-br from-amber-50 to-orange-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-center">
            <div className="inline-flex rounded-full bg-gray-100 p-1">
              <button
                onClick={() => setSelectedCategory("kolkata")}
                className={`px-6 py-2 rounded-full font-semibold transition ${
                  selectedCategory === "kolkata" 
                    ? "bg-gradient-to-r from-amber-600 to-orange-600 text-white" 
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Kolkata Heritage
              </button>
              <button
                onClick={() => setSelectedCategory("countryside")}
                className={`px-6 py-2 rounded-full font-semibold transition ${
                  selectedCategory === "countryside" 
                    ? "bg-gradient-to-r from-amber-600 to-orange-600 text-white" 
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Countryside
              </button>
              <button
                onClick={() => setSelectedCategory("cultural")}
                className={`px-6 py-2 rounded-full font-semibold transition ${
                  selectedCategory === "cultural" 
                    ? "bg-gradient-to-r from-amber-600 to-orange-600 text-white" 
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Cultural Experiences
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= KOLKATTA HERITAGE ================= */}
      {selectedCategory === "kolkata" && (
        <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-gray-900 mb-6">Kolkata Heritage Sites</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore the colonial and cultural heritage of the City of Joy
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {kolkataHeritage.map((site, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative h-48 rounded-t-xl overflow-hidden">
                    <Image
                      src={site.image}
                      alt={site.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-3 left-3">
                      <span className="bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                        {site.year}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{site.name}</h3>
                    <p className="text-gray-600 mb-4">{site.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {site.features.map((feature, idx) => (
                        <span key={idx} className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ================= COUNTRYSIDE HERITAGE ================= */}
      {selectedCategory === "countryside" && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-gray-900 mb-6">Bengal Countryside Heritage</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover the historical places and traditional crafts of rural Bengal
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {countrysideHeritage.map((site, index) => (
                <div key={index} className="bg-gradient-to-br from-green-50 to-amber-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative h-48 rounded-t-xl overflow-hidden">
                    <Image
                      src={site.image}
                      alt={site.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute top-3 right-3">
                      <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                        {site.location}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{site.name}</h3>
                    <p className="text-gray-600 mb-4">{site.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {site.features.map((feature, idx) => (
                        <span key={idx} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ================= CULTURAL EXPERIENCES ================= */}
      {selectedCategory === "cultural" && (
        <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-gray-900 mb-6">Cultural Experiences</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Immerse yourself in the local culture and traditions of Bengal
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {experiences.map((experience, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mb-6">
                    <experience.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{experience.title}</h3>
                  <p className="text-gray-600 mb-4">{experience.description}</p>
                  {experience.items && (
                    <ul className="space-y-2">
                      {experience.items.map((item, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-600">
                          <span className="text-purple-600 mr-2">•</span>
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
      )}

      {/* ================= CULTURAL NOTE ================= */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Local Culture (Must Watch)</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              We tell our guests to experience any of the rituals given under the Religious Tours and undertake any of the local sights given under the Boat Stay & Heritage Walks to experience the local flavours of Bengal to encourage local artisans & workers for a sustainable living.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-gray-900 mb-3">Theme Package & Village Life</h4>
                <p className="text-gray-600">
                  Experience authentic village life and traditional Bengal culture through our specially curated packages.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-3">Heritage Walks</h4>
                <p className="text-gray-600">
                  Guided walks through historic areas with expert commentary on local history and culture.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
<section className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

      {/* Video Section */}
      <div className="lg:col-span-2">
        <div className="bg-white rounded-3xl shadow-lg p-8">
          <h3 className="text-2xl font-bold mb-6 text-gray-800">
            Watch Heritage Tour Video
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

       <PackagePricing 
          title="Heritage Tour Packages"
          subtitle="Choose your perfect heritage tour duration"
        />
  
         
      <ContactCTA />
    </>
  );
}
