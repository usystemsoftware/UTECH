import { HeroSection } from "@/components/layout/HeroSection";
import OurIndustry from "@/components/layout/OurIndustry";
import OurServices from "@/components/layout/OurServices";
import WorkWithUs from "@/components/layout/WorkWithUs";
import OurProjects from "@/components/layout/OurProjects";
import OurPartners from "@/components/layout/OurPartners";

export default function MainLayout() {
  return (
    <>
      <HeroSection />
      <OurServices />
      <OurProjects />
      <OurIndustry />
      <OurPartners />
      <WorkWithUs />
    </>
  )
}
