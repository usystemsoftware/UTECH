import HeroSection from "@/components/HeroSection";
import { Button } from "@/components/ui/button";
import { FeaturesGrid } from "@/components/FeaturesGridCard";
import { FeaturesList } from "@/components/FeaturesList";
import PageLayout from "@/custom/PageLayout";
import {
    TypographyH2,
    Headline,
} from "@/custom/Typography";
import FaqSection from "@/custom/FaqSection";
import { FadeInWhenVisible, fadeUp } from "@/custom/FadeInWhenVisible";
import { TestimonialSection } from "@/components/TestimonialSection";
import {
    dicomFeatures,
    digitalHelthSolutions,
    eRxFeatures,
    healthcareAIFeatures,
    healthcareExtraFeatures,
    healthcareSoftwareFeatures,
    hieFeatures,
    limsFeatures,
    pharmacyFeatures,
    telemedicineFeatures
} from "./Data";

export default function Healthcare() {
    return (
        <>
            <HeroSection
                backgroundImage='/assets/industries/healthcare/hero.jpeg'
                title="CUSTOM HEALTHCARE SOFTWARE DEVELOPMENT COMPANY"
                description="Transforming Healthcare with Custom Solutions for Greater Efficiency and Patient Care"
                buttonText="Hire Helthcare Developers"
                buttonLink="#"
                imageFit="cover"
                overlayOpacity={0.6}
            />

            <PageLayout className="py-12">
                <Headline
                    title="FIND THE RIGHT HEALTHCARE SOFTWARE DEVELOPMENT"
                    description='We provide custom healthcare software development services in response to the evolving healthcare industry. Being a custom healthcare software development company, our goal is to improve efficiency and patient care at reduced cost and assist in healthcare management decisions.'
                />
                <FeaturesGrid
                    leftFeatures={healthcareSoftwareFeatures.slice(0, 3)}
                    rightFeatures={healthcareSoftwareFeatures.slice(3, 6)}
                    centerImage="/assets/industries/healthcare/desktop-combo-healthcare.png"
                    fadeUp={fadeUp}
                    iconSize={38}
                />
            </PageLayout>

            <section className="bg-secondary py-16">
                <PageLayout className="space-y-16">
                    <Headline
                        title='AI-Powered Custom Healthcare Software Development Solutions'
                        description='Our expert-level software developers leverage the power and versatility of Artificial Intelligence (AI) to design and implement innovative solutions to meet the healthcare industry’s evolving needs. Our transformative solutions enable healthcare providers and institutions to modernize medicine by deploying cutting-edge resources designed to improve workflows, processes, and optimize patient engagement and care.'
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                        <FeaturesList features={healthcareAIFeatures.slice(0, 2)} fadeUp={fadeUp} />
                        <FeaturesList features={healthcareAIFeatures.slice(2, 4)} fadeUp={fadeUp} />
                        <FeaturesList features={healthcareAIFeatures.slice(4, 6)} fadeUp={fadeUp} />
                    </div>
                </PageLayout>
            </section>

            <PageLayout className='space-y-8 py-12'>
                <Headline
                    title='Custom Digital Health Platform Solutions'
                    description='With Digital Health Platforms, medical professionals can take a different approach to their research, health management, and patient care, leading to significant improvements in efficiency and patient outcomes.'
                />

                <div className="flex flex-col md:flex-row justify-baseline gap-8 md:gap-26">
                    {/* Left Features List */}
                    <FeaturesList features={digitalHelthSolutions.slice(0, 2)} fadeUp={fadeUp} />

                    {/* Center Animation */}
                    <FadeInWhenVisible className="md:block hidden">
                        <img
                            loading="lazy"
                            src="/assets/industries/healthcare/industry-leadin-telehealth.png"
                            alt="Mobile Analytics App"
                            className="w-64"
                        />
                    </FadeInWhenVisible>

                    {/* Right Features List */}
                    <FeaturesList features={digitalHelthSolutions.slice(2, 4)} fadeUp={fadeUp} />
                </div>
            </PageLayout>

            <section className="bg-secondary py-12">
                <PageLayout className='space-y-10 text-center'>
                    <Headline
                        title='Electronic Health Record / Medical Record App Development'
                        description='We engineer custom web, desktop or mobile apps that promote enhanced interoperability, streamline clinical workflows, and improve doctor-patient communications. Healthcare IT software implementation is useful for tracking critical information in the medical system.'
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <FadeInWhenVisible delay={0.5}>
                            <img
                                loading="lazy"
                                src="/assets/industries/healthcare/electronic-medical-records-with-laptop.png"
                                alt="Portfolio"
                                className="w-120"
                            />
                        </FadeInWhenVisible>
                        <FeaturesList features={healthcareExtraFeatures} fadeUp={fadeUp} />
                    </div>

                    <FadeInWhenVisible>
                        <Button variant='hover'>
                            Cunsultation for EHR
                        </Button>
                    </FadeInWhenVisible>
                </PageLayout>
            </section>

            <PageLayout className='space-y-8 py-12 text-center'>
                <Headline
                    title='Industry-Leading Telehealth & Telemedicine Platforms'
                    description='We build custom telehealth apps to deliver remote health services, education, and training for improved efficiency and quality of care.'
                />

                <div className="flex flex-col md:flex-row justify-baseline gap-8 md:gap-26">
                    {/* Left Features List */}
                    <FeaturesList features={telemedicineFeatures.slice(0, 2)} fadeUp={fadeUp} />

                    {/* Center Animation */}
                    <FadeInWhenVisible className="md:block hidden">
                        <img
                            loading="lazy"
                            src="/assets/industries/healthcare/cellphone.png"
                            alt="Mobile Analytics App"
                            className="w-64"
                        />
                    </FadeInWhenVisible>

                    {/* Right Features List */}
                    <FeaturesList features={telemedicineFeatures.slice(2, 4)} fadeUp={fadeUp} />
                </div>
                <FadeInWhenVisible>
                    <Button variant="hover">
                        Develop Your Telehelth Platform
                    </Button>
                </FadeInWhenVisible>
            </PageLayout>

            <section className="bg-secondary py-12">
                <PageLayout className='space-y-10 text-center'>
                    <Headline
                        title='Health Information Exchange (HIE) App Development'
                        description='Our engineers build feature-rich and powerful HIE platforms to streamline information exchanges between doctors, patients, and other health practitioners.'
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <FeaturesList features={hieFeatures} fadeUp={fadeUp} />
                        <FadeInWhenVisible delay={0.5}>
                            <img
                                loading="lazy"
                                src="/assets/industries/healthcare/telehealth-phone.png"
                                alt="Portfolio"
                                className="w-48 mx-auto"
                            />
                        </FadeInWhenVisible>
                    </div>
                </PageLayout>
            </section>

            <PageLayout className="py-16 space-y-10 text-center">
                <Headline
                    title='PACS & DICOM Viewer platform'
                    description="We deliver end-to-end PACS/DICOM platform designed for secure data and image sharing, archiving, viewing, and more."
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <FadeInWhenVisible delay={0.5}>
                        <img
                            loading="lazy"
                            src="/assets/industries/construction/building-information-modeling-solutions-cut.png"
                            alt="Portfolio"
                            className="w-135"
                        />
                    </FadeInWhenVisible>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <FeaturesList fadeUp={fadeUp} features={dicomFeatures.slice(0, 2)} />
                        <FeaturesList fadeUp={fadeUp} features={dicomFeatures.slice(2, 4)} />
                    </div>
                </div>
                <FadeInWhenVisible>
                    <Button variant='hover'>
                        START YOUR PACS/DICOM PROJECT TODAY
                    </Button>
                </FadeInWhenVisible>
            </PageLayout>

            <section className="bg-secondary py-12">
                <PageLayout className='space-y-10 text-center'>
                    <Headline
                        title='Management System (LIMS) Applications'
                        description='We create scalable and flexible LIMS applications to track laboratory storage & inventory, protocol executions, data integrity & security.'
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <FeaturesList features={limsFeatures} fadeUp={fadeUp} />
                        <FadeInWhenVisible delay={0.5}>
                            <img
                                loading="lazy"
                                src="/assets/industries/healthcare/hl7-emr-ehr-software-integrations.png"
                                alt="Portfolio"
                                className="w-96 mx-auto"
                            />
                        </FadeInWhenVisible>
                    </div>
                    <FadeInWhenVisible>
                        <Button variant='hover'>
                            DEVELOP LIMS PLATFORM SOLUTIONS
                        </Button>
                    </FadeInWhenVisible>
                </PageLayout>
            </section>

            <PageLayout className="py-16 space-y-10 text-center">
                <Headline
                    title='Pharmacy Management System'
                    description="We enhance existing pharmacy management systems with features that promote workflow automation, fully integrated payment processing, and real-time communication."
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <FeaturesList fadeUp={fadeUp} features={pharmacyFeatures.slice(0, 2)} />
                        <FeaturesList fadeUp={fadeUp} features={pharmacyFeatures.slice(2, 4)} />
                    </div>
                    <FadeInWhenVisible delay={0.5}>
                        <img
                            loading="lazy"
                            src="/assets/industries/healthcare/cell-phone-animation.gif"
                            alt="Portfolio"
                            className="w-48 mx-auto"
                        />
                    </FadeInWhenVisible>6
                </div>
                <FadeInWhenVisible>
                    <Button variant='hover'>
                        GET PHARMACY POS SOLUTIONS
                    </Button>
                </FadeInWhenVisible>
            </PageLayout>

            <section className="bg-secondary py-12">
                <PageLayout className='space-y-10 text-center'>
                    <Headline
                        title='Electronic Prescription (eRx) Software Solutions'
                        description='We engineer advanced eRx application solutions to automate clinical decision support, optimize visibility, and streamline prescription processes.'
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <FadeInWhenVisible delay={0.5}>
                            <img
                                loading="lazy"
                                src="/assets/industries/healthcare/laptop.png"
                                alt="Portfolio"
                                className="w-110 mx-auto"
                            />
                        </FadeInWhenVisible>
                        <FeaturesList features={eRxFeatures} fadeUp={fadeUp} />
                    </div>
                    <FadeInWhenVisible>
                        <Button variant='hover'>
                            GET ERX SOFTWARE SOLUTIONS
                        </Button>
                    </FadeInWhenVisible>
                </PageLayout>
            </section>
        </>
    )
}
