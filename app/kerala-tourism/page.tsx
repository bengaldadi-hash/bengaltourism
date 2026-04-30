"use client"

import Image from 'next/image'
import { MapPin, Calendar, Users, Star, Clock, Camera, Sun, Home, IndianRupee, Award, Compass, Utensils, Building, Trees, Ship, Sparkles, Train, ShoppingBag, Book, Mountain, Waves, Fish, Bird, Tent, Flame, PartyPopper, Heart, Sprout, Coffee, Leaf, TreePine, Stethoscope, HeartPulse, Shield, Globe, Phone, Mail, CheckCircle, AlertCircle, Activity, Brain, Bone, Eye, User, Bed, Wifi, Car, Utensils as UtensilsIcon, Wind, Building as Temple, Waves as WavesIcon, Compass as CompassIcon, Trees as TreesIcon, Camera as CameraIcon, Ship as ShipIcon, Snowflake } from 'lucide-react'
import PackagePricing from '@/components/PackagePricing'
import ContactCTA from '@/components/ContactCTA'

export default function KeralaTourismPage() {
  return (
    <main className="text-gray-800">

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/Kerala.jpeg"
            alt="Beautiful Kerala backwaters with houseboats and coconut trees"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-green-900/80 via-emerald-800/60 to-green-900/80"></div>
        </div>

        <div className="relative h-full flex items-center justify-center text-white px-6">
          <div className="max-w-4xl">
            <div className="flex items-center justify-center gap-2 mb-4">
              <TreesIcon className="w-6 h-6 text-yellow-400" />
              <span className="text-yellow-400 font-semibold tracking-wide">KERALA TOURISM</span>
            </div>

            <h1 className="text-5xl text-center md:text-7xl font-bold mb-6 leading-tight">
              God's Own Country
              <span className="block text-3xl md:text-5xl mt-2 text-green-300">
                Munnar • Alleppey • Kovalam • Thekkady • Periyar
              </span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto text-center leading-relaxed">
              Experience the tropical paradise with special tailor-made
              combination packages designed on request
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="bg-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-yellow-400 transition transform hover:scale-105">
                Explore Kerala
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-green-800 transition transform hover:scale-105">
                Book Now
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm">Discover God's Own Country</span>
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= KERALA MAIN PACKAGE ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10">

            {/* LEFT SIDE – ITINERARY */}
            <div className="lg:col-span-2 space-y-8">
              <Destination
                title="Kerala Circuit Package"
                cta="Book now For 5N/6D"
                subtitle=" Cochin - Munnar - Thekkady - Alleppey"
                content={[
                  `Day 1: Arrival in Munnar, You will be picking from Cochin Airport / Ernakulam railway station and drive to Munnar (04 Hrs drive).
                      On the way enjoy some waterfalls and natural scenic spots.
                      On arrival at Munnar check into Hotel and relax for the rest of the day.
                      Breakfast & Dinner included. Overnight stay at Hotel will be arranged.`,
                  `Day 2: Munnar Local Sightseeing, After breakfast spend the day with local sightseeing.
                      Situated at the confluence of three mountain streams - Mudrapuzha, Nallathanni and Kundale, Munnar is 1600 Meter above sea level.
                      This majestic hill station was once the summer resort of the British government in South India.
                      Local sightseeing of Munnar includes visit to Mattupetty Dam, Kundale Lake and Echo point.
                      Breakfast & Dinner included. Overnight stay is arranged at Munnar.`,
                  `Day 3: Thekkady, After breakfast check out from Hotel and drive to Thekkady (04 Hrs).
                      On arrival check in to Hotel.
                      Proceed for sightseeing tour of Thekkady - one of the world's most fascinating wild life reserves.
                      The Periyar wild life sanctuary in Thekkady is spread across 777 sq km of which 360 sq km is thick evergreen forest.
                      Noted for its geomorphology, diversity of wild life and scenic beauty, the sanctuary was declared a Tiger Reserve in 1978.
                      Optional activities like Boating at Periyar Lake, Spice Plantation visit and Elephant Ride can be done at an extra cost.
                      Breakfast & Dinner included. Overnight stay is arranged in Thekkady.`,

                  `Day 4: Alleppey Backwater Cruise,   After breakfast check out from Hotel / houseboat and drive to Alleppey. 
                      Set out on an enchanting overnight backwater cruise in traditionally decorated houseboats. 
                      Check in time is 01:00 PM and cruise starts with lunch. 
                      While cruising, let your eyes settle for bowed-down paddy fields, local inhabitants, rustic homes, ancient churches / temples and swaying coconut groves. 
                      Food will be served onboard. 
                      Breakfast & Dinner included. Overnight stay in houseboat.`,

                  `Day 5: Kovalam, After breakfast check out from Hotel / houseboat and drive to Kovalam (04 Hrs Drive). 
                      On arrival check-in into Hotel. 
                      Kovalam is one of the prime beach destinations in India. 
                      Enjoy evening watching a spectacular sunset or swimming at picturesque Kovalam Beach. 
                      Breakfast & Dinner included. Overnight stay is to be spent at Hotel.`,

                  `Day 6: After breakfast check-out from Hotel. 
                      Visit some local area if time permits. 
                      Then leave to drop-off at Cochin Airport / Ernakulam Railway Station for your onward journey. 
                      Breakfast & Dinner included. Tour ends...`
                ]}
              />
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 shadow-xl mt-5">

            <div className="space-y-6 grid md:grid-cols-1 gap-8 ">

              <div className="bg-green-100 rounded-xl p-6 mt-8">
                <h4 className="font-bold text-green-800 mb-3">Package Highlights</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-gray-700">Munnar Hill Station</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-gray-700">Periyar Wildlife Sanctuary</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-gray-700">Alleppey Backwater Cruise</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-gray-700">Kovalam Beach Experience</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
            </div>
            <div className="space-y-8 lg:sticky lg:top-24 h-fit">

              {/* Video Section */}
              <div className="bg-white rounded-3xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  Watch Kerala Video
                </h3>

                <div className="aspect-video rounded-xl overflow-hidden">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                    title="Atlantis Experience"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>

              {/* Advertisement Section */}
              <div className="bg-gradient-to-br from-orange-500 to-yellow-500 text-white rounded-3xl shadow-lg p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">
                  🚀 Paste Your Advertisement Here
                </h3>
                <p className="text-sm opacity-90">
                  Promote your brand, offer or travel deals here.
                  This space is perfect for partner promotions.
                </p>
                <button className="mt-6 bg-white text-orange-600 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition">
                  Contact For Promotion
                </button>
              </div>

            </div>
          </div>
        
        </div>
      </section>

      {/* ================= HOUSEBOAT ADD-ON ================= */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-6">



          <Destination
            title="Add-on Houseboat"
            cta="Book Now For  2N/3D"
            subtitle="Alleppey Backwaters - Luxury Houseboat Experience"
            content={[

              `Day 1: Arrive at Alleppey and board your luxury houseboat.
                      Welcome drink and lunch served onboard.
                      Start cruising through the serene backwaters of Alleppey.
                      Evening tea/coffee with snacks. Dinner onboard.
                      Overnight stay in the houseboat.`,

              `Day 2:  Breakfast onboard while cruising.
                      Visit local villages, paddy fields, and coir factories.
                      Lunch served during the cruise.
                      Anchor for the night in a peaceful location.
                      Dinner onboard with traditional Kerala cuisine.
                      Overnight stay in the houseboat.`,

              `Day 3: Breakfast onboard.
                      Morning cruise through narrow canals.
                      Check-out from houseboat after lunch.
                      Transfer to your next destination.
                      Tour ends with beautiful backwater memories.`
            ]}
          />



          <div className="bg-white rounded-2xl shadow-xl mt-5 p-8">
            <div className="space-y-6 grid md:grid-cols-1 gap-8">



              <div className="bg-blue-100 rounded-xl p-6 mt-8">
                <h4 className="font-bold text-blue-800 mb-3">Houseboat Highlights</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    <span className="text-gray-700">Luxury AC Houseboat</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    <span className="text-gray-700">All Meals Included</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    <span className="text-gray-700">Scenic Backwater Cruise</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= KERALA HIGHLIGHTS ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Kerala Highlights</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key attractions and experiences in God's own country
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 text-center hover:shadow-lg transition">
              <TreesIcon className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Backwaters</h3>
              <p className="text-sm text-gray-600">Alleppey, Kumarakom, houseboats</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 text-center hover:shadow-lg transition">
              <WavesIcon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Beaches</h3>
              <p className="text-sm text-gray-600">Kovalam, Varkala, Cherai Beach</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 text-center hover:shadow-lg transition">
              <Mountain className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Hill Stations</h3>
              <p className="text-sm text-gray-600">Munnar, Thekkady, Wayanad</p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 text-center hover:shadow-lg transition">
              <CameraIcon className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Wildlife</h3>
              <p className="text-sm text-gray-600">Periyar, Eravikulam, Chinnar</p>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 text-center hover:shadow-lg transition">
              <Building className="w-12 h-12 text-teal-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Cultural Sites</h3>
              <p className="text-sm text-gray-600">Temples, Churches, Spice Plantations</p>
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
                  <li>• September to March: Pleasant weather, clear skies</li>
                  <li>• October to February: Cool weather, perfect for sightseeing</li>
                  <li>• June to August: Monsoon season - lush green landscapes</li>
                  <li>• November to January: Winter season, minimal crowds</li>
                </ul>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Calendar className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-800 mb-2">Travel Tips</h3>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Book houseboats in advance during peak season</li>
                  <li>• Carry light cotton clothing and rain gear</li>
                  <li>• Respect local customs and traditions</li>
                  <li>• Try authentic Kerala cuisine</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <PackagePricing
        title="Kerala Tour Packages"
        subtitle="Choose your perfect backwater and hill station adventure"
      />


      <ContactCTA />


    </main>
  )
}


function Destination({ title, subtitle, content, cta }: { title: string; subtitle: string; content: string[]; cta: string; }) {
  return (
    <div className="bg-white shadow-xl rounded-3xl p-10 space-y-6">
      <div className="flex gap-5 items-center mt-8">

        <h2 className="text-3xl font-bold text-indigo-700">{title}</h2>
        <a
          href="/book-tour"
          className="bg-yellow-600 text-white px-8 py-3 rounded-full font-bold hover:bg-indigo-700 transition-all transform hover:scale-105 shadow-lg"
        >
          {cta}
        </a>
      </div>

      <p className="font-semibold text-gray-700">{subtitle}</p>


      <div className="space-y-6">
        {content.map((item, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-2xl p-6 border-l-4 border-indigo-500"
          >
            <p className="text-gray-700 leading-8 whitespace-pre-line">
              {item}
            </p>
          </div>
        ))}
      </div>



    </div>
  )
} 