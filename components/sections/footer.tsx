"use client";

import Link from "next/link";
import { useLanguage } from "@/components/language-provider";
import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-charcoal text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Mr Engine <span className="text-orange">Tz</span>
            </h3>
            <p className="text-gray-400 text-sm">{t.footer.tagline}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">{t.nav.services}</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/services/engine-diagnostics-repair" className="hover:text-orange transition-colors">
                  Engine Diagnostics
                </Link>
              </li>
              <li>
                <Link href="/services/auto-electrical-electronics" className="hover:text-orange transition-colors">
                  Auto Electrical
                </Link>
              </li>
              <li>
                <Link href="/services/scheduled-service-maintenance" className="hover:text-orange transition-colors">
                  Maintenance
                </Link>
              </li>
              <li>
                <Link href="/services/pre-purchase-inspection" className="hover:text-orange transition-colors">
                  Pre-Purchase Inspection
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/about" className="hover:text-orange transition-colors">
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-orange transition-colors">
                  {t.nav.gallery}
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-orange transition-colors">
                  {t.nav.blog}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-orange transition-colors">
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">{t.nav.contact}</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 text-orange flex-shrink-0" />
                <a href="tel:+255123456789" className="hover:text-orange transition-colors">
                  +255 123 456 789
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 text-orange flex-shrink-0" />
                <a href="mailto:info@mrenginetz.com" className="hover:text-orange transition-colors">
                  info@mrenginetz.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-orange flex-shrink-0" />
                <span>Dar es Salaam, Tanzania</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          <p>{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
