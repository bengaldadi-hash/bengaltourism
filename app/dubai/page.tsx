"use client"

import Image from 'next/image'
import { MapPin, Calendar, Users, Star, Clock, Camera, Sun, Home, IndianRupee, Award, Compass, Utensils, Building, Trees, Ship, Sparkles, Train, ShoppingBag, Book, Mountain, Waves, Fish, Bird, Tent, Flame, PartyPopper, Heart, Sprout, Car } from 'lucide-react'
import PackagePricing from '@/components/PackagePricing'
import ContactCTA from '@/components/ContactCTA'
import TourPricingSection from '@/components/TourPricingSection'

export default function DubaiPage() {
  return (
    <main className="text-gray-800">

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZHViYWl8ZW58MHx8MHx8fDA%3D"
            alt="Dubai skyline with Burj Khalifa and modern architecture"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 via-purple-800/60 to-blue-900/80"></div>
        </div>

        <div className="relative h-full flex items-center justify-center text-center text-white px-6">
          <div className="max-w-4xl">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Building className="w-6 h-6 text-yellow-400" />
              <span className="text-yellow-400 font-semibold tracking-wide">Dubai Luxury Tours</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Dubai
              <span className="block text-3xl md:text-5xl mt-2 text-blue-300">
                Desert Safari • Ferrari World • Luxury Shopping
              </span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Experience the ultimate luxury destination with world-class attractions,
              desert adventures, and premium shopping experiences
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="bg-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-yellow-400 transition transform hover:scale-105">
                Explore Dubai Luxury
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-800 transition transform hover:scale-105">
                Book Premium Experience
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm">Discover luxury Dubai</span>
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-gray-50 py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto space-y-16">

          {/* HEADER */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-amber-600">
              Visit Dubai with Bengal Tourism
            </h1>
            <p className="text-gray-700 text-lg">
              Special Tailor made Combination Package
            </p>
            <p className="text-gray-600">
              Number of Days & Cost can be designed on Request.
            </p>
          </div>

          {/* CIRCUIT TITLE */}
          <div className="flex flex-col  space-y-2">


            <div className='flex gap-5 items-center'>
              <h2 className="text-3xl font-bold text-gray-800">DUBAI</h2>

              <a href='/book-tour' className='bg-yellow-500 px-4 py-4 text-white rounded-full'>
                Book now For 6N/7D
              </a>
            </div>

            <p className="font-semibold text-gray-700">
              Circuit with [BURJ KHALIFA – DESERT SAFARI -6N/7D]
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10">

            {/* LEFT SIDE – ITINERARY */}
            <div className="lg:col-span-2 space-y-8">

              <DayCard title="Day – 1 | Arrival in Dubai – Welcome to the City of Gold">
                Begin your international journey by boarding your flight from Kolkata / Delhi / Mumbai. Upon arrival at Dubai International Airport (Terminal 1/3) in the evening (approx. 05:00–06:00 PM), meet our local representative for a comfortable transfer to your hotel in Dubai. Check-in at Hotel Grand Excelsior / Similar (or selected category hotel). Relax after your journey and enjoy the glittering skyline of Dubai. Evening free for leisure or optional walk around nearby shopping areas. Dinner at Indian/local restaurant. Overnight stay at Dubai.
              </DayCard>

              <DayCard title="Day – 2 | Desert Safari & Luxury Experience">
                After breakfast at the hotel (07:00–09:00 AM), enjoy the morning at leisure. Optional 2-hour Luxury Limousine Ride across Dubai Marina, Jumeirah Beach Road, and iconic skyline (at additional cost). Lunch at restaurant of your choice. In the afternoon, proceed for an exciting Desert Safari in a Hummer or 4x4 vehicle across golden sand dunes. Experience dune bashing, camel rides, sandboarding, and traditional Arabic hospitality at a desert camp. Enjoy live belly dance, Tanoura show, and BBQ buffet dinner under the stars. Return to hotel. Overnight stay at Dubai.
              </DayCard>

              <DayCard title="Day – 3 | Dhow Cruise & Leisure">
                After breakfast, morning free for shopping or exploring Dubai on your own (Gold Souk / Meena Bazaar / Dubai Marina Walk). Lunch at your preferred restaurant. In the evening, proceed for a traditional Dhow Cruise Dinner along Dubai Creek or Marina. Enjoy international buffet dinner with live entertainment while cruising past illuminated skyscrapers and waterfront landmarks. Return to hotel. Overnight stay at Dubai.
              </DayCard>

              <DayCard title="Day – 4 | Abu Dhabi City Tour & Ferrari World">
                After breakfast, proceed for a full-day Abu Dhabi City Tour. Visit Sheikh Zayed Grand Mosque, one of the largest and most beautiful mosques in the world. Drive past Emirates Palace, Presidential Palace, and Corniche. Visit Ferrari World Theme Park (photo stop or entry as per package inclusion). Lunch en-route. Return to Dubai in the evening. Free time for shopping at local malls. Dinner & Overnight stay at Dubai.
              </DayCard>

              <DayCard title="Day – 5 | Burj Khalifa, Dolphin Show & Dubai Mall">
                After breakfast, proceed for Dolphin Show (entry ticket with private transfer). Later visit Ski Dubai (Mall of the Emirates) with entry ticket (as per inclusion). Lunch at restaurant of your choice. In the evening, pick-up around 05:00 PM for Burj Khalifa (124th/125th Floor – as per package). Explore Dubai Mall, enjoy the famous Dubai Fountain Show. Return transfer from mall can be arranged or self-managed. Dinner & Overnight stay at Dubai.
              </DayCard>

              <DayCard title="Day – 5 (Alternative Option) | Atlantis Upgrade">
                Alternatively, after breakfast enjoy a full-day activity of your choice. Upgrade your stay to Atlantis The Palm / Similar (extra cost applicable). Enjoy premium lunch at Atlantis restaurants. Relax at private beach or explore The Palm Island. Dinner & Overnight stay at Atlantis (if upgraded).
              </DayCard>

              <DayCard title="Day – 6 | Atlantis Aquaventure Experience">
                After breakfast, enjoy complimentary access to Aquaventure Waterpark and The Lost Chambers Aquarium (included with Atlantis stay or optional add-on). Experience thrilling water slides, lazy river, and marine exhibits. Afternoon free for leisure or shopping. Lunch at your preferred restaurant. Overnight stay at Atlantis / Dubai hotel (as per selected package).
              </DayCard>

              <DayCard title="Day – 7 | Departure">
                After breakfast, check-out from hotel (11:00–12:00 PM). Transfer to Dubai International Airport 4 hours prior to your flight departure. Enjoy last-minute shopping or dining at airport terminal. Depart with unforgettable memories of Dubai’s luxury lifestyle, desert adventures, world-class attractions, and iconic skyline. Tour Ends.
              </DayCard>

            </div>

            {/* RIGHT SIDE – VIDEO + AD */}
            <div className="space-y-8 lg:sticky lg:top-24 h-fit">

            {/* Video Section */}
            <div className="bg-white rounded-3xl shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                Watch Dubai Video
              </h3>

              <div className="aspect-video rounded-xl overflow-hidden">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                  title="Atlantis Experience"
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
      <div className="bg-gray-50 py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-3">
            <h2 className="text-4xl font-bold text-gray-800">Premium Add-On Experiences</h2>
            <p className="text-gray-600">Enhance your Dubai Journey with Exclusive Experiences</p>
          </div>
          <AddOnSection title="LUXURY YACHT EXPERIENCE" subtitle="Add-on (or) Separately with YACHT CRUISE">

              {/* LEFT SIDE – ITINERARY */}
              <div className="lg:col-span-2 space-y-8">

                <DayCard title="Day – 1 | Dubai Marina Arrival & Private Yacht Sunset Cruise">
                  Arrival in Dubai and transfer to your hotel in the vibrant Dubai Marina district.
                  After check-in and relaxation, proceed in the evening for an exclusive 3-hour Private Yacht Cruise from Dubai Marina.
                  Sail across the sparkling Arabian waters while enjoying a breathtaking sunset backdrop against the world-famous skyline.
                  Witness stunning views of JBR Skyline, Bluewaters Island, and the iconic Ain Dubai from the sea.
                  Indulge in a premium BBQ dinner onboard with soft beverages and enjoy music on a private sound system for a true luxury ambiance.
                  Capture unforgettable photographs with the glittering city lights reflecting on the water.
                  Return to hotel. Overnight stay at Dubai.
                </DayCard>

                <DayCard title="Day – 2 | Sky Views Adventure & Waterfront Fine Dining">
                  After breakfast, visit Sky Views Edge Walk at Address Sky View for a thrilling hands-free walk on the edge of a skyscraper overlooking Burj Khalifa and Downtown Dubai.
                  Experience breathtaking panoramic city views from one of Dubai’s most exciting attractions.
                  Afternoon free for leisure or shopping at Dubai Mall — explore luxury brands, cafes, and optional attractions like Dubai Aquarium or Fountain Show.
                  In the evening, enjoy a premium dinner at a Marina Waterfront Restaurant with elegant ambiance and scenic views of yachts and illuminated skyscrapers.
                  Overnight stay at hotel.
                </DayCard>

                <DayCard title="Day – 3 | Departure">
                  After breakfast at hotel, check-out as per standard timing.
                  Depending on your flight schedule, optional last-minute shopping or leisure time.
                  Transfer to Dubai International Airport for your onward journey.
                  Depart with unforgettable memories of luxury cruising, skyline adventures, and Dubai’s glamorous lifestyle.
                  Tour Ends.
                </DayCard>

              </div>

          </AddOnSection>
          <AddOnSection title="DESERT ROYAL EXPERIENCE" subtitle="Add-on (or) Separately with DESERT ROYAL CAMP">

              {/* LEFT SIDE – ITINERARY */}
              <div className="lg:col-span-2 space-y-8">

                <DayCard title="Day – 1 | Luxury Desert Safari Experience">
                  Arrival in Dubai and transfer to your hotel. Check-in and relax.
                  In the afternoon, proceed for an unforgettable Luxury Desert Safari in a premium 4x4 Land Cruiser across the golden dunes of the Arabian Desert.
                  Experience thrilling dune bashing followed by sandboarding on soft desert slopes.
                  Enjoy a traditional camel ride and capture memorable Falcon Photography in authentic Arabian style.
                  Upon arrival at the exclusive desert camp, relax in VIP seating with personalized service.
                  Indulge in a lavish BBQ buffet dinner under the stars while enjoying live entertainment including Belly Dance, Tanoura Show, and a spectacular Fire Show.
                  Experience traditional Arabic hospitality with henna painting and shisha lounge access.
                  Return to hotel. Overnight stay at Dubai.
                </DayCard>

                <DayCard title="Day – 2 | Sunrise Hot Air Balloon & Cultural Evening">
                  Early morning transfer to the desert for a breathtaking Hot Air Balloon Ride.
                  Float peacefully above the golden dunes while witnessing a spectacular sunrise over the Arabian landscape.
                  Capture stunning aerial photography and enjoy light refreshments after landing.
                  Return to hotel for breakfast and leisure time.
                  In the evening, visit Global Village (seasonal) featuring international pavilions, shopping, and live cultural performances from around the world.
                  Alternatively, explore Miracle Garden (seasonal), home to millions of vibrant floral displays arranged in artistic designs.
                  Dinner at restaurant of your choice. Overnight stay at Dubai.
                </DayCard>

                <DayCard title="Day – 3 | Departure">
                  After breakfast at hotel, check-out as per standard timing.
                  Transfer to Dubai International Airport for your onward journey.
                  Depart with unforgettable memories of desert adventures, sunrise skies, and Dubai’s vibrant lifestyle.
                  Tour Ends.
                </DayCard>

              </div>

          </AddOnSection>
          <AddOnSection title="ATLANTIS LUXURY ESCAPE" subtitle="Add-on (or) Separately with ATLANTIS ">


            {/* LEFT SIDE – ITINERARY */}
            <div className="lg:col-span-2 space-y-8">

              <DayCard title="Day – 1 | Check-in at Atlantis The Palm – Iconic Island Luxury">
                Arrival in Dubai and private transfer to the world-famous Atlantis The Palm, located on the crescent of Palm Jumeirah.
                Upon arrival, check-in to your Luxury Ocean View Room offering breathtaking views of the Arabian Gulf.
                Relax and explore the magnificent resort property featuring grand architecture and marine-themed interiors.
                In the evening, enjoy leisure time at The Pointe, a waterfront dining and entertainment destination overlooking Atlantis, or take a scenic walk along Palm Jumeirah promenade.
                Optional sunset photography session at Palm West Beach.
                Overnight stay at Atlantis The Palm.
              </DayCard>

              <DayCard title="Day – 2 | Aquaventure & The Lost Chambers Experience">
                After breakfast at the hotel, enjoy full-day unlimited access to Aquaventure Waterpark, one of the largest waterparks in the world.
                Experience adrenaline-pumping slides like Leap of Faith, lazy river rides, wave pools, and private beach access exclusive for Atlantis guests.
                Later, visit The Lost Chambers Aquarium, home to over 65,000 marine animals including sharks, rays, and exotic fish species — inspired by the legend of the Lost City of Atlantis.
                Free time to relax by the infinity pools or private beach.
                Optional fine dining experience at one of Atlantis signature restaurants such as Nobu, Ossiano, or Gordon Ramsay’s Bread Street Kitchen (at additional cost).
                Overnight stay at Atlantis The Palm.
              </DayCard>

              <DayCard title="Day – 3 | Departure">
                After breakfast, enjoy final leisure moments at the resort.
                Check-out by 11:00 AM as per hotel policy.
                Private transfer to Dubai International Airport for your onward journey.
                Depart with unforgettable memories of luxury island living, world-class water adventures, and iconic Dubai experiences.
                Tour Ends.
              </DayCard>
            </div>
          </AddOnSection>
        </div>

      </div>
      <TourPricingSection
        title="Dubai Elite Getaway Packages"
        subtitle="Luxury stays, desert safaris & world-class experiences"

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


/* Reusable Day Card Component */
function DayCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white shadow rounded-3xl p-8 border-l-4 border-amber-500">
      <h2 className="text-2xl font-semibold text-amber-600 mb-4">
        {title}
      </h2>
      <p className="text-gray-700 leading-8 whitespace-pre-line text-lg">
        {children}
      </p>
    </div>
  )
}




function AddOnSection({ title, subtitle, children }: { title: string; subtitle: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col  space-y-2">


      <div className='flex gap-5 items-center'>
        <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
        <a href='/book-tour' className='bg-yellow-500 px-4 py-4 text-white rounded-full'>
          Book now For 2N/3D
        </a>

      </div>
      <p className="font-semibold text-gray-700 mb-10">{subtitle}</p>
      {children}
    </div>
  )
} 