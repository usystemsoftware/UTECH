import HeroSection from "@/components/HeroSection";
import PageLayout from "@/custom/PageLayout";
import { FadeInWhenVisible, fadeUp } from "@/custom/FadeInWhenVisible";
import { TestimonialSection } from "@/components/TestimonialSection";
import { FeaturesList } from "@/components/FeaturesList";
import { Button } from "@/components/ui/button";
import { Headline, TypographyMuted, TypographyH3 } from "@/custom/Typography";
import { dataIntegrationServices } from "./Data";

export default function SystemsIntegration() {
    return (
        <>

            <HeroSection
                backgroundImage="/banner/systems-integration.jpeg"
                title="Software Integration Services"
                buttonText="HIRE INTERGRATION DEVELOPERS"
                buttonLink="#"
                imageFit="cover"
            />


            <PageLayout className="py-12 space-y-10 text-center">
                <Headline
                    title="Specialized Software Integration Services"
                    description="When a company adopts a new technology or business process, they face many challenges between their current applications and systems and the complicated software implementation process. Our industry-specific software engineers handle all of your challenging integration & implementation obstacles, including architectural design, testing, debugging, and execution."
                />

                <FeaturesList features={dataIntegrationServices} fadeUp={fadeUp} grid iconAlign="horizontal" />

                <Button variant="hover">
                    GET CUSTOM INTEGRATION SERVICES
                </Button>

            </PageLayout>

        </>
    )
}
