import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fake Store",
  description: "Simple Next.js shopping demo using DummyJSON",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-gray-800 overflow-x-hidden min-h-screen`}
      >
      <Navbar />

        {/* Main content area */}
        <main className="min-h-screen max-w-6xl mx-auto w-full px-6 py-6">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}