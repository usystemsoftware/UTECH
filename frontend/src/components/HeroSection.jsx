import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { TypographyH1, TypographyP } from "@/custom/Typography";
import PageLayout from "@/custom/PageLayout";
import Breadcrumbs from "./Breadcrumbs";
import { FadeInWhenVisible, fadeUp } from "@/custom/FadeInWhenVisible";

export default function HeroSection({
    backgroundImage,
    title,
    description,
    buttonText,
    buttonLink = "#",
    animationVariants = fadeUp,
    imageFit = "cover",
    overlayOpacity = 100,
}) {
    return (
        <>
            <section className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden">
                {/* Background Image */}
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: `url(${backgroundImage})`,
                        backgroundSize: imageFit,
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}
                />

                {/* Dark Overlay */}
                <div
                    className={`absolute inset-0 bg-black z-10`}
                    style={{ opacity: overlayOpacity }}
                ></div>

                {/* Foreground Content */}
                <FadeInWhenVisible
                    className="relative z-20 max-w-6xl mx-auto text-center px-4 space-y-6 text-white"
                    variants={fadeUp}
                >
                    <TypographyH1>{title}</TypographyH1>
                    <TypographyP>{description}</TypographyP>
                    <Link
                        to={buttonLink}
                        className="inline-block border-2 border-primary text-sm hover:bg-primary hover:text-secondary transition-colors duration-300 py-2 px-6 rounded-full"
                    >
                        {buttonText}
                    </Link>
                </FadeInWhenVisible>
            </section>
            <PageLayout className="mt-4 dark:border-t-2 pt-4">
                <Breadcrumbs />
            </PageLayout>
        </>
    );
}
