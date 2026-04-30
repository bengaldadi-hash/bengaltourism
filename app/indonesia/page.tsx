"use client"

import Image from 'next/image'
import { MapPin, Calendar, Users, Star, Clock, Camera, Sun, Home, IndianRupee, Award, Compass, Utensils, Building, Trees, Ship, Sparkles, Train, ShoppingBag, Book, Mountain, Waves, Fish, Bird, Tent, Flame, PartyPopper, Heart, Sprout, TreePalm } from 'lucide-react'
import TourPricingSection from "@/components/TourPricingSection"
import ContactCTA from '@/components/ContactCTA'

export default function IndonesiaPage() {
  return (
    <main className="text-gray-800">

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1501179691627-eeaa65ea017c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8SW5kb25lc2lhfGVufDB8fDB8fHww"
            alt="Beautiful Indonesia with tropical beaches and temples"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-yellow-900/80 via-green-800/60 to-yellow-900/80"></div>
        </div>

        <div className="relative h-full flex items-center justify-center text-center text-white px-6">
          <div className="max-w-4xl">
            <div className="flex items-center justify-center gap-2 mb-4">
              <TreePalm className="w-6 h-6 text-yellow-400" />
              <span className="text-yellow-400 font-semibold tracking-wide">Island Paradise</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Indonesia
              <span className="block text-3xl md:text-5xl mt-2 text-yellow-300">
                Bali • Jakarta • Lombok • Yogyakarta
              </span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Experience tropical islands, vibrant culture, and breathtaking landscapes
              with pristine beaches, ancient temples, and warm hospitality
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="bg-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-yellow-400 transition transform hover:scale-105">
                Explore Indonesia
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-green-800 transition transform hover:scale-105">
                Book Island Journey
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm">Discover the Emerald Archipelago</span>
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
            <h1 className="text-4xl md:text-5xl font-bold text-green-700">
              Visit and Explore Indonesia
            </h1>
            <p className="text-lg text-gray-700">
              Bali, Jakarta, Lombok, Yogyakarta, Temples with Bengal Tourism
            </p>
            <p className="text-gray-600">
              Special Tailor made Combination Package, Number of Days & Cost can be designed on Request.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10">
            <div className="lg:col-span-2 space-y-8">
              {/* MAIN CIRCUIT TITLE */}
              <SectionTitle
                title="INDONESIA"
                subtitle="Island Paradise With BALI – JAKARTA – LOMBOK-"
              />



              {/* LEFT SIDE – ITINERARY */}
              <div className="lg:col-span-2 space-y-8">

                <DayCard title="Day – 1 | Arrival in Bali – Sunset at Tanah Lot">
                  Arrival at Ngurah Rai International Airport, Denpasar (Bali), where our local representative will warmly welcome you and assist with transfer to your hotel in Kuta or Seminyak. Enjoy a scenic drive passing through Bali’s vibrant streets and traditional architecture. Upon arrival, check-in at hotel and relax after your journey. In the evening, proceed to the iconic Tanah Lot Temple, one of Bali’s most photographed sea temples, beautifully perched on a rock formation amidst the Indian Ocean. Witness a breathtaking sunset view as waves crash dramatically against the temple rocks — a truly magical experience. Dinner at Indian/local restaurant. Overnight stay at Bali.
                </DayCard>

                <DayCard title="Day – 2 | Bali Cultural & Heritage Tour">
                  After breakfast, embark on a full-day cultural exploration of Bali’s spiritual and artistic heartland. Visit Tirta Empul Temple, famous for its sacred holy spring water where locals perform purification rituals. Continue to the stunning Tegallalang Rice Terraces, known for their breathtaking layered green landscapes and traditional irrigation system (Subak). Enjoy scenic photo stops and optional Bali Swing experience. Lunch at a local restaurant overlooking lush valleys. Later, explore Ubud Art Market for handcrafted souvenirs, paintings, wooden carvings and Balinese artwork. In the evening, visit the dramatic Uluwatu Temple, situated on a cliff 70 meters above the ocean, and witness the mesmerizing Kecak Fire Dance performance at sunset. Dinner & Overnight stay at Bali.
                </DayCard>

                <DayCard title="Day – 3 | Bali Beaches & Water Adventure">
                  After breakfast, proceed to Tanjung Benoa Beach, the hub for exciting water sports activities. Enjoy thrilling experiences such as Banana Boat Ride, Jet Ski, Parasailing or optional scuba diving (at own cost). Continue to the pristine Nusa Dua Beach for relaxation, sunbathing and enjoying turquoise waters. Lunch at a beachfront restaurant offering fresh seafood and Indonesian delicacies. In the evening, explore the lively Seminyak area known for luxury boutiques and beach clubs. Witness a stunning sunset at Double Six Beach while relaxing by the shore. Dinner & Overnight stay at Bali.
                </DayCard>

                <DayCard title="Day – 4 | Bali to Jakarta – Capital City Experience">
                  After breakfast, transfer to the airport for your flight to Jakarta, the dynamic capital of Indonesia. Upon arrival, transfer to hotel and check-in. Begin sightseeing with a visit to the National Monument (Monas), a symbol of Indonesian independence offering panoramic city views. Continue to the grand Istiqlal Mosque, the largest mosque in Southeast Asia, showcasing magnificent Islamic architecture. Lunch at local restaurant. In the evening, explore Jakarta’s historic Old Town (Kota Tua), featuring colonial-era buildings, museums and lively street performances. Dinner & Overnight stay at Jakarta.
                </DayCard>

                <DayCard title="Day – 5 | Jakarta City Highlights">
                  After breakfast, proceed for a full-day Jakarta city tour. Visit Taman Mini Indonesia Indah (Beautiful Indonesia Miniature Park), showcasing diverse Indonesian cultures, traditional houses and heritage exhibits from across the archipelago. Continue to Ancol Dreamland, a large waterfront entertainment complex. Explore Sea World Aquarium featuring exotic marine life. Lunch en-route at local restaurant. Evening free for shopping at Grand Indonesia Mall, one of Southeast Asia’s largest luxury malls. Dinner & Overnight stay at Jakarta.
                </DayCard>

                <DayCard title="Day – 6 | Jakarta to Lombok – Island Escape">
                  After breakfast, transfer to airport for your flight to Lombok, a peaceful island known for pristine beaches and natural beauty. Upon arrival, transfer to Senggigi area and check-in at hotel. Visit Senggigi Beach, famous for its calm waters and scenic views. Continue to Nipah Beach to witness a serene sunset with Mount Agung visible across the sea (on clear days). Lunch at local restaurant. Evening free to relax at resort or enjoy beachside walk. Dinner & Overnight stay at Lombok.
                </DayCard>

                <DayCard title="Day – 7 | Departure from Lombok">
                  After breakfast, check-out from hotel. Depending on your flight schedule, free time for leisure or last-minute souvenir shopping. Transfer to Lombok International Airport for your onward journey. Depart with unforgettable memories of Indonesia’s spiritual temples, tropical beaches, vibrant cities and island charm. Tour Ends.
                </DayCard>

              </div>
              {/* ADD-ON SECTIONS */}
              <AddOnSection
                title="YOGYAKARTA"
                subtitle="Add-on (or) Separately From JAKARTA"
              />


              {/* LEFT SIDE – ITINERARY */}
              <div className="lg:col-span-2 space-y-8">

                <DayCard title="Day – 1  |  Jakarta to Yogyakarta – Borobudur & Prambanan">
                  After breakfast at your hotel in Jakarta, transfer to the airport for your morning flight to Yogyakarta, the cultural heart of Java Island. Upon arrival, meet your local representative and transfer to the hotel for check-in and freshening up. Begin your exploration with a visit to the magnificent Borobudur Temple, a UNESCO World Heritage Site and the world’s largest Buddhist monument. Built in the 9th century, this architectural masterpiece features intricate stone carvings and stupas that narrate Buddhist teachings. Climb to the upper terraces to enjoy panoramic views of lush green landscapes and surrounding volcanoes. Lunch at a local restaurant en-route. In the evening, visit the majestic Prambanan Temple Complex, the largest Hindu temple site in Indonesia, dedicated to Lord Shiva, Vishnu, and Brahma. Witness the temple’s towering spires glowing beautifully during sunset. Dinner at Indian/local restaurant. Overnight stay at Yogyakarta.
                </DayCard>

                <DayCard title="Day – 2  |  Yogyakarta Heritage & City Tour">
                  After breakfast, proceed for a guided city tour of Yogyakarta, known for its royal heritage and traditional arts. Visit the Sultan’s Palace (Kraton), the residence of the Sultan of Yogyakarta, showcasing Javanese culture, royal artifacts, and traditional architecture. Continue to Taman Sari Water Castle, a historic royal garden complex featuring elegant pools, underground tunnels, and unique Islamic-European architectural influences. Later, visit Kota Gede, famous as the silver craftsmanship village, where you can observe skilled artisans creating intricate handmade jewelry and souvenirs. Lunch at local restaurant. In the evening, enjoy shopping at Malioboro Street, the vibrant shopping hub offering batik textiles, handicrafts, souvenirs, and street food. Experience local street performances and traditional music. Dinner & Overnight stay at Yogyakarta.
                </DayCard>

                <DayCard title="Day – 3  |  Mount Merapi & Return to Jakarta">
                  

                   Departure: After breakfast, check-out of the Hotel in the afternoon. ECapture stunning photographs of Java’s dramatic natural beauty. if time permits and proceed to the airport for return flight to Kolkata, India. Tour ends
                </DayCard>

              </div>
            </div>
            {/* RIGHT SIDE – VIDEO + AD */}
            <div className="space-y-8 lg:sticky lg:top-24 h-fit">

              {/* Video Section */}
              <div className="bg-white rounded-3xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  Watch Indonesia Tour Video
                </h3>

                <div className="aspect-video rounded-xl overflow-hidden">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                    title="Yogyakarta Tour"
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
        title="Indonesia Island Paradise Packages"
        subtitle="Experience the Emerald Archipelago with curated journeys"

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
    <div className="bg-white shadow-xl rounded-3xl p-8 border-l-4 border-green-600">
      <h3 className="text-2xl font-semibold text-green-700 mb-4">{title}</h3>
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
