"use client"

import Image from 'next/image'
import { MapPin, Calendar, Users, Star, Clock, Camera, Sun, Home, IndianRupee, Award, Compass, Utensils, Building, Trees, Ship, Sparkles, Train, ShoppingBag, Book, Mountain, Waves, Fish, Bird, Tent, Flame, PartyPopper, Heart, Sprout, Coffee, Leaf, TreePine, Stethoscope, HeartPulse, Shield, Globe, Phone, Mail, CheckCircle, AlertCircle, Activity, Brain, Bone, Eye, User, Bed, Wifi, Car, Utensils as UtensilsIcon, Wind, Building as Temple, Waves as WavesIcon, Compass as CompassIcon, Trees as TreesIcon, Camera as CameraIcon, Ship as ShipIcon, Snowflake } from 'lucide-react'
import PackagePricing from '@/components/PackagePricing'
import ContactCTA from '@/components/ContactCTA'

export default function SpitiValleyTourPage() {
  return (
    <main className="text-gray-800">

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/spiti1.jpeg"
            alt="Spiti Valley cold desert mountains and monasteries"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 via-indigo-800/60 to-blue-900/80"></div>
        </div>

        <div className="relative h-full flex items-center justify-center text-white px-6">
          <div className="max-w-4xl">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Mountain className="w-6 h-6 text-blue-400" />
              <span className="text-blue-400 font-semibold tracking-wide">SPITI VALLEY TOURISM</span>
            </div>

            <h1 className="text-5xl text-center md:text-7xl font-bold mb-6 leading-tight">
              Cold Desert Adventure
              <span className="block text-3xl md:text-5xl mt-2 text-blue-300">
                Shimla • Kaza • Key Monastery • Hikkim • Langza • Chandratal
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-center mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Experience the breathtaking beauty of Spiti Valley with special tailor-made
              adventure packages designed on request
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-blue-500 transition transform hover:scale-105">
                Explore Spiti Valley
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-800 transition transform hover:scale-105">
                Book Now
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm">Discover Cold Desert</span>
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MAIN SPITI PACKAGE ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10">

            {/* LEFT SIDE – ITINERARY */}
            <div className="lg:col-span-2 space-y-8">
          <Destination
            title="Spiti Valley Circuit Package"
            cta="Book now For 6N/7D"
            subtitle=""
            content={[
              `Day 1: Embark on a delightful Himachal vacation with a pickup from Chandigarh/ Delhi Airport/Railway station. Arrive in Manali within 8 hours and check into your pre-booked hotel. Enjoy an evening of independent exploration, taking in the local charm. Indulge in a delicious dinner at the hotel and settle in for an overnight stay.`,

              `Day-2:Check out from the hotel this morning and head towards Chandertal, traversing the renowned Rohtang Pass, known for its adventurous allure. Continue the journey to Chandertal Lake, where you'll check into the camp. Spend the evening marveling at the picturesque lake views. Conclude the day with a delightful dinner at the camp, followed by an overnight stay amidst the serene surroundings.`,

              `Day-3: Today Morning check out from camp and then proceed to Kaza into the desolate and stunning brown-badland landscape and approach Chattru and Batal. At 14,931 feet, we catch our first chill at the August Kunzum Pass and then descend into Losar Village, the first in Spiti Valley. Having warmed up with a cup of chai (tea), we continue driving through the stunning landscapes and reach Kaza where we spend the night at a comfortable hotel.`,

              `Day-4: After Breakfast Leave For Kaza Sightseeing By Visiting Kee Monastery & Gette Village (the Highest Motorable Connected Road In the World) & Kibber Village For The Ancient Monastery Built On What Is Believed To Have Been A Crater Of An Extinct Volcano. The Gompa Situated Above The Village Is One Of The Best Preserved In The Region. On The Return Journey To Kaza, You Are Rewarded With Some Excellent Views Of The Damul Village. Overnight stay at hotel. Guard over the pass and ward off the evil, you will reach Chandertaal Lake by afternoon and enjoy the scenic view of the lake till evening. Dinner and overnight stay at the Camp.`,

              `Day-5: After a delicious breakfast, we continue our Spiti Valley tour and drive towards the only other town of Spiti Valley – Tabo. Enroute covers Dhankar Valley. Cover Dhankar Gompa which perches precariously between eroded rocky pinnacles on the edge of a cliff. If time permits, do take an hour’s climb above the village to visit the stunning turquoise Dhankar Tso or Dhankar Lake which offers views over the valley and towards the twin peaks of Mane Rang (6593 meters). After sightseeing proceed to Tabo. Also known as the ‘Ajanta of the Himalayas’, Tabo houses the 1020-year-old Tabo Monastery – which is a UNESCO world heritage site and is famous for its ancient paintings that depict the life of The Buddha, and intricate portraits of gods and demons along with life-size statues of bodhisattvas, in a fusion of western Tibetan, Indian and Kashmiri styles. After that return back to Kaza for an Overnight stay.`,

              `Day-6: Following breakfast, depart from the hotel and proceed towards Manali. En route, experience the breathtaking beauty of Rohtang Pass, where you can admire Rani Nala, Marhi, Gulaba, Kothi, Palchan, and Nehru Kund. Continue the journey and arrive in Manali for an overnight stay at the hotel, enjoying the scenic vistas along the way.`,

              `Day-7: Today check out from the hotel and proceed back to Chandigarh/Delhi. On the way visit Pashmina Shawl Factory and also try out your hands on white water River Rafting in Kullu. More places to cover enroute will be Vaishno Devi Temple, Hanogi Mata Temple, Pandoh Dam & Sundar Nagar Lake. Resume your journey back to Chandigarh with ever-fascinating memories.`,

           
            ]}
          />
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-xl mt-5">
            <div className="grid md:grid-cols-1 gap-8">
              <div className="bg-blue-100 rounded-xl p-6 mt-8">
                <h4 className="font-bold text-blue-800 mb-3">Package Highlights</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    <span className="text-gray-700">Key Monastery - Largest Spiti Monastery</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    <span className="text-gray-700">Chandratal Lake - Moon Lake</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    <span className="text-gray-700">Kibber Village - Highest Motorable Village</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    <span className="text-gray-700">World's Highest Post Office - Hikkim</span>
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
                  Watch Spiti Valley Video
                </h3>

                <div className="aspect-video rounded-xl overflow-hidden">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                    title="Spiti Valley Experience"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>

              {/* Advertisement Section */}
              <div className="bg-gradient-to-br from-blue-500 to-indigo-500 text-white rounded-3xl shadow-lg p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">
                  🚀 Paste Your Advertisement Here
                </h3>
                <p className="text-sm opacity-90">
                  Promote your brand, offer or travel deals here.
                  This space is perfect for partner promotions.
                </p>
                <button className="mt-6 bg-white text-blue-600 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition">
                  Contact For Promotion
                </button>
              </div>

            </div>
          </div>
        
        </div>
      </section>

      {/* ================= PIN VALLEY ADD-ON ================= */}
      {/* <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-6">
          <Destination
            title="Add-on Pin Valley National Park"
            cta="Book Now For 2N/3D"
            subtitle="Wildlife Sanctuary - Snow Leopard Habitat"
            content={[
              `Day 1: Arrival in Mud Village, Our representative will receive you at Kaza and transfer to Mud Village in Pin Valley.
              Check into Camp/Guest House. Lunch break.
              Post lunch, explore Mud Village and local culture.
              Evening wildlife spotting for Himalayan animals.
              Dinner & Overnight at Camp in Mud Village.`,

              `Day 2: Pin Valley Exploration, After breakfast, trek to Pin Valley National Park.
              Spot snow leopards, Himalayan ibex, and blue sheep.
              Visit Kungri Monastery - oldest monastery in Spiti.
              Lunch en-route. Post Lunch, explore the cold desert ecosystem.
              Evening bonfire and traditional Spiti cuisine.
              Dinner & Overnight at Camp in Mud Village.`,

              `Day 3: Departure, Breakfast & check-out from Camp.
              Visit local villages and interact with the Spiti community.
              Lunch en-route.
              Then drop-off at Kaza for your onward journey.
              Tour ends...`
            ]}
          />

          <div className="bg-white rounded-2xl shadow-xl p-8 mt-5">
            <div className="grid md:grid-cols-1 gap-8">
              <div className="bg-green-100 rounded-xl p-6 mt-8">
                <h4 className="font-bold text-green-800 mb-3">Pin Valley Highlights</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-gray-700">Snow Leopard Sighting</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-gray-700">Kungri Monastery</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-gray-700">Himalayan Wildlife</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* ================= SPITI HIGHLIGHTS ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Spiti Valley Highlights</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key attractions and experiences in the cold desert
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 text-center hover:shadow-lg transition">
              <Mountain className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2">High Altitude Passes</h3>
              <p className="text-sm text-gray-600">Kunzum Pass, Rohtang Pass</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 text-center hover:shadow-lg transition">
              <Building className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Ancient Monasteries</h3>
              <p className="text-sm text-gray-600">Key Monastery, Tabo Monastery</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 text-center hover:shadow-lg transition">
              <CameraIcon className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Scenic Landscapes</h3>
              <p className="text-sm text-gray-600">Chandratal Lake, Spiti River</p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 text-center hover:shadow-lg transition">
              <Bird className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Wildlife Safari</h3>
              <p className="text-sm text-gray-600">Snow Leopards, Himalayan Ibex</p>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 text-center hover:shadow-lg transition">
              <Snowflake className="w-12 h-12 text-cyan-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Cold Desert</h3>
              <p className="text-sm text-gray-600">High-altitude desert terrain</p>
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
                  <li>• May to October: Best time for Spiti Valley visit</li>
                  <li>• June to September: Pleasant weather, clear roads</li>
                  <li>• July to August: Green landscapes, occasional rains</li>
                  <li>• Avoid November to April due to heavy snowfall</li>
                </ul>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Calendar className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-800 mb-2">Travel Tips</h3>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Carry warm clothing even in summer (temperature drops)</li>
                  <li>• Acclimatize properly to avoid altitude sickness</li>
                  <li>• Carry basic medicines and first aid kit</li>
                  <li>• Book accommodations in advance due to limited options</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>


      <PackagePricing
        title="Spiti Valley Tour Packages"
        subtitle="Choose your perfect Himalayan adventure"
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
