import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    "Practice Areas": [
      { label: "Immigration Law", href: "/practice-areas/immigration" },
      { label: "Family Law", href: "/practice-areas/family" },
      { label: "Estate Law", href: "/practice-areas/estate" },
      { label: "Tax Law", href: "/practice-areas/tax" },
    ],
    Company: [
      { label: "About Us", href: "/about" },
      { label: "Contact Us", href: "/contact" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  }

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Info */}
          <div className="space-y-4">
            <Link href="/">
              <Image
                src="/rca_logo.jpg"
                alt="RCA Law - Barristers, Solicitors and Notary Public"
                width={160}
                height={53}
                className="h-14 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-sm text-primary-foreground/80">
              Quality legal services with integrity and dedication. Family-owned and committed to your success.
            </p>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-serif font-semibold mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-serif font-semibold">Contact Us</h4>
            <div className="space-y-2 text-sm">
              <p className="text-primary-foreground/80">
                <strong>Phone:</strong>
                <br />
                <a href="tel:905-517-3093" className="hover:text-accent transition-colors">
                  905-517-3093
                </a>
              </p>
              <p className="text-primary-foreground/80">
                <strong>Email:</strong>
                <br />
                <a href="mailto:rcaattorneys@gmail.com" className="hover:text-accent transition-colors">
                  rcaattorneys@gmail.com
                </a>
              </p>
              <p className="text-primary-foreground/80">
                <strong>Address:</strong>
                <br />
                Hamilton, Ontario
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/70">© {currentYear} RCA Law. All rights reserved.</p>
            <p className="text-xs text-primary-foreground/60">Hamilton, Ontario, Canada</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
