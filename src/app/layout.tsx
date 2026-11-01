import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer"; 
import { Chivo } from 'next/font/google'
import './styles.css'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { SITE_URL } from "@/data/seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Quest Web Tech | Web Design and Development in Toledo, Ohio",
    template: "%s | Quest Web Tech",
  },
  description:
    "Custom websites, web apps, APIs and databases for businesses in Toledo, Ohio, plus maintenance and marketing to keep them working.",
  openGraph: {
    type: "website",
    siteName: "Quest Web Development Technologies",
  },
  twitter: { card: "summary_large_image" },
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
