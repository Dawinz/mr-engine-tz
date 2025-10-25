"use client";

import { useLanguage } from "@/components/language-provider";
import { Award, Users, Wrench, Target } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  const { language } = useLanguage();

  const values = [
    {
      icon: Target,
      title: { en: "Precision", sw: "Usahihi" },
      description: {
        en: "We diagnose accurately and fix problems right the first time.",
        sw: "Tunachunguza kwa usahihi na kurekebisha matatizo mara ya kwanza.",
      },
    },
    {
      icon: Users,
      title: { en: "Expertise", sw: "Utaalamu" },
      description: {
        en: "Our team has years of experience with diverse vehicle makes and models.",
        sw: "Timu yetu ina uzoefu wa miaka mingi na chapa mbalimbali za magari.",
      },
    },
    {
      icon: Wrench,
      title: { en: "Quality", sw: "Ubora" },
      description: {
        en: "We use OEM or high-quality aftermarket parts with warranty.",
        sw: "Tunatumia sehemu za OEM au za ubora wa juu zenye dhamana.",
      },
    },
    {
      icon: Award,
      title: { en: "Transparency", sw: "Uwazi" },
      description: {
        en: "Photo/video updates and itemized quotes for every job.",
        sw: "Picha/video na hesabu ya kina kwa kila kazi.",
      },
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-charcoal via-steel to-charcoal text-white">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
              {language === "en" ? "About Mr Engine Tz" : "Kuhusu Mr Engine Tz"}
            </h1>
            <p className="text-xl text-gray-300">
              {language === "en"
                ? "Your trusted partner for precision automotive care in Tanzania"
                : "Mshirika wako wa kuaminika wa huduma bora za magari Tanzania"}
            </p>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-3xl font-bold text-charcoal mb-6">
              {language === "en" ? "Our Story" : "Hadithi Yetu"}
            </h2>
            <div className="space-y-4 text-lg text-steel leading-relaxed">
              <p>
                {language === "en"
                  ? "Mr Engine Tz was founded with a simple mission: to provide honest, professional automotive diagnostics and repair services using modern equipment and techniques."
                  : "Mr Engine Tz ilianzishwa kwa lengo rahisi: kutoa huduma za uaminifu na kitaalamu za uchunguzi na matengenezo ya magari kwa kutumia vifaa na mbinu za kisasa."}
              </p>
              <p>
                {language === "en"
                  ? "We've built our reputation on accuracy, transparency, and quality workmanship. From computerized diagnostics to complex engine rebuilds, we treat every vehicle with the care it deserves."
                  : "Tumejengea sifa yetu juu ya usahihi, uwazi, na ubora wa kazi. Kuanzia uchunguzi kwa kompyuta hadi ukarabati ngumu wa injini, tunashughulikia kila gari kwa umakini unaostahili."}
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/diagnostics.jpg"
                alt="Automotive Workshop"
                width={1200}
                height={900}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-charcoal text-center mb-12">
            {language === "en" ? "Our Values" : "Maadili Yetu"}
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title.en}
                className="flex flex-col items-center text-center p-6 rounded-2xl bg-gray-50 border border-gray-100"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-orange">
                  <value.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-2">
                  {value.title[language]}
                </h3>
                <p className="text-steel">{value.description[language]}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Brands Section */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-charcoal text-center mb-6">
            {language === "en" ? "Vehicle Brands We Service" : "Chapa za Magari Tunazoshughulikia"}
          </h2>
          <p className="text-lg text-steel text-center mb-12 max-w-3xl mx-auto">
            {language === "en"
              ? "Experienced with Toyota, Nissan, Isuzu, Ford Ranger, Land Rover, BMW—and most other makes."
              : "Uzoefu na Toyota, Nissan, Isuzu, Ford Ranger, Land Rover, BMW—na chapa nyingi nyingine."}
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            {["Toyota", "Nissan", "Isuzu", "Ford", "Land Rover", "BMW"].map((brand) => (
              <div
                key={brand}
                className="flex h-24 w-32 items-center justify-center rounded-lg bg-gray-100 px-6 font-semibold text-charcoal"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
