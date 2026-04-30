import { Metadata } from 'next'
import AfricaPageComponent from '@/components/AfricaPageComponent'

export const metadata: Metadata = {
  metadataBase: new URL("https://bengaltourism.in"),
  
  title: {
    default: "Africa Wildlife Adventures - Kenya Tanzania South Africa Safari Packages | Best Wildlife Tours",
    template: "%s | Bengal Tourism.in"
  },
  
  description: "Book thrilling Africa wildlife safari tours to Kenya, Tanzania, South Africa. Experience Big Five game drives, Great Migration in Serengeti, Victoria Falls, Chobe National Park. Expert guides, luxury lodges, budget-friendly packages with Bengal Tourism.in - Best Africa safari operator.",
  
  keywords: [
    "Africa Wildlife Adventures",
    "Kenya safari packages",
    "Tanzania wildlife tours",
    "South Africa safari",
    "Big Five Africa safari",
    "Serengeti Great Migration",
    "Masai Mara safari",
    "Victoria Falls tours",
    "Chobe National Park",
    "Africa safari packages",
    "Kenya Tanzania safari",
    "Africa wildlife tours",
    "best Africa safari",
    "luxury Africa safari",
    "budget Africa safari",
    "Africa safari operator",
    "Africa adventure tours",
    "wildlife photography Africa",
    "Africa game drives",
    "Africa safari lodges",
    "Africa safari from India",
    "Bengal Tourism Africa packages",
    "Africa safari booking",
    "Africa wildlife holidays",
    "Africa safari experience",
    "Kenya Tanzania South Africa tours"
  ],
  
  openGraph: {
    title: "Africa Wildlife Adventures - Best Kenya Tanzania South Africa Safari Tours",
    description: "🦁 Book unforgettable Africa wildlife safaris! Witness Big Five, Great Migration, Victoria Falls. Expert guides, luxury lodges, best prices. Kenya, Tanzania, South Africa packages available!",
    type: 'website',
    url: 'https://bengaltourism.in/africa-wildlife-adventures',
    siteName: "Bengal Tourism.in",
    locale: "en_IN",
    countryName: "India",
    images: [
      {
        url: 'https://images.unsplash.com/photo-1731994634956-94a42f6b6290?w=1200',
        width: 1200,
        height: 630,
        alt: 'Africa Wildlife Safari - Big Five Animals in Kenya Tanzania Savanna',
        type: 'image/jpeg',
      },
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'Africa Wildlife Safari Tours | Kenya Tanzania South Africa',
    description: '🌍 Experience thrilling Africa safaris! Big Five, Great Migration, Victoria Falls. Book now with best prices! 🦁🦏🦒',
    images: ['https://images.unsplash.com/photo-1731994634956-94a42f6b6290?w=1200'],
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
    canonical: "https://bengaltourism.in/africa-wildlife-adventures"
  },
  
  verification: {
    google: "PASTE_REAL_GOOGLE_SEARCH_CONSOLE_CODE_HERE",
    yandex: "PASTE_YANDEX_VERIFICATION_CODE_HERE",
  },
  
  category: "travel",
  authors: [{ name: "Bengal Tourism.in", url: "https://bengaltourism.in" }],
  publisher: "Bengal Tourism.in",
  other: {
    "theme-color": "#059669",
    "apple-mobile-web-app-title": "Bengal Tourism",
    "application-name": "Bengal Tourism",
  },
}

export default function AfricaPage() {
  return <AfricaPageComponent />
}

              