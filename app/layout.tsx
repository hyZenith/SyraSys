import Sidebar from "../components/Sidebar";
import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import "./globals.css";
import "./icon-fonts.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#f2f0f8] text-neutral-900">
        <Navbar />
        <Sidebar />
        <ScrollProgress />
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
