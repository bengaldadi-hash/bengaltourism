"use client"

import Image from 'next/image'
import { MapPin, Calendar, Users, Star, Clock, Camera, Sun, Home, IndianRupee, Award, Compass, Utensils, Building, Trees, Ship, Sparkles, Train, ShoppingBag, Book, Mountain, Waves, Fish, Bird, Tent, Flame, PartyPopper, Heart, Sprout } from 'lucide-react'
import ContactCTA from '@/components/ContactCTA'
import PackagePricing from '@/components/PackagePricing'
import TourPricingSection from '@/components/TourPricingSection'

export default function ThailandPage() {
  return (
    <main className="text-gray-800">

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1712487650909-2aaf5c5eac36?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8VGhhaWxhbmQlMjAlMjYlMjBCYW5na29rfGVufDB8fHww"
            alt="Tropical beach with palm trees and crystal clear water in Thailand"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 via-teal-800/60 to-blue-900/80"></div>
        </div>

        <div className="relative h-full flex items-center justify-center text-center text-white px-6">
          <div className="max-w-4xl">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sun className="w-6 h-6 text-yellow-400" />
              <span className="text-yellow-400 text-center font-semibold tracking-wide">Thailand Tropical Paradise</span>
            </div>

            <h1 className="text-5xl md:text-7xl text-center font-bold mb-6 leading-tight">
              Thailand
              <span className="block text-3xl text-center md:text-5xl mt-2 text-teal-300">
                Bangkok • Pattaya • Phi Phi Islands • Krabi
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-center mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Experience the ultimate tropical paradise with stunning beaches,
              crystal clear waters, and vibrant island adventures
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="bg-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-yellow-400 transition transform hover:scale-105">
                Explore Thailand
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-800 transition transform hover:scale-105">
                Book Island Paradise
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm">Discover tropical Thailand</span>
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-gray-50 py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto space-y-20">

          {/* HEADER */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-pink-600">
              Visit & Explore Thailand
            </h1>
            <p className="text-lg text-gray-700">
              Bangkok, Pattaya, Phuket, Krabi & Koh Samui with Bengal Tourism
            </p>
            <p className="text-gray-600">
              Special Tailor made Combination Package, Number of Days & Cost can be designed on Request.
            </p>
          </div>

          {/* MAIN CIRCUIT */}
          <div className="flex flex-col  space-y-2">


            <div className='flex gap-5 items-center'>
              <h2 className="text-3xl font-bold text-gray-800">THAILAND</h2>
              <a href='/book-tour' className='bg-yellow-500 px-4 py-4 text-white rounded-full'>
                Book now For 4N/5D
              </a>
            </div>
            <p className="font-semibold text-gray-700">
              Circuit with [BANGKOK – PATTAYA -4N/5D]
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10">
            <div className="lg:col-span-2 space-y-8">

            {/* DAY 1 */}
            <div className="bg-white shadow-xl rounded-3xl p-8 border-l-4 border-pink-500  flex flex-col ">
              <h3 className="text-xl font-semibold mb-4 text-pink-600">Day –1</h3>
              <div className="text-gray-700 leading-8 flex-grow">
                Start from Kolkata: Board a flight at Kolkata Airport & reach Bangkok after a 2 hrs 40 mins non-stop flight to a warm reception. A 2.5 hrs drive will take you to picturesque Pattaya, a breathtakingly beautiful beach destination. A tropical beach retreat town, Pattaya is a perfect place to laze around under the swaying coconut trees, exploring white sandy beaches, numerous water sports facilities & crystal azure water. Night life in Pattaya; specially for adventure seekers, it is extremely & most happening place in the world. Lunch en-route. Post lunch, will take you for a village tour to Nong Nooch. You can either have the evening all to yourself or see the Alkazar Show at 08.00pm (extra cost), a world famous Cabaret show that can give Lido & Paris’s Moulin Rogue a run for their money. Return & Dinner place of your choice & Overnight at Hotel at Pattaya.
              </div>
            </div>

            {/* DAY 2 */}
            <div className="bg-white shadow-xl rounded-3xl p-8 border-l-4 border-blue-500  flex flex-col ">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">Day –2</h3>
              <div className="text-gray-700 leading-8 flex-grow">
                Coral Island: After breakfast, speed boat your way to the idyllic Coral Island (Kohlan) through the aqua blue water of the Gulf of Thailand. Spend the day luxuriating under the warm tropical sun. Relax, swim, snorkel or just lie around sunning on the island’s immaculate golden beach. Lunch included in this tour. Return in the evening & free for you to shop, explore & seek more. Dinner at place of your choice & Overnight at Hotel at Pattaya
              </div>
            </div>

            {/* DAY 3 */}
            <div className="bg-white shadow-xl rounded-3xl p-8 border-l-4 border-green-500  flex flex-col ">
              <h3 className="text-xl font-semibold mb-4 text-green-600">Day –3</h3>
              <div className="text-gray-700 leading-8 flex-grow">
                Towards Bangkok: After breakfast, you will enjoy the journey back to Bangkok where we will take you on a Temple & City Tour to experience another side of Bangkok. Thailand is home to more than 26,000 Wats (Buddhist temples) and we will take to see the most distinguished Wats, such as Wat Po (Temple of the Reclining Buddha), the largest & the oldest shrine in Bangkok or Grand Palace tour. Evening free to shop, explore & seek more. Dinner at place of your choice & Overnight at Hotel at Bangkok.
              </div>
            </div>

            {/* DAY 4 */}
            <div className="bg-white shadow-xl rounded-3xl p-8 border-l-4 border-purple-500 flex flex-col ">
              <h3 className="text-xl font-semibold mb-4 text-purple-600">Day –4</h3>
              <div className="text-gray-700 leading-8 flex-grow">
                ALTERNATIVELY: After breakfast at hotel, morning free for shopping. Later in the evening, Cruise on river Chao Phraya & dinner on board. Return to the hotel & night free to explore varied night life of Bangkok. Overnight stay at Hotel / Resort at Bangkok.

              </div>
            </div>
            {/* DAY 4 */}
            <div className="bg-white shadow-xl rounded-3xl p-8 border-l-4 border-purple-500  flex flex-col ">
              <h3 className="text-xl font-semibold mb-4 text-purple-600">Day –5</h3>
              <div className="text-gray-700 leading-8 flex-grow">


                Departure: After breakfast, check-out of the Hotel in the afternoon. Visit the Siam Ocean World (extra cost) & if time permits and proceed to the airport for return flight to Kolkata, India. Tour ends
              </div>
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
          {/* ADDITIONAL DESTINATIONS */}
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl font-bold text-indigo-600">
              Additional Island Destinations
            </h2>
            <p className="text-lg text-gray-700">
              Explore more stunning locations with our add-on packages
            </p>
          </div>

          {/* PHUKET */}
          <Section title="PHUKET" subtitle="Add-on (or) Separately with PHI PHI ISLAND">
            <Content>
              Day –1: Start of tour: Arrival at Phuket Airport (or) from Krabi by road. Transfer to Hotel. Check into Hotel. Lunch at a place of your choice. Then a short tour local places of Interest. . Return in the evening & free to yourself. Dinner at a place of your choice & Overnight at Hotel / Resort at Phuket.

              <br /><br />

              Day –2: Local sightseeing at PHUKET: After breakfast, visit Phi Phi Island. Lunch at Phi Phi Island. Return in the evening & free time to yourself. Dinner at a place of your choice & Overnight at Hotel / Resort / Phuket.

              <br /><br />

              Day –3: After breakfast, Check-out (10.00 am) Transfer by Air to Bangkok Airport for your return journey (or) transfer to Krabi by road transfer. Drop at Hotel. Tour ends
            </Content>
          </Section>

          {/* KRABI */}
          <Section title="KRABI" subtitle="Add-on (or) Separately with JAMES BOND ISLAND">
            <Content>
              Day –1: Start of tour: Our representative will be there to receive the Guest at arrival at Krabi (or) by road from Phuket. Check into Hotel. Lunch at any place on your own. Day at Leisure (or) can explore the Ao Nang Beach and further enjoy exciting island-hopping tour to the tropical hot spots in the Krabi Sea which includes Phra Nang Cave, Tup Island, Chicken Island and Poda Island, etc. Return in the evening & free to yourself. Dinner at a place of your choice & Overnight at Hotel / Resort at Krabi.

              <br /><br />

              Day –2: Local sightseeing at KRABI: After breakfast, proceed to Visit James Bond Island (or) Four Island tour of Koh Poda, Phranang Caves, Tup Islets by popular long tail boats. Lunch at any local place. Return in the evening & rree to yourself. Dinner at a place of your choice & Overnight at Hotel / Resort at Krabi.

              <br /><br />

              Day –3: After breakfast, Check-out (10.00 am) from Farmhouse/Homestay. Transfer by Air to Bangkok for your return journey (or) and then transfer to Koh Samui / Phuket. Drop at Hotel. Tour ends
            </Content>
          </Section>

          {/* KOH SAMUI */}
          <Section title="KOH SAMUI" subtitle="Add-on (or) Separately with TALAI NAI - BUA BOK">
            <Content>
              Day –1: Start of tour: Our representative will be there to receive the Guest at Arrival at Koh Samui (or) by road from Phuket. Lunch en-route or on arrival at Hotel. Then a short tour local places of Interest. . Return in the evening & free to yourself. Dinner at a place of your choice & Overnight at Hotel / Resort / Koh Samui.

              <br /><br />

              Day –2: Local sightseeing at KOH SAMUI: After breakfast, Take the Island Tour. Visit Jungle Safari, Experience Green Rain Forest, magnificent Coral Reefs, Scuba Diving, Snorkelling, amazing Spa Activities, etc. On land, your guide will accompany you by foot to the beautiful Emerald Lake, known to locals as Talay Nai. Make the most of the views of this impressive natural saltwater reservoir in an atmosphere of peace and serenity. Afternoon you will have the opportunity to climb to the highest part of the island, go hiking through the Bua Bok cave, which houses stalactites and stalagmites in the shape of a lotus flower or if you prefer, you can choose to relax and soak up the sun on the beach. Lunch at any local place. Return in the evening . Return in the evening & free to yourself. Dinner at a place of your choice & Overnight at Hotel / Resort / Koh Samui.

              <br /><br />

              Day –3: After breakfast, Check-out (10.00 am) from Farmhouse/Homestay. Transfer by Air to Bangkok for your return journey (or) and then transfer to Pattaya/Karabi/Phuket. Drop at Hotel. Tour ends.
            </Content>
          </Section>

        </div>
      </div>

      <TourPricingSection
        title="Thailand Elite Tropical Retreats"
        subtitle="Luxury resorts, private tours & world-class island escapes"

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



interface SectionProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

function Section({ title, subtitle, children }: SectionProps) {
  return (
    <div className="bg-white shadow-xl rounded-3xl p-10 space-y-6">
      <div className="flex flex-col  space-y-2">


        <div className='flex gap-5 items-center'>
          <h2 className="text-3xl font-bold text-indigo-600">{title}</h2>
          <a href='/book-tour' className='bg-yellow-500 px-4 py-4 text-white rounded-full'>
            Book now For 2N/3D
          </a>
        </div>
        <p className="text-gray-700 font-medium">{subtitle}</p>
      </div>
      {children}
    </div>
  )
}

interface ContentProps {
  children: React.ReactNode;
}

function Content({ children }: ContentProps) {
  return <div className="text-gray-700 leading-8">{children}</div>
}