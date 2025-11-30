import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { AnimatedSection } from "@/components/animated-section"

export default function ImmigrationLaw() {
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
            Immigration Law
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto animate-fade-in-up delay-200">
            Navigate Canada's immigration system with confidence
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
            Immigration law can be complex and overwhelming. Whether you're seeking to obtain a visa, become a permanent
            resident, sponsor a family member, or claim refugee status, our experienced immigration lawyers are here to
            guide you through every step of the process.
          </p>
          <p className="body-lg text-muted-foreground">
            With years of experience working with Immigration, Refugees and Citizenship Canada (IRCC), we understand the
            intricacies of Canadian immigration law and know how to present the strongest possible case for your
            application.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="bg-muted py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="heading-md mb-12">Our Immigration Services</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Temporary Resident Visas",
                description:
                  "Visit, work, or study in Canada with proper documentation. We help navigate visitor visas, work permits, and study permits.",
              },
              {
                title: "Permanent Residency",
                description:
                  "Achieve permanent residency through Express Entry, provincial nominee programs, or family sponsorship.",
              },
              {
                title: "Citizenship Applications",
                description:
                  "Become a Canadian citizen. We assist with applications and represent you throughout the process.",
              },
              {
                title: "Family Sponsorship",
                description:
                  "Sponsor loved ones to join you in Canada. We handle spousal, common-law, and family relationship sponsorships.",
              },
              {
                title: "Refugee and Protected Persons Claims",
                description:
                  "Seek protection in Canada. We provide representation for refugee claims and protected person applications.",
              },
              {
                title: "Appeals and Judicial Review",
                description:
                  "Challenge immigration decisions. We pursue appeals and judicial reviews for unsuccessful applications.",
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
          <h2 className="heading-md mb-12">Why Choose RCA Law for Immigration</h2>

          <div className="space-y-6">
            {[
              {
                title: "Expert Knowledge",
                description:
                  "Our immigration lawyers stay current with the latest immigration policies and procedures.",
              },
              {
                title: "Personalized Approach",
                description:
                  "We take time to understand your unique situation and develop a strategy tailored to your needs.",
              },
              {
                title: "Proven Track Record",
                description: "We have successfully helped hundreds of clients achieve their immigration goals.",
              },
              {
                title: "Accessible Service",
                description:
                  "We provide high-quality immigration services at affordable rates for families and individuals.",
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
          <h2 className="heading-md">Ready to Start Your Immigration Journey?</h2>
          <p className="body-lg text-muted-foreground">
            Schedule a free consultation with our immigration lawyers to discuss your case and explore your options.
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
