"use client"

import Image from 'next/image'
import { MapPin, Calendar, Users, Star, Clock, Camera, Sun, Home, IndianRupee, Award, Compass, Utensils, Building, Trees, Ship, Sparkles, Train, ShoppingBag, Book, Mountain, Waves, Fish, Bird, Tent, Flame, PartyPopper, Heart, Sprout, Landmark } from 'lucide-react'
import TourPricingSection from "@/components/TourPricingSection"
import ContactCTA from '@/components/ContactCTA'

export default function ItalyPage() {
  return (
    <main className="text-gray-800">

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1549893072-4bc678117f45?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEl0YWx5fGVufDB8fDB8fHww"
            alt="Beautiful Italy with Colosseum and Venice canals"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-yellow-900/80 via-green-800/60 to-yellow-900/80"></div>
        </div>

        <div className="relative h-full flex items-center justify-center text-center text-white px-6">
          <div className="max-w-4xl">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Landmark className="w-6 h-6 text-yellow-400" />
              <span className="text-yellow-400 font-semibold tracking-wide">Romantic Heritage</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Italy
              <span className="block text-3xl md:text-5xl mt-2 text-yellow-300">
                Rome • Venice • Florence • Milan
              </span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Walk through ancient ruins, enjoy world-class cuisine, and explore romantic cities
              with Renaissance art, Mediterranean charm, and Italian passion
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="bg-yellow-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-yellow-500 transition transform hover:scale-105">
                Explore Italy
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-green-800 transition transform hover:scale-105">
                Book Romantic Journey
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm">Discover the Land of Romance</span>
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
            <h1 className="text-4xl md:text-5xl font-bold text-yellow-700">
              Visit and Explore Italy
            </h1>
            <p className="text-lg text-gray-700">
              Rome, Venice, Florence, Milan, Vatican with Bengal Tourism
            </p>
            <p className="text-gray-600">
              Special Tailor made Combination Package, Number of Days & Cost can be designed on Request.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10">
            <div className="lg:col-span-2 space-y-8">
              {/* MAIN CIRCUIT TITLE */}
              <SectionTitle
                title="ITALY"
                subtitle="Romantic Heritage With ROME – VENICE – FLORENCE-"
              />

              {/* MAIN DAY WISE */}
              {/* MAIN DAY WISE */}
              <div className="grid gap-10 grid-col-1">

                <DayCard title="Day – 1 | Arrival in Rome & Trastevere Experience">
                  Welcome to Italy! Upon arrival at Rome Fiumicino International Airport (FCO),
                  our professional tour representative will warmly receive you and assist with
                  your private transfer to the hotel. After smooth check-in, relax and freshen up.

                  In the evening, enjoy a guided walking tour of the charming Trastevere district,
                  known for its cobblestone streets, lively piazzas, artisan shops, and authentic
                  Roman atmosphere. Experience traditional Italian hospitality with a delightful
                  dinner at a local trattoria featuring fresh pasta, pizza, and classic desserts.

                  Overnight stay at Rome hotel.
                </DayCard>


                <DayCard title="Day – 2 | Ancient Rome & City Highlights">
                  After breakfast at the hotel, begin your journey into the glorious history of
                  Ancient Rome with a guided visit to the iconic Colosseum, where gladiators once
                  battled. Continue to explore the Roman Forum, the political and social heart of
                  ancient civilization, followed by Palatine Hill offering panoramic city views.

                  Enjoy lunch at a local café en-route. In the afternoon, visit the magnificent
                  Pantheon, one of Rome’s best-preserved monuments, and stroll through Piazza Navona,
                  famous for its fountains and vibrant atmosphere.

                  In the evening, toss a coin at the Trevi Fountain and visit the Spanish Steps,
                  one of Rome’s most romantic landmarks.

                  Dinner and overnight stay at Rome.
                </DayCard>


                <DayCard title="Day – 3 | Vatican City & Spiritual Marvels">
                  After breakfast, proceed for a full-day guided tour of Vatican City, the world’s
                  smallest independent state and the spiritual center of Catholicism.

                  Visit St. Peter’s Basilica, admire its grand architecture and Michelangelo’s
                  Pietà sculpture. Continue to the Vatican Museums, home to centuries of priceless
                  art collections. Witness the breathtaking ceiling of the Sistine Chapel painted
                  by Michelangelo.

                  Lunch will be arranged en-route. In the evening, explore Castel Sant'Angelo,
                  a historic fortress offering stunning views of Rome.

                  Dinner and overnight stay at Rome.
                </DayCard>


                <DayCard title="Day – 4 | Rome to Florence – Renaissance Capital">
                  After breakfast, check out and transfer to the railway station to board a
                  high-speed train to Florence, the birthplace of the Renaissance.

                  Upon arrival, transfer to your hotel and complete check-in formalities.
                  Begin exploring the city with a visit to the Florence Cathedral (Duomo),
                  an architectural masterpiece, and the historic Baptistery known for its
                  famous bronze doors.

                  Enjoy lunch at a local restaurant. In the evening, take a scenic walk across
                  Ponte Vecchio, Florence’s iconic medieval bridge lined with jewelry shops,
                  and enjoy beautiful sunset views over the Arno River.

                  Dinner and overnight stay at Florence.
                </DayCard>


                <DayCard title="Day – 5 | Florence Art & Cultural Heritage Tour">
                  After breakfast, embark on an artistic journey through Florence’s most
                  celebrated museums.

                  Visit the Uffizi Gallery, home to masterpieces by Leonardo da Vinci,
                  Botticelli, and Raphael. Continue to the Accademia Gallery to witness
                  Michelangelo’s world-famous statue of David.

                  After lunch en-route, explore the magnificent Pitti Palace, once home to
                  Florentine royalty, followed by a relaxing stroll through the beautifully
                  landscaped Boboli Gardens.

                  In the evening, explore the Oltrarno district known for artisan workshops
                  and authentic local charm.

                  Dinner and overnight stay at Florence.
                </DayCard>


                <DayCard title="Day – 6 | Florence to Venice – The City of Canals">
                  After breakfast, transfer to the railway station for your scenic train
                  journey to Venice, one of the world’s most romantic cities.

                  Upon arrival, transfer to your hotel and check in. Begin your exploration
                  with a visit to St. Mark’s Square, the vibrant heart of Venice, followed by
                  St. Mark’s Basilica showcasing magnificent Byzantine architecture.

                  Lunch at a local restaurant. In the evening, enjoy a memorable gondola ride
                  through Venice’s picturesque canals, passing historic buildings and charming
                  bridges.

                  Dinner and overnight stay at Venice.
                </DayCard>


                <DayCard title="Day – 7 | Venice Highlights & Departure">
                  After breakfast, check out from the hotel.

                  Visit the historic Doge’s Palace, a masterpiece of Gothic architecture and
                  former residence of Venetian rulers. Walk across the iconic Rialto Bridge,
                  one of the oldest bridges spanning the Grand Canal and a perfect spot for
                  photographs and souvenir shopping.

                  Later, transfer to Venice Marco Polo International Airport for your onward
                  journey with unforgettable memories of Italy.

                  Tour Ends.
                </DayCard>

              </div>

              {/* ADD-ON SECTIONS */}
              <AddOnSection
                title="MILAN"
                subtitle="Add-on (or) Separately From VENICE"
              />
              <div className=" grid  gap-10 grid-col-1">
                <DayCard title="Day – 1 | Venice to Milan – Architectural & Cultural Icons">
                  After breakfast at the hotel in Venice, check out and transfer to the railway
                  station to board a high-speed train to Milan, Italy’s fashion and financial capital.

                  Upon arrival in Milan, transfer to your hotel and complete check-in formalities.
                  After some relaxation, begin your Milan exploration with a visit to the
                  magnificent Duomo di Milano, one of the largest Gothic cathedrals in the world.
                  Admire its intricate marble façade and, if time permits, enjoy panoramic views
                  from the rooftop.

                  Continue to the elegant Galleria Vittorio Emanuele II, Italy’s oldest shopping
                  gallery, known for its luxury boutiques, glass-domed arcade, and vibrant atmosphere.

                  Lunch will be arranged at a local restaurant en-route.

                  In the evening, visit the legendary La Scala Opera House (Teatro alla Scala),
                  one of the most prestigious opera houses globally, and learn about its rich
                  musical heritage.

                  Dinner at an Indian or local restaurant.
                  Overnight stay at Milan.
                </DayCard>


                <DayCard title="Day – 2 | Milan & Scenic Lake Como Excursion">
                  After breakfast, proceed for a full-day excursion to the breathtaking Lake Como,
                  located amidst the foothills of the Alps and known for its stunning landscapes
                  and charming lakeside towns.

                  Visit the picturesque village of Bellagio, often called the “Pearl of Lake Como,”
                  famous for its cobbled streets, elegant villas, and scenic waterfront views.

                  Enjoy a relaxing boat tour across the crystal-clear waters of Lake Como,
                  offering spectacular views of surrounding mountains and luxurious villas.

                  Lunch will be arranged at a lakeside restaurant en-route.

                  In the evening, return to Milan and visit the renowned Brera Art Gallery
                  (Pinacoteca di Brera), home to an impressive collection of Italian Renaissance art.

                  Dinner at a local restaurant.
                  Overnight stay at Milan.
                </DayCard>


                <DayCard title="Day – 3 | Milan Fashion & Heritage Experience">
                  After breakfast, check out from the hotel.

                  Visit the historic Doge’s Palace, a masterpiece of Gothic architecture and
                  former residence of Venetian rulers. Walk across the iconic Rialto Bridge,
                  one of the oldest bridges spanning the Grand Canal and a perfect spot for
                  photographs and souvenir shopping.

                  Later, transfer to Venice Marco Polo International Airport for your onward
                  journey with unforgettable memories of Italy.

                  Tour Ends.
                </DayCard>
              </div>
            </div>
            {/* RIGHT SIDE – VIDEO + AD */}
            <div className="space-y-8 lg:sticky lg:top-24 h-fit">

              {/* Video Section */}
              <div className="bg-white rounded-3xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  Watch Italy Tour Video
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
        title="Italy Romantic Heritage Packages"
        subtitle="Experience the Land of Romance with curated journeys"

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
    <div className="bg-white shadow-xl rounded-3xl p-8 border-l-4 border-yellow-600">
      <h3 className="text-2xl font-semibold text-yellow-700 mb-4">{title}</h3>
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
