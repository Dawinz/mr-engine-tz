"use client";

import { useParams } from "next/navigation";
import { useLanguage } from "@/components/language-provider";
import { getServiceBySlug } from "@/lib/services-data";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, Phone } from "lucide-react";
import { notFound } from "next/navigation";
import * as Icons from "lucide-react";
import { LucideIcon } from "lucide-react";

export default function ServiceDetailPage() {
  const params = useParams();
  const { language, t } = useLanguage();
  const service = getServiceBySlug(params.slug as string);

  if (!service) {
    notFound();
  }

  const IconComponent = (Icons[service.icon as keyof typeof Icons] as LucideIcon) || Icons.Wrench;

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-charcoal via-steel to-charcoal text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <Link href="/services" className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white mb-8">
            <ArrowLeft className="h-4 w-4" />
            {language === "en" ? "Back to Services" : "Rudi kwa Huduma"}
          </Link>
          <div className="flex items-start gap-6">
            <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-orange">
              <IconComponent className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
                {service.title[language]}
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl">
                {service.blurb[language]}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-charcoal mb-4">
                {language === "en" ? "Service Details" : "Maelezo ya Huduma"}
              </h2>
              <p className="text-steel leading-relaxed">
                {service.description[language]}
              </p>

              <h3 className="text-xl font-bold text-charcoal mt-8 mb-4">
                {language === "en" ? "What You'll Get" : "Utapata Nini"}
              </h3>
              <ul className="space-y-2 text-steel">
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-orange">✓</span>
                  <span>{language === "en" ? "Complete diagnostic report" : "Ripoti kamili ya uchunguzi"}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-orange">✓</span>
                  <span>{language === "en" ? "Itemized cost estimate" : "Makadirio ya gharama"}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-orange">✓</span>
                  <span>{language === "en" ? "Photo/video documentation" : "Picha/video za kazi"}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-orange">✓</span>
                  <span>{language === "en" ? "Quality parts with warranty" : "Sehemu bora zenye dhamana"}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-orange">✓</span>
                  <span>{language === "en" ? "Post-repair testing & verification" : "Upimaji baada ya matengenezo"}</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Sidebar CTA */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 rounded-2xl border border-gray-200 bg-gray-50 p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-charcoal mb-4">
                {language === "en" ? "Book This Service" : "Weka Miadi ya Huduma"}
              </h3>
              <p className="text-steel mb-6">
                {language === "en"
                  ? "Get professional service from our expert technicians."
                  : "Pata huduma bora kutoka kwa wataalam wetu."}
              </p>
              <div className="space-y-3">
                <Link href="/contact" className="block">
                  <Button size="lg" className="w-full">
                    {t.hero.primaryCta}
                  </Button>
                </Link>
                <a href="tel:+255745879628" className="block">
                  <Button size="lg" variant="outline" className="w-full gap-2">
                    <Phone className="h-5 w-5" />
                    {t.hero.secondaryCta}
                  </Button>
                </a>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-steel">
                  <strong>{language === "en" ? "Warranty:" : "Dhamana:"}</strong>{" "}
                  {t.warranty.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
