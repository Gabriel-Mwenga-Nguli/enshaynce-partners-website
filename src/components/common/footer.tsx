
import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';

const footerNavLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/partners', label: "Partners" },
  { href: '/certifications', label: 'Company Profile' },
  { href: '/contact', label: 'Contact' },
];

const legalLinks = [
    { href: '/privacy-policy', label: 'Privacy Policy' },
    { href: '/terms-of-service', label: 'Terms of Service' },
]

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image src="/images/epl-logo.svg" alt="Enshaynce Partners Logo" width={40} height={40} />
              <span className="font-headline text-2xl font-bold text-primary-foreground dark:text-accent">Enshaynce Partners</span>
            </Link>
            <p className="text-secondary-foreground/80 text-sm">
              Elevating Potential. Enabling Performance.
            </p>
          </div>

          <div>
            <h3 className="font-headline text-lg font-semibold text-primary-foreground dark:text-accent text-shadow-primary">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {footerNavLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-secondary-foreground/80 transition-colors hover:text-primary-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-headline text-lg font-semibold text-primary-foreground dark:text-accent text-shadow-primary">Legal</h3>
            <ul className="mt-4 space-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-secondary-foreground/80 transition-colors hover:text-primary-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-headline text-lg font-semibold text-primary-foreground dark:text-accent text-shadow-primary">Contact Us</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary-foreground dark:text-accent mt-1 shrink-0" />
                <span className="text-sm text-secondary-foreground/80">EENS Building, Block B, 1st Floor, Mombasa Road</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary-foreground dark:text-accent" />
                <a href="mailto:info@enshayncepartners.com" className="text-sm text-secondary-foreground/80 transition-colors hover:text-primary-foreground">
                  info@enshayncepartners.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary-foreground dark:text-accent" />
                <a href="tel:+254725619571" className="text-sm text-secondary-foreground/80 transition-colors hover:text-primary-foreground">
                  +254 725 619 571
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12">
            <h3 className="font-headline text-lg font-semibold text-primary-foreground dark:text-accent text-center text-shadow-primary">Our Location</h3>
            <div className="mt-4 h-64 w-full rounded-lg bg-muted overflow-hidden shadow-inner">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.786524982935!2d36.89712121475437!3d-1.3044958990518714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f13a5b0f4583d%3A0x6b72d24a3cf5a239!2sMombasa%20Road!5e0!3m2!1sen!2ske!4v1684750242858!5m2!1sen!2ske"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    title="Company Location"
                ></iframe>
            </div>
        </div>

        <div className="mt-12 border-t border-secondary-foreground/20 pt-8 text-center text-sm text-secondary-foreground/80">
          <p>&copy; {new Date().getFullYear()} Enshaynce Partners Limited. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
