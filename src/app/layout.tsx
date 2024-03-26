import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { i18nConfig } from "@/../../i18nConfig";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { footerData } from "@/app/staticData/";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
  creator: "Agata Ziemniak",
  keywords: ["Next.js", "React", "TypeScript"],
};

export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}

export default function RootLayout(
  props: Readonly<{
    children: React.ReactNode;
  }>
) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <Navigation />
        </header>
        {props.children}
        <Footer />
      </body>
    </html>
  );
}
