import HeroSection from "@/components/HeroSection";
import {
    Headline,
    TypographyH3,
    TypographyH4,
    TypographySmall
} from "@/custom/Typography";
import { Separator } from '@/components/ui/separator'
import PageLayout from "@/custom/PageLayout";

export default function Location() {
    return (
        <>
            <HeroSection
                backgroundImage="/banner/location-banner.jpeg"
                title="U Technology Locations "
            />

            <TypographyH3 className="text-primary pt-10 text-center">
                Global Solutions, Local Services
            </TypographyH3>

            <PageLayout className="py-12 space-y-10 flex justify-between md:flex-row flex-col gap-6">

                <div className="space-y-4">
                    <div className="space-y-6">
                        <TypographyH4 className="text-primary mb-8">
                            Asia
                        </TypographyH4>
                        <div className="flex items-center gap-4 max-w-sm">
                            <img
                                src="/assets/company/location/pune.png"
                                alt="pune"
                                loading="lazy"
                                className="w-15 h-15 rounded-full"
                            />
                            <TypographySmall>
                                Pune, India<br />
                                A-02, Sector-15<br />
                                Zeroboyz Chowk, Nehru Nagar, Pimpri-Pune, - 411018
                            </TypographySmall>
                        </div>
                        <div className="flex items-center gap-4 max-w-sm">
                            <img
                                src="/assets/company/location/mumbai.jpeg"
                                alt="Mumbai"
                                loading="lazy"
                                className="w-15 h-15 rounded-full"
                            />
                            <TypographySmall>
                                Mumbai, India<br />
                                A-206, Sector-63<br />
                                Anderi (E) Mumbai- 400068
                            </TypographySmall>
                        </div>
                    </div>

                    <Separator />

                    <div className="space-y-6">
                        <TypographyH4 className="text-primary">
                            East Region
                        </TypographyH4>
                        <div className="flex items-center gap-4 max-w-sm">
                            <img
                                src="/assets/company/location/singapore.jpeg"
                                alt="pune"
                                loading="lazy"
                                className="w-15 h-15 rounded-full"
                            />
                            <TypographySmall>
                                Singapore, India<br />
                                A-208, Sector-22<br />
                                Singapore
                            </TypographySmall>
                        </div>
                    </div>
                </div>

                <div className="w-full space-y-8">
                    <TypographyH3 className="text-primary">
                        Pune Location
                    </TypographyH3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1890.3433210926873!2d73.81623548850015!3d18.633158987240353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9c95e95487f%3A0xb716badcdf9a8761!2sUC%20Services%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1756537110930!5m2!1sen!2sin" width="100%"
                        height="450"
                        allowfullscreen=""
                        loading="lazy"
                        className="w-full h-72 border"
                        referrerpolicy="no-referrer-when-downgrade"
                    >
                    </iframe>
                </div>

            </PageLayout>

        </>
    )
}
