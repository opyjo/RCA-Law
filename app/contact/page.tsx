"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Header from "@/components/header"
import Footer from "@/components/footer"

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

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary to-primary/90 text-primary-foreground py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Contact Us</h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Reach out today to schedule your free consultation or discuss your legal needs
          </p>
        </div>
      </section>

      {/* Contact Info + Form Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="md:col-span-1 space-y-6">
              <div>
                <h2 className="heading-md mb-6">Get in Touch</h2>
              </div>

              <Card className="border-border">
                <CardContent className="p-6 space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Phone</h3>
                    <a href="tel:905-517-3093" className="text-accent hover:underline font-semibold">
                      905-517-3093
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">Available Mon-Fri, 9am-5pm</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="p-6 space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Email</h3>
                    <a href="mailto:rcaattorneys@gmail.com" className="text-accent hover:underline font-semibold">
                      rcaattorneys@gmail.com
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">We'll respond within 24 hours</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="p-6 space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Address</h3>
                    <p className="text-sm text-muted-foreground">
                      Hamilton, Ontario
                      <br />
                      Canada
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      For consultation, please contact us.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="p-6 space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Business Hours</h3>
                    <p className="text-sm text-muted-foreground">
                      Monday - Friday
                      <br />
                      9:00 AM - 5:00 PM
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-2">
              <Card className="border-border">
                <CardContent className="p-8">
                  {isSubmitted ? (
                    <div className="space-y-4 text-center py-8">
                      <div className="text-5xl text-accent mb-4">✓</div>
                      <h3 className="heading-sm text-foreground">Thank You!</h3>
                      <p className="text-muted-foreground">
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
                            className="w-full px-4 py-3 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
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
                            className="w-full px-4 py-3 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
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
                          className="w-full px-4 py-3 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
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
                          className="w-full px-4 py-3 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="(555) 123-4567"
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
                          className="w-full px-4 py-3 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
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
                          className="w-full px-4 py-3 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                          placeholder="Tell us about your legal matter..."
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-3 disabled:opacity-50 cursor-pointer"
                      >
                        {isLoading ? "Sending..." : "Send Message"}
                      </Button>

                      <p className="text-xs text-muted-foreground text-center">
                        By submitting this form, you agree to be contacted regarding your inquiry.
                      </p>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-muted py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="heading-md mb-8 text-center">Our Location</h2>
          <div className="bg-white rounded-lg overflow-hidden shadow-md h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d92621.37284051535!2d-79.95397565!3d43.2560802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882c9b9d8e5c9a0f%3A0x3b4b3e5b3e5b3e5b!2sHamilton%2C%20ON!5e0!3m2!1sen!2sca!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="heading-md mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
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
            ].map((faq, idx) => (
              <Card key={idx} className="border-border">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
                  <p className="text-muted-foreground text-sm">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
