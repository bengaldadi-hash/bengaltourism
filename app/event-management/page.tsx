"use client";

import { useState } from "react";
import Image from "next/image";
import { MapPin, Calendar, Users, Star, Clock, Check, Heart, Building, Briefcase, Film, GraduationCap, Phone, Mail, Award, Target, Handshake, Megaphone } from "lucide-react";
import ContactCTA from "@/components/ContactCTA";
import PackagePricing from "@/components/PackagePricing";

const serviceCategories = [
  {
    icon: Briefcase,
    title: "Corporate Events",
    description: "Conferences, Seminars, Product Launches, Dealers Meet",
    color: "from-blue-600 to-purple-600"
  },
  {
    icon: Film,
    title: "Film Production",
    description: "Film Shoots, Location Management, Production Support",
    color: "from-yellow-600 to-orange-600"
  },
  {
    icon: GraduationCap,
    title: "Educational Tours",
    description: "Study Tours, Excursions, College Events, School Trips",
    color: "from-green-600 to-teal-600"
  },
  {
    icon: Users,
    title: "Social Events",
    description: "Get-togethers, Weddings, Parties, Cultural Events",
    color: "from-pink-600 to-rose-600"
  }
];

const servicePackages = [
  {
    name: "Normal",
    price: "On Request",
    features: ["Basic event management", "Standard venues", "Essential services", "Basic catering"],
    recommended: false
  },
  {
    name: "Deluxe", 
    price: "On Request",
    features: ["Premium event management", "Better venues", "Enhanced services", "Gourmet catering", "Professional staff"],
    recommended: true
  },
  {
    name: "Luxury",
    price: "On Request", 
    features: ["VIP event management", "Luxury venues", "Full concierge", "Fine dining", "Expert team", "Personalized service"],
    recommended: false
  }
];

const corporateClients = [
  "AXIS Bank", "24 Ghonta", "Panacea", "Lupin", "Piramal Healthcare", "Sun Pharma", "Amul", 
  "Glaxo SmithKline", "Life Medical", "Ipca Laboratories", "Abbot", "USV Limited", 
  "Dr. Reddy's", "Himalaya", "Procter & Gamble", "Godrej", "Reliance Industries", "SAIL", 
  "State Bank of India", "TISCO", "Lemongrass", "Rolta", "ONGC", "NTPC", "Bridge & Roof", 
  "Birla Tyres", "Britannia", "Nestle", "Sahara", "Ener Vision", "National Insurance", 
  "Tata Tea", "Maruti", "Hyundai", "Tata Motors", "Anjali Jewellers", "Herbalife", "Amway", 
  "Hindusthan Lever", "Airtel", "Vodafone", "Samsung", "LG", "NOKIA"
];

const educationalClients = [
  "Heritage School", "Delhi Public School", "St. Xaviers' College", "Gokhale Memorial", 
  "La Martiniere", "Indo English School", "St. Pauls", "St. Thomas' School", 
  "Carmel School", "Shree Shikshayatan"
];

const otherClients = [
  "Balaji Films", "Tata Memorial Hospital", "Medica Superspeciality Hospital", 
  "Desun Hospital", "SBI", "HDFC Bank", "Indian Oil", "Essar", "HT", 
  "Times of India", "Toyota", "Yash Raj Films", "Academy of Cultural Arts", 
  "Kolkata Marathon"
];

const includedServices = [
  "Logistic Management",
  "Boarding & Lodging", 
  "All Meals",
  "Location Selection",
  "Picnic Arrangements",
  "Hostess & Escorts",
  "Transportation",
  "Security Services",
  "Technical Support",
  "Event Coordination"
];

export default function EventManagementPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showClientModal, setShowClientModal] = useState(false);

  const filteredClients = [
    ...corporateClients,
    ...educationalClients, 
    ...otherClients
  ];

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative h-[80vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZXZlbnR8ZW58MHx8MHx8fDA%3D"
            alt="Event Management & Concierge"
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
              <span className="text-white font-medium text-sm">Premium Services</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Event Management &
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent relative">
                Concierge Facility
                <svg className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-3/4 h-4" viewBox="0 0 300 16" fill="none">
                  <path d="M10 8 Q 75 4, 150 8 T 290 8" stroke="url(#gradient)" strokeWidth="3" strokeLinecap="round" />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#9333EA" />
                      <stop offset="50%" stopColor="#EC4899" />
                      <stop offset="100%" stopColor="#EF4444" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed">
              West Bengal, India with Bengal Tourism • Trusted by Leading Brands
            </p>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">100+</div>
                <div className="text-white/80 text-sm">Corporate Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">20+</div>
                <div className="text-white/80 text-sm">Educational Institutes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">15+</div>
                <div className="text-white/80 text-sm">Years Experience</div>
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
<div className="bg-gray-50 py-16 px-6 md:px-12 text-gray-800">
      <div className="max-w-7xl mx-auto space-y-16">

        {/* HEADER */}
        <section className="text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-indigo-700">
            Event Management & Concierge Facility
          </h1>
          <p className="text-lg text-gray-600">
            in West Bengal, India with Bengal Tourism
          </p>

    
        </section>
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10">
            <div className="lg:col-span-2 space-y-8">
        {/* SERVICES SECTION */}
        <section className="bg-white rounded-3xl shadow-xl p-8 md:p-12 space-y-6">
          <h2 className="text-3xl font-semibold text-indigo-600 border-b-2 border-indigo-500 inline-block pb-2">
            Group Booking & Corporate Services
          </h2>

          <p className="leading-8">
            Contact us for any Group Booking for Film Shoots, Conference, Seminars,
            Get-togethers, Excursions, Study tours, Product launch, Getaway, etc.
            (all inclusive of Logistic + Boarding & Lodging + all Meals +
            Location selection + Picnic + Hostess & Escorts + Others).
          </p>

          <p className="leading-8">
            Our services are being retained by many Pvt. Entities, Corporate houses,
            School & Colleges, to manage their Events, Study tours, Excursions,
            Seminars, Conferences, Dealers meet, Product launches, etc.
          </p>
        </section>

        {/* CLIENTS SECTION */}
      <section className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}
    <div className=" mb-14">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
        Our Esteemed Clients
      </h2>
      <p className="text-gray-500 mt-3">
        Trusted by leading brands, organizations and institutions
      </p>
    </div>

    {/* Clients Grid */}
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  gap-6">

      {[
        "AXIS Bank","24 Ghonta","Panacea","Lupin","Piramal Healthcare",
        "Sun Pharma","Amul","Glaxo SmithKline","Life Medical","Ipca Laboratories",
        "Abbot","USV Limited","Dr. Reddy’s","Himalaya","Procter & Gamble",
        "Godrej","Reliance Industries","SAIL","State Bank of India","TISCO",
        "Rolta","ONGC","NTPC","Bridge & Roof","Birla Tyres",
        "Britannia","Nestle","Sahara","National Insurance","Tata Tea",
        "Maruti","Hyundai","Tata Motors","Anjali Jewellers","Herbalife",
        "Amway","Hindusthan Lever","Airtel","Vodafone","Samsung",
        "LG","NOKIA","Heritage School","Delhi Public School","St. Xaviers’ College",
        "La Martiniere","Balaji Films","Tata Memorial Hospital","Desun Hospital",
        "HDFC Bank","Indian Oil","Essar","Times of India","Toyota",
        "Yash Raj Films","Kolkata Marathon"
      ].map((client, index) => {

        const colors = [
          "bg-blue-50 border-blue-200",
          "bg-green-50 border-green-200",
          "bg-purple-50 border-purple-200",
          "bg-pink-50 border-pink-200",
          "bg-yellow-50 border-yellow-200",
          "bg-indigo-50 border-indigo-200",
          "bg-orange-50 border-orange-200",
          "bg-teal-50 border-teal-200"
        ];

        return (
          <div
            key={index}
            className={`${colors[index % colors.length]} 
            border rounded-xl p-5 
            flex items-center justify-center 
            text-center font-medium text-gray-700
            hover:shadow-lg hover:scale-105
            transition duration-300`}
          >
            {client}
          </div>
        );
      })}

    </div>

    <div className="text-center mt-12 text-gray-500 text-sm">
      ...and many more trusted partners
    </div>

  </div>
</section>
  </div>
            <div className="space-y-8 lg:sticky lg:top-24 h-fit">

              {/* Video Section */}
              <div className="bg-white rounded-3xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  Watch Event management Video
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
      {/* ================= SERVICE CATEGORIES ================= */}
    
       <PackagePricing 
           title="Event Management Packages"
           subtitle="Choose your perfect event management duration"
         />
   <ContactCTA />
    </>
  );
}
