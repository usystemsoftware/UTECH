import HeroSection from "@/components/HeroSection";
import PageLayout from "@/custom/PageLayout";
import { TypographyH4 } from "@/custom/Typography";
import { Link } from "react-router-dom";
import { Navlinks } from "@/data/Navlinks";
import { ChevronRight } from 'lucide-react';

export default function Sitemap() {
    return (
        <>
            {/* Hero Section */}
            <HeroSection
                backgroundImage="/banner/privacy-banner.jpeg"
                title="Sitemap"
            />

            <PageLayout className="py-12">
                <TypographyH4 className="mb-6">HOME</TypographyH4>
                <div className="space-y-10">
                    {Navlinks.map((section, index) => (
                        <div key={index}>
                            {/* Section Title */}
                            <TypographyH4 className="uppercase mb-4">
                                {section.title}
                            </TypographyH4>

                            {/* Links in 4-column grid */}
                            {section.items.length > 0 && (
                                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                                    {section.items.map((link, i) => (
                                        <li key={i}>
                                            <Link
                                                to={link.href}
                                                className="text-gray-600 flex items-center gap-1 text-sm hover:text-primary transition"
                                            >
                                                <ChevronRight size={15} /> {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
            </PageLayout>
        </>
    );
}
