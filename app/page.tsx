import { Capabilities } from "@/components/capabilities";
import { FeaturedWork } from "@/components/featured-work";
import { Hero } from "@/components/hero";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <FeaturedWork />
      <Capabilities />
    </main>
  );
}
