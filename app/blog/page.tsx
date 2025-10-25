"use client";

import { useLanguage } from "@/components/language-provider";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";

const blogPosts = [
  {
    title: {
      en: "Top 7 Reasons Your Car Overheats",
      sw: "Sababu 7 Kuu za Gari Kuongezeka Joto",
    },
    excerpt: {
      en: "Learn the common causes of engine overheating and how to prevent costly damage.",
      sw: "Jifunze sababu za kawaida za joto kupita kiasi na jinsi ya kuzuia uharibifu wa gharama kubwa.",
    },
    date: "2025-01-15",
    slug: "car-overheating-reasons",
  },
  {
    title: {
      en: "Check Engine Light: What Codes Really Mean",
      sw: "Taa ya Angalia Injini: Makosa Yanamaanisha Nini",
    },
    excerpt: {
      en: "Demystifying diagnostic trouble codes with real examples from our workshop.",
      sw: "Kuelezea makosa ya uchunguzi kwa mifano halisi kutoka kwa kazi yetu.",
    },
    date: "2025-01-10",
    slug: "check-engine-light-codes",
  },
  {
    title: {
      en: "How Often Should You Service Your Car in Tanzania's Climate?",
      sw: "Ni Mara Ngapi Unapaswa Kutunza Gari Lako katika Hali ya Hewa ya Tanzania?",
    },
    excerpt: {
      en: "Maintenance intervals for tropical conditions, dust, and city driving.",
      sw: "Ratiba za matunzo kwa hali ya joto, vumbi, na kuendesha mijini.",
    },
    date: "2025-01-05",
    slug: "car-service-intervals-tanzania",
  },
  {
    title: {
      en: "ABS Light On? Here's What We Check",
      sw: "Taa ya ABS Imewasha? Hivi Ndivyo Tunavyokagua",
    },
    excerpt: {
      en: "A step-by-step photo guide to ABS diagnostics and common fixes.",
      sw: "Mwongozo wa hatua kwa hatua wa picha kwa uchunguzi wa ABS na matengenezo ya kawaida.",
    },
    date: "2024-12-28",
    slug: "abs-light-diagnostics",
  },
];

export default function BlogPage() {
  const { language } = useLanguage();

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-charcoal sm:text-5xl">
            {language === "en" ? "Auto Care Blog" : "Blogu ya Huduma za Magari"}
          </h1>
          <p className="mt-4 text-lg text-steel">
            {language === "en"
              ? "Expert tips, guides, and insights from our workshop"
              : "Vidokezo vya wataalamu, miongozo, na maarifa kutoka kwa warsha yetu"}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {blogPosts.map((post) => (
            <Card key={post.slug} className="h-full flex flex-col hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-steel mb-2">
                  <Calendar className="h-4 w-4" />
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString(language === "en" ? "en-US" : "sw-TZ", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                </div>
                <CardTitle className="text-2xl">{post.title[language]}</CardTitle>
                <CardDescription className="text-base">{post.excerpt[language]}</CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-orange font-medium hover:gap-3 transition-all"
                >
                  {language === "en" ? "Read More" : "Soma Zaidi"}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
