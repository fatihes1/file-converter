import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {ThemeProvider} from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import {Toaster} from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TransMorpher - File Transformation Made Easy",
  description: `TransMorpher empowers you to effortlessly transform files from one format to another. With TransMorpher, converting images, videos, and documents is simple and efficient. Explore the endless possibilities of file transformation today!`,
  creator: "Your Name or Your Company Name",
  keywords: "file transformation, file converter, format conversion, multimedia converter, versatile converter",
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem themes={["light", "dark"]}>
          <Navbar />
          <Toaster />
          <div className={'pt-32 min-h-screen lg:pt-36 2xl:pt-44 container max-w-4xl lg:max-w-6xl 2xl:max-w-7xl'}>
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
