import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { AnimatedSection } from "@/components/animated-section"

export default function TaxLaw() {
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

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 animate-fade-in-down">
            Tax Law
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto animate-fade-in-up delay-200">
            Expert tax planning, disputes resolution, and CRA representation
          </p>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" preserveAspectRatio="none">
            <path d="M0 100L48 90C96 80 192 60 288 50C384 40 480 40 576 45C672 50 768 60 864 65C960 70 1056 70 1152 65C1248 60 1344 50 1392 45L1440 40V100H1392C1344 100 1248 100 1152 100C1056 100 960 100 864 100C768 100 672 100 576 100C480 100 384 100 288 100C192 100 96 100 48 100H0Z" className="fill-background"/>
          </svg>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <p className="body-lg text-muted-foreground">
            Tax matters can significantly impact your financial situation. Whether you're facing a CRA audit, disputing
            an assessment, or seeking to minimize your tax burden through strategic planning, our experienced tax
            lawyers provide expert guidance and aggressive representation.
          </p>
          <p className="body-lg text-muted-foreground">
            We work closely with accountants and financial advisors to develop comprehensive tax strategies that protect
            your interests and optimize your financial position.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="bg-muted py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="heading-md mb-12">Our Tax Law Services</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Tax Planning & Strategy",
                description:
                  "Develop proactive tax strategies to minimize your tax liability and optimize your financial position.",
              },
              {
                title: "CRA Disputes & Appeals",
                description: "Challenge tax assessments and represent you in disputes with the Canada Revenue Agency.",
              },
              {
                title: "Audit Representation",
                description:
                  "Represent you during CRA audits and investigations, protecting your rights and interests.",
              },
              {
                title: "Business Tax Compliance",
                description:
                  "Ensure your business stays compliant with tax laws and regulations while optimizing tax efficiency.",
              },
              {
                title: "Tax Return Issues",
                description: "Address discrepancies in tax returns and resolve issues with prior year filings.",
              },
              {
                title: "GST/HST Matters",
                description: "Handle GST/HST disputes, registrations, and compliance matters for your business.",
              },
            ].map((service, idx) => (
              <Card key={idx} className="border-border">
                <CardContent className="p-6 space-y-3">
                  <h3 className="heading-sm text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="heading-md mb-12">Why Choose RCA Law for Tax Law</h2>

          <div className="space-y-6">
            {[
              {
                title: "CRA Experience",
                description:
                  "We have extensive experience representing clients in disputes and negotiations with the Canada Revenue Agency.",
              },
              {
                title: "Strategic Approach",
                description:
                  "We develop proactive tax strategies that align with your personal or business financial goals.",
              },
              {
                title: "Aggressive Representation",
                description:
                  "When disputes arise, we provide skilled representation to protect your interests and minimize tax burden.",
              },
              {
                title: "Interdisciplinary Team",
                description:
                  "We collaborate with accountants and financial advisors for comprehensive, integrated tax solutions.",
              },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="text-accent text-2xl flex-shrink-0">✓</div>
                <div>
                  <h3 className="heading-sm text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary/10 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="heading-md">Protect Your Financial Interests</h2>
          <p className="body-lg text-muted-foreground">
            Schedule a consultation with our tax lawyers to discuss your tax concerns and develop a strategy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Book Free Consultation
              </Button>
            </Link>
            <a href="tel:905-517-3093">
              <Button variant="outline" size="lg">
                Call: 905-517-3093
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
