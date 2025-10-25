"use client";

import { useLanguage } from "@/components/language-provider";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react";

export default function ContactPage() {
  const { language } = useLanguage();

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-charcoal sm:text-5xl">
            {language === "en" ? "Get in Touch" : "Wasiliana Nasi"}
          </h1>
          <p className="mt-4 text-lg text-steel">
            {language === "en"
              ? "Ready to get your vehicle serviced? Contact us today."
              : "Uko tayari kupata huduma ya gari lako? Wasiliana nasi leo."}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>
                  {language === "en" ? "Book Diagnostics" : "Weka Miadi ya Uchunguzi"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-2">
                      {language === "en" ? "Full Name" : "Jina Kamili"}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange/20"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-2">
                      {language === "en" ? "Phone Number" : "Nambari ya Simu"}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange/20"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">
                      {language === "en" ? "Email" : "Barua Pepe"}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange/20"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="vehicle" className="block text-sm font-medium text-charcoal mb-2">
                      {language === "en" ? "Vehicle (Make & Model)" : "Gari (Chapa & Muundo)"}
                    </label>
                    <input
                      type="text"
                      id="vehicle"
                      name="vehicle"
                      placeholder={language === "en" ? "e.g., Toyota RAV4 2018" : "mfano, Toyota RAV4 2018"}
                      className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange/20"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-charcoal mb-2">
                      {language === "en" ? "Service Needed" : "Huduma Inayohitajika"}
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange/20"
                      required
                    >
                      <option value="">
                        {language === "en" ? "Select a service" : "Chagua huduma"}
                      </option>
                      <option value="diagnostics">
                        {language === "en" ? "Engine Diagnostics" : "Uchunguzi wa Injini"}
                      </option>
                      <option value="electrical">
                        {language === "en" ? "Electrical" : "Umeme"}
                      </option>
                      <option value="maintenance">
                        {language === "en" ? "Maintenance" : "Matunzo"}
                      </option>
                      <option value="brakes">
                        {language === "en" ? "Brakes" : "Breki"}
                      </option>
                      <option value="other">
                        {language === "en" ? "Other" : "Nyingine"}
                      </option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-2">
                      {language === "en" ? "Message / Symptoms" : "Ujumbe / Dalili"}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange/20"
                      placeholder={
                        language === "en"
                          ? "Describe the issue or what service you need..."
                          : "Elezea tatizo au huduma unayohitaji..."
                      }
                    ></textarea>
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    {language === "en" ? "Submit Request" : "Wasilisha Ombi"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>
                  {language === "en" ? "Contact Information" : "Maelezo ya Mawasiliano"}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-orange/10">
                    <Phone className="h-5 w-5 text-orange" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">
                      {language === "en" ? "Phone" : "Simu"}
                    </h3>
                    <a href="tel:+255123456789" className="text-steel hover:text-orange transition-colors">
                      +255 123 456 789
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-orange/10">
                    <MessageSquare className="h-5 w-5 text-orange" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">WhatsApp</h3>
                    <a
                      href="https://wa.me/255123456789"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-steel hover:text-orange transition-colors"
                    >
                      +255 123 456 789
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-orange/10">
                    <Mail className="h-5 w-5 text-orange" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">Email</h3>
                    <a href="mailto:info@mrenginetz.com" className="text-steel hover:text-orange transition-colors">
                      info@mrenginetz.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-orange/10">
                    <MapPin className="h-5 w-5 text-orange" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">
                      {language === "en" ? "Location" : "Mahali"}
                    </h3>
                    <p className="text-steel">Dar es Salaam, Tanzania</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-orange/10">
                    <Clock className="h-5 w-5 text-orange" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">
                      {language === "en" ? "Working Hours" : "Saa za Kazi"}
                    </h3>
                    <p className="text-steel">
                      {language === "en" ? "Mon - Sat: 8:00 AM - 6:00 PM" : "Jumatatu - Jumamosi: 8:00 AM - 6:00 PM"}
                      <br />
                      {language === "en" ? "Sunday: Closed" : "Jumapili: Imefungwa"}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card>
              <CardContent className="p-0">
                <div className="aspect-video w-full rounded-lg bg-gray-200 flex items-center justify-center text-steel">
                  [Map Placeholder]
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
