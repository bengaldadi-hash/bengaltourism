import { Metadata } from 'next'
import BrandsPage from "@/components/Brands/BrandsPage";

export const metadata: Metadata = {
  title: 'Best Brands of Bengal - Premium Products & Services | Bengal Tourism',
  description: 'Discover Bengal\'s finest brands across jewellery, food, handloom, crafts, hotels, and travel. Premium quality products and authentic services from trusted Bengal brands and businesses.',
  keywords: 'Best brands Bengal, Bengal brands, jewellery brands Kolkata, Bengali food brands, handloom Bengal, Darjeeling tea brands, Bengal crafts, premium products Bengal, traditional crafts Bengal',
  openGraph: {
    title: 'Best Brands of Bengal - Premium Products & Services',
    description: 'Discover Bengal\'s finest brands across jewellery, food, handloom, crafts, hotels, and travel. Premium quality products and authentic services from trusted Bengal brands and businesses.',
    type: 'website',
    url: 'https://bengaltourism.in/brands',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=1200',
        width: 1200,
        height: 630,
        alt: 'Best Brands of Bengal - Premium Products & Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Brands of Bengal - Premium Products & Services',
    description: 'Discover Bengal\'s finest brands across jewellery, food, handloom, crafts, hotels, and travel.',
    images: ['https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=1200'],
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

export default function Brands() {

  return (
  <BrandsPage />
  );
}
