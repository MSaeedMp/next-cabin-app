import { Archivo_Narrow, Inter } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";
import Providers from "./providers";
import { SessionProvider } from "next-auth/react";
import AppSidebar from "@/components/Global/AppSidebar";
import MapModal from "@/components/map/MapModal";
import AuthModal from "@/components/auth/AuthModal";

const interFont = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "900"],
});

const archivoNarrow = Archivo_Narrow({
  subsets: ["latin"],
  variable: "--font-archivo-narrow",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Next Cabin",
    default: "Next Cabin",
  },
  description: "A website for booking cabins built with Next.js",
  keywords: [
    "Hotel",
    "Cabin",
    "Booking",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Type script",
  ],
  authors: [
    {
      name: "M. Saeed Mafipour",
    },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionProvider>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${archivoNarrow.variable} ${interFont.variable} antialiased text-foreground`}
        >
          <Providers>
            <AppSidebar />
            <MapModal />
            <AuthModal />
            <div className="w-svw mx-auto overflow-x-hidden">{children}</div>
          </Providers>
        </body>
      </html>
    </SessionProvider>
  );
}
