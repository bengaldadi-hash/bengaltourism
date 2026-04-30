
import { Metadata } from 'next'
import WhyChooseBengal from '@/components/WhyChooseBengal'
import TestimonialsInteractive from '@/components/TestimonialsInteractive'
import BreathtakingCities from '@/components/BreathtakingCities'
import HeroSection from "@/components/HeroSection"
import PackagesHorizontalSlider from "@/components/PackagesHorizontalSlider"
import CTASection from '@/components/CTASection'
import TailorMadeBentoGrid from '@/components/TailorMadeBentoGrid'
import AboutTrusted from '@/components/AboutTrusted'
import RandomPackageSections from '@/components/RandomPackageSections'
import HotelBookingSection from '@/components/HotelBookingSection'
import LoginPage from '@/components/LoginPage'
import VideoLandingSection from '@/components/VideoLandingSection'



export const metadata: Metadata = {
  metadataBase: new URL("https://bengaltourism.in"),

  title: {
    default: "Bengal Tourism.in | Home | top and best tour operator and travel agent | in West Bengal | calling and  inviting you to visit and explore Bengal - the sweetest part of India | best and top  tour operator in Incredible India | Foreign Destinations | About us | Tourist Destinations in | Bengal | India | Earn with us | Brands | Contact | Hotel booking |",
    template: "%s | Bengal Tourism.in"
  },

  description:
    "Plan your perfect West Bengal vacation with Bengal Tourism.in - Leading travel agency offering customized tour packages for Darjeeling tea gardens, Sundarbans tiger reserve, Kolkata heritage tours, Digha beach holidays, Dooars jungle safari. Book budget-friendly family trips, honeymoon packages, adventure tours with best prices guaranteed. 24/7 support, expert guides, verified hotels.",

  keywords: [
    "West Bengal Tourism",
    "Bengal Tour Packages",
    "Darjeeling Tour Package",
    "Sundarbans Tour",
    "Kolkata Tourism",
    "Digha Beach Tour",
    "Dooars Package",
    "Bengal Travel Guide",
    "Hotel Booking West Bengal",
    "Wildlife Safari Sundarbans",
    "best travel agent West Bengal",
    "top tour operator Bengal",
    "Darjeeling honeymoon package",
    "Sundarbans tiger safari",
    "Kolkata city tour",
    "Dooars forest safari",
    "Murshidabad heritage tour",
    "Bishnupur terracotta tour",
    "Shantiniketan cultural tour",
    "Gangtok Sikkim package",
    "Puri Konark tour from Bengal",
    "budget Bengal tour",
    "luxury West Bengal travel",
    "family vacation Bengal",
    "adventure tourism Bengal",
    "eco tourism Sundarbans",
    "tea garden tours Darjeeling",
    "heritage tours Kolkata",
    "beach holidays Digha Mandarmani",
    "jungle safari Dooars",
    "West Bengal tourism department",
    "Bengal tourism official packages",
    "customized Bengal tours",
    "group travel Bengal",
    "corporate travel West Bengal",
    "student tours Bengal",
    "senior citizen tours Bengal"
  ],

  alternates: {
    canonical: "https://bengaltourism.in"
  },

  openGraph: {
    title: "Bengal Tourism.in | Home | top and best tour operator and travel agent | in West Bengal | calling and  inviting you to visit and explore Bengal - the sweetest part of India | best and top  tour operator in Incredible India | Foreign Destinations | About us | Tourist Destinations in | Bengal | India | Earn with us | Brands | Contact | Hotel booking |",
    description:
      "Book customized West Bengal tour packages with Bengal Tourism.in - Expert travel agent offering Darjeeling hill station tours, Sundarbans tiger safari, Kolkata heritage walks, Dooars jungle adventure, Digha beach holidays. Best prices, 24/7 support, verified hotels, expert guides.",
    url: "https://bengaltourism.in",
    siteName: "Bengal Tourism.in",
    type: "website",
    locale: "en_IN",
    countryName: "India",
    images: [
      {
        url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200",
        width: 1200,
        height: 630,
        alt: "West Bengal Tourism - Darjeeling Tea Gardens & Sundarbans Tiger Reserve",
        type: "image/jpeg",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Bengal Tourism.in | Best West Bengal Tour Packages | Darjeeling | Sundarbans",
    description:
      "🌟 Top-rated West Bengal travel agent! Book Darjeeling honeymoon, Sundarbans safari, Kolkata heritage tours. Best prices guaranteed! 📞 24/7 Support",
    images: [
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200",
    ],
    site: "@bengaltourism",
    creator: "@bengaltourism",
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  verification: {
    google: "PASTE_REAL_GOOGLE_SEARCH_CONSOLE_CODE_HERE",
    yandex: "PASTE_YANDEX_VERIFICATION_CODE_HERE",
  },

  category: "travel",
  authors: [{ name: "Bengal Tourism.in", url: "https://bengaltourism.in" }],
  publisher: "Bengal Tourism.in",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  other: {
    "theme-color": "#f59e0b",
    "msapplication-TileColor": "#f59e0b",
    "apple-mobile-web-app-title": "Bengal Tourism",
    "application-name": "Bengal Tourism",
    "msapplication-config": "/browserconfig.xml",
  },
};

export default function HomePage() {
  return (
    <>
      <main className="text-gray-800">

        <HeroSection />
        <PackagesHorizontalSlider />
        
        {/* ================= VIDEO LANDING SECTION ================= */}
        
        {/* ================= HOTEL BOOKING SECTION ================= */}
        <HotelBookingSection />
        <TailorMadeBentoGrid />
     
        <AboutTrusted />
        <LoginPage />
  <RandomPackageSections />

        <BreathtakingCities />
        <TestimonialsInteractive />

        <WhyChooseBengal />
        {/* ================= FEATURES SECTION ================= */}

        <CTASection />

      </main>
    </>
  )
}
