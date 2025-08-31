// Home // landing page 
import HeroSection from "@/components/heroSection";
import FindRecipe from "@/components/findRecipe";
import BreadsSection from "@/components/breads";
import BreakFastSection from "@/components/breakfast";
import RecentRecipeSection from "@/components/recentRecipe";

export default function HomePage() {
  return (
    <>
      <HeroSection/>
      <FindRecipe/>
      <BreadsSection/>
      <BreakFastSection/>
      <RecentRecipeSection/>
    </>
  )
}
