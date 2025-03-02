import type { Metadata } from "next";
import { Rubik, Space_Mono } from "next/font/google";
import "./globals.css";

const rubik = Rubik({
  variable: "--font-rubik-sans",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Home | Rotsteinfuchs",
  description: "Just my profile page (;",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rubik.variable} ${spaceMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
