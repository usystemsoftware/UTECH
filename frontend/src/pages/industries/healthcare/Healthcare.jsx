import HeroSection from "@/components/HeroSection";
import { Button } from "@/components/ui/Button";
import { FeaturesGrid } from "@/components/FeaturesGridCard";
import { FeaturesList } from "@/components/FeaturesList";
import PageLayout from "@/custom/PageLayout";
import {
    TypographyH2,
    Headline,
} from "@/custom/Typography";
import FaqSection from "@/custom/FaqSection";
import { FadeInWhenVisible, fadeUp } from "@/custom/FadeInWhenVisible";
import { TestimonialSection } from "@/components/TestimonialSection";

export default function Healthcare() {
    return (
        <>
            <HeroSection
                backgroundImage='/assets/industries/healthcare/hero.jpeg'
                title="CUSTOM HEALTHCARE SOFTWARE DEVELOPMENT COMPANY"
                description="Transforming Healthcare with Custom Solutions for Greater Efficiency and Patient Care"
                buttonText="Hire Helthcare Developers"
                buttonLink="#"
                imageFit="cover"
                overlayOpacity={0.6}
            />

            {/* Construction Software Services Overview */}
            {/* <PageLayout className="py-12">
                <Headline
                    title="FIND THE RIGHT HEALTHCARE SOFTWARE DEVELOPMENT"
                    description='We provide custom healthcare software development services in response to the evolving healthcare industry. Being a custom healthcare software development company, our goal is to improve efficiency and patient care at reduced cost and assist in healthcare management decisions.'
                />
                <FeaturesGrid
                    leftFeatures={ConstructionSoftwareLeftFeatures}
                    rightFeatures={ConstructionSoftwareRightFeatures}
                    centerImage="/assets/industries/healthcare/desktop-combo-healthcare.png"
                    fadeUp={fadeUp}
                    iconSize={38}
                />
            </PageLayout> */}


        </>
    )
}
