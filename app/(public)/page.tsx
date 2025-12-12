import { Hero } from "@/components/Hero";
import {Offer} from "@/components/Offer";
import {Pricing} from "@/components/Pricing";
import {Features} from "@/components/Features";
import {Gallery} from "@/components/Gallery";
import {NewsHome} from "@/components/NewsHome";

export default function Home() {
  return (
      <main className="min-h-screen flex flex-col">


        <Hero />
        <Offer />
          <Features />
          <Pricing />
          <Gallery />
          <NewsHome />

      </main>
  );
}