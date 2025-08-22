import HeroSection from "@/components/HeroSection";
import PageLayout from "@/custom/PageLayout";
import { FadeInWhenVisible } from "@/custom/FadeInWhenVisible";
import { FeaturesList, FeaturesListOpposite } from "@/components/FeaturesList";
import ContactUsButton from "@/custom/ContactUsButton";
import { Headline, TypographyH3, TypographyMuted } from "@/custom/Typography";
import FaqSection from "@/custom/FaqSection";
import {
    cybersecurityAccessDeveloper,
    cybersecurityAccessSolutions,
    cybersecurityAISolutions,
    cybersecurityAttackPreventionSolutions,
    cybersecurityComplianceManagementSolutions,
    cybersecurityComplianceServices,
    cybersecurityDataProtectionSolutions,
    cybersecurityGovernanceSolutions,
    cybersecurityPartners,
    cybersecurityTestingSolutions,
    cybersecurityThreatSolutions,
    faqs
} from "./Data";

export default function SoftwareSecurity() {
    return (
        <>

            <HeroSection
                backgroundImage="/banner/software-security.jpeg"
                title="SECURITY COMPLIANCE SOFTWARE DEVELOPMENT"
                buttonText="Get Cybersecurity Software"
                buttonLink="#"
                imageFit="cover"
            />

            <PageLayout className="space-y-10 py-16">
                <Headline
                    title="Hire Developers With Security Compliance Software Development Experiences"
                    description="Our security compliance software developers have many years of hands-on experience designing, engineering, and developing advanced security and compliance solutions for healthcare, accounting, payment/banking, and other industries."
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6">
                    <div className="space-y-3">
                        <TypographyH3 className="font-extrabold">
                            Unique Threat Prevention Strategies
                        </TypographyH3>
                        <TypographyMuted>
                            Our AI-driven solutions are designed to detect threats using advanced machine learning algorithms and deliver IOA/IOC and HIPS/HIDS capabilities to detect concealed malware.
                        </TypographyMuted>
                        <FeaturesList
                            features={cybersecurityAccessDeveloper}
                            iconAlign="horizontal"
                        />
                    </div>
                    <FadeInWhenVisible>
                        <img
                            loading="lazy"
                            src="/assets/services/software-security/security-compliance-software-development.png"
                            alt="Migration Planning Dashboard"
                            className="mx-auto w-145"
                        />
                    </FadeInWhenVisible>
                </div>
            </PageLayout>

            <section className="bg-secondary py-16 text-center">
                <PageLayout className="space-y-10">
                    <Headline
                        title="AI-Powered Cybersecurity Compliance Software"
                        description="Our AI-powered cybersecurity compliance solutions harness the capabilities of Artificial Intelligence to fortify cybersecurity systems, providing advanced detection, prevention, and response mechanisms. AI automation ensures organizations adhere to ever-changing regulatory standards and requirements."
                    />

                    <FeaturesListOpposite
                        features={cybersecurityAISolutions}
                    />

                    <ContactUsButton variant="hover">
                        GET AI-POWERED CYBERSECURITY COMPLIANCE SOLUTIONS
                    </ContactUsButton>

                </PageLayout>
            </section>

            <PageLayout className="py-12 text-center space-y-10">
                <Headline
                    title="Security Compliance Software Development"
                    description="We develop IT compliance software that meets PCI, HIPAA, HITECH, GDPR, FISMA, ISO 27000, SEC, GLBA, FINRA, NYDFS, NIST 800-171, and other security compliance standards."
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6">
                    <FadeInWhenVisible>
                        <img
                            loading="lazy"
                            src="/assets/services/software-security/hire-developers-with-cybersecurity-compliance-software-development-experience.png"
                            alt="Migration Planning Dashboard"
                            className="mx-auto w-145"
                        />
                    </FadeInWhenVisible>
                    <FeaturesList
                        features={cybersecurityComplianceManagementSolutions}
                        iconAlign="horizontal"
                    />
                </div>
            </PageLayout>

            <section className="bg-secondary py-12 text-center">
                <PageLayout className="space-y-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 items-center">
                        <FeaturesList
                            features={cybersecurityGovernanceSolutions.slice(0, 2)}
                            center
                        />
                        <FadeInWhenVisible className="md:block hidden">
                            <img
                                loading="lazy"
                                src="/assets/services/software-security/identity-management-software-development-services-phone.gif"
                                alt="Mobile Analytics App"
                                className="mx-auto w-48"
                            />
                        </FadeInWhenVisible>
                        <FeaturesList
                            features={cybersecurityGovernanceSolutions.slice(2, 4)}
                            center
                        />
                    </div>
                    <ContactUsButton variant="hover">
                        HIRE CYBERSECURITY SOFTWARE DEVELOPERS
                    </ContactUsButton>
                </PageLayout>
            </section>

            <PageLayout className="py-12 text-center space-y-10">
                <Headline
                    title="Advanced Firewall & Antivirus Protection For Business Networks"
                    description="U Tech develops comprehensive firewall & antivirus solutions that defend your systems against the latest malware, spyware, ransomware, viruses, and other attacks."
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6">
                    <FeaturesList
                        features={cybersecurityAttackPreventionSolutions}
                        iconAlign="horizontal"
                    />
                    <FadeInWhenVisible>
                        <img
                            loading="lazy"
                            src="/assets/services/software-security/advanced-threat-protection-for-business-networks.png"
                            alt="Migration Planning Dashboard"
                            className="mx-auto w-145"
                        />
                    </FadeInWhenVisible>
                </div>
            </PageLayout>

            <section className="bg-secondary py-16">
                <PageLayout className="space-y-10">
                    <Headline
                        title="Data Backup & Recovery Services"
                        description="U Tech offers fast, easy, and reliable data backup and recovery services for a wide variety of enterprise infrastructures, ensuring robust, scalable, and vigorously maintained data safeguards."
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6">
                        <FadeInWhenVisible>
                            <img
                                loading="lazy"
                                src="/assets/services/software-security/unique-threat-prevention-strategies.png"
                                alt="Migration Planning Dashboard"
                                className="mx-auto w-135"
                            />
                        </FadeInWhenVisible>
                        <FeaturesList
                            features={cybersecurityDataProtectionSolutions}
                            iconAlign="horizontal"
                        />
                    </div>
                </PageLayout>
            </section>

            <PageLayout className="py-12 text-center space-y-10">
                <Headline
                    title="Remote Workforce Network Security Protection"
                    description="U Tech implements high-level security features for organizations with networks that require remote accessibility, ensuring the safety and integrity of company data from anywhere around the globe."
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6">
                    <FeaturesList
                        features={cybersecurityAccessSolutions}
                        iconAlign="horizontal"
                    />
                    <FadeInWhenVisible>
                        <img
                            loading="lazy"
                            src="/assets/services/software-security/remote-workforce-network-security-protection.png"
                            alt="Migration Planning Dashboard"
                            className="mx-auto w-145"
                        />
                    </FadeInWhenVisible>
                </div>
            </PageLayout>

            <section className="bg-secondary py-16">
                <PageLayout className="space-y-10">
                    <Headline
                        title="Custom Cybersecurity Software Solutions"
                        description="We enhance your existing cybersecurity solutions by integrating customizable features, functions, and capabilities for enhanced usability, interoperability, and flexibility."
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6">
                        <div className="space-y-3">
                            <TypographyH3 className="font-extrabold">
                                Compliance Audit Solutions
                            </TypographyH3>
                            <TypographyMuted>
                                Learn how our security and compliance monitoring provides a full 360-degree view of IT risk management and incident response tactics to eliminate cyber threats.
                            </TypographyMuted>
                            <FeaturesList
                                features={cybersecurityThreatSolutions}
                                iconAlign="horizontal"
                            />
                        </div>
                        <FadeInWhenVisible>
                            <img
                                loading="lazy"
                                src="/assets/services/software-security/hire-cybersecurity-software-developers.png"
                                alt="Migration Planning Dashboard"
                                className="mx-auto w-42 md:w-52"
                            />
                        </FadeInWhenVisible>
                    </div>
                </PageLayout>
            </section>

            <PageLayout className="py-12 text-center space-y-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6">
                    <FadeInWhenVisible>
                        <img
                            loading="lazy"
                            src="/assets/services/software-security/remote-and-reliable.png"
                            alt="Migration Planning Dashboard"
                            className="mx-auto w-145"
                        />
                    </FadeInWhenVisible>
                    <FeaturesList
                        features={cybersecurityTestingSolutions}
                        iconAlign="horizontal"
                    />
                </div>
                <ContactUsButton variant="hover">
                    GET CYBERSECURITY SOFTWARE SOLUTIONS
                </ContactUsButton>
            </PageLayout>

            <section className="bg-secondary py-16">
                <PageLayout className="space-y-10">
                    <Headline
                        title="Support Services for Security Compliance Software"
                        description="Our dedicated support services team continuously monitors all resources to eliminate threats and ensure optimal performance of all software resources, providing an all-encompassing approach aligning with your project vision."
                    />

                    <FeaturesListOpposite
                        features={cybersecurityComplianceServices}
                    />

                </PageLayout>
            </section>

            <PageLayout className="py-16 space-y-10">
                <Headline
                    title="Compliance Software Third-Party Integrations"
                    description="We integrate with industry-leading cybersecurity compliance software APIs to align your security, protect against threats, and deliver success-driven results."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
                    <FadeInWhenVisible>
                        <img
                            loading="lazy"
                            src="/assets/services/software-security/get-cybersecurity-software-solutions-01.png"
                            alt="Migration Planning Dashboard"
                            className="mx-auto w-86 md:w-135"
                        />
                    </FadeInWhenVisible>
                    <FeaturesList
                        features={cybersecurityPartners}
                        center
                        grid
                    />
                </div>
            </PageLayout>


            {/* === FAQ SECTION === */}
            <div className="py-16">
                <FaqSection faqs={faqs} title="FAQ's" />
            </div>

        </>
    )
}
