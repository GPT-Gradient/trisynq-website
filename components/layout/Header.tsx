'use client';

import { useState, useRef, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';
import { mainNavigation, headerCTA } from '@/data/navigation';
import Button from '@/components/ui/Button';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = useCallback((label: string) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setOpenDropdown(label);
  }, []);

  const handleMouseLeave = useCallback(() => {
    closeTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-background-dark/95 backdrop-blur-sm border-b border-primary-blue/20">
      <nav className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center gap-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="/logos/clearforge-no-text.png"
              alt="ClearForge"
              width={40}
              height={40}
              className="transition-transform group-hover:scale-105"
            />
            <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-accent-pink">
              ClearForge
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 flex-1">
            {mainNavigation.map((item) => (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => item.children && handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                {item.children ? (
                  <button className="flex items-center gap-1 text-gray-300 hover:text-white transition-colors whitespace-nowrap">
                    {item.label}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors whitespace-nowrap"
                  >
                    {item.label}
                  </Link>
                )}

                {/* Dropdown */}
                {item.children && openDropdown === item.label && (
                  <div
                    className="absolute top-full left-0 mt-2 w-72 bg-primary rounded-2xl shadow-xl border border-primary-blue/20 py-2"
                    onMouseEnter={() => handleMouseEnter(item.label)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={`block px-4 py-2 text-gray-300 hover:text-white hover:bg-primary-blue/10 transition-colors ${child.indent ? 'pl-8 text-sm' : ''}`}
                      >
                        <div>
                          <div className="font-medium">{child.label}</div>
                          {child.description && (
                            <div className="text-xs text-gray-400 mt-0.5">{child.description}</div>
                          )}
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Join Beta CTA Button */}
            <Button href={headerCTA.href} size="sm" className="whitespace-nowrap ml-auto">
              {headerCTA.label}
            </Button>
          </div>

          {/* Mobile CTA + Menu Button */}
          <div className="lg:hidden flex items-center gap-3 ml-auto">
            <Button href={headerCTA.href} size="sm" className="text-xs px-3 py-1">
              {headerCTA.label}
            </Button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-primary-blue/20 pt-4">
            {mainNavigation.map((item) => (
              <div key={item.href} className="py-2">
                {item.children ? (
                  <>
                    <button
                      onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                      className="w-full flex items-center justify-between text-gray-300 hover:text-white transition-colors py-2"
                    >
                      {item.label}
                      <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === item.label ? 'rotate-180' : ''}`} />
                    </button>
                    {openDropdown === item.label && (
                      <div className="pl-4 mt-2 space-y-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={`block text-gray-400 hover:text-white transition-colors py-1 ${child.indent ? 'pl-4 text-sm' : ''}`}
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            <div>
                              <div>{child.label}</div>
                              {child.description && (
                                <div className="text-xs text-gray-500 mt-0.5">{child.description}</div>
                              )}
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="block text-gray-300 hover:text-white transition-colors py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="mt-4">
              <Button href={headerCTA.href} className="w-full">
                {headerCTA.label}
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
