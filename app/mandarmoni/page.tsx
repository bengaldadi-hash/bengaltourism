"use client"

import Image from 'next/image'
import { Waves, MapPin, Calendar, Users, Star, Clock, Camera, Sun, Home, Ship, Utensils, Fish, Beer, TreePine, Train, Mountain, Link, Sunrise, Plane } from 'lucide-react'
import PackagePricing from '@/components/PackagePricing'
import ContactCTA from '@/components/ContactCTA'

export default function MandarmoniPage() {
  return (
    <main className="text-gray-800">

      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-gradient-to-br from-white to-pink-50 py-24 overflow-hidden">
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
              <span className="text-yellow-400 font-semibold tracking-wide">Longest Motorable Beach</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6 relative">
              Mandarmoni
              <span className="block text-3xl md:text-5xl mt-2 text-pink-300">
                Where Waves Meet Wheels - 13km Beach Drive
              </span>
            </h1>

            <p className="text-gray-600 text-lg mb-10 max-w-md">
              Located at Bay of Bengal, home to India's longest motorable beach,
              with pristine golden sands and thrilling water sports adventures
            </p>

            <div className="flex flex-wrap items-center gap-6">
              <a href="/book-tour" className="bg-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-yellow-400 transition transform hover:scale-105">
                Book Beach Adventure
              </a>

              <button className="border-2 border-yellow-600 text-yellow-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-600 hover:text-white transition transform hover:scale-105">
                Explore Beach Drive
              </button>
            </div>
          </div>

          {/* ---------- RIGHT IMAGE ---------- */}
          <div className="flex justify-center md:justify-end">
            <img
              src="/mandarmani-sea-beach.jpg"
              alt="Mandarmoni beach with cars driving on sand"
              className="w-full max-w-md md:max-w-lg lg:max-w-xl rounded-2xl shadow-2xl"
            />
          </div>
        </div>

      </section>

      {/* ================= QUICK FACTS ================= */}
      <section className="py-16 bg-gradient-to-r from-pink-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Ship className="w-10 h-10 text-pink-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">13km Beach</h3>
              <p className="text-gray-600 text-sm">Longest motorable</p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Sun className="w-10 h-10 text-orange-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Water Sports</h3>
              <p className="text-gray-600 text-sm">Adventure hub</p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Fish className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Fresh Seafood</h3>
              <p className="text-gray-600 text-sm">Beachside dining</p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Camera className="w-10 h-10 text-purple-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Romantic</h3>
              <p className="text-gray-600 text-sm">Perfect getaway</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= HISTORICAL BACKGROUND ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Beach Paradise Evolution</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From Hidden Gem to Adventure Destination - A transformation story
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-pink-50 p-6 rounded-xl">
                <h3 className="text-2xl font-bold mb-3 text-pink-600">The Discovery</h3>
                <p className="text-gray-700 leading-relaxed">
                  Mandarmoni is one of Bengal's recently developed tourist destinations that lies close to ever-popular
                  Digha and Shankarpur. With sun and surf, pristine sea beach and untrammelled silt coloured sand,
                  this beach is slowly becoming popular among tourists.
                </p>
              </div>

              <div className="bg-yellow-50 p-6 rounded-xl">
                <h3 className="text-2xl font-bold mb-3 text-yellow-600">Unique Feature</h3>
                <p className="text-gray-700 leading-relaxed">
                  Mandarmoni boasts of a 13 km long motorable beach, probably the longest motorable beach road in India.
                  On the beach you will undoubtedly get the chance to feel the divinity and tranquility.
                </p>
              </div>

              <div className="bg-green-50 p-6 rounded-xl">
                <h3 className="text-2xl font-bold mb-3 text-green-600">Adventure Hub</h3>
                <p className="text-gray-700 leading-relaxed">
                  This is the only place in eastern India where one can enjoy many beach adventure activities
                  like ATV Rides, Water Scooter, Para Gliding, Speed Boats & local motorised Cycle Van cruise on the beach.
                </p>
              </div>
            </div>

            <div className="relative">
              <img
                src="/mandarmani-sea-beach.jpg"
                alt="Mandarmoni beach adventure activities"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-pink-500 text-white p-4 rounded-xl font-bold">
                Since 2005
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PLACES OF INTEREST ================= */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Places of Interest</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the adventure jewels of Mandarmoni - from beach drives to water sports
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Beach Activities */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition">
              <div className="h-48 bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center">
                <Ship className="w-16 h-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">Beach Activities</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-pink-500" />
                    13km Motorable Beach Drive
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-pink-500" />
                    ATV Bike Rides on Sand
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-pink-500" />
                    Beach Volleyball & Cricket
                  </li>
                </ul>
              </div>
            </div>

            {/* Water Sports */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center">
                <Waves className="w-16 h-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">Water Sports</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-pink-500" />
                    Speed Boat Rides
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-pink-500" />
                    Water Scooter Adventures
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-pink-500" />
                    Parasailing & Banana Boat
                  </li>
                </ul>
              </div>
            </div>

            {/* Relaxation Spots */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition">
              <div className="h-48 bg-gradient-to-br from-orange-400 to-yellow-500 flex items-center justify-center">
                <Sun className="w-16 h-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">Relaxation</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-pink-500" />
                    Beachside Shacks & Cafes
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-pink-500" />
                    Sunset Viewing Points
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-pink-500" />
                    Beach Bonfire Evenings
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Extended Attractions Grid */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              "Beach Resorts", "Seafood Restaurants", "ATV Rental Points", "Water Sport Centers",
              "Sunset Points", "Beach Photography", "Local Markets", "Coconut Vendors",
              "Beach Shacks", "Adventure Camps", "Nature Walks", "Bird Watching"
            ].map((place, index) => (
              <div key={index} className="bg-white p-4 rounded-lg text-center hover:bg-pink-50 transition cursor-pointer">
                <MapPin className="w-6 h-6 text-pink-500 mx-auto mb-2" />
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
              Explore more coastal gems around Mandarmoni
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
            <a href="/mandarmoni">
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition cursor-pointer">
                <img
                  src="/mandarmani-sea-beach.jpg"
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
          </div>
        </div>
      </section>

      {/* ================= CUISINE SECTION ================= */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Utensils className="w-8 h-8 text-orange-500" />
              <h2 className="text-4xl md:text-5xl font-bold">Beachside Cuisine</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fresh coastal delicacies served right on the sand
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Grilled Seafood", desc: "Fresh catch BBQ on beach", icon: "🦐" },
              { name: "Crab Fry", desc: "Local specialty preparation", icon: "🦀" },
              { name: "Beer & Snacks", desc: "Perfect beach combination", icon: "🍺" },
              { name: "Coconut Water", desc: "Fresh tender coconuts", icon: "🥥" },
              { name: "Beach BBQ", desc: "Evening bonfire grills", icon: "🍖" },
              { name: "Fish Curry", desc: "Traditional Bengali style", icon: "🐟" },
              { name: "Prawn Fry", desc: "Crispy golden prawns", icon: "🦐" },
              { name: "Local Snacks", desc: "Beachside munchies", icon: "🍟" }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center hover:shadow-xl transition group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold mb-4 text-center">Beach Dining Experience</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {["Beachside", "Fresh Seafood", "BBQ", "Romantic", "Adventure", "Local", "Casual"].map((culture, index) => (
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Beach Adventures & Activities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From thrilling water sports to peaceful beach experiences - Mandarmoni offers it all
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8 hover:shadow-xl transition">
              <Ship className="w-12 h-12 text-pink-600 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Beach Driving</h3>
              <p className="text-gray-700 mb-4">13km Beach Road • ATV Rides • Car Cruising • Bike Adventures</p>
              <button className="text-pink-600 font-semibold hover:text-pink-700">Beach Drive Experience →</button>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 hover:shadow-xl transition">
              <Waves className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Water Sports</h3>
              <p className="text-gray-700 mb-4">Speed Boats • Jet Ski • Parasailing • Banana Boat</p>
              <button className="text-blue-600 font-semibold hover:text-blue-700">Water Adventures →</button>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-8 hover:shadow-xl transition">
              <Camera className="w-12 h-12 text-orange-600 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Beach Photography</h3>
              <p className="text-gray-700 mb-4">Sunrise • Sunset • Action Shots • Beach Portraits</p>
              <button className="text-orange-600 font-semibold hover:text-orange-700">Photo Tours →</button>
            </div>
          </div>
        </div>
      </section>

      <PackagePricing 
        title="Mandarmoni Beach Packages"
        subtitle="Choose your perfect beach adventure duration"
      />
      <ContactCTA />

    </main>
  )
}
