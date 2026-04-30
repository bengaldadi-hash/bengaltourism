"use client"

import Image from 'next/image'
import { Waves, MapPin, Calendar, Users, Star, Clock, Camera, Sun, Home, Ship, Utensils, Fish, Beer, TreePine, Train, Mountain, Link, Sunrise, Plane } from 'lucide-react'
import PackagePricing from '@/components/PackagePricing'
import ContactCTA from '@/components/ContactCTA'

export default function UdaipurPage() {
  return (
    <main className="text-gray-800">

      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-gradient-to-br from-white to-purple-50 py-24 overflow-hidden">
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
              <span className="text-yellow-400 font-semibold tracking-wide">Border Beach Paradise</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6 relative">
              Udaipur
              <span className="block text-3xl md:text-5xl mt-2 text-purple-300">
                Where Bengal Meets Odisha - Cultural Beach Confluence
              </span>
            </h1>

            <p className="text-gray-600 text-lg mb-10 max-w-md">
              Located at the Odisha border, home to unique cultural blend and pristine beaches,
              with the perfect fusion of Bengali and Odia coastal traditions
            </p>

            <div className="flex flex-wrap items-center gap-6">
              <a href="/book-tour" className="bg-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-yellow-400 transition transform hover:scale-105">
                Explore Border Beauty
              </a>

              <button className="border-2 border-yellow-600 text-yellow-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-600 hover:text-white transition transform hover:scale-105">
                Discover Culture
              </button>
            </div>
          </div>

          {/* ---------- RIGHT IMAGE ---------- */}
          <div className="flex justify-center md:justify-end">
            <img
              src="/Udaipur.jpeg"
              alt="Udaipur beach at Odisha border with cultural blend"
              className="w-full max-w-md md:max-w-lg lg:max-w-xl rounded-2xl shadow-2xl"
            />
          </div>
        </div>

      </section>

      {/* ================= QUICK FACTS ================= */}
      <section className="py-16 bg-gradient-to-r from-purple-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <MapPin className="w-10 h-10 text-purple-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Border Beach</h3>
              <p className="text-gray-600 text-sm">Bengal-Odisha line</p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Sun className="w-10 h-10 text-orange-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Cultural Mix</h3>
              <p className="text-gray-600 text-sm">Unique traditions</p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Fish className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Fresh Seafood</h3>
              <p className="text-gray-600 text-sm">Regional specialties</p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Camera className="w-10 h-10 text-purple-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Scenic</h3>
              <p className="text-gray-600 text-sm">Beautiful views</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= HISTORICAL BACKGROUND ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Cultural Confluence Point</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Where Two States Meet - A unique blend of coastal cultures
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-purple-50 p-6 rounded-xl">
                <h3 className="text-2xl font-bold mb-3 text-purple-600">Border Location</h3>
                <p className="text-gray-700 leading-relaxed">
                  Udaipur Beach is located at the strategic border between West Bengal and Odisha, 
                  making it a unique destination where two distinct coastal cultures meet and blend harmoniously.
                </p>
              </div>

              <div className="bg-yellow-50 p-6 rounded-xl">
                <h3 className="text-2xl font-bold mb-3 text-yellow-600">Cultural Heritage</h3>
                <p className="text-gray-700 leading-relaxed">
                  The beach showcases a beautiful fusion of Bengali and Odia traditions, from the local cuisine 
                  to the festivals celebrated here, creating a unique cultural experience for visitors.
                </p>
              </div>

              <div className="bg-green-50 p-6 rounded-xl">
                <h3 className="text-2xl font-bold mb-3 text-green-600">Natural Beauty</h3>
                <p className="text-gray-700 leading-relaxed">
                  The pristine beach offers stunning views of the Bay of Bengal, with golden sands and clear waters 
                  that provide the perfect backdrop for a peaceful coastal getaway.
                </p>
              </div>
            </div>

            <div className="relative">
              <img
                src="/Udaipur.jpeg"
                alt="Udaipur beach showing cultural blend and border location"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-purple-500 text-white p-4 rounded-xl font-bold">
                Cultural Gateway
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PLACES OF INTEREST ================= */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Places of Interest</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the unique jewels of Udaipur - from border beaches to cultural sites
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Beach Attractions */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition">
              <div className="h-48 bg-gradient-to-br from-purple-400 to-indigo-500 flex items-center justify-center">
                <Waves className="w-16 h-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">Beach Attractions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-purple-500" />
                    Border Beach Point
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-purple-500" />
                    Golden Sand Beach
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-purple-500" />
                    Scenic View Points
                  </li>
                </ul>
              </div>
            </div>

            {/* Cultural Sites */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition">
              <div className="h-48 bg-gradient-to-br from-orange-400 to-yellow-500 flex items-center justify-center">
                <Mountain className="w-16 h-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">Cultural Sites</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-purple-500" />
                    Border Temple Complex
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-purple-500" />
                    Cultural Heritage Center
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-purple-500" />
                    Traditional Villages
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
                    <MapPin className="w-4 h-4 text-purple-500" />
                    Coastal Forest Areas
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-purple-500" />
                    Mangrove Ecosystems
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-purple-500" />
                    Bird Watching Spots
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Extended Attractions Grid */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              "Border Point", "Cultural Center", "Beach Market", "Traditional Village",
              "Sunset Point", "Bird Sanctuary", "Coastal Trail", "Heritage Site",
              "Local Market", "Temple Complex", "Nature Walk", "View Tower"
            ].map((place, index) => (
              <div key={index} className="bg-white p-4 rounded-lg text-center hover:bg-purple-50 transition cursor-pointer">
                <MapPin className="w-6 h-6 text-purple-500 mx-auto mb-2" />
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
              Explore more coastal gems around Udaipur
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
          </div>
        </div>
      </section>

      {/* ================= CUISINE SECTION ================= */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Utensils className="w-8 h-8 text-orange-500" />
              <h2 className="text-4xl md:text-5xl font-bold">Cultural Fusion Cuisine</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Unique blend of Bengali and Odia coastal delicacies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Bengali Fish Curry", desc: "Traditional Bengali style", icon: "🐟" },
              { name: "Odia Seafood", desc: "Authentic Odia preparation", icon: "🦐" },
              { name: "Coconut Prawns", desc: "Coastal specialty", icon: "🥥" },
              { name: "Regional Sweets", desc: "Local desserts", icon: "🍮" },
              { name: "Border Specials", desc: "Unique fusion dishes", icon: "🍛" },
              { name: "Fresh Coconut", desc: "Tender coconuts", icon: "🥥" },
              { name: "Local Tea", desc: "Traditional blends", icon: "🍵" },
              { name: "Seafood Platter", desc: "Mixed coastal delights", icon: "🦞" }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center hover:shadow-xl transition group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold mb-4 text-center">Cultural Dining Experience</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {["Bengali", "Odia", "Fusion", "Coastal", "Traditional", "Regional", "Authentic"].map((culture, index) => (
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Cultural & Beach Activities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From cultural exploration to beach adventures - Udaipur offers unique experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8 hover:shadow-xl transition">
              <Mountain className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Cultural Exploration</h3>
              <p className="text-gray-700 mb-4">Border Temple • Heritage Sites • Traditional Villages • Cultural Center</p>
              <button className="text-purple-600 font-semibold hover:text-purple-700">Explore Culture →</button>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 hover:shadow-xl transition">
              <Waves className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Beach Activities</h3>
              <p className="text-gray-700 mb-4">Beach Walks • Swimming • Photography • Sunset Viewing</p>
              <button className="text-blue-600 font-semibold hover:text-blue-700">Beach Fun →</button>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-8 hover:shadow-xl transition">
              <TreePine className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Nature Tours</h3>
              <p className="text-gray-700 mb-4">Coastal Forest • Bird Watching • Mangrove Tours • Nature Trails</p>
              <button className="text-green-600 font-semibold hover:text-green-700">Nature Walks →</button>
            </div>
          </div>
        </div>
      </section>

      <PackagePricing 
        title="Udaipur Beach Packages"
        subtitle="Choose your perfect cultural beach experience duration"
      />
      <ContactCTA />

    </main>
  )
}
