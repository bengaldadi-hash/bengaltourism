"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Calendar, Users, IndianRupee, ArrowRight, Clock, Star, Mountain, Waves, Building, Trees, Compass } from "lucide-react";
import RandomPackageSections from "../../components/RandomPackageSections";

// Package categories
const packageCategories = [
  {
    id: "bengal-beckons",
    name: "Bengal Beckons",
    subtitle: "Explore the beauty of West Bengal",
    description: "From the Himalayan foothills to the Bay of Bengal",
    icon: Mountain,
    iconColor: "text-yellow-500",
    bgColor: "from-yellow-500 to-orange-500",
    image: "/video.mp4",
    route: "/packages/bengal-beckons"
  },
  {
    id: "india",
    name: "Incredible India",
    subtitle: "Discover Incredible India",
    description: "From Kashmir to Kanyakumari, experience diverse cultures",
    icon: Building,
    iconColor: "text-orange-500",
    bgColor: "from-orange-500 to-yellow-500",
    image: "/video2.mp4",
    route: "/packages/india"
  },
  {
    id: "foreign-tours",
    name: "Foreign Destinations",
    subtitle: "International Adventures",
    description: "Explore exotic destinations around the world",
    icon: Waves,
    iconColor: "text-blue-500",
    bgColor: "from-blue-500 to-purple-500",
    image: "/video1.mp4",
    route: "/packages/foreign-tours"
  },
  {
    id: "exclusive",
    name: "Exclusive Services",
    subtitle: "Premium & Specialized",
    description: "Medical tourism, wellness, and luxury accommodations",
    icon: Trees,
    iconColor: "text-green-500",
    bgColor: "from-green-500 to-teal-500",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    route: "/packages/exclusive"
  }
];

export default function PackagesPage() {
  const isVideo = (src: string) => {
    return src?.match(/\.(mp4|webm|ogg)$/i);
  };
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/img/Darjeeling.jpeg"
            alt="Bengal Tourism Packages"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-yellow-900/40"></div>
        </div>

        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-6 py-3 mb-8">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-white font-medium text-sm">Premium Tour Packages</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Bengal Tourism's
              <span className="block bg-gradient-to-r from-yellow-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent relative">
                Tour Packages
                <svg className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-3/4 h-4" viewBox="0 0 300 16" fill="none">
                  <path d="M10 8 Q 75 4, 150 8 T 290 8" stroke="url(#gradient)" strokeWidth="3" strokeLinecap="round" />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#EF4444" />
                      <stop offset="50%" stopColor="#F59E0B" />
                      <stop offset="100%" stopColor="#F97316" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed">
              Choose from our wide range of curated tour packages across different categories
            </p>
          </div>
        </div>
      </section>

      {/* Categories Grid Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Explore Our <span className="text-yellow-600">Package Categories</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Select a category to view all available packages in that segment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {packageCategories.map((category, i) => (
              <Link
                key={category.id}
                href={category.route}
                className="group relative bg-white  shadow-lg overflow-hidden transition-all duration-300 "
              >
                {/* Image Background */}
            <div className="relative h-48 overflow-hidden">
  {isVideo(category.image) ? (
<video
  src={category.image}
  controls
  loop
  playsInline
  className="w-full h-full object-cover transition-transform duration-700 ease-out "
/>
  ) : (
    <>
      <Image
        src={category.image}
        alt={category.name}
        fill
        className="object-cover transition-transform duration-700 ease-out "
      />

      {/* Gradient Overlay only for Image */}
      <div className={`absolute inset-0 bg-gradient-to-br ${category.bgColor} opacity-80`}></div>

      {/* Icon Overlay only for Image */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
          <category.icon className={`w-12 h-12 text-white ${category.iconColor}`} />
        </div>
      </div>
    </>
  )}
</div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-yellow-600 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm font-medium text-gray-600 mb-3">
                    {category.subtitle}
                  </p>
                  <p className="text-sm text-gray-500 mb-4 line-clamp-2">
                    {category.description}
                  </p>

                  <div className="flex items-center gap-2 text-yellow-600 font-semibold text-sm group-hover:gap-3 transition-all">
                    <span>Explore Packages</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>

                
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Random Package Sections */}


      {/* Quick Stats Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-600 mb-2">50+</div>
              <div className="text-sm text-gray-600">Tour Packages</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-600 mb-2">15+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-600 mb-2">10K+</div>
              <div className="text-sm text-gray-600">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-600 mb-2">4.8★</div>
              <div className="text-sm text-gray-600">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Terms & Conditions Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Terms & Conditions
          </h2>

          <div className="bg-white rounded-xl shadow-lg p-8 space-y-6">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">ALL INCLUSIVE PRICE:</h3>
              <p className="text-gray-700 leading-relaxed">
                All transfer in Deluxe Car/Bus/Coach/Train Seats/Berth as booked. Accommodation in 2* Dlx Hotels / Resort with Spacious Deluxe Rooms with Satellite TV, essential Toiletries, attached Bath (hot/cold running water) on Double / Triple sharing basis with children. All meals in MAP plan includes Bed Tea, Breakfast, Lunch/Dinner (All meals in Home Stays) Evening Tea/Coffee with bottled Drinking water, Tea / Coffee Maker (where available) in Rooms as inclusive & Complementary Welcome Drinks with all Local sight-seeing as per Itinerary in (SIC).
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">CHILD POLICY:</h3>
              <p className="text-gray-700 leading-relaxed">
                1 CHILD below 4 years Free. 2nd Child and/or above 4 years but below 8 years @ 50% of price in sharing accommodation with parents. Extra Bed & separate Bus/Train seat will be provided to child above 4 years.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">UPGRADE OPTIONS:</h3>
              <p className="text-gray-700 leading-relaxed">
                Upgrade to AC Dlx Rooms / Cottage / Superior View Room / Haveli (@ $10 / Rs.500/-) per person/day (or) to Premium Star Category Hotels / Resorts / Bungalows (@ USD $100 / Rs.7,000/-) per person/day where available. Also upgrade to Non Sharing & Exclusive AC Car/Vehicle (@ $25 / Rs.2500/-) per day (Compulsory if less than 6 PAX / Exclusive - non sharing/Peak Season surcharge).
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">BOOKING & CONFIRMATION:</h3>
              <p className="text-gray-700 leading-relaxed">
                For confirmed price, booking has to be made at least 60 days prior to start of tour/journey with 50% advance payment made to our Bank only through (online transfer / bank deposit / remittance through debit / credit card) via secured banking. Use only the Booking Form. Money receipt will be generated online. Balance will be paid before start of the journey / tour (or) on arrival at destination. Bengal Tourism promises & guarantees NO other extra charges or any un-declared cost.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">CANCELLATION POLICY:</h3>
              <p className="text-gray-700 leading-relaxed">
                100% Refund if cancelled before 45 days. 50% refund if cancelled before 15 days of start of journey / tour date. No refunds will be made if cancelled any days after that (or) for cancellation or no-show for tours booked for and during Peak seasons / Black-out Days / Festival dates & Express Tour.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">FOREIGNERS:</h3>
              <p className="text-gray-700 leading-relaxed">
                Encashment certificate is required for Foreigners visiting India and valid passports, visas, photographs, and related documents are also necessary for smooth operations. In some states there are provisions of Restricted Area Permit and Protected Area Permits for foreigners.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">EXCLUDES:</h3>
              <p className="text-gray-700 leading-relaxed">
                Air travel (actual), 4-5 Star Premium Hotels / Resorts / Haveli / Tea Estates boarding & facilities as per itinerary. Charges for Safari / Entry Fees / Cruises / Shows / Exclusive non-sharing Vehicle (surface transfer) / Recreational activities not included in the Itinerary. Extra Beverages / Drinks, Porter charges, Non-Sharing Vehicle, Entry fees, Recreational rides, Tips, Laundry, Phone bills, Room heaters & anything not specifically mentioned & taxes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
