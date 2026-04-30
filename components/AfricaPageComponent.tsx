"use client"

import Image from 'next/image'
import { MapPin, Calendar, Users, Star, Clock, Camera, Sun, Home, IndianRupee, Award, Compass, Utensils, Building, Trees, Ship, Sparkles, Train, ShoppingBag, Book, Mountain, Waves, Fish, Bird, Tent, Flame, PartyPopper, Heart, Sprout, TreePalm as PalmTree } from 'lucide-react'
import TourPricingSection from "@/components/TourPricingSection"
import ContactCTA from '@/components/ContactCTA'

export default function  AfricaPageComponent() {
  return (
    <main className="text-gray-800">

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1731994634956-94a42f6b6290?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWZyaWNhLXdpbGRsaWZlfGVufDB8fDB8fHww"
            alt="Beautiful Africa with wildlife and savanna"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-green-900/80 via-yellow-800/60 to-green-900/80"></div>
        </div>

        <div className="relative h-full flex items-center justify-center text-center text-white px-6">
          <div className="max-w-4xl">
            <div className="flex items-center justify-center gap-2 mb-4">
              <PalmTree className="w-6 h-6 text-green-400" />
              <span className="text-green-400 font-semibold tracking-wide">Wildlife Paradise</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Africa Wildlife Adventures
              <span className="block text-3xl md:text-5xl mt-2 text-green-300">
                Kenya • Tanzania • South Africa • Safari
              </span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Explore the vast savannas, witness the Big Five, and experience thrilling safari adventures
              with exotic wildlife, tribal cultures, and breathtaking landscapes
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-green-500 transition transform hover:scale-105">
                Explore Africa
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-yellow-800 transition transform hover:scale-105">
                Book Safari Journey
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm">Discover the Wild Heart of Africa</span>
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
              Visit and Explore Africa
            </h1>
            <p className="text-lg text-gray-700">
              Kenya, Tanzania, South Africa, Safari, Wildlife with Bengal Tourism
            </p>
            <p className="text-gray-600">
              Special Tailor made Combination Package, Number of Days & Cost can be designed on Request.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10">
            <div className="lg:col-span-2 space-y-8">
              {/* MAIN CIRCUIT TITLE */}
              <SectionTitle
                title="AFRICA WILDLIFE ADVENTURES"
                subtitle="Wildlife Paradise With KENYA – TANZANIA – SOUTH AFRICA-"
              />

              {/* MAIN DAY WISE */}
              <div className=" grid  gap-10 grid-col-1">
                {/* KENYA – TANZANIA – CAPE TOWN GRAND SAFARI */}

                <DayCard title="Day – 1 | Arrival in Nairobi – Wildlife & Heritage">
                  Welcome to Kenya! Upon arrival at Jomo Kenyatta International Airport,
                  our representative will warmly receive you and assist with your transfer
                  to the hotel. After check-in, relax and freshen up.

                  In the evening, visit the famous Giraffe Centre where you can interact
                  with endangered Rothschild giraffes and learn about wildlife conservation.

                  Continue to the historic Karen Blixen Museum, the former home of the
                  renowned author of “Out of Africa,” offering insights into Kenya’s
                  colonial history.

                  Dinner at a local restaurant.

                  Overnight stay at Nairobi.
                </DayCard>


                <DayCard title="Day – 2 | Nairobi to Masai Mara – Into the Wild">
                  After breakfast, depart by road for the world-famous Masai Mara Game Reserve,
                  enjoying scenic views of the Great Rift Valley en-route.

                  Upon arrival, check in at your safari lodge and enjoy lunch.

                  In the afternoon, embark on your first thrilling game drive across the vast
                  savannah grasslands. Keep an eye out for the legendary Big Five —
                  Lion, Leopard, Elephant, Rhino, and Buffalo — along with cheetahs,
                  zebras, and giraffes.

                  Return to the lodge by sunset.

                  Dinner and overnight stay at Masai Mara.
                </DayCard>


                <DayCard title="Day – 3 | Masai Mara Full-Day Safari Experience">
                  Early breakfast followed by a full-day game drive in Masai Mara,
                  one of Africa’s richest wildlife reserves.

                  Enjoy extensive wildlife viewing across different regions of the park.
                  Optional hot air balloon safari (at additional cost) offers breathtaking
                  aerial views of the savannah at sunrise.

                  Visit a traditional Maasai Village to learn about local culture,
                  traditions, and tribal lifestyle.

                  Lunch at the lodge or picnic within the reserve.

                  Evening short game drive before returning to the lodge.

                  Dinner and overnight stay at Masai Mara.
                </DayCard>


                <DayCard title="Day – 4 | Masai Mara to Serengeti – Cross-Border Safari">
                  After breakfast, depart for Serengeti National Park in Tanzania.
                  Cross the Kenya–Tanzania border at Isebania with assistance for
                  immigration formalities.

                  Continue your journey into the endless plains of Serengeti,
                  famous for its vast landscapes and abundant wildlife.

                  Lunch will be arranged en-route.

                  Upon arrival, check in at your lodge.

                  Enjoy an evening game drive in Serengeti, known for its predators
                  and dramatic wildlife encounters.

                  Dinner and overnight stay at Serengeti.
                </DayCard>


                <DayCard title="Day – 5 | Serengeti Safari & Ngorongoro Views">
                  After breakfast, enjoy a full-day safari in Serengeti National Park.

                  Depending on the season, witness the spectacular Great Migration,
                  where thousands of wildebeests and zebras traverse the plains
                  in search of greener pastures.

                  Continue towards the Ngorongoro Conservation Area and enjoy views
                  from the Ngorongoro Crater rim, one of Africa’s most stunning natural wonders.

                  Lunch at the lodge or picnic during the safari.

                  Evening game drive before returning to the lodge.

                  Dinner and overnight stay at Serengeti.
                </DayCard>


                <DayCard title="Day – 6 | Serengeti to Cape Town – Urban & Scenic Beauty">
                  After breakfast, transfer to the nearest airstrip for your onward
                  flight to Cape Town (via connecting city).

                  Upon arrival, transfer to your hotel and check in.

                  Visit the vibrant V&A Waterfront, a lively harbor area offering
                  shopping, dining, and entertainment with stunning views.

                  Lunch at a local restaurant en-route.

                  In the evening, take the Table Mountain cable car ride
                  (weather permitting) for panoramic views of Cape Town,
                  the Atlantic Ocean, and surrounding landscapes.

                  Dinner and overnight stay at Cape Town.
                </DayCard>


                <DayCard title="Day – 7 | Cape Peninsula Tour & Departure">
                  After breakfast, proceed for a scenic Cape Peninsula tour.

                  Visit the Cape of Good Hope, a dramatic coastal landmark
                  known for breathtaking ocean views.

                  Continue to Boulders Beach to see the famous African penguin colony.

                  Enjoy lunch en-route.

                  Later, transfer to Cape Town International Airport
                  for your onward journey with unforgettable memories of Africa.

                  Tour Ends.
                </DayCard>
              </div>

              {/* ADD-ON SECTIONS */}
              <AddOnSection
                title="VICTORIA FALLS"
                subtitle="Add-on (or) Separately From CAPE TOWN"
              />
              <div className=" grid  gap-10 grid-col-1">
                {/* VICTORIA FALLS & CHOBE EXTENSION */}

                <DayCard title="Day – 1 | Cape Town to Victoria Falls – Sunset on the Zambezi">
                  After breakfast, check out from your hotel in Cape Town and transfer
                  to the airport for your flight to Victoria Falls (Zimbabwe or Zambia side).

                  Upon arrival, meet and greet by our local representative and transfer
                  to your hotel. Complete check-in formalities and relax.

                  Later, visit the iconic Victoria Falls Bridge, offering spectacular
                  views of the mighty waterfall and the deep Batoka Gorge below.
                  It is also a popular spot for photography and adventure activities.

                  Lunch will be arranged at a local restaurant en-route.

                  In the evening, enjoy a magical sunset cruise on the Zambezi River.
                  Witness breathtaking African sunsets while spotting hippos,
                  crocodiles, and exotic birdlife in their natural habitat.

                  Dinner at the hotel or a local restaurant.

                  Overnight stay at Victoria Falls.
                </DayCard>


                <DayCard title="Day – 2 | Victoria Falls Guided Tour & Cultural Experience">
                  After breakfast, proceed for a guided tour of Victoria Falls,
                  one of the Seven Natural Wonders of the World and locally
                  known as “Mosi-oa-Tunya” (The Smoke That Thunders).

                  Walk through the rainforest trails and viewpoints to witness
                  the dramatic cascades and mist rising from the falls.
                  Learn about the geology and history of this magnificent wonder.

                  Depending on the water level and season, visit Devil’s Pool,
                  a natural infinity pool located at the edge of the falls
                  (seasonal activity and subject to safety conditions).

                  Lunch will be arranged at a local restaurant.

                  In the evening, enjoy a traditional African cultural show
                  featuring local music, dance performances, and storytelling.

                  Dinner and overnight stay at Victoria Falls.
                </DayCard>


                <DayCard title="Day – 3 | Chobe National Park Safari Adventure">
                  After an early breakfast, depart for a full-day excursion to
                  Chobe National Park in Botswana, renowned for its large elephant
                  population and diverse wildlife.

                  Begin with an exciting morning game drive in open safari vehicles,
                  where you may spot elephants, lions, buffaloes, giraffes,
                  antelopes, and various bird species.

                  Lunch will be served at a lodge inside the park.

                  In the afternoon, enjoy a boat safari along the Chobe River,
                  offering close-up views of wildlife gathering at the water’s edge,
                  including hippos and crocodiles.

                  Later in the evening, return to Victoria Falls.

                  Departure From Victoria Falls. Tour Ends...
                </DayCard>
              </div>
            </div>
            {/* RIGHT SIDE – VIDEO + AD */}
            <div className="space-y-8 lg:sticky lg:top-24 h-fit">

              {/* Video Section */}
              <div className="bg-white rounded-3xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  Watch Africa wildlife Tour Video
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
        title="Africa Wildlife Adventure Packages"
        subtitle="Experience the Wild Heart of Africa with curated journeys"

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
    <div className="bg-white shadow-xl rounded-3xl p-8 border-l-4 border-green-600">
      <h3 className="text-2xl font-semibold text-green-700 mb-4">{title}</h3>
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
