"use client"

import Image from 'next/image'
import { Waves, MapPin, Calendar, Users, Star, Clock, Camera, Sun, Home, Ship, Utensils, Fish, Beer, TreePine, Train, Mountain, Link, Sunrise, Plane } from 'lucide-react'
import PackagePricing from '@/components/PackagePricing'
import ContactCTA from '@/components/ContactCTA'

export default function GadiaraPage() {
  return (
    <main className="text-gray-800">

      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-gradient-to-br from-white to-teal-50 py-24 overflow-hidden">
        {/* Decorative Image - Touching top and right */}
        <img
          src="/Decore.png"
          alt="Decorative elements"
          className="absolute top-0 right-0 w-auto h-full object-contain"
        />

        <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* ---------- LEFT CONTENT ---------- */}
          <div>
            <div className="flex items-center  gap-2 mb-4">
              <Ship className="w-6 h-6 text-yellow-400" />
              <span className="text-yellow-400 font-semibold tracking-wide">Three Rivers Confluence</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6 relative">
              Gadiara
              <span className="block text-3xl md:text-5xl mt-2 text-teal-300">
                Where Rivers Meet - Nature's Water Symphony
              </span>
            </h1>

            <p className="text-gray-600 text-lg mb-10 max-w-md">
              Located at the confluence of Hooghly, Rupnarayan, and Damodar rivers,
              with stunning river views and unique boat experiences
            </p>

            <div className="flex flex-wrap items-center gap-6">
              <a href="/book-tour" className="bg-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-yellow-400 transition transform hover:scale-105">
                Explore Confluence
              </a>

              <button className="border-2 border-yellow-600 text-yellow-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-600 hover:text-white transition transform hover:scale-105">
                River Adventures
              </button>
            </div>
          </div>

          {/* ---------- RIGHT IMAGE ---------- */}
          <div className="flex justify-center md:justify-end">
            <img
              src="/Gadiara.jpeg"
              alt="Gadiara three rivers confluence with boats"
              className="w-full max-w-md md:max-w-lg lg:max-w-xl rounded-2xl shadow-2xl"
            />
          </div>
        </div>

      </section>

      {/* ================= QUICK FACTS ================= */}
      <section className="py-16 bg-gradient-to-r from-teal-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Ship className="w-10 h-10 text-teal-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">3 Rivers</h3>
              <p className="text-gray-600 text-sm">Sacred confluence</p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Sun className="w-10 h-10 text-orange-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Sunset Point</h3>
              <p className="text-gray-600 text-sm">Spectacular views</p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Fish className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">River Fish</h3>
              <p className="text-gray-600 text-sm">Fresh catch daily</p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Camera className="w-10 h-10 text-purple-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Photogenic</h3>
              <p className="text-gray-600 text-sm">Scenic beauty</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= HISTORICAL BACKGROUND ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Sacred River Confluence</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Where Three Rivers Meet - A natural wonder of Bengal
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-teal-50 p-6 rounded-xl">
                <h3 className="text-2xl font-bold mb-3 text-teal-600">Natural Wonder</h3>
                <p className="text-gray-700 leading-relaxed">
                  Gadiara is a unique destination where three major rivers - Hooghly, Rupnarayan, and Damodar - 
                  meet to create a spectacular confluence. This natural phenomenon offers breathtaking views and 
                  a serene environment perfect for relaxation.
                </p>
              </div>

              <div className="bg-yellow-50 p-6 rounded-xl">
                <h3 className="text-2xl font-bold mb-3 text-yellow-600">Historical Significance</h3>
                <p className="text-gray-700 leading-relaxed">
                  The confluence has been an important point for trade and transportation for centuries. 
                  Historically, it served as a key location for river traffic and commerce between 
                  different parts of Bengal.
                </p>
              </div>

              <div className="bg-green-50 p-6 rounded-xl">
                <h3 className="text-2xl font-bold mb-3 text-green-600">Tourist Paradise</h3>
                <p className="text-gray-700 leading-relaxed">
                  Today, Gadiara has emerged as a popular tourist destination known for its stunning sunset views, 
                  boat rides, and the unique experience of witnessing three rivers merge into one.
                </p>
              </div>
            </div>

            <div className="relative">
              <img
                src="/Gadiara.jpeg"
                alt="Gadiara three rivers confluence with sunset and boats"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-teal-500 text-white p-4 rounded-xl font-bold">
                River Paradise
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PLACES OF INTEREST ================= */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Places of Interest</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the natural jewels of Gadiara - from river confluences to sunset points
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* River Attractions */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition">
              <div className="h-48 bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center">
                <Ship className="w-16 h-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">River Attractions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-teal-500" />
                    Three Rivers Confluence
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-teal-500" />
                    Boat Riding Points
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-teal-500" />
                    River Banks
                  </li>
                </ul>
              </div>
            </div>

            {/* Natural Features */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition">
              <div className="h-48 bg-gradient-to-br from-orange-400 to-yellow-500 flex items-center justify-center">
                <Sun className="w-16 h-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">Natural Features</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-teal-500" />
                    Sunset Viewing Point
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-teal-500" />
                    River Beach Areas
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-teal-500" />
                    Scenic Viewpoints
                  </li>
                </ul>
              </div>
            </div>

            {/* Activities */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition">
              <div className="h-48 bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center">
                <Camera className="w-16 h-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">Activities</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-teal-500" />
                    Boat Tours
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-teal-500" />
                    Photography Sessions
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-teal-500" />
                    Riverside Picnics
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Extended Attractions Grid */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              "Confluence Point", "Sunset Tower", "Boat Ghat", "River Bank",
              "View Point", "Fishing Spot", "Picnic Area", "Photography",
              "Nature Walk", "Bird Watching", "River Cruise", "Local Market"
            ].map((place, index) => (
              <div key={index} className="bg-white p-4 rounded-lg text-center hover:bg-teal-50 transition cursor-pointer">
                <MapPin className="w-6 h-6 text-teal-500 mx-auto mb-2" />
                <p className="text-sm font-medium">{place}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= NEARBY DESTINATIONS ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Nearby Destinations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore more gems around Gadiara
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <a href="/digha">
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition cursor-pointer">
                <img
                  src="/Digha.jpeg"
                  alt="Digha Beach"
                  className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Digha</h3>
                  <p className="text-gray-200">Brighton of the East</p>
                </div>
              </div>
            </a>
            <a href="/shankarpur">
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition cursor-pointer">
                <img
                  src="/Shankarpur.jpeg"
                  alt="Shankarpur Beach"
                  className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Shankarpur</h3>
                  <p className="text-gray-200">Quiet Beach Paradise</p>
                </div>
              </div>
            </a>
            <a href="/kolkata">
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition cursor-pointer">
                <img
                  src="/Kolkata.jpeg"
                  alt="Kolkata City"
                  className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Kolkata</h3>
                  <p className="text-gray-200">Cultural Capital</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ================= CUISINE SECTION ================= */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Utensils className="w-8 h-8 text-orange-500" />
              <h2 className="text-4xl md:text-5xl font-bold">Riverside Cuisine</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fresh river delicacies and traditional Bengali flavors
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "River Fish", desc: "Fresh catch from rivers", icon: "🐟" },
              { name: "Hilsa Preparation", desc: "Traditional Bengali dish", icon: "🐟" },
              { name: "Prawn Curry", desc: "Spicy river prawns", icon: "🦐" },
              { name: "Local Sweets", desc: "Traditional Bengali sweets", icon: "🍮" },
              { name: "Fresh Juice", desc: "Seasonal fruit juices", icon: "🧃" },
              { name: "Tea & Snacks", desc: "Traditional chai time", icon: "🍵" },
              { name: "River Picnic", desc: "Packaged river meals", icon: "🥘" },
              { name: "Local Delicacies", desc: "Regional specialties", icon: "🍛" }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center hover:shadow-xl transition group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold mb-4 text-center">Riverside Dining Experience</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {["Fresh", "Traditional", "Riverside", "Bengali", "Local", "Authentic", "Natural"].map((culture, index) => (
                <span key={index} className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full font-medium">
                  {culture}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= ACTIVITIES ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">River Adventures & Activities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From boat rides to sunset viewing - Gadiara offers unique river experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-8 hover:shadow-xl transition">
              <Ship className="w-12 h-12 text-teal-600 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Boat Adventures</h3>
              <p className="text-gray-700 mb-4">River Cruises • Boat Rides • Confluence Tours • Fishing Trips</p>
              <button className="text-teal-600 font-semibold hover:text-teal-700">Boat Tours →</button>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-8 hover:shadow-xl transition">
              <Sun className="w-12 h-12 text-orange-600 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Sunset Experiences</h3>
              <p className="text-gray-700 mb-4">Sunset Viewing • Photography • Riverside Dining • Evening Walks</p>
              <button className="text-orange-600 font-semibold hover:text-orange-700">Sunset Tours →</button>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 hover:shadow-xl transition">
              <Camera className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Photography</h3>
              <p className="text-gray-700 mb-4">Landscape Shots • River Views • Sunset • Wildlife</p>
              <button className="text-green-600 font-semibold hover:text-green-700">Photo Tours →</button>
            </div>
          </div>
        </div>
      </section>

      <PackagePricing 
        title="Gadiara River Packages"
        subtitle="Choose your perfect river confluence experience duration"
      />
      <ContactCTA />

    </main>
  )
}
