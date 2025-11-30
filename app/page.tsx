import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Header from "@/components/header"
import Footer from "@/components/footer"

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

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary to-primary/90 text-primary-foreground py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-4xl font-serif font-bold text-white text-balance">
              Quality Legal Services with Integrity and Dedication
            </h1>
            <p className="text-lg font-sans leading-relaxed text-white/90 max-w-2xl mx-auto text-balance">
              A family-owned law firm serving Hamilton, the GTA, and Niagara Region with accessible and affordable legal solutions. We work hard
              to protect your rights and achieve the best outcomes for you and your family.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold w-full sm:w-auto"
                >
                  Book Free Consultation
                </Button>
              </Link>
              <a href="tel:905-517-3093">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white/10 w-full sm:w-auto bg-transparent"
                >
                  Call Now: 905-517-3093
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-muted py-12 border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="heading-sm text-accent">Family-Owned</div>
              <p className="text-sm text-muted-foreground">Committed to your success since day one</p>
            </div>
            <div className="space-y-2">
              <div className="heading-sm text-accent">Accessible Services</div>
              <p className="text-sm text-muted-foreground">Affordable legal solutions for everyone</p>
            </div>
            <div className="space-y-2">
              <div className="heading-sm text-accent">Client-Focused</div>
              <p className="text-sm text-muted-foreground">Your needs are our priority</p>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-16">
            <h2 className="heading-md">Our Practice Areas</h2>
            <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive legal services tailored to your unique needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {practiceAreas.map((area, index) => (
              <Link key={index} href={area.href}>
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer border-border hover:border-accent/50">
                  <CardContent className="p-6 space-y-4">
                    <div className="text-4xl">{area.icon}</div>
                    <h3 className="heading-sm text-foreground">{area.title}</h3>
                    <p className="body-md text-muted-foreground">{area.description}</p>
                    <div className="pt-2">
                      <span className="text-accent font-semibold text-sm">Learn More →</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Contact Bar */}
      <section className="bg-secondary/10 border-t border-b border-border py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="heading-sm mb-2">Ready to Get Started?</h3>
              <p className="text-muted-foreground">We offer a free consultation to discuss your legal needs.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <a href="tel:905-517-3093" className="flex-1 md:flex-none">
                <Button className="w-full bg-accent hover:bg-accent/90 cursor-pointer">📞 Call: 905-517-3093</Button>
              </a>
              <a href="mailto:rcaattorneys@gmail.com" className="flex-1 md:flex-none">
                <Button variant="outline" className="w-full bg-transparent cursor-pointer">
                  ✉️ Email Us
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
