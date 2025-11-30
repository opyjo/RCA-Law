"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Practice Areas", href: "/practice-areas" },
    { label: "Contact", href: "/contact" },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/rca_logo.jpg"
              alt="RCA Law - Barristers, Solicitors and Notary Public"
              width={180}
              height={60}
              className="h-12 md:h-14 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <Button variant="ghost" className="text-foreground hover:bg-muted hover:text-primary cursor-pointer">
                  {link.label}
                </Button>
              </Link>
            ))}
          </nav>

          {/* Desktop CTA + Contact Bar */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:905-517-3093"
              className="text-sm font-semibold text-primary flex items-center gap-1 cursor-pointer"
            >
              <span>905-517-3093</span>
            </a>
            <Link href="/contact">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground cursor-pointer">
                Book Consultation
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 cursor-pointer"
            aria-label="Toggle menu"
          >
            <span className="w-6 h-6 text-foreground text-xl">{isMenuOpen ? "✕" : "☰"}</span>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)}>
                <Button variant="ghost" className="w-full justify-start text-foreground cursor-pointer">
                  {link.label}
                </Button>
              </Link>
            ))}
            <div className="space-y-2 pt-2">
              <a href="tel:905-517-3093" className="block">
                <Button variant="outline" className="w-full bg-transparent cursor-pointer">
                  📞 905-517-3093
                </Button>
              </a>
              <Link href="/contact" className="block">
                <Button className="w-full bg-accent hover:bg-accent/90 cursor-pointer">Book Consultation</Button>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
