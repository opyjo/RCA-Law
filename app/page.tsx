import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { AnimatedSection } from "@/components/animated-section"

export default function Home() {
  const practiceAreas = [
    {
      title: "Immigration Law",
      description: "Visa applications, citizenship, sponsorships, and refugee claims handled with expertise and care.",
      icon: "🛂",
      href: "/practice-areas/immigration",
    },
    {
      title: "Wills & Estate Law",
      description: "Estate planning, wills, power of attorney, and estate administration for your peace of mind.",
      icon: "📋",
      href: "/practice-areas/estate",
    },
    {
      title: "Family Law",
      description: "Divorce, custody, child support, and separation agreements handled with compassion.",
      icon: "👨‍👩‍👧‍👦",
      href: "/practice-areas/family",
    },
    {
      title: "Tax Law",
      description: "Tax planning, disputes, CRA issues, and compliance strategies for your business.",
      icon: "📊",
      href: "/practice-areas/tax",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section - Enhanced with pattern and animations */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary/80 text-primary-foreground py-24 md:py-36 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 hero-pattern hero-grid" />
        
        {/* Floating shapes */}
        <div 
          className="hero-shape bg-accent/20 w-96 h-96 -top-48 -right-48 animate-float"
          style={{ animationDelay: "0s" }}
        />
        <div 
          className="hero-shape bg-white/10 w-72 h-72 -bottom-36 -left-36 animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div 
          className="hero-shape bg-accent/10 w-48 h-48 top-1/4 right-1/4 animate-float"
          style={{ animationDelay: "4s" }}
        />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white text-balance animate-fade-in-down">
              Quality Legal Services with Integrity and Dedication
            </h1>
            <p className="text-lg md:text-xl font-sans leading-relaxed text-white/90 max-w-2xl mx-auto text-balance animate-fade-in-up delay-200">
              A family-owned law firm serving Hamilton, the GTA, and Niagara Region with accessible and affordable legal solutions. We work hard
              to protect your rights and achieve the best outcomes for you and your family.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 animate-fade-in-up delay-400">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold w-full sm:w-auto btn-hover-effect cursor-pointer"
                >
                  Book Free Consultation
                </Button>
              </Link>
              <a href="tel:905-517-3093">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white/10 w-full sm:w-auto bg-transparent cursor-pointer"
                >
                  Call Now: 905-517-3093
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom wave decoration */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
            preserveAspectRatio="none"
          >
            <path
              d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              className="fill-muted"
            />
          </svg>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-muted py-12 border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <AnimatedSection animation="fade-in-up" delay={0}>
              <div className="space-y-2">
                <div className="heading-sm text-accent">Family-Owned</div>
                <p className="text-sm text-muted-foreground">Committed to your success since day one</p>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="fade-in-up" delay={150}>
              <div className="space-y-2">
                <div className="heading-sm text-accent">Accessible Services</div>
                <p className="text-sm text-muted-foreground">Affordable legal solutions for everyone</p>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="fade-in-up" delay={300}>
              <div className="space-y-2">
                <div className="heading-sm text-accent">Client-Focused</div>
                <p className="text-sm text-muted-foreground">Your needs are our priority</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center space-y-3 mb-16">
            <h2 className="heading-md">Our Practice Areas</h2>
            <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive legal services tailored to your unique needs
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {practiceAreas.map((area, index) => (
              <AnimatedSection key={index} animation="fade-in-up" delay={index * 100}>
                <Link href={area.href}>
                  <Card className="h-full hover-lift cursor-pointer border-border hover:border-accent/50 transition-all duration-300">
                    <CardContent className="p-6 space-y-4">
                      <div className="text-4xl">{area.icon}</div>
                      <h3 className="heading-sm text-foreground">{area.title}</h3>
                      <p className="body-md text-muted-foreground">{area.description}</p>
                      <div className="pt-2">
                        <span className="text-accent font-semibold text-sm group-hover:translate-x-1 transition-transform inline-block">
                          Learn More →
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Contact Bar */}
      <section className="relative bg-gradient-to-r from-primary to-primary/90 py-16 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 hero-pattern opacity-50" />
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-serif font-bold text-white mb-2">Ready to Get Started?</h3>
                <p className="text-white/80">We offer a free consultation to discuss your legal needs.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <a href="tel:905-517-3093" className="flex-1 md:flex-none">
                  <Button 
                    size="lg" 
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground btn-hover-effect cursor-pointer"
                  >
                    📞 Call: 905-517-3093
                  </Button>
                </a>
                <a href="mailto:rcaattorneys@gmail.com" className="flex-1 md:flex-none">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="w-full bg-transparent border-white text-white hover:bg-white/10 cursor-pointer"
                  >
                    ✉️ Email Us
                  </Button>
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </main>
  )
}
