import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"

export default function TaxLaw() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary to-primary/90 text-primary-foreground py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white">Tax Law</h1>
            <p className="text-xl text-white/90">Expert tax planning, disputes resolution, and CRA representation</p>
          </div>
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
