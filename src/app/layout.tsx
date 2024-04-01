import type { Metadata } from "next";

import { LayoutProps } from "./types/page";

import { Inter } from "next/font/google";
import "./globals.css";

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pagination Challenge",
  description:
    "This app is a challenge for a pagination component. It uses Next.js, React, and TypeScript. It is a simple app that fetches data from an API and displays it in a paginated table.",
  creator: "Agata Ziemniak",
  keywords: ["Next.js", "React", "TypeScript"],
};

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<LayoutProps>) {
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <header>
          <Navigation />
        </header>
        {children}
        <Footer />
      </body>
    </html>
  );
}
