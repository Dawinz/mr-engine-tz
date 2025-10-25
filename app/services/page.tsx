"use client";

import { useLanguage } from "@/components/language-provider";
import { ServiceCard } from "@/components/ui/service-card";
import { services } from "@/lib/services-data";

export default function ServicesPage() {
  const { language, t } = useLanguage();

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-charcoal sm:text-5xl">
            {t.nav.services}
          </h1>
          <p className="mt-4 text-lg text-steel">
            {language === "en"
              ? "Complete automotive solutions for all your vehicle needs"
              : "Suluhisho kamili za magari kwa mahitaji yako yote"}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
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
      </div>
    </div>
  );
}
