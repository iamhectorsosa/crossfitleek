import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";

import "./globals.css";

import { NextIntlClientProvider } from "next-intl";

import { Footer } from "./components/footer";
import { Navbar } from "./components/navbar";

const montserratSans = Montserrat({
  variable: "--font-montserrat-sans",
  subsets: ["latin"],
});

const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

const baseUrl = "https://crossfitleek.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  alternates: { canonical: baseUrl },
  title: "CrossFit Leek — Move like a human",
  description: "Training die bij jou past. Een community die je motiveert.",
  keywords: [
    "CrossFit Leek",
    "CrossFit gym Netherlands",
    "functional fitness Leek",
    "strength and conditioning training",
    "CrossFit classes Groningen region",
    "group fitness training Netherlands",
    "personal training Leek",
    "HIIT workouts Netherlands",
    "weightlifting and strength training gym",
    "fitness coaching Netherlands",
    "beginner CrossFit classes",
    "advanced CrossFit training",
    "sports performance training",
    "health and fitness gym Leek",
    "community fitness gym Netherlands",
  ],
  openGraph: {
    title: "CrossFit Leek — Move like a human",
    description: "Training die bij jou past. Een community die je motiveert.",
    url: new URL(baseUrl),
    siteName: "CrossFit Leek",
    locale: "nl-NL",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="nl"
      className={`${montserratSans.variable} ${interSans.variable} h-full bg-background antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <NextIntlClientProvider>
          <Navbar />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
