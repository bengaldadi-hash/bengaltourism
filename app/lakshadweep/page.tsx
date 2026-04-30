"use client"

import Image from 'next/image'
import { MapPin, Calendar, Users, Star, Clock, Camera, Sun, Home, IndianRupee, Award, Compass, Utensils, Building, Trees, Ship, Sparkles, Train, ShoppingBag, Book, Mountain, Waves, Fish, Bird, Tent, Flame, PartyPopper, Heart, Sprout } from 'lucide-react'
import ContactCTA from '@/components/ContactCTA'
import PackagePricing from '@/components/PackagePricing'
import TourPricingSection from '@/components/TourPricingSection'

export default function LakshadweepPage() {
  return (
    <main className="text-gray-800">

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1572025310208-2fd6b91764c1?w=1920&h=1080&fit=crop"
            alt="Pristine coral islands of Lakshadweep with crystal clear turquoise waters"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/80 via-blue-800/60 to-teal-900/80"></div>
        </div>

        <div className="relative h-full flex items-center justify-center text-white px-6">
          <div className="max-w-4xl">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Waves className="w-6 h-6 text-cyan-400" />
              <span className="text-cyan-400 font-semibold tracking-wide">Lakshadweep Coral Paradise</span>
            </div>

            <h1 className="text-5xl  text-center  md:text-7xl font-bold mb-6 leading-tight">
              Lakshadweep
              <span className="block text-3xl md:text-5xl mt-2 text-cyan-300">
                Coral Islands • Beach Paradise • Marine Life
              </span>
            </h1>

            <p className="text-xl  text-center  md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Discover India's ultimate tropical destination with pristine coral islands,
              crystal clear waters, and vibrant marine ecosystems
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="bg-cyan-500 text-black px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-cyan-400 transition transform hover:scale-105">
                Explore Islands
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-cyan-800 transition transform hover:scale-105">
                Book Coral Paradise
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm">Discover Coral Paradise</span>
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
            <h1 className="text-4xl md:text-5xl font-bold text-cyan-600">
              Visit & Explore Lakshadweep
            </h1>
            <p className="text-lg text-gray-700">
              Agatti, Bangaram, Kavaratti & Kadmat Islands
            </p>
            <p className="text-gray-600">
              Special tailor-made Island Packages. Number of Days & Cost can be customized on request.
            </p>
          </div>

          <div className="flex flex-col  space-y-2">


            <div className='flex gap-5 items-center'>
              <h2 className="text-3xl font-bold text-gray-800">LAKSHADWEEP</h2>
              <a href='/book-tour' className='bg-yellow-500 px-4 py-4 text-white rounded-full'>
                Book now For 4N/5D
              </a>
            </div>
            <p className="font-semibold text-gray-700">
              Circuit with AGATTI – BANGARAM – KAVARATTI
            </p>
          </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10">
            <div className="lg:col-span-2 space-y-8">
          <div className="grid md:grid-cols-1 gap-10 items-stretch">

            {/* DAY 1 */}
            <div className="bg-white shadow-xl rounded-3xl p-8 border-l-4 border-pink-500 h-full flex flex-col ">
              <h3 className="text-xl font-semibold mb-4 text-cyan-600">Day –1</h3>
              <div className="text-gray-700 leading-8 flex-grow">
                Arrival at Agatti Airport. Our representative will receive you and transfer you to the beach resort. Agatti is famous for its turquoise lagoon and coral reefs. After check-in, relax and enjoy the pristine beach.

                Post lunch, enjoy light water activities like kayaking or lagoon walk. Evening free to witness mesmerizing sunset views over the Arabian Sea. Dinner & Overnight stay at Beach Resort in Agatti.
              </div>
            </div>

            {/* DAY 2 */}
            <div className="bg-white shadow-xl rounded-3xl p-8 border-l-4 border-blue-500 h-full flex flex-col ">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">Day –2</h3>
              <div className="text-gray-700 leading-8 flex-grow">
                After breakfast, proceed by boat to Bangaram Island – one of the most beautiful coral islands in Lakshadweep. Famous for crystal clear water and exotic marine life.

                Enjoy snorkeling, scuba diving (optional), and swimming in shallow lagoons. Experience vibrant coral reefs and colorful tropical fish. Lunch at Bangaram.

                Return to Agatti by evening. Dinner & Overnight stay at Resort.
              </div>
            </div>

            {/* DAY 3 */}
            <div className="bg-white shadow-xl rounded-3xl p-8 border-l-4 border-green-500 h-full flex flex-col ">
              <h3 className="text-xl font-semibold mb-4 text-green-600">Day –3</h3>
              <div className="text-gray-700 leading-8 flex-grow">
                After breakfast, transfer to Kavaratti Island – the capital of Lakshadweep. Visit Marine Aquarium showcasing rare marine species and corals.

                Explore Ujra Mosque, enjoy lagoon boating and optional glass-bottom boat ride. Relax on the white sandy beaches surrounded by palm trees.

                Evening at leisure. Dinner & Overnight stay at Resort in Kavaratti.
              </div>
            </div>

            {/* DAY 4 */}
            <div className="bg-white shadow-xl rounded-3xl p-8 border-l-4 border-purple-500 h-full flex flex-col ">
              <h3 className="text-xl font-semibold mb-4 text-purple-600">Day –4</h3>
              <div className="text-gray-700 leading-8 flex-grow">
                After breakfast, day free for leisure and adventure activities. Enjoy optional scuba diving, deep sea fishing, kayaking, reef walking or simply relax by the beach.

                Lakshadweep offers some of the best coral lagoons in India perfect for photography and peaceful relaxation.

                Dinner & Overnight stay at Resort.
              </div>
            </div>

            <div className="bg-white shadow-xl rounded-3xl p-8 border-l-4 border-purple-500 h-full flex flex-col ">

              <h3 className="text-xl font-semibold mb-4 text-pink-600">Day –5</h3>
              <div className="text-gray-700 leading-8 flex-grow">
                After breakfast, check-out from Resort. Transfer to Agatti Airport for return journey with unforgettable memories of Lakshadweep’s coral paradise.

                Tour Ends.
              </div>
            </div>
          </div>
          {/* ADDITIONAL ISLAND DESTINATIONS */}
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl font-bold text-indigo-600">
              Additional Island Destinations
            </h2>
            <p className="text-lg text-gray-700">
              Explore more pristine islands with our add-on packages
            </p>
          </div>
          {/* KRABI */}
          <Section title="KADMAT ISLAND" subtitle="Add-on (or) Separately with KADMAT ">
            <Content>
              Day –1: Arrival at Kadmat Island. Transfer to Resort. Relax at white sandy beach. Evening sunset walk. Dinner & Overnight stay.

              <br />
              Day –2: After breakfast, enjoy water sports like snorkeling, scuba diving, kayaking & reef walking. Explore marine biodiversity and coral gardens. Evening free for leisure. Dinner & Overnight stay.

              <br />
              Day –3: After breakfast, check-out and transfer to Agatti Airport for onward journey. Tour ends.
            </Content>
          </Section>
          <Section title="MINICOY ISLAND" subtitle="Add-on (or) Separately with MINICOY">
            <Content>
              Day –1: Arrival at Minicoy Island. Transfer to beach resort. Minicoy is famous for its crescent-shaped lagoon and lighthouse views. After check-in, relax on the untouched beaches surrounded by coconut groves. Evening visit to the historic Lighthouse offering panoramic sunset views. Dinner & Overnight stay at Resort.

              <br /><br />

              Day –2: After breakfast, enjoy lagoon activities like snorkeling, kayaking and glass-bottom boat ride. Explore vibrant coral reefs and tropical marine species. Later visit local village to experience traditional Mahl culture and tuna fishing heritage. Evening free for leisure by the beach. Dinner & Overnight stay.

              <br /><br />

              Day –3: After breakfast, check-out and transfer by boat/flight to Agatti for onward journey. Tour Ends.
            </Content>
          </Section>
          <Section title="KALPENI ISLAND" subtitle="Add-on (or) Separately with KALPENI">
            <Content>
              Day –1: Arrival at Kalpeni Island. Transfer to resort. Kalpeni is known for its shallow lagoons and beautiful coral debris beaches. After check-in, relax and enjoy serene beach time. Evening sunset photography and lagoon walk. Dinner & Overnight stay.

              <br /><br />

              Day –2: After breakfast, enjoy water sports like snorkeling, reef walking, kayaking and canoeing in crystal clear lagoon waters. Visit nearby small islets – Tilakkam and Pitti (if permitted). Enjoy beach picnic and marine exploration. Evening free for relaxation. Dinner & Overnight stay.

              <br /><br />

              Day –3: After breakfast, check-out and transfer to Agatti Airport for departure. Tour Ends.
            </Content>
          </Section>

</div>
          <div className="space-y-8 lg:sticky lg:top-24 h-fit">

            {/* Video Section */}
            <div className="bg-white rounded-3xl shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                Watch Lakshadweep Tour Video
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
        title="Lakshadweep Luxury Island Retreats"
        subtitle="Crystal-clear waters, private beaches & curated tropical escapes"
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