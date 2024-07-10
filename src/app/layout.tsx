import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer"; 
import { Chivo } from 'next/font/google'
import './styles.css'
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = {
  title: "Quest Web Development Technologies",
  description: "Navigating Your Digital Success",
  openGraph: {
    title: "Quest Web Development Technologies",
    description: "Navigating Your Digital Success",
    type: "website",
    url: "https://questwebtech.com",
    images: [
      {
        url: "https://questwebtech.com/social-image.png",
        width: 1200,
        height: 630,
        alt: "Quest Web Development Technologies",
      },
    ],
    siteName: "Quest Web Development Technologies", 
  },
};

const chivo = Chivo({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-chivo',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={chivo.variable}>
        <Header />
        {children}
        <SpeedInsights />
        <Footer />
      </body>
    </html>
  );
}
