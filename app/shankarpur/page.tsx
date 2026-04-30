"use client"

import Image from 'next/image'
import { Waves, MapPin, Calendar, Users, Star, Clock, Camera, Sun, Home, Ship, Utensils, Fish, Beer, TreePine, Train, Mountain, Link, Sunrise, Plane } from 'lucide-react'
import PackagePricing from '@/components/PackagePricing'
import ContactCTA from '@/components/ContactCTA'

export default function ShankarpurPage() {
  return (
    <main className="text-gray-800">

      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-gradient-to-br from-white to-orange-50 py-24 overflow-hidden">
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
              <Waves className="w-6 h-6 text-yellow-400" />
              <span className="text-yellow-400 font-semibold tracking-wide">Quiet Beach Paradise</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6 relative">
              Shankarpur
              <span className="block text-3xl md:text-5xl mt-2 text-orange-300">
                Secrets of the Sea - Where Silence Speaks
              </span>
            </h1>

            <p className="text-gray-600 text-lg mb-10 max-w-md">
              Located near Digha, home to secluded shores and peaceful beaches,
              with the perfect blend of tranquility and coastal charm
            </p>

            <div className="flex flex-wrap items-center gap-6">
              <a href="/book-tour" className="bg-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-yellow-400 transition transform hover:scale-105">
                Discover Serenity
              </a>

              <button className="border-2 border-yellow-600 text-yellow-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-600 hover:text-white transition transform hover:scale-105">
                Explore Peace
              </button>
            </div>
          </div>

          {/* ---------- RIGHT IMAGE ---------- */}
          <div className="flex justify-center md:justify-end">
            <img
              src="/Shankarpur.jpeg"
              alt="Shankarpur quiet beach with casuarina trees"
              className="w-full max-w-md md:max-w-lg lg:max-w-xl rounded-2xl shadow-2xl"
            />
          </div>
        </div>

      </section>

      {/* ================= QUICK FACTS ================= */}
      <section className="py-16 bg-gradient-to-r from-orange-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Waves className="w-10 h-10 text-orange-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Quiet Beach</h3>
              <p className="text-gray-600 text-sm">Peaceful shores</p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <TreePine className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Casuarina</h3>
              <p className="text-gray-600 text-sm">Coastal forests</p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Fish className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Fresh Seafood</h3>
              <p className="text-gray-600 text-sm">Daily catch</p>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Secrets of the Sea</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From Hidden Cove to Tranquil Haven - A journey into serenity
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-orange-50 p-6 rounded-xl">
                <h3 className="text-2xl font-bold mb-3 text-orange-600">The Hidden Gem</h3>
                <p className="text-gray-700 leading-relaxed">
                  Then there is the secrets of the sea in Shankarpur. There is something about the silence of the seclude shore
                  that revives memories of innocence lost, or of a secret that one was privileged to learn & cherish as a giggly child.
                </p>
              </div>

              <div className="bg-yellow-50 p-6 rounded-xl">
                <h3 className="text-2xl font-bold mb-3 text-yellow-600">Natural Beauty</h3>
                <p className="text-gray-700 leading-relaxed">
                  Shankarpur offers pristine beaches lined with casuarina trees, creating a natural canopy that provides 
                  shade and tranquility. The gentle waves and peaceful atmosphere make it perfect for relaxation.
                </p>
              </div>

              <div className="bg-green-50 p-6 rounded-xl">
                <h3 className="text-2xl font-bold mb-3 text-green-600">Perfect Escape</h3>
                <p className="text-gray-700 leading-relaxed">
                  Away from the commercialization of other beaches, Shankarpur maintains its natural charm and peaceful environment,
                  making it ideal for those seeking solitude and a genuine beach experience.
                </p>
              </div>
            </div>

            <div className="relative">
              <img
                src="/Shankarpur.jpeg"
                alt="Shankarpur beach with casuarina trees and peaceful shores"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-orange-500 text-white p-4 rounded-xl font-bold">
                Since 1980s
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PLACES OF INTEREST ================= */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Places of Interest</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the peaceful jewels of Shankarpur - from quiet beaches to coastal forests
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Beach Attractions */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition">
              <div className="h-48 bg-gradient-to-br from-orange-400 to-yellow-500 flex items-center justify-center">
                <Waves className="w-16 h-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">Beach Attractions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-orange-500" />
                    Secluded Beach Areas
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-orange-500" />
                    Peaceful Shore Points
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-orange-500" />
                    Quiet Swimming Spots
                  </li>
                </ul>
              </div>
            </div>

            {/* Natural Features */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition">
              <div className="h-48 bg-gradient-to-br from-green-400 to-teal-500 flex items-center justify-center">
                <TreePine className="w-16 h-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">Natural Features</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-orange-500" />
                    Casuarina Tree Groves
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-orange-500" />
                    Coastal Forest Areas
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-orange-500" />
                    Natural Wind Breakers
                  </li>
                </ul>
              </div>
            </div>

            {/* Relaxation Spots */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center">
                <Sun className="w-16 h-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">Relaxation</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-orange-500" />
                    Meditation Spots
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-orange-500" />
                    Beach Reading Areas
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-orange-500" />
                    Sunset Viewing Points
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Extended Attractions Grid */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              "Quiet Beach Corners", "Casuarina Forest", "Peaceful Walks", "Bird Watching",
              "Sunset Points", "Beach Meditation", "Nature Photography", "Coastal Trails",
              "Secluded Areas", "Wind Breaker Trees", "Natural Shade", "Serene Spots"
            ].map((place, index) => (
              <div key={index} className="bg-white p-4 rounded-lg text-center hover:bg-orange-50 transition cursor-pointer">
                <MapPin className="w-6 h-6 text-orange-500 mx-auto mb-2" />
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
              Explore more coastal gems around Shankarpur
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
            <a href="/mandarmoni">
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition cursor-pointer">
                <img
                  src="/Mandarmoni.jpeg"
                  alt="Mandarmoni Beach"
                  className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Mandarmoni</h3>
                  <p className="text-gray-200">Adventure Beach Paradise</p>
                </div>
              </div>
            </a>
            <a href="/tajpur">
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition cursor-pointer">
                <img
                  src="/Tajpur.jpeg"
                  alt="Tajpur Beach"
                  className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Tajpur</h3>
                  <p className="text-gray-200">Serene Secluded Beach</p>
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
              <h2 className="text-4xl md:text-5xl font-bold">Quiet Beach Cuisine</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple, authentic coastal flavors in peaceful surroundings
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Fresh Fish Curry", desc: "Traditional Bengali preparation", icon: "🐟" },
              { name: "Coconut Water", desc: "Fresh tender coconuts", icon: "🥥" },
              { name: "Beach Snacks", desc: "Local seaside treats", icon: "🍿" },
              { name: "Seafood Grill", desc: "Simple grilled delicacies", icon: "🦐" },
              { name: "Local Tea", desc: "Traditional chai", icon: "🍵" },
              { name: "Fruit Platter", desc: "Fresh seasonal fruits", icon: "🍉" },
              { name: "Light Meals", desc: "Simple beach food", icon: "🥪" },
              { name: "Fresh Juice", desc: "Tropical blends", icon: "🧃" }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center hover:shadow-xl transition group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold mb-4 text-center">Peaceful Dining Experience</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {["Quiet", "Fresh", "Simple", "Natural", "Peaceful", "Local", "Authentic"].map((culture, index) => (
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Peaceful Beach Activities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From serene nature walks to quiet meditation - Shankarpur offers tranquility
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-8 hover:shadow-xl transition">
              <TreePine className="w-12 h-12 text-orange-600 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Nature Walks</h3>
              <p className="text-gray-700 mb-4">Casuarina Forest • Coastal Trails • Bird Watching • Nature Photography</p>
              <button className="text-orange-600 font-semibold hover:text-orange-700">Explore Nature →</button>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 hover:shadow-xl transition">
              <Camera className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Photography</h3>
              <p className="text-gray-700 mb-4">Landscape Shots • Beach Scenes • Sunset • Nature Documentation</p>
              <button className="text-blue-600 font-semibold hover:text-blue-700">Photo Tours →</button>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-8 hover:shadow-xl transition">
              <Sun className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Relaxation</h3>
              <p className="text-gray-700 mb-4">Beach Meditation • Quiet Reading • Sunset Watching • Peaceful Contemplation</p>
              <button className="text-green-600 font-semibold hover:text-green-700">Find Peace →</button>
            </div>
          </div>
        </div>
      </section>

      <PackagePricing 
        title="Shankarpur Beach Packages"
        subtitle="Choose your perfect peaceful retreat duration"
      />
      <ContactCTA />

    </main>
  )
}
