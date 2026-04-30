"use client";

import { useState } from "react";
import Image from "next/image";
import { MapPin, Calendar, Users, Star, Clock, Check, Heart, Camera, Trees, Mountain, Navigation, Sun, Compass, Globe, Building, Utensils, Coffee } from "lucide-react";
import PackagePricing from '@/components/PackagePricing';
import ContactCTA from "@/components/ContactCTA";

const wildlifeSanctuaries = [
  {
    name: "Jaldapara Wildlife Sanctuary",
    location: "Alipurduar District",
    altitude: "200 ft",
    specialty: "One Horned Rhino",
    animals: ["One Horned Rhino", "Indian Elephants", "Bison", "Leopards", "Deer", "Birds"],
    features: ["Grassland habitat", "Riverine forests", "Wildlife viewing", "Safari rides"],
    image: "https://images.unsplash.com/photo-1500463959177-e0869687df26?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGp1bmdsZSUyMHNhZmFyaXxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    name: "Gorumara National Park",
    location: "Jalpaiguri District",
    altitude: "300 ft",
    specialty: "Indian Elephants",
    animals: ["Indian Elephants", "One Horned Rhino", "Leopards", "Bison", "Deer", "Birds"],
    features: ["Mixed forests", "Grasslands", "Elephant corridor", "Wildlife photography"],
    image: "https://images.unsplash.com/photo-1562183667-a159d28118ec?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGp1bmdsZSUyMHNhZmFyaXxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    name: "Chapramari Wildlife Sanctuary",
    location: "Jalpaiguri District",
    altitude: "250 ft",
    specialty: "Wildlife Sanctuary",
    animals: ["Leopards", "Elephants", "Deer", "Bison", "Birds", "Reptiles"],
    features: ["Tropical forests", "Wildlife viewing", "Nature trails", "Photography"],
    image: "https://images.unsplash.com/photo-1590514526581-bf7feaee0217?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8anVuZ2xlJTIwc2FmYXJpfGVufDB8fDB8fHww"
  },
  {
    name: "Buxa Tiger Reserve",
    location: "Alipurduar District",
    altitude: "150 ft",
    specialty: "Tiger Reserve",
    animals: ["Royal Bengal Tiger", "Leopards", "Elephants", "Bison", "Deer", "Birds"],
    features: ["Tiger habitat", "Historic fort", "Riverine forests", "Wildlife viewing"],
    image: "https://images.unsplash.com/photo-1742833776566-c4a790252ff9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGp1bmdsZSUyMHNhZmFyaXxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    name: "Neora Valley National Park",
    location: "Kalimpong District",
    altitude: "5,000 ft",
    specialty: "Himalayan Wildlife",
    animals: ["Red Panda", "Clouded Leopard", "Himalayan Tahr", "Birds", "Butterflies"],
    features: ["Himalayan forests", "Rich biodiversity", "Trekking trails", "Nature walks"],
    image: "https://images.unsplash.com/photo-1572065897336-d808c386c9ad?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8anVuZ2xlJTIwc2FmYXJpfGVufDB8fDB8fHww"
  }
];

const nearbyDestinations = [
  {
    name: "Jayanti",
    description: "Scenic riverside location",
    specialty: "River views, wildlife"
  },
  {
    name: "Rajabhatkhawa",
    description: "Forest rest house",
    specialty: "Wildlife viewing"
  },
  {
    name: "Bindu",
    description: "Last village on India-Bhutan border",
    specialty: "Border views, rivers"
  },
  {
    name: "Jaldhaka",
    description: "River valley",
    specialty: "River activities"
  },
  {
    name: "Samsin",
    description: "Forest area",
    specialty: "Nature trails"
  },
  {
    name: "SantaleyKhola",
    description: "Scenic location",
    specialty: "Natural beauty"
  },
  {
    name: "Suntalekhola",
    description: "Beautiful valley",
    specialty: "Nature walks"
  },
  {
    name: "Rasikbill",
    description: "Wildlife area",
    specialty: "Bird watching"
  },
  {
    name: "Toto Para",
    description: "Tribal village",
    specialty: "Cultural experience"
  },
  {
    name: "Dhupjhora",
    description: "Forest location",
    specialty: "Wildlife viewing"
  },
  {
    name: "Chilapata",
    description: "Forest area",
    specialty: "Nature trails"
  },
  {
    name: "Raimatang",
    description: "Scenic location",
    specialty: "Natural beauty"
  },
  {
    name: "Bhutan Ghat",
    description: "Border location",
    specialty: "River views"
  },
  {
    name: "Bodaganj",
    description: "Forest area",
    specialty: "Wildlife viewing"
  },
  {
    name: "Ambari",
    description: "Natural location",
    specialty: "Nature walks"
  },
  {
    name: "Kathambari",
    description: "Scenic area",
    specialty: "Natural beauty"
  },
  {
    name: "Kranti and Odlabari",
    description: "Forest locations",
    specialty: "Wildlife viewing"
  },
  {
    name: "Sikiajhora",
    description: "River location",
    specialty: "River activities"
  },
  {
    name: "Tashigaon",
    description: "Forest village",
    specialty: "Cultural experience"
  },
  {
    name: "Chuna Bhatti",
    description: "Scenic location",
    specialty: "Natural beauty"
  },
  {
    name: "Lepchakh",
    description: "Tribal area",
    specialty: "Cultural experience"
  },
  {
    name: "Rovers Point",
    description: "View point",
    specialty: "Scenic views"
  },
  {
    name: "Mahakal cave",
    description: "Natural cave",
    specialty: "Adventure"
  }
];

const extendedDestinations = [
  {
    region: "Nearby Hill Stations",
    places: [
      "Mirik (Divine Lake)",
      "Kurseong (land of the White Orchid)",
      "Kalimpong",
      "Lava (Abode of the Gods)",
      "Rishap (Misty magic)",
      "Loleygaon",
      "Tinchuley",
      "Sandaphu (Trekkers delight)",
      "Lepchajagat"
    ]
  },
  {
    region: "Sikkim",
    places: [
      "Gangtok",
      "Rumtek",
      "Pelling",
      "Yuksom",
      "Ravangla",
      "Aritar Reshi",
      "Rongli",
      "Nathang Valley",
      "Rinchenpong",
      "Legship",
      "Norbugang",
      "Tsomgo lake",
      "Nathula Pass",
      "Baba Mandir",
      "Lachen",
      "Gurudongmar Lake",
      "Tso Lhamu Lake",
      "Lachung",
      "Yumthang",
      "Mangan",
      "Singhik",
      "Thangu",
      "Uttarey"
    ]
  },
  {
    region: "Bhutan",
    places: [
      "Paro",
      "Thimpu",
      "Phuentsholing",
      "Trongsa",
      "Bumathang",
      "Punakha",
      "Samdrup",
      "Jongkhar",
      "Lhuntse",
      "Ura Valley",
      "Trashigang"
    ]
  }
];

const safariTypes = [
  {
    name: "Jeep Safari",
    description: "4x4 vehicle safari through forest trails",
    duration: "2-3 hours",
    bestFor: "Wildlife viewing, photography",
    icon: Building
  },
  {
    name: "Elephant Safari",
    description: "Ride on elephant back through forests",
    duration: "1-2 hours",
    bestFor: "Close wildlife encounters",
    icon: Building
  },
  {
    name: "Jungle Trek",
    description: "Guided walking tours through forests",
    duration: "3-4 hours",
    bestFor: "Nature lovers, bird watching",
    icon: Building
  },
  {
    name: "Boat Safari",
    description: "River boat rides for wildlife viewing",
    duration: "1-2 hours",
    bestFor: "Aquatic wildlife, birds",
    icon: Navigation
  }
];

const includedServices = [
  "Accommodation in Forest Rest House",
  "All meals (Breakfast, Lunch, Dinner)",
  "Expert naturalist guide",
  "All transportation as per itinerary",
  "Wildlife photography assistance",
  "Binoculars and field guides",
  "First aid and safety equipment"
];

export default function JungleSafariPage() {
  const [selectedSanctuary, setSelectedSanctuary] = useState("");
  const [activeTab, setActiveTab] = useState("sanctuaries");

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative h-[80vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1669021820355-7186908380d9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8anVuZ2xlJTIwc2FmYXJpfGVufDB8fDB8fHww"
            alt="Jungle Safari & Expedition"
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
              <span className="text-white font-medium text-sm">Wildlife Tourism</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Jungle Safari &
              <span className="block bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent relative">
                Expedition
                <svg className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-3/4 h-4" viewBox="0 0 300 16" fill="none">
                  <path d="M10 8 Q 75 4, 150 8 T 290 8" stroke="url(#gradient)" strokeWidth="3" strokeLinecap="round" />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#10B981" />
                      <stop offset="50%" stopColor="#059669" />
                      <stop offset="100%" stopColor="#14B8A6" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed">
              West Bengal, India with Bengal Tourism • Home of One Horned Rhino & Indian Elephants
            </p>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">5</div>
                <div className="text-white/80 text-sm">Major Sanctuaries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">100+</div>
                <div className="text-white/80 text-sm">Wildlife Species</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">Custom</div>
                <div className="text-white/80 text-sm">Packages</div>
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
      <section className="py-16 bg-white  border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-center">
            <div className="inline-flex rounded-full bg-gray-100 p-1">
              <button
                onClick={() => setActiveTab("sanctuaries")}
                className={`px-6 py-2 rounded-full font-semibold transition ${
                  activeTab === "sanctuaries" 
                    ? "bg-gradient-to-r from-green-600 to-emerald-600 text-white" 
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Wildlife Sanctuaries
              </button>
              <button
                onClick={() => setActiveTab("nearby")}
                className={`px-6 py-2 rounded-full font-semibold transition ${
                  activeTab === "nearby" 
                    ? "bg-gradient-to-r from-green-600 to-emerald-600 text-white" 
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Nearby Destinations
              </button>
              <button
                onClick={() => setActiveTab("extended")}
                className={`px-6 py-2 rounded-full font-semibold transition ${
                  activeTab === "extended" 
                    ? "bg-gradient-to-r from-green-600 to-emerald-600 text-white" 
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Extended Destinations
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WILDLIFE SANCTUARIES ================= */}
   {activeTab === "sanctuaries" && (
  <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-black text-gray-900 mb-6">
          Wildlife Sanctuaries
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Home to the famous One Horned Rhino, Indian Elephants & other wildlife's natural habitat
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {wildlifeSanctuaries.map((sanctuary, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-between"
          >
            {/* Image Section */}
            <div>
              <div className="relative h-48 rounded-t-xl overflow-hidden">
                <Image
                  src={sanctuary.image}
                  alt={sanctuary.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                <div className="absolute top-3 right-3">
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {sanctuary.altitude}
                  </span>
                </div>

                <div className="absolute bottom-3 left-3">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {sanctuary.location}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {sanctuary.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {sanctuary.specialty}
                </p>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Wildlife:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {sanctuary.animals.map((animal, idx) => (
                      <span
                        key={idx}
                        className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs"
                      >
                        {animal}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {sanctuary.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Book Button */}
            <div className="px-6 pb-6">
              <a
                href="/book-tour"
                className="block w-full text-center bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
              >
                Book Now for 3N / 4D
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)}

      {/* ================= NEARBY DESTINATIONS ================= */}
      {activeTab === "nearby" && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-gray-900 mb-6">Nearby Destinations</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore the surrounding areas of wildlife sanctuaries
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {nearbyDestinations.map((destination, index) => (
                <div key={index} className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{destination.name}</h3>
                  <p className="text-gray-600 mb-3">{destination.description}</p>
                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm inline-block">
                    {destination.specialty}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ================= EXTENDED DESTINATIONS ================= */}
      {activeTab === "extended" && (
        <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-gray-900 mb-6">Extended Destinations</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore nearby hill stations, Sikkim, and Bhutan
              </p>
            </div>

            <div className="space-y-12">
              {extendedDestinations.map((region, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">{region.region}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {region.places.map((place, idx) => (
                      <div key={idx} className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-4 text-center">
                        <p className="font-semibold text-gray-800">{place}</p>
                      </div>
                    ))}
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
            Watch  Jungle safari Tour Video
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
      {/* ================= SAFARI TYPES ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-6">Safari Types</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose your preferred wildlife adventure
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {safariTypes.map((safari, index) => (
              <div key={index} className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                  <safari.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{safari.name}</h3>
                <p className="text-gray-600 mb-4">{safari.description}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-semibold text-gray-900">{safari.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Best For:</span>
                    <span className="font-semibold text-gray-900">{safari.bestFor}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= INCLUDED SERVICES ================= */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-6">All-Inclusive Services (Entry permits, Jeep / Elephant Safari cost excluded)</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete support for your wildlife adventure
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {includedServices.map((service, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center text-white mr-4 flex-shrink-0">
                    <Check className="w-6 h-6" />
                  </div>
                  <span className="text-gray-800 font-semibold">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= CUISINE ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-6">Must Try Cuisine</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience authentic Bengali cuisine during your wildlife adventure
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Authentic Bengali Dishes</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    <span className="text-gray-700">Fish curries - Fresh river fish preparations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    <span className="text-gray-700">Crab & Prawn curries - Seafood specialties</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    <span className="text-gray-700">Lamb curries - Traditional meat dishes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    <span className="text-gray-700">Vegetable preparations - Seasonal vegetables</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    <span className="text-gray-700">Traditional Rice - Steamed basmati rice</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Traditional Sweets</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    <span className="text-gray-700">Rosogolla - Soft cheese balls in sugar syrup</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    <span className="text-gray-700">Mishti Doi - Sweetened yogurt</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    <span className="text-gray-700">Sondesh - Cottage cheese sweets</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>


      
      {/* ================= PACKAGE PRICING ================= */}
      <PackagePricing 
        title="Jungle Safari Tour Packages"
        subtitle="Choose your perfect wildlife adventure duration"
      />
          
      
             
          <ContactCTA />
    </>
  );
}
