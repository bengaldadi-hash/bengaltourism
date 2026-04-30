"use client"

import Image from 'next/image'
import { MapPin, Calendar, Users, Star, Clock, Camera, Sun, Home, IndianRupee, Award, Compass, Utensils, Building, Trees, Ship, Sparkles, Train, ShoppingBag, Book, Mountain, Waves, Fish, Bird, Tent, Flame, PartyPopper, Heart, Sprout, Coffee, Leaf, TreePine, Stethoscope, HeartPulse, Shield, Globe, Phone, Mail, CheckCircle, AlertCircle, Activity, Brain, Bone, Eye, User, Bed, Wifi, Car, Utensils as UtensilsIcon, Wind, Building as Temple, Waves as WavesIcon, Compass as CompassIcon, Trees as TreesIcon, Camera as CameraIcon, Ship as ShipIcon } from 'lucide-react'
import PackagePricing from '@/components/PackagePricing'
import ContactCTA from '@/components/ContactCTA'

export default function GoaTourismPage() {
  return (
    <main className="text-gray-800">

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/Goa.jpeg"
            alt="Beautiful Goan beach with palm trees and golden sand"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 via-cyan-800/60 to-blue-900/80"></div>
        </div>

        <div className="relative h-full flex items-center justify-center text-white px-6">
          <div className="max-w-4xl">
            <div className="flex items-center justify-center gap-2 mb-4">
              <WavesIcon className="w-6 h-6 text-yellow-400" />
              <span className="text-yellow-400 font-semibold tracking-wide">GOA TOURISM</span>
            </div>

            <h1 className="text-5xl text-center md:text-7xl font-bold mb-6 leading-tight">
              Goa Beach Budget Tour
              <span className="block text-3xl md:text-5xl mt-2 text-blue-300">
                Calangute • Anjuna • Dona Paula • Beach Paradise
              </span>
            </h1>

            <p className="text-xl text-center md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Experience the perfect blend of beaches, nightlife, and Portuguese heritage
              with special tailor-made budget packages
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="bg-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-yellow-400 transition transform hover:scale-105">
                Explore Goa
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-800 transition transform hover:scale-105">
                Book Now
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm">Discover Beach Paradise</span>
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= GOA CIRCUIT PACKAGE ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10">

            {/* LEFT SIDE – ITINERARY */}
            <div className="lg:col-span-2 space-y-8">
              <Destination
                title="Goa Beach Circuit"
                cta="Book now For 4N/5D"
                subtitle="Anjuna - Calangute - Baga"
                content={[
                  `Day 1: Arrival & Beach Relaxation, On arrival at Dabolim Airport / Madgaon Railway Station, you will be transferred to Hotel.
              Check in and relax for a while. Lunch break.
              Spend a leisurely time on beaches near you, sampling some delicious Goan cuisine.
              Soak in the pulsating night-life on Goan Beaches.
              Breakfast & Dinner included. Dinner & Overnight at Hotel/Resort at Anjuna / Calangute / Goa.`,

                  `Day 2: North Goa Exploration, After a delicious breakfast, go on a full-Day Tour of North Goa.
              Go for a Dolphin sight-seeing Tour. Lunch en-route.
              Visit Fort Aguada, Calangute Beach, Anjuna Beach, Baga Beach and Coco Beach.
              Lunch en-route. Return in evening.
              Soak in the pulsating night-life on Goan Beaches.
              Breakfast & Dinner included. Overnight at Hotel/Resort at Anjuna / Calangute / Goa.`,

                  `Day 3: South Goa Sightseeing, Savour a delectable breakfast and get ready to explore South Goa.
              Visit temples like Shri Manguesh, Shantadurga and Kavlem, at Priol.
              Explore churches of old Goa like Basilica of Bom Jesus and Se Cathedral.
              Lunch en-route. After lunch, visit Dona Paula Bay and Miramar Beach.
              Afterwards, spend some time at Panjim Market and indulge in some shopping.
              Soak in the pulsating night-life on Goan Beaches.
              Breakfast & Dinner included. Overnight at Hotel/Resort at Baga / Palolem / Goa.`,

                  `Day 4: Leisure Day, Wake up late after late night revelry. After a hearty breakfast,
              hit the beach for some Water Sports activity on your own.
              Have your Lunch in any of the Shacks dotting the sea-shore.
              Return to your Hotel. Take an afternoon siesta.
              Evening free for your last minute shopping & another last visit to Beach.
              Breakfast & Dinner included. Overnight at Hotel/Resort at Baga / Palolem / Goa.`,

                  `Day 5: Departure, After breakfast, check-out & transfer to Dabolim Airport / Madgaon Railway Station
              for your return journey on your departure time.
              Breakfast & Dinner included. Tour ends...`
                ]}
              />

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 shadow-xl mt-5">
                <div className="grid md:grid-cols-1 gap-8">
                  <div className="bg-blue-100 rounded-xl p-6 mt-8">
                    <h4 className="font-bold text-blue-800 mb-3">Package Highlights</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-600" />
                        <span className="text-gray-700">Dolphin Sight-seeing Tour</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-600" />
                        <span className="text-gray-700">North & South Goa Exploration</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-600" />
                        <span className="text-gray-700">Beach Activities & Water Sports</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-600" />
                        <span className="text-gray-700">Pulsating Night-life</span>
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
                  Watch Goa Video
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

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 space-y-6">
          {/* SOUTH GOA – ADD ON */}
          <Destination
            title="South Goa Escape"
            cta="Book now for (2N/3D)"
            subtitle="Add-on (or) Separately with Colva - Benaulim - Palolem"
            content={[
              `Day 1: Arrival in South Goa. On arrival at Dabolim Airport / Madgaon Railway Station,
    transfer to hotel near Colva / Benaulim. Check-in and relax.
    Evening leisure at Colva Beach enjoying sunset views and beachside cafes.
    Dinner & Overnight stay at South Goa.`,

              `Day 2: South Goa Sightseeing. After breakfast visit Shri Manguesh Temple,
    Shantadurga Temple and Old Goa Churches including Basilica of Bom Jesus
    and Se Cathedral. Later visit Dona Paula View Point & Miramar Beach.
    Evening shopping at Panjim Market.
    Breakfast & Dinner included. Overnight stay at South Goa.`,

              `Day 3: Leisure Morning. After breakfast, enjoy free time at Palolem Beach
    or relax at resort. Later transfer to Airport / Railway Station.
    Tour Ends.`
            ]}
          />


          {/* NORTH GOA – ADD ON */}
          <Destination
            title="North Goa Fun Break"
            cta="Book now for (2N/3D)"
            subtitle="Add-on (or) Separately with Baga - Calangute - Anjuna"
            content={[
              `Day 1: Arrival in North Goa. Transfer to hotel near Baga / Calangute.
    Check-in and relax. Evening explore Baga Beach & Tito’s Lane nightlife.
    Dinner & Overnight stay at North Goa.`,

              `Day 2: Full-Day North Goa Tour. Visit Fort Aguada, Candolim Beach,
    Calangute Beach, Baga Beach, Anjuna Beach & Vagator Beach.
    Optional Dolphin Sightseeing Tour. Evening free for beach shacks.
    Breakfast & Dinner included. Overnight stay.`,

              `Day 3: Morning leisure or water sports activities like jet ski,
    parasailing, banana ride (optional).
    After breakfast, transfer to Airport / Railway Station.
    Tour Ends.`
            ]}
          />


          {/* MUMBAI – ADD ON */}
          <Destination
            title="Mumbai City Extension"
            cta="Book now for (2N/3D)"
            subtitle="Add-on (or) Separately with Gateway - Marine Drive - Elephanta"
            content={[
              `Day 1: Arrival in Mumbai. Transfer to hotel & check-in.
    Visit Gateway of India, Marine Drive, Colaba Causeway
    and enjoy evening at Chowpatty Beach.
    Overnight stay at Mumbai.`,

              `Day 2: Mumbai Sightseeing Tour. Visit Elephanta Caves,
    Chhatrapati Shivaji Maharaj Terminus, Haji Ali Dargah,
    Bandra-Worli Sea Link & Juhu Beach.
    Breakfast included. Overnight stay at Mumbai.`,

              `Day 3: After breakfast, free time for shopping.
    Transfer to Mumbai Airport / Railway Station.
    Tour Ends.`
            ]}
          />
        </div>
      </section>
      {/* ================= CASINO & ENTERTAINMENT ================= */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Entertainment & Casino Options</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Optional activities with extra cost
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center gap-4 mb-4">
                <ShipIcon className="w-12 h-12 text-purple-600" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Casino on Floating Ship</h3>
                  <p className="text-gray-600">Try your luck at the casino</p>
                </div>
              </div>
              <div className="bg-purple-100 rounded-xl p-6">
                <h4 className="font-bold text-purple-800 mb-3">What's Included</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-600" />
                    <span className="text-gray-700"> Casino & Entry permit excluded</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-600" />
                    <span className="text-gray-700">Free-flowing drinks</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-600" />
                    <span className="text-gray-700">Buffet dinner</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-600" />
                    <span className="text-gray-700">Optional activity</span>
                  </div>
                </div>

              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center gap-4 mb-4">
                <Sun className="w-12 h-12 text-orange-600" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Beach Activities</h3>
                  <p className="text-gray-600">Water sports and beach fun</p>
                </div>
              </div>
              <div className="bg-orange-100 rounded-xl p-6">
                <h4 className="font-bold text-orange-800 mb-3">Available Activities</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-600" />
                    <span className="text-gray-700">Parasailing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-600" />
                    <span className="text-gray-700">Jet skiing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-600" />
                    <span className="text-gray-700">Banana boat rides</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-600" />
                    <span className="text-gray-700">Beach volleyball</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= GOA HIGHLIGHTS ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Goa Highlights</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key attractions and experiences in beach paradise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 text-center hover:shadow-lg transition">
              <WavesIcon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Beautiful Beaches</h3>
              <p className="text-sm text-gray-600">Anjuna, Calangute, Baga, Coco, Palolem</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 text-center hover:shadow-lg transition">
              <ShipIcon className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Dolphin Tours</h3>
              <p className="text-sm text-gray-600">Dolphin sightseeing in Arabian Sea</p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 text-center hover:shadow-lg transition">
              <Building className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Historic Churches</h3>
              <p className="text-sm text-gray-600">Basilica of Bom Jesus, Se Cathedral</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 text-center hover:shadow-lg transition">
              <TreesIcon className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Ancient Temples</h3>
              <p className="text-sm text-gray-600">Shri Manguesh, Shantadurga, Kavlem</p>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-6 text-center hover:shadow-lg transition">
              <CameraIcon className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Nightlife</h3>
              <p className="text-sm text-gray-600">Pulsating beach parties & clubs</p>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 text-center hover:shadow-lg transition">
              <Mountain className="w-12 h-12 text-teal-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Fort Aguada</h3>
              <p className="text-sm text-gray-600">Historic fort with panoramic views</p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 text-center hover:shadow-lg transition">
              <ShoppingBag className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Panjim Market</h3>
              <p className="text-sm text-gray-600">Shopping & local handicrafts</p>
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
                <h3 className="font-bold text-gray-800 mb-2">Beach Safety Tips</h3>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Avoid swimming during monsoon (June-September)</li>
                  <li>• Carry sunscreen and hats for beach activities</li>
                  <li>• Stay hydrated during water sports</li>
                  <li>• Respect local customs and dress codes</li>
                </ul>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Calendar className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-800 mb-2">Best Time to Visit</h3>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• November to February: Pleasant weather, fewer crowds</li>
                  <li>• March to May: Perfect beach weather, water sports</li>
                  <li>• September to October: Post-monsoon beauty</li>
                  <li>• December: Christmas and New Year celebrations</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PACKAGE PRICING ================= */}
      <PackagePricing
        title="Goa Tour Packages"
        subtitle="Choose your perfect beach paradise duration"
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
