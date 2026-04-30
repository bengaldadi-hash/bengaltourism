"use client"

import Image from 'next/image'
import { MapPin, Calendar, Users, Star, Clock, Camera, Sun, Home, IndianRupee, Award, Compass, Utensils, Building, Trees, Ship, Sparkles, Train, ShoppingBag, Book, Mountain, Waves, Fish, Bird, Tent, Flame, PartyPopper, Heart, Sprout, CarFront } from 'lucide-react'
import TourPricingSection from "@/components/TourPricingSection"
import ContactCTA from '@/components/ContactCTA'

export default function JapanPage() {
  return (
    <main className="text-gray-800">

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8SmFwYW58ZW58MHx8MHx8fDA%3D"
            alt="Beautiful Japan with cherry blossoms and traditional temples"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-pink-900/80 via-purple-800/60 to-pink-900/80"></div>
        </div>

        <div className="relative h-full flex items-center justify-center text-center text-white px-6">
          <div className="max-w-4xl">
            <div className="flex items-center justify-center gap-2 mb-4">
              <CarFront className="w-6 h-6 text-pink-400" />
              <span className="text-pink-400 font-semibold tracking-wide">Tradition Meets Future</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Japan
              <span className="block text-3xl md:text-5xl mt-2 text-pink-300">
                Tokyo • Kyoto • Osaka • Mount Fuji
              </span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Experience the perfect blend of ancient traditions and cutting-edge technology
              with cherry blossoms, temples, and vibrant cities
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="bg-pink-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-pink-400 transition transform hover:scale-105">
                Explore Japan
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-pink-800 transition transform hover:scale-105">
                Book Japanese Journey
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm">Discover the Land of Rising Sun</span>
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
            <h1 className="text-4xl md:text-5xl font-bold text-pink-700">
              Visit and Explore Japan
            </h1>
            <p className="text-lg text-gray-700">
              Tokyo, Kyoto, Osaka, Mount Fuji, Cherry Blossoms with Bengal Tourism
            </p>
            <p className="text-gray-600">
              Special Tailor made Combination Package, Number of Days & Cost can be designed on Request.
            </p>
          </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10">
            <div className="lg:col-span-2 space-y-8">
          {/* MAIN CIRCUIT TITLE */}
          <SectionTitle
            title="JAPAN"
            subtitle="Land of the Rising Sun With TOKYO – KYOTO – OSAKA-"
          />
            {/* LEFT SIDE – ITINERARY */}
            <div className="lg:col-span-2 space-y-8">
              <DayCard title="Day – 1 | Arrival in Tokyo">
                Arrival at Narita or Haneda International Airport where our local representative will warmly welcome you and assist with transfer to your hotel in Tokyo. Enjoy a comfortable drive through the ultra-modern cityscape of Japan’s capital. Upon arrival, check-in at your hotel and relax after your long journey. The evening is free for leisure — you may explore nearby streets, convenience stores, or experience your first glimpse of Tokyo’s vibrant nightlife. Optional walk through local neighborhoods to experience Japanese culture, vending machines, anime stores and neon-lit streets. Dinner at Indian or local restaurant. Overnight stay at Tokyo.
              </DayCard>

              <DayCard title="Day – 2 | Tokyo City Exploration">
                After breakfast at the hotel, proceed for a full-day guided city tour of Tokyo, a perfect blend of tradition and technology. Visit the iconic Tokyo Tower for panoramic views of the city skyline. Drive past the historic Imperial Palace, the residence of Japan’s Royal Family. Continue to Asakusa district to visit the famous Senso-ji (Asakusa Kannon Temple), Tokyo’s oldest Buddhist temple, followed by a walk through Nakamise Shopping Street for traditional souvenirs and snacks. Lunch at local restaurant. In the evening, experience the world-famous Shibuya Crossing, one of the busiest pedestrian intersections in the world. Explore Harajuku district known for youth fashion and pop culture. Dinner & Overnight stay at Tokyo.
              </DayCard>

              <DayCard title="Day – 3 | Mount Fuji & Hakone Experience">
                After breakfast, depart for a scenic excursion to Mount Fuji, Japan’s highest and most sacred mountain. Drive to the Mount Fuji 5th Station (subject to weather conditions) for spectacular views and photography opportunities. Visit the Fuji Visitor Center to learn about the mountain’s history and volcanic activity. Continue to Hakone region where you will enjoy a relaxing cruise on Lake Ashi offering stunning views of Mount Fuji on clear days. Experience the Mount Komagatake Ropeway for panoramic views of mountains and valleys. Lunch en-route at local restaurant. Return to Tokyo in the evening. Dinner & Overnight stay at Tokyo.
              </DayCard>

              <DayCard title="Day – 4 | Bullet Train to Kyoto">
                After breakfast, transfer to Tokyo Station to board the world-famous Shinkansen Bullet Train to Kyoto, experiencing Japan’s advanced railway technology. Enjoy the smooth and fast journey through beautiful landscapes. Upon arrival in Kyoto, check-in at your hotel. Begin your Kyoto sightseeing with visit to the magnificent Kinkaku-ji Temple (Golden Pavilion), covered in gold leaf and surrounded by serene gardens. Visit Ryoan-ji Temple famous for its Zen rock garden symbolizing simplicity and meditation. Continue to Kiyomizu-dera Temple offering panoramic views of Kyoto city. Lunch en-route. In the evening, stroll through the historic Gion district, known for traditional wooden houses and possible Geisha sightings. Dinner & Overnight stay at Kyoto.
              </DayCard>

              <DayCard title="Day – 5 | Kyoto & Nara Cultural Tour">
                After breakfast, visit the iconic Fushimi Inari Taisha Shrine, famous for its thousands of vibrant red torii gates forming scenic walking trails up the mountain. Continue to Nara, Japan’s ancient capital. Visit Todai-ji Temple housing the Great Buddha statue, one of the largest bronze Buddha statues in the world. Explore Nara Park where friendly deer roam freely, considered sacred messengers in Japanese culture. Lunch at local restaurant. Return to Kyoto in the afternoon. Evening free for shopping at Nishiki Market or exploring traditional tea houses. Dinner & Overnight stay at Kyoto.
              </DayCard>

              <DayCard title="Day – 6 | Kyoto to Osaka">
                After breakfast, transfer to Osaka, known as Japan’s food capital. Begin sightseeing with a visit to Osaka Castle, a historic landmark surrounded by scenic gardens and moat. Continue to Shitenno-ji Temple, one of Japan’s oldest temples. Lunch at local restaurant. Explore the lively Dotonbori district famous for neon lights, street food and entertainment. Visit the Umeda Sky Building observatory deck for breathtaking sunset views of Osaka skyline. Enjoy shopping at Shinsaibashi arcade. Dinner & Overnight stay at Osaka.
              </DayCard>

              <DayCard title="Day – 7 | Departure from Osaka">
                After breakfast, check-out from hotel. Depending on your flight schedule, free time for last-minute shopping or leisure. Transfer to Kansai International Airport for your onward flight. Depart with unforgettable memories of Japan’s rich culture, advanced technology, serene temples and vibrant cities. Tour Ends.
              </DayCard>

            </div>

            {/* ADD-ON SECTIONS */}
            <AddOnSection
              title="HIROSHIMA"
              subtitle="Add-on (or) Separately From OSAKA"
            />


            {/* LEFT SIDE – ITINERARY */}
            <div className="lg:col-span-2 space-y-8">

              <DayCard title="Day – 1  |  Osaka to Hiroshima">
                After an early breakfast at the hotel in Osaka, transfer to Shin-Osaka Station to board the world-famous Shinkansen Bullet Train to Hiroshima. Enjoy the smooth high-speed journey through the scenic Japanese countryside. Upon arrival in Hiroshima, proceed for a guided city tour beginning with the iconic Peace Memorial Park, a powerful reminder of history and resilience. Visit the Atomic Bomb Dome (UNESCO World Heritage Site), one of the few structures that remained standing after the 1945 bombing, followed by the Hiroshima Peace Memorial Museum where detailed exhibits narrate the events and the city's remarkable recovery journey. Lunch at a local restaurant. Later, transfer to your hotel for check-in and relaxation. Evening free for leisure — you may explore Hiroshima downtown, try authentic Japanese street food like Okonomiyaki (Hiroshima-style), or enjoy shopping at Hondori Street. Dinner at Indian/Local restaurant. Overnight stay at Hiroshima.
              </DayCard>

              <DayCard title="Day – 2  |  Hiroshima – Miyajima Island Excursion">
                After breakfast, proceed to Miyajimaguchi Port and board a ferry to the beautiful Miyajima Island, known as one of Japan’s most scenic spots. Visit the world-famous Itsukushima Shrine, renowned for its iconic “floating” Torii Gate that appears to stand on water during high tide — a truly breathtaking sight. Stroll through the charming island streets filled with traditional shops and local snack stalls. Later, take the Mount Misen Ropeway (cable car) to enjoy panoramic views of the Seto Inland Sea and surrounding islands. Explore observation decks and walking trails offering spectacular photo opportunities. Lunch at a local restaurant featuring regional delicacies. In the afternoon, return to Hiroshima by ferry. Evening free for personal exploration or relaxation at hotel. Dinner & Overnight stay at Hiroshima.
              </DayCard>

              <DayCard title="Day – 3  |  Hiroshima to Osaka">
                   After breakfast, check-out from hotel. Depending on your flight schedule, free time for last-minute shopping or leisure. Transfer to Kansai International Airport for your onward flight. Depart with unforgettable memories of Japan’s rich culture, advanced technology, serene temples and vibrant cities. Tour Ends.
              </DayCard>
            </div>
            </div>


            {/* RIGHT SIDE – VIDEO + AD */}
            <div className="space-y-8 lg:sticky lg:top-24 h-fit">

              {/* Video Section */}
              <div className="bg-white rounded-3xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  Watch Japan Tour Video
                </h3>

                <div className="aspect-video rounded-xl overflow-hidden">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                    title="Japan Tour"
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
        title="Japan Culture & Technology Packages"
        subtitle="Experience the Land of the Rising Sun with curated journeys"

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
    <div className="bg-white shadow-xl rounded-3xl p-8 border-l-4 border-pink-600">
      <h3 className="text-2xl font-semibold text-pink-700 mb-4">{title}</h3>
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
