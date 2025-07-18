import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { TypographyH1, TypographyP } from "@/custom/Typography";
import PageLayout from "@/custom/PageLayout";
import Breadcrumbs from "./Breadcrumbs";

const defaultFadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

export default function HeroSection({
    backgroundImage,
    title,
    description,
    buttonText,
    buttonLink = "#",
    animationVariants = defaultFadeUp,
    imageFit = "cover",
    overlayOpacity = 0.4,
}) {
    return (
        <>
            <motion.section
                className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={animationVariants}
            >
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
                    className="absolute inset-0 bg-black z-10"
                    style={{ opacity: overlayOpacity }}
                ></div>

                {/* Foreground Content */}
                <div className="relative z-20 max-w-3xl mx-auto text-center px-4 space-y-6 text-white">
                    <TypographyH1>{title}</TypographyH1>
                    <TypographyP >{description}</TypographyP>

                    <Link
                        to={buttonLink}
                        className="inline-block border-2 border-primary hover:bg-primary hover:text-secondary transition-colors duration-300 p-3 rounded-full"
                    >
                        {buttonText}
                    </Link>
                </div>
            </motion.section>
            <PageLayout className="mt-4">
                <Breadcrumbs />
            </PageLayout>
        </>
    );
}
