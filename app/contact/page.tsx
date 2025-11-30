"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { AnimatedSection } from "@/components/animated-section"

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    practiceArea: "",
    message: "",
  })

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const practiceAreas = [
    "Select a practice area",
    "Immigration Law",
    "Wills & Estate Law",
    "Family Law",
    "Tax Law",
    "Other",
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Send email via form endpoint
      const response = await fetch("/api/send-contact-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setIsSubmitted(true)
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          practiceArea: "",
          message: "",
        })
        // Reset success message after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000)
      }
    } catch (error) {
      console.error("Error submitting form:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const contactInfo = [
    {
      icon: "📞",
      title: "Phone",
      content: "905-517-3093",
      href: "tel:905-517-3093",
      subtext: "Available Mon-Fri, 9am-5pm",
    },
    {
      icon: "✉️",
      title: "Email",
      content: "rcaattorneys@gmail.com",
      href: "mailto:rcaattorneys@gmail.com",
      subtext: "We'll respond within 24 hours",
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

      {/* Contact Info + Form Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="md:col-span-1 space-y-6">
              <AnimatedSection animation="slide-in-left">
                <h2 className="heading-md mb-6">Get in Touch</h2>
              </AnimatedSection>

              {contactInfo.map((info, index) => (
                <AnimatedSection key={index} animation="fade-in-up" delay={index * 100}>
                  <Card className="border-border hover-lift">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <span className="text-2xl">{info.icon}</span>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                          {info.href ? (
                            <a href={info.href} className="text-accent hover:underline font-semibold">
                              {info.content}
                            </a>
                          ) : (
                            <p className="font-semibold text-foreground">{info.content}</p>
                          )}
                          <p className="text-sm text-muted-foreground mt-1">{info.subtext}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>

            {/* Contact Form */}
            <AnimatedSection animation="slide-in-right" delay={200} className="md:col-span-2">
              <Card className="border-border shadow-lg">
                <CardContent className="p-8">
                  {isSubmitted ? (
                    <div className="space-y-4 text-center py-12 animate-scale-in">
                      <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <span className="text-4xl text-accent">✓</span>
                      </div>
                      <h3 className="heading-sm text-foreground">Thank You!</h3>
                      <p className="text-muted-foreground max-w-md mx-auto">
                        Your message has been received. We'll contact you shortly to schedule your free consultation.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="firstName" className="block text-sm font-semibold text-foreground mb-2">
                            First Name
                          </label>
                          <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                            placeholder="John"
                          />
                        </div>
                        <div>
                          <label htmlFor="lastName" className="block text-sm font-semibold text-foreground mb-2">
                            Last Name
                          </label>
                          <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                            placeholder="Doe"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                          placeholder="john@example.com"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                          placeholder="(905) 123-4567"
                        />
                      </div>

                      <div>
                        <label htmlFor="practiceArea" className="block text-sm font-semibold text-foreground mb-2">
                          Practice Area
                        </label>
                        <select
                          id="practiceArea"
                          name="practiceArea"
                          value={formData.practiceArea}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all cursor-pointer"
                        >
                          {practiceAreas.map((area, idx) => (
                            <option key={idx} value={area}>
                              {area}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={6}
                          className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                          placeholder="Tell us about your legal matter..."
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-3 disabled:opacity-50 cursor-pointer btn-hover-effect"
                      >
                        {isLoading ? (
                          <span className="flex items-center justify-center gap-2">
                            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            Sending...
                          </span>
                        ) : (
                          "Send Message"
                        )}
                      </Button>

                      <p className="text-xs text-muted-foreground text-center">
                        By submitting this form, you agree to be contacted regarding your inquiry.
                      </p>
                    </form>
                  )}
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
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
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="RCA Law Location - Hamilton, Ontario"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ Preview */}
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
