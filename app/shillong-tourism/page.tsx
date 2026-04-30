"use client"

import Image from 'next/image'
import { MapPin, Calendar, Users, Star, Clock, Camera, Sun, Home, IndianRupee, Award, Compass, Utensils, Building, Trees, Ship, Sparkles, Train, ShoppingBag, Book, Mountain, Waves, Fish, Bird, Tent, Flame, PartyPopper, Heart, Sprout, Coffee, Leaf, TreePine, Stethoscope, HeartPulse, Shield, Globe, Phone, Mail, CheckCircle, AlertCircle, Activity, Brain, Bone, Eye, User, Bed, Wifi, Car, Utensils as UtensilsIcon, Wind, Building as Temple, Waves as WavesIcon, Compass as CompassIcon, Trees as TreesIcon, Camera as CameraIcon, Ship as ShipIcon, Snowflake } from 'lucide-react'
import PackagePricing from '@/components/PackagePricing'
import ContactCTA from '@/components/ContactCTA'

export default function ShillongTourismPage() {
  return (
    <main className="text-gray-800">

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1576096424-5f6e4e1a5?w=1920&h=1080&fit=crop"
            alt="Beautiful Shillong city with mountains and temples"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-green-900/80 via-emerald-800/60 to-green-900/80"></div>
        </div>

        <div className="relative h-full flex items-center justify-center text-white px-6">
          <div className="max-w-4xl">
            <div className="flex items-center justify-center gap-2 mb-4">
              <TreesIcon className="w-6 h-6 text-yellow-400" />
              <span className="text-yellow-400 font-semibold tracking-wide">SHILLONG TOURISM</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Gateway to North-East
              <span className="block text-3xl md:text-5xl mt-2 text-green-300">
                Guwahati • Kaziranga • Cherrapunjee • Kamakhya Temple
              </span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Experience the "Scotland of East" with special tailor-made 
              combination packages designed on request
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="bg-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-yellow-400 transition transform hover:scale-105">
                Explore Shillong
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-green-800 transition transform hover:scale-105">
                Book Now
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm">Discover Gateway to North-East</span>
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SHILLONG MAIN PACKAGE ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Shillong Circuit Package</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Guwahati - Kaziranga Forest - 3N/7D
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
                      <h3 className="text-xl font-bold">Day 1: Arrival in Shillong</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Arrival at Guwahati Railway Station or Airport and transfer to Hotel. 
                      Check-in and relax for a while. Lunch break. 
                      Rest of the day at leisure to explore the local market area. 
                      Evening free at your own. 
                      Dinner & Overnight stay at Hotel/Resort in Shillong.
                    </p>
                  </div>

                  {/* Day 2 */}
                  <div className="border-l-4 border-green-500 pl-6">
                    <div className="flex items-center gap-3 mb-2">
                      <Calendar className="w-5 h-5 text-green-600" />
                      <h3 className="text-xl font-bold">Day 2: Shillong Exploration</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      After breakfast, start your day tour of Guwahati. 
                      Visit Kalakshetra, Balaji Temple, Ward's Lake, Don Bosco Museum, Golf Course, Cathedral Church, and State Museum. 
                      Lunch en-route. Return in evening. 
                      Free to explore the local market area. 
                      Dinner & Overnight stay at Hotel/Resort in Shillong.
                    </p>
                  </div>

                  {/* Day 3 */}
                  <div className="border-l-4 border-green-500 pl-6">
                    <div className="flex items-center gap-3 mb-2">
                      <Calendar className="w-5 h-5 text-green-600" />
                      <h3 className="text-xl font-bold">Day 3: Kamakhya Temple Visit</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      After breakfast, proceed to visit Kamakhya Temple, which is one of the important and famous Shakti Pith Temple in India before boarding train or flight for your return journey. 
                      Visit local villages and explore the area. 
                      Return in evening. 
                      Dinner & Overnight stay at Hotel/Resort in Shillong.
                    </p>
                  </div>

                  {/* Day 4 */}
                  <div className="border-l-4 border-green-500 pl-6">
                    <div className="flex items-center gap-3 mb-2">
                      <Calendar className="w-5 h-5 text-green-600" />
                      <h3 className="text-xl font-bold">Day 4: Departure</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      After breakfast, check-out from Hotel. 
                      Visit some local area if time permits. 
                      Lunch en-route. 
                      Then leave to drop-off at Guwahati Railway Station or Airport for your onward journey. 
                      Tour ends...
                    </p>
                  </div>

                  <div className="bg-green-100 rounded-xl p-6 mt-8">
                    <h4 className="font-bold text-green-800 mb-3">Package Highlights</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span className="text-gray-700">Gateway to North-East</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span className="text-gray-700">Kalakshetra Temple</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span className="text-gray-700">Balaji Temple & Ward's Lake</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span className="text-gray-700">Don Bosco Museum & Golf Course</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= KAZIRANGA FOREST ADD-ON ================= */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Kaziranga Forest Add-on</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Elephant Safari & Wildlife Adventure
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
                      <h3 className="text-xl font-bold">Day 1: Elephant Safari</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Get up early for elephant safari into the forest. 
                      Our representative will take you to the elephant riding point by jeeps. 
                      Here we will be carried through the tall grass. 
                      Meanwhile, morning mists will slowly lift leading to an experience that one cannot forget easily. 
                      The elephant safari is the best mean for wildlife viewing as wild animals are not afraid of the elephants and it is possible to observe them from very closely. 
                      Return to the resort for breakfast. 
                      After lunch, we will go for our second jeep safari of the day, this time we will visit the western zone of the national park for wildlife viewing in the central zone. 
                      Later return to the resort for unwinding yourself and having lunch. 
                      After lunch we will go on our second jeep safari of the day, this time we will visit the western zone of the national park for wildlife viewing in the central zone. 
                      Return to the resort for unwinding yourself and having lunch. 
                      Dinner & Overnight stay at Hotel/Resort in Shillong.
                    </p>
                  </div>

                  {/* Day 2 */}
                  <div className="border-l-4 border-blue-500 pl-6">
                    <div className="flex items-center gap-3 mb-2">
                      <Calendar className="w-5 h-5 text-blue-600" />
                      <h3 className="text-xl font-bold">Day 2: Forest Exploration</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      After breakfast, we will go for jeep safari in the national park for wildlife viewing in the central zone. 
                      One can also spend some time at the Eco Park where we will be carried through the tall grass. 
                      Meanwhile, morning mists will slowly lift leading to an experience that one cannot forget easily. 
                      Return to the resort for breakfast. 
                      After lunch, we will go for our second jeep safari of the day, this time we will visit the western zone of the national park for wildlife viewing in the central zone. 
                      Return to the resort for unwinding yourself and having lunch. 
                      Dinner & Overnight stay at Hotel/Resort in Shillong.
                    </p>
                  </div>

                  {/* Day 3 */}
                  <div className="border-l-4 border-blue-500 pl-6">
                    <div className="flex items-center gap-3 mb-2">
                      <Calendar className="w-5 h-5 text-blue-600" />
                      <h3 className="text-xl font-bold">Day 3: Departure</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      After breakfast, check-out from Hotel. 
                      Visit some local area if time permits. 
                      Lunch en-route. 
                      Then leave to drop-off at Guwahati Railway Station or Airport for your onward journey. 
                      Tour ends...
                    </p>
                  </div>

                  <div className="bg-blue-100 rounded-xl p-6 mt-8">
                    <h4 className="font-bold text-blue-800 mb-3">Forest Safari Highlights</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-600" />
                        <span className="text-gray-700">Elephant Riding Experience</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-600" />
                        <span className="text-gray-700">Wildlife Viewing</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-600" />
                        <span className="text-gray-700">Central & Western Zone Safari</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SHILLONG HIGHLIGHTS ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Shillong Highlights</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key attractions and experiences in the gateway to North-East
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 text-center hover:shadow-lg transition">
              <TreesIcon className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Sacred Sites</h3>
              <p className="text-sm text-gray-600">Kalakshetra Temple, Balaji Temple, Kamakhya Temple</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 text-center hover:shadow-lg transition">
              <Building className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Colonial Heritage</h3>
              <p className="text-sm text-gray-600">Don Bosco Museum, Golf Course, Cathedral Church</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 text-center hover:shadow-lg transition">
              <CameraIcon className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Natural Beauty</h3>
              <p className="text-sm text-gray-600">Ward's Lake, Pine forests, Mountain views</p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 text-center hover:shadow-lg transition">
              <Mountain className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Adventure Activities</h3>
              <p className="text-sm text-gray-600">Trekking, River rafting, Golf</p>
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
                <h3 className="font-bold text-gray-800 mb-2">Best Time to Visit</h3>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• March to June: Pleasant weather, blooming flowers</li>
                  <li>• October to February: Clear mountain views</li>
                  <li>• November to January: Winter sports and snow activities</li>
                  <li>• Avoid monsoon (July-September) for clear views</li>
                </ul>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Calendar className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-800 mb-2">Travel Tips</h3>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Book accommodations in advance during peak season</li>
                  <li>• Carry light clothing for mountain areas</li>
                  <li>• Respect local customs and traditions</li>
                  <li>• Stay hydrated during outdoor activities</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

     <PackagePricing 
           title="Shillong Tour Packages"
           subtitle="Choose your perfect Northeast adventure duration"
         />
   
          
       <ContactCTA />
    </main>
  )
}
