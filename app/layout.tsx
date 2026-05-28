import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import FloatingCallButton from "@/components/layout/FloatingCallButton";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-display",
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
    <html lang="en" className={`${manrope.variable} ${sora.variable} h-full antialiased`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                try {
                  var storedTheme = window.localStorage.getItem("parts-central-theme");
                  var theme = storedTheme === "dark" || storedTheme === "light"
                    ? storedTheme
                    : (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
                  document.documentElement.classList.toggle("dark", theme === "dark");
                  document.documentElement.classList.toggle("light", theme === "light");
                  document.documentElement.style.colorScheme = theme;
                } catch (error) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <CustomCursor />
        <Navbar />
        <FloatingCallButton />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

