import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"

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

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary to-primary/90 text-primary-foreground py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Our Practice Areas</h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Comprehensive legal services across multiple disciplines
          </p>
        </div>
      </section>

      {/* Practice Areas Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {areas.map((area, index) => (
              <div key={index} className="space-y-4">
                <Card className="h-full border-border hover:border-accent/50 transition-colors hover:shadow-lg">
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
                      <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground cursor-pointer">
                        Learn More
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary/10 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="heading-md">Don't see your specific need?</h2>
          <p className="body-lg text-muted-foreground">
            Contact us for a free consultation. We may be able to help with related legal matters.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground cursor-pointer">
              Schedule Free Consultation
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
