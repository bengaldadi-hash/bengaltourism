"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Star, MapPin, X } from "lucide-react";

const brands = [

  {
    id: 1,
    name: "BEST BENGALI CUISINE",
    location: "KOLKATA",
    category: "food",
    price: "Starting INR 800/- for 2 Person",
    action: "View Details",
    featured: true,
    image: "/partners/374654-bhojohori-manna_2016-05-11-17-51-12.jpg",
    description: "Authentic Bengali cuisine serving traditional dishes and delicacies",
    rating: 4.9,
    reviews: 289
  },
  {
    id: 2,
    name: "BEST TANGAIL SAREE",
    location: "FULIA",
    category: "handloom",
    price: "INR 1500/- piece",
    action: "View Details",
    featured: false,
    image: "/partners/Tangail Saree_2017-11-13-12-27-21.jpg",
    description: "Traditional Tangail sarees with intricate designs and patterns",
    rating: 4.7,
    reviews: 98
  },

  {
    id: 3,
    name: "BEST DARJEELING TEA",
    location: "DARJEELING",
    category: "food",
    price: null,
    action: "View Details",
    featured: true,
    image: "/partners/darjeeling20logo1_2016-05-13-07-49-05.jpg",
    description: "Premium Darjeeling tea from the finest tea gardens",
    rating: 4.8,
    reviews: 167
  },
  {
    id: 4,
    name: "BEST ROSOGOLLA STORE",
    location: "KOLKATA",
    category: "food",
    price: "INR 750/- kg",
    action: "View Details",
    featured: false,
    image: "/partners/Rosogolla_2016-07-03-19-56-22.jpg",
    description: "Famous Bengali sweet shop serving fresh rosogollas",
    rating: 4.6,
    reviews: 134
  },
  {
    id: 5,
    name: "BEST PATACHITRA CRAFTS",
    location: "MIDNAPORE",
    category: "crafts",
    price: "INR 1500/- piece",
    action: "View Details",
    featured: false,
    image: "/partners/Patachitra_2017-11-13-12-02-04.jpg",
    description: "Traditional Patachitra paintings and folk art",
    rating: 4.7,
    reviews: 89
  },
  {
    id: 6,
    name: "BEST JUTE PRODUCTS",
    location: "HOOGLY",
    category: "crafts",
    price: null,
    action: "View Details",
    featured: true,
    image: "/partners/Jute-1_2018-02-26-18-36-58.jpg",
    description: "Eco-friendly jute products and handicrafts",
    rating: 4.5,
    reviews: 112
  },
  {
    id: 7,
    name: "BEST TOURISM PARTNER",
    location: "BENGAL - ODISHA - SIKKIM",
    category: "travel",
    price: null,
    action: "Contact for Tour Packages & Hotel Rooms",
    featured: true,
    image: "/logo.png",
    description: "Complete tourism solutions for multiple destinations",
    rating: 4.9,
    reviews: 278
  },
  {
    id: 8,
    name: "BEST KANTHA EMBROIDERY",
    location: "RURAL BENGAL",
    category: "crafts",
    price: "Rs. 2500/- piece",
    action: "View Details",
    featured: false,
    image: "/partners/Kantha Stich_2017-11-13-12-14-21.jpg",
    description: "Traditional Kantha embroidered textiles and fabrics",
    rating: 4.8,
    reviews: 76
  },
  {
    id: 9,
    name: "BEST DOKRA ARTEFACTS",
    location: "BANKURA",
    category: "crafts",
    price: null,
    action: "View Details",
    featured: true,
    image: "/partners/Dokra_2017-11-13-11-51-13.jpg",
    description: "Traditional Dokra metal crafts and tribal art",
    rating: 4.6,
    reviews: 94
  },
  {
    id: 10,
    name: "BEST DHAKAI SAREE",
    location: "WEST BENGAL",
    category: "handloom",
    price: "INR 5000/- piece",
    action: "View Details",
    featured: false,
    image: "/partners/Dhakai Saree_2017-11-13-12-20-25.jpg",
    description: "Fine Dhakai sarees with traditional weaving patterns",
    rating: 4.7,
    reviews: 103
  },
  {
    id: 11,
    name: "BEST JAMDANI SAREE",
    location: "SANTIPUR",
    category: "handloom",
    price: "INR 7500/- Piece",
    action: "View Details",
    featured: true,
    image: "/partners/Dhakai Saree_2017-11-13-12-20-25.jpg",
    description: "Premium Jamdani sarees with intricate designs",
    rating: 4.9,
    reviews: 187
  },
  {
    id: 12,
    name: "BEST PRAWN MALAI CURRY",
    location: "KOLKATA",
    category: "food",
    price: "INR 450/- Portion",
    action: "View Details",
    featured: false,
    image: "/partners/Bengali THali_2018-02-26-18-54-37.jpg",
    description: "Delicious Prawn Malai Curry, a Bengali delicacy",
    rating: 4.8,
    reviews: 156
  },
  {
    id: 13,
    name: "BEST HILSA (ILISH) DISHES",
    location: "KOLKATA",
    category: "food",
    price: "INR 500/- portion",
    action: "View Details",
    featured: false,
    image: "/partners/Bengali THali_2018-02-26-18-54-37.jpg",
    description: "Fresh Hilsa fish preparations, Bengali specialty",
    rating: 4.7,
    reviews: 198
  },
  {
    id: 14,
    name: "BEST TRAVEL PARTNER",
    location: "KOLKATA - INDIA",
    category: "travel",
    price: null,
    action: "Watch Video",
    featured: true,
    image: "/partners/BT-Logo Image_2021-06-08-10-08-33.jfif",
    description: "Travel services with video testimonials",
    rating: 4.8,
    reviews: 145
  },
  {
    id: 15,
    name: "BEST BELL METAL / KAANSHA PRODUCTS",
    location: "BURDWAN",
    category: "crafts",
    price: "INR 5000/- Set",
    action: "View Details",
    featured: false,
    image: "/partners/Bell utensils_2016-05-20-10-44-33.jfif",
    description: "Traditional bell metal crafts and utensils",
    rating: 4.5,
    reviews: 67
  },
  {
    id: 16,
    name: "BEST TERRACOTTA PRODUCTS",
    location: "BANKURA",
    category: "crafts",
    price: "INR 750/- pair",
    action: "View Details",
    featured: false,
    image: "/partners/Teracota_2016-05-20-10-56-17.jfif",
    description: "Handcrafted terracotta pottery and art pieces",
    rating: 4.6,
    reviews: 89
  },
  {
    id: 17,
    name: "BEST CLAY MODELS",
    location: "KRISHNANAGAR",
    category: "crafts",
    price: "INR 300/- pair",
    action: "View Details",
    featured: false,
    image: "/partners/Clay Models_2016-05-20-10-57-32.jfif",
    description: "Traditional clay models and figurines from Krishnanagar",
    rating: 4.4,
    reviews: 56
  },
  {
    id: 18,
    name: "BEST MASK / MUKHOSH",
    location: "PURULIA",
    category: "crafts",
    price: "INR 1500/- piece",
    action: "View Details",
    featured: false,
    image: "/partners/Wooden Mask_2018-02-26-18-43-14.jpg",
    description: "Traditional Purulia masks and folk art",
    rating: 4.7,
    reviews: 78
  },
  {
    id: 19,
    name: "BEST BALUCHARI SAREE",
    location: "MURSHIDABAD",
    category: "handloom",
    price: "INR 7500/- Piece",
    action: "View Details",
    featured: false,
    image: "/partners/Baluchari Saree-1_2017-11-13-12-06-41.jpg",
    description: "Baluchari sarees with mythological themes",
    rating: 4.8,
    reviews: 92
  },
  {
    id: 20,
    name: "BEST WOODEN / GAMIRA PRODUCTS",
    location: "DINAJPUR",
    category: "crafts",
    price: "INR 5000/- piece",
    action: "View Details",
    featured: false,
    image: "/partners/Wooden Mask_2018-02-26-18-43-14.jpg",
    description: "Wooden crafts and Gamira products from Dinajpur",
    rating: 4.5,
    reviews: 71
  },
  {
    id: 21,
    name: "BEST ELECTRONIC SHOP",
    location: "KOLKATA",
    category: "electronics",
    price: null,
    action: "Shop & Order Online",
    featured: true,
    image: "",
    description: "Latest electronics and gadgets at best prices",
    rating: 4.6,
    reviews: 234
  },
  {
    id: 22,
    name: "Best Leather Goods Store",
    location: "KOLKATA",
    category: "leahter",
    price: null,
    action: "Shop & Order Online",
    featured: true,
    image: "",
    description: "Latest electronics and gadgets at best prices",
    rating: 4.6,
    reviews: 234
  },
  {
    id: 23,
    name: "Best Multi Brand Mall",
    location: "KOLKATA",
    category: "",
    price: null,
    action: "Shop & Order Online",
    featured: true,
    image: "",
    description: "Latest electronics and gadgets at best prices",
    rating: 4.6,
    reviews: 234
  },
  {
    id: 24,
    name: "Best Chinese Restaurant ",
    location: "KOLKATA",
    category: "food",
    price: null,
    action: "Shop & Order Online",
    featured: true,
    image: "",
    description: "Latest electronics and gadgets at best prices",
    rating: 4.6,
    reviews: 234
  },
  {
    id: 25,
    name: "Best Mughlai Restaurent ",
    location: "KOLKATA",
    category: "food",
    price: null,
    action: "Shop & Order Online",
    featured: true,
    image: "",
    description: "Latest electronics and gadgets at best prices",
    rating: 4.6,
    reviews: 234
  },
  {
    id: 26,
    name: "DERAJ - TREASURE TROVE",
    location: "BENGAL HANDLOOMS",
    category: "handloom",
    price: null,
    action: "Shop & Order Online",
    featured: true,
    image: "/partners/Deraj Logo_2021-05-06-22-38-48.jpg",
    description: "Premium handloom products and traditional textiles",
    rating: 4.9,
    reviews: 167
  },
  {
    id: 27,
    name: "BEST BENGALI THALI MEALS",
    location: "KOLKATA",
    category: "food",
    price: "Starting INR 1500/- Thali",
    action: "View Details",
    featured: false,
    image: "/partners/Bengali THali_2018-02-26-18-54-37.jpg",
    description: "Complete Bengali thali meals with variety",
    rating: 4.8,
    reviews: 189
  },
  {
    id: 27,
    name: "BEST FOOD HOME DELIVERY",
    location: "KOLKATA",
    category: "food",
    price: null,
    action: "KHICHRI BHOG",
    featured: false,
    image: "/partners/374654-bhojohori-manna_2016-05-11-17-51-12.jpg",
    description: "Home delivery of authentic Bengali food",
    rating: 4.5,
    reviews: 123
  },
  {
    id: 28,
    name: "MAYFAIR RESORTS & SPA",
    location: "DARJEELING",
    category: "hotels",
    price: "Room starting Rs.12,000/-",
    action: "View Details",
    featured: true,
    image: "/partners/Mayfa_ir-Darj_2021-11-15-11-35-13.jpg",
    description: "Luxury resort with spa facilities in Darjeeling",
    rating: 4.9,
    reviews: 267
  },
  {
    id: 29,
    name: "MAYFAIR RESORT & CASINO",
    location: "GANGTOK",
    category: "hotels",
    price: "Room starting Rs.28000/-",
    action: "View Details",
    featured: true,
    image: "/partners/Mayfa_ir-Gangtok-1_2021-11-15-11-42-25.jpg",
    description: "Premium resort with casino in Gangtok",
    rating: 4.8,
    reviews: 198
  },
  {
    id: 30,
    name: "MAYFAIR HERITAGE & WAVES",
    location: "PURI",
    category: "hotels",
    price: "Room starting Rs.12000/-",
    action: "View Details",
    featured: true,
    image: "/partners/Mayfa_ir-Puri-1_2021-11-15-11-43-43.jpg",
    description: "Heritage beach resort in Puri, Odisha",
    rating: 4.7,
    reviews: 189
  },
  {
    id: 31,
    name: "MAYFAIR HIMALAYAN",
    location: "KALIMPONG",
    category: "hotels",
    price: "Room starting Rs.12,000/-",
    action: "View Details",
    featured: true,
    image: "/partners/Mayfa_ir-Darj-2_2021-11-15-11-55-18.jpg",
    description: "Mountain resort with Himalayan views",
    rating: 4.8,
    reviews: 176
  },
  {
    id: 32,
    name: "BEST BIRIYANI HOUSE",
    location: "KOLKATA",
    category: "food",
    price: null,
    action: "Advertise YOUR Brand Here",
    featured: false,
    image: "/partners/Bengali THali_2018-02-26-18-54-37.jpg",
    description: "Authentic Bengali biryani and Mughlai cuisine",
    rating: 4.7,
    reviews: 145
  },
  {
    id: 33,
    name: "Best Bengali Cousine Restaurant ",
    location: "HOOGLY",
    category: "food",
    price: null,
    action: "View Details",
    featured: false,
    image: "",
    description: "Electronics and gadgets store in Hooghly",
    rating: 4.4,
    reviews: 98
  }
];

export default function BrandsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState<any>(null);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<string>("");

  const categories = [
    { id: "all", name: "All Categories", icon: "🏪" },
    { id: "jewellery", name: "Jewellery", icon: "💎" },
    { id: "food", name: "Food & Cuisine", icon: "🍽️" },
    { id: "handloom", name: "Handloom & Sarees", icon: "🧵" },
    { id: "crafts", name: "Handicrafts", icon: "🎨" },
    { id: "hotels", name: "Hotels & Resorts", icon: "🏨" },
    { id: "electronics", name: "Electronics", icon: "📱" },
    { id: "travel", name: "Travel & Tourism", icon: "✈️" }
  ];

  const filteredBrands = brands.filter(brand => {
    const matchesCategory = selectedCategory === "all" || brand.category === selectedCategory;
    const matchesSearch = brand.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      brand.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative h-[80vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/brand-home.png"
            alt="Brand Bengal"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-yellow-900/40"></div>
        </div>

        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-6 py-3 mb-8">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-white font-medium text-sm">Brand Bengal</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Best Brands,
              <span className="block bg-gradient-to-r from-yellow-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent relative">
                Affiliates, Partners
                <svg className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-3/4 h-4" viewBox="0 0 300 16" fill="none">
                  <path d="M10 8 Q 75 4, 150 8 T 290 8" stroke="url(#gradient)" strokeWidth="3" strokeLinecap="round" />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#EF4444" />
                      <stop offset="50%" stopColor="#F59E0B" />
                      <stop offset="100%" stopColor="#F97316" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed">
              Discover the finest products, services, and experiences from Bengal's most trusted brands
            </p>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">32</div>
                <div className="text-white/80 text-sm">Featured Brands</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">100%</div>
                <div className="text-white/80 text-sm">Verified</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold textwhite mb-2">4.8★</div>
                <div className="text-white/80 text-sm">Avg Rating</div>
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
<section className="bg-white px-4 py-16">
   <div className="max-w-7xl mx-auto bg-white px-4 py-16">
    <div className="text-center mb-12">
  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
    <span className="bg-gradient-to-r from-yellow-500 via-orange-500 to-yellow-700 bg-clip-text text-transparent">
      Top Gold & Diamond Jewellery Brand
    </span>
  </h2>


</div>
  <div className="grid grid-cols-1 gap-8 items-stretch">

    {/* ================= TOP GOLD JEWELLERY SHOP ================= */}
<section className="w-full">
  <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-yellow-300">

    {/* ================= VIDEO ================= */}
    <div className="relative bg-black">

      <video
        controls
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
        poster="/brand-home.png"
      >
        <source src="/add/add.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

    
    </div>

    {/* ================= CONTENT BELOW VIDEO ================= */}
    <div className="p-6 md:p-8">

      {/* Heading */}
      <div className="mb-5">
        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Senco Gold & Diamonds
        </h3>

       
      </div>

 


      {/* ================= BUTTONS ================= */}
      <div className="flex flex-col sm:flex-row gap-4">

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/919804333779?text=Hi%20I%20am%20interested%20in%20your%20jewellery%20collection"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-2xl transition-all duration-300 text-center shadow-lg hover:scale-[1.02]"
        >
          WhatsApp Us
        </a>

        {/* View Details */}
        <button
          onClick={() => {
            setSelectedVideo("/add/add.mp4");
            setShowVideoModal(true);
          }}
          className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-4 px-6 rounded-2xl transition-all duration-300 shadow-lg hover:scale-[1.02]"
        >
          View Details
        </button>

      </div>
    </div>
  </div>
</section>

  

  </div>
</div>
 </section>
      {/* ================= BRANDS GRID ================= */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">



            {/* Brand Cards with Advertisement Insertion */}
            {filteredBrands.map((brand, index) => {
              // Insert advertisement card after every 6 brand cards
              if (index > 0 && index % 0 === 0) {
                return (
                  <React.Fragment key={`ad-${index}`}>
                    <div className="lg:col-span-1 md:col-span-2 col-span-1">
                      <div className="bg-gradient-to-br from-yellow-600 via-orange-600 to-red-600 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 p-8 text-center text-white h-full flex flex-col justify-center items-center border-4 border-white/20">
                        <div className="mb-4">
                          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                              <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <h3 className="text-2xl font-bold mb-2">Advertise Your Brand Here</h3>
                          <p className="text-white/90 mb-6 text-sm leading-relaxed">
                            Join Brand Bengal and promote your business to thousands of potential customers across West Bengal and beyond.
                            Whether you run an electronics shop, jewellery store, restaurant, hotel, or any local business, we help you showcase your brand, attract more customers, and grow your business through powerful online promotion.
                          </p>
                        </div>

                        <div className="space-y-3">
                          <div className="flex items-center justify-center text-sm text-white/80">
                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            Premium Brand Placement
                          </div>
                          <div className="flex items-center justify-center text-sm text-white/80">
                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            Wide Customer Reach
                          </div>
                          <div className="flex items-center justify-center text-sm text-white/80">
                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            Business Growth Support
                          </div>
                        </div>

                        <div className="mt-6 space-y-2">
                          <a href="/contact" className="block bg-white text-orange-600 font-bold py-3 px-6 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
                            Get Started Today
                          </a>
                          <p className="text-xs text-white/70">
                            Limited slots available • Premium partners only
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* Brand Card */}
                    <div
                      key={brand.id}
                      className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 h-full flex flex-col"
                    >
                      {/* Image */}
                      <div className="relative h-56 flex items-center justify-center bg-gray-50">
                        {brand.image ? (
                          <Image
                            src={brand.image}
                            alt={brand.name}
                            fill
                            className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                          />
                        ) : (
                          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-yellow-100 to-orange-100 p-4">
                            <div className="text-center">
                              <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-3">
                                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                                </svg>
                              </div>
                              <h4 className="text-sm font-bold text-yellow-800 mb-1">Advertise Your Brand Here</h4>
                              <p className="text-xs text-yellow-600">Showcase your business to thousands</p>
                            </div>
                          </div>
                        )}

                        {/* Overlay */}
                        {brand.image && (
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                        )}

                        {/* Location */}
                        <div className="absolute bottom-3 left-3">
                          <div className="flex items-center bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                            <MapPin className="w-4 h-4 mr-1 text-yellow-600" />
                            <span className="text-xs font-semibold text-gray-800">
                              {brand.location}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-5 flex flex-col flex-grow">

                        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-yellow-600 transition">
                          {brand.name}
                        </h3>

                        {/* Rating */}
                        <div className="flex items-center gap-3 mb-3">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                            ))}
                          </div>
                          <span className="text-sm text-gray-600">{brand.rating}</span>
                        </div>

                        {/* Category */}
                        <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full w-fit mb-3">
                          {categories.find(cat => cat.id === brand.category)?.icon}{" "}
                          {categories.find(cat => cat.id === brand.category)?.name}
                        </span>

                        <p className="text-gray-600 text-sm mb-4 flex-grow">
                          {brand.description}
                        </p>

                        {brand.price && (
                          <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-3">
                            <p className="text-green-700 font-bold">{brand.price}</p>
                          </div>
                        )}

                        {/* Button */}
                        {brand.action ? (
                          <button
                            onClick={() => {
                              setSelectedBrand(brand);
                              setShowModal(true);
                            }}
                            className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-2 rounded-lg transition"
                          >
                            {brand.action}
                          </button>
                        ) : (
                          <div className="text-center py-2 bg-gray-50 rounded-lg">
                            <p className="text-gray-500 text-sm">Contact for details</p>
                          </div>
                        )}

                      </div>
                    </div>
                  </React.Fragment>
                );
              }

              // Regular Brand Card
              return (
                <div
                  key={brand.id}
                  className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 h-full flex flex-col"
                >
                  {/* Image */}
                  <div className="relative h-56 flex items-center justify-center bg-gray-50">
                    {brand.image ? (
                      <Image
                        src={brand.image}
                        alt={brand.name}
                        fill
                        className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-yellow-100 to-orange-100 p-4">
                        <div className="text-center">
                          <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-3">
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                              <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <h4 className="text-sm font-bold text-yellow-800 mb-1">Advertise Your Brand Here</h4>
                          <p className="text-xs text-yellow-600">Showcase your business to thousands</p>
                        </div>
                      </div>
                    )}

                    {/* Overlay */}
                    {brand.image && (
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                    )}

                    {/* Location */}
                    <div className="absolute bottom-3 left-3">
                      <div className="flex items-center bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                        <MapPin className="w-4 h-4 mr-1 text-yellow-600" />
                        <span className="text-xs font-semibold text-gray-800">
                          {brand.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-grow">

                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-yellow-600 transition">
                      {brand.name}
                    </h3>

                    {/* Rating */}
                    <div className="flex items-center gap-3 mb-3">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">{brand.rating}</span>
                    </div>

                    {/* Category */}
                    <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full w-fit mb-3">
                      {categories.find(cat => cat.id === brand.category)?.icon}{" "}
                      {categories.find(cat => cat.id === brand.category)?.name}
                    </span>

                    <p className="text-gray-600 text-sm mb-4 flex-grow">
                      {brand.description}
                    </p>

                    {brand.price && (
                      <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-3">
                        <p className="text-green-700 font-bold">{brand.price}</p>
                      </div>
                    )}

                    {/* Button */}
                    {brand.action ? (
                      <button
                        onClick={() => {
                          setSelectedBrand(brand);
                          setShowModal(true);
                        }}
                        className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-2 rounded-lg transition"
                      >
                        {brand.action}
                      </button>
                    ) : (
                      <div className="text-center py-2 bg-gray-50 rounded-lg">
                        <p className="text-gray-500 text-sm">Contact for details</p>
                      </div>
                    )}

                  </div>
                </div>
              );
            })}

          </div>
        </div>
      </section>

      {/* ================= BRAND MODAL ================= */}
      {showModal && selectedBrand && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">

          <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden shadow-2xl flex flex-col">

            {/* Image */}
            <div className="relative h-64 w-full">
              <Image
                src={selectedBrand.image}
                alt={selectedBrand.name}
                fill
                className="object-contain"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>

              {/* Close */}
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 bg-white/90 hover:bg-white p-2 rounded-full shadow-md transition"
              >
                <X size={20} className="text-black" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto">

              {/* Title */}
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-gray-900">
                  {selectedBrand.name}
                </h3>

                <p className="text-gray-600 flex items-center mt-1 text-sm">
                  <MapPin className="w-4 h-4 mr-1 text-yellow-600" />
                  {selectedBrand.location}
                </p>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-3 mb-4">

                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>

                <span className="font-semibold text-gray-800">
                  {selectedBrand.rating}
                </span>

                <span className="text-gray-500 text-sm">
                  ({selectedBrand.reviews} reviews)
                </span>

              </div>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed mb-5">
                {selectedBrand.description}
              </p>

              {/* Price */}
              {selectedBrand.price && (
                <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6">
                  <p className="text-green-700 font-bold text-lg">
                    {selectedBrand.price}
                  </p>
                </div>
              )}

              {/* Buttons */}
              <div className="grid grid-cols-2 gap-4">

                {(selectedBrand.name === "Top Gold Jewellery Shop" || selectedBrand.name === "BEST DIAMOND JEWELLERY STORE") ? (
                  <a
                    href={`https://wa.me/919804333779?text=Hi%2C%20I'm%20interested%20in%20your%20${selectedBrand.name === "Top Gold Jewellery Shop" ? "gold" : "diamond"}%20jewellery%20collection`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-xl transition flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.024 6.99 2.882a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488" />
                    </svg>
                    WhatsApp Us
                  </a>
                ) : (
                  <button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-3 rounded-xl transition">
                    Contact Brand
                  </button>
                )}

                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition">
                  Visit Website
                </button>

              </div>

            </div>
          </div>
        </div>
      )}

      {/* ================= CTA ================= */}
      <section className="py-20 bg-gradient-to-br from-yellow-600 to-orange-600">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black text-white mb-6">Partner With Us</h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-12">
            Join Brand Bengal and showcase your products to thousands of potential customers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="px-8 py-3 bg-white text-yellow-600 font-bold rounded-xl hover:bg-gray-100 transition">
              Become a Partner
            </a>
            <a href="/membership" className="px-8 py-3 bg-white text-yellow-600 font-bold rounded-xl hover:bg-gray-100 transition">
              Join as Member
            </a>
          </div>
        </div>
      </section>

      {/* ================= VIDEO MODAL ================= */}
      {showVideoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4">
          <div className="bg-black rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl flex flex-col">
            
            {/* Video Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-800">
              <h3 className="text-white font-semibold text-lg">Jewellery Video</h3>
              <button
                onClick={() => {
                  setShowVideoModal(false);
                  setSelectedVideo("");
                }}
                className="text-white/80 hover:text-white p-2 rounded-full hover:bg-white/10 transition"
              >
                <X size={20} className="text-white" />
              </button>
            </div>

            {/* Video Container */}
            <div className="flex-1 flex items-center justify-center p-4">
              <video
                autoPlay
                controls
                className="w-full h-auto max-h-[70vh] rounded-lg"
                playsInline
              >
                <source src={selectedVideo} type="video/mp4" />
                Your browser does not support video tag.
              </video>
            </div>

            {/* Video Footer */}
            <div className="p-4 border-t border-gray-800">
              <div className="flex items-center justify-between">
                <div className="text-white/80 text-sm">
                  Click play button to enable sound
                </div>
                <a 
                  href="https://wa.me/919804333779?text=Hi%2C%20I'm%20interested%20in%20your%20jewellery%20collection"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.024 6.99 2.882a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
                  </svg>
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
