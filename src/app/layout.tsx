import "./globals.css";
import type { Metadata } from "next";
import { Navbar } from "@/sections/Navbar";

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
        <Navbar />
        {children}
      </body>
    </html>
  );
}
