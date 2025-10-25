"use client";

import { useLanguage } from "@/components/language-provider";
import { Scan, Zap, Wrench, FileText, ShieldCheck } from "lucide-react";

export function WhyChooseUs() {
  const { t } = useLanguage();

  const features = [
    {
      name: t.whyChoose.diagnostics.title,
      description: t.whyChoose.diagnostics.description,
      icon: Scan,
    },
    {
      name: t.whyChoose.electrical.title,
      description: t.whyChoose.electrical.description,
      icon: Zap,
    },
    {
      name: t.whyChoose.engine.title,
      description: t.whyChoose.engine.description,
      icon: Wrench,
    },
    {
      name: t.whyChoose.transparent.title,
      description: t.whyChoose.transparent.description,
      icon: FileText,
    },
    {
      name: t.whyChoose.quality.title,
      description: t.whyChoose.quality.description,
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
            {t.whyChoose.title}
          </h2>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={feature.name}
              className="flex flex-col items-start p-8 bg-gray-50 rounded-2xl hover:bg-orange/5 transition-colors border border-gray-100"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-orange">
                <feature.icon className="h-7 w-7 text-white" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-2">{feature.name}</h3>
              <p className="text-steel leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
