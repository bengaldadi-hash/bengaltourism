"use client"

import Image from 'next/image'
import { MapPin, Calendar, Users, Star, Clock, Camera, Sun, Home, IndianRupee, Award, Compass, Utensils, Building, Trees, Ship, Sparkles, Train, ShoppingBag, Book, Mountain, Waves, Fish, Bird, Tent, Flame, PartyPopper, Heart, Sprout, Coffee, Leaf, TreePine, Stethoscope, HeartPulse, Shield, Globe, Phone, Mail, CheckCircle, AlertCircle, Activity, Brain, Bone, Eye, User, Bed, Wifi, Car, Utensils as UtensilsIcon, Wind, Building as Temple, Waves as WavesIcon, Compass as CompassIcon, Trees as TreesIcon, Camera as CameraIcon } from 'lucide-react'
import ContactCTA from '@/components/ContactCTA'
import PackagePricing from '@/components/PackagePricing'

export default function SilkRouteTourismPage() {
  return (
    <main className="text-gray-800">

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://plus.unsplash.com/premium_photo-1671639169260-18cec0fa6a51?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8U2lsayUyMFJvdXRlfGVufDB8fDB8fHww"
            alt="Silk Route mountain trail with ancient trade path through Himalayas"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-green-900/80 via-emerald-800/60 to-green-900/80"></div>
        </div>

        <div className="relative h-full flex items-center justify-center text-white px-6">
          <div className="max-w-4xl">
            <div className="flex items-center justify-center gap-2 mb-4">
              <TreesIcon className="w-6 h-6 text-yellow-400" />
              <span className="text-yellow-400 font-semibold tracking-wide">SILK ROUTE TOURISM</span>
            </div>
            
            <h1 className="text-5xl text-center md:text-7xl font-bold mb-6 leading-tight">
              Explore the Ancient Silk Route
              <span className="block text-3xl md:text-5xl mt-2 text-green-300">
                Sillery • Zuluk • Lingtham • Aritar • Rishi Khola • Nathang Valley
              </span>
            </h1>

            <p className="text-xl text-center md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Journey through the historic trade route with special tailor-made 
              combination packages designed on request
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="bg-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-yellow-400 transition transform hover:scale-105">
                Explore Silk Route
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-green-800 transition transform hover:scale-105">
                Book Now
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm">Discover Ancient Trade Route</span>
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SILK ROUTE MAIN PACKAGE ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Silk Route Adventure</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sillery - Zuluk - Aritar - Reshikhola - 4N/5D
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 shadow-xl">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="space-y-6">
                  {/* Day 1 */}
                  <div className="border-l-4 border-green-500 pl-6">
                    <div className="flex items-center gap-3 mb-2">
                      <Calendar className="w-5 h-5 text-green-600" />
                      <h3 className="text-xl font-bold">Day 1: Arrival at Sillery Gaon</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Our representative will receive you at New Jalpaiguri Railway Station (NJP) / Bagdogra Airport (09.00 am). 
                      He will assist you to proceed for Sillery Gaon. Lunch en-route. 
                      Check-in to Hotel/Homestay. Post lunch, rest. 
                      Evening free for photography and idle time. Back to resort. 
                      Dinner & Night stay in Hotel/Resort/Home Stay at Sillery Gaon.
                    </p>
                  </div>

                  {/* Day 2 */}
                  <div className="border-l-4 border-green-500 pl-6">
                    <div className="flex items-center gap-3 mb-2">
                      <Calendar className="w-5 h-5 text-green-600" />
                      <h3 className="text-xl font-bold">Day 2: Proceed to Zuluk</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Early morning breakfast. Check Out to visit Rongli (for inner line permit), 
                      Visit Lingtam, Kuekhola Falls. Lunch en-route. 
                      Dinner & Night stay in Hotel/Resort/Home Stay at Zuluk.
                    </p>
                  </div>

                  {/* Day 3 */}
                  <div className="border-l-4 border-green-500 pl-6">
                    <div className="flex items-center gap-3 mb-2">
                      <Calendar className="w-5 h-5 text-green-600" />
                      <h3 className="text-xl font-bold">Day 3: Silk Route Trail Exploration</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      After early breakfast, start the journey of the famed Silk Route Trail. 
                      Enjoy the beauty of Thambi View Point, Lunghthung, Laxmi Chawk, Nathang Valley, 
                      Tukla Valley, Kalapokhri, Jeelep-La-Pass & Elephant Lake at Kupup. 
                      Lunch en-route. Back to Hotel in evening. 
                      Dinner & Night stay in Hotel/Resort/Home Stay at Zuluk.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="space-y-6">
                  {/* Day 4 */}
                  <div className="border-l-4 border-green-500 pl-6">
                    <div className="flex items-center gap-3 mb-2">
                      <Calendar className="w-5 h-5 text-green-600" />
                      <h3 className="text-xl font-bold">Day 4: Aritar & Reshikhola</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      After breakfast, proceed to visit Aritar. 
                      See Lampokhri Lake, the highest boating lake in Sikkim. 
                      Lunch en-route. 
                      Dinner & Overnight at Hotel/Resort/Home Stay at Aritar/Reshikhola.
                    </p>
                  </div>

                  {/* Day 5 */}
                  <div className="border-l-4 border-green-500 pl-6">
                    <div className="flex items-center gap-3 mb-2">
                      <Calendar className="w-5 h-5 text-green-600" />
                      <h3 className="text-xl font-bold">Day 5: Departure</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Early morning breakfast. Check-out around 08.00 AM & transfer to NJP Station / Bagdogra Airport. 
                      Next one has to drive to NJP / Bagdogra Airport with stoppage at Teesta River & 
                      Coronation Bridge / Sevoke Kali Mandir. 
                      Lunch en-route (your cost). 
                      Reach Bagdogra Airport / NJP (as per your departure time). 
                      Tour ends...
                    </p>
                  </div>

                  <div className="bg-green-100 rounded-xl p-6 mt-8">
                    <h4 className="font-bold text-green-800 mb-3">Package Highlights</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span className="text-gray-700">Historic Silk Route Trail</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span className="text-gray-700">Thambi View Point & Nathang Valley</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span className="text-gray-700">Lampokhri Lake - Highest boating lake</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span className="text-gray-700">Jeelep-La-Pass & Elephant Lake</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= NORTH SIKKIM ADD-ON ================= */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">North Sikkim Add-on</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Lachen - Lachung - Gurudongmar - 2N/3D
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="space-y-6">
                  {/* Day 1 */}
                  <div className="border-l-4 border-blue-500 pl-6">
                    <div className="flex items-center gap-3 mb-2">
                      <Calendar className="w-5 h-5 text-blue-600" />
                      <h3 className="text-xl font-bold">Day 1: Transfer to Lachen</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      After breakfast, pick-up from Hotel at Gangtok (09.00am). 
                      Drive 135 km, 5 – 6 hours drive. Chungthang is 96 kilometers from Gangtok. 
                      Lunch at Chungthang. Lachen is 35 kilometers from Chungthang. 
                      Visit Seven Sister Falls & Naga Waterfalls. 
                      Check into a hotel. Welcome Tea. 
                      Evening free to stroll and visit Lepcha Village. 
                      Dinner & Overnight stay in Hotel/Resort at Lachen.
                    </p>
                  </div>

                  {/* Day 2 */}
                  <div className="border-l-4 border-blue-500 pl-6">
                    <div className="flex items-center gap-3 mb-2">
                      <Calendar className="w-5 h-5 text-blue-600" />
                      <h3 className="text-xl font-bold">Day 2: Gurudongmar Lake & Lachung</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      After early breakfast, Visit to Gurudongmar Lake 55 km, 2½ to 3½ hour's drive. 
                      A valley at an altitude of 11,800 feet through which Lachen Chu flows, 
                      generally covered with snow from December to April or even more - known as Holy/Sacred Lake. 
                      Next drive through cold desert till Tibet/China back to Resort for Lunch. 
                      After lunch drive to Lachung. 
                      The region is fully covered with Rhododendron forest with Chopta Valley and Thangu as other places of interest. 
                      Nearly 50 km and two hours' drive. 
                      Check into hotel at Lachung. 
                      Evening free to visit Lachung Monastery. 
                      Dinner & Overnight stay in Hotel/Resort at Lachung.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="space-y-6">
                  {/* Day 3 */}
                  <div className="border-l-4 border-blue-500 pl-6">
                    <div className="flex items-center gap-3 mb-2">
                      <Calendar className="w-5 h-5 text-blue-600" />
                      <h3 className="text-xl font-bold">Day 3: Yumthang & Transfer to Gangtok</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      After early morning breakfast, drive towards Yumthang situated at an elevation of nearly 11,800 feet, 
                      30 km and 1½ hour's drive. 
                      On the way back one can visit the famous hot spring which is known for its curative properties of skin diseases. 
                      Yumthang is a valley near river Lachung Chu surrounded by mountains where the tree line ends. 
                      In spring the Valley erupts in riots of colours as Primulae, Rhododendrons and many other Alpine flowers in full bloom 
                      along with snow covered valley except in autumn. 
                      During winter Yumthang is somber with snow all around and snow clad mountains adding to the beauty. 
                      <strong>Yumesamdong (Zero Point) is optional tour</strong> 
                      (with extra US $100/Rs.4000/- per vehicle with 4-6 PAX has to be paid for permit & to be paid at spot). 
                      Return to Lachung for lunch. 
                      After lunch drive to Gangtok 130 kilometers, 4–5 hours drive. 
                      Drop at Hotel/Resort at Gangtok. 
                      Tour ends...
                    </p>
                  </div>

                  <div className="bg-blue-100 rounded-xl p-6 mt-8">
                    <h4 className="font-bold text-blue-800 mb-3">North Sikkim Highlights</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-600" />
                        <span className="text-gray-700">Gurudongmar Lake (11,800 feet)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-600" />
                        <span className="text-gray-700">Yumthang Valley (Zero Point)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-600" />
                        <span className="text-gray-700">Cold desert till Tibet border</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SILK ROUTE HIGHLIGHTS ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Silk Route Highlights</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key attractions along the ancient trade route
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 text-center hover:shadow-lg transition">
              <Mountain className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2">View Points</h3>
              <p className="text-sm text-gray-600">Thambi View Point, Lunghthung, Nathang Valley</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 text-center hover:shadow-lg transition">
              <WavesIcon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Sacred Lakes</h3>
              <p className="text-sm text-gray-600">Lampokhri Lake, Elephant Lake at Kupup</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 text-center hover:shadow-lg transition">
              <TreesIcon className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Mountain Passes</h3>
              <p className="text-sm text-gray-600">Jeelep-La-Pass, Inner Line Permit at Rongli</p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 text-center hover:shadow-lg transition">
              <CameraIcon className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Photography Paradise</h3>
              <p className="text-sm text-gray-600">Sillery Gaon, Zuluk, Aritar landscapes</p>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-6 text-center hover:shadow-lg transition">
              <Building className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Cultural Experience</h3>
              <p className="text-sm text-gray-600">Lepcha Village, Local Homestays</p>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 text-center hover:shadow-lg transition">
              <Bird className="w-12 h-12 text-teal-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Natural Beauty</h3>
              <p className="text-sm text-gray-600">Rhododendrons, Alpine flowers, Snow valleys</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= IMPORTANT INFORMATION ================= */}
      <section className="py-12 bg-yellow-50 border-y border-yellow-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-800 mb-2">Permit Requirements</h3>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Inner line permit required at Rongli</li>
                  <li>• Jeelep-La-Pass accessible with additional cost</li>
                  <li>• Zero Point (Yumesamdong) - Optional with permit</li>
                  <li>• Voter ID card mandatory for all permits</li>
                </ul>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Calendar className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-800 mb-2">Best Time to Visit</h3>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• March to June: Clear views, blooming flowers</li>
                  <li>• October to December: Snow-covered landscapes</li>
                  <li>• April: Primulae and Rhododendrons in full bloom</li>
                  <li>• Avoid monsoon (July-September) for clear mountain views</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PackagePricing
        title="Silk Route Tour Packages"
        subtitle="Choose your perfect ancient trade route adventure"
      />

      <ContactCTA />

    </main>
  )
}
