
"use client"

import { useState } from "react"
import { Check } from "lucide-react"

interface PackageType {
    label?: string
    days: string
    price: number
    disabled?: boolean
}

interface TourPricingSectionProps {
    title: string
    subtitle: string
    packages: PackageType[]
    onBook?: (pkg: PackageType) => void
}

export default function TourPricingSection({
    title,
    subtitle,
    packages,
    onBook,
}: TourPricingSectionProps) {

    const [currency, setCurrency] = useState<"INR" | "USD" | "USDT">("INR")

    const convertPrice = (price: number) => {
        if (currency === "INR") return `₹ ${price}`
        if (currency === "USD") return `$ ${price / 100}`
        if (currency === "USDT") return `${price / 100} USDT`
    }

    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-14">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                        {title}
                    </h2>
                    <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
                        {subtitle}
                    </p>

                    {/* Currency Toggle */}
                    <div className="mt-6 flex justify-center gap-4">
                        {["INR", "USD"].map((cur) => (
                            <button
                                key={cur}
                                onClick={() => setCurrency(cur as any)}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition ${currency === cur
                                        ? "bg-blue-600 text-white"
                                        : "bg-white border text-gray-700"
                                    }`}
                            >
                                {cur}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">

                    {packages.map((pkg, index) => (
                        <div
                            key={index}
                            className={`rounded-3xl p-8 flex flex-col justify-between transition duration-300 ${pkg.disabled
                                    ? "bg-gray-100 border border-gray-200 opacity-70"
                                    : "bg-white border border-indigo-100 shadow-md hover:shadow-xl hover:-translate-y-2"
                                }`}
                        >

                            <div>
                                {pkg.label && (
                                    <span className={`text-xs font-semibold ${
                                        pkg.disabled 
                                            ? 'text-gray-400' 
                                            : index === 0 
                                                ? 'text-purple-700' 
                                                : index === 1 
                                                    ? 'text-blue-700' 
                                                        : index === 2 
                                                            ? 'text-green-700' 
                                                                : index === 3 
                                                                    ? 'text-orange-700' 
                                                                        : 'text-yellow-700'
                                    }`}>
                                        {pkg.label}
                                    </span>
                                )}

                                <h3 className="text-2xl font-bold mt-6 text-gray-900">
                                    {pkg.days}
                                </h3>

                                <p className="text-2xl font-semibold text-indigo-600 mt-3">
                                    {convertPrice(pkg.price)}
                                </p>

                                <ul className="mt-6 space-y-3 text-gray-600 text-sm">
                                    <li className="flex items-center gap-2">
                                        <Check className="w-4 h-4 text-indigo-600" /> 3-4* Accommodation

                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Check className="w-4 h-4 text-indigo-600" /> Breakfast & Dinner
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Check className="w-4 h-4 text-indigo-600" /> Pick & Drop
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Check className="w-4 h-4 text-indigo-600" /> Sightseeing in SIC
                                    </li>
                                </ul>
                            </div>

                            <a
                                href="/book-tour"
                                className={`mt-8 px-3 text-center py-3 rounded-xl font-semibold transition ${pkg.disabled
                                        ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                                        : "bg-blue-500 text-white hover:bg-blue-600"
                                    }`}
                            >
                                {pkg.disabled ? "Not Available" : "Book Now"}
                            </a>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    )
}