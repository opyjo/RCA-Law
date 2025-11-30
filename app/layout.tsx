import type React from "react"
import type { Metadata } from "next"
import { Merriweather, Merriweather_Sans } from "next/font/google"
import "./globals.css"

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-serif",
})

const merriweatherSans = Merriweather_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "RCA Law - Quality Legal Services",
  description:
    "Family-owned law firm providing accessible and affordable legal services in Hamilton, Ontario. Serving the GTA and Niagara Region. Specializing in immigration, family, estate, and tax law.",
  generator: "v0.app",
  openGraph: {
    title: "RCA Law - Quality Legal Services with Integrity",
    description: "Professional legal services for families and individuals",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${merriweather.variable} ${merriweatherSans.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
