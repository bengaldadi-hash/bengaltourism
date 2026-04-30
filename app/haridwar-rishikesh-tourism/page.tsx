"use client"

import Image from 'next/image'
import { MapPin, Calendar, Users, Star, Clock, Camera, Sun, Home, IndianRupee, Award, Compass, Utensils, Building, Trees, Ship, Sparkles, Train, ShoppingBag, Book, Mountain, Waves, Fish, Bird, Tent, Flame, PartyPopper, Heart, Sprout, Coffee, Leaf, TreePine, Stethoscope, HeartPulse, Shield, Globe, Phone, Mail, CheckCircle, AlertCircle, Activity, Brain, Bone, Eye, User, Bed, Wifi, Car, Utensils as UtensilsIcon, Wind, Building as Temple, Waves as WavesIcon, Compass as CompassIcon, Trees as TreesIcon, Camera as CameraIcon, Ship as ShipIcon, Droplets, Church, Trees as TreeIcon, Snowflake, Binoculars } from 'lucide-react'
import PackagePricing from '@/components/PackagePricing'
import ContactCTA from '@/components/ContactCTA'

export default function HaridwarRishikeshTourismPage() {
  return (
    <main className="text-gray-800">

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/Haridwar.jpeg"
            alt="Sacred Ganges river with ghats and temples in Haridwar"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-orange-900/80 via-amber-800/60 to-orange-900/80"></div>
        </div>

        <div className="relative h-full flex items-center justify-center text-white px-6">
          <div className="max-w-4xl">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Temple className="w-6 h-6 text-yellow-400" />
              <span className="text-yellow-400 font-semibold tracking-wide">UTTARAKHAND SPIRITUAL TOUR</span>
            </div>

            <h1 className="text-5xl text-center md:text-7xl font-bold mb-6 leading-tight">
              Haridwar - Rishikesh
              <span className="block text-3xl md:text-5xl mt-2 text-orange-300">
                Gateway to the Divine • Yoga Capital • Sacred Ganges
              </span>
            </h1>

            <p className="text-xl text-center md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Experience the perfect blend of spirituality, adventure, and natural beauty
              with special tailor-made packages for divine seekers
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="bg-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-yellow-400 transition transform hover:scale-105">
                Explore Spiritual Journey
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-orange-800 transition transform hover:scale-105">
                Book Now
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm">Discover Spiritual Bliss</span>
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= HARIDWAR-RISHIKESH CIRCUIT PACKAGE ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10">

            {/* LEFT SIDE – ITINERARY */}
            <div className="lg:col-span-2 space-y-8">
              <Destination
                title="Haridwar - Rishikesh Spiritual Circuit"
                cta="Book now For 4N/5D"
                subtitle="Har Ki Pauri • Mansa Devi • Ganga Aarti • Laxman Jhula • Parmarth Niketan"
                content={[
                  `  Day 1: On arrival at Haridwar Railway Station / Jolly Grant Airport, you will be transferred to Hotel.
                      Check in and relax for a while. Lunch break.
                      Evening visit to Har Ki Pauri for the mesmerizing Ganga Aarti ceremony.
                      Explore the local markets and have dinner.
                      Breakfast & Dinner included. Overnight at Hotel in Haridwar.`,

                  `Day 2: After breakfast, visit Mansa Devi Temple via cable car, then Chandi Devi Temple.
                      Visit Maya Devi Temple and Daksha Mahadev Temple.
                      Lunch at local restaurant.
                      Evening free for personal activities and shopping.
                      Breakfast & Dinner included. Overnight at Hotel in Haridwar.`,

                  `Day 3: After breakfast, check-out and transfer to Rishikesh (20 km).
                      Check in to hotel and relax.
                      Visit Laxman Jhula and Ram Jhula suspension bridges.
                      Explore Parmarth Niketan Ashram and attend evening Ganga Aarti.
                      Lunch en-route.
                      Breakfast & Dinner included. Overnight at Hotel in Rishikesh.`,

                  `Day 4: After breakfast, visit Beatles Ashram and Neelkanth Mahadev Temple.
                      Explore yoga and meditation centers.
                      Optional adventure activities like river rafting and bungee jumping.
                      Lunch at local cafe.
                      Evening visit to local markets.
                      Breakfast & Dinner included. Overnight at Hotel in Rishikesh.`,
                  `Day 5: Early morning yoga session by the Ganges.
                      After breakfast, check-out & transfer to Haridwar Railway Station / Jolly Grant Airport
                      for your return journey on your departure time.
                      Breakfast included. Tour ends...`
                ]}
              />



              <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8 shadow-xl mt-5">
                <div className="grid md:grid-cols-1 gap-8">
                  <div className="bg-orange-100 rounded-xl p-6 mt-8">
                    <h4 className="font-bold text-orange-800 mb-3">Package Highlights</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-orange-600" />
                        <span className="text-gray-700">Divine Ganga Aarti at Har Ki Pauri</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-orange-600" />
                        <span className="text-gray-700">Cable car ride to Mansa Devi Temple</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-orange-600" />
                        <span className="text-gray-700">Yoga & Meditation in Rishikesh</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-orange-600" />
                        <span className="text-gray-700">Adventure Sports (Optional)</span>
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
                  Watch Haridwar-Rishikesh Video
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
      {/* ================= ADD-ON DESTINATIONS ================= */}
      <div className="bg-gray-50 py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto space-y-20">

          {/* PAGE TITLE */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-teal-700">
              Add-On Tour Packages
            </h1>
            <p className="text-gray-600">
              Explore Wildlife, Beaches & Eco Tourism Destinations
            </p>
          </div>


          <Destination
            title="Nainital Sightseeing Tour"
            cta="Book Now for 2N/3D"
            subtitle="Lake District of India – Scenic Hill Escape - Add on (or) Separately"
            content={[
              `Nainital is one of the most popular hill stations in Uttarakhand, known as the Lake District of India. Surrounded by lush hills and pristine lakes, Nainital offers boating, shopping at Mall Road, and panoramic Himalayan views.`,

              `Day 1: Arrival in Nainital
Meal Plan: Dinner
Arrival and hotel check-in. Evening walk at Mall Road. Enjoy local markets and lakeside views. Overnight stay in Nainital.`,

              `Day 2: Nainital Local Sightseeing
Meal Plan: Breakfast & Dinner
Visit Naini Lake for boating, Naina Devi Temple, Snow View Point and Tiffin Top. Optional visit to Bhimtal, Sattal and Naukuchiatal. Overnight stay in Nainital.`,

              `Day 3: Departure
Meal Plan: Breakfast
After breakfast, check-out and proceed for onward journey with beautiful hill memories.`
            ]}
          />
          <Destination
            title="Dehradun Sightseeing Tour"
            cta="Book Now for 2N/3D"
            subtitle="Capital of Uttarakhand – Nature & Heritage - Add on (or) Separately " 
            content={[
              `Dehradun, the capital city of Uttarakhand, is surrounded by the Shivalik hills and known for its pleasant climate, caves, waterfalls and colonial heritage buildings. It serves as the gateway to Mussoorie and Char Dham.`,

              `Day 1: Arrival in Dehradun
Meal Plan: Dinner
Arrival and transfer to hotel. Evening at leisure. Overnight stay in Dehradun.`,

              `Day 2: Dehradun Local Sightseeing
Meal Plan: Breakfast & Dinner
Visit Robber’s Cave (Guchhupani), Sahastradhara sulphur springs, Forest Research Institute and Tapkeshwar Temple. Overnight stay in Dehradun.`,

              `Day 3: Departure
Meal Plan: Breakfast
After breakfast, check-out and transfer to railway station/airport for onward journey.`
            ]}
          />
        </div>
      </div>


      {/* ================= ADVENTURE ACTIVITIES ================= */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Adventure Activities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Optional activities with extra cost
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Waves className="w-10 h-10 text-blue-600" />
                <h3 className="text-lg font-bold">River Rafting</h3>
              </div>
              <p className="text-gray-600 mb-4">White water rafting in Ganges</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Bird className="w-10 h-10 text-green-600" />
                <h3 className="text-lg font-bold">Bungee Jumping</h3>
              </div>
              <p className="text-gray-600 mb-4">India's highest bungee platform</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Compass className="w-10 h-10 text-purple-600" />
                <h3 className="text-lg font-bold">Trekking</h3>
              </div>
              <p className="text-gray-600 mb-4">Guided trekking in Himalayan foothills</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SPIRITUAL HIGHLIGHTS ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Spiritual Highlights</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key attractions and spiritual experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 text-center hover:shadow-lg transition">
              <Temple className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Har Ki Pauri</h3>
              <p className="text-sm text-gray-600">Sacred bathing ghats & Ganga Aarti</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 text-center hover:shadow-lg transition">
              <Droplets className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Ganga Aarti</h3>
              <p className="text-sm text-gray-600">Evening prayer ceremony</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 text-center hover:shadow-lg transition">
              <TreeIcon className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Yoga Centers</h3>
              <p className="text-sm text-gray-600">World's yoga capital</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 text-center hover:shadow-lg transition">
              <Church className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Ashrams</h3>
              <p className="text-sm text-gray-600">Parmarth Niketan & Beatles Ashram</p>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-6 text-center hover:shadow-lg transition">
              <Mountain className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Laxman Jhula</h3>
              <p className="text-sm text-gray-600">Iconic suspension bridge</p>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 text-center hover:shadow-lg transition">
              <CameraIcon className="w-12 h-12 text-teal-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Mansa Devi</h3>
              <p className="text-sm text-gray-600">Cable car temple ride</p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 text-center hover:shadow-lg transition">
              <Heart className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Meditation</h3>
              <p className="text-sm text-gray-600">Spiritual wellness centers</p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl p-6 text-center hover:shadow-lg transition">
              <Sun className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Neelkanth Temple</h3>
              <p className="text-sm text-gray-600">Ancient Shiva temple</p>
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
                <h3 className="font-bold text-gray-800 mb-2">Spiritual Visit Tips</h3>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Dress modestly when visiting temples</li>
                  <li>• Remove shoes before entering temples</li>
                  <li>• Carry offerings like flowers and prasad</li>
                  <li>• Respect local customs and traditions</li>
                </ul>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Calendar className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-800 mb-2">Best Time to Visit</h3>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• October to March: Pleasant weather for sightseeing</li>
                  <li>• July to September: Monsoon season (avoid)</li>
                  <li>• April to June: Summer months (hot but good for rafting)</li>
                  <li>• Festival times: Kumbh Mela special celebrations</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PACKAGE PRICING ================= */}
      <PackagePricing
        title="Haridwar-Rishikesh Tour Packages"
        subtitle="Choose your perfect spiritual journey duration"
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