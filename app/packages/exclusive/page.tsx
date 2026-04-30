"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, Star, MapPinCheck, ArrowRight, Trees, Building, Waves, Mountain, Compass } from "lucide-react";

// Exclusive packages data
const exclusivePackages = [
    {
        slug: "medical-tourism",
        title: "Medical Tourism",
        subtitle: "Healthcare Journey",
        tag: "Wellness & Health",
        duration: "Custom",
        price: "Contact for Price",
        desc: "Access world-class medical facilities and expert healthcare services for your treatment needs.",
        locations: "Kolkata, Delhi, Mumbai, Chennai",
        image: "https://images.unsplash.com/photo-1745420052490-285dbfa1cf4d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVkaWNhbCUyMHRvdXJpc218ZW58MHx8MHx8fDA%3D",
        icon: Building,
        iconColor: "text-blue-500",
        route: "/medical-tourism",
        showBookNow: true,
    },
    {
        slug: "air-ambulance",
        title: "Air Ambulance Service",
        subtitle: "Emergency Medical Transport",
        tag: "Emergency Service",
        duration: "Custom",
        price: "Contact for Price",
        desc: "Rapid and reliable air ambulance services for critical medical emergencies.",
        locations: "Pan India Service",
        image: "https://images.unsplash.com/photo-1696243144343-56a235858dce?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fEFpciUyMEFtYnVsYW5jZSUyMFNlcnZpY2V8ZW58MHx8MHx8fDA%3D",
        icon: Compass,
        iconColor: "text-yellow-600",
        route: "/air-ambulance",
        showBookNow: true,
    },
    {
        slug: "wellness-tourism",
        title: "Wellness Tourism",
        subtitle: "Spa-Massage-Yoga",
        tag: "Relaxation & Rejuvenation",
      duration: "Custom",
        price: "₹15,999",
        desc: "Rejuvenate your mind, body, and soul with premium spa treatments and yoga sessions.",
        locations: "Rishikesh, Kerala, Goa",
        image: "https://ik.imgkit.net/3vlqs5axxjf/TW-Asia/ik-seo/uploadedImages/Industry/Travel_Trends/GettyImages-599463782/Wellness-tourism-takes-the-spotlight-for-2022-trav.jpg?tr=w-780%2Ch-440%2Cfo-auto",
        icon: Trees,
        iconColor: "text-green-500",
        route: "/spa-wellness",
        showBookNow: true,
    },
    {
        slug: "tea-tourism",
        title: "Tea Tourism",
        subtitle: "Tea Garden Experience",
        tag: "Cultural Experience",
       duration: "Custom",
        price: "₹8,999",
        desc: "Explore lush tea gardens, learn tea processing, and enjoy authentic tea tasting sessions.",
        locations: "Darjeeling, Assam, Munnar",
        image: "https://images.unsplash.com/photo-1723214520491-7f90eeda2cdd?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VGVhJTIwVG91cmlzbSUyMnxlbnwwfHwwfHx8MA%3D%3D",
        icon: Mountain,
        iconColor: "text-emerald-600",
        route: "/tea-tourism",
        showBookNow: true,
    },
    {
        slug: "hotel-resort",
        title: "Hotel-Resort-Guest House",
        subtitle: "Premium Accommodation",
        tag: "Luxury Stay",
       duration: "Custom",
        price: "Contact for Price",
        desc: "Exclusive accommodations ranging from luxury resorts to cozy guest houses across India.",
        locations: "Pan India",
        image: "https://images.unsplash.com/photo-1761470371217-a4de0ff0e8df?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SG90ZWwtUmVzb3J0LUd1ZXN0JTIwSG91c2V8ZW58MHx8MHx8fDA%3D",
        icon: Building,
        iconColor: "text-purple-500",
        route: "/hotel-resort",
        showBookNow: true,
    },
];

export default function ExclusivePackagesPage() {
    return (
        <main className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="relative h-[60vh] overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=2070&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Exclusive Services"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/70 via-orange-800/50 to-yellow-900/40"></div>
                </div>
                
                <div className="relative z-10 h-full flex items-center justify-center px-6">
                    <div className="text-center max-w-5xl mx-auto">
                        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-6 py-3 mb-8">
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                            <span className="text-white font-medium text-sm">Premium Services</span>
                        </div>
                        
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                            Exclusive
                            <span className="block bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
                                Services
                            </span>
                        </h1>
                        
                        <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed">
                            Discover our premium services including medical tourism, wellness retreats, and luxury accommodations
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/packages" className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/30 transition-all">
                                <ArrowRight className="w-5 h-5 rotate-180" />
                                Back to All Packages
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Packages Grid Section */}
            <section className="py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Premium <span className="text-yellow-600">Exclusive</span> Services
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Experience finest services tailored to your specific needs and preferences
                        </p>
                    </div>
               
    {(() => {
      const remainder = exclusivePackages.length % 3;
      const comingSoonCount =
        remainder === 0 ? 0 : 3 - remainder;

      return (     
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {exclusivePackages.map((item, i) => (
                            <div
                                key={item.slug}
                                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col group"
                            >
                                {/* Image */}
                                <div className="relative h-56 overflow-hidden">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        priority={i < 3}
                                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                    
                                    {/* Title overlay */}
                                    <div className="absolute top-4 left-4">
                                        <h3 className="inline-flex items-center gap-2 bg-white text-black text-sm font-medium px-3 py-2 rounded-lg shadow">
                                            <MapPinCheck className="w-4 h-4" />
                                            <span>{item.title}</span>
                                        </h3>
                                    </div>
                                    
                                    {/* Locations overlay */}
                                    <div className="absolute bottom-0 left-0 right-0 p-4">
                                        <div className="overflow-hidden">
                                            <div className="flex items-center gap-1 whitespace-nowrap">
                                                {item.locations.split(',').map((location, index) => (
                                                    <div key={index} className="flex items-center">
                                                        <span className="text-sm text-white font-medium">{location.trim()}</span>
                                                        {index < item.locations.split(',').length - 1 && (
                                                            <ArrowRight className="w-3 h-3 text-white shrink-0 mx-1" />
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Content */}
                                <div className="p-6 flex flex-col flex-1">
                                    {/* Badge */}
                                    <div className="flex items-center gap-2 mb-3">
                                        <item.icon className={`w-4 h-4 ${item.iconColor}`} />
                                        <span className="text-xs font-medium text-gray-600">Premium Service</span>
                                    </div>

                                    {/* Title and Subtitle */}
                                    <div className="mb-4">
                                        <h3 className="text-xl font-bold text-gray-900 mb-1">{item.title}</h3>
                                        <p className="text-sm text-gray-600">{item.subtitle}</p>
                                    </div>

                                    {/* Tag and Duration */}
                                    <div className="grid grid-cols-2 gap-3 mb-4">
                                        <div className="flex items-center gap-2 text-sm text-gray-600">
                                            <Compass className="w-4 h-4 text-gray-400" />
                                            <span>{item.tag}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-gray-600">
                                            <Calendar className="w-4 h-4 text-gray-400" />
                                            <span>{item.duration}</span>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <div className="mb-4">
                                        <p className="text-sm text-gray-600 leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </div>

                                    {/* Price */}
                                    {/* <div className="mt-auto mb-4">
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-sm text-gray-500">Starting from</span>
                                            <span className="text-2xl font-bold text-yellow-600">
                                                {item.price}
                                            </span>
                                        </div>
                                    </div> */}

                                    {/* Action Buttons */}
                                    <div className="flex gap-2">
                                        {/* <Link
                                            href="/book-tour"
                                            className="flex-1 flex items-center justify-center gap-2 bg-yellow-600 text-white py-3 rounded-xl text-sm font-semibold hover:bg-yellow-700 transition-colors"
                                        >
                                            Book Now
                                        </Link> */}
                                        <Link href={item.route} className="flex items-center justify-center gap-2 border border-yellow-600 text-yellow-600 px-4 py-3 rounded-xl text-sm font-semibold hover:bg-yellow-50 transition-colors">
                                            View Details
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}

                        
                     {/* Coming Soon Cards (Desktop Only) */}
          {Array.from({ length: comingSoonCount }).map((_, index) => (
            <div
              key={`coming-soon-${index}`}
              className="hidden lg:flex bg-gray-100 border-2 border-dashed border-gray-300 rounded-xl items-center justify-center p-10 text-center"
            >
              <div>
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-yellow-100 flex items-center justify-center">
                  <Clock className="w-8 h-8 text-yellow-500" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  Coming Soon
                </h3>
                <p className="text-sm text-gray-500">
                  New exclusive service launching shortly
                </p>
              </div>
            </div>
          ))}

        </div>
      );
    })()}
                </div>
            </section>
        </main>
    );
}
