import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Sidebar from "../components/Sidebar";
import Header from "@/components/Header";

const byteSharp = localFont({
  src: "../public/fonts/byte-sharp.otf",
  variable: "--font-byte-sharp",
  display: "swap",
});





export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" > 
      <body className={`${byteSharp.variable} antialiased overflow-hidden`}>
        <Sidebar />
        <Header />
        <main className="ml-64 h-screen overflow-y-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
