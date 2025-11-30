import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import Image from "next/image"
import { AnimatedSection } from "@/components/animated-section"

export default function About() {
  const values = [
    {
      title: "Integrity",
      description: "We conduct our practice with unwavering integrity, putting your interests first in every matter.",
      icon: "⚖️",
    },
    {
      title: "Dedication",
      description: "Our team is dedicated to achieving the best possible outcomes for each and every client.",
      icon: "🎯",
    },
    {
      title: "Accessibility",
      description:
        "We believe quality legal services should be accessible to everyone, regardless of financial circumstances.",
      icon: "🤝",
    },
    {
      title: "Hard Work",
      description: "We work tirelessly to prepare thoroughly and advocate effectively on your behalf.",
      icon: "💪",
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
          className="hero-shape bg-accent/20 w-80 h-80 -top-40 -right-40 animate-float"
          style={{ animationDelay: "0s" }}
        />
        <div 
          className="hero-shape bg-white/10 w-64 h-64 -bottom-32 -left-32 animate-float"
          style={{ animationDelay: "3s" }}
        />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 animate-fade-in-down">
            About RCA Law
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto animate-fade-in-up delay-200">
            A family-owned law firm based in Hamilton, Ontario, committed to providing quality legal services with integrity and dedication
          </p>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" preserveAspectRatio="none">
            <path d="M0 100L48 90C96 80 192 60 288 50C384 40 480 40 576 45C672 50 768 60 864 65C960 70 1056 70 1152 65C1248 60 1344 50 1392 45L1440 40V100H1392C1344 100 1248 100 1152 100C1056 100 960 100 864 100C768 100 672 100 576 100C480 100 384 100 288 100C192 100 96 100 48 100H0Z" className="fill-background"/>
          </svg>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slide-in-left">
              <div className="space-y-6">
                <h2 className="heading-md">Our Story</h2>
                <p className="body-lg text-muted-foreground">
                  RCA Law was started by Royal Anosike with a simple mission to make quality legal services accessible and affordable for individuals and families. Based in Hamilton, Ontario. RCA services clients across Niagara Region and the GTA as well.
                </p>
                <p className="body-lg text-muted-foreground">
                  We understand that legal issues can be overwhelming, that's why we work hard to guide you through every step of the process. Explaining complex legal concepts in clear language and always keeping your best interest at the forefront.
                </p>
                <p className="body-lg text-muted-foreground">
                  Whether you are thinking of immigrating to Canada, claiming refugee protection, thinking of creating a Will, having a CRA dispute or tax law advise for your business, or navigating your marital separation and child custody, RCA has the skill and empathy to meet your needs.
                </p>
                <p className="body-lg text-muted-foreground">
                  Our family-owned approach means that you are not just a case number—you are a valued client whose success matters to us personally.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="slide-in-right" delay={200}>
              <div className="bg-gradient-to-br from-accent/20 to-primary/10 rounded-xl p-8 border border-accent/30 hover-lift">
                <div className="space-y-8">
                  <div className="space-y-2">
                    <div className="text-4xl font-serif font-bold text-accent">Hamilton</div>
                    <p className="text-foreground font-semibold">Based in Ontario</p>
                  </div>
                  <div className="space-y-2">
                    <div className="text-4xl font-serif font-bold text-accent">GTA & Niagara</div>
                    <p className="text-foreground font-semibold">Serving Clients Across</p>
                  </div>
                  <div className="space-y-2">
                    <div className="text-4xl font-serif font-bold text-accent">100%</div>
                    <p className="text-foreground font-semibold">Client-Focused Service</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Meet our Principal Lawyer */}
      <section className="relative bg-muted py-16 md:py-24 overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, var(--border) 1px, transparent 0)", backgroundSize: "32px 32px" }} />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="heading-md mb-4">Meet our Principal Lawyer</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="scale-in" className="order-2 md:order-1">
              <div className="relative aspect-[3/4] w-full max-w-md mx-auto rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="/CEO.jpeg"
                  alt="Royal Anosike, Principal Lawyer"
                  fill
                  className="object-cover"
                />
                {/* Decorative frame */}
                <div className="absolute inset-0 border-4 border-accent/20 rounded-xl" />
              </div>
            </AnimatedSection>
            <AnimatedSection animation="slide-in-right" delay={200} className="order-1 md:order-2">
              <div className="space-y-6">
                <div>
                  <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-2">Royal Anosike</h3>
                  <p className="text-accent font-semibold text-xl mb-4">Principal Lawyer</p>
                </div>
                <p className="body-lg text-muted-foreground">
                  Royal Anosike is a lawyer licensed to practice Law in Ontario. Royal obtained his Masters of Law (LLM) from University of Ottawa in 2017. Royal worked in the public service for Canada Revenue Agency for five years before transitioning into private practice. He lives with his family in Hamilton.
                </p>
                <div className="flex flex-wrap gap-3 pt-4">
                  <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">LLM, University of Ottawa</span>
                  <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">Licensed in Ontario</span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="heading-md mb-4">Our Core Values</h2>
            <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do at RCA Law
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <AnimatedSection key={index} animation="fade-in-up" delay={index * 100}>
                <Card className="border-border hover-lift card-hover h-full">
                  <CardContent className="p-6">
                    <div className="text-3xl mb-4">{value.icon}</div>
                    <h3 className="heading-sm text-foreground mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Community Involvement */}
      <section className="bg-gradient-to-b from-secondary/5 to-secondary/15 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center space-y-3 mb-12">
            <h2 className="heading-md">Community Involvement</h2>
            <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
              We believe in giving back to the community that has supported us
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: "🤝", title: "Pro Bono Work", desc: "We provide pro bono services to individuals who cannot afford legal representation." },
              { icon: "📚", title: "Legal Education", desc: "We conduct workshops and seminars to educate the community about their legal rights." },
              { icon: "❤️", title: "Charitable Support", desc: "We support local charities and organizations that make a difference in our community." },
            ].map((item, index) => (
              <AnimatedSection key={index} animation="fade-in-up" delay={index * 150}>
                <Card className="border-border hover-lift h-full">
                  <CardContent className="p-6 space-y-3 text-center">
                    <div className="text-5xl">{item.icon}</div>
                    <h3 className="heading-sm">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-r from-primary to-primary/90 py-20 md:py-28 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 hero-pattern opacity-50" />
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">Ready to Work With Us?</h2>
            <p className="text-lg text-white/80 mb-8">
              Schedule a free consultation to discuss your legal needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground btn-hover-effect cursor-pointer">
                  Book Free Consultation
                </Button>
              </Link>
              <a href="tel:905-517-3093">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 bg-transparent cursor-pointer">
                  Call: 905-517-3093
                </Button>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </main>
  )
}
