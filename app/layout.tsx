import type { Metadata } from "next";
import { Montserrat, Oswald, Inter } from "next/font/google";
import "./globals.css";

const montserratSans = Montserrat({
  variable: "--font-montserrat-sans",
  subsets: ["latin"],
});

const oswaldSans = Oswald({
  variable: "--font-oswald-sans",
  subsets: ["latin"],
});

const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://crossfitleek.nl"),
  alternates: { canonical: "https://crossfitleek.nl" },
  title: "Welcome to CrossFit Leek — Move like a human",
  description:
    "We help anyone who is serious about becoming strong and fit and is willing to work hard for it.",
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
    title: "Welcome to CrossFit Leek — Move like a human",
    description:
      "We help anyone who is serious about becoming strong and fit and is willing to work hard for it.",
    url: new URL("https://crossfitleek.nl"),
    siteName: "CrossFit Leek",
    locale: "en-US",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${montserratSans.variable} ${oswaldSans.variable} ${interSans.variable}  h-full antialiased bg-background`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
