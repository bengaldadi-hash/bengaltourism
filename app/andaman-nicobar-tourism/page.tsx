"use client"

import Image from 'next/image'
import { MapPin, Calendar, Users, Star, Clock, Camera, Sun, Home, IndianRupee, Award, Compass, Utensils, Building, Trees, Ship, Sparkles, Train, ShoppingBag, Book, Mountain, Waves, Fish, Bird, Tent, Flame, PartyPopper, Heart, Sprout, Coffee, Leaf, TreePine, Stethoscope, HeartPulse, Shield, Globe, Phone, Mail, CheckCircle, AlertCircle, Activity, Brain, Bone, Eye, User, Bed, Wifi, Car, Utensils as UtensilsIcon, Wind, Building as Temple, Waves as WavesIcon, Compass as CompassIcon, Trees as TreesIcon, Camera as CameraIcon, Ship as ShipIcon, Snowflake } from 'lucide-react'
import ContactCTA from '@/components/ContactCTA'
import PackagePricing from '@/components/PackagePricing'
import TourPricingSection from '@/components/TourPricingSection'

export default function AndamanNicobarTourismPage() {
  return (
    <main className="text-gray-800">

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/Andaman.jpeg"
            alt="Beautiful Andaman beaches with tropical palm trees and crystal clear waters"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 via-cyan-800/60 to-blue-900/80"></div>
        </div>

        <div className="relative h-full flex items-center justify-center text-white px-6">
          <div className="max-w-4xl">
            <div className="flex items-center justify-center gap-2 mb-4">
              <ShipIcon className="w-6 h-6 text-yellow-400" />
              <span className="text-yellow-400 font-semibold tracking-wide">ANDAMAN & NICOBAR</span>
            </div>

            <h1 className="text-5xl text-center md:text-7xl font-bold mb-6 leading-tight">
              Tropical Island Paradise
              <span className="block text-3xl md:text-5xl mt-2 text-blue-300">
                Port Blair • Havelock • Neil Island • Ross Island • Bara Tang
              </span>
            </h1>

            <p className="text-xl text-center md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Experience the perfect blend of beaches, marine life, and colonial heritage
              with special tailor-made combination packages
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="bg-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-yellow-400 transition transform hover:scale-105">
                Explore Islands
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-800 transition transform hover:scale-105">
                Book Now
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm">Discover Tropical Paradise</span>
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= HAVELOCK - NEIL - ROSS PACKAGE ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10">

            {/* LEFT SIDE – ITINERARY */}
            <div className="lg:col-span-2 space-y-8">
          <Destination
            title="Andaman & Nicobar Island Circuit"
            cta="Book now For 6N/7D"
            subtitle="Cellular Jail & Marine Life"
            content={[
              `Day 1: Arrival at Port Blair, Arrival at Port Blair Airport. Transfer to Hotel & check-in.
              Visit Corbyn's Cove Beach and the historic Cellular Jail.
              Experience the Light & Sound Show (optional).
              Dinner & Overnight stay at Port Blair.`,

              `Day 2: Havelock Island, Early morning transfer to Havelock Island by ferry.
              Visit the world-famous Radhanagar Beach.
              Enjoy leisure time by the turquoise waters.
              Dinner & Overnight stay at Havelock.`,

              `Day 3: Elephant Beach / Water Activities, Visit Elephant Beach for snorkeling & water sports (optional).
              Enjoy marine life & coral reefs.
              Evening at leisure.
              Dinner & Overnight stay at Havelock.`,

              `Day 4: Neil Island, Transfer to Neil Island by ferry.
              Visit Bharatpur Beach, Natural Rock Formation & Laxmanpur Beach.
              Experience peaceful island life.
              Dinner & Overnight stay at Neil Island.`,

              `Day 5: Ross Island & North Bay, Return to Port Blair.
              Visit Ross Island (Netaji Subhash Chandra Bose Island) & North Bay.
              Explore colonial ruins, mangroves & enjoy sea walk (optional).
              Dinner & Overnight stay at Port Blair.`,

              `Day 6: Baratang Island, Early morning road trip to Baratang Island through dense forest.
              Visit Limestone Caves & Mud Volcano.
              Return to Port Blair by evening.
              Dinner & Overnight stay at Port Blair.`,

              `Day 7: Departure, Enjoy breakfast at hotel.
              Check-out & transfer to Port Blair Airport for your onward journey.
              Tour concludes with beautiful island memories.`
            ]}
          />
           <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 shadow-xl mt-5">
            <div className="grid md:grid-cols-1 gap-8">
              <div className="bg-blue-100 rounded-xl p-6 mt-8">
                <h4 className="font-bold text-blue-800 mb-3">Package Highlights</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    <span className="text-gray-700">Cellular Jail Historical Experience</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    <span className="text-gray-700">Neil Island Marine Life</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    <span className="text-gray-700">Ross Island Mangroves & Bird Sanctuary</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    <span className="text-gray-700">Bara Tang Island Treasure</span>
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
                Watch Andaman Nicobar Video
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

      {/* ================= SITAPUR BEACH & ROSS ISLAND ================= */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-6">
          <Destination
            title="Sitapur Beach & Ross Island"
            cta="Book Now For 3N/4D"
            subtitle="Add-on (or) Separately with Beach Paradise & Island Adventure"
            content={[
              `Day 1: Arrival at Port Blair, Arrival at Port Blair Airport & transfer to Hotel.
              After lunch, visit Corbyn's Cove Beach, Cellular-Jail where the heroic saga of the Indian freedom struggle is brought alive.
              Then proceed to Marina Park named as Rajiv Gandhi Park and back to respective Hotel.
              Evening free at your own.
              Dinner & Overnight stay at Hotel/Resort at Port Blair.`,

              `Day 2: Sitapur Beach, After breakfast, proceed to explore Sitapur Beach.
              It is about 30 km from Port Blair; Sitapur Beach is famous for its marine life and is popular as a vegetable bowl of Andaman.
              And visit Bharatpur beach (it is famous for coral watching and swimming).
              Lunch on the beach. Live coral and Natural Rock Formation and afternoon visit Sunset Point at Laxmanpur Beach.
              Return in evening.
              Dinner & Overnight stay at Hotel/Resort at Sitapur.`,

              `Day 3: Ross Island, Former residential and administrative island of the British during their rule of South East Asia was nicknamed as "Paris of the east".
              Then visit Bird Island with lush green mangroves and forest shelter numerous chirping birds, sylvan sands and Munda Pahar Beach and Sun Set Point.
              Return in evening.
              Dinner & Overnight stay at Hotel/Resort at Port Blair.`,

              `Day 4: Departure, Enjoy an early morning sunrise. After breakfast, check-out and drop to Port Blair Airport for connecting flight to Kolkata. Tour ends...`
            ]}
          />

          <div className="bg-white rounded-2xl shadow-xl p-8 mt-5">
            <div className="grid md:grid-cols-1 gap-8">
              <div className="bg-green-100 rounded-xl p-6 mt-8">
                <h4 className="font-bold text-green-800 mb-3">Package Highlights</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-gray-700">Sitapur Beach Experience</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-gray-700">Ross Island Adventure</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-gray-700">Coral Watching & Swimming</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MAYABUNDER - RANGET ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <Destination
            title="Mayabunder - Ranget"
            cta="Book Now For 3N/4D"
            subtitle="Add-on (or) Separately with Beach Paradise & Turtle Nesting"
            content={[
              `Day 1: Arrival at Port Blair, Arrival at Port Blair Airport & transfer to Hotel.
              After lunch, visit Corbyn's Cove Beach, Cellular-Jail where the heroic saga of the Indian freedom struggle is brought alive.
              Then proceed to Marina Park named as Rajiv Gandhi Park and back to respective Hotel.
              Evening free at your own.
              Dinner & Overnight stay at Hotel/Resort at Port Blair.`,

              `Day 2: Ranget, After breakfast, proceed to explore Ranget.
              It is 170kms by road. Visit Cuthbert Bay Beach Turtle nesting ground.
              Return in evening.
              Dinner & Overnight stay at Hotel/Resort at Ranget.`,

              `Day 3: Mayabunder, After breakfast, proceed to explore Mayabunder.
              It is 170kms by road. Visit Cuthbert Bay Beach Turtle nesting ground.
              Return in evening.
              Dinner & Overnight stay at Hotel/Resort at Mayabunder.`,

              `Day 4: Departure, Enjoy an early morning sunrise. After breakfast, check-out and drop to Port Blair Airport for connecting flight to Kolkata. Tour ends...`
            ]}
          />

          <div className="bg-white rounded-2xl shadow-xl p-8 mt-5">
            <div className="grid md:grid-cols-1 gap-8">
              <div className="bg-green-100 rounded-xl p-6 mt-8">
                <h4 className="font-bold text-green-800 mb-3">Package Highlights</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-gray-700">Ranget Beach Experience</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-gray-700">Cuthbert Bay Turtle Nesting</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-gray-700">Mayabunder Beach Activities</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= BARA TANG ISLAND ================= */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-6">
          <Destination
            title="Bara Tang Island"
            cta="Book Now For 3N/4D"
            subtitle="Add-on (or) Separately with Island Treasure Hunt"
            content={[
              `Day 1: Arrival at Port Blair, Arrival at Port Blair Airport & transfer to Hotel.
              After lunch, visit Corbyn's Cove Beach, Cellular-Jail where the heroic saga of the Indian freedom struggle is brought alive.
              Then proceed to Marina Park named as Rajiv Gandhi Park and back to respective Hotel.
              Evening free at your own.
              Dinner & Overnight stay at Hotel/Resort at Port Blair.`,

              `Day 2: Bara Tang Island, Best treasure gifted to islands. The road journey from Port Blair through a dense jungle.
              Visit Limestone Cave and Mud Volcano.
              On the way, one can see local tribals called Jarawas.
              Return in evening.
              Dinner & Overnight stay at Hotel/Resort at Port Blair.`,

              `Day 3: Island Exploration, Explore the island's natural beauty, visit local villages, and enjoy the pristine beaches.
              Return in evening.
              Dinner & Overnight stay at Hotel/Resort at Port Blair.`,

              `Day 4: Departure, Enjoy an early morning sunrise. After breakfast, check-out and drop to Port Blair Airport for connecting flight to Kolkata. Tour ends...`
            ]}
          />

          <div className="bg-white rounded-2xl shadow-xl p-8 mt-5">
            <div className="grid md:grid-cols-1 gap-8">
              <div className="bg-orange-100 rounded-xl p-6 mt-8">
                <h4 className="font-bold text-orange-800 mb-3">Package Highlights</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-600" />
                    <span className="text-gray-700">Island Adventure Activities</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-600" />
                    <span className="text-gray-700">Limestone Cave & Mud Volcano</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-600" />
                    <span className="text-gray-700">Local Tribal Experience</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ISLAND HIGHLIGHTS ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Andaman Islands Highlights</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key attractions and experiences in tropical paradise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 text-center hover:shadow-lg transition">
              <ShipIcon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Neil Island</h3>
              <p className="text-sm text-gray-600">Marine life, vegetable bowl of Andaman</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 text-center hover:shadow-lg transition">
              <Bird className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Bird Island</h3>
              <p className="text-sm text-gray-600">Mangroves, forest shelter, chirping birds</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 text-center hover:shadow-lg transition">
              <TreesIcon className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Ross Island</h3>
              <p className="text-sm text-gray-600">Green mangroves, sylvan sands, Sun Set Point</p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 text-center hover:shadow-lg transition">
              <CameraIcon className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Bara Tang Island</h3>
              <p className="text-sm text-gray-600">Island treasure, Limestone caves, Mud Volcano</p>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 text-center hover:shadow-lg transition">
              <WavesIcon className="w-12 h-12 text-cyan-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Sitapur Beach</h3>
              <p className="text-sm text-gray-600">Coral watching, swimming, live coral</p>
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
                <h3 className="font-bold text-gray-800 mb-2">Island Travel Tips</h3>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Book accommodations in advance during peak season (December-January)</li>
                  <li>• Carry light cotton clothing and beach essentials</li>
                  <li>• Use reef-safe sunscreen to protect coral</li>
                  <li>• Respect local marine conservation rules</li>
                  <li>• Stay hydrated during island explorations</li>
                </ul>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Calendar className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-800 mb-2">Best Time to Visit</h3>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• October to May: Pleasant weather, calm seas</li>
                  <li>• June to September: Monsoon season - rough seas</li>
                  <li>• November to February: Turtle nesting season</li>
                  <li>• December to April: Clear waters for snorkeling</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

    
            <TourPricingSection
              title="Andaman & Nicobar Tour Packages"
        subtitle="Choose your perfect Andaman & Nicobar adventure duration"
      
           packages={[
                { label: "Customisable & Recommended for extended duration", days: "6N / 7D", price: 22600 },
                { label: "Highly Recommended", days: "5N / 6D", price: 19000 },
                { label: "Most Popular", days: "4N / 5D", price: 15400 },
                { label: "In group of 20+ Persons", days: "3N / 4D", price: 12700 },
                { label: "As add on / Separately ", days: "2N / 3D", price: 9100 },
              ]}
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
