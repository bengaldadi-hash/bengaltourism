"use client";

import { useState } from "react";

const conversionRate = 83; // 1 USD = 83 INR (change anytime)

const packages = [
  { title: "BANGKOK & PATTAYA", duration: "4N / 5D", priceUSD: 250 },
  { title: "PHUKET / KOH SAMUI / KRABI", duration: "2N / 3D", priceUSD: 200 },
  { title: "DUBAI", duration: "6N / 7D", priceUSD: 600 },
  { title: "MALDIVES (or) BALI", duration: "3N / 4D", priceUSD: 300 },
  { title: "SINGAPORE (or) THAILAND", duration: "3N / 4D", priceUSD: 300 },
  { title: "CAMBODIA (or) VIETNAM", duration: "3N / 4D", priceUSD: 300 },
  { title: "MALAYSIA (or) INDONESIA", duration: "3N / 4D", priceUSD: 300 },
];

export default function InternationalPricing() {
  const [currency, setCurrency] = useState<"INR" | "USD">("INR");

  return (
    <div className="max-w-6xl mx-auto py-10 px-4">

      {/* Currency Toggle Button */}
      <div className="flex justify-end mb-6">
        <button
          onClick={() => setCurrency(currency === "INR" ? "USD" : "INR")}
          className="bg-orange-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-orange-600 transition"
        >
          Convert to {currency === "INR" ? "USD" : "INR"}
        </button>
      </div>

      {/* Packages Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {packages.map((pkg, index) => {
          const priceINR = pkg.priceUSD * conversionRate;

          return (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 border hover:shadow-xl transition"
            >
              <h3 className="text-xl font-bold text-orange-600 mb-2">
                {pkg.title}
              </h3>

              <p className="text-gray-600 mb-3">
                <strong>Duration:</strong> {pkg.duration}
              </p>

              {/* Main Price */}
              <p className="text-lg font-semibold text-black">
                <strong>Price:</strong>{" "}
                {currency === "INR"
                  ? `₹ ${priceINR}`
                  : `${pkg.priceUSD} USD`}
              </p>

              {/* Always Show Converted Value */}
              <p className="text-sm text-gray-500 mt-2">
                {currency === "INR"
                  ? `≈ ${pkg.priceUSD} USD`
                  : `≈ ₹ ${priceINR}`}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
