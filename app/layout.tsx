import type { Metadata } from "next";

import "./globals.css";
import NavBar from "@/components/NavBar";
import { fonts } from "@/fonts";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Nex Orion - Innovative Software Solutions",
  description:
    "Nex Orion offers cutting-edge software development, digital transformation, and IT consulting services. Partner with us for tailored solutions that drive business growth.",
  keywords:
    "Nex Orion, nexorion, software development, digital transformation, IT consulting, custom software solutions, business growth",
  authors: [
    {
      name: "Nex Orion Team",
      url: "https://yourwebsite.com"
    }
  ],
  openGraph: {
    title: "Nex Orion - Innovative Software Solutions",
    description:
      "Partner with Nex Orion for expert software development and IT consulting services.",
    url: "https://yourwebsite.com",
    images: [
      {
        url: "https://yourwebsite.com/images/logo.png",
        width: 800,
        height: 600,
        alt: "Nex Orion Logo"
      }
    ],
    siteName: "Nex Orion"
  },
  twitter: {
    card: "summary_large_image",
    site: "@YourTwitterHandle",
    title: "Nex Orion - Innovative Software Solutions",
    description:
      "Partner with Nex Orion for expert software development and IT consulting services.",
    images: [
      {
        url: "https://yourwebsite.com/images/logo.png",
        width: 800,
        height: 600,
        alt: "Nex Orion Logo"
      }
    ]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fonts.montserrat.className} text-[16px] md:text-[18px] font-light`}
      >
        <NavBar />
        <main className="pt-20">
          {" "}
          {/* Adjust the padding here */}
          {children}
        </main>
        <div className="relative flex py-5 items-center">
          <div className="flex-grow border-t border-darkBlue"></div>
          <div className="flex-grow border-t border-darkBlue"></div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
