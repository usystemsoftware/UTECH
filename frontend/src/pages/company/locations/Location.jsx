import HeroSection from "@/components/HeroSection";
import {
    Headline,
    TypographyH3
} from "@/custom/Typography";
import { Button } from '@/components/ui/button'
import PageLayout from "@/custom/PageLayout";

export default function Location() {
    return (
        <>

            <HeroSection
                backgroundImage="/banner/location-banner.jpeg"
                title="U Technology Locations "
            />

            <PageLayout className="py-16">
                <TypographyH3 className="text-primary">
                    Global Solutions, Local Services
                </TypographyH3>
            </PageLayout>

        </>
    )
}
