"use client";

import { useState } from "react";
import Image from "next/image";
import { MapPin, Calendar, Users, Star, Clock, Check, Heart, Camera, Film, Award, Play, Video, MapPinIcon, Mountain, Building, Phone, Mail } from "lucide-react";
import ContactCTA from "@/components/ContactCTA";
import PackagePricing from "@/components/PackagePricing";

const filmCategories = [
  {
    icon: Award,
    title: "Oscar Winners",
    description: "Films by Satyajit Ray and other Oscar recipients",
    color: "from-yellow-400 to-orange-500"
  },
  {
    icon: Camera,
    title: "Classic Cinema",
    description: "Timeless films by legendary directors",
    color: "from-purple-400 to-pink-500"
  },
  {
    icon: Video,
    title: "Contemporary Hits",
    description: "Recent blockbusters and critically acclaimed films",
    color: "from-blue-400 to-cyan-500"
  },
  {
    icon: Play,
    title: "International Projects",
    description: "Films by international directors shot in Bengal",
    color: "from-green-400 to-teal-500"
  }
];

const filmDirectors = [
  {
    name: "Satyajit Ray",
    films: ["Pather Panchali", "Nayak", "Jalsaghar", "Charulata", "Sonar Kella", "Gupi Gyne Bagha Byne"],
    oscar: true,
    description: "Oscar recipient - Legendary filmmaker"
  },
  {
    name: "Mrinal Sen",
    films: ["Mrigaya", "Akask Kusum", "Calcutta 71", "Padatik", "Genesis", "Khandhar"],
    oscar: false,
    description: "Realist filmmaker - Multiple National Awards"
  },
  {
    name: "Shyam Benegal",
    films: ["Netaji Subhas Chandra Bose", "Ankur", "Night's End", "Mandi"],
    oscar: false,
    description: "Parallel cinema pioneer"
  },
  {
    name: "Shakti Samanta",
    films: ["Aradhana", "Amar Prem", "Amanush", "Barsaat Ki Ek Raat"],
    oscar: false,
    description: "Commercial cinema legend"
  },
  {
    name: "Rituparno Ghosh",
    films: ["Memories in March", "Raincoat", "Chokher Bali"],
    oscar: false,
    description: "Contemporary auteur"
  },
  {
    name: "Aparna Sen",
    films: ["15 Park Avenue", "36 Chowringhee Lane", "Paroma", "The Japanese Wife"],
    oscar: false,
    description: "Award-winning actress-director"
  }
];

const contemporaryFilms = [
  { title: "Kahaani", director: "Sujoy Ghosh", year: "2012", genre: "Thriller" },
  { title: "Parineeta", director: "Pradeep Sarkar", year: "2013", genre: "Romance" },
  { title: "Barfi", director: "Anurag Basu", year: "2012", genre: "Drama" },
  { title: "Autograph", director: "Srijit Mukherji", year: "2010", genre: "Drama" },
  { title: "Baishey Srabon", director: "Srijit Mukherji", year: "2011", genre: "Drama" },
  { title: "Chotushkon", director: "Srijit Mukherji", year: "2014", genre: "Thriller" },
  { title: "Jaatishwar", director: "Srijit Mukherji", year: "2017", genre: "Action" },
  { title: "Mishwor Rahashya", director: "Srijit Mukherji", year: "2013", genre: "Thriller" },
  { title: "Hemlock Society", director: "Srijit Mukherji", year: "2012", genre: "Drama" }
];

const internationalFilms = [
  { title: "Slumdog Millionaire", director: "Danny Boyle", year: "2008", genre: "Drama" },
  { title: "The Namesake", director: "Mira Nair", year: "2006", genre: "Drama" },
  { title: "City of Joy", director: "Ronald Joffe", year: "1992", genre: "Drama" },
  { title: "Black Narcissus", director: "Michael Powell", year: "1947", genre: "Drama" },
  { title: "Octopussy", director: "John Glen", year: "1983", genre: "Action" },
  { title: "The Avengers", director: "Joss Whedon", year: "2012", genre: "Action" },
  { title: "Mon Amour", director: "Michael Haneke", year: "2012", genre: "Romance" },
  { title: "Fire, Earth, Water", director: "Deepa Mehta", year: "2005", genre: "Drama" }
];

const shootingLocations = [
  {
    name: "Kolkata Heritage Buildings",
    description: "Colonial architecture, historic mansions, heritage sites",
    films: ["36 Chowringhee Lane", "15 Park Avenue", "Maidan", "Victoria Memorial"],
    features: ["Period architecture", "Urban settings", "Historic significance"]
  },
  {
    name: "Rural Bengal Landscapes",
    description: "Villages, countryside, agricultural fields, rural life",
    films: ["Pather Panchali", "The Namesake", "Parineeta"],
    features: ["Authentic rural settings", "Natural beauty", "Traditional lifestyle"]
  },
  {
    name: "Urban Kolkata Streets",
    description: "Busy markets, residential areas, city life, contemporary settings",
    films: ["Kahaani", "Bong Connection", "Autograph"],
    features: ["Modern urban backdrop", "Street life", "Contemporary settings"]
  },
  {
    name: "River Ganges & Waterfront",
    description: "River banks, ghats, bridges, waterfront locations",
    films: ["City of Joy", "Gupi Gyne Bagha Byne"],
    features: ["Scenic water views", "Traditional ghats", "River activities"]
  }
];

const servicePackages = [
  {
    name: "Normal",
    price: "On Request",
    features: ["Basic location access", "Standard permits", "Essential support"],
    recommended: false
  },
  {
    name: "Deluxe",
    price: "On Request",
    features: ["Premium locations", "Priority permits", "Full support staff", "Equipment rental"],
    recommended: true
  },
  {
    name: "Luxury",
    price: "On Request",
    features: ["Exclusive locations", "VIP permits", "Dedicated team", "Full production support"],
    recommended: false
  }
];

export default function FilmShootingPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedDirector, setSelectedDirector] = useState(null);

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative h-[80vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1632187989763-c9c620420b4d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmlsbSUyMHNldHxlbnwwfHwwfHx8MA%3D%3D"
            alt="Film Shooting Locations"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-purple-900/40"></div>
        </div>
        
        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-6 py-3 mb-8">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-white font-medium text-sm">Film Production</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Film Shooting
              <span className="block bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent relative">
                Locations & Spots
                <svg className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-3/4 h-4" viewBox="0 0 300 16" fill="none">
                  <path d="M10 8 Q 75 4, 150 8 T 290 8" stroke="url(#gradient)" strokeWidth="3" strokeLinecap="round" />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#F59E0B" />
                      <stop offset="50%" stopColor="#F97316" />
                      <stop offset="100%" stopColor="#EF4444" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed">
              West Bengal, India with Bengal Tourism • Home to Classic Cinema
            </p>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">100+</div>
                <div className="text-white/80 text-sm">Classic Films</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">Oscar</div>
                <div className="text-white/80 text-sm">Winners</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">50+</div>
                <div className="text-white/80 text-sm">Locations</div>
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

      {/* ================= FILM CATEGORIES ================= */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-6">Classic Cinema Heritage</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Many classic cinemas by great film directors & Oscar recipients shot here in West Bengal
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filmCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{category.title}</h3>
                <p className="text-gray-600">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= LEGENDARY DIRECTORS ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-6">Legendary Directors</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Master filmmakers who shaped Indian cinema
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filmDirectors.map((director, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{director.name}</h3>
                    <p className="text-gray-600 text-sm">{director.description}</p>
                  </div>
                  {director.oscar && (
                    <div className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-bold">
                      🏆 Oscar Winner
                    </div>
                  )}
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Notable Films:</h4>
                  <div className="flex flex-wrap gap-2">
                    {director.films.map((film, idx) => (
                      <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                        {film}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CONTEMPORARY FILMS ================= */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-6">Contemporary Hits</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Recent blockbusters and critically acclaimed films
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contemporaryFilms.map((film, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{film.title}</h3>
                    <p className="text-gray-600 text-sm">{film.director}</p>
                  </div>
                  <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    {film.year}
                  </div>
                </div>
                <div className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm inline-block">
                  {film.genre}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= INTERNATIONAL FILMS ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-6">International Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Films by international directors shot in Bengal
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {internationalFilms.map((film, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{film.title}</h3>
                <p className="text-gray-600 text-sm mb-2">{film.director}</p>
                <div className="flex justify-between items-center">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                    {film.year}
                  </span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                    {film.genre}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SHOOTING LOCATIONS ================= */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-6">Popular Shooting Locations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Diverse landscapes and iconic spots for film production
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {shootingLocations.map((location, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
                <div className="flex items-center mb-4">
                  <MapPin className="w-6 h-6 text-blue-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">{location.name}</h3>
                </div>
                <p className="text-gray-700 mb-4">{location.description}</p>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Featured Films:</h4>
                  <div className="flex flex-wrap gap-2">
                    {location.films.map((film, idx) => (
                      <span key={idx} className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-sm">
                        {film}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {location.features.map((feature, idx) => (
                    <span key={idx} className="bg-green-50 text-green-700 px-2 py-1 rounded text-sm">
                      ✓ {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
     


<section className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

      {/* Video Section */}
      <div className="lg:col-span-2">
        <div className="bg-white rounded-3xl shadow-lg p-8">
          <h3 className="text-2xl font-bold mb-6 text-gray-800">
            Watch  Film Shooting Video
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
      {/* ================= ALL-INCLUSIVE SERVICES ================= */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-6">All-Inclusive Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete film production support with logistic, boarding, and more
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Logistic Management",
                "Boarding & Lodging",
                "All Meals",
                "Location Selection",
                "Picnic Arrangements",
                "Hostess & Escorts",
                "Transportation",
                "Security Services",
                "Technical Support",
                "Equipment Rental",
                "Permits & Permissions",
                "Local Coordination"
              ].map((service, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-yellow-600 rounded-full flex items-center justify-center text-white mr-4 flex-shrink-0">
                    <Check className="w-6 h-6" />
                  </div>
                  <span className="text-gray-800 font-semibold">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

       <PackagePricing 
           title="Film Shooting Packages"
           subtitle="Choose your perfect film shooting duration"
         />
   <ContactCTA />
    </>
  );
}
