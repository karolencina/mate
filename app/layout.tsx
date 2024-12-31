"use client";

import type { Metadata } from "next";
import { usePathname } from "next/navigation";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MobileMessage from "@/components/MobileMessage";
import Navbar from "@/components/Navbar";
import { SettingsProvider } from "./context/SettingsContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isOnboarding = pathname === "/onboarding";

  return isOnboarding ? (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className="main-content">{children}</div>
        <MobileMessage />
      </body>
    </html>
  ) : (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <SettingsProvider>
          <Navbar />
          <div className="main-content">{children}</div>
          <MobileMessage />
        </SettingsProvider>
      </body>
    </html>
  );
}
