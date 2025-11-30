import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"

export default function Privacy() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="heading-lg mb-8">Privacy Policy</h1>

          <div className="prose prose-lg text-muted-foreground space-y-6">
            <p className="body-lg">Last Updated: {new Date().toLocaleDateString()}</p>

            <div className="space-y-4">
              <h2 className="heading-sm text-foreground">1. Introduction</h2>
              <p className="body-md">
                RCA Law ("we," "us," "our," or "Company") is committed to protecting your privacy. This Privacy Policy
                explains how we collect, use, disclose, and safeguard your information when you visit our website.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="heading-sm text-foreground">2. Information We Collect</h2>
              <p className="body-md">
                We may collect information about you in a variety of ways. The information we may collect on the site
                includes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                <li>Personal identification information (name, email address, phone number, etc.)</li>
                <li>Professional information relevant to your legal matter</li>
                <li>Information automatically collected through cookies and similar tracking technologies</li>
                <li>Information collected through contact forms and inquiries</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="heading-sm text-foreground">3. Use of Your Information</h2>
              <p className="body-md">
                Having accurate information about you permits us to provide you with a smooth, efficient, and customized
                experience. Specifically, we may use information collected about you via the site to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                <li>
                  Generate a personal profile about you so that future visits to the site are tailored to your
                  preferences
                </li>
                <li>Increase the efficiency and operation of the site</li>
                <li>Monitor and analyze usage and trends to improve your experience</li>
                <li>Respond to your inquiries and provide customer service</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="heading-sm text-foreground">4. Disclosure of Your Information</h2>
              <p className="body-md">We may share information we have collected about you in certain situations:</p>
              <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                <li>By Law or to Protect Rights</li>
                <li>Third-Party Service Providers</li>
                <li>Marketing Communications (with your consent)</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="heading-sm text-foreground">5. Security of Your Information</h2>
              <p className="body-md">
                We use administrative, technical, and physical security measures to protect your personal information.
                However, no method of transmission over the Internet is 100% secure.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="heading-sm text-foreground">6. Contact Us</h2>
              <p className="body-md">
                If you have questions or comments about this Privacy Policy, please contact us at:
              </p>
              <p className="body-md">
                <strong>Email:</strong> rcaattorneys@gmail.com
                <br />
                <strong>Phone:</strong> 905-517-3093
                <br />
                <strong>Address:</strong> Hamilton, Ontario, Canada
              </p>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <Link href="/" className="text-accent hover:underline font-semibold">
              ← Back to Home
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
