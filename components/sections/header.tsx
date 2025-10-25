"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone, Languages } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navigation = [
    { name: t.nav.home, href: "/" },
    { name: t.nav.services, href: "/services" },
    { name: t.nav.gallery, href: "/gallery" },
    { name: t.nav.about, href: "/about" },
    { name: t.nav.blog, href: "/blog" },
    { name: t.nav.contact, href: "/contact" },
  ];

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "sw" : "en");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="text-2xl font-bold text-charcoal">
              Mr Engine <span className="text-orange">Tz</span>
            </span>
          </Link>
        </div>
        <div className="flex lg:hidden gap-2">
          <button
            type="button"
            onClick={toggleLanguage}
            className="inline-flex items-center justify-center rounded-md p-2 text-steel hover:bg-gray-100"
          >
            <Languages className="h-5 w-5" />
            <span className="ml-1 text-sm font-medium">{language.toUpperCase()}</span>
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex items-center justify-center rounded-md p-2.5 text-steel"
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-steel hover:text-orange transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4 lg:items-center">
          <button
            onClick={toggleLanguage}
            className="inline-flex items-center gap-1 text-sm font-medium text-steel hover:text-orange transition-colors"
          >
            <Languages className="h-4 w-4" />
            {language.toUpperCase()}
          </button>
          <a href="tel:+255123456789">
            <Button size="sm" className="gap-2">
              <Phone className="h-4 w-4" />
              {t.hero.secondaryCta}
            </Button>
          </a>
        </div>
      </nav>
      {/* Mobile menu */}
      <div className={cn("lg:hidden", mobileMenuOpen ? "block" : "hidden")}>
        <div className="space-y-1 px-4 pb-3 pt-2">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block rounded-md px-3 py-2 text-base font-medium text-steel hover:bg-gray-100 hover:text-orange transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-4 border-t border-gray-200">
            <a href="tel:+255123456789" className="block">
              <Button size="md" className="w-full gap-2">
                <Phone className="h-4 w-4" />
                {t.hero.secondaryCta}
              </Button>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
