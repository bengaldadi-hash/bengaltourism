"use client"

import Image from "next/image"
import { Phone, Mail, MessageCircle } from "lucide-react"

export default function ContactCTA() {
  return (
    <section className="relative bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">

        {/* Left Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Plan Your Dream Trip With Bengal Tourism ✨
          </h2>
          <p className="text-gray-300 mb-8">
            Book your tour or hotel instantly. Our team is ready to assist you!
          </p>

          <div className="space-y-4">

            {/* Tour Booking */}
            <a
              href="tel:6289783779"
              className="flex items-center gap-3 bg-yellow-500 text-black px-6 py-3 rounded-xl font-semibold hover:bg-yellow-400 transition"
            >
              <Phone size={20} />
              Call for Tour Booking – 6289783779
            </a>

            {/* Hotel Booking */}
            <a
              href="tel:7890727339"
              className="flex items-center gap-3 bg-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-500 transition"
            >
              <Phone size={20} />
              Call for Hotel Booking – 7890727339
            </a>

            {/* WhatsApp Tour */}
            <a
              href="https://wa.me/916289783779"
              target="_blank"
              className="flex items-center gap-3 bg-green-600 px-6 py-3 rounded-xl font-semibold hover:bg-green-500 transition"
            >
              <MessageCircle size={20} />
              WhatsApp for Tour Booking - 6289783779
            </a>

            {/* WhatsApp Hotel */}
            <a
              href="https://wa.me/917890727339"
              target="_blank"
              className="flex items-center gap-3 bg-green-700 px-6 py-3 rounded-xl font-semibold hover:bg-green-600 transition"
            >
              <MessageCircle size={20} />
              WhatsApp for Hotel Booking - 7890727339
            </a>



            {/* Email */}
            <a
              href="mailto:bengaltourism@gmail.com"
              className="flex items-center gap-3 bg-gray-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-600 transition"
            >
              <Mail size={20} />
              bengaltourism@gmail.com
            </a>

            <a
              href="mailto:prossenjitbiswas@gmail.com"
              className="flex items-center gap-3 bg-orange-600 px-6 py-3 rounded-xl font-semibold hover:bg-orange-500 transition"
            >
              <Mail size={20} />
              prossenjitbiswas@gmail.com
            </a>

            <a
              href="tel:9804333779"
              className="flex items-center gap-3 bg-red-600 px-6 py-3 rounded-xl font-semibold hover:bg-red-500 transition"
            >
              <Phone size={20} />
              Call for General Contact – 9804333779
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative w-full h-[400px]">
          <Image
            src="/newsletter.png"
            alt="Travel Image"
            fill
            className="object-cover rounded-2xl shadow-lg"
          />
        </div>

      </div>
    </section>
  )
}
