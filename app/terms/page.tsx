import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"

export default function Terms() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="heading-lg mb-8">Terms of Service</h1>

          <div className="prose prose-lg text-muted-foreground space-y-6">
            <p className="body-lg">Last Updated: {new Date().toLocaleDateString()}</p>

            <div className="space-y-4">
              <h2 className="heading-sm text-foreground">1. Agreement to Terms</h2>
              <p className="body-md">
                These Terms of Service ("Terms") constitute a legally binding agreement between you and RCA Law. By
                accessing and using this website, you accept and agree to be bound by and comply with these Terms and
                our Privacy Policy.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="heading-sm text-foreground">2. Use License</h2>
              <p className="body-md">
                Permission is granted to temporarily download one copy of the materials (information or software) on our
                website for personal, non-commercial transitory viewing only. This is the grant of a license, not a
                transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to reverse engineer any software contained on the website</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="heading-sm text-foreground">3. Disclaimer</h2>
              <p className="body-md">
                The materials on our website are provided on an 'as is' basis. RCA Law makes no warranties, expressed or
                implied, and hereby disclaims and negates all other warranties including, without limitation, implied
                warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of
                intellectual property or other violation of rights.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="heading-sm text-foreground">4. Limitations</h2>
              <p className="body-md">
                In no event shall RCA Law or its suppliers be liable for any damages (including, without limitation,
                damages for loss of data or profit, or due to business interruption) arising out of the use or inability
                to use the materials on the website.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="heading-sm text-foreground">5. Accuracy of Materials</h2>
              <p className="body-md">
                The materials appearing on our website could include technical, typographical, or photographic errors.
                RCA Law does not warrant that any of the materials on the website are accurate, complete, or current.
                RCA Law may make changes to the materials contained on the website at any time without notice.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="heading-sm text-foreground">6. Links</h2>
              <p className="body-md">
                RCA Law has not reviewed all of the sites linked to its website and is not responsible for the contents
                of any such linked site. The inclusion of any link does not imply endorsement by RCA Law of the site.
                Use of any such linked website is at the user's own risk.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="heading-sm text-foreground">7. Modifications</h2>
              <p className="body-md">
                RCA Law may revise these terms of service for the website at any time without notice. By using this
                website, you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="heading-sm text-foreground">8. Governing Law</h2>
              <p className="body-md">
                These terms and conditions are governed by and construed in accordance with the laws of Ontario, Canada,
                and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="heading-sm text-foreground">9. Contact Information</h2>
              <p className="body-md">If you have any questions about these Terms of Service, please contact us at:</p>
              <p className="body-md">
                <strong>Email:</strong> rcaattorneys@gmail.com
                <br />
                <strong>Phone:</strong> 905-517-3093
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
