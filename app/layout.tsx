import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar"; 
import Context from "@/context/Context";

export const metadata: Metadata = {
  title: "New-Next | E-Commerce",
  description: "Modern E-Commerce built with Next.js",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-gray-50">
        <Context>
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
        </Context>
      </body>
    </html>
  );
}