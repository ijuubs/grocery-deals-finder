import type { Metadata } from "next";
import Link from "next/link";
import Link from "next/link";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next App",
  description: "Generated by GPT Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-white shadow">
          <div className="container mx-auto px-4 py-6">
            <h1 className="text-3xl font-bold text-gray-900">Grocery Best Deals Finder</h1>
          </div>
        </header>
        <nav className="bg-gray-800">
          <div className="container mx-auto px-4 py-3">
            <div className="flex space-x-4">
              <Link href="/" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
              <Link href="/daily-specials" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Daily Specials</Link>
              <Link href="/weekly-specials" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Weekly Specials</Link>
              <Link href="/store-locations" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Store Locations</Link>
              <Link href="/price-comparisons" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Price Comparisons</Link>
              <Link href="/shopping-lists" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Shopping Lists</Link>
            </div>
          </div>
        </nav>
        <main>{children}</main>
        <footer className="bg-white shadow mt-8">
          <div className="container mx-auto px-4 py-6">
            <p className="text-gray-700">&copy; 2023 Grocery Best Deals Finder. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}