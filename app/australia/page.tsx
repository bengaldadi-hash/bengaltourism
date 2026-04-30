"use client"

import Image from 'next/image'
import { MapPin, Calendar, Users, Star, Clock, Camera, Sun, Home, IndianRupee, Award, Compass, Utensils, Building, Trees, Ship, Sparkles, Train, ShoppingBag, Book, Mountain, Waves, Fish, Bird, Tent, Flame, PartyPopper, Heart, Sprout, Sailboat } from 'lucide-react'
import TourPricingSection from "@/components/TourPricingSection"
import ContactCTA from '@/components/ContactCTA'

export default function AustraliaPage() {
  return (
    <main className="text-gray-800">

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8QXVzdHJhbGlhfGVufDB8fDB8fHww"
            alt="Beautiful Australia with Sydney Opera House and beaches"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 via-cyan-800/60 to-blue-900/80"></div>
        </div>

        <div className="relative h-full flex items-center justify-center text-center text-white px-6">
          <div className="max-w-4xl">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sailboat className="w-6 h-6 text-blue-400" />
              <span className="text-blue-400 font-semibold tracking-wide">Down Under Paradise</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Australia
              <span className="block text-3xl md:text-5xl mt-2 text-blue-300">
                Sydney • Melbourne • Gold Coast • Great Barrier Reef
              </span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Discover stunning beaches, iconic landmarks, and vibrant cities across Australia
              with unique wildlife, natural wonders, and laid-back lifestyle
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="bg-blue-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-blue-400 transition transform hover:scale-105">
                Explore Australia
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-cyan-800 transition transform hover:scale-105">
                Book Australian Journey
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm">Discover the Land Down Under</span>
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PACKAGE PRICING ================= */}
      <div className="bg-gray-50 py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto space-y-20">

          {/* HEADER */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-700">
              Visit and Explore Australia
            </h1>
            <p className="text-lg text-gray-700">
              Sydney, Melbourne, Gold Coast, Great Barrier Reef with Bengal Tourism
            </p>
            <p className="text-gray-600">
              Special Tailor made Combination Package, Number of Days & Cost can be designed on Request.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10">
            <div className="lg:col-span-2 space-y-8">
              {/* MAIN CIRCUIT TITLE */}
              <SectionTitle
                title="AUSTRALIA"
                subtitle="Down Under Paradise With SYDNEY – MELBOURNE – GOLD COAST-"
              />

              {/* MAIN DAY WISE */}
              <div className=" grid  gap-10 grid-col-1">
                {/* MAIN DAY WISE */}

                <DayCard title="Day – 1 | Arrival in Sydney & Harbour Experience">
                  Welcome to Australia! Upon arrival at Sydney Kingsford Smith International Airport,
                  our representative will warmly receive you and assist with your transfer to the hotel.
                  After check-in, relax and freshen up after your journey.

                  In the evening, visit the vibrant Darling Harbour, one of Sydney’s most popular
                  waterfront destinations filled with restaurants, entertainment, and scenic views.
                  Continue to SEA LIFE Sydney Aquarium to witness Australia’s unique marine life,
                  including sharks, rays, and tropical fish.

                  Enjoy dinner at a local restaurant.

                  Overnight stay at Sydney.
                </DayCard>


                <DayCard title="Day – 2 | Sydney City Highlights Tour">
                  After breakfast, proceed for a comprehensive full-day Sydney city tour.

                  Visit the iconic Sydney Opera House and admire its world-famous sail-shaped
                  architecture. Drive across or stop at the Sydney Harbour Bridge for panoramic
                  harbour views and photography.

                  Continue to the famous Bondi Beach, known for its golden sands and surfing culture.
                  Enjoy lunch at a local restaurant en-route.

                  In the evening, relax at the Royal Botanic Gardens, offering stunning views of
                  Sydney Harbour and a peaceful green escape in the heart of the city.

                  Dinner and overnight stay at Sydney.
                </DayCard>


                <DayCard title="Day – 3 | Blue Mountains & Natural Wonders">
                  After breakfast, depart for a full-day excursion to the breathtaking Blue Mountains,
                  a UNESCO World Heritage-listed region known for dramatic cliffs and eucalyptus forests.

                  Visit Scenic World and enjoy thrilling experiences such as the Scenic Railway,
                  Cableway, or Skyway (optional activities).

                  Stop at Echo Point to witness the famous Three Sisters rock formation and enjoy
                  spectacular valley views.

                  Continue to the historic Jenolan Caves, renowned for their impressive limestone
                  formations.

                  Lunch will be arranged en-route. In the evening, return to Sydney.

                  Dinner and overnight stay at Sydney.
                </DayCard>


                <DayCard title="Day – 4 | Sydney to Melbourne – Cultural Capital">
                  After breakfast, check out and transfer to the airport for your flight to Melbourne.

                  Upon arrival, transfer to your hotel and complete check-in formalities.
                  Begin exploring the city with a visit to Federation Square, Melbourne’s cultural hub,
                  followed by the iconic Flinders Street Station, one of Australia’s most photographed landmarks.

                  Lunch at a local restaurant en-route.

                  In the evening, explore Queen Victoria Market (subject to operating days),
                  known for local produce, souvenirs, and vibrant atmosphere.

                  Dinner and overnight stay at Melbourne.
                </DayCard>


                <DayCard title="Day – 5 | Melbourne City & Coastal Experience">
                  After breakfast, proceed for a Melbourne city tour.

                  Visit the legendary Melbourne Cricket Ground (MCG), one of the world’s most famous
                  sporting stadiums. Continue to the Royal Botanic Gardens for a relaxing walk
                  amidst beautiful landscapes.

                  Later, head to St. Kilda Beach, a lively seaside suburb perfect for leisure time
                  and scenic coastal views.

                  Lunch at a local restaurant en-route.

                  In the evening, visit Crown Casino & Entertainment Complex for leisure, dining,
                  or optional gaming experience.

                  Dinner and overnight stay at Melbourne.
                </DayCard>


                <DayCard title="Day – 6 | Melbourne to Gold Coast – Beach Paradise">
                  After breakfast, transfer to the airport for your flight to Gold Coast,
                  Australia’s famous beach and theme park destination.

                  Upon arrival, transfer to the hotel and check in.

                  Visit Surfers Paradise Beach, known for its golden coastline, surf culture,
                  and vibrant atmosphere.

                  Lunch at a local restaurant en-route.

                  In the evening, explore Cavill Avenue, the heart of Gold Coast nightlife
                  offering shopping, cafes, and entertainment.

                  Dinner and overnight stay at Gold Coast.
                </DayCard>


                <DayCard title="Day – 7 | Theme Park Experience & Departure">
                  After breakfast, check out from the hotel.

                  Enjoy a visit to either Sea World or Warner Bros. Movie World
                  (based on preference), offering thrilling rides, marine life shows,
                  and entertainment experiences.

                  Later, transfer to Gold Coast Airport for your onward journey
                  with unforgettable memories of Australia.

                  Tour Ends.
                </DayCard>
              </div>

              {/* ADD-ON SECTIONS */}
              <AddOnSection
                title="GREAT BARRIER REEF"
                subtitle="Add-on (or) Separately From GOLD COAST"
              />
              <div className=" grid  gap-10 grid-col-1">
                {/* CAIRNS EXTENSION */}

                <DayCard title="Day – 1 | Gold Coast to Cairns – Tropical Welcome">
                  After breakfast at the hotel, check out and transfer to the airport
                  for your flight to Cairns, the gateway to Tropical North Queensland.

                  Upon arrival, transfer to your hotel and complete check-in formalities.
                  Relax for a while and freshen up before heading out to explore the city.

                  Visit the beautiful Cairns Esplanade, a scenic waterfront promenade
                  overlooking Trinity Inlet, perfect for a leisurely walk and photography.
                  Explore the lively Cairns Night Markets, where you can shop for souvenirs,
                  local handicrafts, and enjoy street performances.

                  Lunch will be arranged at a local restaurant en-route.

                  In the evening, unwind and relax at the hotel pool or enjoy leisure time.

                  Dinner at a local or Indian restaurant.
                  Overnight stay at Cairns.
                </DayCard>


                <DayCard title="Day – 2 | Great Barrier Reef Adventure">
                  After breakfast, proceed for a full-day excursion to the world-famous
                  Great Barrier Reef, one of the Seven Natural Wonders of the World.

                  Board a luxury reef cruise and sail across the Coral Sea to the
                  outer reef platform. Enjoy snorkeling in crystal-clear waters and
                  witness vibrant coral formations, tropical fish, and marine life.
                  Optional scuba diving experience is available for certified divers.

                  A buffet lunch will be served onboard the cruise.

                  Spend time relaxing on the deck, swimming, or enjoying guided reef
                  presentations before returning to Cairns in the evening.

                  Dinner at a local restaurant.
                  Overnight stay at Cairns.
                </DayCard>


                <DayCard title="Day – 3 | Kuranda Rainforest & Scenic Journey">



                  Departure: After breakfast, check-out of the Hotel in the afternoon. Visit the embark on a memorable journey to Kuranda,
                  a charming rainforest village nestled in the mountains. & if time permits and proceed to the airport for return flight to Kolkata, India. Tour ends
                </DayCard>
              </div>
            </div>
            {/* RIGHT SIDE – VIDEO + AD */}
            <div className="space-y-8 lg:sticky lg:top-24 h-fit">

              {/* Video Section */}
              <div className="bg-white rounded-3xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  Watch Australia Down Under Tour Video
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
        </div>
      </div>
      <TourPricingSection
        title="Australia Down Under Paradise Packages"
        subtitle="Experience the Land Down Under with curated journeys"
    packages={[
          { label: "Customisable & Recommended for extended duration", days: "6N / 7D", price: 226000 },
          { label: "Highly Recommended", days: "5N / 6D", price: 190000 },
          { label: "Most Popular", days: "4N / 5D", price: 154000 },
          { label: "In group of 20+ Persons", days: "3N / 4D", price: 127000 },
          { label: "As add on / Separately ", days: "2N / 3D", price: 91000 },
        ]}
      />

      <ContactCTA />
    </main>
  )
}

/* COMPONENTS */

function SectionTitle({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="flex flex-col space-y-2">
      <div className='flex  gap-5 items-center'>
        <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
        <a href='/book-tour' className='bg-yellow-500 px-4 py-4 text-white rounded-full'>
          Book now For 6N/7D
        </a>
      </div>
      <p className="font-semibold text-gray-700">{subtitle}</p>

    </div>
  )
}

function DayCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white shadow-xl rounded-3xl p-8 border-l-4 border-blue-600">
      <h3 className="text-2xl font-semibold text-blue-700 mb-4">{title}</h3>
      <p className="text-gray-700 leading-8 whitespace-pre-line">{children}</p>
    </div>
  )
}

function AddOnSection({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="flex flex-col  space-y-2">


      <div className='flex gap-5 items-center'>
        <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
        <a href='/book-tour' className='bg-yellow-500 px-4 py-4 text-white rounded-full'>
          Book now For 2N/3D
        </a>

      </div>
      <p className="font-semibold text-gray-700">{subtitle}</p>
    </div>
  )
}
