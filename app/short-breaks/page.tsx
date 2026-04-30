import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Clock, MapPin, Calendar, Users, Star, ArrowRight, Coffee, Trees, Camera, Utensils, Sparkles, Map } from 'lucide-react'
import ContactCTA from '@/components/ContactCTA'
import PackagePricing from '@/components/PackagePricing'

export default function ShortBreaks() {
  const bengalPackages = [
    {
      name: "Ajodhya Pahar in Purulia",
      description: "Experience the famous Hunting Festival with tribal culture and scenic beauty",
      duration: "2N/3D",
      price: "On Request",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
      rating: 4.7,
      distance: "260 km",
      specialFeature: "Hunting Festival",
      cuisine: "Traditional tribal cuisine"
    },
    {
      name: "Baranti in Purulia",
      description: "Serene reservoir surrounded by hills, perfect for nature lovers",
      duration: "2N/3D",
      price: "On Request",
      image: "https://images.unsplash.com/photo-1540202404-1b9279c8c475?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
      rating: 4.6,
      distance: "250 km",
      specialFeature: "Natural Reservoir",
      cuisine: "Rural Bengali dishes"
    },
    {
      name: "Bishnupur in Bankura",
      description: "Terracotta temples and famous Baluchari sarees with rich cultural heritage",
      duration: "2N/3D",
      price: "On Request",
      image: "https://images.unsplash.com/photo-1593696140826-c58b021acf8b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
      rating: 4.8,
      distance: "140 km",
      specialFeature: "Terracotta Handicrafts & Baluchari Sarees",
      cuisine: "Traditional Bankura cuisine"
    },
    {
      name: "Bethuaduari in Nadia",
      description: "Historical fort with archaeological significance",
      duration: "2N/3D",
      price: "On Request",
      image: "https://images.unsplash.com/photo-1516426122078-c41e6e1bdffb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
      rating: 4.4,
      distance: "130 km",
      specialFeature: "Historical Fort",
      cuisine: "Nadia specialities"
    },
    {
      name: "Bakkhali in South 24-Parganas",
      description: "Pristine beach with casuarina groves and stunning sunsets",
      duration: "2N/3D",
      price: "On Request",
      image: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
      rating: 4.5,
      distance: "130 km",
      specialFeature: "Beach Paradise",
      cuisine: "Fresh seafood"
    },
    {
      name: "Belun Gram in Katwa",
      description: "Rural Bengal experience with traditional village life",
      duration: "2N/3D",
      price: "On Request",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
      rating: 4.3,
      distance: "150 km",
      specialFeature: "Village Tourism",
      cuisine: "Authentic rural Bengali food"
    },
    {
      name: "Baguran Jalpai in East Midnapore",
      description: "Beautiful beach destination with coastal charm",
      duration: "2N/3D",
      price: "On Request",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
      rating: 4.4,
      distance: "170 km",
      specialFeature: "Coastal Beauty",
      cuisine: "Coastal Bengali cuisine"
    },
    {
      name: "Ballavpur Forest in Birbhum",
      description: "Dense forest with diverse wildlife and nature trails",
      duration: "2N/3D",
      price: "On Request",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
      rating: 4.6,
      distance: "220 km",
      specialFeature: "Forest Reserve",
      cuisine: "Forest-side delicacies"
    },
    {
      name: "Bakreshwar in Birbhum",
      description: "Sacred hot water springs with religious significance",
      duration: "2N/3D",
      price: "On Request",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
      rating: 4.7,
      distance: "230 km",
      specialFeature: "Hot Water Spring",
      cuisine: "Temple prasad & local food"
    },
    {
      name: "Bawali Rajbari in Budge Budge",
      description: "Heritage mansion showcasing colonial architecture",
      duration: "2N/3D",
      price: "On Request",
      image: "https://images.unsplash.com/photo-1614850523296-d8c1e4edc8e1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
      rating: 4.8,
      distance: "35 km",
      specialFeature: "Heritage Mansion",
      cuisine: "Royal Bengali cuisine"
    },
    {
      name: "Bandel in Hooghly",
      description: "Historical Portuguese settlement with ancient church",
      duration: "2N/3D",
      price: "On Request",
      image: "https://images.unsplash.com/photo-1589822909392-6b9aba4398a9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
      rating: 4.5,
      distance: "45 km",
      specialFeature: "Portuguese Heritage",
      cuisine: "Anglo-Indian fusion"
    },
    {
      name: "Chandarnagar in Hooghly",
      description: "Former French colony with colonial architecture and museums",
      duration: "2N/3D",
      price: "On Request",
      image: "https://images.unsplash.com/photo-1593696140826-c58b021acf8b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
      rating: 4.6,
      distance: "40 km",
      specialFeature: "Former French Colony",
      cuisine: "French-influenced Bengali food"
    },
    {
      name: "Dashghara in Chinsura",
      description: "Former Dutch settlement with historical significance",
      duration: "2N/3D",
      price: "On Request",
      image: "https://images.unsplash.com/photo-1516426122078-c41e6e1bdffb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
      rating: 4.4,
      distance: "50 km",
      specialFeature: "Former Dutch Colony",
      cuisine: "Dutch-Bengali fusion"
    },
    {
      name: "Deulti in Howrah",
      description: "Riverside retreat with literary connections",
      duration: "2N/3D",
      price: "On Request",
      image: "https://images.unsplash.com/photo-1540202404-1b9279c8c475?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
      rating: 4.3,
      distance: "55 km",
      specialFeature: "Riverside Location",
      cuisine: "Riverside Bengali cuisine"
    },
    {
      name: "Digha & Mandarmoni",
      description: "Twin beach destinations with famous Beach Festival",
      duration: "2N/3D",
      price: "On Request",
      image: "https://images.unsplash.com/photo-1761933810905-ccc35b14d937?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
      rating: 4.6,
      distance: "185 km",
      specialFeature: "Beach Festival",
      cuisine: "Beachside seafood"
    },
    {
      name: "Diamond Harbour in South 24-Parganas",
      description: "Confluence of Hooghly River with Bay of Bengal",
      duration: "2N/3D",
      price: "On Request",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
      rating: 4.4,
      distance: "50 km",
      specialFeature: "River Confluence",
      cuisine: "Fresh river fish"
    },
    {
      name: "Falta & Raichak in South 24-Parganas",
      description: "Historical places with scenic riverside views",
      duration: "2N/3D",
      price: "On Request",
      image: "https://images.unsplash.com/photo-1589822909392-6b9aba4398a9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
      rating: 4.5,
      distance: "55 km",
      specialFeature: "Historical Riverside",
      cuisine: "Traditional Bengali dishes"
    },
    {
      name: "Farm House in Basanti",
      description: "Rural farm experience near Sundarbans",
      duration: "2N/3D",
      price: "On Request",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
      rating: 4.3,
      distance: "70 km",
      specialFeature: "Farm Tourism",
      cuisine: "Organic farm fresh food"
    },
    {
      name: "Farm House in Hasnabad",
      description: "Countryside experience with rural lifestyle",
      duration: "2N/3D",
      price: "On Request",
      image: "https://images.unsplash.com/photo-1540202404-1b9279c8c475?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
      rating: 4.3,
      distance: "80 km",
      specialFeature: "Rural Farm Stay",
      cuisine: "Farm-to-table cuisine"
    },
    {
      name: "Farm House in Usthi",
      description: "Agricultural tourism with local farming experience",
      duration: "2N/3D",
      price: "On Request",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
      rating: 4.2,
      distance: "60 km",
      specialFeature: "Agricultural Tourism",
      cuisine: "Fresh organic produce"
    },
    {
      name: "Fulia & Shantipur in Nadia",
      description: "Famous for cotton handloom sarees and weaving traditions",
      duration: "2N/3D",
      price: "On Request",
      image: "https://images.unsplash.com/photo-1593696140826-c58b021acf8b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
      rating: 4.7,
      distance: "100 km",
      specialFeature: "Cotton Handloom Saree",
      cuisine: "Traditional Nadia cuisine"
    },
    {
      name: "Gadiara & Goenkhali in Howrah",
      description: "Riverside confluence points with scenic beauty",
      duration: "2N/3D",
      price: "On Request",
      image: "https://images.unsplash.com/photo-1540202404-1b9279c8c475?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
      rating: 4.4,
      distance: "85 km",
      specialFeature: "River Confluence",
      cuisine: "Freshwater fish delicacies"
    },
    {
      name: "Gangani in Garbeta",
      description: "Known as the Grand Canyon of Bengal",
      duration: "2N/3D",
      price: "On Request",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
      rating: 4.6,
      distance: "200 km",
      specialFeature: "Grand Canyon of Bengal",
      cuisine: "Tribal cuisine"
    },
    {
      name: "Garh Jungle & Deul Park in Durgapur",
      description: "Ancient jungle with historical ruins",
      duration: "2N/3D",
      price: "On Request",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
      rating: 4.5,
      distance: "170 km",
      specialFeature: "Historical Jungle",
      cuisine: "Industrial city cuisine"
    },
    {
      name: "Garh Panchkot in Purulia",
      description: "Historical fort with famous Chhau Dance Festival",
      duration: "2N/3D",
      price: "On Request",
      image: "https://images.unsplash.com/photo-1516426122078-c41e6e1bdffb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
      rating: 4.7,
      distance: "270 km",
      specialFeature: "Chhau Dance Festival",
      cuisine: "Tribal & Purulia specialities"
    },
    {
      name: "Ganga Sagar Island & Kapil Muni's Ashram",
      description: "Sacred pilgrimage site with Kapil Muni's Ashram and Holy Dip",
      duration: "2N/3D",
      price: "On Request",
      image: "https://images.unsplash.com/photo-1540202404-1b9279c8c475?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
      rating: 4.8,
      distance: "135 km",
      specialFeature: "Kapil Muni's Ashram & Holy Dip",
      cuisine: "Pilgrimage special food"
    },
    {
      name: "Hadal Narayanpur in Bankura",
      description: "Famous for Dokra metal artefacts and tribal crafts",
      duration: "2N/3D",
      price: "On Request",
      image: "https://images.unsplash.com/photo-1593696140826-c58b021acf8b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
      rating: 4.6,
      distance: "180 km",
      specialFeature: "Dokra Artefacts",
      cuisine: "Bankura tribal cuisine"
    },
    {
      name: "Hazarduari Palace in Murshidabad",
      description: "Grand palace with thousand doors and famous Murshidabad Silk",
      duration: "2N/3D",
      price: "On Request",
      image: "https://images.unsplash.com/photo-1614850523296-d8c1e4edc8e1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
      rating: 4.9,
      distance: "200 km",
      specialFeature: "Murshidabad Silk",
      cuisine: "Royal Nawabi cuisine"
    },
    {
      name: "Itachuna Rajbari in Pandua",
      description: "Heritage mansion showcasing Bengali aristocracy",
      duration: "2N/3D",
      price: "On Request",
      image: "https://images.unsplash.com/photo-1589822909392-6b9aba4398a9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
      rating: 4.7,
      distance: "90 km",
      specialFeature: "Heritage Rajbari",
      cuisine: "Traditional Bengali royal food"
    },
    {
      name: "Jharkhali in Sunderban",
      description: "Mangrove forest trail with wildlife experience",
      duration: "2N/3D",
      price: "On Request",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
      rating: 4.6,
      distance: "100 km",
      specialFeature: "Mangrove Forest Trail",
      cuisine: "Sundarban special cuisine"
    },
    {
      name: "Jangalmahal & Belpahari in Jhargram",
      description: "Tribal village experience with authentic tribal culture",
      duration: "2N/3D",
      price: "On Request",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
      rating: 4.5,
      distance: "250 km",
      specialFeature: "Tribal Village",
      cuisine: "Authentic tribal food"
    },
    {
      name: "Joypur Forest in Bankura",
      description: "Dense forest with natural beauty and wildlife",
      duration: "2N/3D",
      price: "On Request",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
      rating: 4.6,
      distance: "200 km",
      specialFeature: "Natural Forest",
      cuisine: "Forest-side Bengali cuisine"
    },
    {
      name: "Kolkata",
      description: "Cultural hub with Film Festival, Book Fair, Durga Puja Carnival & Food Trails",
      duration: "2N/3D",
      price: "On Request",
      image: "https://images.unsplash.com/photo-1593696140826-c58b021acf8b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
      rating: 4.8,
      distance: "0 km",
      specialFeature: "Film Festival / Book Fair / Durga Puja Carnival / Food Trails",
      cuisine: "Cosmopolitan Bengali cuisine"
    },
    {
      name: "Kolaghat in East Midnapore",
      description: "Riverside town with industrial heritage",
      duration: "2N/3D",
      price: "On Request",
      image: "https://images.unsplash.com/photo-1540202404-1b9279c8c475?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
      rating: 4.3,
      distance: "85 km",
      specialFeature: "Industrial Heritage",
      cuisine: "Riverside Bengali food"
    },
    {
      name: "Krishnanagar in Nadia",
      description: "Famous for clay modelling and traditional crafts",
      duration: "2N/3D",
      price: "On Request",
      image: "https://images.unsplash.com/photo-1593696140826-c58b021acf8b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
      rating: 4.5,
      distance: "120 km",
      specialFeature: "Clay Modelling",
      cuisine: "Nadia special cuisine"
    },
    {
      name: "Machranga Island in Hasnabad",
      description: "Island paradise with natural beauty",
      duration: "2N/3D",
      price: "On Request",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
      rating: 4.4,
      distance: "85 km",
      specialFeature: "Island Tourism",
      cuisine: "Island special cuisine"
    },
    {
      name: "Mousuni Island in South 24-Parganas",
      description: "Pristine island with beach and rural life",
      duration: "2N/3D",
      price: "On Request",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
      rating: 4.5,
      distance: "95 km",
      specialFeature: "Island Beach",
      cuisine: "Coastal island cuisine"
    },
    {
      name: "Mayapur – Isckon Temple in Nadia",
      description: "Spiritual destination with famous Chariot Festival of Lord Jagannath",
      duration: "2N/3D",
      price: "On Request",
      image: "https://images.unsplash.com/photo-1589822909392-6b9aba4398a9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
      rating: 4.8,
      distance: "130 km",
      specialFeature: "Chariot Festival of Lord Jagannath",
      cuisine: "Vegetarian spiritual food"
    },
    {
      name: "Mahisadal Rajbari in Haldia",
      description: "Heritage mansion with colonial architecture",
      duration: "2N/3D",
      price: "On Request",
      image: "https://images.unsplash.com/photo-1614850523296-d8c1e4edc8e1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
      rating: 4.6,
      distance: "125 km",
      specialFeature: "Heritage Architecture",
      cuisine: "Traditional Bengali royal cuisine"
    },
    {
      name: "Mukutmonipur in Bankura",
      description: "Scenic dam surrounded by hills and forests",
      duration: "2N/3D",
      price: "On Request",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
      rating: 4.7,
      distance: "220 km",
      specialFeature: "Dam & Hills",
      cuisine: "Bankura special cuisine"
    },
    {
      name: "Monchasha in East Midnapore",
      description: "Eco-tourism destination with rural experience",
      duration: "2N/3D",
      price: "On Request",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
      rating: 4.5,
      distance: "160 km",
      specialFeature: "Eco-Tourism",
      cuisine: "Rural Bengali cuisine"
    },
    {
      name: "Piyali Island in Sunderban",
      description: "Gateway to Sundarbans with mangrove experience",
      duration: "2N/3D",
      price: "On Request",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
      rating: 4.4,
      distance: "80 km",
      specialFeature: "Sundarban Gateway",
      cuisine: "Sundarban special food"
    },
    {
      name: "Serampore",
      description: "Former Dutch colony with historical significance",
      duration: "2N/3D",
      price: "On Request",
      image: "https://images.unsplash.com/photo-1589822909392-6b9aba4398a9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
      rating: 4.5,
      distance: "25 km",
      specialFeature: "Former Dutch Colony",
      cuisine: "Dutch-influenced Bengali food"
    },
    {
      name: "Santiniketan & Bolpur in Birbhum",
      description: "Tagore's abode with Basant Utsav/Holi & Batik Handicraft",
      duration: "2N/3D",
      price: "On Request",
      image: "https://images.unsplash.com/photo-1589822909392-6b9aba4398a9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
      rating: 4.9,
      distance: "160 km",
      specialFeature: "Basant Utsav/Holi & Batik Handicraft",
      cuisine: "Bolpur specialities"
    },
    {
      name: "Sobuj Deep in Hooghly",
      description: "Green island with natural beauty",
      duration: "2N/3D",
      price: "On Request",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
      rating: 4.3,
      distance: "45 km",
      specialFeature: "Green Island",
      cuisine: "Island Bengali cuisine"
    },
    {
      name: "Susunia Pahar in Bankura",
      description: "Hill destination with Adivasi or Tribal Hamlets",
      duration: "2N/3D",
      price: "On Request",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
      rating: 4.6,
      distance: "210 km",
      specialFeature: "Adivasi or Tribal Hamlets",
      cuisine: "Tribal hill cuisine"
    },
    {
      name: "Tarapith in Rampurhat",
      description: "Sacred Shakti Peeth with religious significance",
      duration: "2N/3D",
      price: "On Request",
      image: "https://images.unsplash.com/photo-1589822909392-6b9aba4398a9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
      rating: 4.8,
      distance: "270 km",
      specialFeature: "Shakti Peeth",
      cuisine: "Temple prasad & local food"
    },
    {
      name: "Tarakeswar",
      description: "Famed Shiva Temple with religious importance",
      duration: "2N/3D",
      price: "On Request",
      image: "https://images.unsplash.com/photo-1589822909392-6b9aba4398a9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
      rating: 4.7,
      distance: "60 km",
      specialFeature: "Famed Shiva Temple",
      cuisine: "Temple cuisine"
    },
    {
      name: "Taki / Petrapole in Hasnabad",
      description: "Border town with Bangladesh and cultural exchange",
      duration: "2N/3D",
      price: "On Request",
      image: "https://images.unsplash.com/photo-1516426122078-c41e6e1bdffb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
      rating: 4.4,
      distance: "80 km",
      specialFeature: "Border of Bangladesh",
      cuisine: "Border special cuisine"
    },
    {
      name: "Tajpur in East Midnapore",
      description: "Up-coming port town with beautiful beach",
      duration: "2N/3D",
      price: "On Request",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
      rating: 4.5,
      distance: "170 km",
      specialFeature: "Up-coming Port Town",
      cuisine: "Beachside cuisine"
    }
  ]

  const breakFeatures = [
    {
      icon: Sparkles,
      title: "Tailor-made Packages",
      description: "Customized itineraries designed just for you"
    },
    {
      icon: Utensils,
      title: "Authentic Cuisine",
      description: "Taste traditional Bengali flavors"
    },
    {
      icon: Map,
      title: "Diverse Destinations",
      description: "From beaches to hills, explore it all"
    },
    {
      icon: Camera,
      title: "Cultural Experiences",
      description: "Capture Bengal's rich heritage"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[800px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1761933810905-ccc35b14d937?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U2hvcnQlMjBCcmVha3N8ZW58MHx8MHx8fDA%3D"
            alt="Bengal Short Break Adventures"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>

        {/* Animated background elements */}

        <div className="relative container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-white text-center max-w-4xl">
            <div className="inline-flex items-center justify-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">Special Tailor-made Packages</span>
            </div>
            <h1 className="text-6xl font-bold mb-6 leading-tight">Bengal Short Break Adventures</h1>
            <p className="text-2xl mb-4 text-blue-100">Custom-designed packages with flexible duration & pricing</p>
            <p className="text-lg mb-8 text-blue-100 max-w-3xl mx-auto">Explore 47+ diverse destinations across West Bengal - from pristine beaches to ancient temples, tribal villages to colonial heritage</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/book-tour" className="bg-gradient-to-r from-yellow-600 to-orange-600 text-white px-8 py-4 rounded-xl hover:from-yellow-700 hover:to-orange-700 transition-all transform hover:scale-105 flex items-center gap-3 shadow-lg">
                Book Your Adventure
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="#destinations" className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-blue-600 transition-all transform hover:scale-105">
                Explore All Packages
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section id="destinations" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-4">
              <Map className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">47+ Destinations</span>
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Bengal Tourism Packages</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover West Bengal's diverse destinations with our specially curated short break packages.
              Each destination offers unique experiences, from cultural festivals to natural wonders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bengalPackages.map((destination, index: number) => (
              <div key={index} className="group bg-gradient-to-br from-white via-blue-50 to-cyan-50 rounded-3xl shadow-xl hover:shadow-3xl transition-all duration-500 overflow-hidden hover:-translate-y-3 border border-blue-100">
                {/* Card Header */}
                <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>

                  <div className="relative">
                   
                      <h3 className="text-2xl font-bold text-white mb-3">{destination.name}</h3>
                   
             

                  
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <p className="text-gray-700 mb-6 leading-relaxed">{destination.description}</p>

                  {/* Special Feature */}
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-3 rounded-xl mb-4 shadow-lg">
                    <span className="text-sm font-bold flex items-center gap-2">
                      <Sparkles className="w-5 h-5" />
                      {destination.specialFeature}
                    </span>
                  </div>

                  {/* Cuisine */}
                  <div className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-4 py-3 rounded-xl mb-6 shadow-lg">
                    <span className="text-sm font-bold flex items-center gap-2">
                      <Utensils className="w-5 h-5" />
                      {destination.cuisine}
                    </span>
                  </div>

                  {/* Footer */}
               

                  <Link
                    href="/book-tour"
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-4 rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all text-center block font-bold shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    Book Now For {destination.duration}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
<section className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

      {/* Video Section */}
      <div className="lg:col-span-2">
        <div className="bg-white rounded-3xl shadow-lg p-8">
          <h3 className="text-2xl font-bold mb-6 text-gray-800">
            Watch  Short Breaks Tour Video
          </h3>

          <div className="aspect-video rounded-xl overflow-hidden">
            <iframe
              className="w-full h-full"
         src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
              title="Sundarban Boat Stay Tour Video"
              loading="lazy"
              allowFullScreen
            />
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div className="space-y-8 lg:sticky lg:top-24 h-fit">

        {/* Advertisement */}
        <div className="bg-gradient-to-br from-orange-500 to-yellow-500 text-white rounded-3xl shadow-lg p-8 text-center">
          <h3 className="text-xl font-bold mb-4">
            🚀 Advertise With Us
          </h3>

          <p className="text-sm opacity-90 mb-6">
            Promote your travel brand, tour packages, or special offers.
            Reach thousands of travelers visiting our platform.
          </p>

          <a
            href="/contact"
            className="inline-block bg-white text-orange-600 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition"
          >
            Contact For Promotion
          </a>
        </div>

        {/* Special Offer */}
        <div className="bg-gradient-to-br from-blue-600 to-teal-600 text-white rounded-3xl shadow-lg p-8 text-center">
          <h3 className="text-xl font-bold mb-4">
            🌍 Travel Partner Promotion
          </h3>

          <p className="text-sm opacity-90 mb-6">
            Showcase your brand, hotel deals or travel experiences
            to our growing travel audience.
          </p>

          <a
            href="/contact"
            className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition"
          >
            Contact For Promotion
          </a>
        </div>

      </div>
    </div>
  </div>
</section>
      {/* Local Cuisine Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-orange-50 via-yellow-50 to-yellow-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-orange-100 text-orange-700 px-4 py-2 rounded-full mb-4">
              <Utensils className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">Must Try Local Cuisine</span>
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Authentic Bengali Flavors</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We highly recommend authentic Bengali cuisine featuring Fish – Crab – Prawn – Lamb curries & Vegetable preparations & Rice,
              Rosogolla, Mishti Doi & Sondesh. Experience the true flavors of Bengal!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 text-center hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <span className="text-4xl">🐟</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Authentic Fish Curries</h3>
              <p className="text-gray-600 leading-relaxed">Fresh river and sea fish prepared with traditional Bengali spices and mustard oil, bringing you the true taste of Bengal's waters</p>
            </div>
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 text-center hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <span className="text-4xl">🦐</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Crab & Prawn Delicacies</h3>
              <p className="text-gray-600 leading-relaxed">Coastal specialties featuring fresh seafood with authentic Bengali preparations, perfect for seafood lovers</p>
            </div>
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 text-center hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <span className="text-4xl">🍮</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Traditional Sweets</h3>
              <p className="text-gray-600 leading-relaxed">Famous Rosogolla, Mishti Doi & Sondesh - the perfect end to your Bengali meal with centuries-old recipes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-4">
              <Sparkles className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">Why Choose Us</span>
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Why Choose Bengal Short Breaks?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Experience the perfect blend of culture, nature, and adventure with our carefully crafted packages
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {breakFeatures.map((feature, index) => (
              <div key={index} className="group text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <feature.icon className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PackagePricing
        title="Short Break Tour Packages"
        subtitle="Choose your perfect quick getaway duration"
      />


      <ContactCTA />
    </div>
  )
}
