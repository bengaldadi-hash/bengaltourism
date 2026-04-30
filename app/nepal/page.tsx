"use client"

import Image from 'next/image'
import { MapPin, Calendar, Users, Star, Clock, Camera, Sun, Home, IndianRupee, Award, Compass, Utensils, Building, Trees, Ship, Sparkles, Train, ShoppingBag, Book, Mountain, Waves, Fish, Bird, Tent, Flame, PartyPopper, Heart, Sprout } from 'lucide-react'
import ContactCTA from '@/components/ContactCTA'
import PackagePricing from '@/components/PackagePricing'
import TourPricingSection from '@/components/TourPricingSection'

export default function NepalPage() {
  return (
    <main className="text-gray-800">

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1720811970882-70a5196ee37e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TmVwYWwlMjAlMjYlMjBLYXRobWFuZHV8ZW58MHx8MHx8fDA%3D"
            alt="Himalayan mountains with ancient temple and prayer flags"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-green-900/80 via-emerald-800/60 to-green-900/80"></div>
        </div>

        <div className="relative h-full flex items-center  justify-center text-center text-white px-6">
          <div className="max-w-4xl">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Mountain className="w-6 h-6 text-yellow-400" />
              <span className="text-yellow-400 font-semibold tracking-wide">Nepal Himalayan Paradise</span>
            </div>

            <h1 className="text-5xl md:text-7xl text-center font-bold mb-6 leading-tight">
              Nepal
              <span className="block text-3xl md:text-5xl mt-2 text-green-300">
                Kathmandu • Patan • Bhaktapur • Nagarkot
              </span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-center text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Experience the mystical Himalayan kingdom with ancient temples,
              cultural heritage, and breathtaking mountain views
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="bg-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-yellow-400 transition transform hover:scale-105">
                Explore Nepal
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-green-800 transition transform hover:scale-105">
                Book Himalayan Journey
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm">Discover the Himalayas</span>
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>


      <div className="bg-gray-50 py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto space-y-16">

          {/* HEADER */}
          <div className="flex flex-col  space-y-2">


            <div className='flex gap-5 items-center'>
              <h1 className="text-4xl md:text-5xl font-bold text-yellow-600">
                Nepal Tour Itinerary
              </h1>
              <a href='/book-tour' className='bg-yellow-500 px-4 py-4 text-white rounded-full'>
                Book now For 6N/7D
              </a>
            </div>
            <p className="text-gray-700 text-lg">
              Special Tailor made Combination Package
            </p>

          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10">

  {/* LEFT SIDE – ITINERARY */}
  <div className="lg:col-span-2 space-y-8">

            {/* DAY 01 */}
            <DayCard title="Day - 01">
              Start tour.You will be received by Bengal Tourism/Local Representative on arrival atKathmandu at TIA airport Kathmandu or Kalanki Bus stand, Kathmandu - At an height of 1400 meters / 4600 feet lies the central region of Nepal - Kathmandu valley -  transfer to hotel ½ an hour drive. Overnight stay at Kathmandu.
            </DayCard>

            {/* DAY 02 */}
            <DayCard title="Day - 02">
              After breakfast, full day sightseeing Kathmandu -  PASHUPATI NATH TEMPLE - 5 KM east of Kathmandu city centre. Pashupatinath Temple is one of the most important holiest sites for Hindus all over the world. BOUDHA NATH STUPA -05 km east of central Kathmandu. The stupa stands on a three – tiered platform raised over the crossed rectangles in order to bring the Yantra form. SWAYAMBHU NATH STUPA – 04 km west of central Kathmandu on a little hillock & KATHMANDU DURBAR SQUARE – heart of the Kathmandu city- local name of this area is Hanuman Dhoka – an ancient seat of the Nepalese Royalty. The Royal palace during mediavel times used for Royal Activities, Center of Administration, Cultural Activities and Festivals. Back to hotel or drop to market; back to hotel from market yourself. Overnight stay at Kathmandu.
            </DayCard>

            {/* DAY 03 */}
            <DayCard title="Day – 03">
              After breakfast full day sightseeing Patan & Bhaktapur – PATAN DURBAR SQUARE - 5 KM south of central Kathmandu, across the Bagmati river. This city founded in 3rd century A.D by King Veera Dev. The monuments in this square date back to the medieval Malla period from 16th to 18th century. BHAKTAPUR DURBAR SQUARE - The City of devotees 'Bhaktapur' was founded by AnandDev in 1197 A. D. The existence of the city could be traced back to the Lichavi period (185 – 750 A.D.), according to the Gopal Raj Vamsabali. The present structures were erected from the 12th century to the 18th century. The Durbar square was the seat of the Malla kings located at around 12 KM away from the Kathmandu city. NAGARKOT – located 32 km east of Kathmandu, in Bhaktapur District. At an elevation of 2,195 meters, it is one of the most scenic spots for its sunrise view & Sun set view of the including Mount Everest as well as other snow-capped peaks of the Himalaya range of eastern Nepal. Nagarkot also offers a panoramic view of the Kathmandu Valley. Back to hotel. Overnight stay at Kathmandu.
            </DayCard>

            {/* DAY 04 */}
            <DayCard title="Day – 04">
              After breakfast, transfer* by air/groundfrom Kathmandu to Pokhara. On arrival, transfer to hotel in Pokhara. Evening free. Overnight stay at Pokhara.

              (Alternative option) Drive towards Chitwan & Mankamana by road transfer. Overnight stay at Chitwan.
            </DayCard>

            {/* DAY 05 */}
            <DayCard title="Day – 05">
              After breakfast – Proceed by road towards Pokhara from Chitwan (or) half day sightseeing at Pokhara - Davis Falls, Gupteshwor Mahadev temple cave, Tibetan handicraft centre, Goddess Bindyabashani Temple, Seti river gorge, Mahendra cave , (duration nearly 04-05 hours) & Tal Varahi Temple. Overnight stay at Pokhara.
            </DayCard>

            {/* DAY 06 */}
            <DayCard title="Day – 06">
              Early in the morning 4 – 4.30 AM departure from hotel, drive up Sarangkot hill & a few minutes walk to observe a stunning view of Sunrise over snow caped mount Fish Tail & mount Annapurna range (duration about 02.30 hrs). Back to hotel.After breakfast, hotel check out for departure & transfer to airport at Pokhara towards Kathmandu by air (or by road). On arrival, transfer to hotel at Kathmandu. Evening free.Overnight stay at Kathmandu(or)Proceed towards return journey.
            </DayCard>

            {/* DAY 07 */}
            <DayCard title="Day – 07">
              Early morningbreakfast. Departure transfer to TIA Airport Kathmandu forwarding / return journey. Tour ends.
            </DayCard>

  </div>

  {/* RIGHT SIDE – VIDEO + AD */}
  <div className="space-y-8 lg:sticky lg:top-24 h-fit">

    {/* Video Section */}
    <div className="bg-white rounded-3xl shadow-lg p-6">
      <h3 className="text-xl font-bold mb-4 text-gray-800">
        Watch Nepal Tour Video
      </h3>

      <div className="aspect-video rounded-xl overflow-hidden">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
          title="Nepal Tour"
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

          {/* EXTRA COST SECTION */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-3xl p-8 shadow-md">
            <p className="text-gray-700 leading-8">
              *All ground transfer by AC Car. Kathmandu- Pokhara round air fare (USD$125 or equivalent in INR per person) or return ground transfer by AC Car/MUV (USD$400 or equivalent in INR for 4 PAX / vehicle) will be charged extra if availed.
            </p>
          </div>

          {/* RECOMMENDED */}
          <div className="bg-white rounded-3xl shadow-xl p-8 text-center">
            <h3 className="text-2xl font-semibold text-indigo-600 mb-4">
              Recommended Stay
            </h3>
            <p className="text-gray-700 leading-8">
              To stay at a resort of our choice at Kathmandu & Pokhara.
              See some names of Hotels, Resorts, Home Stay where we keep our Guests.
            </p>
          </div>

        </div>
      </div>
      <TourPricingSection
        title="Nepal Elite Mountain Retreats"
        subtitle="Curated Himalayan experiences with comfort & exclusivity"


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
  children: React.ReactNode;
}
/* Reusable Day Card Component */
function DayCard({ title, children }: SectionProps) {
  return (
    <div className="bg-white shadow-lg rounded-3xl p-8 border-l-4 border-yellow-500">
      <h2 className="text-2xl font-semibold text-yellow-600 mb-4">{title}</h2>
      <p className="text-gray-700 leading-8 whitespace-pre-line text-lg">
        {children}
      </p>
    </div>
  )
}