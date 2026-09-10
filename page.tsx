import { Header } from "@/components/navigation/Header";
import { Hero } from "@/components/sections/Hero";
import { ChoosePath } from "@/components/sections/ChoosePath";
import { BreedGrid } from "@/components/sections/BreedGrid";
import { FeaturedCollections } from "@/components/sections/FeaturedCollections";
import { EducationFeature } from "@/components/sections/EducationFeature";
import { ProfessionalFeature } from "@/components/sections/ProfessionalFeature";
import { MeetShout } from "@/components/sections/MeetShout";
import { JournalGrid } from "@/components/sections/JournalGrid";
import { Community } from "@/components/sections/Community";
import { Newsletter } from "@/components/sections/Newsletter";
import { Footer } from "@/components/navigation/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ChoosePath />
        <BreedGrid />
        <FeaturedCollections />
        <EducationFeature />
        <ProfessionalFeature />
        <MeetShout />
        <JournalGrid />
        <Community />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
