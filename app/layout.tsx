import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import LoadingScreen from "@/components/LoadingScreen";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sublime Studios",
  description:
    "Sublime Studios | Photography by a Geologist, Photographer and Explorer",
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen bg-black text-white">

        {/* Cinematic Loading Screen */}
        <LoadingScreen />

        {/* Website */}
        <div className="min-h-screen">

          {children}

          {/* Footer appears after the complete page content */}
          <Footer />

        </div>

      </body>
    </html>
  );
}