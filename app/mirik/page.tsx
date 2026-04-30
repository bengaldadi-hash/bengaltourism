"use client"

import Image from 'next/image'
import Link from 'next/link'
import { Mountain, MapPin, Calendar, Star, Clock, Users, Camera, Trees, Utensils, Waves } from 'lucide-react'
import PackagePricing from '@/components/PackagePricing'
import ContactCTA from '@/components/ContactCTA'

export default function MirikPage() {
  return (
    <main className="text-gray-800">

      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-gradient-to-br from-white to-blue-50 py-24 overflow-hidden">
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
              <Mountain className="w-6 h-6 text-blue-400" />
              <span className="text-blue-400 font-semibold tracking-wide">Divine Lake & Orange Orchards</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6 relative">
              Mirik
              <span className="block text-3xl md:text-5xl mt-2 text-blue-300">
                Lake Paradise of the Hills
              </span>
            </h1>

            <p className="text-gray-600 text-lg mb-10 max-w-md">
              Located at 5,800 ft above sea level, Mirik is famous for its 
              beautiful lake, orange orchards, and proximity to Nepal border.
            </p>

            <div className="flex flex-wrap items-center gap-6">
              <a href="/book-tour" className="bg-blue-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-blue-400 transition transform hover:scale-105">
                Book Your Journey
              </a>

              <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-600 hover:text-white transition transform hover:scale-105">
                Explore Attractions
              </button>
            </div>
          </div>

          {/* ---------- RIGHT IMAGE ---------- */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-blue-200/30 to-green-200/30 rounded-3xl transform rotate-3"></div>
            <Image
              src="/Mirik.jpeg"
              alt="Mirik Lake"
              width={600}
              height={400}
              className="relative rounded-2xl shadow-2xl object-cover w-full h-[400px]"
            />
          </div>
        </div>
      </section>

      {/* ================= QUICK INFO ================= */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <Clock className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-2">Duration</h3>
              <p className="text-gray-600">1N/2D</p>
            </div>
            <div className="text-center">
              <MapPin className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-2">Location</h3>
              <p className="text-gray-600">Mirik Lake</p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-2">Group Size</h3>
              <p className="text-gray-600">2-8 Persons</p>
            </div>
            <div className="text-center">
              <Star className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-2">Difficulty</h3>
              <p className="text-gray-600">Easy</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= DETAILED ITINERARY ================= */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-6">Detailed Itinerary</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the serene beauty and cultural richness of Mirik
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="space-y-6">
                {/* Day 1 */}
                <div className="border-l-4 border-blue-500 pl-6">
                  <div className="flex items-center gap-3 mb-2">
                    <Calendar className="w-5 h-5 text-blue-600" />
                    <h3 className="text-xl font-bold">Day 1: Arrival in Mirik</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Start of tour: Our representative will receive you at New Jalpaiguri Railway Station (NJP) / Bagdogra Airport (IXB). 
                    Transfer to Mirik (5,800 ft) - 3-4 hours scenic drive through tea gardens and hills. 
                    Check-in at Hotel/Resort. 
                    Evening boat ride on Sumendu Lake and explore local markets. 
                    Breakfast & Dinner included. Overnight stay at Mirik.
                  </p>
                </div>

                {/* Day 2 */}
                <div className="border-l-4 border-blue-500 pl-6">
                  <div className="flex items-center gap-3 mb-2">
                    <Calendar className="w-5 h-5 text-blue-600" />
                    <h3 className="text-xl font-bold">Day 2: Orange Orchards & Viewpoints</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Early morning breakfast and visit orange orchards (seasonal). 
                    Explore Gopal Dhara View Point for panoramic mountain views. 
                    Visit local tea gardens and learn about tea processing. 
                    Evening shopping at local markets for handicrafts. 
                    Breakfast & Dinner included. Overnight stay at Mirik.
                  </p>
                </div>

                {/* Day 3 */}
                <div className="border-l-4 border-blue-500 pl-6">
                  <div className="flex items-center gap-3 mb-2">
                    <Calendar className="w-5 h-5 text-blue-600" />
                    <h3 className="text-xl font-bold">Day 3: Pashupati Market & Departure</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Early breakfast and visit Pashupati Market in Nepal (border crossing). 
                    Explore cross-border shopping and cultural experiences. 
                    Return for lunch and check-out. 
                    Transfer back to NJP/Bagdogra with beautiful memories. 
                    Breakfast & Dinner included. Tour ends.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="space-y-6">
                {/* Package Highlights */}
                <div className="bg-blue-100 rounded-xl p-6 mt-8">
                  <h4 className="font-bold text-blue-800 mb-3">Package Highlights</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Waves className="w-4 h-4 text-blue-600" />
                      <span className="text-gray-700">Sumendu Lake boat ride</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Trees className="w-4 h-4 text-blue-600" />
                      <span className="text-gray-700">Orange orchard exploration</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mountain className="w-4 h-4 text-blue-600" />
                      <span className="text-gray-700">Gopal Dhara viewpoint</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Camera className="w-4 h-4 text-blue-600" />
                      <span className="text-gray-700">Tea garden visits</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-blue-600" />
                      <span className="text-gray-700">Pashupati Market Nepal</span>
                    </div>
                  </div>
                </div>

                {/* Inclusions */}
                <div className="bg-green-50 rounded-xl p-6">
                  <h4 className="font-bold text-green-800 mb-3">What's Included</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">✓</span>
                      <span>Accommodation in Hotels/Resorts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">✓</span>
                      <span>Daily Breakfast & Dinner</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">✓</span>
                      <span>All transfers by vehicle</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">✓</span>
                      <span>Boat ride on Sumendu Lake</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">✓</span>
                      <span>Sightseeing as per itinerary</span>
                    </li>
                  </ul>
                </div>

                {/* Exclusions */}
                <div className="bg-yellow-50 rounded-xl p-6">
                  <h4 className="font-bold text-yellow-800 mb-3">What's Excluded</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-600 mt-1">✗</span>
                      <span>Airfare/Train fare</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-600 mt-1">✗</span>
                      <span>Lunch and other meals</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-600 mt-1">✗</span>
                      <span>Personal expenses</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-600 mt-1">✗</span>
                      <span>Shopping expenses</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= BEST TIME TO VISIT ================= */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-6">Best Time to Visit</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Plan your trip during the best seasons for optimal experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-100 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-blue-800 mb-4">March to June</h3>
              <p className="text-gray-700 leading-relaxed">
                Spring and early summer offer pleasant weather and clear lake views. 
                Perfect for boat rides and outdoor activities. 
                Temperature ranges from 15°C to 25°C.
              </p>
            </div>

            <div className="bg-orange-100 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-orange-800 mb-4">October to December</h3>
              <p className="text-gray-700 leading-relaxed">
                Autumn provides clear mountain views and comfortable weather. 
                Ideal for orange orchard visits and photography. 
                Temperature ranges from 10°C to 20°C.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TRAVEL TIPS ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-6">Travel Tips</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Essential information for a memorable Mirik experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mountain className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Altitude Preparation</h4>
                  <p className="text-gray-600">
                    Mirik is at 5,800 ft - comfortable altitude. No special preparation needed.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Camera className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Photography</h4>
                  <p className="text-gray-600">
                    Early morning offers best lake reflections. Carry camera for sunrise shots.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Utensils className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Local Cuisine</h4>
                  <p className="text-gray-600">
                    Try fresh orange juice, local Nepali dishes, and tea garden specialties.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Border Crossing</h4>
                  <p className="text-gray-600">
                    Carry valid ID for Nepal market visit. Check current border regulations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-6">Key Attractions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the serene beauty and cultural richness of Mirik
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <Image
                src="/sum.jpg"
                alt="Mirik Lake"
                width={400}
                height={300}
                className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Sumendu Lake</h3>
                <p className="text-gray-600">
                  Beautiful 1.25 km long lake with boating facilities and walking paths
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <Image
                src="/oran.jpeg"
                alt="Orange Orchards"
                width={400}
                height={300}
                className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Orange Orchards</h3>
                <p className="text-gray-600">
                  Lush orange gardens with fruit picking experience during season
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <Image
                src="/mar.jpeg"
                alt="Pashupati Market"
                width={400}
                height={300}
                className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Pashupati Market (Nepal)</h3>
                <p className="text-gray-600">
                  Cross-border shopping experience at nearby Nepalese market
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PACKAGE PRICING ================= */}
      <PackagePricing 
        title="Mirik Tour Packages"
        subtitle="Lake Paradise Experience"
      />

      {/* ================= CONTACT CTA ================= */}
      <ContactCTA />

    </main>
  )
}
