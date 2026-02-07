import { ThemeModeScript } from "flowbite-react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sanjay Kumar | Full Stack Developer",
  description: "Full Stack Developer specializing in building modern, scalable web applications with React, Node.js, and cutting-edge technologies. Check out my portfolio and projects.",
  keywords: ["Full Stack Developer", "React", "Next.js", "Node.js", "Web Development", "Portfolio"],
  authors: [{ name: "Sanjay Kumar" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sanjay-portfolio.com",
    title: "Sanjay Kumar | Full Stack Developer",
    description: "Explore my portfolio of modern web applications and full-stack projects",
    siteName: "Sanjay Kumar Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="overflow-x-hidden">
      <head>
        <ThemeModeScript />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-gray-900 transition-colors duration-300 overflow-x-hidden w-full`}
      >
        {children}
      </body>
    </html>
  );
}
