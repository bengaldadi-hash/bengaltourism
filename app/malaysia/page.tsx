"use client"

import Image from 'next/image'
import { MapPin, Calendar, Users, Star, Clock, Camera, Sun, Home, IndianRupee, Award, Compass, Utensils, Building, Trees, Ship, Sparkles, Train, ShoppingBag, Book, Mountain, Waves, Fish, Bird, Tent, Flame, PartyPopper, Heart, Sprout } from 'lucide-react'
import ContactCTA from '@/components/ContactCTA'
import PackagePricing from '@/components/PackagePricing'
import TourPricingSection from '@/components/TourPricingSection'

export default function MalaysiaPage() {
  return (
    <main className="text-gray-800">

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200"
            alt="Tropical rainforest with Petronas Twin Towers and cultural village in Malaysia"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-green-900/80 via-emerald-800/60 to-green-900/80"></div>
        </div>

        <div className="relative h-full flex items-center justify-center text-white px-6">
          <div className="max-w-4xl">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Trees className="w-6 h-6 text-yellow-400" />
              <span className="text-yellow-400 font-semibold tracking-wide">Malaysia Tropical Paradise</span>
            </div>

            <h1 className="text-5xl md:text-7xl text-center font-bold mb-6 leading-tight">
              Malaysia
              <span className="block text-3xl md:text-5xl mt-2 text-green-300">
                Kuala Lumpur • Genting Highlands • Batu Caves
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-center mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Experience the ultimate tropical paradise with stunning rainforests,
              cultural heritage, and magnificent highland adventures
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="bg-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-yellow-400 transition transform hover:scale-105">
                Explore Malaysia
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-green-800 transition transform hover:scale-105">
                Book Tropical Adventure
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm">Discover tropical Malaysia</span>
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-gray-50 py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto space-y-16">

          {/* HEADER */}
          <div className="flex flex-col  space-y-2">


            <div className='flex gap-5 items-center'>
              <h1 className="text-4xl md:text-5xl font-bold text-blue-700">
                Malaysia Tour Itinerary
              </h1>
              <a href='/book-tour' className='bg-yellow-500 px-4 py-4 text-white rounded-full'>
                Book now For 3N/4D
              </a>
            </div>
            <p className="text-gray-600">
              Kuala Lumpur & Genting Highlands – 4 Days
            </p>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10">
            <div className="lg:col-span-2 space-y-8">

              {/* DAY 1 */}
              <div className="bg-white shadow-xl rounded-3xl p-8 border-l-4 border-blue-500 flex flex-col ">
                <h2 className="text-2xl font-semibold text-blue-600 mb-4">
                  Day – 1 : Arrival & Kuala Lumpur City Tour
                </h2>
                <div className="text-gray-700 leading-8 flex-grow">
                  Arrival at Kuala Lumpur Airport by Air Asia Airlines and Meet and greet at airport and t transfer to hotel. . Pick up  from hotel, we proceed for panoramic city tour of Kuala Lumpur to get a closer look at Kuala Lumpur's most famou landmarks, like the King's Palace, National Monument, National Mosque, Jamed Mosque, Merdeka Square and National Museum. Admire Malaysia's most renowned structure, the world famous Petronas Twin Towers and enjoy a photo stop. See the magnificent Menara K L Tower - the tallest tower in Southeast Asia. Evening you can shop around at Loyat Plaza, Lot 10 or Bukit Bitang area of Kuala Lampur city. Overnight at hotel.
                </div>
              </div>
              <div className="bg-white shadow-xl rounded-3xl p-8 border-l-4 border-green-500  flex flex-col ">
                <h2 className="text-2xl font-semibold text-green-600 mb-4">
                  Day – 2 : Batu Caves & Firefly Tour
                </h2>
                <div className="text-gray-700 leading-8 flex-grow">
                  Morning after breakfast. Pick up at 11.00A.M from hotel’s lobby and proceed to Batu Caves for a short tour. Batu Caves that comprises of three caverns and several smaller caves. It is the shrine of Lord Murugah, a Hindu deity – a flight of 272 steps lead up to the temple cave. Tour continues to Kuala Selangor town in the quiet hamlet of Kampung Kuantan, one of the largest firefly colonies in the world. On arrival at Kuala Selangor, visit “Kota Melawati” formerly known as “Fort Altingsburg”, the execution block, royal mausoleum and colonial buildings. A bird sanctuary park at the foot of Bukit Melawati is an ideal place for bird watchers to watch migratory birds. Also found are silvered – leaf monkeys, butterflies etc. Next proceed to Kampung Kuantan – the highlight of the tour. Row upstream in a small un-motorised boat (tongkang) in the quiet darkness to witness the blinking trees. This scintillating display of fireflies portrays an image of a flashing Christmas tree. The synchronized, rhythmic flashing is produced by the thousands of fireflies found in the mangrove swamp of Kampung Kuantan. The skilled local oarsmen make this experience a memorable and unforgettable one. Dinner at a famous seafood restaurant. Transfer back to hotel
                </div>
              </div>
              {/* DAY 3 */}
              <div className="bg-white shadow-xl rounded-3xl p-8 border-l-4 border-purple-500 flex flex-col ">
                <h2 className="text-2xl font-semibold text-purple-600 mb-4">
                  Day – 3 : Genting Highlands
                </h2>
                <div className="text-gray-700 leading-8 flex-grow">
                  Enjoy your breakfast in the morning, check out from hotel and Transfer to( 67 Kms approx ) Genting highland. You will be taken an aerial route (Cable car) to top of the hills. Arrival at Genting highland, check in at hotel. Enjoy snow world tour (ticket only) in Genting. Genting Highlands which is a mountain retreat cum casino 6,000 feet above sea- level and located a moderate distance away from the city. We'll stop at the skyway cable-car station for a ride up by cable-car, where you'll be amazed at the magnificent view of mountains and rain forest scenery. There are many things to do in Genting Highlands, today. Overnight at hotel.
                </div>
              </div>
              <div className="bg-white shadow-xl rounded-3xl p-8 border-l-4 border-yellow-500  flex flex-col ">
                <h2 className="text-2xl font-semibold text-yellow-600 mb-4">
                  Day – 4 : Departure
                </h2>
                <div className="text-gray-700 leading-8 flex-grow">
                  Morning after breakfast drive to Kuala Lampur Airport at airport to catch your flight to your respective destination. End of the wonderful memory of Malaysia.


                </div>
              </div>
            </div>
            <div className="space-y-8 lg:sticky lg:top-24 h-fit">

              {/* Video Section */}
              <div className="bg-white rounded-3xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  Watch Malaysia Tour Video
                </h3>

                <div className="aspect-video rounded-xl overflow-hidden">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                    title="Italy Tour"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>

              {/* Advertisement Section */}
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

          {/* EXTENSION */}
          <div className="bg-blue-50 border border-blue-200 rounded-3xl p-8 text-center shadow-lg">
            <p className="text-gray-700 leading-8">
              (You may extend your tour for 3-4 more days covering Singapore / Bali / Indonesia at a minimum cost / free*)
            </p>
          </div>

          {/* RECOMMENDED */}
          <div className="bg-white rounded-3xl shadow-xl p-8 text-center">
            <h3 className="text-2xl font-semibold text-indigo-600 mb-4">
              Recommended Stay
            </h3>
            <p className="text-gray-700 leading-8">
              To stay at a resort of our choice at this destination.
              See some names of Hotels, Resorts, Home Stay where we keep our Guests.
            </p>
          </div>

        </div>
      </div>
      <TourPricingSection
        title="Malaysia Elite Getaway Collection"
        subtitle="Curated stays, iconic landmarks & tropical indulgence"

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
