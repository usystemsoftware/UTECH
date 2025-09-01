import HeroSection from "@/components/HeroSection";
import ContactUsButton from "@/custom/ContactUsButton";
import PageLayout from "@/custom/PageLayout";
import { IconRenderer } from "@/custom/IconRenderer";
import FaqSection from "@/custom/FaqSection";
import { FeaturesListOpposite } from "@/components/FeaturesList";
import { Headline, TypographyMuted } from "@/custom/Typography";
import { Link } from "react-router-dom";
import {
    aiCollaborationData,
    partnerBenefits,
    partnerFaqs,
    partnersLinks,
    strategicPartners
} from "./Data";

export default function Affiliations() {
    return (
        <>

            <HeroSection
                backgroundImage="/banner/affiliations-banner.jpeg"
                title="PARTNERSHIPS AND AFFILIATIONS"
                description="Leveraging our deep industry and technical expertise to deliver our network of strategic partnerships exceptional results."
                buttonText="HIRE STRATEGIC PARTNERS"
                bottombgcolor="bg-[#0072BC]"
                ContactUsButtonText="HIRE STRATEGIC PARTNERS"
                bottomLinks={partnersLinks}
            />

            <PageLayout className="space-y-10 py-16">
                <Headline
                    title="Our Strategic Partners"
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {strategicPartners.map((partner, index) => (
                        <Link
                            to={partner?.link}
                            key={index}
                            className="flex flex-col gap-2 items-center hover:shadow-2xl p-4"
                        >
                            <img
                                src={partner.img}
                                alt={partner.title}
                                className="w-32 object-contain"
                                loading="lazy"
                            />
                            <TypographyMuted>
                                {partner.description}
                            </TypographyMuted>
                        </Link>
                    ))}
                </div>
            </PageLayout>

            <section className="bg-secondary py-14">
                <PageLayout className="space-y-10">
                    <Headline
                        title="AI Solutions for U Tech Partner Products"
                        description="Our AI experts enhance and customize AI-driven solutions integrated with partner platforms to modernize industries, drive revenue streams, and augment personnel to elevate workflow processes and performance."
                    />
                    <FeaturesListOpposite
                        features={aiCollaborationData}
                    />
                </PageLayout>
            </section>

            <PageLayout className="space-y-10 py-12 text-center">
                <Headline
                    title="Join Our Partner Network"
                    description="U Tech’s custom partnerships and affiliations give you access to world-class technology, custom AI integration solutions and industry experts to help you provide superior service to your customers while providing additional revenue to you."
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-4xl mx-auto gap-6">
                    {
                        partnerBenefits?.map((option) => (
                            <div className="flex gap-3 items-center text-start">
                                <img
                                    src={option?.icon}
                                    className="text-primary w-9 sm:w-12"
                                    loading="lazy"
                                />
                                <TypographyMuted className="text-start">
                                    {option?.text}
                                </TypographyMuted>
                            </div>
                        ))
                    }
                </div>

                <ContactUsButton variant="hover">
                    BECOME A PARTNER
                </ContactUsButton>

            </PageLayout>

            <section className="bg-secondary py-10 space-y-10 text-center">

                <Headline
                    title="Block of Hours Support Services"
                    description="U Tech offers technical and non-technical support services for our partner products. Services are sold per 100 Block of Hours with reduced rates contingent on hours purchased. Our lowest rates are attained when utilizing our full-time, dedicated resource(s) for setup, administration, customizations, integrations, and much more."
                />
                <ContactUsButton variant="hover">
                    GET AFFILIATE SUPPORT
                </ContactUsButton>

            </section>

            {/* === FAQ SECTION === */}
            <div className="py-16">
                <FaqSection faqs={partnerFaqs} title="FAQ About Our Partners and Affiliates" />
            </div>

        </>
    )
}
