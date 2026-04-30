import { Metadata } from 'next'
import HotelBookingPage from "@/components/BookHotel/HotelBookingPage";

export const metadata: Metadata = {
  title: 'Bengal Tourism.in | Hotel Booking | top and best hotel booking agent | in West Bengal-the sweetest part of India in | Darjeeling | Kalimpong | Kurseong | Mirik | Homestays in Hills | Jaldapara |  Gorumara | Murti | Lataguri | Digha | Mandarmoni | Tajpur | Bankura | Purulia | Mayapur | Shantiniketan | Bolpur | Tarapith | Homestays in Plains  | Kolkata | All major tourist destinations in Incredible India | Puri | Konark | Bhubaneswar |  Gangtok | Pelling | Lachen | Lachung | Kashmir | Srinagar | Sonmarg | Katra | Manali |  Dehradun | Nainital | Haridwar | Andaman | and all the major tourist destinations mentioned in our website |',
  description: 'Book hotels across West Bengal with Bengal Tourism. Find AC rooms, deluxe suites, and budget stays in Kolkata, Darjeeling, Digha, Sundarbans and more. Best prices guaranteed.',
  keywords: 'Book hotels Bengal, Bengal hotel booking, Kolkata hotels, Darjeeling hotels, Digha hotels, Sundarbans hotels, West Bengal accommodation, hotel rooms, AC rooms',
  openGraph: {
    title: 'Book Hotels in Bengal - Hotel Booking',
    description: 'Book hotels across West Bengal with Bengal Tourism. Find AC rooms, deluxe suites, and budget stays.',
    type: 'website',
    url: 'https://bengaltourism.in/book-hotel',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1566073792557-78d16f48497?w=1200',
        width: 1200,
        height: 630,
        alt: 'Book Hotels in Bengal - Hotel Booking',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Book Hotels in Bengal - Hotel Booking',
    description: 'Book hotels across West Bengal with Bengal Tourism. Find AC rooms, deluxe suites, and budget stays.',
    images: ['https://images.unsplash.com/photo-1566073792557-78d16f48497?w=1200'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function HotelBooking() {
  
  return (
    <>
    <HotelBookingPage />
    </>
  );
}
