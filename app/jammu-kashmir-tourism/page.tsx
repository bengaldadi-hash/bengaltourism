"use client"

import Image from 'next/image'
import { MapPin, Calendar, Users, Star, Clock, Camera, Sun, Home, IndianRupee, Award, Compass, Utensils, Building, Trees, Ship, Sparkles, Train, ShoppingBag, Book, Mountain, Waves, Fish, Bird, Tent, Flame, PartyPopper, Heart, Sprout, Coffee, Leaf, TreePine, Stethoscope, HeartPulse, Shield, Globe, Phone, Mail, CheckCircle, AlertCircle, Activity, Brain, Bone, Eye, User, Bed, Wifi, Car, Utensils as UtensilsIcon, Wind, Building as Temple, Waves as WavesIcon, Compass as CompassIcon, Trees as TreesIcon, Camera as CameraIcon, Ship as ShipIcon, Snowflake } from 'lucide-react'
import PackagePricing from '@/components/PackagePricing'
import ContactCTA from '@/components/ContactCTA'

export default function JammuKashmirTourismPage() {
  return (
    <main className="text-gray-800">

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/jammu.jpeg"
            alt="Beautiful Dal Lake in Kashmir with houseboats and mountains"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-green-900/80 via-emerald-800/60 to-green-900/80"></div>
        </div>

        <div className="relative h-full flex items-center justify-center text-white px-6">
          <div className="max-w-4xl">
            <div className="flex items-center justify-center gap-2 mb-4">
              <ShipIcon className="w-6 h-6 text-yellow-400" />
              <span className="text-yellow-400 font-semibold tracking-wide">JAMMU & KASHMIR</span>
            </div>

            <h1 className="text-5xl text-center md:text-7xl font-bold mb-6 leading-tight">
              Paradise on Earth
              <span className="block text-3xl md:text-5xl mt-2 text-green-300">
                Srinagar • Gulmarg • Sonmarg • Pahalgam • Dal Lake
              </span>
            </h1>

            <p className="text-xl text-center md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Experience the heaven on earth with special tailor-made
              combination packages designed on request
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="bg-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-yellow-400 transition transform hover:scale-105">
                Explore Kashmir
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-green-800 transition transform hover:scale-105">
                Book Now
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm">Discover Heaven on Earth</span>
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= JAMMU & KASHMIR MAIN PACKAGE ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10">

            {/* LEFT SIDE – ITINERARY */}
            <div className="lg:col-span-2 space-y-8">
              <Destination
                title="Jammu & Kashmir Circuit"
                cta="Book now For 6N/7D"
                subtitle="Srinagar - Gulmarg - Sonmarg - Pahalgam"
                content={[
                  `Day 1: Arrival in Srinagar, Our services start with your arrival at Jammu Railway Station (or) Srinagar Airport.
              Meet & greet and transfer to Houseboat at Srinagar (or) Hotel at Srinagar.
              Check-in at Hotel. Lunch break.
              Rest of the day at leisure.
              Evening free at your own.
              Dinner & Overnight stay at Hotel/Resort (or) Houseboat at Dal Lake / Srinagar.`,

                  `Day 2: Srinagar Local Sightseeing, After breakfast, visit Mughal Gardens, Chashmi-e Shahi, Nishat & Shalimar Bagh.
              Lunch en-route. In the afternoon, enjoy a Shikara ride on the Dal Lake.
              Evening free at your own.
              Dinner & Overnight stay at Hotel/Resort at Srinagar.`,

                  `Day 3: Sonmarg Excursion, After breakfast, proceed for a full day excursion of Sonmarg,
              which is one of the most beautiful drives from Srinagar.
              Lunch en-route. You may take a pony ride (at your own cost) to Thajiwas Glacier where snow remains round the year.
              Return to Hotel by evening.
              Evening free at your own.
              Dinner & Overnight stay at Hotel/Resort at Srinagar.`,

                  `Day 4: Gulmarg - Meadow of Flowers, After breakfast, you will proceed for a full day excursion to Gulmarg,
              Meadow of Flowers, situated at an altitude of 2730 meters,
              full day at leisure to take leisurely walks on the lush green meadows of flowers with a backdrop of snow capped mountains.
              Lunch en-route. Enjoy pony ride or Gondola ride (rope way) to Khillan Marg at your own cost.
              Return to Hotel by evening.
              Evening free at your own.
              Dinner & Overnight stay at Hotel/Resort at Pahalgam / Srinagar (or) Drop to Jammu Airport/Railway Station for your onward journey.
              Tour ends...`,

                  `Day 5: Pahalgam, After breakfast, you will proceed for Pahalgam,
              The Valley of Shepherds, located on the bank of beautiful Lidder River.
              Return to Hotel by evening.
              Evening free at your own.
              Dinner & Overnight stay at Hotel/Resort at Pahalgam / Srinagar (or) Drop to Jammu Airport/Railway Station for your onward journey.
              Tour ends...`,

                  `Day 6: Local Day, After breakfast, your day is on your own for marketing or visit any place of attraction of your choice.
              Lunch en-route.
              Evening free at your own.
              Dinner & Overnight stay at Hotel/Resort at Srinagar.`,

                  `Day 7: Departure, After breakfast, check out of Hotel and get driven to Jammu Railway Station / Srinagar Airport
              for your return journey. Tour ends...`
                ]}
              />

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 shadow-xl mt-5">
                <div className="grid md:grid-cols-1 gap-8">
                  <div className="bg-green-100 rounded-xl p-6 mt-8">
                    <h4 className="font-bold text-green-800 mb-3">Package Highlights</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span className="text-gray-700">Houseboat Stay on Dal Lake</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span className="text-gray-700">Shikara Ride on Dal Lake</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span className="text-gray-700">Mughal Gardens & Nishat Bagh</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span className="text-gray-700">Sonmarg - Thajiwas Glacier</span>
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
                  Watch Jammu & Kashmir Video
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

      {/* ================= VAISHNO DEVI ADD-ON ================= */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-6">
          <Destination
            title="Add-on Vaishno Devi Darshan"
            cta="Book Now For 2N/3D"
            subtitle="Jammu - Katra"
            content={[
              `Day 1: Arrival at Jammu, On Arrival at Jammu Airport/Railway Station, meet assistance & transfer to Hotel at Katra.
              Breakfast en-route. Check-in at Hotel and relax for a while.
              Lunch break.
              Start your trekking journey for Darshan of Divine Shrine Vaishno Devi.
              Offer prayer. Lunch in any of the Langars en-route.
              After returning from Temple, rest of the day at leisure.
              Dinner & Overnight stay at Hotel at Katra.`,

              `Day 2: Trekking Journey, Start your trekking journey (15 km) early morning on foot for Darshan of Divine Shrine Vaishno Devi.
              Offer prayer. Lunch in any of the Langars en-route.
              After returning from Temple, rest of the day at leisure.
              Dinner & Overnight stay at Hotel at Katra.`,

              `Day 3: Srinagar Transfer, Early morning breakfast & proceed towards Srinagar.
              Check into Hotel at Srinagar/Jammu.
              Dinner & Overnight stay at Hotel/Resort at Jammu / Srinagar (or) Drop to Jammu Airport/Railway Station for your onward journey.
              Tour end...`
            ]}
          />

          <div className="bg-white rounded-2xl shadow-xl p-8 mt-5">
            <div className="grid md:grid-cols-1 gap-8">
              <div className="bg-orange-100 rounded-xl p-6 mt-8">
                <h4 className="font-bold text-orange-800 mb-3">Vaishno Devi Highlights</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-600" />
                    <span className="text-gray-700">Sacred Trek to Vaishno Devi</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-600" />
                    <span className="text-gray-700">Traditional Langars</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-600" />
                    <span className="text-gray-700">Scenic Mountain Views</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= KASHMIR HIGHLIGHTS ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Kashmir Highlights</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key attractions and experiences in paradise on earth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 text-center hover:shadow-lg transition">
              <ShipIcon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Dal Lake</h3>
              <p className="text-sm text-gray-600">Houseboats, Shikara rides, Mughal gardens</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 text-center hover:shadow-lg transition">
              <TreesIcon className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Mughal Gardens</h3>
              <p className="text-sm text-gray-600">Nishat Bagh, Shalimar Bagh, Chashmi-e Shahi</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 text-center hover:shadow-lg transition">
              <Mountain className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Gulmarg</h3>
              <p className="text-sm text-gray-600">Meadow of Flowers, Khillan Marg</p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 text-center hover:shadow-lg transition">
              <CameraIcon className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Sonmarg</h3>
              <p className="text-sm text-gray-600">Thajiwas Glacier, Snow Point</p>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 text-center hover:shadow-lg transition">
              <Snowflake className="w-12 h-12 text-cyan-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Pahalgam</h3>
              <p className="text-sm text-gray-600">Valley of Shepherds, Lidder River</p>
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
                  <li>• March to May: Pleasant weather, blooming flowers</li>
                  <li>• June to August: Best time for outdoor activities</li>
                  <li>• September to October: Autumn colors, clear skies</li>
                  <li>• November to February: Winter sports and snow activities</li>
                </ul>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Calendar className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-800 mb-2">Travel Tips</h3>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Book houseboats in advance during peak season</li>
                  <li>• Carry warm clothing for high-altitude areas</li>
                  <li>• Pony rides available at additional cost</li>
                  <li>• Respect local customs and traditions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PACKAGE PRICING ================= */}
      <PackagePricing
        title="Jammu & Kashmir Tour Packages"
        subtitle="Choose your perfect paradise on earth duration"
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
