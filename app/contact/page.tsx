import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { AnimatedSection } from "@/components/animated-section"

export default function Contact() {
  const contactInfo = [
    {
      icon: "📞",
      title: "Phone",
      content: "905-517-3093",
      href: "tel:905-517-3093",
      subtext: "Available Mon-Fri, 9am-5pm",
      cta: "Call Now",
    },
    {
      icon: "✉️",
      title: "Email",
      content: "rcaattorneys@gmail.com",
      href: "mailto:rcaattorneys@gmail.com",
      subtext: "We'll respond within 24 hours",
      cta: "Send Email",
    },
    {
      icon: "📍",
      title: "Location",
      content: "Hamilton, Ontario",
      subtext: "Serving GTA & Niagara Region",
    },
    {
      icon: "🕐",
      title: "Business Hours",
      content: "Monday - Friday",
      subtext: "9:00 AM - 5:00 PM",
    },
  ]

  const faqs = [
    {
      q: "Is the first consultation really free?",
      a: "Yes! We offer a free initial consultation to discuss your legal needs and how we can help.",
    },
    {
      q: "How quickly will I hear from you?",
      a: "We typically respond to inquiries within 24 hours. For urgent matters, please call us directly.",
    },
    {
      q: "Do you offer flexible payment arrangements?",
      a: "Yes, we work with clients to develop affordable payment plans that fit their budget.",
    },
    {
      q: "What areas do you serve?",
      a: "Based in Hamilton, we serve clients across the GTA, Niagara Region, and throughout Ontario.",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
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
            Contact Us
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto animate-fade-in-up delay-200">
            Reach out today to schedule your free consultation or discuss your legal needs
          </p>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" preserveAspectRatio="none">
            <path d="M0 100L48 90C96 80 192 60 288 50C384 40 480 40 576 45C672 50 768 60 864 65C960 70 1056 70 1152 65C1248 60 1344 50 1392 45L1440 40V100H1392C1344 100 1248 100 1152 100C1056 100 960 100 864 100C768 100 672 100 576 100C480 100 384 100 288 100C192 100 96 100 48 100H0Z" className="fill-background"/>
          </svg>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="heading-md mb-4">Get in Touch</h2>
            <p className="body-lg text-muted-foreground">
              We're here to help with your legal needs. Contact us today for a free consultation.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contactInfo.map((info, index) => (
              <AnimatedSection key={index} animation="fade-in-up" delay={index * 100}>
                <Card className="border-border hover-lift h-full">
                  <CardContent className="p-8 text-center">
                    <div className="text-5xl mb-4">{info.icon}</div>
                    <h3 className="text-xl font-serif font-bold text-foreground mb-2">{info.title}</h3>
                    {info.href ? (
                      <a 
                        href={info.href} 
                        className="text-xl text-accent hover:underline font-semibold block mb-2"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-xl font-semibold text-foreground mb-2">{info.content}</p>
                    )}
                    <p className="text-sm text-muted-foreground mb-4">{info.subtext}</p>
                    {info.cta && info.href && (
                      <a href={info.href}>
                        <Button className="bg-accent hover:bg-accent/90 text-accent-foreground btn-hover-effect cursor-pointer">
                          {info.cta}
                        </Button>
                      </a>
                    )}
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative bg-gradient-to-r from-primary to-primary/90 py-16 overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-50" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-4">
              Ready for Your Free Consultation?
            </h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Call us today or send an email to schedule your free initial consultation. We're here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:905-517-3093">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground btn-hover-effect cursor-pointer w-full sm:w-auto">
                  📞 Call: 905-517-3093
                </Button>
              </a>
              <a href="mailto:rcaattorneys@gmail.com">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent cursor-pointer w-full sm:w-auto">
                  ✉️ Email Us
                </Button>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-muted py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-8">
            <h2 className="heading-md">Our Location</h2>
            <p className="text-muted-foreground mt-2">Serving Hamilton, GTA, and Niagara Region</p>
          </AnimatedSection>
          <AnimatedSection animation="scale-in" delay={200}>
            <div className="bg-white rounded-xl overflow-hidden shadow-lg h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d92621.37284051535!2d-79.95397565!3d43.2560802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882c9b9d8e5c9a0f%3A0x3b4b3e5b3e5b3e5b!2sHamilton%2C%20ON!5e0!3m2!1sen!2sca!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="RCA Law Location - Hamilton, Ontario"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="heading-md mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">Quick answers to common questions</p>
          </AnimatedSection>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <AnimatedSection key={idx} animation="fade-in-up" delay={idx * 100}>
                <Card className="border-border hover-lift">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-foreground mb-2 flex items-start gap-3">
                      <span className="text-accent">Q:</span>
                      {faq.q}
                    </h3>
                    <p className="text-muted-foreground text-sm pl-7">{faq.a}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
