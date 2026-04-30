import { Metadata } from 'next'
import ContactPage from "@/components/contact/ContactPage";

export const metadata: Metadata = {
  title: 'Contact Bengal Tourism - Get in Touch | Official Tourism Portal',
  description: 'Contact Bengal Tourism for tour bookings at 6289783779 and hotel bookings at 7890727339. WhatsApp support available. Email: bengaltourism@gmail.com. Visit our office at AG-209, Flat No 402, Kestopur, Kolkata - 700101.',
  keywords: 'Contact Bengal Tourism, Bengal Tourism contact, Kolkata office, Bengal tourism phone, customer support, travel inquiries, tour booking contact, hotel booking contact',
  openGraph: {
    title: 'Contact Bengal Tourism - Get in Touch',
    description: 'Contact Bengal Tourism for tour bookings at 6289783779 and hotel bookings at 7890727339. WhatsApp support available.',
    type: 'website',
    url: 'https://bengaltourism.in/contact',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200',
        width: 1200,
        height: 630,
        alt: 'Contact Bengal Tourism - Customer Support',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Bengal Tourism - Get in Touch',
    description: 'Contact Bengal Tourism for tour bookings at 6289783779 and hotel bookings at 7890727339. WhatsApp support available.',
    images: ['https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200'],
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

export default function Contact() {
 

  return (
   <ContactPage/>
  );
}
