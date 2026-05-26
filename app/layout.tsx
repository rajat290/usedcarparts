import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import FloatingCallButton from "@/components/layout/FloatingCallButton";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Parts Central | Quality OEM Used Auto Parts",
  description:
    "Affordable, trusted used OEM engines, transmissions, and auto parts with nationwide shipping and warranty-backed support.",
  keywords: [
    "used auto parts",
    "used oem parts",
    "used engine",
    "used transmission",
    "car parts",
    "parts central",
  ],
  openGraph: {
    title: "Parts Central | Quality OEM Used Auto Parts",
    description:
      "Find reliable used OEM auto parts with fast shipping, fair pricing, and expert support.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <FloatingCallButton />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

