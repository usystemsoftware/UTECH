import React from 'react'
import PageLayout from "@/custom/PageLayout";
import { TypographyMuted, TypographyH3 } from "@/custom/Typography";
import { FadeInWhenVisible } from "@/custom/FadeInWhenVisible";

const VideoTvPoster = ({ information }) => {
    return (
        <PageLayout className="my-16 py-16 grid grid-cols-1 sm:grid-cols-2 items-center space-y-10 bg-[url('/assets/industries/aviation/we-develop-elearning-background.jpg')] bg-cover bg-center bg-no-repeat">
            <div className="space-y-4">
                <TypographyH3 className="font-extrabold">
                    {information?.title}
                </TypographyH3>
                <TypographyMuted>
                    {information?.description}
                </TypographyMuted>
            </div>
            <FadeInWhenVisible delay={0.5}>
                <img
                    loading="lazy"
                    src={information?.src || "/assets/solutions/gis/custom-gis-software-solutions.png"}
                    alt="Portfolio"
                    className="w-96 mx-auto"
                />
            </FadeInWhenVisible>
        </PageLayout>
    )
}

export default VideoTvPoster
