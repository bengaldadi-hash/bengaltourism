"use client";

import Image from "next/image";
import Link from "next/link";

const packages = [
    {
        title: "Bengal Beckons",
        subtitle: "Explore the Beauty of West Bengal",
        href: "/packages/bengal-beckons",
        image:
            "https://images.unsplash.com/photo-1571679654681-ba01b9e1e117?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2VzdCUyMGJlbmdhbHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
        title: "Incredible India",
        subtitle: "Discover Incredible India",
        href: "/packages/india",
        image:
            "https://images.unsplash.com/photo-1582899123786-d7123573fe89?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fFN0YXR1ZSUyMG9mJTIwVW5pdHl8ZW58MHx8MHx8fDA%3D",
    },
    {
        title: "Foreign Destinations",
        subtitle: "International Adventures",
        href: "/packages/foreign-tours",
        image:
            "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    },
    {
        title: "Exclusive Offers ",
        subtitle: "Premium Travel Experiences",
        href: "/packages/exclusive",
        image:
            "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80",
    },
];


export default function PackagesHorizontalSlider() {
    return (
        <section className="relative bg-gray-50 py-24">
            {/* HEADING */}
            <div className="max-w-7xl mx-auto px-6">
                <div className=" mb-12">
                    <div className="flex  gap-2 mb-3 ">
                        <span className="text-yellow-600 font-semibold">
                            Popular Packages
                        </span>
                    </div>
                    <h2 className="text-4xl font-bold text-gray-900">
                        Find Your <span className="text-yellow-600">Tour Packages</span>
                    </h2>
                </div>
            </div>
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {packages.map((item, i) => (
                    <Link
                        key={i}
                        href={item.href}
                        className="group relative h-72 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                    >
                        <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                        />

                        {/* overlay */}
                        <div className="absolute inset-0 bg-black/40" />

                        {/* content */}
                        <div className="absolute bottom-0 p-5 text-white">
                            <h3 className="text-xl font-bold">{item.title}</h3>
                            <p className="text-sm opacity-90">{item.subtitle}</p>
                        </div>
                    </Link>
                ))}
            </div>
</div>
        </section>
    );
}