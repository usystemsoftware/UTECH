import { useEffect, useState } from "react";
import { Phone, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { TypographyLead, TypographyH1 } from "@/custom/Typography";
import PageLayout from "@/custom/PageLayout";
import { FadeInWhenVisible } from "@/custom/FadeInWhenVisible";
import { motion, AnimatePresence } from "framer-motion";
// import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const slides = [
    { type: "hero" },
    {
        image: "/banner/bgposter.png",
    },
];

export const HeroSection2 = () => {
    const [current, setCurrent] = useState(0);

    // Auto slide every 4s
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full overflow-hidden min-h-[70vh] sm:min-h-[100vh]">
            <AnimatePresence initial={false}>
                {slides.map(
                    (slide, index) =>
                        index === current && (
                            <motion.div
                                key={index}
                                className="absolute inset-0 w-full h-full"
                                initial={{ x: "100%" }} // enter from right
                                animate={{ x: 0 }} // center
                                exit={{ x: "-100%" }} // exit to left
                                transition={{ duration: 1.2, ease: "easeInOut" }} // slow smooth slide
                            >
                                {slide.type === "hero" ? (
                                    <div
                                        className="relative min-h-[70vh] sm:min-h-[100vh] bg-cover bg-center bg-no-repeat"
                                        style={{ backgroundImage: 'url("/banner/hero.jpg")' }}
                                    >
                                        <div className="absolute inset-0 bg-black/50 z-0" />
                                        <PageLayout className="relative z-10 flex items-center min-h-[70vh] sm:min-h-[100vh] justify-center pt-20 sm:pt-14">
                                            <div className="grid sm:grid-cols-2 items-center gap-10">
                                                <div className="space-y-8 text-white">
                                                    <FadeInWhenVisible delay={0.2}>
                                                        <TypographyH1 className="tracking-tighter md:text-2xl xl:text-4xl text-white">
                                                            Drive Innovation with a World-Class
                                                            <span className="block text-primary">
                                                                Software Development Company
                                                            </span>
                                                        </TypographyH1>
                                                    </FadeInWhenVisible>

                                                    <FadeInWhenVisible delay={0.3}>
                                                        <TypographyLead className="text-white">
                                                            U Tech Systems is a global services and Custom
                                                            Software Solutions & Support Services for Every
                                                            Industry and Enterprise Modernization to help
                                                            enterprises accelerate their Software Development
                                                            journey.
                                                        </TypographyLead>
                                                    </FadeInWhenVisible>

                                                    <FadeInWhenVisible delay={0.4}>
                                                        <div className="grid grid-cols-2 gap-4">
                                                            <Link to="/contact-us">
                                                                <Button className="w-full 2xl:py-4">
                                                                    Contact Us <Phone />
                                                                </Button>
                                                            </Link>
                                                            <Link to="/book-call">
                                                                <Button
                                                                    variant="outline"
                                                                    className="w-full 2xl:py-4 text-black"
                                                                >
                                                                    Book Call <Video />
                                                                </Button>
                                                            </Link>
                                                        </div>
                                                    </FadeInWhenVisible>
                                                </div>

                                                <FadeInWhenVisible
                                                    delay={0.5}
                                                    className="sm:block hidden"
                                                >
                                                    <div className="w-full flex justify-center">
                                                        <img
                                                            loading="lazy"
                                                            src="/small-logo.png"
                                                            alt="U Logo"
                                                            className="w-[70%] sm:w-[70%] md:w-[60%] lg:w-[50%] xl:w-[60%] max-h-[65vh] object-contain transition-transform duration-300 hover:scale-105"
                                                        />
                                                    </div>
                                                </FadeInWhenVisible>
                                            </div>
                                        </PageLayout>
                                    </div>
                                ) : (
                                    // ✅ Other slides only image

                                    <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-br from-yellow-50 via-white to-rose-50 p-0 m-0">
                                        <div className="w-full h-full">
                                            <div className="relative w-full h-full bg-white shadow-2xl overflow-hidden border border-gray-100 rounded-3xl">
                                                {/* === Hanging Samais (Desktop / Large Devices Only) === */}
                                                <div className="hidden lg:block">
                                                    <img
                                                        src="/banner/samai.png"
                                                        alt="Samai Lamp"
                                                        className="absolute top-0 right-4 lg:right-20 xl:right-80 h-[30vh] xl:h-[34vh] animate-swing origin-top z-50"
                                                    />
                                                    <img
                                                        src="/banner/samai.png"
                                                        alt="Samai Lamp"
                                                        className="absolute top-0 right-12 lg:right-40 xl:right-[26rem] h-[35vh] xl:h-[40vh] animate-swing origin-top z-50"
                                                    />
                                                </div>

                                                {/* === Main Content Layout === */}
                                                <div className="flex flex-col lg:flex-row w-full h-full">
                                                    {/* === Mobile: Ganpati Image on Top === */}
                                                    <div className="lg:hidden w-full h-[50vh] sm:h-[60vh] flex items-center justify-center p-4">
                                                        <img
                                                            src="/banner/ganesh.png"
                                                            alt="Lord Ganesha"
                                                            className="h-full object-contain z-10 rounded-xl shadow-lg border-2 border-amber-100"
                                                        />
                                                    </div>

                                                    {/* === Left Content Card === */}
                                                    <div className="lg:w-2/3 w-full flex items-center justify-center p-6 sm:p-8 md:p-12 lg:p-16 relative">
                                                        {/* Background Diya Animation (hide on mobile) */}
                                                        <div className="absolute bottom-6 right-4 opacity-70 pointer-events-none hidden sm:block lg:block">
                                                            <DotLottieReact
                                                                src="https://lottie.host/2ab24c3e-0d46-4e7e-ade7-8cedc16d92b5/qgtLycirBy.lottie"
                                                                loop
                                                                autoplay
                                                                style={{ width: 160, height: 160 }}
                                                            />
                                                        </div>

                                                        {/* Hero Card */}
                                                        <div className="w-full h-full flex flex-col justify-center bg-gradient-to-br from-white via-amber-50 to-rose-50 shadow-2xl rounded-3xl border border-amber-100 overflow-hidden px-6 py-8 md:px-12 md:py-16">
                                                            {/* Header */}
                                                            <div className="flex items-center gap-3 sm:gap-4 mb-4">
                                                                <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full bg-amber-100 border border-amber-200 shadow-sm">
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        className="w-7 h-7 sm:w-8 sm:h-8 text-amber-600"
                                                                        viewBox="0 0 24 24"
                                                                        fill="currentColor"
                                                                    >
                                                                        <path d="M12 2C9.243 2 7 4.243 7 7c0 1.657.672 3.157 1.757 4.243L12 16l3.243-4.757A5.98 5.98 0 0 0 17 7c0-2.757-2.243-5-5-5z" />
                                                                        <path d="M5 20c0-3.866 3.134-7 7-7s7 3.134 7 7H5z" />
                                                                    </svg>
                                                                </div>
                                                                <div>
                                                                    <h3 className="text-xl sm:text-3xl font-bold leading-tight text-rose-700">
                                                                        Ganesh Chaturthi & Website Launch
                                                                    </h3>
                                                                    <p className="text-xs sm:text-sm text-gray-500">
                                                                        You are cordially invited
                                                                    </p>
                                                                </div>
                                                            </div>

                                                            {/* Invitation Text */}
                                                            <div className="mt-4 text-gray-700 space-y-3 text-sm sm:text-base">
                                                                {/* Desktop: Full Info */}
                                                                <p className="hidden lg:block text-lg">
                                                                    With the blessings of{" "}
                                                                    <span className="font-semibold text-amber-700">
                                                                        Lord Ganesha
                                                                    </span>
                                                                    , we warmly invite you to celebrate Ganesh
                                                                    Chaturthi along with the inauguration of our
                                                                    new website. Join us for devotion,
                                                                    festivities, and{" "}
                                                                    <span className="font-semibold text-amber-700">
                                                                        Maha Prasad
                                                                    </span>
                                                                    .
                                                                </p>

                                                                {/* Mobile: Only Essential Info */}
                                                                <p className="block lg:hidden text-base font-medium">
                                                                    Join us for Ganesh Chaturthi & Website Launch
                                                                    with Maha Prasad.
                                                                </p>

                                                                {/* Event Details (Desktop only) */}
                                                                <div className="hidden lg:flex flex-col sm:flex-row sm:items-center sm:gap-12 gap-4 mt-4">
                                                                    <div className="bg-white rounded-xl shadow-md p-4 border border-amber-100 hover:scale-105 transition-transform w-full sm:w-auto">
                                                                        <p className="text-xs text-gray-500 uppercase tracking-wide">
                                                                            📍 Where
                                                                        </p>
                                                                        <p className="font-semibold text-gray-800 mt-1">
                                                                            Community Hall
                                                                        </p>
                                                                        <p className="text-sm text-gray-600">
                                                                            Main Street, Your City
                                                                        </p>
                                                                    </div>
                                                                    <div className="bg-white rounded-xl shadow-md p-4 border border-amber-100 hover:scale-105 transition-transform w-full sm:w-auto">
                                                                        <p className="text-xs text-gray-500 uppercase tracking-wide">
                                                                            🎉 Event
                                                                        </p>
                                                                        <p className="font-semibold text-gray-800 mt-1">
                                                                            Website Launch & Maha Prasad
                                                                        </p>
                                                                        <p className="text-sm text-gray-600">
                                                                            Special offerings and blessings
                                                                        </p>
                                                                    </div>
                                                                </div>

                                                                {/* Hosted By */}
                                                                <p className="mt-4 text-sm sm:text-base text-gray-600">
                                                                    Hosted by:{" "}
                                                                    <span className="font-semibold text-rose-700">
                                                                        U Technology
                                                                    </span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* === Desktop / Large Ganesh Section === */}
                                                    <div className="hidden lg:flex lg:w-1/3 h-full items-center justify-center p-6">
                                                        <div
                                                            className="w-full h-full rounded-xl overflow-hidden shadow-lg border-2 border-amber-100 bg-white relative flex flex-col items-center"
                                                            style={{
                                                                backgroundImage:
                                                                    "url('/banner/background.png')",
                                                                backgroundSize: "cover",
                                                                backgroundPosition: "center",
                                                            }}
                                                        >
                                                            <div className="flex-1 flex items-center justify-center">
                                                                <img
                                                                    src="/banner/ganesh.png"
                                                                    alt="Lord Ganesha"
                                                                    className="max-h-[50%] md:max-h-[75%] object-contain z-10 mt-10"
                                                                />
                                                            </div>
                                                            <div className="p-3 bg-gradient-to-t from-white/80 to-transparent absolute bottom-0 left-0 right-0 z-20">
                                                                <h4 className="text-sm sm:text-base md:text-lg font-semibold text-amber-800">
                                                                    Blessings of Lord Ganesha
                                                                </h4>
                                                                <p className="text-xs sm:text-sm text-gray-500 mt-1">
                                                                    May the occasion bring prosperity and success.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* === Swing Animation Styles === */}
                                            <style>{`
      @keyframes swing {
        0% { transform: rotate(6deg); }
        50% { transform: rotate(-6deg); }
        100% { transform: rotate(6deg); }
      }
      .animate-swing {
        animation: swing 4s ease-in-out infinite;
      }
    `}</style>
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        )
                )}
            </AnimatePresence>

            {/* Dots Indicator */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
                {slides.map((_, i) => (
                    <div
                        key={i}
                        className={`w-3 h-3 rounded-full transition-all ${i === current ? "bg-primary scale-110" : "bg-white/50"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};
