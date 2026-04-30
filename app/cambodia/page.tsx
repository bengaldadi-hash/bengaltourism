"use client"

import Image from 'next/image'
import { MapPin, Calendar, Users, Star, Clock, Camera, Sun, Home, IndianRupee, Award, Compass, Utensils, Building, Trees, Ship, Sparkles, Train, ShoppingBag, Book, Mountain, Waves, Fish, Bird, Tent, Flame, PartyPopper, Heart, Sprout, Church } from 'lucide-react'
import TourPricingSection from "@/components/TourPricingSection"
import ContactCTA from '@/components/ContactCTA'

export default function CambodiaPage() {
  return (
    <main className="text-gray-800">

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1599283787923-51b965a58b05?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q2FtYm9kaWF8ZW58MHx8MHx8fDA%3D"
            alt="Beautiful Cambodia with Angkor Wat temple"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-orange-900/80 via-yellow-800/60 to-orange-900/80"></div>
        </div>

        <div className="relative h-full flex items-center justify-center text-center text-white px-6">
          <div className="max-w-4xl">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Church className="w-6 h-6 text-orange-400" />
              <span className="text-orange-400 font-semibold tracking-wide">Ancient Kingdom</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Cambodia
              <span className="block text-3xl md:text-5xl mt-2 text-orange-300">
                Siem Reap • Phnom Penh • Angkor Wat
              </span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Discover ancient temples, rich history, and vibrant local culture
              with magnificent Angkor Wat and warm Khmer hospitality
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="bg-orange-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-orange-400 transition transform hover:scale-105">
                Explore Cambodia
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-yellow-800 transition transform hover:scale-105">
                Book Ancient Journey
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm">Discover the Kingdom of Wonder</span>
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
            <h1 className="text-4xl md:text-5xl font-bold text-orange-700">
              Visit and Explore Cambodia
            </h1>
            <p className="text-lg text-gray-700">
              Siem Reap, Phnom Penh, Angkor Wat, Temples with Bengal Tourism
            </p>
            <p className="text-gray-600">
              Special Tailor made Combination Package, Number of Days & Cost can be designed on Request.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10">
            <div className="lg:col-span-2 space-y-8">
              <SectionTitle
                title="CAMBODIA"
                subtitle="Ancient Kingdom With SIEM REAP – PHNOM PENH-"
              />

              {/* MAIN DAY WISE */}

              {/* LEFT SIDE – ITINERARY */}
              <div className="lg:col-span-2 space-y-8">

                <DayCard title="Day – 1 | Arrival in Siem Reap – Cultural Welcome">
                  Arrival at Siem Reap International Airport where our local representative will warmly welcome you and assist with transfer to your hotel. Check-in and relax after your journey. Siem Reap, the gateway to the ancient Angkor temples, offers a charming blend of heritage and modern hospitality. In the evening, explore the vibrant Pub Street area, famous for lively cafes, night markets, and street performances. Stroll through local markets offering handicrafts, Cambodian souvenirs, and traditional snacks. Dinner at Indian/local restaurant. Overnight stay at Siem Reap.
                </DayCard>

                <DayCard title="Day – 2 | Angkor Wat Sunrise & Angkor Thom">
                  Early morning departure to witness a breathtaking sunrise at Angkor Wat, the world’s largest religious monument and a UNESCO World Heritage Site. Watch the temple’s silhouette reflect beautifully over the lotus ponds — a magical and unforgettable experience. Return to hotel for breakfast. Later, explore the grand Angkor Thom complex including the Bayon Temple, famous for its 200+ smiling stone faces, and Baphuon Temple known for its impressive pyramid structure. Visit the Terrace of the Elephants and Terrace of the Leper King. Lunch at local restaurant. In the evening, visit the iconic Ta Prohm Temple, left partially embraced by giant tree roots and famously featured in the movie “Tomb Raider.” Dinner & Overnight stay at Siem Reap.
                </DayCard>

                <DayCard title="Day – 3 | Banteay Srei & Grand Circuit Temples">
                  After breakfast, proceed to Banteay Srei Temple, often called the “Citadel of Women,” renowned for its intricate pink sandstone carvings and fine Khmer artistry. Continue the exploration of the Grand Circuit temples including Pre Rup Temple, known for sunset views and ancient cremation rituals; East Mebon, once surrounded by a vast reservoir; and Ta Som Temple with its picturesque tree-covered entrance. Lunch en-route at local restaurant. In the evening, climb Phnom Bakheng Hill to enjoy panoramic sunset views over the Angkor temple complex. Dinner & Overnight stay at Siem Reap.
                </DayCard>

                <DayCard title="Day – 4 | Siem Reap to Phnom Penh – Royal Heritage">
                  After breakfast, transfer to the airport for your flight to Phnom Penh, the vibrant capital of Cambodia. Upon arrival, transfer to hotel and check-in. Begin city exploration with a visit to the magnificent Royal Palace, home to the Cambodian King, followed by the Silver Pagoda, famous for its floor paved with over 5,000 silver tiles and priceless Buddha statues. Lunch at local restaurant. In the evening, visit Wat Phnom, the sacred hilltop temple that gave the city its name, and drive past the Independence Monument symbolizing Cambodia’s freedom. Dinner & Overnight stay at Phnom Penh.
                </DayCard>

                <DayCard title="Day – 5 | Phnom Penh History & River Cruise">
                  After breakfast, visit the Tuol Sleng Genocide Museum (S21), a former school turned prison during the Khmer Rouge regime, offering a somber yet important historical insight. Continue to the Choeung Ek Killing Fields memorial site to understand Cambodia’s tragic past. Lunch at local restaurant. In the afternoon, visit the National Museum showcasing Khmer art, sculptures, and artifacts. Explore Central Market for souvenirs and local handicrafts. In the evening, enjoy a scenic sunset cruise along the Mekong River, witnessing the skyline and riverside life of Phnom Penh. Dinner & Overnight stay at Phnom Penh.
                </DayCard>

                <DayCard title="Day – 6 | Oudong & Silk Island Experience">
                  After breakfast, proceed to Oudong Mountain, the former royal capital of Cambodia. Climb to the hilltop stupas for panoramic countryside views and learn about Cambodia’s royal history. Continue to Silk Island (Koh Dach), known for traditional silk weaving. Observe local artisans producing handmade silk products using age-old techniques. Lunch en-route at local restaurant. Return to Phnom Penh. Evening free for leisure or shopping at the famous Russian Market. Dinner & Overnight stay at Phnom Penh.
                </DayCard>

                <DayCard title="Day – 7 | Departure from Cambodia">
                  After breakfast, check-out from hotel and transfer to Phnom Penh International Airport for your onward journey. Depart with unforgettable memories of Cambodia’s majestic temples, royal heritage, resilient history, and warm hospitality. Tour Ends.
                </DayCard>

              </div>

              {/* RIGHT SIDE – VIDEO + AD */}


              {/* ADD-ON SECTIONS */}
              <AddOnSection
                title="TONLE SAP LAKE"
                subtitle="Add-on (or) Separately From SIEM REAP"
              />

              {/* LEFT SIDE – ITINERARY */}
              <div className="lg:col-span-2 space-y-8">

                <DayCard title="Day – 1  |  Tonle Sap Lake & Floating Villages">
                  After breakfast at the hotel, proceed towards Tonle Sap Lake, the largest freshwater lake in Southeast Asia and a lifeline for millions of Cambodians. Upon arrival, enjoy a scenic boat ride through the vast waters and visit the fascinating floating villages of Kompong Phluk, where houses, schools, and even markets are built on tall stilts above the water. Witness the unique lifestyle of local fishing communities who adapt to changing water levels throughout the year. Cruise through flooded mangrove forests (seasonal) and observe traditional wooden boats used for daily transport. Lunch at a local restaurant en-route. In the evening, return to Siem Reap. Dinner at Indian/local restaurant. Overnight stay at Siem Reap.
                </DayCard>

                <DayCard title="Day – 2  |  Sacred Kulen Mountain Experience">
                  After breakfast, depart for Phnom Kulen National Park, considered the birthplace of the ancient Khmer Empire and one of Cambodia's most sacred mountains. Visit the giant Reclining Buddha statue carved into sandstone at the hilltop pagoda. Continue to the famous "River of a Thousand Lingas," where intricate carvings of Hindu symbols are etched into the riverbed beneath flowing water. Enjoy a refreshing stop at the Kulen Waterfall, where you may relax or take a swim in the natural pool surrounded by lush greenery. Lunch at a local restaurant. In the afternoon, return to Siem Reap and visit a local handicraft village to observe traditional Khmer craftsmanship such as stone carving and silk weaving. Dinner & Overnight stay at Siem Reap.
                </DayCard>

                <DayCard title="Day – 3  |  Beng Mealea & Koh Ker Exploration">
                  Departure: After breakfast, check-out of the Hotel in the afternoon.  if time permits and proceed to the airport for return flight to Kolkata, India. Tour ends
                </DayCard>

              </div>
              {/* MAIN CIRCUIT TITLE */}

            </div>
            {/* RIGHT SIDE – VIDEO + AD */}
            <div className="space-y-8 lg:sticky lg:top-24 h-fit">

              {/* Video Section */}
              <div className="bg-white rounded-3xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  Watch Cambodia Ancient Kingdom Video
                </h3>

                <div className="aspect-video rounded-xl overflow-hidden">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                    title="Tonle Sap Lake Tour"
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
        title="Cambodia Ancient Kingdom Packages"
        subtitle="Experience the Kingdom of Wonder with curated journeys"

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
    <div className="bg-white shadow-xl rounded-3xl p-8 border-l-4 border-orange-600">
      <h3 className="text-2xl font-semibold text-orange-700 mb-4">{title}</h3>
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
