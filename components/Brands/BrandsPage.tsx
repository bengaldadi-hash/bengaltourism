"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Star, MapPin, X } from "lucide-react";

const brands = [
  {
    id: 1,
    name: "Top Mithai Brand",
    brandName: "Advertise your name here",
    location: "KOLKATA",
    description:
      "Premium Bengali sweets, rosogolla, sandesh, mishti doi & traditional mithai collections.",
    image: "",
    category: "food",
    action: "View Details",
  },

  {
    id: 2,
    name: "Top Electronic Brand",
    brandName: "Advertise your name here",
    location: "KOLKATA",
    description:
      "Latest electronic gadgets, home appliances, smart devices & premium technology products.",
    image: "",
    category: "electronics",
    action: "Watch Video",
  },

  {
    id: 3,
    name: "Top Bengali Cuisine Brand",
    brandName: "Advertise your name here",
    location: "KOLKATA",
    description:
      "Authentic Bengali cuisine with traditional flavors, seafood delicacies & heritage recipes.",
    image: "",
    category: "food",
    action: "View Details",
  },

  {
    id: 4,
    name: "Top Saree Brand",
    brandName: "Advertise your name here",
    location: "WEST BENGAL",
    description:
      "Exclusive saree collections including Jamdani, Tangail, Baluchari & designer handloom sarees.",
    image: "",
    category: "fashion",
    action: "Watch Video",
  },

  {
    id: 5,
    name: "Top Car Brand",
    brandName: "Advertise your name here",
    location: "KOLKATA",
    description:
      "Luxury & premium cars with modern features, best offers & customer support services.",
    image: "",
    category: "automobile",
    action: "Watch Video",
  },

  {
    id: 6,
    name: "Top Handloom Brand",
    brandName: "Advertise your name here",
    location: "BENGAL",
    description:
      "Traditional Bengal handloom collections with authentic craftsmanship & heritage weaving.",
    image: "",
    category: "handloom",
    action: "Watch Video",
  },

  {
    id: 7,
    name: "Top Bengal Rice Brand",
    brandName: "Advertise your name here",
    location: "WEST BENGAL",
    description:
      "Premium Bengal rice varieties with authentic aroma, purity & traditional taste.",
    image: "",
    category: "food",
    action: "Watch Video",
  },

  {
    id: 8,
    name: "Top Boutique Brand",
    brandName: "Advertise your name here",
    location: "KOLKATA",
    description:
      "Designer boutique fashion, ethnic wear, bridal collections & custom outfits.",
    image: "",
    category: "fashion",
    action: "Watch Video",
  },

  {
    id: 9,
    name: "Top Restaurant Brand",
    brandName: "Advertise your name here",
    location: "KOLKATA",
    description:
      "Premium dining experience with multi-cuisine menus, luxury ambience & signature dishes.",
    image: "",
    category: "restaurant",
    action: "View Details",
  },

  {
    id: 10,
    name: "Top Chinese Cousine Brand",
    brandName: "Advertise your name here",
    location: "KOLKATA",
    description:
      "Authentic Chinese cuisine, dim sums, noodles & oriental specialties with premium taste.",
    image: "",
    category: "food",
    action: "View Details",
  },

  {
    id: 11,
    name: "Top Mughlai Cousine Brand",
    brandName: "Advertise your name here",
    location: "KOLKATA",
    description:
      "Famous Mughlai dishes including biryani, kebabs, rezala & royal cuisine collections.",
    image: "",
    category: "food",
    action: "View Details",
  },

  {
    id: 12,
    name: "Top Darjeeling Tea Brand",
    brandName: "Advertise your name here",
    location: "DARJEELING",
    description:
      "Premium Darjeeling tea directly from the finest tea gardens with authentic aroma & flavor.",
    image: "",
    category: "tea",
    action: "View Details",
  },
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




            {filteredBrands.map((brand) => (
              <div
                key={brand.id}
                className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col"
              >

                {/* ================= BRAND NAME ================= */}
                <div className="px-5 pt-5">

                  <h3 className="text-base font-bold text-gray-900 group-hover:text-yellow-600 transition text-left">
                    {brand.name}
                  </h3>

                </div>

                {/* ================= IMAGE ================= */}
                <div className="relative h-60 bg-gray-50 flex items-center justify-center overflow-hidden mt-4">

                  {brand.image ? (
                    <Image
                      src={brand.image}
                      alt={brand.name}
                      fill
                      className="object-contain p-5 transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-yellow-50 to-orange-50">

                      {/* Placeholder */}
                      <div className="w-16 h-16 rounded-full bg-yellow-500 flex items-center justify-center mb-4 shadow-lg">
                        <svg
                          className="w-8 h-8 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                          <path
                            fillRule="evenodd"
                            d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>

                      <p className="text-sm text-gray-500">
                        Brand Logo / Video
                      </p>
                    </div>
                  )}

                  {/* Location Badge */}
                  <div className="absolute bottom-4 left-4">
                    <div className="flex items-center gap-1 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow">
                      <MapPin className="w-4 h-4 text-yellow-600" />

                      <span className="text-xs font-semibold text-gray-700">
                        {brand.location}
                      </span>
                    </div>
                  </div>
                </div>

                {/* ================= CONTENT ================= */}
                <div className="p-5 flex flex-col flex-grow">
 <div className="mb-5">
                    <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">
                      {brand.category}
                    </span>
                  </div>
                  {/* Advertiser Name */}
                  <div className="mb-4 text-left">
                    <span className="inline-block  text-sm font-semibold px-2 text-gray-500 rounded-full">
                      {brand.brandName}
                    </span>
                  </div>

                  {/* Description */}
                  {/* <p className="text-gray-600 text-sm leading-relaxed mb-5 flex-grow text-left">
                    {brand.description}
                  </p> */}

                  {/* Category */}
                 

                  {/* Button */}
                  <button
                    onClick={() => {
                      setSelectedBrand(brand);
                      setShowModal(true);
                    }}
                    className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 rounded-xl transition-all duration-300 hover:shadow-lg"
                  >
                    {brand.action}
                  </button>

                </div>
              </div>
            ))}
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
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.024 6.99 2.882a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488" />
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
