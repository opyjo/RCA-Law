import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"

export default function FamilyLaw() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary to-primary/90 text-primary-foreground py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white">Family Law</h1>
            <p className="text-xl text-white/90">Compassionate legal guidance through life's transitions</p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <p className="body-lg text-muted-foreground">
            Family law matters are deeply personal, and we understand that they can be emotionally challenging. Our
            compassionate family lawyers are here to guide you through divorce, separation, custody disputes, and other
            family-related legal issues with care and professionalism.
          </p>
          <p className="body-lg text-muted-foreground">
            We are committed to finding solutions that protect your rights and, when children are involved, prioritize
            their best interests. Whether you're seeking an amicable resolution or need aggressive representation, we're
            here to support you.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="bg-muted py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="heading-md mb-12">Our Family Law Services</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Divorce and Separation",
                description:
                  "Navigate the divorce process or pursue legal separation with expert guidance and representation.",
              },
              {
                title: "Child Custody and Access",
                description:
                  "Develop parenting plans and protect your relationship with your children through custody arrangements.",
              },
              {
                title: "Child and Spousal Support",
                description:
                  "Calculate, negotiate, and establish fair support arrangements based on your circumstances.",
              },
              {
                title: "Property Division",
                description: "Ensure fair distribution of matrimonial assets and debts during divorce proceedings.",
              },
              {
                title: "Prenuptial Agreements",
                description:
                  "Protect your assets with a prenuptial agreement drafted to clearly outline property expectations.",
              },
              {
                title: "Adoption",
                description: "Navigate the adoption process to welcome a child into your family legally and securely.",
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
          <h2 className="heading-md mb-12">Why Choose RCA Law for Family Law</h2>

          <div className="space-y-6">
            {[
              {
                title: "Empathetic Approach",
                description:
                  "We understand the emotional toll of family law matters and provide compassionate, supportive guidance.",
              },
              {
                title: "Child-Centered Focus",
                description:
                  "When children are involved, we prioritize their best interests in all recommendations and negotiations.",
              },
              {
                title: "Negotiation Skills",
                description:
                  "We pursue amicable settlements when possible, helping families move forward with dignity.",
              },
              {
                title: "Litigation Experience",
                description:
                  "When disputes cannot be resolved, we provide skilled courtroom representation to protect your interests.",
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
          <h2 className="heading-md">We're Here to Help</h2>
          <p className="body-lg text-muted-foreground">
            Reach out to schedule a confidential consultation with one of our family law specialists.
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
