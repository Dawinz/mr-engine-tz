"use client";

import { useLanguage } from "@/components/language-provider";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[600px] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero-workshop.jpg"
          alt="Automotive Workshop"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/95 via-charcoal/80 to-charcoal/60" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 text-white">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
            {t.hero.headline}
          </h1>
          <p className="text-lg leading-8 text-gray-300 mb-10">
            {t.hero.subheadline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact">
              <Button size="lg" variant="primary" className="w-full sm:w-auto">
                {t.hero.primaryCta}
              </Button>
            </Link>
            <a href="tel:+255745879628">
              <Button size="lg" variant="outline" className="w-full sm:w-auto gap-2 border-white text-white hover:bg-white hover:text-charcoal">
                <Phone className="h-5 w-5" />
                {t.hero.secondaryCta}
              </Button>
            </a>
          </div>
        </div>
      </div>
      {/* Decorative Pattern Overlay */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-white/10 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="hero-pattern"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-white/5">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect width="100%" height="100%" strokeWidth={0} fill="url(#hero-pattern)" />
        </svg>
      </div>
    </section>
  );
}
