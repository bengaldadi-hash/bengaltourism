"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { MapPin, Calendar, Users, Star, Clock, Check, Heart, Camera, Trees, Mountain, Navigation, Sun, Compass, Globe, Building, Utensils, Coffee, MapPinIcon, Tent, Footprints, Waves, Shield, Award, Church, StarIcon } from "lucide-react";
import ContactCTA from "@/components/ContactCTA";
import PackagePricing from "@/components/PackagePricing";

const shaktiPeeths = [
  {
    name: "Kalighat",
    location: "Kolkata",
    bodyPart: "Toe",
    description: "One of the 51 Shakti Peeths, dedicated to Goddess Kali",
    significance: "Major pilgrimage site for Hindus",
    image: "/img/kali.jpeg"
  },
  {
    name: "Tarapith",
    location: "Rampurhat - Birbhum",
    bodyPart: "Eye ball",
    description: "Sacred Shakti Peeth dedicated to Goddess Tara",
    significance: "Powerful tantric center",
    image: "/img/Tarapith.jpeg"
  },
  {
    name: "Bakreswar",
    location: "Bakreswar - Birbhum",
    bodyPart: "Forehead & Brows",
    description: "Ancient Shakti Peeth with hot water springs",
    significance: "Known for healing properties",
    image: "/img/Bakreswar.jpeg"
  },
  {
    name: "Nataleshwari",
    location: "Nalhati - Birbhum",
    bodyPart: "Throat",
    description: "Sacred Shakti Peeth dedicated to Goddess Nataleshwari",
    significance: "Ancient pilgrimage site",
    image: "/img/Nataleshwari.jpeg"
  },
  {
    name: "Kankhaleswari",
    location: "Bolpur - Birbhum",
    bodyPart: "Waist",
    description: "Sacred Shakti Peeth near Santiniketan",
    significance: "Peaceful spiritual environment",
    image: "/img/Kankhaleswari.jpeg"
  },
  {
    name: "Attahas or Ma Fullara",
    location: "Katwa - Burdwan",
    bodyPart: "Lips",
    description: "Sacred Shakti Peeth with ancient temple",
    significance: "Historical and religious importance",
    image: "/img/Attahas-or-Ma-Fullara.jpeg"
  },
  {
    name: "Bahula",
    location: "Ketugram - Burdwan",
    bodyPart: "Left arm",
    description: "Sacred Shakti Peeth dedicated to Goddess Bahula",
    significance: "Ancient spiritual center",
    image: "/img/Bahula.jpeg"
  },
  {
    name: "Ma Jahura",
    location: "Malda",
    bodyPart: "3 faces of Ma",
    description: "Unique Shakti Peeth with triple-faced deity",
    significance: "Rare spiritual manifestation",
    image: "/img/Ma-Jahura.jpeg"
  },
  {
    name: "Ratnavali / Vibhash Shakti or Anandamayee",
    location: "Khanakul - Hoogly",
    bodyPart: "Right shoulder",
    description: "Sacred Shakti Peeth with divine energy",
    significance: "Known for spiritual bliss",
    image: "/img/Ratnavali.jpeg"
  },
  {
    name: "Bargabhima or Bhim Kali",
    location: "Tamluk - East Midnapur",
    bodyPart: "Left ankle",
    description: "Ancient Shakti Peeth with historical significance",
    significance: "Connected to Mahabharata era",
    image: "/img/Bargabhima.jpeg"
  },
  {
    name: "Kiriteshwari",
    location: "Murshidabad",
    bodyPart: "Crown",
    description: "Sacred Shakti Peeth in historic Murshidabad",
    significance: "Royal patronage and heritage",
    image: "/img/Kiriteshwari.jpeg"
  },
  {
    name: "Trisrota",
    location: "Falakata - Jalpaiguri",
    bodyPart: "Left leg",
    description: "Sacred Shakti Peeth in North Bengal",
    significance: "Natural beauty and spirituality",
    image: "/img/Trisrota.jpeg"
  }
];

const otherReligiousDestinations = [
  {
    name: "Dakhineshwar Kali Temple",
    location: "Near Kolkata",
    type: "Hindu Temple",
    description: "Famous Kali temple on the banks of Hooghly River",
    significance: "Major pilgrimage site"
  },
  {
    name: "Deoghar / Baidyanath Dham",
    location: "Jharkhand",
    type: "Hindu Temple",
    description: "One of the 12 Jyotirlingas of Lord Shiva",
    significance: "Major Kaali pilgrimage"
  },
  {
    name: "Belur Math",
    location: "Howrah",
    type: "Ramakrishna Mission",
    description: "Headquarters of Ramakrishna Mission",
    significance: "Spiritual and cultural center"
  },
  {
    name: "Bandel Church",
    location: "Bandel",
    type: "Christian Church",
    description: "Historic Portuguese church",
    significance: "Ancient Christian heritage"
  },
  {
    name: "Chinese Temple",
    location: "Kolkata",
    type: "Buddhist Temple",
    description: "Beautiful Chinese architecture temple",
    significance: "Cultural diversity"
  },
  {
    name: "Isckon Temple",
    location: "Mayapur",
    type: "Vaishnava Temple",
    description: "Major ISKCON center",
    significance: "International spiritual center"
  },
  {
    name: "Jain Temple",
    location: "Kolkata",
    type: "Jain Temple",
    description: "Beautiful marble temple complex",
    significance: "Jain pilgrimage center"
  },
  {
    name: "Jairambati & Kamarpukur",
    location: "Hooghly",
    type: "Birth Place",
    description: "Birth place of Shree Ramakrishna Paramhansa",
    significance: "Ramakrishna heritage"
  },
  {
    name: "Kapli Muni's Ashram",
    location: "Gangasagar",
    type: "Ashram",
    description: "Sacred ashram at Gangasagar",
    significance: "Holy dip site"
  },
  {
    name: "Lokenath Temple",
    location: "Chakla / Teghoria",
    type: "Hindu Temple",
    description: "Temple dedicated to Baba Lokenath",
    significance: "Modern spiritual center"
  },
  {
    name: "Mahabodhi Temple",
    location: "Bodh Gaya",
    type: "Buddhist Temple",
    description: "Where Buddha attained enlightenment",
    significance: "UNESCO World Heritage Site"
  },
  {
    name: "Ram Mandir",
    location: "Kolkata",
    type: "Hindu Temple",
    description: "Beautiful Ram temple",
    significance: "Modern architecture"
  },
  {
    name: "St. Paul's Cathedral",
    location: "Kolkata",
    type: "Christian Church",
    description: "Anglican cathedral",
    significance: "Colonial heritage"
  },
  {
    name: "Seven Church Trail",
    location: "Kolkata",
    type: "Christian Churches",
    description: "Trail of historic churches",
    significance: "Christian heritage tour"
  },
  {
    name: "Tarapeeth Temple / Tarakeswar",
    location: "Hooghly",
    type: "Hindu Temple",
    description: "Famous Ma Tara Temple",
    significance: "Major Kaali pilgrimage"
  }
];

const pilgrimageFeatures = [
  {
    icon: Building,
    title: "Ancient Heritage",
    description: "Temples and sites with centuries of spiritual significance"
  },
  {
    icon: StarIcon,
    title: " Divine Energy",
    description: "Places believed to be charged with spiritual power"
  },
  {
    icon: Heart,
    title: "Cultural Diversity",
    description: "Hindu, Buddhist, Christian, Jain spiritual traditions"
  },
  {
    icon: MapPin,
    title: "Sacred Geography",
    description: "Strategically located spiritual centers"
  }
];

const includedServices = [
  "Accommodation in dharamshalas/hotels",
  "Meals Breakfast & Dinner (Lunch / Bhog Prasad your cost)",
  "Temple darshan arrangements",
  "Priest services for puja",
  "Transportation between sites",
  "Spiritual guide assistance",
  "Puja materials and offerings",
  "Local cultural experiences"
];

const pilgrimageTips = [
  {
    title: "Dress Code",
    description: "Modest and respectful attire is required at all religious sites"
  },
  {
    title: "Timing",
    description: "Early morning darshan is recommended for peaceful experience"
  },
  {
    title: "Offerings",
    description: "Carry appropriate offerings for each deity/temple"
  },
  {
    title: "Photography",
    description: "Check photography rules at each site before taking pictures"
  }
];

export default function ReligiousPilgrimagePage() {
  const router = useRouter();
  const [selectedPeeth, setSelectedPeeth] = useState("");
  const [activeTab, setActiveTab] = useState("shakti");

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative h-[80vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/img/puri.jpeg"
            alt="Religious & Pilgrimage Tours"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-orange-900/40"></div>
        </div>
        
        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-6 py-3 mb-8">
              <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
              <span className="text-white font-medium text-sm">Spiritual Tourism</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Religious &
              <span className="block bg-gradient-to-r from-orange-400 via-yellow-400 to-pink-400 bg-clip-text text-transparent relative">
                Pilgrimage Tours
                <svg className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-3/4 h-4" viewBox="0 0 300 16" fill="none">
                  <path d="M10 8 Q 75 4, 150 8 T 290 8" stroke="url(#gradient)" strokeWidth="3" strokeLinecap="round" />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#F97316" />
                      <stop offset="50%" stopColor="#EF4444" />
                      <stop offset="100%" stopColor="#EC4899" />
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
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">11</div>
                <div className="text-white/80 text-sm">Shakti Peeths</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">15+</div>
                <div className="text-white/80 text-sm">Sacred Sites</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">Custom</div>
                <div className="text-white/80 text-sm">Packages</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">Spiritual</div>
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
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-center">
            <div className="inline-flex rounded-full bg-gray-100 p-1">
              <button
                onClick={() => setActiveTab("shakti")}
                className={`px-6 py-2 rounded-full font-semibold transition ${
                  activeTab === "shakti" 
                    ? "bg-gradient-to-r from-orange-600 to-yellow-600 text-white" 
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Shakti Peeths
              </button>
              <button
                onClick={() => setActiveTab("religious")}
                className={`px-6 py-2 rounded-full font-semibold transition ${
                  activeTab === "religious" 
                    ? "bg-gradient-to-r from-orange-600 to-yellow-600 text-white" 
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Other Religious Sites
              </button>
              <button
                onClick={() => setActiveTab("info")}
                className={`px-6 py-2 rounded-full font-semibold transition ${
                  activeTab === "info" 
                    ? "bg-gradient-to-r from-orange-600 to-yellow-600 text-white" 
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Pilgrimage Info
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SHAKTI PEETHS ================= */}
      {activeTab === "shakti" && (
        <section className="py-20 bg-gradient-to-br from-orange-50 to-yellow-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-gray-900 mb-6">Religious Tours in West Bengal</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Sacred sites where parts of Goddess Sati's body fell
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {shaktiPeeths.map((peeth, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative h-48 rounded-t-xl overflow-hidden">
                    <Image
                      src={peeth.image}
                      alt={peeth.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute top-3 left-3">
                      <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                        {peeth.location}
                      </span>
                    </div>
                    <div className="absolute bottom-3 left-3">
                    
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{peeth.name}   <span className="bg-yellow-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                        {peeth.bodyPart}
                      </span></h3>
                    <p className="text-gray-600 mb-4">{peeth.description}</p>
                    <div className="bg-orange-50 border border-orange-200 rounded-xl p-4">
                      <h4 className="font-bold text-orange-900 mb-2">Significance:</h4>
                      <p className="text-gray-700 text-sm">{peeth.significance}</p>
                    </div>
                    <button 
                      onClick={() => router.push('/book-tour')}
                      className="px-4 text-yellow-500 border border-yellow-500 py-3 rounded-lg font-semibold  transition mt-4"
                    >
                      Book Now for 2N/3D
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ================= OTHER RELIGIOUS SITES ================= */}
      {activeTab === "religious" && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-gray-900 mb-6">Other Religious & Pilgrimage Destinations</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Diverse spiritual traditions across West Bengal and beyond
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherReligiousDestinations.map((destination, index) => (
                <div key={index} className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-yellow-600 rounded-full flex items-center justify-center text-white mr-4">
                      <Building className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{destination.name}</h3>
                      <p className="text-sm text-gray-600">{destination.location}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-3">{destination.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">
                      {destination.type}
                    </span>
                    <span className="text-yellow-600 text-sm font-semibold">
                      {destination.significance}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ================= PILGRIMAGE INFO ================= */}
      {activeTab === "info" && (
        <section className="py-20 bg-gradient-to-br from-yellow-50 to-orange-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-gray-900 mb-6">Pilgrimage Information</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to know for your spiritual journey
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Pilgrimage Features</h3>
                <div className="space-y-6">
                  {pilgrimageFeatures.map((feature, index) => (
                    <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-yellow-600 rounded-full flex items-center justify-center text-white mr-4">
                          <feature.icon className="w-6 h-6" />
                        </div>
                        <h4 className="text-lg font-bold text-gray-900">{feature.title}</h4>
                      </div>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Pilgrimage Tips</h3>
                <div className="space-y-4">
                  {pilgrimageTips.map((tip, index) => (
                    <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                      <h4 className="font-bold text-gray-900 mb-2">{tip.title}</h4>
                      <p className="text-gray-600">{tip.description}</p>
                    </div>
                  ))}
                </div>
              </div>
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
            Watch  Religious Tour Video
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-6">All-Inclusive Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete support for your spiritual journey
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {includedServices.map((service, index) => (
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
            title="Religious Pilgrimage Tour Packages"
            subtitle="Choose your perfect spiritual journey"
          />
    
           
        <ContactCTA />
    </>
  );
}
