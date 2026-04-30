"use client"

import Image from 'next/image'
import { MapPin, Calendar, Users, Star, Clock, Camera, Sun, Home, IndianRupee, Award, Compass, Utensils, Building, Trees, Ship, Sparkles, Train, ShoppingBag, Book, Mountain, Waves, Fish, Bird, Tent, Flame, PartyPopper, Heart, Sprout, Castle } from 'lucide-react'
import TourPricingSection from "@/components/TourPricingSection"
import ContactCTA from '@/components/ContactCTA'

export default function GermanyPage() {
  return (
    <main className="text-gray-800">

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1601589313026-80a82ae92920?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fEdlcm1hbnl8ZW58MHx8MHx8fDA%3D"
            alt="Beautiful Germany with castles and cities"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-slate-800/60 to-gray-900/80"></div>
        </div>

        <div className="relative h-full flex items-center justify-center text-center text-white px-6">
          <div className="max-w-4xl">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Castle className="w-6 h-6 text-gray-400" />
              <span className="text-gray-400 font-semibold tracking-wide">European Heritage</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Germany
              <span className="block text-3xl md:text-5xl mt-2 text-gray-300">
                Berlin • Munich • Frankfurt • Heidelberg
              </span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Experience fairy-tale castles, vibrant cities, and rich European heritage
              with modern culture, historic landmarks, and Bavarian traditions
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="bg-gray-700 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-gray-600 transition transform hover:scale-105">
                Explore Germany
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-slate-800 transition transform hover:scale-105">
                Book European Journey
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm">Discover the Heart of Europe</span>
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
            <h1 className="text-4xl md:text-5xl font-bold text-gray-700">
              Visit and Explore Germany
            </h1>
            <p className="text-lg text-gray-700">
              Berlin, Munich, Frankfurt, Heidelberg, Castles with Bengal Tourism
            </p>
            <p className="text-gray-600">
              Special Tailor made Combination Package, Number of Days & Cost can be designed on Request.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10">
            <div className="lg:col-span-2 space-y-8">
              {/* MAIN CIRCUIT TITLE */}
              <SectionTitle
                title="GERMANY"
                subtitle="European Heritage With BERLIN – MUNICH – FRANKFURT-"
              />



              {/* LEFT SIDE – ITINERARY */}
              <div className="lg:col-span-2 space-y-8">

                <DayCard title="Day – 1 | Arrival in Berlin – Historic Capital">
                  Arrival at Berlin Brandenburg International Airport where our representative will warmly welcome you and assist with transfer to your hotel. After check-in and some relaxation, begin your introduction to Germany's vibrant capital. In the evening, visit the iconic Brandenburg Gate, a powerful symbol of German unity, beautifully illuminated at night. Continue to the Reichstag Building, home of the German Parliament, and admire its impressive glass dome architecture. Enjoy a leisurely walk along Unter den Linden boulevard. Dinner at Indian/local restaurant. Overnight stay at Berlin.
                </DayCard>

                <DayCard title="Day – 2 | Berlin City Exploration">
                  After breakfast, proceed for a comprehensive full-day Berlin city tour. Visit the Berlin Wall Memorial to understand the city's divided past and Cold War history. Stop at Checkpoint Charlie, the famous border crossing between East and West Berlin. Continue to Museum Island, a UNESCO World Heritage Site housing world-class museums and classical architecture. Lunch at a local restaurant en-route. In the evening, explore Potsdamer Platz, a lively district known for modern architecture, shopping, and entertainment. Dinner & Overnight stay at Berlin.
                </DayCard>

                <DayCard title="Day – 3 | Berlin to Munich – Bavarian Charm">
                  After breakfast, transfer to airport for your flight to Munich, the capital of Bavaria. Upon arrival, check-in at hotel and begin exploring the heart of the city at Marienplatz, Munich's central square. Admire the magnificent New Town Hall (Neues Rathaus) with its famous Glockenspiel clock performance. Lunch at local restaurant. In the evening, visit the legendary Hofbräuhaus beer hall to experience traditional Bavarian culture, music, and cuisine (non-alcoholic options available). Dinner & Overnight stay at Munich.
                </DayCard>

                <DayCard title="Day – 4 | Neuschwanstein Castle – Fairy Tale Experience">
                  After breakfast, proceed for a scenic day trip to the world-famous Neuschwanstein Castle, often referred to as the "fairy-tale castle" that inspired Disney's Sleeping Beauty Castle. Nestled in the Bavarian Alps, this architectural masterpiece offers breathtaking mountain views. Continue to nearby Hohenschwangau Castle, the childhood residence of King Ludwig II. Lunch en-route. Return to Munich in the evening and enjoy a relaxing stroll through the English Garden, one of Europe's largest urban parks. Dinner & Overnight stay at Munich.
                </DayCard>

                <DayCard title="Day – 5 | Munich to Frankfurt – Financial Hub">
                  After breakfast, board a comfortable train to Frankfurt, Germany's financial capital. Upon arrival, check-in at hotel. Visit Römerberg (Old Town Square), featuring charming half-timbered houses and historic buildings. Explore St. Bartholomew's Cathedral, an important imperial coronation site. Lunch at local restaurant. In the evening, stroll along Zeil shopping street, known for its modern retail stores and cafes. Dinner & Overnight stay at Frankfurt.
                </DayCard>

                <DayCard title="Day – 6 | Heidelberg Day Excursion">
                  After breakfast, proceed for a full-day excursion to Heidelberg, one of Germany's most romantic towns. Visit Heidelberg Castle perched above the Neckar River, offering panoramic views of the valley. Explore the Old Bridge and wander through the charming cobblestone streets of the Old Town. Discover Heidelberg University, Germany's oldest university town with rich academic heritage. Lunch at local restaurant. Return to Frankfurt in the evening. Enjoy a farewell dinner celebrating your unforgettable German journey. Overnight stay at Frankfurt.
                </DayCard>

                <DayCard title="Day – 7 | Departure">
                  After breakfast, check-out from hotel and transfer to Frankfurt International Airport for your onward journey. Depart with unforgettable memories of Germany's historic landmarks, Bavarian traditions, fairy-tale castles, and scenic landscapes. Tour Ends.
                </DayCard>

              </div>



              {/* ADD-ON SECTIONS */}
              <AddOnSection
                title="RHINE VALLEY"
                subtitle="Add-on (or) Separately From FRANKFURT"
              />


              {/* LEFT SIDE – ITINERARY */}
              <div className="lg:col-span-2 space-y-8">

                <DayCard title="Day – 1  |  Rhine Valley – Castles & River Cruise">
                  After breakfast, proceed for a scenic day excursion to the breathtaking Rhine Valley, a UNESCO World Heritage Site renowned for its dramatic landscapes, vineyard-covered hills, and medieval castles perched along the riverbanks. Upon arrival, board a relaxing Rhine River cruise and sail past picturesque towns and ancient fortresses that reflect Germany's romantic heritage. Enjoy spectacular views of the legendary Lorelei Rock, steeped in folklore and Rhine River myths. Lunch at a local riverside restaurant featuring regional cuisine. Spend time exploring charming Rhine Valley villages known for wine production and traditional half-timbered houses. In the evening, return to Frankfurt. Dinner at Indian/local restaurant. Overnight stay at Frankfurt.
                </DayCard>

                <DayCard title="Day – 2  |  Cologne & Bonn – Cathedral & Culture">
                  After breakfast, depart for Cologne, one of Germany's oldest cities situated along the Rhine River. Visit the magnificent Cologne Cathedral (Kölner Dom), a UNESCO World Heritage Site and one of Europe's largest Gothic cathedrals, famous for its towering twin spires and stunning stained-glass windows. Continue to the interactive Chocolate Museum to learn about the history of cocoa and enjoy sweet tastings. Lunch at local restaurant. Later, proceed to Bonn, the former capital of West Germany and birthplace of composer Ludwig van Beethoven. Explore the charming Old Town, Beethoven House (exterior view), and scenic Rhine promenade. Evening return to Frankfurt. Dinner & Overnight stay at Frankfurt.
                </DayCard>

                <DayCard title="Day – 3  |  Stuttgart & Black Forest – Automotive & Nature">
                
                  Departure: After breakfast, check-out of the Hotel in the afternoon. Enjoy scenic drives through rolling hills and picturesque landscapes. if time permits and proceed to the airport for return flight to Kolkata, India. Tour ends
                </DayCard>

              </div>
            </div>
            {/* RIGHT SIDE – VIDEO + AD */}
            <div className="space-y-8 lg:sticky lg:top-24 h-fit">

              {/* Video Section */}
              <div className="bg-white rounded-3xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  Watch Germany Tour Video
                </h3>

                <div className="aspect-video rounded-xl overflow-hidden">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                    title="Germany Tour"
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
        title="Germany European Heritage Packages"
        subtitle="Experience the Heart of Europe with curated journeys"
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
    <div className="bg-white shadow-xl rounded-3xl p-8 border-l-4 border-gray-600">
      <h3 className="text-2xl font-semibold text-gray-700 mb-4">{title}</h3>
      <p className="text-gray-700 leading-8 whitespace-pre-line text-lg">{children}</p>
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
