"use client"

import { useState } from "react"
import Link from "next/link"
import {
  Facebook,
  Instagram,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Clock,
  Twitter,
  Share2,
  X
} from "lucide-react"

export default function Footer() {
    const [showShareModal, setShowShareModal] = useState(false)

    const shareOnSocialMedia = (platform: string) => {
      const url = window.location.href;
      const title = "Bengal Tourism - Explore the Sweetest Part of India";
      const shareText = `${title} ${url}`;
      
      let shareUrl = '';
      
      switch(platform) {
        case 'facebook':
          // Facebook sharer with quote parameter for better content
          shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(title)}`;
          break;
        case 'twitter':
          shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`;
          break;
        case 'whatsapp':
          shareUrl = `https://wa.me/?text=${encodeURIComponent(shareText)}`;
          break;
        case 'instagram':
          // Instagram doesn't support direct URL sharing, so we copy to clipboard with proper message
          navigator.clipboard.writeText(shareText);
          alert('Link copied! You can now paste it on Instagram Stories or Bio.\n\nMessage: ' + shareText);
          setShowShareModal(false);
          return;
        default:
          return;
      }
      
      window.open(shareUrl, '_blank', 'width=600,height=400');
      setShowShareModal(false);
    }

    const copyToClipboard = () => {
      try {
        const url = window.location.href;
        const title = "Bengal Tourism - Explore the Sweetest Part of India";
        const shareText = `${title} ${url}`;
        
        // Method 1: Try modern clipboard API first
        if (navigator.clipboard && window.isSecureContext) {
          navigator.clipboard.writeText(shareText)
        } else {
          // Fallback method for localhost/http
          const textarea = document.createElement('textarea')
          textarea.value = shareText
          textarea.style.position = 'fixed'
          textarea.style.left = '-999999px'
          textarea.style.top = '-999999px'
          document.body.appendChild(textarea)
          
          textarea.focus()
          textarea.select()
          textarea.setSelectionRange(0, 99999)
          
          document.execCommand('copy')
          document.body.removeChild(textarea)
        }
        
        alert('Link copied to clipboard!');
        setShowShareModal(false);
      } catch (err) {
        console.error('Failed to copy URL:', err)
      }
    }
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      
      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* BRAND */}
          <div>
            <img
              src="/logo.png"
              alt="Bengal Tourism"
              className="w-40 mb-4"
            />
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Explore the beautiful land of Bengal — from Himalayan hills to
              mangrove forests. Experience culture, heritage & unforgettable journeys.
            </p>

            <div className="flex gap-3">
              <a
                href="https://facebook.com/BengalTourismWestBengalTourism"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center cursor-pointer justify-center rounded-full bg-yellow-600/90 hover:bg-yellow-600 transition"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://instagram.com/bengaltourismco"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center cursor-pointer justify-center rounded-full bg-yellow-600/90 hover:bg-yellow-600 transition"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://twitter.com/BengalTourismCo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex cursor-pointer items-center justify-center rounded-full bg-yellow-600/90 hover:bg-yellow-600 transition"
              >
                <Twitter size={16} />
              </a>
                 <button
                onClick={() => setShowShareModal(true)}
                className="w-9 h-9 flex items-center cursor-pointer justify-center rounded-full bg-yellow-600/90 hover:bg-yellow-600 transition"
                aria-label="Share URL"
              >
                <Share2 size={16} />
              </button>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-lg font-semibold mb-5 text-yellow-400">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                ["Home", "/"],
                ["About Us", "/about"],
                ["Tour Packages", "/packages"],
                ["Contact", "/contact"],
                ["Hotel Booking", "/hotel-booking"],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-gray-400 hover:text-yellow-400 transition"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* DESTINATIONS */}
          <div>
            <h4 className="text-lg font-semibold mb-5 text-yellow-400">
              Popular Destinations
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                "Darjeeling",
                "Sundarban",
                "Kolkata",
                "Digha",
                "Dooars",
                "Sikkim Tourism",
                "Thailand"
              
              ].map((place) => (
                <li key={place}>
                  <Link
                    href={`/${place.toLowerCase().replace(" ", "-")}`}
                    className="text-gray-400 hover:text-yellow-400 transition"
                  >
                    {place}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

{/* CONTACT */}
<div>
  <h4 className="text-lg font-semibold mb-5 text-yellow-400">
    Contact Info
  </h4>

  <div className="space-y-4 text-sm text-gray-400">
    
    {/* PHONE */}
    <div className="flex gap-3">
      <Phone size={18} className="text-yellow-400" />
      <div>
        <p>
          Tour Booking:{" "}
          <a href="tel:6289783779" className="text-white font-semibold hover:text-yellow-400">
            6289783779
          </a>
        </p>

        <p>
          Hotel Booking:{" "}
          <a href="tel:7890727339" className="text-white font-semibold hover:text-yellow-400">
            7890727339
          </a>
        </p>

        {/* NEW PHONE */}
        <p>
          General Contact:{" "}
          <a href="tel:9804333779" className="text-white font-semibold hover:text-yellow-400">
            9804333779
          </a>
        </p>
      </div>
    </div>

    {/* WHATSAPP */}
    <div className="flex gap-3">
      <MessageCircle size={18} className="text-yellow-400" />
      <div>
        <a href="https://wa.me/916289783779" target="_blank" className="hover:text-yellow-400">
          Tour WhatsApp: <strong className="text-white">6289783779</strong>
        </a>
        <br />
        <a href="https://wa.me/917890727339" target="_blank" className="hover:text-yellow-400">
          Hotel WhatsApp: <strong className="text-white">7890727339</strong>
        </a>
      </div>
    </div>

    {/* EMAIL (NEW) */}
    <div className="flex gap-3">
      <Mail size={18} className="text-yellow-400" />
      <a
        href="mailto:prossenjitbiswas@gmail.com"
        className="hover:text-yellow-400 text-white font-semibold"
      >
        prossenjitbiswas@gmail.com
      </a>
    </div>

    {/* ADDRESS */}
    <div className="flex gap-3">
      <MapPin size={18} className="text-yellow-400 mt-1" />
      <span>
        AG-209, Flat No402, <br />
        Kestopur, Kolkata - 700101
      </span>
    </div>

    {/* TIME */}
    <div className="flex gap-3">
      <Clock size={18} className="text-yellow-400" />
      <span>
        Mon–Sat: 9:00 AM – 6:00 PM <br />
        Sunday: Closed
      </span>
    </div>
  </div>
</div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <p>© 2026 Bengal Tourism. All rights reserved.</p>
          <div className="flex gap-6">
            {["privacy", "terms", "refund"].map((page) => (
              <Link
                key={page}
                href={`/${page}`}
                className="hover:text-yellow-400 transition capitalize"
              >
                {page} policy
              </Link>
            ))}
            <Link
              href="/site-map"
              className="hover:text-yellow-400 transition"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>

      {/* SHARE MODAL */}
      {showShareModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl transform transition-all">
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">Share this page</h3>
                <p className="text-sm text-gray-500">Choose your favorite platform</p>
              </div>
              <button
                onClick={() => setShowShareModal(false)}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <X size={20} className="text-gray-600" />
              </button>
            </div>
            
            {/* Social Media Grid */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <button
                onClick={() => shareOnSocialMedia('facebook')}
                className="group flex flex-col items-center p-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl hover:from-blue-700 hover:to-blue-800 transition-all transform hover:scale-105 shadow-lg"
              >
                <Facebook size={28} className="mb-2" />
                <span className="text-sm font-semibold">Facebook</span>
                <span className="text-xs opacity-80 mt-1">Share with friends</span>
              </button>
              
              <button
                onClick={() => shareOnSocialMedia('twitter')}
                className="group flex flex-col items-center p-4 bg-gradient-to-r from-sky-500 to-sky-600 text-white rounded-2xl hover:from-sky-600 hover:to-sky-700 transition-all transform hover:scale-105 shadow-lg"
              >
                <Twitter size={28} className="mb-2" />
                <span className="text-sm font-semibold">Twitter</span>
                <span className="text-xs opacity-80 mt-1">Tweet about it</span>
              </button>
              
              <button
                onClick={() => shareOnSocialMedia('whatsapp')}
                className="group flex flex-col items-center p-4 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-2xl hover:from-green-700 hover:to-green-800 transition-all transform hover:scale-105 shadow-lg"
              >
                <MessageCircle size={28} className="mb-2" />
                <span className="text-sm font-semibold">WhatsApp</span>
                <span className="text-xs opacity-80 mt-1">Send to contacts</span>
              </button>
              
              <button
                onClick={() => shareOnSocialMedia('instagram')}
                className="group flex flex-col items-center p-4 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white rounded-2xl hover:from-purple-700 hover:via-pink-700 hover:to-orange-600 transition-all transform hover:scale-105 shadow-lg"
              >
                <Instagram size={28} className="mb-2" />
                <span className="text-sm font-semibold">Instagram</span>
                <span className="text-xs opacity-80 mt-1">Copy for stories</span>
              </button>
            </div>
            
            {/* Copy Link Button */}
            <div className="border-t pt-6">
              <button
                onClick={copyToClipboard}
                className="w-full flex items-center justify-center gap-3 p-4 bg-gradient-to-r from-gray-700 to-gray-800 text-white rounded-2xl hover:from-gray-800 hover:to-gray-900 transition-all transform hover:scale-[1.02] shadow-lg"
              >
                <Share2 size={24} />
                <div className="text-left">
                  <span className="font-semibold">Copy Link</span>
                  <span className="block text-xs opacity-80">Copy to clipboard</span>
                </div>
              </button>
            </div>
            
            {/* Preview Message */}
            <div className="mt-6 p-4 bg-gray-50 rounded-xl">
              <p className="text-xs text-gray-600 mb-2 font-medium">Preview:</p>
              <p className="text-sm text-gray-800 line-clamp-2">
                Bengal Tourism - Explore the Sweetest Part of India {window.location.href}
              </p>
            </div>
          </div>
        </div>
      )}

    </footer>
  )
}
