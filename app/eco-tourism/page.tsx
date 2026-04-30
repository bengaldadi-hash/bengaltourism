"use client"

import Image from 'next/image'
import { MapPin, Calendar, Users, Star, Clock, Camera, Sun, Home, IndianRupee, Award, Compass, Utensils, Building, Trees, Ship, Sparkles, Train, ShoppingBag, Book, Mountain, Waves, Fish, Bird, Tent, Flame } from 'lucide-react'
import PackagePricing from '@/components/PackagePricing'
import ContactCTA from '@/components/ContactCTA'

export default function EcoTourismPage() {
  return (
    <main className="text-gray-800">

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1447702876789-6dd063e6d6aa?w=1920&h=1080&fit=crop"
            alt="Lush green forest with mountains and eco village in West Bengal"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-green-900/80 via-green-800/60 to-green-900/80"></div>
        </div>

        <div className="relative h-full flex items-center justify-center text-center text-white px-6">
          <div className="max-w-4xl">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Trees className="w-6 h-6 text-yellow-400" />
              <span className="text-yellow-400 font-semibold tracking-wide">Eco Tourism Paradise</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Eco Tourism & Regional Destinations
              <span className="block text-3xl md:text-5xl mt-2 text-green-300">
                Purulia • Midnapore • Bankura • Birbhum
              </span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Discover the untouched natural beauty and sustainable tourism experiences 
              across West Bengal's diverse regional destinations
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="bg-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-yellow-400 transition transform hover:scale-105">
                Explore Eco Paradise
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-green-800 transition transform hover:scale-105">
                Book Sustainable Journey
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm">Discover sustainable Bengal</span>
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= REGIONAL DESTINATIONS ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Regional Destinations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore the diverse eco-tourism destinations across West Bengal's beautiful regions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Purulia */}
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition group">
              <div className="h-48 bg-gradient-to-br from-green-400 to-teal-500 flex items-center justify-center">
                <Mountain className="w-16 h-16 text-white group-hover:scale-110 transition" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Purulia</h3>
                <p className="text-gray-700 mb-4">Eco tourism with Ayodhya Pahar, Bamni Falls, and Matha Forest adventures</p>
                <div className="bg-green-100 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Package Highlights</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• 2N/3D with Ayodhya Pahar & Baranti</li>
                    <li>• Bamni Falls & PPSP Dam visits</li>
                    <li>• Matha Forest wildlife sanctuary</li>
                    <li>• Cultural folk programs</li>
                  </ul>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-green-600 font-semibold">Starting from ₹7,000</span>
                  <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700 transition">
                    Book Now
                  </button>
                </div>
              </div>
            </div>

            {/* Midnapore */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition group">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                <Waves className="w-16 h-16 text-white group-hover:scale-110 transition" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Midnapore</h3>
                <p className="text-gray-700 mb-4">Coastal eco-tourism with Digha, Mandarmoni, and beach destinations</p>
                <div className="bg-blue-100 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Package Highlights</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Beach camping & water sports</li>
                    <li>• Mangrove forest exploration</li>
                    <li>• Local village experiences</li>
                    <li>• Sustainable tourism practices</li>
                  </ul>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-blue-600 font-semibold">Starting from ₹8,000</span>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition">
                    Book Now
                  </button>
                </div>
              </div>
            </div>

            {/* Bankura */}
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition group">
              <div className="h-48 bg-gradient-to-br from-orange-400 to-yellow-500 flex items-center justify-center">
                <Sun className="w-16 h-16 text-white group-hover:scale-110 transition" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Bankura</h3>
                <p className="text-gray-700 mb-4">Heritage tourism with Susunia Hills and Bishnupur Rajbari</p>
                <div className="bg-orange-100 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Package Highlights</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Susunia Hills trekking</li>
                    <li>• Bishnupur historical sites</li>
                    <li>• Traditional craft villages</li>
                    <li>• Tribal culture experiences</li>
                  </ul>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-orange-600 font-semibold">Starting from ₹7,500</span>
                  <button className="bg-orange-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-orange-700 transition">
                    Book Now
                  </button>
                </div>
              </div>
            </div>

            {/* Birbhum */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition group">
              <div className="h-48 bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center">
                <Bird className="w-16 h-16 text-white group-hover:scale-110 transition" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Birbhum</h3>
                <p className="text-gray-700 mb-4">Wildlife sanctuary and Shantiniketan temple experiences</p>
                <div className="bg-purple-100 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Package Highlights</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Wildlife sanctuary visits</li>
                    <li>• Shantiniketan spiritual journey</li>
                    <li>• Bird watching tours</li>
                    <li>• Traditional village stays</li>
                  </ul>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-purple-600 font-semibold">Starting from ₹6,500</span>
                  <button className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-purple-700 transition">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= DETAILED TOUR PACKAGES ================= */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Tour Packages</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Special tailor-made packages for your perfect eco-tourism experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Purulia Package */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <Calendar className="w-8 h-8 text-green-600" />
                <h3 className="text-2xl font-bold">Purulia Eco Adventure</h3>
              </div>
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="text-center">
                  <h4 className="font-bold mb-2">Day 1</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Pick-up from Purulia Station</li>
                    <li>• Breakfast en-route</li>
                    <li>• Bamni Falls & PPSP Dam</li>
                    <li>• Hotel check-in</li>
                  </ul>
                </div>
                <div className="text-center">
                  <h4 className="font-bold mb-2">Day 2</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Ayodhya Pahar Falls</li>
                    <li>• Blue Lake & Echo Point</li>
                    <li>• Mayur Pahar exploration</li>
                  </ul>
                </div>
                <div className="text-center">
                  <h4 className="font-bold mb-2">Day 3</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Muraddi Dam & Garhpanchakot</li>
                    <li>• Deulghata Temple</li>
                    <li>• Return to Kolkata</li>
                  </ul>
                </div>
              </div>
              <div className="bg-green-100 p-4 rounded-lg">
                <h4 className="font-bold mb-2">Package Includes</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Accommodation in eco-resorts</li>
                  <li>• All meals (Bengali style)</li>
                  <li>• Transportation & sightseeing</li>
                  <li>• Cultural programs</li>
                </ul>
              </div>
              <div className="flex items-center justify-between mt-6">
                <span className="text-2xl font-bold text-green-600">₹7,000</span>
                <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition">
                  Book Purulia Tour
                </button>
              </div>
            </div>

            {/* Midnapore Package */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <Waves className="w-8 h-8 text-blue-600" />
                <h3 className="text-2xl font-bold">Midnapore Coastal Experience</h3>
              </div>
              <div className="text-gray-700 mb-6">
                <p className="mb-4">Perfect blend of beach and eco-tourism with Mandarmani, Digha, and coastal adventures.</p>
                <div className="bg-blue-100 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Package Highlights</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Beach camping at Mandarmani</li>
                    <li>• Water sports at Digha</li>
                    <li>• Mangrove forest exploration</li>
                    <li>• Local village experiences</li>
                  </ul>
                </div>
              </div>
              <div className="flex items-center justify-between mt-6">
                <span className="text-2xl font-bold text-blue-600">₹8,000</span>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                  Book Midnapore Tour
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ECO-TOURISM FACILITIES ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Eco-Tourism Facilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sustainable tourism experiences across hills and plains of West Bengal
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-6 text-center hover:shadow-xl transition">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Tent className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Eco Village Stay</h3>
              <p className="text-gray-600 text-sm mb-3">Traditional mud houses & sustainable living</p>
              <p className="text-green-600 font-semibold">Hills & Plains</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 text-center hover:shadow-xl transition">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Fish className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Community Tourism</h3>
              <p className="text-gray-600 text-sm mb-3">Local village interactions & cultural exchange</p>
              <p className="text-blue-600 font-semibold">All Regions</p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-6 text-center hover:shadow-xl transition">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bird className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Wildlife Sanctuaries</h3>
              <p className="text-gray-600 text-sm mb-3">Protected forests & biodiversity conservation</p>
              <p className="text-orange-600 font-semibold">Hills Focus</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 text-center hover:shadow-xl transition">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Flame className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Cultural Programs</h3>
              <p className="text-gray-600 text-sm mb-3">Folk dances, music & traditional performances</p>
              <p className="text-purple-600 font-semibold">Beach & Island</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CULTURAL EXPERIENCES ================= */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Cultural Experiences</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Immerse yourself in the rich cultural heritage of rural Bengal
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition">
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="w-8 h-8 text-orange-600" />
                <h3 className="text-xl font-bold">Folk Dance Programs</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Experience traditional Bengali folk dances like Jhumur, Santhali, and Baul performances 
                around campfires in village settings. Learn about rural cultural heritage.
              </p>
              <div className="flex items-center gap-2 text-orange-600">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">All Village Stays</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition">
              <div className="flex items-center gap-3 mb-4">
                <Utensils className="w-8 h-8 text-green-600" />
                <h3 className="text-xl font-bold">Traditional Cuisine</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Savor authentic Bengali meals prepared in traditional clay utensils and banana leaves. 
                Experience farm-to-table dining with local families.
              </p>
              <div className="flex items-center gap-2 text-green-600">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Eco Village Meals</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition">
              <div className="flex items-center gap-3 mb-4">
                <Ship className="w-8 h-8 text-blue-600" />
                <h3 className="text-xl font-bold">Boat Safaris</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Explore rivers and waterways through traditional boat rides. Visit remote islands 
                and experience fishing communities living by the water.
              </p>
              <div className="flex items-center gap-2 text-blue-600">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">River Explorations</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition">
              <div className="flex items-center gap-3 mb-4">
                <Building className="w-8 h-8 text-purple-600" />
                <h3 className="text-xl font-bold">Craft Villages</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Visit traditional craft villages specializing in terracotta, pottery, and bamboo crafts. 
                Purchase authentic handmade souvenirs directly from artisans.
              </p>
              <div className="flex items-center gap-2 text-purple-600">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Artisan Communities</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition">
              <div className="flex items-center gap-3 mb-4">
                <Mountain className="w-8 h-8 text-teal-600" />
                <h3 className="text-xl font-bold">Trekking & Hiking</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Guided treks through hills and forests with experienced local guides. 
                Discover hidden trails and breathtaking viewpoints.
              </p>
              <div className="flex items-center gap-2 text-teal-600">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Hill Adventures</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition">
              <div className="flex items-center gap-3 mb-4">
                <Tent className="w-8 h-8 text-pink-600" />
                <h3 className="text-xl font-bold">Camping</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Experience sustainable camping in eco-friendly sites. Enjoy campfires, 
                stargazing, and close-to-nature living.
              </p>
              <div className="flex items-center gap-2 text-pink-600">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Nature Camping</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ADVENTURE ACTIVITIES ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Adventure Activities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Thrilling adventures and outdoor experiences across West Bengal
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-6 text-center hover:shadow-xl transition">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mountain className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Trekking</h3>
              <p className="text-gray-600 text-sm mb-3">Hill trails & forest paths</p>
              <p className="text-green-600 font-semibold">All Levels</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 text-center hover:shadow-xl transition">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Waves className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Water Sports</h3>
              <p className="text-gray-600 text-sm mb-3">Kayaking, boating & rafting</p>
              <p className="text-blue-600 font-semibold">Rivers & Lakes</p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-6 text-center hover:shadow-xl transition">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bird className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Wildlife Safari</h3>
              <p className="text-gray-600 text-sm mb-3">Jungle safaris & bird watching</p>
              <p className="text-orange-600 font-semibold">Sanctuaries</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 text-center hover:shadow-xl transition">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Flame className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Camping</h3>
              <p className="text-gray-600 text-sm mb-3">Eco-friendly camping sites</p>
              <p className="text-purple-600 font-semibold">Beach & Forest</p>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-green-50 rounded-2xl p-6 text-center hover:shadow-xl transition">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Fish className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Fishing</h3>
              <p className="text-gray-600 text-sm mb-3">Traditional fishing experiences</p>
              <p className="text-teal-600 font-semibold">Coastal Areas</p>
            </div>
          </div>
        </div>
      </section>


      {/* ================= PACKAGE PRICING ================= */}
      <PackagePricing 
        title="Eco Tourism Packages"
        subtitle="Choose your perfect nature adventure duration"
      />
         
      <ContactCTA />

    </main>
  )
}
