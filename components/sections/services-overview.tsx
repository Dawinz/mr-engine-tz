"use client";

import { useLanguage } from "@/components/language-provider";
import { ServiceCard } from "@/components/ui/service-card";
import { services } from "@/lib/services-data";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function ServicesOverview() {
  const { language, t } = useLanguage();

  // Show first 6 services on homepage
  const featuredServices = services.slice(0, 6);

  return (
    <section className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
            {t.nav.services}
          </h2>
          <p className="mt-4 text-lg text-steel">
            Comprehensive automotive solutions for all your vehicle needs
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredServices.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title[language]}
              description={service.blurb[language]}
              slug={service.slug}
              icon={service.icon}
              cta={language === "en" ? "Learn More" : "Soma Zaidi"}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/services">
            <Button size="lg" variant="outline" className="gap-2">
              {language === "en" ? "View All Services" : "Ona Huduma Zote"}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
