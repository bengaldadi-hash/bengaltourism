"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Ship,
  Tent,
  PartyPopper,
  Camera,
  Landmark,
  Mountain,
  Trees,
  MapPin,
  Church,
  Waves,
  Clock,
  Footprints,
} from "lucide-react";

type Experience = {
  title: string;
  icon: any;
  image: string;
  route: string;
};

const experiences: Experience[] = [
  {
    title: "Boat Cruise & Stay",
    icon: Ship,
    route: "/boat-stay",
    image: "https://images.unsplash.com/photo-1548574505-5e239809ee19?q=80&w=2764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Camping & Tenting",
    icon: Tent,
    route: "/camping-adventure",
    image: "https://images.unsplash.com/photo-1727640826472-bf7456dc030c?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Event Management",
    icon: PartyPopper,
    route: "/event-management",
    image: "https://images.unsplash.com/photo-1550697797-f01b4e83a1be?q=80&w=2676&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Film Shooting",
    icon: Camera,
    route: "/film-shooting",
    image: "https://images.unsplash.com/photo-1681137063068-081072cf04b4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RmlsbSUyMHNob290aW5nfGVufDB8fDB8fHww",
  },
  {
    title: "Heritage Tour & Walks",
    icon: Landmark,
    route: "/heritage-tour",
    image: "https://images.unsplash.com/photo-1763912111586-aed87ee0c3aa?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fEhlcml0YWdlJTIwVG91ciUyMCUyNiUyMFdhbGtzfGVufDB8fDB8fHww",
  },
  {
    title: "Hills – Off Beat Destinations",
    icon: Mountain,
    route: "/offbeat-hills",
    image: "https://images.unsplash.com/photo-1599106242383-271adeb2e828?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8SGlsbHN8ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "Jungle Safari",
    icon: Trees,
    route: "/jungle-safari",
    image: "https://images.unsplash.com/photo-1554380726-5bd6b17b42e5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8SnVuZ2xlJTIwU2FmYXJpfGVufDB8fDB8fHww",
  },
  {
    title: "Plains – Off Beat Destinations",
    icon: MapPin,
    route: "/offbeat-plains",
    image: "https://images.unsplash.com/photo-1651678938586-affccc71c270?q=80&w=2274&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Religious & Pilgrimage Tour",
    icon: Church,
    route: "/religious-pilgrimage",
    image: "https://images.unsplash.com/photo-1761474440561-78a792962f3a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8UGlsZ3JpbWFnZSUyMFRvdXJ8ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "River Rafting",
    icon: Waves,
    route: "/river-rafting",
    image: "https://images.unsplash.com/photo-1629248457649-b082812aea6c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Uml2ZXIlMjBSYWZ0aW5nfGVufDB8fDB8fHww",
  },
  {
    title: "Short Breaks from Kolkata",
    icon: Clock,
    route: "/short-breaks",
    image: "https://images.unsplash.com/photo-1761933810905-ccc35b14d937?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U2hvcnQlMjBCcmVha3N8ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "Trekking",
    icon: Footprints,
    route: "/trekking-trails",
    image: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8VHJla2tpbmd8ZW58MHx8MHx8fDA%3D",
  },
];

export default function TailorMadeBentoGrid() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="mb-16">
          <span className="inline-block text-sm font-semibold tracking-widest text-[#EA3323] mb-3">
            TAILOR MADE
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Crafted Travel Experiences
          </h2>
          <p className="text-gray-600 max-w-2xl">
            Premium, tailor-made journeys designed for explorers, families,
            creators, and adventure seekers.
          </p>
        </div>

        {/* BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-4 md:gap-6">

          {/* FEATURE HERO TILE */}
          <Link
            href={experiences[0].route}
            className="relative md:col-span-7 lg:col-span-8 md:row-span-2 rounded-3xl overflow-hidden group h-80 md:h-96 lg:h-[28rem]"
          >
            <Image
              src={experiences[0].image}
              alt={experiences[0].title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/40 to-transparent" />

            <div className="absolute bottom-6 md:bottom-8 left-6 md:left-8 text-white max-w-sm md:max-w-md">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-white/20 backdrop-blur-sm p-2 rounded-lg">
                  <Ship className="w-6 h-6 md:w-7 md:h-7" />
                </div>
                <span className="uppercase text-xs md:text-sm font-bold tracking-widest text-white/90">
                  Signature Experience
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
                {experiences[0].title}
              </h3>
              <button className="bg-white text-gray-900 px-4 md:px-6 py-2 md:py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg">
               View Details
              </button>
            </div>
          </Link>

          {/* SECOND LARGE TILE */}
          <Link
            href={experiences[1].route}
            className="relative md:col-span-5 lg:col-span-4 rounded-3xl overflow-hidden group h-80 md:h-96 lg:h-[28rem]"
          >
            <Image
              src={experiences[1].image}
              alt={experiences[1].title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

            <div className="absolute bottom-6 md:bottom-8 left-6 md:left-8 right-6 md:right-8 text-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-white/20 backdrop-blur-sm p-2 rounded-lg">
                  <Tent className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <span className="text-xs md:text-sm font-bold uppercase tracking-wider text-white/90">
                  Premium Experience
                </span>
              </div>
              <h3 className="text-xl md:text-lg font-bold mb-4 leading-tight">
                {experiences[1].title}
              </h3>
              <button className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg font-semibold hover:bg-white/30 transition-all border border-white/30">
                View Details
              </button>
            </div>
          </Link>

          {/* THIRD TILE - MEDIUM SIZE */}
          <Link
            href={experiences[2].route}
            className="relative md:col-span-6 lg:col-span-6 rounded-3xl overflow-hidden group h-48 md:h-56"
          >
            <Image
              src={experiences[2].image}
              alt={experiences[2].title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

            <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 right-4 md:right-6 text-white">
              <div className="flex items-center gap-2 mb-3">
                <div className="bg-white/20 backdrop-blur-sm p-1.5 rounded-lg">
                  <PartyPopper className="w-4 h-4 md:w-5 md:h-5" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-white/90">
                  Featured
                </span>
              </div>
              <h3 className="text-sm md:text-base font-bold mb-3 leading-tight">
                {experiences[2].title}
              </h3>
              <button className="text-xs md:text-sm font-semibold underline underline-offset-4 hover:underline-offset-2 transition-all">
               View Details
              </button>
            </div>
          </Link>

          {/* FOURTH TILE - MEDIUM SIZE */}
          <Link
            href={experiences[3].route}
            className="relative md:col-span-6 lg:col-span-6 rounded-3xl overflow-hidden group h-48 md:h-56"
          >
            <Image
              src={experiences[3].image}
              alt={experiences[3].title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

            <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 right-4 md:right-6 text-white">
              <div className="flex items-center gap-2 mb-3">
                <div className="bg-white/20 backdrop-blur-sm p-1.5 rounded-lg">
                  <Camera className="w-4 h-4 md:w-5 md:h-5" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-white/90">
                  Featured
                </span>
              </div>
              <h3 className="text-sm md:text-base font-bold mb-3 leading-tight">
                {experiences[3].title}
              </h3>
              <button className="text-xs md:text-sm font-semibold underline underline-offset-4 hover:underline-offset-2 transition-all">
                View Details
              </button>
            </div>
          </Link>

          {/* REST TILES - SMALL GRID */}
          {/* REST TILES - SMALL BENTO GRID */}
          <div className="col-span-12 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[32px] md:auto-rows-[40px] lg:auto-rows-[48px]">
            {/* First card - regular size */}
            <Link
              href={experiences[4].route}
              className="relative rounded-2xl md:rounded-3xl overflow-hidden group row-span-4 md:row-span-3 lg:row-span-4"
            >
              <Image
                src={experiences[4].image}
                alt={experiences[4].title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              <div className="absolute bottom-2 md:bottom-3 left-2 md:left-3 right-2 md:right-3 text-white">
                <div className="flex items-center gap-1.5 md:gap-2 mb-1.5 md:mb-2">
                  <div className="bg-white/20 backdrop-blur-sm p-1 rounded-lg">
                    <Landmark className="w-3 h-3 md:w-4 md:h-4" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-white/90">
                    Tailor Made
                  </span>
                </div>
                <h3 className="text-xs md:text-sm font-bold mb-1.5 md:mb-2 leading-tight">
                  {experiences[4].title}
                </h3>
                <button className="text-xs font-semibold underline underline-offset-2 transition-all">
               View Details
                </button>
              </div>
            </Link>

            {/* Second card - spans 2 columns */}
            <Link
              href={experiences[5].route}
              className="relative col-span-2 rounded-2xl md:rounded-3xl overflow-hidden group row-span-4 md:row-span-3 lg:row-span-4"
            >
              <Image
                src={experiences[5].image}
                alt={experiences[5].title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              <div className="absolute bottom-2 md:bottom-3 left-2 md:left-3 right-2 md:right-3 text-white">
                <div className="flex items-center gap-1.5 md:gap-2 mb-1.5 md:mb-2">
                  <div className="bg-white/20 backdrop-blur-sm p-1 rounded-lg">
                    <Mountain className="w-3 h-3 md:w-4 md:h-4" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-white/90">
                    Featured
                  </span>
                </div>
                <h3 className="text-xs md:text-sm font-bold mb-1.5 md:mb-2 leading-tight">
                  {experiences[5].title}
                </h3>
                <button className="text-xs font-semibold underline underline-offset-2 transition-all">
                 View Details
                </button>
              </div>
            </Link>

            {/* Third card - regular size */}
            <Link
              href={experiences[6].route}
              className="relative rounded-2xl md:rounded-3xl overflow-hidden group row-span-4 md:row-span-3 lg:row-span-4"
            >
              <Image
                src={experiences[6].image}
                alt={experiences[6].title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              <div className="absolute bottom-2 md:bottom-3 left-2 md:left-3 right-2 md:right-3 text-white">
                <div className="flex items-center gap-1.5 md:gap-2 mb-1.5 md:mb-2">
                  <div className="bg-white/20 backdrop-blur-sm p-1 rounded-lg">
                    <Trees className="w-3 h-3 md:w-4 md:h-4" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-white/90">
                    Tailor Made
                  </span>
                </div>
                <h3 className="text-xs md:text-sm font-bold mb-1.5 md:mb-2 leading-tight">
                  {experiences[6].title}
                </h3>
                <button className="text-xs font-semibold underline underline-offset-2 transition-all">
              View Details
                </button>
              </div>
            </Link>

            {/* Fourth card - spans 2 rows */}
            <Link
              href={experiences[7].route}
              className="relative rounded-2xl md:rounded-3xl overflow-hidden group row-span-6 md:row-span-5 lg:row-span-8"
            >
              <Image
                src={experiences[7].image}
                alt={experiences[7].title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              <div className="absolute bottom-2 md:bottom-3 left-2 md:left-3 right-2 md:right-3 text-white">
                <div className="flex items-center gap-1.5 md:gap-2 mb-1.5 md:mb-2">
                  <div className="bg-white/20 backdrop-blur-sm p-1 rounded-lg">
                    <MapPin className="w-3 h-3 md:w-4 md:h-4" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-white/90">
                    Premium
                  </span>
                </div>
                <h3 className="text-xs md:text-sm font-bold mb-1.5 md:mb-2 leading-tight">
                  {experiences[7].title}
                </h3>
                <button className="text-xs font-semibold underline underline-offset-2 transition-all">
            View Details
                </button>
              </div>
            </Link>

            {/* Fifth card - regular size */}
            <Link
              href={experiences[8].route}
              className="relative rounded-2xl md:rounded-3xl overflow-hidden group row-span-4 md:row-span-3 lg:row-span-4"
            >
              <Image
                src={experiences[8].image}
                alt={experiences[8].title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              <div className="absolute bottom-2 md:bottom-3 left-2 md:left-3 right-2 md:right-3 text-white">
                <div className="flex items-center gap-1.5 md:gap-2 mb-1.5 md:mb-2">
                  <div className="bg-white/20 backdrop-blur-sm p-1 rounded-lg">
                    <Church className="w-3 h-3 md:w-4 md:h-4" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-white/90">
                    Tailor Made
                  </span>
                </div>
                <h3 className="text-xs md:text-sm font-bold mb-1.5 md:mb-2 leading-tight">
                  {experiences[8].title}
                </h3>
                <button className="text-xs font-semibold underline underline-offset-2 transition-all">
              View Details
                </button>
              </div>
            </Link>

            {/* Sixth card - regular size */}
            <Link
              href={experiences[9].route}
              className="relative rounded-2xl md:rounded-3xl overflow-hidden group row-span-4 md:row-span-3 lg:row-span-8"
            >
              <Image
                src={experiences[9].image}
                alt={experiences[9].title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              <div className="absolute bottom-2 md:bottom-3 left-2 md:left-3 right-2 md:right-3 text-white">
                <div className="flex items-center gap-1.5 md:gap-2 mb-1.5 md:mb-2">
                  <div className="bg-white/20 backdrop-blur-sm p-1 rounded-lg">
                    <Waves className="w-3 h-3 md:w-4 md:h-4" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-white/90">
                    Tailor Made
                  </span>
                </div>
                <h3 className="text-xs md:text-sm font-bold mb-1.5 md:mb-2 leading-tight">
                  {experiences[9].title}
                </h3>
                <button className="text-xs font-semibold underline underline-offset-2 transition-all">
                   View Details
                </button>
              </div>
            </Link>

            {/* Seventh card - regular size */}
            <Link
              href={experiences[10].route}
              className="relative rounded-2xl md:rounded-3xl overflow-hidden group row-span-4 md:row-span-3 lg:row-span-8"
            >
              <Image
                src={experiences[10].image}
                alt={experiences[10].title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              <div className="absolute bottom-2 md:bottom-3 left-2 md:left-3 right-2 md:right-3 text-white">
                <div className="flex items-center gap-1.5 md:gap-2 mb-1.5 md:mb-2">
                  <div className="bg-white/20 backdrop-blur-sm p-1 rounded-lg">
                    <Clock className="w-3 h-3 md:w-4 md:h-4" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-white/90">
                    Tailor Made
                  </span>
                </div>
                <h3 className="text-xs md:text-sm font-bold mb-1.5 md:mb-2 leading-tight">
                  {experiences[10].title}
                </h3>
                <button className="text-xs font-semibold underline underline-offset-2 transition-all">
                  View Details
                </button>
              </div>
            </Link>

            {/* Eighth card - regular size */}
            <Link
              href={experiences[11].route}
              className="relative rounded-2xl md:rounded-3xl overflow-hidden group row-span-4 md:row-span-3 lg:row-span-4"
            >
              <Image
                src={experiences[11].image}
                alt={experiences[11].title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              <div className="absolute bottom-2 md:bottom-3 left-2 md:left-3 right-2 md:right-3 text-white">
                <div className="flex items-center gap-1.5 md:gap-2 mb-1.5 md:mb-2">
                  <div className="bg-white/20 backdrop-blur-sm p-1 rounded-lg">
                    <Footprints className="w-3 h-3 md:w-4 md:h-4" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-white/90">
                    Tailor Made
                  </span>
                </div>
                <h3 className="text-xs md:text-sm font-bold mb-1.5 md:mb-2 leading-tight">
                  {experiences[11].title}
                </h3>
                <button className="text-xs font-semibold underline underline-offset-2 transition-all">
                  View Details
                </button>
              </div>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
