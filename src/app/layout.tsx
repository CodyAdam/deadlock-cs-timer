import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import favicon from "./favicon.png"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Deadlock Timer",
  description: "Deadlock Timer for creeps",
  icons: [{ rel: "icon", url: favicon.src }]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#323232]`}
      >
        {children}
      </body>
    </html>
  );
}
