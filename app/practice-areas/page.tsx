import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { AnimatedSection } from "@/components/animated-section"

export default function PracticeAreas() {
  const areas = [
    {
      title: "Immigration Law",
      icon: "🛂",
      description: "Navigate Canada's immigration system with expert guidance",
      services: [
        "Temporary Resident Visas",
        "Permanent Residency Applications",
        "Citizenship Applications",
        "Sponsorship Programs",
        "Refugee and Protected Persons Claims",
        "Work and Study Permits",
      ],
      href: "/practice-areas/immigration",
    },
    {
      title: "Wills & Estate Law",
      icon: "📋",
      description: "Protect your family's future with comprehensive estate planning",
      services: [
        "Will Preparation",
        "Estate Planning",
        "Power of Attorney",
        "Estate Administration",
        "Probate Services",
        "Trust Creation and Management",
      ],
      href: "/practice-areas/estate",
    },
    {
      title: "Family Law",
      icon: "👨‍👩‍👧‍👦",
      description: "Compassionate representation in all family law matters",
      services: [
        "Divorce and Separation",
        "Child Custody and Access",
        "Child and Spousal Support",
        "Property Division",
        "Prenuptial Agreements",
        "Adoption",
      ],
      href: "/practice-areas/family",
    },
    {
      title: "Tax Law",
      icon: "📊",
      description: "Expert tax planning and dispute resolution",
      services: [
        "Tax Planning and Strategy",
        "CRA Disputes and Appeals",
        "Audit Representation",
        "Business Tax Compliance",
        "Tax Return Issues",
        "GST/HST Matters",
      ],
      href: "/practice-areas/tax",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section - Enhanced */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary/80 text-primary-foreground py-20 md:py-28 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 hero-pattern hero-grid" />
        
        {/* Floating shapes */}
        <div 
          className="hero-shape bg-accent/20 w-72 h-72 -top-36 -right-36 animate-float"
          style={{ animationDelay: "0s" }}
        />
        <div 
          className="hero-shape bg-white/10 w-56 h-56 -bottom-28 -left-28 animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div 
          className="hero-shape bg-accent/10 w-40 h-40 top-1/3 left-1/4 animate-float"
          style={{ animationDelay: "4s" }}
        />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 animate-fade-in-down">
            Our Practice Areas
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto animate-fade-in-up delay-200">
            Comprehensive legal services across multiple disciplines
          </p>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" preserveAspectRatio="none">
            <path d="M0 100L48 90C96 80 192 60 288 50C384 40 480 40 576 45C672 50 768 60 864 65C960 70 1056 70 1152 65C1248 60 1344 50 1392 45L1440 40V100H1392C1344 100 1248 100 1152 100C1056 100 960 100 864 100C768 100 672 100 576 100C480 100 384 100 288 100C192 100 96 100 48 100H0Z" className="fill-background"/>
          </svg>
        </div>
      </section>

      {/* Practice Areas Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {areas.map((area, index) => (
              <AnimatedSection key={index} animation="fade-in-up" delay={index * 100}>
                <Card className="h-full border-border hover-lift transition-all duration-300 hover:border-accent/50">
                  <CardContent className="p-8 space-y-6">
                    <div className="flex items-start justify-between">
                      <div className="space-y-3 flex-1">
                        <div className="text-5xl">{area.icon}</div>
                        <h2 className="heading-md text-foreground">{area.title}</h2>
                        <p className="body-md text-muted-foreground">{area.description}</p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h3 className="font-semibold text-foreground text-sm">Our Services:</h3>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {area.services.map((service, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-accent text-lg mt-0.5">+</span>
                            <span className="text-sm text-muted-foreground">{service}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link href={area.href}>
                      <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground btn-hover-effect cursor-pointer">
                        Learn More
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-r from-primary to-primary/90 py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-50" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-4">
              Don't see your specific need?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Contact us for a free consultation. We may be able to help with related legal matters.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground btn-hover-effect cursor-pointer">
                Schedule Free Consultation
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </main>
  )
}
