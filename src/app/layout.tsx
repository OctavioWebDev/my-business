import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer"; 
import { Chivo } from 'next/font/google'
import './styles.css'

export const metadata: Metadata = {
  title: "Quest Web Development Technologies",
  description: "Navigating Your Digital Success",
  
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
        <Footer />
      </body>
    </html>
  );
}
