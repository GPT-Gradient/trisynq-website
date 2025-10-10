import Link from 'next/link';
import { footerNavigation } from '@/data/navigation';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background-dark border-t border-primary-blue/20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-accent-pink mb-4">
              ClearForge
            </h3>
            <p className="text-gray-400 text-sm">
              Complexity is the villain. ClearForge is the weapon.
            </p>
          </div>

          {/* Mission Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Mission</h4>
            <ul className="space-y-2">
              {footerNavigation.mission.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerNavigation.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerNavigation.legal.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <p className="text-xs text-gray-500">
                Port St. Lucie, Florida
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-blue/20 text-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} ClearForge. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs mt-2">
            Clarity through transparency
          </p>
        </div>
      </div>
    </footer>
  );
}
