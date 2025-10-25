"use client";

import { useLanguage } from "@/components/language-provider";
import { Calendar, Search, CheckCircle2, Wrench, ClipboardCheck, Key } from "lucide-react";

export function Process() {
  const { t } = useLanguage();

  const steps = [
    {
      name: t.process.book.title,
      description: t.process.book.description,
      icon: Calendar,
    },
    {
      name: t.process.diagnose.title,
      description: t.process.diagnose.description,
      icon: Search,
    },
    {
      name: t.process.approve.title,
      description: t.process.approve.description,
      icon: CheckCircle2,
    },
    {
      name: t.process.repair.title,
      description: t.process.repair.description,
      icon: Wrench,
    },
    {
      name: t.process.qualityCheck.title,
      description: t.process.qualityCheck.description,
      icon: ClipboardCheck,
    },
    {
      name: t.process.collect.title,
      description: t.process.collect.description,
      icon: Key,
    },
  ];

  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
            {t.process.title}
          </h2>
        </div>

        <div className="relative">
          {/* Desktop timeline line */}
          <div className="absolute top-8 left-0 hidden h-1 w-full bg-gray-200 lg:block">
            <div className="h-full w-5/6 bg-orange"></div>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-6 lg:gap-4">
            {steps.map((step, index) => (
              <div key={step.name} className="relative flex flex-col items-center text-center">
                <div className="relative z-10 mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange shadow-lg">
                  <step.icon className="h-8 w-8 text-white" aria-hidden="true" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-charcoal">{step.name}</h3>
                <p className="text-sm text-steel leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
