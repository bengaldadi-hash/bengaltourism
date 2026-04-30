"use client"

import Image from 'next/image'
import Link from 'next/link'
import { Mountain, Train, MapPin, Utensils, Camera, Calendar, Star, Clock, Users } from 'lucide-react'
import PackagePricing from '@/components/PackagePricing'
import ContactCTA from '@/components/ContactCTA'

export default function KalimpongPage() {
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
              <Mountain className="w-6 h-6 text-yellow-400" />
              <span className="text-yellow-400 font-semibold tracking-wide">Land of Eternal Spring</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6 relative">
              Kalimpong
              <span className="block text-3xl md:text-5xl mt-2 text-orange-300">
                With Rishyap - Neora Valley Extension
              </span>
            </h1>

            <p className="text-gray-600 text-lg mb-10 max-w-md">
              At 4000 ft above sea level, nestled with sloping tea gardens and spectacular views of Mount Everest,
              Kalimpong offers breathtaking beauty with the perfect blend of nature and culture.
            </p>

            <div className="flex flex-wrap items-center gap-6">
Book Your Journey              <a href="/book-tour" className="bg-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-yellow-400 transition transform hover:scale-105">
                Book Your Journey
              </a>

              <button className="border-2 border-yellow-600 text-yellow-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-600 hover:text-white transition transform hover:scale-105">
                Explore Attractions
              </button>
            </div>
          </div>

          {/* ---------- RIGHT IMAGE ---------- */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-yellow-200/30 to-orange-200/30 rounded-3xl transform rotate-3"></div>
            <Image
              src="/kurseong.jpeg"
              alt="Kalimpong Tea Gardens"
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
              <p className="text-gray-600">3N/4D</p>
            </div>
            <div className="text-center">
              <MapPin className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-2">Location</h3>
              <p className="text-gray-600">Kalimpong, Rishyap & Neora Valley</p>
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
              Experience the perfect blend of Himalayan beauty, tea gardens, and pristine valleys
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="space-y-6">
                {/* Day 1 */}
                <div className="border-l-4 border-orange-500 pl-6">
                  <div className="flex items-center gap-3 mb-2">
                    <Calendar className="w-5 h-5 text-orange-600" />
                    <h3 className="text-xl font-bold">Day 1: Arrival in Kalimpong</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Start of tour: Our representative will be there to receive Guest at New Jalpaiguri Railway Station (NJP) / Bagdogra Airport (IXB) / Tenzing Norgay Bus Stand (Junction). 
                    He will be assisting you for transfer to Kalimpong. Nearly 105 km 3 ½ - 4 hrs drive. 
                    At a height of 4000 ft lies land of breath taking beauty, sloping tea gardens with spectacular views of Mount Everest. 
                    Evening free to roam around or local shopping centre. 
                    Breakfast & Dinner included. Dinner & Overnight stay at Hotel/Resort at Kalimpong.
                  </p>
                </div>

                {/* Day 2 */}
                <div className="border-l-4 border-orange-500 pl-6">
                  <div className="flex items-center gap-3 mb-2">
                    <Calendar className="w-5 h-5 text-orange-600" />
                    <h3 className="text-xl font-bold">Day 2: Towards Rishyap & Neora Valley</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Early morning breakfast, check-out & proceed towards Rishyap & Neora Valley. 
                    En-route probable local sightseeing of Durpin Monastery, Army Golf Course, Hanuman Tok, Morgan House, etc. 
                    Check-in Hotel/Farmhouse/Homestay. Lunch. 
                    Evening free to stroll around local bazaar for shopping of handicrafts and relics. 
                    Breakfast & Dinner included. Overnight stay at Hotel/Farmhouse/Homestay at Rishyap / Neora Valley.
                  </p>
                </div>

                {/* Day 3 */}
                <div className="border-l-4 border-orange-500 pl-6">
                  <div className="flex items-center gap-3 mb-2">
                    <Calendar className="w-5 h-5 text-orange-600" />
                    <h3 className="text-xl font-bold">Day 3: Lava & Lolegao (or) Rishyap & Neora Valley</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Early breakfast and start for a whole day tour excursion to visit either Lava & Lolegao. 
                    All local places of interest Like Tiffin Dara, Changey Falls, Ramdhura, etc. can be explored. 
                    Back to Hotel/Resort/Homestay for Lunch. 
                    Back in evening. 
                    Breakfast & Dinner included. Dinner & Overnight stay at Hotel/Farmhouse/Homestay at Rishyap / Neora Valley.
                  </p>
                </div>

                {/* Day 4 */}
                <div className="border-l-4 border-orange-500 pl-6">
                  <div className="flex items-center gap-3 mb-2">
                    <Calendar className="w-5 h-5 text-orange-600" />
                    <h3 className="text-xl font-bold">Day 4: Departure via Mirik</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    After breakfast, Check-out (10.00 am) from Hotel. 
                    On return journey, visit Mirik, Gopal Dhara View Point & Pashupati Market in Nepal. 
                    Lunch at Mirik. 
                    Then proceed towards Bagdogra Airport (IXB) / New Jalpaiguri Railway Station (NJP), a 3-4 hrs drive in AC vehicle & drop at your point before (06.00pm) for your Forwarding Journey. 
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
                      <span className="text-gray-700">Spectacular views of Mount Everest</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Camera className="w-4 h-4 text-orange-600" />
                      <span className="text-gray-700">Tea garden exploration</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-orange-600" />
                      <span className="text-gray-700">Rishyap & Neora Valley excursion</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Train className="w-4 h-4 text-orange-600" />
                      <span className="text-gray-700">Lava & Lolegao day trip</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Utensils className="w-4 h-4 text-orange-600" />
                      <span className="text-gray-700">Local handicraft shopping</span>
                    </div>
                  </div>
                </div>

                {/* Inclusions */}
                <div className="bg-green-50 rounded-xl p-6">
                  <h4 className="font-bold text-green-800 mb-3">What's Included</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">✓</span>
                      <span>Accommodation in Hotels/Farmhouses/Homestays</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">✓</span>
                      <span>Daily Breakfast & Dinner</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">✓</span>
                      <span>All transfers by AC vehicle</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">✓</span>
                      <span>Sightseeing as per itinerary</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">✓</span>
                      <span>All toll taxes and parking</span>
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
                      <span>Monument entrance fees</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ATTRACTIONS ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-6">Key Attractions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the hidden gems of Kalimpong and surrounding valleys
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <Image
                src="/durpin.jpeg"
                alt="Durpin Monastery"
                width={400}
                height={300}
                className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Durpin Monastery</h3>
                <p className="text-gray-600">
                  Sacred Buddhist monastery offering panoramic views of surrounding mountains and valleys
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <Image
                src="/Neora.jpg"
                alt="Neora Valley"
                width={400}
                height={300}
                className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Neora Valley</h3>
                <p className="text-gray-600">
                  Pristine valley with rich biodiversity and breathtaking natural landscapes
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <Image
                src="/Lava.jpg"
                alt="Lava & Lolegao"
                width={400}
                height={300}
                className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Lava & Lolegao</h3>
                <p className="text-gray-600">
                  Picturesque villages with ancient monasteries and stunning mountain views
                </p>
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
            <div className="bg-green-100 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-green-800 mb-4">March to June</h3>
              <p className="text-gray-700 leading-relaxed">
                Spring and early summer offer clear skies, pleasant temperatures, and blooming rhododendrons. 
                Perfect for sightseeing and outdoor activities. Temperature ranges from 10°C to 20°C.
              </p>
            </div>

            <div className="bg-orange-100 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-orange-800 mb-4">September to December</h3>
              <p className="text-gray-700 leading-relaxed">
                Autumn provides crystal clear mountain views and comfortable weather. 
                Ideal for photography and exploring the valleys. Temperature ranges from 5°C to 15°C.
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
              Essential information for a memorable Kalimpong experience
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
                    Kalimpong is at 4000 ft - moderate altitude. Take it easy on first day and stay hydrated.
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
                    Carry extra batteries and memory cards. Mountain views are spectacular in early morning light.
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
                    Try local Tibetan and Nepali dishes. Momos, thukpa, and traditional tea are must-tries.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Shopping</h4>
                  <p className="text-gray-600">
                    Buy local handicrafts, textiles, and tea. Rishyap is famous for traditional artifacts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PACKAGE PRICING ================= */}
      <PackagePricing 
        title="Kalimpong with Rishyap - Neora Valley"
        subtitle="3N/4D Himalayan Paradise Experience"
      />

      {/* ================= CONTACT CTA ================= */}
      <ContactCTA />

    </main>
  )
}
