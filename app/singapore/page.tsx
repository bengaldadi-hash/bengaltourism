"use client"

import Image from 'next/image'
import { MapPin, Calendar, Users, Star, Clock, Camera, Sun, Home, IndianRupee, Award, Compass, Utensils, Building, Trees, Ship, Sparkles, Train, ShoppingBag, Book, Mountain, Waves, Fish, Bird, Tent, Flame, PartyPopper, Heart, Sprout } from 'lucide-react'
import ContactCTA from '@/components/ContactCTA'
import PackagePricing from '@/components/PackagePricing'
import TourPricingSection from '@/components/TourPricingSection'

export default function SingaporePage() {
  return (
    <main className="text-gray-800">

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1496939376851-89342e90adcd?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8U2luZ2Fwb3JlfGVufDB8fHww"
            alt="Singapore skyline with Marina Bay Sands and modern architecture"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 via-purple-800/60 to-blue-900/80"></div>
        </div>

        <div className="relative h-full flex items-center justify-center text-white px-6">
          <div className="max-w-4xl">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Building className="w-6 h-6 text-yellow-400" />
              <span className="text-yellow-400 font-semibold tracking-wide">Singapore Modern Paradise</span>
            </div>

            <h1 className="text-5xl md:text-7xl  text-center  font-bold mb-6 leading-tight">
              Singapore
              <span className="block text-3xl md:text-5xl mt-2 text-blue-300">
                City Tour • Sentosa Island • Jurong Bird Park
              </span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-gray-200 text-center max-w-3xl mx-auto leading-relaxed">
              Experience the ultimate modern city-state with stunning architecture,
              world-class attractions, and tropical island adventures
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="bg-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-yellow-400 transition transform hover:scale-105">
                Explore Singapore
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-800 transition transform hover:scale-105">
                Book Modern Experience
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm">Discover modern Singapore</span>
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
              <h1 className="text-4xl md:text-5xl font-bold text-yellow-600">
                Singapore Tour Itinerary
              </h1>
              <a href='/book-tour' className='bg-yellow-500 px-4 py-4 text-white rounded-full'>
                Book now For 3N/4D
              </a>
            </div>
            <p className="text-gray-700 text-lg">
              Special Tailor made Combination Package
            </p>

          </div>

         {/* GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10">
            <div className="lg:col-span-2 space-y-8">

            {/* DAY 1 */}
            <div className="bg-white shadow-xl rounded-3xl p-8 border-l-4 border-yellow-500 flex flex-col ">
              <h2 className="text-2xl font-semibold text-yellow-600 mb-4">
                Day – 1 : Arrival & City Tour
              </h2>
              <div className="text-gray-700 leading-8 flex-grow">
                Departure for direct flight from Kolkata to Singapore by Air Travel. Transfer to respective hotel at Singapore. Check in hotel and free at your own leisure.  You will proceed to see the beautiful city of Singapore.  Half Day City tour ( 4Hrs). half day Singapore city tour which covers major attractions of the city like Little India,  Marina Bay, China Town, Merlion Park etc. Evening leisure and Night stay at Hotel / Resort / Singapore.


              </div>
            </div>
            {/* DAY 2 */}
            <div className="bg-white shadow-xl rounded-3xl p-8 border-l-4 border-blue-500 flex flex-col ">
              <h2 className="text-2xl font-semibold text-blue-600 mb-4">
                Day – 2 : Sentosa Island & Night Safari
              </h2>
              <div className="text-gray-700 leading-8 flex-grow">
                Enjoy your breakfast in the morning; today you will proceed to see an optional tour of Sentosa Island. Visit the Underwater, World, Asia's most popular Sea Aquarium and Cable Car. Return by late afternoon.  Evening you can enjoy the Singapore night safari 4 hrs tour. Night stay at Hotel / Resort / Singapore.
              </div>
            </div>
            {/* DAY 3 */}
            <div className="bg-white shadow-xl rounded-3xl p-8 border-l-4 border-green-500  flex flex-col ">
              <h2 className="text-2xl font-semibold text-green-600 mb-4">
                Day – 3 : Jurong Bird Park & Shopping
              </h2>
              <div className="text-gray-700 leading-8 flex-grow">
                After breakfast visit Jurong National Park. Jurong Bird Park is a 20.2 hectare open-concept park. It is the largest in the Asia Pacific and the best in the world. Its collection of more than 8,000 birds from 600 species is among the largest in the world. The Park specializes in birds from Southeast Asia. Evening free and walk to the city mall for shopping and free evening and Night stayat Hotel / Resort / Singapore.
              </div>
            </div>

            {/* DAY 4 */}
            <div className="bg-white shadow-xl rounded-3xl p-8 border-l-4 border-purple-500  flex flex-col ">
              <h2 className="text-2xl font-semibold text-purple-600 mb-4">
                Day – 4 : Departure
              </h2>
              <div className="text-gray-700 leading-8 flex-grow">
                After breakfast, Check-out from the hotel.
                Transfer to Singapore Airport for your return journey.
                Tour Ends...
              </div>
            </div>

          </div>
            <div className="space-y-8 lg:sticky lg:top-24 h-fit">

              {/* Video Section */}
              <div className="bg-white rounded-3xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  Watch Singapore Tour Video
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

          {/* EXTENSION BOX */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-3xl p-8 text-center shadow-lg">
            <p className="text-gray-700 leading-8">
              (You may extend your tour for 3-4 more days covering Malaysia / Bali / Indonesia at a minimum cost / free*)
            </p>
          </div>

          {/* RECOMMENDED */}
          <div className="bg-white rounded-3xl shadow-xl p-8 text-center">
            <h3 className="text-2xl font-semibold text-indigo-600 mb-4">
              Recommended Stay
            </h3>
            <p className="text-gray-700 leading-8">
              To stay at a resort of our choice at Destinations.
              See some names of Hotels, Resorts, Home Stay where we keep our Guests.
            </p>
          </div>

        </div>
      </div>
      <TourPricingSection
        title="Bali Elite Adventure & Retreat Packages"
        subtitle="Island thrills, cultural wonders & luxury relaxation"
    packages={[
          { label: "Customisable & Recommended for extended duration", days: "6N / 7D", price: 91000},
          { label: "Highly Recommended", days: "5N / 6D", price: 82000 },
          { label: "Most Popular", days: "4N / 5D", price: 73000 },
          { label: "In group of 20+ Persons", days: "3N / 4D", price: 64000 },
          { label: "As add on / Separately ", days: "2N / 3D", price: 55000 },
        ]}
      />
      <ContactCTA />

    </main>
  )
}
