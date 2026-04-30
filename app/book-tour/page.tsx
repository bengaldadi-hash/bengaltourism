import { Metadata } from 'next'
import TourBookingPage from "@/components/BookTour/TourBookingPage";

export const metadata: Metadata = {
  title: 'Book Tours in Bengal - Tour Booking | Bengal Tourism',
  description: 'Book tours across West Bengal with Bengal Tourism. Find adventure tours, cultural trips, heritage walks, and customized travel packages. Best prices guaranteed.',
  keywords: 'Book tours Bengal, Bengal tour booking, Kolkata tours, Darjeeling tours, Sundarbans tours, West Bengal travel, adventure tours, cultural tours',
  openGraph: {
    title: 'Book Tours in Bengal - Tour Booking',
    description: 'Book tours across West Bengal with Bengal Tourism. Find adventure tours, cultural trips, and customized travel packages.',
    type: 'website',
    url: 'https://bengaltourism.in/book-tour',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1200',
        width: 1200,
        height: 630,
        alt: 'Book Tours in Bengal - Tour Booking',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Book Tours in Bengal - Tour Booking',
    description: 'Book tours across West Bengal with Bengal Tourism. Find adventure tours and cultural trips.',
    images: ['https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1200'],
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

export default function BookingPage() {

  return (
   <TourBookingPage/>
  );
}
