"use client"

import Image from 'next/image'
import { MapPin, Calendar, Users, Star, Clock, Camera, Sun, Home, IndianRupee, Award, Compass, Utensils, Building, Trees, Ship, Sparkles, Train, ShoppingBag, Book, Mountain, Waves, Fish, Bird, Tent, Flame, PartyPopper, Heart, Sprout, Coffee, Leaf, TreePine, Stethoscope, HeartPulse, Shield, Globe, Phone, Mail, CheckCircle, AlertCircle, Activity, Brain, Bone, Eye, User, Bed, Wifi, Car, Utensils as UtensilsIcon, Wind, Building as Temple, Waves as WavesIcon, Compass as CompassIcon, Trees as TreesIcon, Camera as CameraIcon, Ship as ShipIcon, Droplets, Church, Trees as TreeIcon, Snowflake, Binoculars } from 'lucide-react'
import PackagePricing from '@/components/PackagePricing'
import ContactCTA from '@/components/ContactCTA'

export default function DehradunNainitalTourismPage() {
  return (
    <main className="text-gray-800">

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/Nainital.jpeg"
            alt="Beautiful Nainital lake with mountains and boats"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 via-cyan-800/60 to-blue-900/80"></div>
        </div>

        <div className="relative h-full flex items-center justify-center text-white px-6">
          <div className="max-w-4xl">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Mountain className="w-6 h-6 text-yellow-400" />
              <span className="text-yellow-400 font-semibold tracking-wide">UTTARAKHAND HILL STATIONS</span>
            </div>
            
            <h1 className="text-5xl text-center md:text-7xl font-bold mb-6 leading-tight">
              Dehradun - Nainital
              <span className="block text-3xl md:text-5xl mt-2 text-blue-300">
                Queen of Hills • Lake City • Doon Valley
              </span>
            </h1>

            <p className="text-xl text-center md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Experience the perfect blend of natural beauty, colonial heritage, and pleasant weather 
              with special tailor-made packages for hill station lovers
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="bg-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-yellow-400 transition transform hover:scale-105">
                Explore Hill Stations
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-800 transition transform hover:scale-105">
                Book Now
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm">Discover Mountain Paradise</span>
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= DEHRADUN-NAINITAL CIRCUIT PACKAGE ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Dehradun - Nainital Hill Circuit</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Robber's Cave • Sahastradhara • Naini Lake • Snow View Point • Mall Road
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 shadow-xl">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="space-y-6">
                  {/* Day 1 */}
                  <div className="border-l-4 border-blue-500 pl-6">
                    <div className="flex items-center gap-3 mb-2">
                      <Calendar className="w-5 h-5 text-blue-600" />
                      <h3 className="text-xl font-bold">Day 1: Arrival in Dehradun</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      On arrival at Dehradun Railway Station / Jolly Grant Airport, you will be transferred to Hotel. 
                      Check in and relax for a while. Lunch break. 
                      Evening visit to Robber's Cave (Gucchupani) for a unique experience. 
                      Explore local markets and have dinner. 
                      Breakfast & Dinner included. Overnight at Hotel in Dehradun.
                    </p>
                  </div>

                  {/* Day 2 */}
                  <div className="border-l-4 border-blue-500 pl-6">
                    <div className="flex items-center gap-3 mb-2">
                      <Calendar className="w-5 h-5 text-blue-600" />
                      <h3 className="text-xl font-bold">Day 2: Dehradun Sightseeing</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      After breakfast, visit Sahastradhara for its therapeutic sulfur springs. 
                      Visit Forest Research Institute and Tapkeshwar Temple. 
                      Lunch at local restaurant. 
                      Evening leisure at Paltan Bazaar shopping. 
                      Breakfast & Dinner included. Overnight at Hotel in Dehradun.
                    </p>
                  </div>

                  {/* Day 3 */}
                  <div className="border-l-4 border-blue-500 pl-6">
                    <div className="flex items-center gap-3 mb-2">
                      <Calendar className="w-5 h-5 text-blue-600" />
                      <h3 className="text-xl font-bold">Day 3: Transfer to Nainital</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      After breakfast, check-out and transfer to Nainital (280 km, 7-8 hours journey). 
                      En-route visit Jim Corbett Museum at Kaladhungi. 
                      Check in to hotel and relax. 
                      Evening boat ride at Naini Lake. 
                      Lunch en-route. 
                      Breakfast & Dinner included. Overnight at Hotel in Nainital.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="space-y-6">
                  {/* Day 4 */}
                  <div className="border-l-4 border-blue-500 pl-6">
                    <div className="flex items-center gap-3 mb-2">
                      <Calendar className="w-5 h-5 text-blue-600" />
                      <h3 className="text-xl font-bold">Day 4: Nainital Local Sightseeing</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      After breakfast, visit Naina Devi Temple and Snow View Point via cable car. 
                      Explore Tiffin Top and Land's End for panoramic views. 
                      Lunch at lakeside restaurant. 
                      Evening shopping at Mall Road and Boat Club. 
                      Breakfast & Dinner included. Overnight at Hotel in Nainital.
                    </p>
                  </div>

                  {/* Day 5 */}
                  <div className="border-l-4 border-blue-500 pl-6">
                    <div className="flex items-center gap-3 mb-2">
                      <Calendar className="w-5 h-5 text-blue-600" />
                      <h3 className="text-xl font-bold">Day 5: Lake Tour & Departure</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      After breakfast, enjoy a full-day lake tour covering Bhimtal, Naukuchiatal and Sattal. 
                      Lunch at lakeside restaurant. 
                      Evening return to Nainital for last-minute shopping. 
                      Breakfast & Dinner included. Overnight at Hotel in Nainital.
                    </p>
                  </div>

                  {/* Day 6 */}
                  <div className="border-l-4 border-blue-500 pl-6">
                    <div className="flex items-center gap-3 mb-2">
                      <Calendar className="w-5 h-5 text-blue-600" />
                      <h3 className="text-xl font-bold">Day 6: Departure</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      After breakfast, check-out & transfer to Kathgodam Railway Station / Pantnagar Airport 
                      for your return journey on your departure time. 
                      Breakfast included. Tour ends...
                    </p>
                  </div>

                  <div className="bg-blue-100 rounded-xl p-6 mt-8">
                    <h4 className="font-bold text-blue-800 mb-3">Package Highlights</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-600" />
                        <span className="text-gray-700">Scenic Lake Tours in Nainital</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-600" />
                        <span className="text-gray-700">Cable Car Ride to Snow View Point</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-600" />
                        <span className="text-gray-700">Therapeutic Springs at Sahastradhara</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-600" />
                        <span className="text-gray-700">Colonial Heritage Experience</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ADVENTURE & LEISURE ================= */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Adventure & Leisure Activities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Optional activities with extra cost
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center gap-4 mb-4">
                <Mountain className="w-12 h-12 text-green-600" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Trekking & Hiking</h3>
                  <p className="text-gray-600">Nature trails in Himalayan foothills</p>
                </div>
              </div>
              <div className="bg-green-100 rounded-xl p-6">
                <h4 className="font-bold text-green-800 mb-3">Available Treks</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-gray-700">Tiffin Top trek</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-gray-700">China Peak trek</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-gray-700">Robber's Cave trail</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-gray-700">Guided nature walks</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center gap-4 mb-4">
                <Binoculars className="w-12 h-12 text-blue-600" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Sightseeing Tours</h3>
                  <p className="text-gray-600">Explore local attractions</p>
                </div>
              </div>
              <div className="bg-blue-100 rounded-xl p-6">
                <h4 className="font-bold text-blue-800 mb-3">Tour Options</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    <span className="text-gray-700">Lake tours (Bhimtal, Naukuchiatal)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    <span className="text-gray-700">City sightseeing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    <span className="text-gray-700">Temple tours</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    <span className="text-gray-700">Heritage walks</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center gap-4 mb-4">
                <Camera className="w-12 h-12 text-purple-600" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Photography & Leisure</h3>
                  <p className="text-gray-600">Capture beautiful memories</p>
                </div>
              </div>
              <div className="bg-purple-100 rounded-xl p-6">
                <h4 className="font-bold text-purple-800 mb-3">Activities</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-600" />
                    <span className="text-gray-700">Sunset photography points</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-600" />
                    <span className="text-gray-700">Boating & yachting</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-600" />
                    <span className="text-gray-700">Shopping at Mall Road</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-600" />
                    <span className="text-gray-700">Cafe hopping</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= HIGHLIGHTS ATTRACTIONS ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Hill Station Highlights</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key attractions and experiences in Doon Valley & Lake District
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 text-center hover:shadow-lg transition">
              <Droplets className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Naini Lake</h3>
              <p className="text-sm text-gray-600">Heart-shaped lake with boating</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 text-center hover:shadow-lg transition">
              <Snowflake className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Snow View Point</h3>
              <p className="text-sm text-gray-600">Panoramic Himalayan views</p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 text-center hover:shadow-lg transition">
              <Mountain className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Tiffin Top</h3>
              <p className="text-sm text-gray-600">Popular picnic spot</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 text-center hover:shadow-lg transition">
              <Temple className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Naina Devi Temple</h3>
              <p className="text-sm text-gray-600">Sacred Shakti peeth</p>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-6 text-center hover:shadow-lg transition">
              <Trees className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Sahastradhara</h3>
              <p className="text-sm text-gray-600">Therapeutic sulfur springs</p>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 text-center hover:shadow-lg transition">
              <CameraIcon className="w-12 h-12 text-teal-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Robber's Cave</h3>
              <p className="text-sm text-gray-600">Natural cave formation</p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 text-center hover:shadow-lg transition">
              <Building className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2">FRI Campus</h3>
              <p className="text-sm text-gray-600">Colonial architecture</p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl p-6 text-center hover:shadow-lg transition">
              <ShoppingBag className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Mall Road</h3>
              <p className="text-sm text-gray-600">Shopping & dining hub</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= BEST TIME TO VISIT ================= */}
      <section className="py-12 bg-yellow-50 border-y border-yellow-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start gap-4">
              <Calendar className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-800 mb-2">Best Time to Visit</h3>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• March to June: Pleasant weather, perfect for sightseeing</li>
                  <li>• September to November: Clear skies, great mountain views</li>
                  <li>• December to February: Snowfall in upper reaches</li>
                  <li>• July to August: Monsoon season (avoid for travel)</li>
                </ul>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-800 mb-2">Travel Tips</h3>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Carry light woolens for summer, heavy for winter</li>
                  <li>• Book hotels in advance during peak season</li>
                  <li>• Carry comfortable walking shoes</li>
                  <li>• Keep camera for scenic photography</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PACKAGE PRICING ================= */}
      <PackagePricing 
        title="Dehradun-Nainital Tour Packages"
        subtitle="Choose your perfect hill station duration"
      />

       
    <ContactCTA />

    </main>
  )
}
