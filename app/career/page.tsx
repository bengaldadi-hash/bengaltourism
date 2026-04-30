import { Metadata } from 'next'
import CareerPage from "@/components/careers/careerspage";

export const metadata: Metadata = {
  title: 'Careers at Bengal Tourism - Jobs & Business Opportunities | Join Our Team',
  description: 'Explore career opportunities at Bengal Tourism. Find jobs in tourism, marketing, networking, and entrepreneurship. Work from home or office with flexible hours and great earning potential.',
  keywords: 'Careers Bengal Tourism, jobs Bengal, tourism careers, work from home Bengal, business opportunities Bengal, marketing jobs Kolkata, networking jobs West Bengal',
  openGraph: {
    title: 'Careers at Bengal Tourism - Jobs & Business Opportunities',
    description: 'Explore career opportunities at Bengal Tourism. Find jobs in tourism, marketing, networking, and entrepreneurship with flexible work options.',
    type: 'website',
    url: 'https://bengaltourism.in/career',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200',
        width: 1200,
        height: 630,
        alt: 'Careers at Bengal Tourism - Jobs & Business Opportunities',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Careers at Bengal Tourism - Jobs & Business Opportunities',
    description: 'Explore career opportunities at Bengal Tourism. Find jobs in tourism, marketing, networking, and entrepreneurship.',
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

export default function Career() {
 
  return (
   <CareerPage />
  );
}
