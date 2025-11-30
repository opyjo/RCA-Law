import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"

export default function EstateLaw() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary to-primary/90 text-primary-foreground py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white">Wills & Estate Law</h1>
            <p className="text-xl text-white/90">Protect your legacy and secure your family's future</p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <p className="body-lg text-muted-foreground">
            Estate planning is one of the most important decisions you can make to protect your loved ones and ensure
            your wishes are carried out. Whether you're creating your first will or updating an existing estate plan,
            our experienced estate lawyers provide comprehensive guidance.
          </p>
          <p className="body-lg text-muted-foreground">
            We believe that proper estate planning brings peace of mind—knowing that your family will be cared for and
            your assets will be distributed according to your wishes.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="bg-muted py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="heading-md mb-12">Our Estate Services</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Will Preparation",
                description: "Create a legally valid will that clearly expresses your wishes for asset distribution.",
              },
              {
                title: "Estate Planning",
                description:
                  "Develop a comprehensive estate plan minimizing taxes and ensuring efficient wealth transfer.",
              },
              {
                title: "Power of Attorney",
                description: "Appoint someone to manage your financial and legal affairs if you become incapacitated.",
              },
              {
                title: "Estate Administration",
                description: "We guide executors and trustees through the estate administration process step by step.",
              },
              {
                title: "Probate Services",
                description:
                  "Navigate the probate process and obtain the necessary court authorization to distribute an estate.",
              },
              {
                title: "Trust Creation",
                description:
                  "Establish trusts as part of your estate plan for privacy, tax efficiency, and family protection.",
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
          <h2 className="heading-md mb-12">Why Choose RCA Law for Estate Planning</h2>

          <div className="space-y-6">
            {[
              {
                title: "Compassionate Guidance",
                description:
                  "We understand that estate planning involves personal and family matters. We provide sensitive, caring guidance.",
              },
              {
                title: "Tax-Efficient Planning",
                description:
                  "We develop strategies to minimize estate taxes and maximize what your loved ones receive.",
              },
              {
                title: "Comprehensive Documentation",
                description:
                  "All documents are prepared with meticulous attention to legal requirements and your specific situation.",
              },
              {
                title: "Ongoing Support",
                description: "We're available to review and update your estate plan as your circumstances change.",
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
          <h2 className="heading-md">Secure Your Family's Future</h2>
          <p className="body-lg text-muted-foreground">
            Don't wait. Schedule a consultation with our estate lawyers today to discuss your estate planning needs.
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
