"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Calendar, Users, IndianRupee, ArrowRight, Clock, Star, Mountain, Waves, Building, Trees, Compass } from "lucide-react";

// Import package data
import { packageCategories } from "../data/allPackage.js";

// Helper function to get random items from array
function getRandomItems<T>(array: T[], count: number): T[] {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

// Popular packages (manually selected based on appeal)
const popularPackages = [
  {
    slug: "sikkim-gangtok",
    title: "Sikkim & Gangtok",
    subtitle: "Himalayan Beauty",
    tag: "Mountain Escape",
    duration: "5N & 6D",
    price: "₹ 14,500",
    desc: "Discover pristine landscapes, monasteries, and snow-clad mountains.",
    locations: "Sikkim, Gangtok, Pelling, Lachen",
    image: "https://images.unsplash.com/photo-1724600457405-a7eeabcff6b5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8UGVsbGluZ3xlbnwwfHwwfHx8MA%3D%3D",
    icon: Mountain,
    iconColor: "text-indigo-500",
    route: "/sikkim-tourism",
    showBookNow: true,
  },
  {
    slug: "dooars-circuit",
    title: "Dooars Circuit",
    subtitle: "Land of Smiles",
    tag: "Cultural Heritage",
    duration: "4N & 5D",
    price: "₹ 12,700",
    desc: "Experience vibrant culture, handicrafts, and tribal traditions.",
    locations: "Shantiniketan, Bhubaneswar, Sambalpur",
    image: "https://images.unsplash.com/photo-1692719525839-e0713cb1e7f6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RG9vYXJzfGVufDB8fDB8fHww",
    icon: Building,
    iconColor: "text-amber-500",
    route: "/dooars",
    showBookNow: true,
  },
  {
    slug: "thailand-bangkok",
    title: "Thailand & Bangkok",
    subtitle: "Land of Smiles",
    tag: "Tropical Paradise",
    duration: "5N & 6D",
    price: "₹ 14,500",
    desc: "Discover vibrant nightlife, beaches, temples, and Thai culture.",
    locations: "Bangkok, Pattaya, Phuket, Krabi",
    image: "https://images.unsplash.com/photo-1712487650909-2aaf5c5eac36?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8VGhhaWxhbmQlMjAlMjYlMjBCYW5na29rfGVufDB8fDB8fHww",
    icon: Waves,
    iconColor: "text-teal-500",
    route: "/thailand",
    showBookNow: true,
  },
  {
    slug: "dubai-tour",
    title: "Dubai",
    subtitle: "City of Gold",
    tag: "Luxury & Adventure",
    duration: "4N & 5D",
    price: "₹12,700",
    desc: "Experience ultra-modern architecture, luxury shopping, and desert adventures.",
    locations: "Dubai, Abu Dhabi, Sharjah",
    image: "https://images.unsplash.com/photo-1698753864905-a447aa362ec9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRhcmplZWxpbmd8ZW58MHx8MHx8fDA%3D",
    icon: Building,
    iconColor: "text-amber-500",
    route: "/dubai",
    showBookNow: true,
  },
  {
    slug: "bali-tour",
    title: "Bali",
    subtitle: "Island of Gods",
    tag: "Tropical Paradise",
    duration: "5N & 6D",
    price: "₹ 14,500",
    desc: "Experience spiritual temples, rice terraces, and pristine beaches.",
    locations: "Ubud, Kuta, Seminyak, Nusa Dua",
    image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=1200",
    icon: Trees,
    iconColor: "text-green-600",
    route: "/bali",
    showBookNow: true,
  },
  {
    slug: "sundarban-wildlife",
    title: "Sundarban",
    subtitle: "Largest Mangrove of the World",
    tag: "Wildlife Forest & Jungle Safari",
    duration: "3N & 4D",
    price: "₹ 9100",
    desc: "A thrilling mangrove adventure through rivers, creeks, and wildlife habitats.",
    locations: "Sundarban, Sajnekhali, Godkhali, Kakdwip",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8U3VuZGFyYmFufGVufDB8fDB8fHww",
    icon: Trees,
    iconColor: "text-emerald-500",
    route: "/sundarban",
    showBookNow: true,
  },
  {
    slug: "goa-beaches",
    title: "Goa",
    subtitle: "Beach Paradise",
    tag: "Coastal Fun",
    duration: "4N & 5D",
    price: "₹ 12,700",
    desc: "Experience vibrant beaches, nightlife, and Portuguese heritage.",
    locations: "North Goa, South Goa, Panjim, Old Goa",
    image: "https://images.unsplash.com/photo-1587922546307-776227941871?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8S29sa2F0YXxlbnwwfHwwfHx8MA%3D%3D",
    icon: Waves,
    iconColor: "text-teal-500",
    route: "/goa-tourism",
    showBookNow: true,
  },
  {
    slug: "sikkim-gangtok",
    title: "Sikkim & Gangtok",
    subtitle: "Himalayan Beauty",
    tag: "Mountain Escape",
    duration: "5N & 6D",
    price: "₹ 14,500",
    desc: "Discover pristine landscapes, monasteries, and snow-clad mountains.",
    locations: "Sikkim, Gangtok, Pelling, Lachen",
    image: "https://images.unsplash.com/photo-1724600457405-a7eeabcff6b5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8UGVsbGluZ3xlbnwwfHwwfHx8MA%3D%3D",
    icon: Mountain,
    iconColor: "text-indigo-500",
    route: "/sikkim-tourism",
    showBookNow: true,
  },
];

interface PackageCardProps {
  pkg: any;
  isPopular?: boolean;
}

type PackageCategory = keyof typeof packageCategories;

function PackageCard({ pkg, isPopular = false }: PackageCardProps) {
  return (
    <div className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full">
      
      {/* Popular Badge */}
      {isPopular && (
        <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold">
          POPULAR
        </div>
      )}

      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={pkg.image}
          alt={pkg.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-transparent" />

        {/* Duration
        <div className="absolute top-4 left-4 bg-white/90 rounded-full px-3 py-1 text-xs font-semibold">
          {pkg.duration}
        </div> */}
      </div>

      {/* CONTENT */}
      <div className="p-6 flex flex-col flex-1">
        
        {/* Title + Price */}
        <div className="flex justify-between gap-4 mb-3">
          <div>
            <h3 className="text-xl font-bold text-gray-900 group-hover:text-yellow-600">
              {pkg.title}
            </h3>
            <p className="text-sm text-gray-600">{pkg.subtitle}</p>
          </div>
          {/* <div className="text-right">
            <p className="text-xl font-bold text-yellow-600">{pkg.price}</p>
            <p className="text-xs text-gray-500">per person</p>
          </div> */}
        </div>

        {/* Location */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
          <MapPin className="w-4 h-4" />
          <span className="line-clamp-1">{pkg.locations}</span>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
          {pkg.desc}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-4">
          <Star className="w-4 h-4 text-yellow-500 fill-current" />
          <span className="text-sm font-medium">4.8</span>
          <span className="text-sm text-gray-500">(234)</span>
        </div>

        {/* 👉 BUTTONS – ALWAYS AT BOTTOM */}
        <div className="mt-auto flex gap-2">
          {/* <Link
            href="/book-tour"
            className="flex-1 flex items-center justify-center gap-2 bg-yellow-600 text-white py-2 rounded-lg hover:bg-yellow-700 text-sm font-medium"
          >
            Book Now
            <ArrowRight className="w-4 h-4" />
          </Link> */}

          <Link
            href={pkg.route}
            className="px-4 py-2 flex items-center justify-center border-2 border-yellow-600 text-yellow-600 rounded-lg hover:bg-yellow-50"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}


export default function RandomPackageSections() {
  const [randomPackages, setRandomPackages] = useState<Record<PackageCategory, any[]>>({} as Record<PackageCategory, any[]>);

  useEffect(() => {
    // Get 2 random packages from each category
    const random: any = {};
    Object.keys(packageCategories).forEach((category) => {
      random[category as PackageCategory] = getRandomItems(packageCategories[category as PackageCategory], 2);
    });
    setRandomPackages(random);
  }, []);

  const categoryInfo = {
    "BENGAL BECKONS": {
      title: "Bengal Beckons",
      subtitle: "Explore the beauty of West Bengal",
      icon: Mountain,
      iconColor: "text-yellow-500",
      bgColor: "from-yellow-500 to-orange-500"
    },
    "EXCLUSIVE": {
      title: "Exclusive Services",
      subtitle: "Premium & Specialized Tours",
      icon: Trees,
      iconColor: "text-green-500",
      bgColor: "from-green-500 to-teal-500"
    },
    "FOREIGN TOURS": {
      title: "Foreign Tours",
      subtitle: "International Adventures",
      icon: Waves,
      iconColor: "text-blue-500",
      bgColor: "from-blue-500 to-purple-500"
    },
    "INDIA": {
      title: "India",
      subtitle: "Discover Incredible India",
      icon: Building,
      iconColor: "text-orange-500",
      bgColor: "from-orange-500 to-yellow-500"
    }
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-yellow-50 to-orange-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-left mb-12">
          <div className="inline-flex items-center gap-2  text-yellow-600 rounded-full mb-4">
            <span className="text-sm font-semibold">MOST POPULAR</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trending <span className="text-yellow-600">Packages</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            Handpicked destinations loved by our travelers
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularPackages.slice(0, 3).map((pkg, index) => (
            <PackageCard key={`popular-${index}`} pkg={pkg} isPopular={true} />
          ))}
        </div>
      </div>
    </section>
  );
}
