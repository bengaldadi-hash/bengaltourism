"use client"

import Image from 'next/image'
import { MapPin, Calendar, Users, Star, Clock, Camera, Sun, Home, IndianRupee, Award, Compass, Utensils, Building, Trees, Ship, Sparkles, Train, ShoppingBag, Book, Mountain, Waves, Fish, Bird, Tent, Flame, PartyPopper, Heart, Sprout, Mountain as MountainIcon } from 'lucide-react'
import TourPricingSection from "@/components/TourPricingSection"
import ContactCTA from '@/components/ContactCTA'

export default function SwitzerlandPage() {
  return (
    <main className="text-gray-800">

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1594069758873-e79e9075eb7d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3dpdHplcmxhbmR8ZW58MHx8MHx8fDA%3D"
            alt="Beautiful Switzerland with Alps and lakes"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/80 via-teal-800/60 to-emerald-900/80"></div>
        </div>

        <div className="relative h-full flex items-center justify-center text-center text-white px-6">
          <div className="max-w-4xl">
            <div className="flex items-center justify-center gap-2 mb-4">
              <MountainIcon className="w-6 h-6 text-emerald-400" />
              <span className="text-emerald-400 font-semibold tracking-wide">Alpine Paradise</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Switzerland
              <span className="block text-3xl md:text-5xl mt-2 text-emerald-300">
                Zurich • Lucerne • Interlaken • Geneva
              </span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Witness breathtaking Alpine scenery, serene lakes, and charming towns
              with snow-capped peaks, chocolate, and pristine nature
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="bg-emerald-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-emerald-400 transition transform hover:scale-105">
                Explore Switzerland
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-teal-800 transition transform hover:scale-105">
                Book Alpine Journey
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm">Discover the Alpine Paradise</span>
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
            <h1 className="text-4xl md:text-5xl font-bold text-emerald-700">
              Visit and Explore Switzerland
            </h1>
            <p className="text-lg text-gray-700">
              Zurich, Lucerne, Interlaken, Geneva, Alps with Bengal Tourism
            </p>
            <p className="text-gray-600">
              Special Tailor made Combination Package, Number of Days & Cost can be designed on Request.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10">
            <div className="lg:col-span-2 space-y-8">
              {/* MAIN CIRCUIT TITLE */}
              <SectionTitle
                title="SWITZERLAND"
                subtitle="Alpine Paradise With ZURICH – LUCERNE – INTERLAKEN-"
              />


              {/* LEFT SIDE – ITINERARY */}
              <div className="lg:col-span-2 space-y-8">

                <DayCard title="Day – 1 | Arrival in Zurich – Swiss Welcome">
                  Arrival at Zurich International Airport where our representative will warmly welcome you and assist with transfer to your hotel. After check-in and relaxation, begin your introduction to Switzerland with an evening walking tour of Zurich’s charming Old Town (Altstadt), known for its narrow cobblestone streets and medieval buildings. Visit the iconic Grossmünster Church, a symbol of the city’s Reformation history, and stroll along the scenic Lake Zurich promenade offering tranquil sunset views. Experience Zurich’s elegant atmosphere blending tradition and modernity. Dinner at Indian/local restaurant. Overnight stay at Zurich.
                </DayCard>

                <DayCard title="Day – 2 | Zurich City & Lake Experience">
                  After breakfast, proceed for a comprehensive Zurich city tour. Visit the Swiss National Museum to explore Switzerland’s cultural history and heritage. Continue to Kunsthaus Zurich, home to impressive collections of Swiss and European art. Enjoy a relaxing cruise on Lake Zurich, admiring picturesque lakeside villages and snow-capped Alpine backdrops. Lunch at local restaurant en-route. In the evening, visit Uetliberg Mountain for panoramic views over Zurich city, the lake, and the distant Alps. Dinner & Overnight stay at Zurich.
                </DayCard>

                <DayCard title="Day – 3 | Zurich to Lucerne – Lakeside Beauty">
                  After breakfast, board a scenic Swiss train to Lucerne, one of Switzerland’s most picturesque towns. Upon arrival, check-in at hotel. Visit the historic Chapel Bridge (Kapellbrücke), Europe’s oldest covered wooden bridge adorned with painted panels. Continue to the Lion Monument, carved into rock to honor Swiss Guards. Lunch at local restaurant. In the evening, enjoy a leisurely walk around Lake Lucerne, surrounded by mountains and charming architecture. Dinner & Overnight stay at Lucerne.
                </DayCard>

                <DayCard title="Day – 4 | Mount Titlis – Glacier Adventure">
                  After breakfast, proceed for a full-day excursion to Mount Titlis, one of Switzerland’s most spectacular mountain destinations. Travel by cable car, including the world’s first rotating Rotair cable car, offering 360-degree panoramic views of snow-covered peaks. At the summit, explore the Ice Grotto and Glacier Park, and experience thrilling activities like the Cliff Walk suspension bridge. Lunch at a mountain restaurant with breathtaking Alpine views. Evening return to Lucerne. Dinner & Overnight stay at Lucerne.
                </DayCard>

                <DayCard title="Day – 5 | Lucerne to Interlaken – Scenic Rail Journey">
                  After breakfast, embark on a scenic train journey to Interlaken, passing through stunning valleys, lakes, and Alpine landscapes. Upon arrival, check-in at hotel. Visit Höhematte Park offering views of the majestic Jungfrau mountain. Explore Lake Thun and enjoy the serene surroundings. Lunch at local restaurant en-route. In the evening, stroll through Interlaken town known for adventure sports and charming Swiss chalets. Dinner & Overnight stay at Interlaken.
                </DayCard>

                <DayCard title="Day – 6 | Jungfraujoch – Top of Europe">
                  After breakfast, proceed for a full-day excursion to Jungfraujoch, famously known as the “Top of Europe.” Travel by cogwheel railway through tunnels carved inside the Eiger and Mönch mountains, offering breathtaking views. At the summit, explore the Ice Palace with its intricate ice sculptures and visit the Sphinx Observatory for panoramic views of the Aletsch Glacier, Europe’s longest glacier. Lunch at a mountain restaurant. Evening return to Interlaken. Dinner & Overnight stay at Interlaken.
                </DayCard>

                <DayCard title="Day – 7 | Departure">
                  After breakfast, check-out from hotel and transfer to Zurich Airport for your onward journey. Depart with unforgettable memories of Switzerland’s majestic Alps, crystal-clear lakes, scenic train rides, and charming cities. Tour Ends.
                </DayCard>

              </div>

              {/* RIGHT SIDE – VIDEO + AD */}






              {/* ADD-ON SECTIONS */}
              <AddOnSection
                title="GENEVA"
                subtitle="Add-on (or) Separately From INTERLAKEN"
              />


              {/* LEFT SIDE – ITINERARY */}
              <div className="lg:col-span-2 space-y-8">

                <DayCard title="Day – 1  |  Interlaken to Geneva – Lakeside Elegance">
                  After breakfast, board a scenic Swiss train from Interlaken to Geneva, enjoying panoramic views of rolling vineyards, crystal-clear lakes, and snow-capped Alpine peaks along the journey. Upon arrival in Geneva, check-in at your hotel and relax. Begin your exploration with a visit to the iconic Jet d’Eau fountain, one of the tallest water fountains in the world and a symbol of Geneva. Continue to St. Pierre Cathedral in the Old Town, where you can climb the tower for breathtaking views over Lake Geneva and the city rooftops. Lunch at a local restaurant en-route. In the evening, enjoy a peaceful walk along Lake Geneva promenade, soaking in the serene atmosphere and picturesque sunset views. Dinner at Indian/local restaurant. Overnight stay at Geneva.
                </DayCard>

                <DayCard title="Day – 2  |  Geneva – International & Cultural Hub">
                  After breakfast, proceed for a guided Geneva city tour highlighting its global significance. Visit the United Nations Office at Geneva (exterior or guided visit subject to availability), one of Europe’s key diplomatic centers. Continue to the Red Cross and Red Crescent Museum, offering interactive exhibits on humanitarian efforts worldwide. Explore the Palais des Nations complex and admire the famous “Broken Chair” monument symbolizing peace and human rights. Lunch at a local restaurant. In the evening, visit the charming Carouge district, known for its Mediterranean-style architecture, artisan boutiques, and cozy cafés — offering a relaxed, artistic vibe distinct from central Geneva. Dinner & Overnight stay at Geneva.
                </DayCard>

                <DayCard title="Day – 3  |  Montreux & Chillon – Swiss Riviera Experience">
                  After breakfast, check-out from hotel and transfer to Zurich Airport for your onward journey. Depart with unforgettable memories of Switzerland’s majestic Alps, crystal-clear lakes, scenic train rides, and charming cities. Tour Ends.
                </DayCard>

              </div>
            </div>

            {/* RIGHT SIDE – VIDEO + AD */}
            <div className="space-y-8 lg:sticky lg:top-24 h-fit">

              {/* Video Section */}
              <div className="bg-white rounded-3xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  Watch Switzerland Tour Video
                </h3>

                <div className="aspect-video rounded-xl overflow-hidden">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                    title="Geneva Tour"
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
        title="Switzerland Alpine Paradise Packages"
        subtitle="Experience the Alpine Paradise with curated journeys"
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
    <div className="bg-white shadow-xl rounded-3xl p-8 border-l-4 border-emerald-600">
      <h3 className="text-2xl font-semibold text-emerald-700 mb-4">{title}</h3>
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
