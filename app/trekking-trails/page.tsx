"use client";

import { useState } from "react";
import Image from "next/image";
import { MapPin, Calendar, Users, Star, Clock, Check, Heart, Camera, Trees, Mountain, Navigation, Sun, Compass, Globe, Building, Utensils, Coffee, MapPinIcon, Tent, Footprints } from "lucide-react";
import ContactCTA from '@/components/ContactCTA';
import PackagePricing from '@/components/PackagePricing';

const trekkingRoutes = [
  {
    name: "Singalila National Park",
    altitude: "3,636m (11,929 ft)",
    duration: "3-7 days",
    difficulty: "Moderate to Challenging",
    description: "Steal a look at the Everest on this trek located in the higher ridges of Darjeeling region",
    highlights: ["Mt. Everest views", "Mt. Kanchenjunga views", "Red Panda habitat", "Himalayan black bears"],
    features: ["Vintage Land Rover jeeps", "Govt. trekkers' huts", "Forest areas", "Flowering plants"],
    bestTime: "March to May, October to December",
    image: "https://images.unsplash.com/photo-1615462067592-d7ae31015538?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U2luZ2FsaWxhJTIwTmF0aW9uYWwlMjBQYXJrfGVufDB8fDB8fHww"
  },
  {
    name: "Sandakphu Trek",
    altitude: "3,636m (11,929 ft)",
    duration: "5-9 Nights & 6-10 Days",
    difficulty: "Moderate",
    description: "Highest point in West Bengal with panoramic views of Himalayan peaks",
    highlights: ["360° Himalayan views", "Sunrise over Kanchenjunga", "Everest visibility", "Singalila National Park"],
    features: ["Basic accommodation", "Guided trek", "Permits included", "Transport from NJP"],
    bestTime: "March to May, October to December",
    image: "https://images.unsplash.com/photo-1756487730941-d898ac88d76a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8U25vdyUyMENvdmVyZWQlMjBNb3VudGFpbnMlMjAoJTIwc2xlZXBpbmclMjBidWRkaGEpfGVufDB8fDB8fHww"
  },
  {
    name: "Dzongri Trek",
    altitude: "4,000m (13,123 ft)",
    duration: "7-10 Nights & 8-11 Days",
    difficulty: "Challenging",
    description: "Advanced trekking route with high altitude challenges and rewards",
    highlights: ["High altitude experience", "Remote wilderness", "Mountain views", "Adventure trekking"],
    features: ["Expert guides", "High altitude acclimatization", "Advanced equipment", "Safety measures"],
    bestTime: "April to June, September to November",
    image: "https://images.unsplash.com/photo-1669418249791-3e8374fc3572?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RHpvbmdyaSUyMFRyZWt8ZW58MHx8MHx8fDA%3D"
  },
  {
    name: "Green Lake Trek",
    altitude: "4,900m (16,076 ft)",
    duration: "10-13 Nights and 11-14 Days",
    difficulty: "Very Challenging",
    description: "Ultimate high-altitude adventure to the sacred Green Lake",
    highlights: ["Sacred Green Lake", "Highest altitude trek", "Spiritual experience", "Panoramic views"],
    features: ["Expert mountaineering guides", "Advanced equipment", "Medical support", "Emergency evacuation"],
    bestTime: "May to June, September to October",
    image: "https://images.unsplash.com/photo-1765132875604-01b23a4a0296?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

const trekFeatures = [
  {
    icon: Mountain,
    title: "Panoramic Views",
    description: "Unrivaled views of Mt. Kanchenjunga & Mt. Everest"
  },
  {
    icon: Trees,
    title: "Rich Flora",
    description: "Oaks, ferns, silver firs, bamboo, rhododendrons, orchids, magnolias"
  },
  {
    icon: Camera,
    title: "Wildlife",
    description: "Red Panda, Himalayan black bears, exotic birds"
  },
  {
    icon: Building,
    title: "Accommodation",
    description: "Govt. run trekkers' huts with basic facilities"
  }
];

const includedServices = [
  "Trekking permits and forest entry fees",
  "Accommodation in trekkers' huts",
  "All meals during trek",
  "Expert trekking guide",
  "Porter services for luggage",
  "First aid and medical support",
  "Transport from NJP/Bagdogra to trek start point",
  "Vintage Land Rover jeep transfers",
  "Camping equipment",
  "Safety and emergency equipment"
];

const trekEssentials = [
  "Trekking shoes with good grip",
  "Warm clothing layers",
  "Raincoat/windcheater",
  "Sunscreen and sunglasses",
  "First aid kit",
  "Personal medication",
  "Water bottle and water purification tablets",
  "Energy bars and snacks",
  "Headlamp/flashlight",
  "Camera and extra batteries",
  "Backpack with rain cover"
];

const trekkingTips = [
  {
    title: "Physical Fitness",
    description: "Good physical fitness is essential for high-altitude trekking"
  },
  {
    title: "Acclimatization",
    description: "Proper acclimatization is crucial to avoid altitude sickness"
  },
  {
    title: "Best Time to Trek",
    description: "March to May and October to December offer the best weather conditions"
  },
  {
    title: "Permits",
    description: "Forest permits and trekking permits are mandatory and must be arranged in advance"
  }
];

export default function TrekkingTrailsPage() {
  const [selectedRoute, setSelectedRoute] = useState("");
  const [activeTab, setActiveTab] = useState("routes");

  return (
    <>
    
      {/* ================= HERO ================= */}
      <section className="relative h-[80vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1619854538772-5e750af6f5b1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8SGltYWxheWFuJTIwUmFuZ2VzfGVufDB8fDB8fHww"
            alt="Trekking Trails in Himalayan Ranges"
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
              Trekking Trails in
              <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent relative">
                Himalayan Ranges
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
              North Bengal, India with Bengal Tourism • Special Tailor Made Packages
            </p>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">4,900m</div>
                <div className="text-white/80 text-sm">Max Altitude</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">14</div>
                <div className="text-white/80 text-sm">Max Days</div>
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
      <section className="py-16 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-center">
            <div className="inline-flex rounded-full bg-gray-100 p-1">
              <button
                onClick={() => setActiveTab("routes")}
                className={`px-6 py-2 rounded-full font-semibold transition ${
                  activeTab === "routes" 
                    ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white" 
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Trekking Routes
              </button>
              <button
                onClick={() => setActiveTab("features")}
                className={`px-6 py-2 rounded-full font-semibold transition ${
                  activeTab === "features" 
                    ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white" 
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Trek Features
              </button>
              <button
                onClick={() => setActiveTab("info")}
                className={`px-6 py-2 rounded-full font-semibold transition ${
                  activeTab === "info" 
                    ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white" 
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Trek Info
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TREKKING ROUTES ================= */}
      {activeTab === "routes" && (
        <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-gray-900 mb-6">Trekking Routes</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose your adventure level and explore the majestic Himalayan ranges
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {trekkingRoutes.map((route, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative h-64 rounded-t-xl overflow-hidden">
                    <Image
                      src={route.image}
                      alt={route.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute top-3 right-3">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                        {route.altitude}
                      </span>
                    </div>
                    <div className="absolute bottom-3 left-3">
                      <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                        {route.difficulty}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{route.name}</h3>
                    <p className="text-gray-600 mb-4">{route.description}</p>
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Highlights:</h4>
                      <div className="flex flex-wrap gap-2">
                        {route.highlights.map((highlight, idx) => (
                          <span key={idx} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Features:</h4>
                      <div className="flex flex-wrap gap-2">
                        {route.features.map((feature, idx) => (
                          <span key={idx} className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-blue-700 font-semibold">Duration:</span>
                        <span className="text-sm text-gray-900">{route.duration}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-blue-700 font-semibold">Best Time:</span>
                        <span className="text-sm text-gray-900">{route.bestTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ================= TREK FEATURES ================= */}
      {activeTab === "features" && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-gray-900 mb-6">Trek Features</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                What makes our trekking experiences special
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {trekFeatures.map((feature, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center mb-6">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ================= TREK INFO ================= */}
      {activeTab === "info" && (
        <section className="py-20 bg-gradient-to-br from-cyan-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-gray-900 mb-6">Trekking Information</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Everything you need to know before you go
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Trekking Essentials</h3>
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <ul className="space-y-3">
                    {trekEssentials.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="w-5 h-5 text-green-600 mr-3 mt-1" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Trekking Tips</h3>
                <div className="bg-white rounded-xl p-6 shadow-lg space-y-4">
                  {trekkingTips.map((tip, index) => (
                    <div key={index} className="bg-blue-50 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">{tip.title}</h4>
                      <p className="text-gray-600 text-sm">{tip.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}


      {/* ================= SINGALILA DETAILS ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-6">Singalila National Park</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The crown jewel of West Bengal trekking destinations
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">About the Trek</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Steal a look at the Everest on this trek located in the higher ridges of Darjeeling region of Bengal. 
                  One can reach the start of the trek at Moneybhanjan by the Darjeeling Himalayan Railway and further 
                  from there in vintage Land Rover jeeps.
                </p>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  The trek can be done in three days or more with an option of a side trip to Phalut, 
                  through the ridge where one gets unrivalled panoramic views of Mt. Kanchenjunga & Mt. Everest!
                </p>
                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <h4 className="font-bold text-green-900 mb-3">Flora & Fauna:</h4>
                  <p className="text-gray-700">
                    As you trek, you will pass through forest areas full of oaks, ferns, silver firs, bamboo and 
                    flowering plants like rhododendrons, wide range of orchids, magnolias and lot more. 
                    Also home to exotic red panda & Himalayan black bears.
                  </p>
                </div>
              </div>
              <div className="relative h-96 rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1615462067592-d7ae31015538?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U2luZ2FsaWxhJTIwTmF0aW9uYWwlMjBQYXJrfGVufDB8fDB8fHww"
                  alt="Singalila National Park"
                  fill
                  className="object-cover"
                />
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
            Watch  Trekking Trails Tour Video
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
      {/* ================= INCLUDED SERVICES ================= */}
      <section className="py-20 bg-gradient-to-br from-cyan-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-6">All-Inclusive Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete support for your Himalayan adventure
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {includedServices.map((service, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center text-white mr-4 flex-shrink-0">
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
        title="Trekking Tour Packages"
        subtitle="Choose your perfect mountain adventure duration"
      />

      <ContactCTA />

    </>
  );
}
