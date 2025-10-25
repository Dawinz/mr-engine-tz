import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/language-provider";
import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mr Engine Tz – Car Diagnostics, Electrical & Engine Repair in Tanzania",
  description: "Computerized diagnostics, electrical fault-finding, engine repair, brakes, suspension, A/C and more. Toyota, Nissan, Isuzu, Ford Ranger, Land Rover, BMW. Book diagnostics today.",
  keywords: ["car repair Tanzania", "auto diagnostics", "engine repair", "electrical repair", "car service Dar es Salaam"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
