"use client"

import Image from 'next/image'
import { MapPin, Calendar, Users, Star, Clock, Camera, Sun, Home, IndianRupee, Award, Compass, Utensils, Building, Trees, Ship, Sparkles, Train, ShoppingBag, Book, Mountain, Waves, Fish, Bird, Tent, Flame, PartyPopper, Heart, Sprout, Waves as WaveIcon } from 'lucide-react'
import TourPricingSection from "@/components/TourPricingSection"
import ContactCTA from '@/components/ContactCTA'

export default function SriLankaPage() {
  return (
    <main className="text-gray-800">

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1519566335946-e6f65f0f4fdf?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3JpJTIwbGFua2F8ZW58MHx8MHx8fDA%3D"
            alt="Beautiful Sri Lanka with beaches and tea plantations"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/80 via-teal-800/60 to-cyan-900/80"></div>
        </div>

        <div className="relative h-full flex items-center justify-center text-center text-white px-6">
          <div className="max-w-4xl">
            <div className="flex items-center justify-center gap-2 mb-4">
              <WaveIcon className="w-6 h-6 text-cyan-400" />
              <span className="text-cyan-400 font-semibold tracking-wide">Pearl of the Indian Ocean</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Sri Lanka
              <span className="block text-3xl md:text-5xl mt-2 text-cyan-300">
                Colombo • Kandy • Bentota • Sigiriya
              </span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Enjoy lush landscapes, wildlife safaris, and pristine beaches
              with ancient cities, tea plantations, and warm hospitality
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="bg-cyan-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-cyan-400 transition transform hover:scale-105">
                Explore Sri Lanka
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-teal-800 transition transform hover:scale-105">
                Book Island Journey
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm">Discover the Teardrop Island</span>
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
            <h1 className="text-4xl md:text-5xl font-bold text-cyan-700">
              Visit and Explore Sri Lanka
            </h1>
            <p className="text-lg text-gray-700">
              Colombo, Kandy, Bentota, Sigiriya, Tea Plantations with Bengal Tourism
            </p>
            <p className="text-gray-600">
              Special Tailor made Combination Package, Number of Days & Cost can be designed on Request.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10">
            <div className="lg:col-span-2 space-y-8">
              {/* MAIN CIRCUIT TITLE */}
              <SectionTitle
                title="SRI LANKA"
                subtitle="Pearl of the Indian Ocean With COLOMBO – KANDY – BENTOTA-"
              />
              {/* LEFT SIDE – ITINERARY */}
              <div className="lg:col-span-2 space-y-8">

                <DayCard title="Day – 1 | Arrival in Colombo – Capital City Experience">
                  Arrival at Bandaranaike International Airport, where our local representative will warmly welcome you and assist with transfer to your hotel in Colombo. Enjoy a comfortable drive through Sri Lanka's bustling commercial capital. Upon arrival, check-in at hotel and relax after your journey. In the evening, proceed for a guided Colombo city tour. Visit Independence Square, a symbol of Sri Lanka's freedom, and explore the colonial charm of Galle Face Green where locals gather to enjoy sunset views over the Indian Ocean. Drive past historic landmarks, colonial buildings, modern shopping complexes, and vibrant markets. Dinner at Indian/local restaurant. Overnight stay at Colombo.
                </DayCard>

                <DayCard title="Day – 2 | Colombo to Kandy – Cultural Heritage">
                  After breakfast, proceed to Kandy, the cultural capital of Sri Lanka. En route, visit the famous Pinnawala Elephant Orphanage, where you can observe rescued elephants being fed and bathing in the river — a heartwarming experience. Continue your scenic drive through lush greenery and rolling hills to Kandy. Upon arrival, check-in at hotel. Visit the sacred Temple of the Sacred Tooth Relic (Sri Dalada Maligawa), one of Buddhism's most revered pilgrimage sites housing a relic of Lord Buddha's tooth. Lunch at local restaurant en-route. In the evening, enjoy a vibrant cultural show featuring traditional Kandyan dances, fire performances, and drumming. Dinner & Overnight stay at Kandy.
                </DayCard>

                <DayCard title="Day – 3 | Kandy to Sigiriya – Rock Fortress & Cave Temples">
                  After breakfast, drive towards Sigiriya, passing through scenic countryside landscapes. Visit the iconic Sigiriya Rock Fortress, a UNESCO World Heritage Site and one of Sri Lanka's most famous landmarks. Climb the massive rock citadel built by King Kashyapa in the 5th century and admire ancient frescoes, mirror wall inscriptions, and breathtaking panoramic views from the summit. Lunch at local restaurant. Later, visit the magnificent Dambulla Cave Temple, another UNESCO site featuring ancient Buddhist murals and statues inside rock caves. Dinner & Overnight stay at Sigiriya or Habarana.
                </DayCard>

                <DayCard title="Day – 4 | Polonnaruwa & Minneriya Safari">
                  After breakfast, proceed to Polonnaruwa Ancient City, the medieval capital of Sri Lanka and a UNESCO World Heritage Site. Explore the well-preserved ruins including the Royal Palace, Audience Hall, and the impressive Gal Vihara rock sculptures depicting Buddha statues carved from granite. Lunch at local restaurant. In the evening, enjoy an exciting jeep safari at Minneriya National Park (seasonal), famous for "The Gathering" where large herds of wild elephants can be seen near the reservoir. Experience Sri Lanka's rich wildlife and natural beauty. Dinner & Overnight stay at Sigiriya.
                </DayCard>

                <DayCard title="Day – 5 | Sigiriya to Nuwara Eliya – Tea Country">
                  After breakfast, proceed towards Nuwara Eliya via the scenic Ramboda Pass. Enjoy breathtaking views of waterfalls, mountains, and mist-covered tea plantations along the way. Visit a traditional tea plantation and tea factory to witness the process of Ceylon tea production and enjoy a fresh cup of world-famous Sri Lankan tea. Lunch en-route. Upon arrival in Nuwara Eliya, check-in at hotel. Evening city tour of "Little England," known for its colonial-era buildings, cool climate, and British-style gardens. Dinner & Overnight stay at Nuwara Eliya.
                </DayCard>

                <DayCard title="Day – 6 | Nuwara Eliya to Bentota – Beach Relaxation">
                  After breakfast, proceed to Bentota, Sri Lanka's popular beach destination. En route, visit the beautiful Devon Falls and St. Clair's Falls cascading down lush hillsides. Continue the scenic journey towards the southern coast. Upon arrival, check-in at your beach resort. Lunch at hotel. Evening free to relax by the golden sandy beach, enjoy sea breeze, or optional water sports activities. Witness a stunning sunset over the Indian Ocean. Dinner & Overnight stay at Bentota.
                </DayCard>

                <DayCard title="Day – 7 | Departure">
                  After breakfast, check-out from hotel and transfer to Bandaranaike International Airport for your onward journey. Depart with unforgettable memories of Sri Lanka's ancient heritage, sacred temples, wildlife safaris, misty tea plantations, and pristine beaches. Tour Ends.
                </DayCard>

              </div>
              {/* ADD-ON SECTIONS */}
              <AddOnSection
                title="GALLE"
                subtitle="Add-on (or) Separately From BENTOTA"
              />
              {/* LEFT SIDE – ITINERARY */}
              <div className="lg:col-span-2 space-y-8">

                <DayCard title="Day – 1  |  Bentota to Galle – Colonial Coastline">
                  After breakfast at your beach resort in Bentota, proceed towards the historic coastal city of Galle along the scenic southern shoreline. Enjoy picturesque ocean views during the drive. Upon arrival, visit the magnificent Galle Fort, a UNESCO World Heritage Site originally built by the Portuguese and later fortified by the Dutch in the 17th century. Walk through its charming cobblestone streets lined with colonial-era buildings, boutique cafes, art galleries, and souvenir shops. Explore landmarks such as the Dutch Reformed Church, the iconic lighthouse, and the Maritime Museum showcasing Sri Lanka's naval history. Lunch at a local seaside restaurant. In the evening, relax at the pristine Unawatuna Beach, known for its golden sands and calm turquoise waters — perfect for swimming or sunset photography. Dinner at Indian/local restaurant. Overnight stay at Galle.
                </DayCard>

                <DayCard title="Day – 2  |  Galle Culture & Coastal Traditions">
                  After breakfast, begin your cultural exploration with a visit to the Martin Wickramasinghe Folk Museum in Koggala, dedicated to Sri Lanka's renowned literary figure and showcasing traditional village life artifacts. Continue to Koggala Lake area to witness the famous Sri Lankan stilt fishermen — a unique traditional fishing method where fishermen balance on wooden poles planted in shallow waters. Capture memorable photographs of this iconic coastal practice. Lunch at local restaurant featuring fresh seafood specialties. Later, visit a Sea Turtle Hatchery, where you will learn about conservation efforts to protect endangered sea turtle species and observe baby turtles being cared for before release into the ocean. Evening free to stroll along Galle Fort ramparts and enjoy sunset views over the Indian Ocean. Dinner & Overnight stay at Galle.
                </DayCard>

                <DayCard title="Day – 3  |  Galle to Colombo – Coastal Heritage & Shopping">
                   After breakfast, check-out from hotel and transfer to Bandaranaike International Airport for your onward journey. Depart with unforgettable memories of Sri Lanka's ancient heritage, sacred temples, wildlife safaris, misty tea plantations, and pristine beaches. Tour Ends.
                </DayCard>

              </div>
            </div>
            {/* RIGHT SIDE – VIDEO + AD */}
            <div className="space-y-8 lg:sticky lg:top-24 h-fit">

              {/* Video Section */}
              <div className="bg-white rounded-3xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  Watch Sri Lanka Tour Video
                </h3>

                <div className="aspect-video rounded-xl overflow-hidden">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                    title="Galle Tour"
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
        title="Sri Lanka Island Paradise Packages"
        subtitle="Experience the Teardrop Island with curated journeys"

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
    <div className="bg-white shadow-xl rounded-3xl p-8 border-l-4 border-cyan-600">
      <h3 className="text-2xl font-semibold text-cyan-700 mb-4">{title}</h3>
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
