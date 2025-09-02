import { HeroSection } from "@/components/layout/HeroSection";
import OurIndustry from "@/components/layout/OurIndustry";
import OurServices from "@/components/layout/OurServices";
import WorkWithUs from "@/components/layout/WorkWithUs";
import OurProjects from "@/components/layout/OurProjects";
import OurPartners from "@/components/layout/OurPartners";
import { HeroSection2 } from "@/components/layout/HeroSection2";

export default function MainLayout() {
  return (
    <>
      <HeroSection />
      {/* <HeroSection2 /> */}
      <OurServices />
      <OurProjects />
      <OurIndustry />
      <OurPartners />
      <WorkWithUs />
    </>
  )
}
