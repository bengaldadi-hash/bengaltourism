"use client"

import Image from 'next/image'
import { MapPin, Calendar, Users, Star, Clock, Camera, Sun, Home, IndianRupee, Award, Compass, Utensils, Building, Trees, Ship, Sparkles, Train, ShoppingBag, Book, Mountain, Waves, Fish, Bird, Tent, Flame, PartyPopper, Heart, Sprout, Coffee, Leaf, TreePine, Stethoscope, HeartPulse, Shield, Globe, Phone, Mail, CheckCircle, AlertCircle, Activity, Brain, Bone, Eye, User, Bed, Wifi, Car, Utensils as UtensilsIcon, Wind, Building as Temple, Waves as WavesIcon, Compass as CompassIcon, Trees as TreesIcon, Camera as CameraIcon, Ship as ShipIcon, Snowflake } from 'lucide-react'
import PackagePricing from '@/components/PackagePricing'
import ContactCTA from '@/components/ContactCTA'

export default function LehLadakhTourPage() {
  return (
    <main className="text-gray-800">

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/leh2.avif"
            alt="Leh Ladakh mountains and monasteries"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-sky-900/80 via-blue-800/60 to-sky-900/80"></div>
        </div>

        <div className="relative h-full flex items-center justify-center text-white px-6">
          <div className="max-w-4xl">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Mountain className="w-6 h-6 text-sky-400" />
              <span className="text-sky-400 font-semibold tracking-wide">LEH LADAKH TOURISM</span>
            </div>

            <h1 className="text-5xl text-center md:text-7xl font-bold mb-6 leading-tight">
              Land of High Passes
              <span className="block text-3xl md:text-5xl mt-2 text-sky-300">
                Leh • Nubra Valley • Pangong Lake • Khardung La • Shanti Stupa
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-center mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Experience the majestic landscapes of Leh & Ladakh with special tailor-made
              adventure packages designed on request
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="bg-sky-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-sky-500 transition transform hover:scale-105">
                Explore Ladakh
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-sky-800 transition transform hover:scale-105">
                Book Now
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm">Discover High Passes</span>
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MAIN LADAKH PACKAGE ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10">

            {/* LEFT SIDE – ITINERARY */}
            <div className="lg:col-span-2 space-y-8">
          <Destination
            title="Leh Ladakh Circuit Package"
            cta="Book now For 6N/7D"
            subtitle="Leh - Nubra Valley - Pangong Lake - Khardung La - Shanti Stupa"
            content={[
              ` Day 1: Arrival in Leh & Acclimatization
Arrive at Leh airport and transfer to your hotel.
Rest and acclimatize to the high altitude (11,000 ft).
In the afternoon, you can take a light walk to nearby spots like the Shanti Stupa and Leh Palace.`,

              `Day 2: Leh Local Sightseeing (Sham Valley)
After breakfast, go on a day trip along the Leh-Srinagar highway to the Sham Valley region.
Visit key attractions:
Hall of Fame museum
Gurudwara Pathar Sahib
Magnetic Hill
Sangam Point (confluence of the Indus and Zanskar rivers)
Return to Leh in the evening for dinner and an overnight stay.`,

              `Day 3: Leh to Nubra Valley (via Khardung La Pass)
Drive to Nubra Valley via the famous Khardung La Pass, one of the world's highest motorable roads.
Check into your camp or hotel in Hunder/Diskit.
In the evening, enjoy the sand dunes and a unique double-humped Bactrian camel safari.`,

              `Day 4: Nubra Valley to Pangong Tso (via Shyok route)
Visit the Diskit Monastery, known for its large Buddha statue.
Drive to Pangong Lake via the scenic Shyok village route.
Enjoy the breathtaking views of the lake, which changes colors and extends across the international border with China.
Overnight stay in a camp near Pangong Lake.`,

              `Day 5: Pangong Tso to Leh (via Chang La Pass)
Witness the sunrise at Pangong Lake and then drive back to Leh.
The route back will take you via the Chang La Pass.
En route, you can visit the Hemis or Thiksey Monasteries.
Overnight stay in a hotel in Leh.
`,

              `Day 6: Leh Excursion to Monasteries/Leisure
This day can be used for visiting any remaining monasteries not covered earlier, such as Hemis Gompa, the largest monastic foundation of Ladakh.
Alternatively, you can spend the day at leisure for shopping in the Leh main market or cafe hopping.
Overnight stay in Leh.`,

              `Day 7: Departure from Leh
After an early breakfast, you will be transferred to the Leh Kushok Bakula Rimpochee Airport for your onward journey.`
            ]}
          />
            <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-2xl p-8 shadow-xl mt-5">
            <div className="grid md:grid-cols-1 gap-8">
              <div className="bg-sky-100 rounded-xl p-6 mt-8">
                <h4 className="font-bold text-sky-800 mb-3">Package Highlights</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-sky-600" />
                    <span className="text-gray-700">Khardung La Pass - Highest Motorable Road</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-sky-600" />
                    <span className="text-gray-700">Pangong Lake - 134 km High-Altitude Lake</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-sky-600" />
                    <span className="text-gray-700">Nubra Valley - Shyok River Valley</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-sky-600" />
                    <span className="text-gray-700">Double-Humped Camel Safari</span>
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
                  Watch Leh Ladakh Video
                </h3>

                <div className="aspect-video rounded-xl overflow-hidden">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                    title="Leh Ladakh Experience"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>

              {/* Advertisement Section */}
              <div className="bg-gradient-to-br from-sky-500 to-blue-500 text-white rounded-3xl shadow-lg p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">
                  🚀 Paste Your Advertisement Here
                </h3>
                <p className="text-sm opacity-90">
                  Promote your brand, offer or travel deals here.
                  This space is perfect for partner promotions.
                </p>
                <button className="mt-6 bg-white text-sky-600 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition">
                  Contact For Promotion
                </button>
              </div>

            </div>
          </div>
        
        </div>
      </section>

      {/* ================= ZANSKAR ADD-ON ================= */}
      {/* <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-6">
          <Destination
            title="Add-on Zanskar Valley"
            cta="Book Now For 3N/4D"
            subtitle="Frozen River Trek - Chadar Trek"
            content={[
              `Day 1: Leh to Zanskar, After breakfast, drive from Leh to Zanskar Valley via Kargil.
              Visit Mulbekh - giant rock carving of Maitreya Buddha.
              Lunch en-route. Check-in at Zanskar camp/hotel.
              Evening visit Karsha Monastery - largest monastery in Zanskar.
              Dinner & Overnight at Camp in Zanskar.`,

              `Day 2: Zanskar Exploration, After breakfast, visit Padum - administrative center of Zanskar.
              Explore Sani Monastery - one of the oldest Tibetan Buddhist sites.
              Lunch en-route. Post Lunch, visit Bardan Monastery and Phugtal Monastery.
              Evening walk along the frozen Zanskar River (winter) or river rafting (summer).
              Dinner & Overnight at Camp in Zanskar.`,

              `Day 3: Chadar Trek Experience, Early morning start the famous Chadar Trek on frozen Zanskar River.
              Experience walking on the frozen river surrounded by stunning Himalayan peaks.
              Lunch en-route. Post lunch, continue trekking to Tilat Do.
              Evening return to camp for traditional Ladakhi dinner.
              Dinner & Overnight at Camp in Zanskar.`,

              `Day 4: Departure, Breakfast & check-out from Camp.
              Visit local villages and interact with Zanskar community.
              Lunch en-route.
              Then drop-off at Leh Airport for your onward journey.
              Tour ends...`
            ]}
          />

          <div className="bg-white rounded-2xl shadow-xl p-8 mt-5">
            <div className="grid md:grid-cols-1 gap-8">
              <div className="bg-green-100 rounded-xl p-6 mt-8">
                <h4 className="font-bold text-green-800 mb-3">Zanskar Highlights</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-gray-700">Chadar Trek - Frozen River Adventure</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-gray-700">Phugtal Monastery - Cave Monastery</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-gray-700">Zanskar River - Frozen/White Water</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* ================= LADAKH HIGHLIGHTS ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Ladakh Highlights</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key attractions and experiences in the land of high passes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-xl p-6 text-center hover:shadow-lg transition">
              <Mountain className="w-12 h-12 text-sky-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2">High Mountain Passes</h3>
              <p className="text-sm text-gray-600">Khardung La, Chang La, Zoji La</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 text-center hover:shadow-lg transition">
              <Waves className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Crystal Clear Lakes</h3>
              <p className="text-sm text-gray-600">Pangong Lake, Tso Moriri Lake</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 text-center hover:shadow-lg transition">
              <Building className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Ancient Monasteries</h3>
              <p className="text-sm text-gray-600">Thiksey, Hemis, Diskit Monastery</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 text-center hover:shadow-lg transition">
              <CameraIcon className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Adventure Activities</h3>
              <p className="text-sm text-gray-600">Camel Safari, River Rafting, Trekking</p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 text-center hover:shadow-lg transition">
              <Snowflake className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Snow Landscapes</h3>
              <p className="text-sm text-gray-600">Snow-capped peaks, frozen rivers</p>
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
                  <li>• April to June: Best time for pleasant weather and clear skies</li>
                  <li>• September to October: Autumn season with clear views</li>
                  <li>• June to August: Green landscapes, occasional rains</li>
                  <li>• Avoid December to March due to heavy snowfall and road closures</li>
                </ul>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Calendar className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-800 mb-2">Travel Tips</h3>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Proper acclimatization is essential to avoid altitude sickness</li>
                  <li>• Carry warm clothing throughout the year</li>
                  <li>• Carry Diamox tablets for altitude sickness prevention</li>
                  <li>• Book accommodations in advance due to limited options</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>


      <PackagePricing
        title="Leh Ladakh Tour Packages"
        subtitle="Choose your perfect high-altitude adventure"
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
