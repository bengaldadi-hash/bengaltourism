"use client"

import Image from 'next/image'
import { MapPin, Calendar, Users, Star, Clock, Camera, Sun, Home, IndianRupee, Award, Compass, Utensils, Building, Trees, Ship, Sparkles, Train, ShoppingBag, Book, Mountain, Waves, Fish, Bird, Tent, Flame, PartyPopper, Heart, Sprout, Coffee, Leaf, TreePine, Stethoscope, HeartPulse, Shield, Globe, Phone, Mail, CheckCircle, AlertCircle, Activity, Brain, Bone, Eye, User, Bed, Wifi, Car, Utensils as UtensilsIcon, Wind, Building as Temple, Waves as WavesIcon, Compass as CompassIcon, Trees as TreesIcon, Camera as CameraIcon, Snowflake } from 'lucide-react'
import PackagePricing from '@/components/PackagePricing'
import ContactCTA from '@/components/ContactCTA'

export default function HimachalTourismPage() {
  return (
    <main className="text-gray-800">

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/Himachal.jpeg"
            alt="Snowy mountains of Himachal Pradesh with pine forests"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 via-indigo-800/60 to-blue-900/80"></div>
        </div>

        <div className="relative h-full flex items-center justify-center text-white px-6">
          <div className="max-w-4xl">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Mountain className="w-6 h-6 text-yellow-400" />
              <span className="text-yellow-400 font-semibold tracking-wide">HIMACHAL PRADESH</span>
            </div>
            
            <h1 className="text-5xl text-center md:text-7xl font-bold mb-6 leading-tight">
              Visit & Explore Himachal
              <span className="block text-3xl md:text-5xl mt-2 text-blue-300">
                Shimla • Manali • Kullu • Kufri • Rohtang Pass
              </span>
            </h1>

            <p className="text-xl text-center md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Experience the 'Valley of Gods' with special tailor-made 
              combination packages designed on request
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="bg-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-yellow-400 transition transform hover:scale-105">
                Explore Himachal
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

      {/* ================= HIMACHAL HIGHLIGHTS ================= */}

      {/* ================= HIMACHAL MAIN PACKAGE ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10">

            {/* LEFT SIDE – ITINERARY */}
            <div className="lg:col-span-2 space-y-8">
          <Destination
            title="Himachal Pradesh Circuit"
            cta="Book now For 6N/7D"
            subtitle="Simla - Kullu Manali - Dehradun - Muissourie"
            content={[
              `Day 1: Arrival in Shimla, Arrive at Delhi / Chandigarh Airport / Railway Station and drive to Shimla.
              Upon arrival in Shimla, check-in to hotel. Lunch break.
              Enjoy the rest of the day at leisure.
              Return in evening. Free to explore local market area.
              Dinner & Overnight at Hotel/Resort in Shimla.`,

              `Day 2: Explore Shimla, After enjoying breakfast, proceed for a half-day sightseeing tour of Kufri.
              Back to Shimla. Lunch enroute.
              Post lunch, visit Kalibari, Shimla State Museum, Jaku Hills, etc.
              Return in evening. Free to explore local Mall area.
              Dinner & Overnight at Hotel/Resort in Shimla.`,

              `Day 3: Explore Manali, After enjoying breakfast, check-out & drive towards Manali.
              En-route, visit Roerich Art Gallery at Naggar.
              Lunch en-route. Check-in to Hotel.
              Then visit Hadimba Temple, The Mall, Vaishno Devi Village, etc.
              Enjoy the rest of the day at leisure at Mall area.
              Return in evening. Free to explore local area.
              Dinner & Overnight at Hotel/Resort in Manali.`,

              `Day 4: Rohtang Pass Excursion, After a hearty breakfast, proceed for a half-day tour of Rohtang Pass / Snow Line.
              Visit to Rohtang Pass not included in the cost & subject to weather conditions and road being open.
              (As per Himachal Govt. Rules, outsiders can't go to Rohtang Pass & Guest have to arrange own Car/Vehicle
              from local Union on Direct Payment Basis).
              Lunch en-route. Return in evening.
              Free to explore local area.
              Dinner & Overnight at Hotel/Resort in Manali.`,

              `Day 5: Dharamshala Visit, After enjoying breakfast, proceed for Dharamshala, holy abode of His Holiness, the Dalai Lama.
              Local sightseeing of Dalhousie Churches, Subhash Baoli, Bara Pather Panchpula, etc, can be visited as per time.
              Return in evening. Free to explore local area.
              Dinner & Overnight at Hotel/Resort in Manali/Dharamshala/Dalhousie.`,

              `Day 6: Kullu Valley & Delhi, After enjoying breakfast, Check-out proceed towards Delhi / Chandigarh after stop-over at Kullu Valley.
              It is also known as the 'valley of gods', is a beautiful district in the state of Himachal Pradesh.
              Visit Mata Vaishno Devi Tirth temple located just 5 km from Kullu.
              Lunch en-route. Proceed towards your destination & Check-in at Hotel.
              Enjoy the rest of the day at leisure exploring markets on your own.
              Return in evening. Free to explore local area.
              Dinner & Overnight at Hotel/Resort in Delhi / Chandigarh.`,

              `Day 7: Departure, Breakfast & check-out from Hotel.
              Visit some local area if time permits.
              Lunch en-route.
              Then leave to drop-off at Delhi / Chandigarh Airport / Station for your onward / return train journey
              flight to your destination as per your departure timing.
              Tour ends...`
            ]}
          />

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-xl mt-5">
            <div className="grid md:grid-cols-1 gap-8">
              <div className="bg-blue-100 rounded-xl p-6 mt-8">
                <h4 className="font-bold text-blue-800 mb-3">Package Highlights</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    <span className="text-gray-700">Shimla - The Queen of Hills</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    <span className="text-gray-700">Manali - Valley of Gods</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    <span className="text-gray-700">Rohtang Pass Excursion</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    <span className="text-gray-700">Dharamshala - Holy Abode</span>
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
                  Watch Himachal Pradesh Video
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

      {/* ================= HIMACHAL HIGHLIGHTS ================= */}

      {/* ================= CHANDIGARH ADD-ON ================= */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-6">
          <Destination
            title="Add-on Chandigarh"
            cta="Book Now For 2N/3D"
            subtitle="Wagah Border - Golden Temple"
            content={[
              `Day 1: Arrival in Chandigarh, On your arrival at Chandigarh, we will proceed to Check into Hotel.
              Lunch break. Post lunch, visit Wagah Border in the evening.
              Return & free to explore local area.
              Dinner & Overnight at Hotel/Resort in Chandigarh.`,

              `Day 2: Explore Chandigarh, After breakfast, visit Rose Garden, Rock Garden, Golden Temple (a must visit), etc.
              Attend lunch at Langar of Golden Temple (or) any local restaurant.
              Post lunch, visit Jalianwala Bagh, Hall Bazaar, etc.
              Return in evening. Free to explore local area.
              Dinner & Overnight at Hotel/Resort in Chandigarh.`,

              `Day 3: Departure, Breakfast & check-out from Hotel.
              Visit some local area if time permits.
              Lunch en-route.
              Then leave to drop-off at Chandigarh Airport / Station for your onward / return train journey
              flight to your destination as per your departure timing.
              Tour ends...`
            ]}
          />

          <div className="bg-white rounded-2xl shadow-xl p-8 mt-5">
            <div className="grid md:grid-cols-1 gap-8">
              <div className="bg-orange-100 rounded-xl p-6 mt-8">
                <h4 className="font-bold text-orange-800 mb-3">Chandigarh Highlights</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-600" />
                    <span className="text-gray-700">Rose Garden & Rock Garden</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-600" />
                    <span className="text-gray-700">Golden Temple - Must Visit</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-600" />
                    <span className="text-gray-700">Wagah Border Experience</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-6">
          <Destination
            title="Add-on Delhi, Agra & Mathura"
            cta="Book Now For 3N/4D"
            subtitle="Taj Mahal – India Gate – Red Fort – Vrindavan Temples"
            content={[
              `Day 1: Arrival in Delhi, Arrival at Delhi Airport / Railway Station. Transfer to hotel.
              Visit India Gate, Rashtrapati Bhavan (Drive Pass), Parliament House,
              Lotus Temple & Qutub Minar. Evening free for shopping at Connaught Place.
              Overnight stay in Delhi.`,

              `Day 2: Delhi – Agra, After breakfast, drive to Agra. Visit the magnificent Taj Mahal,
              Agra Fort & Mehtab Bagh. Explore local handicraft markets.
              Overnight stay in Agra.`,

              `Day 3: Agra – Mathura – Vrindavan – Delhi, After breakfast, drive to Mathura. Visit Shri Krishna Janmabhoomi Temple,
              Dwarkadhish Temple & Banke Bihari Temple in Vrindavan.
              Attend evening aarti. Later return to Delhi.
              Overnight stay in Delhi.`,

              `Day 4: Departure, Breakfast at hotel & check-out. Visit Red Fort & Jama Masjid
              if time permits. Transfer to Airport / Railway Station
              for onward journey. Tour ends with memorable experiences.`
            ]}
          />

          <div className="bg-white rounded-2xl shadow-xl p-8 mt-5">
            <div className="grid md:grid-cols-1 gap-8">
              <div className="bg-orange-100 rounded-xl p-6 mt-8">
                <h4 className="font-bold text-orange-800 mb-3">Tour Highlights</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-600" />
                    <span className="text-gray-700">Taj Mahal – World Wonder</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-600" />
                    <span className="text-gray-700">India Gate & Qutub Minar</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-600" />
                    <span className="text-gray-700">Mathura & Vrindavan Temple Darshan</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ================= HIMACHAL HIGHLIGHTS ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Himachal Highlights</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key attractions and experiences in the 'Valley of Gods'
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 text-center hover:shadow-lg transition">
              <Mountain className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Hill Stations</h3>
              <p className="text-sm text-gray-600">Shimla, Kullu, Manali, Kufri</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 text-center hover:shadow-lg transition">
              <Snowflake className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Snow Points</h3>
              <p className="text-sm text-gray-600">Rohtang Pass, Kullu Valley</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 text-center hover:shadow-lg transition">
              <Building className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Sacred Sites</h3>
              <p className="text-sm text-gray-600">Dharamshala, Hadimba Temple, Mata Vaishno Devi</p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 text-center hover:shadow-lg transition">
              <TreesIcon className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Natural Beauty</h3>
              <p className="text-sm text-gray-600">Pine forests, Apple orchards, Kullu Valley</p>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 text-center hover:shadow-lg transition">
              <CameraIcon className="w-12 h-12 text-cyan-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Adventure</h3>
              <p className="text-sm text-gray-600">Paragliding, River rafting, Trekking</p>
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
                <h3 className="font-bold text-gray-800 mb-2">Rohtang Pass Information</h3>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Subject to weather conditions and road being open</li>
                  <li>• Outsiders need to arrange own vehicle from local Union</li>
                  <li>• Direct payment basis for local transport</li>
                  <li>• Not included in package cost</li>
                </ul>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Calendar className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-800 mb-2">Best Time to Visit</h3>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• March to June: Pleasant weather, blooming flowers</li>
                  <li>• October to February: Snow-covered landscapes</li>
                  <li>• December to January: Winter sports and snow activities</li>
                  <li>• Avoid monsoon (July-September) for clear mountain views</li>
                </ul>
              </div>
            </div>
        </div>
         </div>
      </section>

      {/* ================= PACKAGE PRICING ================= */}
      <PackagePricing 
        title="Himachal Tour Packages"
        subtitle="Choose your perfect mountain adventure duration"
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
