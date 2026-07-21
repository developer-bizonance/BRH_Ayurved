import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const playfair = Inter({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "B. R. Harne Ayurvedic Medical College Karav-Vangani",
    template: "%s | B. R. Harne Ayurvedic Medical College",
  },
  description:
    "B. R. Harne Ayurvedic Medical College in Karav-Vangani, Mumbai, offers high-quality education in Ayurveda (BAMS) and traditional Indian medicine with modern facilities and experienced faculty.",
  keywords: [
    "Ayurvedic Medical College",
    "B. R. Harne",
    "Karav-Vangani",
    "BAMS",
    "Ayurveda",
    "Medical Education",
    "Maharashtra",
    "MUHS",
  ],
  authors: [{ name: "B. R. Harne Ayurvedic Medical College" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://brharneayurved.in",
    siteName: "B. R. Harne Ayurvedic Medical College",
    title: "B. R. Harne Ayurvedic Medical College Karav-Vangani",
    description:
      "Premier Ayurveda education and holistic healthcare in Karav-Vangani, Mumbai region.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} text-[90%]`} suppressHydrationWarning>
      <body className="font-[var(--font-inter)] antialiased min-h-screen flex flex-col" suppressHydrationWarning>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
