"use client"

import Image from 'next/image'
import { Waves, MapPin, Calendar, Users, Star, Clock, Camera, Sun, Home, IndianRupee, Award, Compass, Utensils, Fish, Ship, Building, Trees, Anchor, Sparkles } from 'lucide-react'
import PackagePricing from '@/components/PackagePricing'
import ContactCTA from '@/components/ContactCTA'

export default function BakkhaliPage() {
  return (
    <main className="text-gray-800">

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1505142468629-bde2f298d6aa?w=1920&h=1080&fit=crop"
            alt="Bakkhali beach with pristine white sand and blue waters"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 via-blue-800/60 to-blue-900/80"></div>
        </div>

        <div className="relative h-full flex items-center justify-center text-center text-white px-6">
          <div className="max-w-4xl">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Waves className="w-6 h-6 text-yellow-400" />
              <span className="text-yellow-400 font-semibold tracking-wide">Hidden Coastal Gems</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Bakkhali & Islands
              <span className="block text-3xl md:text-5xl mt-2 text-blue-300">
                Frazergunge • Henry's Island • Mousuni • Gangasagar
              </span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Discover the untouched coastal beauty and spiritual significance of West Bengal's 
              most serene beach destinations and sacred pilgrimage sites
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="bg-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-yellow-400 transition transform hover:scale-105">
                Book Your Island Escape
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-800 transition transform hover:scale-105">
                Explore Spiritual Tours
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm">Discover coastal spirituality</span>
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= QUICK FACTS ================= */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Waves className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">130km</h3>
              <p className="text-gray-600 text-sm">From Kolkata</p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Building className="w-10 h-10 text-orange-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Sacred</h3>
              <p className="text-gray-600 text-sm">Gangasagar Pilgrimage</p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Ship className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Island Hopping</h3>
              <p className="text-gray-600 text-sm">Boat adventures</p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Trees className="w-10 h-10 text-purple-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Eco-Tourism</h3>
              <p className="text-gray-600 text-sm">Sustainable travel</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TOUR PACKAGES ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Island Tour Packages</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Special tailor-made combination packages for coastal and spiritual experiences
            </p>
          </div>

          {/* Bakkhali Package */}
          <div className="mb-8">
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-6 rounded-t-2xl">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Bakkhali Sea Beach</h3>
                  <p className="text-blue-100">With Frazergunge & Henry's Island</p>
                  <p className="text-blue-100">2 Nights / 3 Days</p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold">₹7,000</div>
                  <div className="text-blue-100">Per Person</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white border-2 border-blue-600 border-t-0 rounded-b-2xl p-8">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 text-blue-600" />
                    <h4 className="font-bold">Day 1</h4>
                  </div>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Pick-up from Kolkata (7 AM)</li>
                    <li>• 130km drive to Bakkhali</li>
                    <li>• Breakfast en-route</li>
                    <li>• Hotel check-in & lunch</li>
                    <li>• Bishhalaxmi Temple visit</li>
                    <li>• Evening beach & shopping</li>
                    <li>• Breakfast & Dinner included</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 text-blue-600" />
                    <h4 className="font-bold">Day 2</h4>
                  </div>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Henry's Island & Frazergunge</li>
                    <li>• Lunch en-route</li>
                    <li>• Boat to Jambu Deep</li>
                    <li>• Crocodile Breeding Centre</li>
                    <li>• Return to Bakkhali</li>
                    <li>• Breakfast & Dinner included</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 text-blue-600" />
                    <h4 className="font-bold">Day 3</h4>
                  </div>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Sunrise beach visit</li>
                    <li>• Breakfast & check-out (10 AM)</li>
                    <li>• Optional: Gangasagar tour</li>
                    <li>• Extra: ₹1500 per person</li>
                    <li>• Return to Kolkata</li>
                    <li>• Breakfast & Dinner included</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Other Packages Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-6 border-2 border-green-200">
              <h3 className="text-xl font-bold mb-3">Mousuni Island</h3>
              <p className="text-gray-600 mb-4">Offbeat island adventure</p>
              <p className="text-2xl font-bold text-green-600 mb-2">₹6,500</p>
              <p className="text-sm text-gray-500 mb-4">2 Nights / 3 Days</p>
              <button className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition">
                Book Now
              </button>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-6 border-2 border-orange-200">
              <h3 className="text-xl font-bold mb-3">Gangasagar</h3>
              <p className="text-gray-600 mb-4">Sacred pilgrimage tour</p>
              <p className="text-2xl font-bold text-orange-600 mb-2">₹8,000</p>
              <p className="text-sm text-gray-500 mb-4">2 Nights / 3 Days</p>
              <button className="w-full bg-orange-600 text-white py-2 rounded-lg font-semibold hover:bg-orange-700 transition">
                Book Now
              </button>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border-2 border-purple-200">
              <h3 className="text-xl font-bold mb-3">Exclusive Gangasagar</h3>
              <p className="text-gray-600 mb-4">Premium spiritual experience</p>
              <p className="text-2xl font-bold text-purple-600 mb-2">₹12,000</p>
              <p className="text-sm text-gray-500 mb-4">1 Full Day Tour</p>
              <button className="w-full bg-purple-600 text-white py-2 rounded-lg font-semibold hover:bg-purple-700 transition">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= DESTINATIONS ================= */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Coastal Destinations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore the diverse island and beach destinations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition group">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                <Waves className="w-16 h-16 text-white group-hover:scale-110 transition" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Bakkhali</h3>
                <p className="text-gray-700 mb-4">Pristine beach destination with calm waters and white sand, perfect for relaxation</p>
                <div className="flex items-center gap-2 text-blue-600">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">South 24 Parganas</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition group">
              <div className="h-48 bg-gradient-to-br from-green-400 to-teal-500 flex items-center justify-center">
                <Anchor className="w-16 h-16 text-white group-hover:scale-110 transition" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Henry's Island</h3>
                <p className="text-gray-700 mb-4">Scenic island accessible by boat, offering untouched natural beauty</p>
                <div className="flex items-center gap-2 text-green-600">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Near Bakkhali</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition group">
              <div className="h-48 bg-gradient-to-br from-orange-400 to-yellow-500 flex items-center justify-center">
                <Fish className="w-16 h-16 text-white group-hover:scale-110 transition" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Frazergunge</h3>
                <p className="text-gray-700 mb-4">Coastal village with rich cultural heritage and fishing community</p>
                <div className="flex items-center gap-2 text-orange-600">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Coastal Bengal</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition group">
              <div className="h-48 bg-gradient-to-br from-purple-400 to-indigo-500 flex items-center justify-center">
                <Ship className="w-16 h-16 text-white group-hover:scale-110 transition" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Mousuni Island</h3>
                <p className="text-gray-700 mb-4">Remote island adventure with camping and mud house experiences</p>
                <div className="flex items-center gap-2 text-purple-600">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">River Chinai Crossing</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition group">
              <div className="h-48 bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
                <Building className="w-16 h-16 text-white group-hover:scale-110 transition" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Gangasagar</h3>
                <p className="text-gray-700 mb-4">Sacred confluence where Ganges meets Bay of Bengal, holy pilgrimage site</p>
                <div className="flex items-center gap-2 text-yellow-600">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Sagar Island</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition group">
              <div className="h-48 bg-gradient-to-br from-teal-400 to-blue-500 flex items-center justify-center">
                <Sparkles className="w-16 h-16 text-white group-hover:scale-110 transition" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Kapil Muni Ashram</h3>
                <p className="text-gray-700 mb-4">Ancient sage Kapila's meditation site, spiritual significance</p>
                <div className="flex items-center gap-2 text-teal-600">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Gangasagar</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= GANGASAGAR SPIRITUAL EXPERIENCE ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Gangasagar Spiritual Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the divine confluence and ancient wisdom
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <Building className="w-8 h-8 text-orange-600" />
                <h3 className="text-2xl font-bold">Holy Dip</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Take a sacred dip at the confluence of River Ganga and Bay of Bengal. 
                This ritual cleansing is believed to wash away sins and bring spiritual purification.
              </p>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-bold mb-2">Ritual Significance</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Most sacred after Kumbh Mela</li>
                  <li>• Full moon and Makar Sankranti special</li>
                  <li>• Millions of pilgrims annually</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="w-8 h-8 text-purple-600" />
                <h3 className="text-2xl font-bold">Kapil Muni Ashram</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Visit the meditation site of sage Kapila, author of Sankhya philosophy. 
                The ashram represents ancient Indian wisdom and spiritual heritage.
              </p>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-bold mb-2">Spiritual Experience</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Ancient meditation halls</li>
                  <li>• Vedic philosophy teachings</li>
                  <li>• Peaceful atmosphere</li>
                  <li>• Full vegetarian meals</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-600 to-yellow-600 text-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Complete Gangasagar Experience</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold mb-2">Journey Details</h4>
                <ul className="space-y-1 text-orange-100">
                  <li>• Start from Kolkata (6-7 AM)</li>
                  <li>• Cross Muriganga River by vessel</li>
                  <li>• 35km road journey to Gangasagar</li>
                  <li>• Full vegetarian lunch provided</li>
                  <li>• Return as per tide timing</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-2">What's Included</h4>
                <ul className="space-y-1 text-orange-100">
                  <li>• All transportation</li>
                  <li>• Vessel crossing charges</li>
                  <li>• Vegetarian lunch</li>
                  <li>• Temple visit</li>
                  <li>• Guide assistance</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ECO-TOURISM EXPERIENCES ================= */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Eco-Tourism Experiences</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sustainable travel and authentic local experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 text-center hover:shadow-xl transition">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Mud House Stay</h3>
              <p className="text-gray-600 text-sm mb-3">Traditional coastal living</p>
              <p className="text-green-600 font-semibold">Mousuni Island</p>
            </div>

            <div className="bg-white rounded-2xl p-6 text-center hover:shadow-xl transition">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Anchor className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Boat Safaris</h3>
              <p className="text-gray-600 text-sm mb-3">River exploration trips</p>
              <p className="text-blue-600 font-semibold">All Islands</p>
            </div>

            <div className="bg-white rounded-2xl p-6 text-center hover:shadow-xl transition">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Fish className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Fishing Tours</h3>
              <p className="text-gray-600 text-sm mb-3">Traditional fishing methods</p>
              <p className="text-orange-600 font-semibold">Coastal Villages</p>
            </div>

            <div className="bg-white rounded-2xl p-6 text-center hover:shadow-xl transition">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trees className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Campfire Evenings</h3>
              <p className="text-gray-600 text-sm mb-3">Beach bonfire experience</p>
              <p className="text-purple-600 font-semibold">All Beaches</p>
            </div>
          </div>
        </div>
      </section>


      {/* ================= PACKAGE PRICING ================= */}
      <PackagePricing 
        title="Bakkhali & Islands Tour Packages"
        subtitle="Choose your perfect coastal getaway duration"
      />
 
<ContactCTA />
    </main>
  )
}
