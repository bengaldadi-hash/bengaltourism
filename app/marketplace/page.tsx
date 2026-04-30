"use client";

import Image from "next/image";
import { useState } from "react";

export default function MarketplacePage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All", icon: "" },
    { id: "jewellery", name: "Jewellery", icon: "" },
    { id: "food", name: "Cuisine", icon: "" },
    { id: "handloom", name: "Handloom", icon: "" },
    { id: "crafts", name: "Crafts", icon: "" },
    { id: "hotels", name: "Hotels", icon: "" },
    { id: "electronics", name: "Electronics", icon: "" },
    { id: "travel", name: "Travel", icon: "" }
  ];

 const brands = [
    {
      id: 1,
      name: "BEST JEWELLERY STORE",
      location: "KOLKATA",
      category: "jewellery",
      price: null,
      action: "Order on-line",
      featured: true,
      image: "/partners/Final Logo_2018-02-26-18-12-39.jpg"
    },
    {
      id: 2,
      name: "BEST BENGALI CUISINE",
      location: "KOLKATA",
      category: "food",
      price: "Starting INR 800/- for 2 Person",
      action: null,
      featured: true,
      image: "/partners/374654-bhojohori-manna_2016-05-11-17-51-12.jpg"
    },
    {
      id: 3,
      name: "BEST TANGAIL SAREE",
      location: "FULIA",
      category: "handloom",
      price: "INR 1500/- piece",
      action: null,
      featured: false,
      image: "/partners/Tangail Saree_2017-11-13-12-27-21.jpg"
    },
    {
      id: 4,
      name: "BEST DIAMOND JEWELLERY STORE",
      location: "KOLKATA",
      category: "jewellery",
      price: null,
      action: null,
      featured: true,
      image: "/partners/Final Logo_2018-02-26-18-12-39.jpg"
    },
    {
      id: 5,
      name: "BEST DARJEELING TEA",
      location: "DARJEELING",
      category: "food",
      price: null,
      action: "Publish YOUR Brand here",
      featured: true,
      image: "/partners/darjeeling20logo1_2016-05-13-07-49-05.jpg"
    },
    {
      id: 6,
      name: "BEST ROSOGOLLA STORE",
      location: "KOLKATA",
      category: "food",
      price: "INR 750/- kg",
      action: null,
      featured: false,
      image: "/partners/Rosogolla_2016-07-03-19-56-22.jpg"
    },
    {
      id: 7,
      name: "BEST PATACHITRA CRAFTS",
      location: "MIDNAPORE",
      category: "crafts",
      price: "INR 1500/- piece",
      action: null,
      featured: false,
      image: "/partners/Patachitra_2017-11-13-12-02-04.jpg"
    },
    {
      id: 8,
      name: "BEST JUTE PRODUCTS",
      location: "HOOGLY",
      category: "crafts",
      price: null,
      action: null,
      featured: true,
      image: "/partners/Jute-1_2018-02-26-18-36-58.jpg"
    },
    {
      id: 9,
      name: "BEST TOURISM PARTNER",
      location: "BENGAL - ODISHA - SIKKIM",
      category: "travel",
      price: null,
      action: "Contact for Tour Packages & Hotel Rooms",
      featured: true,
      image: "/partners/BT-Logo Image_2021-06-08-10-08-33.jfif"
    },
    {
      id: 10,
      name: "BEST KANTHA EMBROIDERY",
      location: "RURAL BENGAL",
      category: "crafts",
      price: "Rs. 2500/- piece",
      action: null,
      featured: false,
      image: "/partners/Kantha Stich_2017-11-13-12-14-21.jpg"
    },
    {
      id: 11,
      name: "BEST DOKRA ARTEFACTS",
      location: "BANKURA",
      category: "crafts",
      price: null,
      action: null,
      featured: true,
      image: "/partners/Dokra_2017-11-13-11-51-13.jpg"
    },
    {
      id: 12,
      name: "BEST DHAKAI SAREE",
      location: "WEST BENGAL",
      category: "handloom",
      price: "INR 5000/- piece",
      action: null,
      featured: false,
      image: "/partners/Dhakai Saree_2017-11-13-12-20-25.jpg"
    },
    {
      id: 13,
      name: "BEST JAMDANI SAREE",
      location: "SANTIPUR",
      category: "handloom",
      price: "INR 7500/- Piece",
      action: null,
      featured: true,
      image: "/partners/Dhakai Saree_2017-11-13-12-20-25.jpg"
    },
    {
      id: 14,
      name: "BEST PRAWN MALAI CURRY",
      location: "KOLKATA",
      category: "food",
      price: "INR 450/- Portion",
      action: null,
      featured: false,
      image: "/partners/Bengali THali_2018-02-26-18-54-37.jpg"
    },
    {
      id: 15,
      name: "BEST HILSA (ILISH) DISHES",
      location: "KOLKATA",
      category: "food",
      price: "INR 500/- portion",
      action: null,
      featured: false,
      image: "/partners/Bengali THali_2018-02-26-18-54-37.jpg"
    },
    {
      id: 16,
      name: "BEST TRAVEL PARTNER",
      location: "KOLKATA - INDIA",
      category: "travel",
      price: null,
      action: "Watch Video",
      featured: true,
      image: "/partners/BT-Logo Image_2021-06-08-10-08-33.jfif"
    },
    {
      id: 17,
      name: "BEST BELL METAL / KAANSHA PRODUCTS",
      location: "BURDWAN",
      category: "crafts",
      price: "INR 5000/- Set",
      action: null,
      featured: false,
      image: "/partners/Bell utensils_2016-05-20-10-44-33.jfif"
    },
    {
      id: 18,
      name: "BEST TERRACOTTA PRODUCTS",
      location: "BANKURA",
      category: "crafts",
      price: "INR 750/- pair",
      action: null,
      featured: false,
      image: "/partners/Teracota_2016-05-20-10-56-17.jfif"
    },
    {
      id: 19,
      name: "BEST CLAY MODELS",
      location: "KRISHNANAGAR",
      category: "crafts",
      price: "INR 300/- pair",
      action: null,
      featured: false,
      image: "/partners/Clay Models_2016-05-20-10-57-32.jfif"
    },
    {
      id: 20,
      name: "BEST MASK / MUKHOSH",
      location: "PURULIA",
      category: "crafts",
      price: "INR 1500/- piece",
      action: null,
      featured: false,
      image: "/partners/Wooden Mask_2018-02-26-18-43-14.jpg"
    },
    {
      id: 21,
      name: "BEST BALUCHARI SAREE",
      location: "MURSHIDABAD",
      category: "handloom",
      price: "INR 7500/- Piece",
      action: null,
      featured: false,
      image: "/partners/Baluchari Saree-1_2017-11-13-12-06-41.jpg"
    },
    {
      id: 22,
      name: "BEST WOODEN / GAMIRA PRODUCTS",
      location: "DINAJPUR",
      category: "crafts",
      price: "INR 5000/- piece",
      action: null,
      featured: false,
      image: "/partners/Wooden Mask_2018-02-26-18-43-14.jpg"
    },
    {
      id: 23,
      name: "TOP ELECTRONIC SHOP",
      location: "KOLKATA",
      category: "electronics",
      price: null,
      action: "Shop & Order Online",
      featured: true,
      image: "/partners/Final Logo_2018-02-26-18-12-39.jpg"
    },
    {
      id: 24,
      name: "DERAJ - TREASURE TROVE",
      location: "BENGAL HANDLOOMS",
      category: "handloom",
      price: null,
      action: "Shop & Order Online",
      featured: true,
      image: "/partners/Deraj Logo_2021-05-06-22-38-48.jpg"
    },
    {
      id: 25,
      name: "BEST BENGALI THALI MEALS",
      location: "KOLKATA",
      category: "food",
      price: "Starting INR 1500/- Thali",
      action: null,
      featured: false,
      image: "/partners/Bengali THali_2018-02-26-18-54-37.jpg"
    },
    {
      id: 26,
      name: "BEST FOOD HOME DELIVERY",
      location: "KOLKATA",
      category: "food",
      price: null,
      action: "KHICHRI BHOG",
      featured: false,
      image: "/partners/374654-bhojohori-manna_2016-05-11-17-51-12.jpg"
    },
    {
      id: 27,
      name: "MAYFAIR RESORTS & SPA",
      location: "DARJEELING",
      category: "hotels",
      price: "Room starting Rs.12,000/-",
      action: null,
      featured: true,
      image: "/partners/Mayfa_ir-Darj_2021-11-15-11-35-13.jpg"
    },
    {
      id: 28,
      name: "MAYFAIR RESORT & CASINO",
      location: "GANGTOK",
      category: "hotels",
      price: "Room starting Rs.28000/-",
      action: null,
      featured: true,
      image: "/partners/Mayfa_ir-Gangtok-1_2021-11-15-11-42-25.jpg"
    },
    {
      id: 29,
      name: "MAYFAIR HERITAGE & WAVES",
      location: "PURI",
      category: "hotels",
      price: "Room starting Rs.12000/-",
      action: null,
      featured: true,
      image: "/partners/Mayfa_ir-Puri-1_2021-11-15-11-43-43.jpg"
    },
    {
      id: 30,
      name: "MAYFAIR HIMALAYAN",
      location: "KALIMPONG",
      category: "hotels",
      price: "Room starting Rs.12,000/-",
      action: null,
      featured: true,
      image: "/partners/Mayfa_ir-Darj-2_2021-11-15-11-55-18.jpg"
    },
    {
      id: 31,
      name: "BEST BIRIYANI HOUSE",
      location: "KOLKATA",
      category: "food",
      price: null,
      action: "Advertise YOUR Brand Here",
      featured: false,
      image: "/partners/Bengali THali_2018-02-26-18-54-37.jpg"
    },
    {
      id: 32,
      name: "BEST ELECTRONIC SHOP",
      location: "HOOGLY",
      category: "electronics",
      price: null,
      action: null,
      featured: false,
      image: "/partners/Final Logo_2018-02-26-18-12-39.jpg"
    }
  ];

  const filteredBrands =
    selectedCategory === "all"
      ? brands
      : brands.filter(b => b.category === selectedCategory);

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1593696140826-c58b021acf8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Brand Bengal"
          fill
          className="object-cover scale-125"
          priority
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

        <div className="relative z-10 text-center max-w-5xl px-6">
          <span className="inline-block mb-6 px-6 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white font-semibold tracking-wide">
            🌟 Brand Bengal Marketplace
          </span>

          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6">
            Discover
            <span className="block bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
              The Best of Bengal
            </span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Curated brands • Heritage crafts • Iconic cuisine • Trusted travel & stays
          </p>

          <div className="mt-10 flex gap-4 justify-center flex-wrap">
            <button className="px-8 py-3 rounded-xl bg-white text-yellow-600 font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl">
              Explore Brands
            </button>
            <button className="px-8 py-3 rounded-xl bg-gradient-to-r from-yellow-600 to-orange-600 text-white font-bold hover:from-yellow-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-xl">
              Become a Partner
            </button>
          </div>
        </div>
      </section>

      {/* ================= CATEGORY BAR ================= */}
      {/* <section className="sticky top-0 z-40 bg-white/80 backdrop-blur-xl border-b">
        <div className="max-w-7xl mx-auto px-6 py-4 overflow-x-auto">
          <div className="flex gap-3 w-max">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-5 py-2 rounded-full font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat.id
                    ? "bg-yellow-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cat.icon} {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section> */}

      {/* ================= GRID ================= */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredBrands.map(brand => (
              <div
                key={brand.id}
                className="group bg-white rounded-2xl overflow-hidden shadow hover:shadow-2xl transition-all"
              >
                {/* Image */}
                <div className="relative h-56">
                  <Image
                    src={brand.image}
                    alt={brand.name}
                    fill
                    className="object-cover group-hover:scale-105 transition"
                  />
                  {/* {brand.featured && (
                    <span className="absolute top-3 right-3 bg-yellow-600 text-white text-xs px-3 py-1 rounded-full">
                      ⭐ Featured
                    </span>
                  )} */}
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col h-full">
                  <h3 className="font-black text-gray-700 text-lg mb-2 group-hover:text-yellow-600 transition-colors">
                    {brand.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3 flex items-center">
                    <svg className="w-4 h-4 mr-1 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                    {brand.location}
                  </p>

                  {brand.price && (
                    <p className="text-green-700 font-bold text-base mb-3">
                      {brand.price}
                    </p>
                  )}

                  <div className="mt-auto">
                    {brand.action ? (
                      <button className="w-full py-2.5 rounded-lg bg-gradient-to-r from-yellow-600 to-orange-600 text-white font-bold hover:from-yellow-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                        {brand.action}
                      </button>
                    ) : (
                      <div className="text-center py-2.5 px-3 bg-gray-50 rounded-lg">
                        <p className="text-sm text-gray-500 font-medium">Contact for details</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
