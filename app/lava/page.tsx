"use client"

import Image from 'next/image'
import Link from 'next/link'
import { Mountain, MapPin, Calendar, Star, Clock, Users, Camera, Trees, Utensils } from 'lucide-react'
import PackagePricing from '@/components/PackagePricing'
import ContactCTA from '@/components/ContactCTA'

export default function LavaPage() {
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
              <Mountain className="w-6 h-6 text-orange-400" />
              <span className="text-orange-400 font-semibold tracking-wide">Gateway to Neora Valley</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6 relative">
              Lava
              <span className="block text-3xl md:text-5xl mt-2 text-orange-300">
                Ancient Village with Mystical Charm
              </span>
            </h1>

            <p className="text-gray-600 text-lg mb-10 max-w-md">
              Located at 7,200 ft above sea level, Lava is a small village 
              known for its ancient monastery and gateway to Neora Valley National Park.
            </p>

            <div className="flex flex-wrap items-center gap-6">
              <a href="/book-tour" className="bg-orange-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-orange-400 transition transform hover:scale-105">
                Book Your Journey
              </a>

              <button className="border-2 border-orange-600 text-orange-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-600 hover:text-white transition transform hover:scale-105">
                Explore Attractions
              </button>
            </div>
          </div>

          {/* ---------- RIGHT IMAGE ---------- */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-orange-200/30 to-yellow-200/30 rounded-3xl transform rotate-3"></div>
            <Image
              src="/Lava.jpg"
              alt="Lava Village"
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
              <Clock className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-2">Duration</h3>
              <p className="text-gray-600">1N/2D</p>
            </div>
            <div className="text-center">
              <MapPin className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-2">Location</h3>
              <p className="text-gray-600">Lava Village</p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-2">Group Size</h3>
              <p className="text-gray-600">2-8 Persons</p>
            </div>
            <div className="text-center">
              <Star className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-2">Difficulty</h3>
              <p className="text-gray-600">Easy to Moderate</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= DETAILED ITINERARY ================= */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-6">Detailed Itinerary</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the spiritual and natural wonders of Lava
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="space-y-6">
                {/* Day 1 */}
                <div className="border-l-4 border-orange-500 pl-6">
                  <div className="flex items-center gap-3 mb-2">
                    <Calendar className="w-5 h-5 text-orange-600" />
                    <h3 className="text-xl font-bold">Day 1: Arrival in Lava</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Start of tour: Our representative will receive you at New Jalpaiguri Railway Station (NJP) / Bagdogra Airport (IXB). 
                    Transfer to Lava (7,200 ft) - 4-5 hours scenic drive through mountain roads and forests. 
                    Check-in at Hotel/Homestay. 
                    Evening visit to Lava Monastery and explore the village. 
                    Breakfast & Dinner included. Overnight stay at Lava.
                  </p>
                </div>

                {/* Day 2 */}
                <div className="border-l-4 border-orange-500 pl-6">
                  <div className="flex items-center gap-3 mb-2">
                    <Calendar className="w-5 h-5 text-orange-600" />
                    <h3 className="text-xl font-bold">Day 2: Neora Valley & Tiffin Dara</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Early morning breakfast and proceed to Neora Valley National Park. 
                    Explore the pristine forests and biodiversity. 
                    Visit Tiffin Dara viewpoint for spectacular Himalayan views. 
                    Evening return to Lava and enjoy local cultural program. 
                    Breakfast & Dinner included. Overnight stay at Lava.
                  </p>
                </div>

                {/* Day 3 */}
                <div className="border-l-4 border-orange-500 pl-6">
                  <div className="flex items-center gap-3 mb-2">
                    <Calendar className="w-5 h-5 text-orange-600" />
                    <h3 className="text-xl font-bold">Day 3: Changey Falls & Departure</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Early breakfast and visit Changey Falls - a beautiful waterfall in the region. 
                    Explore nearby villages and interact with local communities. 
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
                <div className="bg-orange-100 rounded-xl p-6 mt-8">
                  <h4 className="font-bold text-orange-800 mb-3">Package Highlights</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Mountain className="w-4 h-4 text-orange-600" />
                      <span className="text-gray-700">Ancient Lava Monastery</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Camera className="w-4 h-4 text-orange-600" />
                      <span className="text-gray-700">Neora Valley National Park</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-orange-600" />
                      <span className="text-gray-700">Tiffin Dara viewpoint</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Trees className="w-4 h-4 text-orange-600" />
                      <span className="text-gray-700">Changey Falls exploration</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Utensils className="w-4 h-4 text-orange-600" />
                      <span className="text-gray-700">Local cultural experiences</span>
                    </div>
                  </div>
                </div>

                {/* Inclusions */}
                <div className="bg-green-50 rounded-xl p-6">
                  <h4 className="font-bold text-green-800 mb-3">What's Included</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">✓</span>
                      <span>Accommodation in Hotels/Homestays</span>
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
                      <span>Sightseeing as per itinerary</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">✓</span>
                      <span>Neora Valley entry fees</span>
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
                      <span>Camera fees at parks</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= BEST TIME TO VISIT ================= */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-6">Best Time to Visit</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Plan your trip during the best seasons for optimal experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-orange-100 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-orange-800 mb-4">March to June</h3>
              <p className="text-gray-700 leading-relaxed">
                Spring and early summer offer clear mountain views and pleasant weather. 
                Perfect for Neora Valley exploration and wildlife spotting. 
                Temperature ranges from 10°C to 20°C.
              </p>
            </div>

            <div className="bg-green-100 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-green-800 mb-4">September to December</h3>
              <p className="text-gray-700 leading-relaxed">
                Autumn provides crystal clear views and comfortable weather. 
                Ideal for monastery visits and nature photography. 
                Temperature ranges from 5°C to 15°C.
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
              Essential information for a memorable Lava experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mountain className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Altitude Preparation</h4>
                  <p className="text-gray-600">
                    Lava is at 7,200 ft - moderate altitude. Take it easy on first day and stay hydrated.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Camera className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Photography</h4>
                  <p className="text-gray-600">
                    Early morning offers best mountain views. Carry extra batteries for cold weather.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Utensils className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Local Cuisine</h4>
                  <p className="text-gray-600">
                    Try traditional Tibetan and local Nepali dishes. Organic vegetables and local specialties.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Cultural Respect</h4>
                  <p className="text-gray-600">
                    Respect monastery customs and traditions. Dress modestly when visiting religious sites.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-6">Key Attractions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the spiritual and natural wonders of Lava
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <Image
                src="/Lava.jpg"
                alt="Lava Monastery"
                width={400}
                height={300}
                className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Lava Monastery</h3>
                <p className="text-gray-600">
                  Ancient Buddhist monastery with rich history and spiritual significance
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <Image
                src="/Neora.jpg"
                alt="Neora Valley View"
                width={400}
                height={300}
                className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Neora Valley View</h3>
                <p className="text-gray-600">
                  Gateway to pristine Neora Valley National Park with breathtaking landscapes
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <Image
                src="/Tiffin.jpeg"
                alt="Tiffin Dara"
                width={400}
                height={300}
                className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Tiffin Dara</h3>
                <p className="text-gray-600">
                  Scenic viewpoint offering spectacular Himalayan sunrise views
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PACKAGE PRICING ================= */}
      <PackagePricing 
        title="Lava Tour Packages"
        subtitle="Gateway to Neora Valley Adventure"
      />

      {/* ================= CONTACT CTA ================= */}
      <ContactCTA />

    </main>
  )
}
