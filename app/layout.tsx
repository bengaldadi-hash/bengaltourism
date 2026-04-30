import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


export const metadata: Metadata = {
  title: "Bengal Tourism - Explore the Land of Culture",
  description: "Discover the beautiful destinations of West Bengal. From Darjeeling to Sundarban, experience the rich heritage and natural beauty of Bengal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <Navbar />
        {/* <ShareButton /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
