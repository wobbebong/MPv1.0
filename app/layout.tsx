import "./globals.css"
import type React from "react"
import type { Metadata } from "next"
import { AuthProvider } from "./context/AuthContext"
import SkipToContent from "./components/SkipToContent"

export const metadata: Metadata = {
  title: {
    default: "irhamna.ai - Advanced AI Trading Platform",
    template: "%s | irhamna.ai",
  },
  description:
    "Experience the next generation of AI-powered trading with quantum algorithms and neural network analysis",
  keywords: ["AI trading", "quantum algorithms", "neural network", "trading platform", "market analysis"],
  authors: [{ name: "irhamna.ai Team" }],
  creator: "irhamna.ai",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://irhamna.ai",
    title: "irhamna.ai - Advanced AI Trading Platform",
    description:
      "Experience the next generation of AI-powered trading with quantum algorithms and neural network analysis",
    siteName: "irhamna.ai",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "irhamna.ai - Advanced AI Trading Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "irhamna.ai - Advanced AI Trading Platform",
    description:
      "Experience the next generation of AI-powered trading with quantum algorithms and neural network analysis",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Audiowide&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-cyber-black text-white font-cyber">
        <SkipToContent />
        <div className="cyber-lines"></div>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  )
}

