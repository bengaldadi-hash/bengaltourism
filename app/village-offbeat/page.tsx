"use client";

import { useState } from "react";
import Image from "next/image";
import { MapPin, Calendar, Users, Star, Clock, Check, Heart, Mountain, Navigation, Camera, Tent, Coffee, Trees, Building, Globe, Sun, MapPinIcon, Utensils, Home } from "lucide-react";
import ContactCTA from '@/components/ContactCTA';
import PackagePricing from '@/components/PackagePricing';

const destinations = [
  {
    name: "RISHYAP",
    altitude: "8500 ft",
    location: "Lava & Neora Valley",
    duration: "2N/3D",
    price: "On Request",
    description: "Land of breath taking beauty, sloping tea gardens with spectacular views of Mount Everest",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    highlights: ["Sunrise views", "Tea garden visits", "Local sightseeing", "Shopping centre"]
  },
  {
    name: "JORPOKHRI",
    altitude: "7200 ft",
    location: "Orange Valley",
    duration: "2N/3D",
    "price": "On Request",
    description: "Queen of the hills with mesmerizing beauty, offers spectacular views of Mount Everest",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    highlights: ["Orange Valley views", "Jogi Ghat", "Orange Garden", "Hanging Bridge", "Lamahatta Park"]
  },
  {
    name: "SITTONG",
    altitude: "4000 ft",
    location: "Orange Valley",
    duration: "2N/3D",
    "price": "On Request",
    description: "Often called Switzerland of the East with mesmerizing beauty and spectacular mountain views",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    highlights: ["Jogi Ghat", "Orange Garden", "Ahaldara", "Mongpoo", "Latpanchar"]
  },
  {
    name: "CHATAKPUR",
    altitude: "7800 ft",
    location: "Switzerland of the East",
    duration: "2N/3D",
    "price": "On Request",
    description: "With mesmerizing beauty, offers spectacular views of Mount Everest, Mt. Kanchenjunga and Himalayan range",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    highlights: ["Kal Phokhri", "Hanging Bridge", "Lamahatta Park", "Ramdhara", "Chitrey"]
  },
  {
    name: "TINCHULEY",
    altitude: "5800 ft",
    location: "Offbeat Destination",
    duration: "2N/3D",
    "price": "On Request",
    description: "Land of breath taking beauty, sloping tea gardens with spectacular views of Mount Everest",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    highlights: ["Gombagara Manastery", "Orchid Centre", "Lamahatta Park", "Rogli Rongliot Tea Garden"]
  },
  {
    name: "SANDAKPHU",
    altitude: "13,000 ft",
    location: "Singalila National Park",
    duration: "2N/3D",
    "price": "On Request",
    description: "Trekkers Paradise with breathtaking views of the entire Kanchenjunga range from Sandakphu",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    highlights: ["Gouribas", "Kali Phokhri Lake", "360° View Point", "Hanging Bridge"]
  },
  {
    name: "TAKDAH",
    altitude: "10,000 ft",
    location: "Manebhanjan",
    duration: "2N/3D",
    "price": "On Request",
    description: "Experience the entire range of Kanchenjunga Range on a clear day from Takdah",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    highlights: ["Manebhanjan", "Phalut at 11800 ft", "Entire Kanchenjunga range", "360° views"]
  }
];

const experiences = [
  {
    icon: Trees,
    title: "Eco-Tourism Focus",
    description: "Get back to nature and reduce carbon footprint"
  },
  {
    icon: Home,
    title: "Homestay Experience",
    description: "Stay with local families and experience authentic village life"
  },
  {
    icon: Utensils,
    title: "Local Cuisine",
    items: [
      "Home cooked meals",
      "Organic vegetables",
      "Fresh water",
      "Traditional staples"
    ]
  },
  {
    icon: Coffee,
    title: "Community Support",
    description: "Support less privileged communities to earn sustainable income"
  },
  {
    icon: Camera,
    title: "Photography Paradise",
    description: "Capture the beauty of Himalayan landscapes"
  }
];

const includedServices = [
  "Pick-up & Drop",
  "Accommodation in Resort/Farmhouse/Homestay",
  "Bed Tea & Breakfast",
  "Lunch/Picnic Basket",
  "Evening Tea & Snacks",
  "Dinner",
  "All Sightseeing",
  "Pvt. Transfer"
];

const excludedServices = [
  "AC Accommodation (where available)",
  "Price of Air Travel",
  "AC Train Fare",
  "Exclusive Non Sharing Car",
  "Vehicle extra if availed",
  "Anything not mentioned in Tour Itinerary"
];

const plainsDestinations = [
  {
    name: "Plains-Off Beat Destinations",
    description: "Eco-tourism facilities in the plains of Bengal",
    examples: [
      "Rural tourism experiences",
      "Village stays",
      "Cultural immersion",
      "Agricultural tourism"
    ]
  },
  {
    name: "Eco-Tourism Facilities",
    description: "Off-beat destinations with eco-friendly practices",
    examples: [
      "Organic farming communities",
      "Sustainable tourism",
      "Village tourism initiatives"
    ]
  }
];

export default function VillageOffbeatPage() {
  const [selectedDestination, setSelectedDestination] = useState("");
  const [activeTab, setActiveTab] = useState("hills");

  return (
    <main className="text-gray-800">
      {/* ================= HERO ================= */}
      <section className="relative h-[80vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Village & Off-Beat Destinations"
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
              <span className="text-white font-medium text-sm">Eco-Tourism</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Village &
              <span className="block bg-gradient-to-r from-green-400 via-teal-400 to-blue-400 bg-clip-text text-transparent relative">
                Off-Beat Destinations
                <svg className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-3/4 h-4" viewBox="0 0 300 16" fill="none">
                  <path d="M10 8 Q 75 4, 150 8 T 290 8" stroke="url(#gradient)" strokeWidth="3" strokeLinecap="round" />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#10B981" />
                      <stop offset="50%" stopColor="#14B8A6" />
                      <stop offset="100%" stopColor="#06B6D4" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed">
              Hills of West Bengal, India with Bengal Tourism • Special Tailor Made Packages
            </p>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">13,000</div>
                <div className="text-white/80 text-sm">Max Altitude</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">Off-Beat</div>
                <div className="text-white/80 text-sm">Destinations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">Fresh Air</div>
                <div className="text-white/80 text-sm">Unpolluted</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">Sustainable</div>
                <div className="text-white/80 text-sm">Tourism</div>
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

      {/* ================= DESTINATION TABS ================= */}
      <section className="py-16 bg-white sticky top-0 z-40 shadow-lg border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-center">
            <div className="inline-flex rounded-full bg-gray-100 p-1">
              <button
                onClick={() => setActiveTab("hills")}
                className={`px-6 py-2 rounded-full font-semibold transition ${
                  activeTab === "hills" 
                    ? "bg-gradient-to-r from-green-600 to-teal-600 text-white" 
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Hill Destinations
              </button>
              <button
                onClick={() => setActiveTab("plains")}
                className={`px-6 py-2 rounded-full font-semibold transition ${
                  activeTab === "plains" 
                    ? "bg-gradient-to-r from-green-600 to-teal-600 text-white" 
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Plains Destinations
              </button>
              <button
                onClick={() => setActiveTab("info")}
                className={`px-6 py-2 rounded-full font-semibold transition ${
                  activeTab === "info" 
                    ? "bg-gradient-to-r from-green-600 to-teal-600 text-white" 
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Eco-Tourism Info
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= HILL DESTINATIONS ================= */}
      {activeTab === "hills" && (
        <section className="py-20 bg-gradient-to-br from-green-50 to-teal-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-gray-900 mb-6">Hill Destinations</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore the pristine beauty of West Bengal's Himalayan region
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {destinations.map((destination, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative h-48 rounded-t-xl overflow-hidden">
                    <Image
                      src={destination.image}
                      alt={destination.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute top-3 right-3">
                      <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                        {destination.altitude}
                      </span>
                    </div>
                    <div className="absolute bottom-3 left-3">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                        {destination.location}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{destination.name}</h3>
                    <p className="text-gray-600 mb-4">{destination.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {destination.highlights.map((highlight, idx) => (
                        <span key={idx} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                          {highlight}
                        </span>
                      ))}
                    </div>
                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                      <p className="text-sm text-blue-700 font-semibold mb-2">
                        Duration: {destination.duration}
                      </p>
                      <p className="text-sm text-gray-600">
                        Price: {destination.price}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ================= PLAINS DESTINATIONS ================= */}
      {activeTab === "plains" && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-gray-900 mb-6">Plains-Off Beat Destinations</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Eco-tourism facilities in the plains of Bengal
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {plainsDestinations.map((category, index) => (
                <div key={index} className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{category.name}</h3>
                  <p className="text-gray-700 mb-6">{category.description}</p>
                  <div className="bg-white rounded-xl p-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Examples:</h4>
                    <ul className="space-y-2">
                      {category.examples.map((example, idx) => (
                        <li key={idx} className="text-gray-600 text-sm">
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ================= INFO SECTION ================= */}
      {activeTab === "info" && (
        <section className="py-20 bg-gradient-to-br from-teal-50 to-green-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-gray-900 mb-6">Eco-Tourism Information</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Sustainable tourism practices and off-beat destinations
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Eco-Tourism Focus</h3>
                <p className="text-gray-700 leading-relaxed">
                  Get back to nature and reduce carbon footprint by choosing eco-friendly tourism options.
                </p>
                <div className="mt-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Support local communities</li>
                    <li>• Reduce environmental impact</li>
                    <li>• Promote sustainable practices</li>
                    <li>• Experience authentic culture</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Homestay Experience</h3>
                <p className="text-gray-700 leading-relaxed">
                  Stay with local families and experience authentic village life in the Himalayan region.
                </p>
                <div className="mt-6">
                  <h4 className="font-semibold text-gray-900 mb-3">What to Expect:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Traditional village life</li>
                    <li>• Home-cooked meals</li>
                    <li>• Cultural immersion</li>
                    <li> Community interaction</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Community Support</h3>
                <p className="text-gray-700 leading-relaxed">
                  Support less privileged communities to earn sustainable income through tourism.
                </p>
                <div className="mt-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Impact:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Local employment opportunities</li>
                    <li>• Skill development</li>
                    <li> Cultural preservation</li>
                    <li> Sustainable livelihoods</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ================= EXPERIENCES ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-6">Unique Experiences</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Create memories that last a lifetime in the Himalayas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {experiences.map((experience, index) => (
              <div key={index} className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-r from-teal-600 to-green-600 rounded-2xl flex items-center justify-center mb-6">
                  <experience.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{experience.title}</h3>
                <p className="text-gray-600 mb-4">{experience.description}</p>
                {experience.items && (
                  <ul className="space-y-2">
                    {experience.items.map((item, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-600">
                        <span className="text-teal-600 mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-20 bg-gradient-to-br from-teal-50 to-green-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-6">All-Inclusive Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete support for your Himalayan adventure
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <h4 className="font-bold text-green-900 mb-3">Included Services:</h4>
                <ul className="space-y-2 text-gray-700">
                  {includedServices.map((service, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="w-5 h-5 text-green-600 mr-3 mt-1" />
                      <span className="text-gray-700">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                <h4 className="font-bold text-yellow-900 mb-3">Excluded Services:</h4>
                <ul className="space-y-2 text-gray-700">
                  {excludedServices.map((service, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-yellow-600 mr-2">•</span>
                      <span className="text-gray-700">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= RECOMMENDATIONS ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-6">Recommended Stays</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect Himalayan adventure based on your experience level
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold text-gray-900">Beginner Friendly</h3>
                <p className="text-gray-600">RISHYAP, SITTONG, CHATAKPUR</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-2">8500 ft</div>
                <div className="text-sm text-gray-600">Altitude</div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold text-gray-900">Adventure Seekers</h3>
                <p className="text-gray-600">SANDAKPHU, TAKDAH, MANEBHANJAN</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600 mb-2">13,000 ft</div>
                <div className="text-sm text-gray-600">Highest Altitude</div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold text-gray-900">Nature Lovers</h3>
                <p className="text-gray-600">SITTONG, CHATAKPUR, TINCHULEY</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-teal-600 mb-2">4000 ft</div>
                <div className="text-sm text-gray-600">Altitude</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 bg-gradient-to-br from-teal-600 to-green-600">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black text-white mb-6">Plan Your Himalayan Adventure</h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-12">
            Experience the pristine beauty of West Bengal's Himalayan region
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/book-tour" className="px-8 py-3 bg-white text-teal-600 font-bold rounded-xl hover:bg-gray-100 transition">
              Book Adventure
            </a>
            <a href="/contact" className="px-8 py-3 bg-white text-teal-600 font-bold rounded-xl hover:bg-gray-100 transition">
              Book Adventure
            </a>
          </div>
        </div>
      </section>

      <PackagePricing
        title="Village Offbeat Tour Packages"
        subtitle="Choose your perfect rural Bengal adventure duration"
      />

      <ContactCTA />

    </main>
  );
};
