"use client";

import { useLanguage } from "@/components/language-provider";
import { useState } from "react";
import Image from "next/image";

const galleryItems = [
  {
    title: { en: "Engine Diagnostics", sw: "Uchunguzi wa Injini" },
    category: "diagnostics",
    before: "/images/gallery/before-1.jpg",
    after: "/images/services/engine.jpg",
  },
  {
    title: { en: "Brake Repair", sw: "Matengenezo ya Breki" },
    category: "brakes",
    before: "/images/gallery/before-2.jpg",
    after: "/images/gallery/after-2.jpg",
  },
  {
    title: { en: "Electrical Work", sw: "Kazi ya Umeme" },
    category: "electrical",
    before: "/images/gallery/before-2.jpg",
    after: "/images/services/electrical.jpg",
  },
  {
    title: { en: "Suspension Service", sw: "Huduma ya Suspension" },
    category: "engine",
    before: "/images/gallery/before-1.jpg",
    after: "/images/services/suspension.jpg",
  },
];

export default function GalleryPage() {
  const { language } = useLanguage();
  const [filter, setFilter] = useState("all");

  const categories = [
    { id: "all", label: { en: "All", sw: "Zote" } },
    { id: "diagnostics", label: { en: "Diagnostics", sw: "Uchunguzi" } },
    { id: "engine", label: { en: "Engine", sw: "Injini" } },
    { id: "electrical", label: { en: "Electrical", sw: "Umeme" } },
    { id: "brakes", label: { en: "Brakes", sw: "Breki" } },
  ];

  const filteredItems = filter === "all"
    ? galleryItems
    : galleryItems.filter(item => item.category === filter);

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-charcoal sm:text-5xl">
            {language === "en" ? "Our Work Gallery" : "Picha za Kazi Zetu"}
          </h1>
          <p className="mt-4 text-lg text-steel">
            {language === "en"
              ? "See the quality of our work in before & after transformations"
              : "Ona ubora wa kazi yetu katika mabadiliko ya kabla na baada"}
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`rounded-full px-6 py-2 text-sm font-medium transition-colors ${
                filter === category.id
                  ? "bg-orange text-white"
                  : "bg-gray-100 text-steel hover:bg-gray-200"
              }`}
            >
              {category.label[language]}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {filteredItems.map((item, index) => (
            <div key={index} className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-charcoal mb-4">
                {item.title[language]}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative overflow-hidden rounded-lg">
                  <span className="absolute top-2 left-2 z-10 rounded-full bg-red-500 px-3 py-1 text-xs font-medium text-white shadow-lg">
                    {language === "en" ? "Before" : "Kabla"}
                  </span>
                  <div className="aspect-square w-full relative">
                    <Image
                      src={item.before}
                      alt={`${item.title[language]} - Before`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 33vw"
                    />
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-lg">
                  <span className="absolute top-2 left-2 z-10 rounded-full bg-green-500 px-3 py-1 text-xs font-medium text-white shadow-lg">
                    {language === "en" ? "After" : "Baada"}
                  </span>
                  <div className="aspect-square w-full relative">
                    <Image
                      src={item.after}
                      alt={`${item.title[language]} - After`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 33vw"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-steel">
              {language === "en"
                ? "No items in this category yet."
                : "Hakuna vitu katika kategoria hii bado."}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
