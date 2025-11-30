import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import Image from "next/image"

export default function About() {
  const values = [
    {
      title: "Integrity",
      description: "We conduct our practice with unwavering integrity, putting your interests first in every matter.",
    },
    {
      title: "Dedication",
      description: "Our team is dedicated to achieving the best possible outcomes for each and every client.",
    },
    {
      title: "Accessibility",
      description:
        "We believe quality legal services should be accessible to everyone, regardless of financial circumstances.",
    },
    {
      title: "Hard Work",
      description: "We work tirelessly to prepare thoroughly and advocate effectively on your behalf.",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary to-primary/90 text-primary-foreground py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">About RCA Law</h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            A family-owned law firm based in Hamilton, Ontario, committed to providing quality legal services with integrity and dedication
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
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
            <div className="bg-gradient-to-br from-accent/20 to-primary/10 rounded-lg p-8 border border-accent/30">
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="text-3xl font-serif font-bold text-accent">Hamilton</div>
                  <p className="text-foreground font-semibold">Based in Ontario</p>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-serif font-bold text-accent">GTA & Niagara</div>
                  <p className="text-foreground font-semibold">Serving Clients Across</p>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-serif font-bold text-accent">100%</div>
                  <p className="text-foreground font-semibold">Client-Focused Service</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet our Principal Lawyer */}
      <section className="bg-muted py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-md mb-4">Meet our Principal Lawyer</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 md:order-1">
              <div className="relative aspect-[3/4] w-full max-w-md mx-auto rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/CEO.jpeg"
                  alt="Royal Anosike, Principal Lawyer"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="space-y-6 order-1 md:order-2">
              <div>
                <h3 className="heading-md text-foreground mb-2">Royal Anosike</h3>
                <p className="text-accent font-semibold text-lg mb-4">Principal Lawyer</p>
              </div>
              <p className="body-lg text-muted-foreground">
                Royal Anosike is a lawyer licensed to practice Law in Ontario. Royal obtained his Masters of Law (LLM) from University of Ottawa in 2017. Royal worked in the public service for Canada Revenue Agency for five years before transitioning into private practice. He lives with his family in Hamilton.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-muted py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-md mb-4">Our Core Values</h2>
            <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do at RCA Law
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="border-border hover:border-accent/50 transition-colors">
                <CardContent className="p-6">
                  <h3 className="heading-sm text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community Involvement */}
      <section className="bg-secondary/10 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <div className="text-center space-y-3">
              <h2 className="heading-md">Community Involvement</h2>
              <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
                We believe in giving back to the community that has supported us
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-border">
                <CardContent className="p-6 space-y-3">
                  <div className="text-4xl">🤝</div>
                  <h3 className="heading-sm">Pro Bono Work</h3>
                  <p className="text-sm text-muted-foreground">
                    We provide pro bono services to individuals who cannot afford legal representation.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-border">
                <CardContent className="p-6 space-y-3">
                  <div className="text-4xl">📚</div>
                  <h3 className="heading-sm">Legal Education</h3>
                  <p className="text-sm text-muted-foreground">
                    We conduct workshops and seminars to educate the community about their legal rights.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-border">
                <CardContent className="p-6 space-y-3">
                  <div className="text-4xl">❤️</div>
                  <h3 className="heading-sm">Charitable Support</h3>
                  <p className="text-sm text-muted-foreground">
                    We support local charities and organizations that make a difference in our community.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="heading-md">Ready to Work With Us?</h2>
          <p className="body-lg text-muted-foreground">
            Schedule a free consultation with one of our experienced attorneys to discuss your legal needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground cursor-pointer">
                Book Free Consultation
              </Button>
            </Link>
            <a href="tel:905-517-3093">
              <Button variant="outline" size="lg" className="cursor-pointer bg-transparent">
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
