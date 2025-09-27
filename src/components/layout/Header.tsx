'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'
import { mainNavigation } from '@/data/navigation'
import { cn } from '@/lib/utils'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  return (
    <header className="fixed w-full top-0 z-50 bg-primary-dark/90 backdrop-blur-subtle border-b border-secondary-purple-bright/20">
      <nav className="container-wide">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-secondary-pink to-secondary-purple-bright rounded-xl"></div>
            <span className="text-xl font-bold gradient-text">TriSynq AI</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {mainNavigation.map((item) => (
              <div key={item.label} className="relative">
                {item.children ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button className="flex items-center space-x-1 text-neutral-light hover:text-secondary-pink transition-colors duration-300">
                      <span>{item.label}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>

                    {/* Dropdown Menu */}
                    <div className={cn(
                      "absolute top-full left-0 mt-2 w-64 py-2 bg-primary-blue/95 backdrop-blur-md rounded-2xl border border-secondary-purple-bright/20 shadow-2xl transition-all duration-300",
                      activeDropdown === item.label ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-2"
                    )}>
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block px-4 py-3 text-neutral-light hover:text-secondary-pink hover:bg-secondary-purple-bright/10 transition-all duration-300"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="text-neutral-light hover:text-secondary-pink transition-colors duration-300"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link href="/beta" className="btn-primary">
              Join Beta
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-neutral-light hover:text-secondary-pink transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={cn(
          "lg:hidden overflow-hidden transition-all duration-300",
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        )}>
          <div className="py-4 space-y-2">
            {mainNavigation.map((item) => (
              <div key={item.label}>
                {item.children ? (
                  <div>
                    <button
                      className="w-full flex items-center justify-between p-3 text-neutral-light hover:text-secondary-pink hover:bg-secondary-purple-bright/10 rounded-xl transition-all duration-300"
                      onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                    >
                      <span>{item.label}</span>
                      <ChevronDown className={cn(
                        "w-4 h-4 transition-transform duration-300",
                        activeDropdown === item.label && "rotate-180"
                      )} />
                    </button>
                    <div className={cn(
                      "overflow-hidden transition-all duration-300 ml-4",
                      activeDropdown === item.label ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
                    )}>
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block p-3 text-neutral-light hover:text-secondary-pink hover:bg-secondary-purple-bright/10 rounded-xl transition-all duration-300"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="block p-3 text-neutral-light hover:text-secondary-pink hover:bg-secondary-purple-bright/10 rounded-xl transition-all duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-4">
              <Link href="/beta" className="btn-primary w-full text-center" onClick={() => setIsMenuOpen(false)}>
                Join Beta
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}