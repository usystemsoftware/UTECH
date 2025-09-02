import HeroSection from "@/components/HeroSection";
import PageLayout from "@/custom/PageLayout";
import { timelineData } from './Data'
import Timeline from "@/custom/Timeline";
import {
    Headline,
} from "@/custom/Typography";

export default function History() {
    return (
        <>
            <HeroSection
                backgroundImage="/banner/history-banner.jpg"
                title="Our History"
                description="Pushing the limits of software development since 2017"
            />

            <PageLayout className="py-16">
                <Headline
                    title="History"
                />
            </PageLayout>

            <PageLayout className="py-16">
                <Timeline data={timelineData} />
            </PageLayout>

        </>
    )
}
