import { FeaturesList } from "@/components/FeaturesList";
import FaqSection from "@/custom/FaqSection";
import HeroSection from "@/components/HeroSection";
import PageLayout from "@/custom/PageLayout";
import { FadeInWhenVisible, fadeUp } from "@/custom/FadeInWhenVisible";
import { Button } from "@/components/ui/button";
import { Headline } from "@/custom/Typography";
import { bpoServices } from "./Data";

export default function BPO() {
    return (
        <>
            {/* === HERO SECTION === */}
            <HeroSection
                backgroundImage='/assets/services/bpo/hero.jpg'
                title="Business Process Outsourcing Services"
                buttonText="HIRE RELIABLE BPO RESOURCE"
                buttonLink="#"
                imageFit="cover"
                overlayOpacity={0.2}
            />

            <PageLayout className="py-16">
                <Headline
                    title='Streamline and automate your non-core processes with our BPO and digital transformation services.'
                    description='Chetu provides front-office and back-office support services to ensure your business runs smoothly as you focus on the core aspects of your company.'
                />


            </PageLayout>


            <PageLayout className='space-y-10 py-16 text-center'>
                <Headline
                    title='One-Stop Shop'
                    description='Our specialized industry-specific teams provide skill, intelligence, and efficiency to drive value and growth. With our innovative resources, we will help you increase operational flexibility.'
                />

                <div className="grid grid-cols-1 md:grid-cols-2">
                    <FadeInWhenVisible delay={0.5}>
                        <img
                            loading="lazy"
                            src="/assets/services/bpo/one-stop-shop-1.jpg"
                            alt="Portfolio"
                            className="w-135"
                        />
                    </FadeInWhenVisible>
                    <FeaturesList features={bpoServices} fadeUp={fadeUp} />
                </div>

                <FadeInWhenVisible>
                    <Button variant='hover'>
                        HIRE BPO ONE-STOP SHOP
                    </Button>
                </FadeInWhenVisible>
            </PageLayout>

            <PageLayout className="py-16">





            </PageLayout>

        </>
    )
}
