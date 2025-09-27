import Link from 'next/link'
import { Twitter, Linkedin, Github, Mail } from 'lucide-react'
import { footerNavigation } from '@/data/navigation'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary-dark border-t border-secondary-purple-bright/20">
      <div className="container-wide py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-secondary-pink to-secondary-purple-bright rounded-xl"></div>
              <span className="text-xl font-bold gradient-text">TriSynq AI</span>
            </Link>
            <p className="text-neutral-light text-lg leading-relaxed mb-6 max-w-md">
              We bridge the gap between creative minds and technology. The technology world speaks one language.
              Creative minds speak another. We're the translators.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com/trisynqai"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-secondary-purple-bright/10 rounded-xl text-neutral-light hover:text-secondary-pink hover:bg-secondary-purple-bright/20 transition-all duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/company/trisynqai"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-secondary-purple-bright/10 rounded-xl text-neutral-light hover:text-secondary-pink hover:bg-secondary-purple-bright/20 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/trisynqai"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-secondary-purple-bright/10 rounded-xl text-neutral-light hover:text-secondary-pink hover:bg-secondary-purple-bright/20 transition-all duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="mailto:hello@trisynq.ai"
                className="p-3 bg-secondary-purple-bright/10 rounded-xl text-neutral-light hover:text-secondary-pink hover:bg-secondary-purple-bright/20 transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-neutral-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {footerNavigation.slice(0, 4).map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-neutral-light hover:text-secondary-pink transition-colors duration-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold text-neutral-white mb-6">Resources</h3>
            <ul className="space-y-3">
              {footerNavigation.slice(4).map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-neutral-light hover:text-secondary-pink transition-colors duration-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Vision Statement */}
        <div className="border-t border-secondary-purple-bright/20 pt-8 mb-8">
          <blockquote className="text-center max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-neutral-light italic leading-relaxed mb-4">
              "90% of breakthrough ideas never happen because creative minds can't find the first person in tech who speaks human."
            </p>
            <footer className="text-secondary-pink font-semibold">
              — The TriSynq Mission
            </footer>
          </blockquote>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-purple-bright/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-light text-sm mb-4 md:mb-0">
            © {currentYear} TriSynq AI. All rights reserved. Technology translators, possibility amplifiers.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link href="/privacy" className="text-neutral-light hover:text-secondary-pink transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-neutral-light hover:text-secondary-pink transition-colors duration-300">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-neutral-light hover:text-secondary-pink transition-colors duration-300">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}