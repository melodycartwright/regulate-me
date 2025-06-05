import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { Navbar } from "@/sections/Navbar";
import Header from "@/components/Header";

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Regulate Me",
  description: "A soft space to check in, reflect, and regulate.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-black">
        <LanguageProvider>
          <Header/>
          <Navbar />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
