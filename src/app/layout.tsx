import { Analytics } from "@vercel/analytics/react";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

// Domestic imports
import { Providers } from "./providers";
import Header from "@/components/header/header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "myTasks - Streamlining Task Management, Challenges, and Time Management",
  description:
    "Elevate your productivity with myTasks — simplifying task management with seamless efficiency and mastering your time effectively.",
  authors: [
    { name: "Rakesh Deep" },
    {
      name: "Rakesh Deep",
      url: "https://www.instagram.com/rakeshdeepp/",
    },
  ],
  icons: [
    { rel: "apple-touch-icon", url: "/icons/icon-192x192.png" },
    { rel: "icon", url: "/icons/icon-192x192.png" },
    { rel: "favicon", url: "/icons/favicon.ico" },
  ],
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} light`}
      data-new-gr-c-s-check-loaded="14.1090.0"
      data-gr-ext-installed=""
      >
        <Providers>
          <Header />
          {children}
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
