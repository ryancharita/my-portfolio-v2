import { Capabilities } from "@/components/capabilities";
import { Contact } from "@/components/contact";
import { Experience } from "@/components/experience";
import { FeaturedWork } from "@/components/featured-work";
import { Hero } from "@/components/hero";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <FeaturedWork />
      <Capabilities />
      <Experience />
      <Contact />
    </main>
  );
}
