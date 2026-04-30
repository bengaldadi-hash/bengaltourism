import { Metadata } from 'next'
import AboutPage from "@/components/about/AboutPage";
import ContactCTA from '@/components/ContactCTA';

export const metadata: Metadata = {
  metadataBase: new URL("https://bengaltourism.in"),
  
  title: {
    default: "About Bengal Tourism.in - Leading West Bengal Travel Agency Since 2008 | Our Story & Mission",
    template: "%s | Bengal Tourism.in"
  },
  
  description: "Discover Bengal Tourism.in - West Bengal's most trusted travel agency since 2008. Learn about our journey, mission to promote sustainable tourism, expert team, and commitment to providing exceptional Darjeeling, Sundarbans, Kolkata tour packages. 15+ years experience, 50,000+ happy customers.",
  
  keywords: [
    "About Bengal Tourism.in",
    "Bengal Tourism story",
    "West Bengal travel agency history",
    "Bengal Tourism mission",
    "Bengal Tourism vision",
    "West Bengal tourism team",
    "sustainable tourism Bengal",
    "Bengal tourism since 2008",
    "best travel agency West Bengal",
    "Bengal Tourism founders",
    "Bengal Tourism achievements",
    "West Bengal tourism experts",
    "Bengal Tourism customer service",
    "Bengal Tourism awards",
    "responsible tourism Bengal",
    "Bengal Tourism company profile",
    "travel agency West Bengal",
    "Bengal tourism leadership",
    "Bengal Tourism values",
    "West Bengal tourism operator",
    "Bengal Tourism experience",
    "tourism company Bengal"
  ],
  
  openGraph: {
    title: "About Bengal Tourism.in - West Bengal's #1 Travel Agency Since 2008",
    description: "🏆 Leading West Bengal travel agency for 15+ years! Discover our story of promoting Darjeeling, Sundarbans, Kolkata tourism with 50,000+ happy customers. Expert team, sustainable tourism practices.",
    type: 'website',
    url: 'https://bengaltourism.in/about',
    siteName: "Bengal Tourism.in",
    locale: "en_IN",
    countryName: "India",
    images: [
      {
        url: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=1200',
        width: 1200,
        height: 630,
        alt: 'Bengal Tourism.in - Leading West Bengal Travel Agency Team and Office',
        type: 'image/jpeg',
      },
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'About Bengal Tourism.in - West Bengal Travel Experts Since 2008',
    description: '🌟 Trusted by 50,000+ travelers! Learn about our 15+ year journey promoting West Bengal tourism. Expert team, sustainable practices, best tour packages! 🏆',
    images: ['https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=1200'],
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
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  alternates: {
    canonical: "https://bengaltourism.in/about"
  },
  
  verification: {
    google: "PASTE_REAL_GOOGLE_SEARCH_CONSOLE_CODE_HERE",
    yandex: "PASTE_YANDEX_VERIFICATION_CODE_HERE",
  },
  
  category: "travel",
  authors: [{ name: "Bengal Tourism.in Team", url: "https://bengaltourism.in/about" }],
  publisher: "Bengal Tourism.in",
  other: {
    "theme-color": "#f59e0b",
    "apple-mobile-web-app-title": "Bengal Tourism",
    "application-name": "Bengal Tourism",
  },
}

export default function About() {

  return (
    <>
      <AboutPage />
      <ContactCTA />

    </>
  );
}
