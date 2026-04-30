"use client"

import Image from 'next/image'
import { MapPin, Calendar, Users, Star, Clock, Camera, Sun, Home, IndianRupee, Award, Compass, Utensils, Building, Trees, Ship, Sparkles, Train, ShoppingBag, Book, Mountain, Waves, Fish, Bird, Tent, Flame, PartyPopper, Heart, Sprout, Crown } from 'lucide-react'
import TourPricingSection from "@/components/TourPricingSection"
import ContactCTA from '@/components/ContactCTA'

export default function LondonPage() {
  return (
    <main className="text-gray-800">

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1533929736458-ca588d08c8be?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bG9uZG9ufGVufDB8fDB8fHww"
            alt="Beautiful London with Tower Bridge and city skyline"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/80 via-blue-800/60 to-purple-900/80"></div>
        </div>

        <div className="relative h-full flex items-center justify-center text-center text-white px-6">
          <div className="max-w-4xl">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Crown className="w-6 h-6 text-purple-400" />
              <span className="text-purple-400 font-semibold tracking-wide">Royal Capital</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              London
              <span className="block text-3xl md:text-5xl mt-2 text-purple-300">
                London • Windsor • Oxford • Stonehenge
              </span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Explore royal palaces, iconic landmarks, and vibrant city life
              with rich history, world-class museums, and British culture
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="bg-purple-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-purple-400 transition transform hover:scale-105">
                Explore London
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-800 transition transform hover:scale-105">
                Book Royal Journey
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm">Discover the Royal City</span>
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
            <h1 className="text-4xl md:text-5xl font-bold text-purple-700">
              Visit and Explore London
            </h1>
            <p className="text-lg text-gray-700">
              London, Windsor, Oxford, Stonehenge, Museums with Bengal Tourism
            </p>
            <p className="text-gray-600">
              Special Tailor made Combination Package, Number of Days & Cost can be designed on Request.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10">
            <div className="lg:col-span-2 space-y-8">
              {/* MAIN CIRCUIT TITLE */}
              <SectionTitle
                title="LONDON"
                subtitle="Royal Capital With LONDON – WINDSOR – OXFORD-"
              />



              {/* LEFT SIDE – ITINERARY */}
              <div className="lg:col-span-2 space-y-8">
                <DayCard title="Day – 1 | Arrival in London – Welcome to the UK">
                  Arrival at Heathrow or Gatwick International Airport where our representative will warmly welcome you and assist with transfer to your hotel in London. Enjoy a scenic drive through one of the world’s most iconic cities, passing historic landmarks and modern cityscapes. Upon arrival, check-in and relax after your journey. In the evening, explore Leicester Square, the heart of London’s entertainment district, followed by a stroll through Covent Garden known for its street performances, boutique shops, and charming cafes. Experience your first taste of British culture. Dinner at Indian/local restaurant. Overnight stay at London.
                </DayCard>

                <DayCard title="Day – 2 | Classic London City Tour">
                  After breakfast, proceed for a comprehensive full-day London city tour. Visit the historic Tower of London, home to the Crown Jewels and centuries of royal history. Walk across the iconic Tower Bridge for spectacular views of the River Thames. Continue to St. Paul’s Cathedral, an architectural masterpiece where royal weddings and state ceremonies have taken place. Lunch at a local restaurant en-route. In the evening, enjoy a ride on the London Eye offering panoramic views of the London skyline including Big Ben, Houses of Parliament, and Buckingham Palace. Dinner & Overnight stay at London.
                </DayCard>

                <DayCard title="Day – 3 | Royal London & Cultural Heritage">
                  After breakfast, begin your day with a visit to Buckingham Palace to witness the famous Changing of the Guard ceremony (subject to schedule). Continue to Westminster Abbey, the coronation church of British monarchs and a UNESCO World Heritage Site. Explore the Houses of Parliament and admire the iconic Big Ben clock tower. Lunch en-route. In the afternoon, visit the British Museum, home to world-renowned artifacts including the Rosetta Stone and Egyptian mummies. In the evening, enjoy a spectacular West End theatre show, experiencing London’s world-class performing arts scene. Dinner & Overnight stay at London.
                </DayCard>

                <DayCard title="Day – 4 | Windsor Castle & Royal Countryside">
                  After breakfast, embark on a day trip to Windsor, one of England’s most charming towns. Visit Windsor Castle, the world’s oldest and largest inhabited castle and an official residence of the British monarch. Explore the magnificent State Apartments and St. George’s Chapel, the resting place of Queen Elizabeth II and other royal family members. Lunch in Windsor town. Continue to Eton College, one of the world’s most prestigious schools. Evening return to London. Dinner & Overnight stay at London.
                </DayCard>

                <DayCard title="Day – 5 | Stonehenge & Oxford Excursion">
                  After breakfast, proceed for a full-day excursion to Stonehenge, the mysterious prehistoric stone circle and UNESCO World Heritage Site. Explore the ancient monument and learn about its fascinating history and astronomical significance. Continue to Oxford, home to one of the world’s oldest universities. Visit Oxford University and Christ Church College, famous for its stunning architecture and Harry Potter filming locations. Lunch en-route. Evening return to London. Dinner & Overnight stay at London.
                </DayCard>

                <DayCard title="Day – 6 | Museums & Luxury Shopping">
                  After breakfast, visit the Natural History Museum, known for its impressive dinosaur skeletons and interactive exhibits. Continue to the Victoria & Albert Museum, showcasing art, fashion, and design from around the world. Lunch at local restaurant. In the evening, enjoy shopping at Oxford Street and Regent Street, London’s most famous retail destinations offering everything from luxury brands to British high-street fashion. Enjoy a farewell dinner celebrating your memorable UK journey. Overnight stay at London.
                </DayCard>

                <DayCard title="Day – 7 | Departure">
                  After breakfast, check-out from hotel and transfer to Heathrow or Gatwick Airport for your onward journey. Depart with unforgettable memories of London’s royal heritage, historic landmarks, vibrant culture, and timeless charm. Tour Ends.
                </DayCard>

              </div>



              {/* ADD-ON SECTIONS */}
              <AddOnSection
                title="CAMBRIDGE"
                subtitle="Add-on (or) Separately From LONDON"
              />


              {/* LEFT SIDE – ITINERARY */}
              <div className="lg:col-span-2 space-y-8">

                <DayCard title="Day – 1  |  Cambridge – Academic Elegance">
                  After breakfast, proceed for a full-day excursion to the historic university city of Cambridge, renowned for its academic excellence and stunning medieval architecture. Upon arrival, visit the magnificent King’s College Chapel, famous for its breathtaking Gothic architecture and impressive fan-vaulted ceiling. Explore the prestigious University of Cambridge campuses, which have educated some of the world’s greatest minds including Sir Isaac Newton and Stephen Hawking. Enjoy a traditional punting experience on the River Cam, gliding past historic college buildings and picturesque bridges. Lunch at a local restaurant. Later, visit the iconic Mathematical Bridge at Queens’ College and admire Trinity College, one of the largest and most prestigious colleges in Cambridge. Evening return to London. Dinner & Overnight stay at London.
                </DayCard>

                <DayCard title="Day – 2  |  Bath & The Cotswolds – Roman Heritage & Countryside Charm">
                  After breakfast, depart for the elegant city of Bath, a UNESCO World Heritage Site celebrated for its Roman and Georgian architecture. Visit the historic Roman Baths complex, where you can explore ancient thermal springs that date back nearly 2,000 years. Continue to Bath Abbey, a stunning example of Gothic architecture located in the heart of the city. Lunch at a local restaurant. Later, drive through the enchanting Cotswolds region, known for its rolling green hills, charming stone cottages, and postcard-perfect villages such as Bourton-on-the-Water or Bibury. Enjoy leisurely walks and scenic photography in this quintessential English countryside setting. Evening return to London. Dinner & Overnight stay at London.
                </DayCard>

                <DayCard title="Day – 3  |  Canterbury & Leeds Castle – Medieval England">
        After breakfast, check-out from hotel and transfer to Heathrow or Gatwick Airport for your onward journey. Depart with unforgettable memories of London’s royal heritage, historic landmarks, vibrant culture, and timeless charm. Tour Ends.
                </DayCard>
              </div>


            </div>
            {/* RIGHT SIDE – VIDEO + AD */}
            <div className="space-y-8 lg:sticky lg:top-24 h-fit">

              {/* Video Section */}
              <div className="bg-white rounded-3xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  Watch London Tour Video
                </h3>

                <div className="aspect-video rounded-xl overflow-hidden">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                    title="Cambridge Tour"
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
      </div>
      <TourPricingSection
        title="London Royal Capital Packages"
        subtitle="Experience the Royal City with curated journeys"
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
    <div className="bg-white shadow-xl rounded-3xl p-8 border-l-4 border-purple-600">
      <h3 className="text-2xl font-semibold text-purple-700 mb-4">{title}</h3>
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
