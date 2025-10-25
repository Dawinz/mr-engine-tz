import { Hero } from "@/components/sections/hero";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { ServicesOverview } from "@/components/sections/services-overview";
import { Process } from "@/components/sections/process";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <ServicesOverview />
      <Process />
    </>
  );
}
