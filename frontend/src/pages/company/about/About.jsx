import HeroSection from "@/components/HeroSection";
import Timeline from "@/custom/Timeline";
import {
    Headline,
    TypographyH4,
    TypographyMuted,
    TypographyH3
} from "@/custom/Typography";
import PageLayout from "@/custom/PageLayout";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import FaqSection from "@/custom/FaqSection";
import ContactUsButton from "@/custom/ContactUsButton";
import { CheckCircle2 } from "lucide-react";
import { IconRenderer } from "@/custom/IconRenderer";
import TestimonialsSection from "@/custom/TestimonialsSection";
import { Link } from 'react-router-dom'

import {
    heroData,
    valuesData,
    overviewCards,
    valuesList,
    capabilitiesTabs,
    timelineData,
    clientsTestimonials,
    leadership,
    employeeTestimonials,
    faqs,
    certifications,
    industries,
    awards,
    companyStats,
} from "./Data";

export default function AboutPage() {
    return (
        <>
            {/*  HERO SECTION */}
            <HeroSection
                backgroundImage={heroData.backgroundImage}
                title={heroData.title}
                description={heroData.description}
                buttonText={heroData.buttonText}
            />

            {/*  WHAT WE STAND FOR */}
            <PageLayout id="values" className="py-12 space-y-10">
                <Headline
                    title="What we stand for"
                    description="Principles that shape how we build products, partner with clients, and grow our people."
                />
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {valuesData.map((v) => (
                        <InfoCard key={v.title} title={v.title} desc={v.desc} icon={v.icon} />
                    ))}
                </div>
            </PageLayout>

            {/*  COMPANY SNAPSHOT */}
            <section className="py-16 bg-secondary">
                <PageLayout className="space-y-12">
                    <Headline
                        title="About Our Group"
                        description="A quick glance at Umbarkar Technology India Pvt Ltd — who we are, what we do, and what drives us forward."
                    />

                    {/*  Overview */}
                    <div>
                        <TypographyH4 className="text-center mb-6">Overview</TypographyH4>
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {overviewCards.map((item) => (
                                <InfoCard key={item.title} title={item.title} desc={item.desc} icon={item.icon} />
                            ))}
                        </div>
                        <div className="mt-8 text-center max-w-3xl mx-auto">
                            <p className="md:text-lg text-sm text-gray-700 dark:text-gray-200 leading-relaxed">
                                With a commitment to <span className="font-semibold text-blue-700">innovation</span> and
                                <span className="font-semibold text-blue-700"> excellence</span>, we deliver scalable digital solutions
                                that empower businesses and communities globally.
                            </p>
                        </div>
                    </div>

                    {/*  Mission & Vision */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <InfoCard title="Mission" desc="To build cutting-edge digital solutions that drive growth, efficiency, and positive impact across industries." icon="Goal" />
                        <InfoCard title="Vision" desc="To become a global leader in technology innovation, empowering enterprises with sustainable and future-ready solutions." icon="Earth" />
                    </div>

                    {/*  Core Values */}
                    <div>
                        <TypographyH4 className="text-center mb-6">Core Values</TypographyH4>
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                            {valuesList.map((v) => (
                                <InfoCard key={v.label} title={v.label} desc={v.desc} icon={v.icon} />
                            ))}
                        </div>
                    </div>
                </PageLayout>
            </section>

            {/*  CERTIFICATIONS */}
            <PageLayout className="py-16 space-y-10">
                <Headline title="Certifications & Compliance" description="We meet global standards to ensure security and trust." />
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {certifications.map((c) => (
                        <InfoCard key={c.title} title={c.title} desc={c.desc} icon={c.icon} />
                    ))}
                </div>
            </PageLayout>

            {/*  INDUSTRIES */}
            <section className="bg-secondary py-16">
                <PageLayout className="space-y-10 text-center">
                    <Headline title="Industries We Serve" description="Expertise across multiple sectors to deliver industry-focused solutions." />
                    <div className="grid gap-8 md:grid-cols-2">
                        {industries.map((c) => (
                            <CapabilityRow key={c.value} title={c.title} points={c.points} icon={c.icon} />
                        ))}
                    </div>
                    <Link to="/services/custom-software" className="rounded-full border border-orange-400 hover:bg-orange-500">
                        See More.....
                    </Link>
                </PageLayout>
            </section>

            {/*  AWARDS */}
            <section className="bg-seconday py-16">
                <PageLayout className="space-y-10">
                    <Headline title="Awards & Recognition" description="Proud moments that reflect our dedication to excellence." />
                    <div className="flex justify-center flex-wrap gap-8">
                        {awards.map((a) => (
                            <InfoCard key={a.title} title={a.title} desc={a.desc} icon={a.icon} />
                        ))}
                    </div>
                </PageLayout>
            </section>

            {/*  COMPANY STATS */}
            <PageLayout className="py-12 space-y-10">
                <Headline title="Our Impact in Numbers" description="Delivering measurable success across the globe." />
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-center">
                    {companyStats.map((s) => (
                        <div key={s.label} className="p-6 bg-card shadow-md border border-gray-100 rounded-lg">
                            <h3 className="text-4xl font-bold text-primary">{s.value}</h3>
                            <p className="text-gray-700 mt-2">{s.label}</p>
                        </div>
                    ))}
                </div>
            </PageLayout>

            {/*  CAPABILITIES */}
            <PageLayout className="py-16 space-y-10">
                <Headline
                    title="Our Capabilities"
                    description="Expertise across key technology domains to accelerate your innovation."
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {capabilitiesTabs.map((c) => (
                        <CapabilityRow key={c.value} title={c.title} points={c.points} icon={c.icon} />
                    ))}
                </div>
            </PageLayout>

            {/*  TIMELINE */}
            <PageLayout className="py-10 space-y-10">
                <Headline
                    title="Our Journey"
                    description="Milestones that shaped who we are today."
                />
                <Timeline data={timelineData} />
            </PageLayout>

            {/*  CLIENT TESTIMONIALS */}
            <section className="py-16 bg-secondary space-y-10">
                <TestimonialsSection
                    title="Client Testimonials"
                    description="We are trusted by small to mid-sized organizations, Fortune 5000 companies, and major brands to advance their technology objectives."
                    data={clientsTestimonials}
                />

                {/*  EMPLOYEE TESTIMONIALS */}
                <TestimonialsSection
                    title="Employee Testimonials"
                    description="Our people are at the heart of everything we do. Here's what they have to say about working with us."
                    data={employeeTestimonials}
                />
            </section>

            {/*  LEADERSHIP */}
            <PageLayout className="py-16 space-y-10">
                <Headline
                    title="Leadership"
                    description="Builders, designers, and problem-solvers who care about details and delivery."
                />
                <div className="flex flex-wrap justify-center gap-8">
                    {leadership.map((m, i) => (
                        <Card key={i} className="text-center p-0">
                            <div className="border m-6 w-[200px] h-[200px] bg-blue-100 rounded-full flex items-center justify-center overflow-hidden">
                                <img src={m.img} alt={m.name} className="w-full h-full object-contain" />
                            </div>
                            <div className="border-t-2 space-y-2 p-3">
                                <TypographyH4>{m.name}</TypographyH4>
                                <div className="text-base font-semibold text-blue-700">{m.role}</div>
                            </div>
                        </Card>
                    ))}
                </div>
            </PageLayout>

            {/*  FAQ */}
            <div className="py-8">
                <FaqSection faqs={faqs} title="FAQ's" />
            </div>

            {/*  CTA */}
            <PageLayout className="py-16">
                <Card className="rounded-sm border-4 border-dashed border-white bg-[#009698] text-white shadow-2xl">
                    <CardContent className="grid gap-8 p-10 sm:grid-cols-[1fr_auto] sm:items-center">
                        <div>
                            <TypographyH3>Have a project in mind?</TypographyH3>
                            <TypographyMuted className="mt-3 leading-relaxed">
                                Let’s scope it together and get your first release out in weeks—not months.
                            </TypographyMuted>
                        </div>
                        <ContactUsButton variant="hover" className="border-2 uppercase hover:bg-orange-500 border-orange-500 rounded-full">
                            Get AI Powered Construction Solutions
                        </ContactUsButton>
                    </CardContent>
                </Card>
            </PageLayout>
        </>
    );
}

/*  Reusable Components */
function InfoCard({ title, desc, icon }) {
    return (
        <Card className="hover:shadow-2xl cursor-pointer transition-shadow duration-300 border-t-4 border-primary p-6 text-center">
            <div className="flex flex-col items-center gap-4">
                <div className="rounded-full bg-blue-100 p-3 border border-blue-200 text-3xl">
                    <IconRenderer name={icon} strokeWidth={2} size={26} className="text-primary" />
                </div>
                <TypographyH4>{title}</TypographyH4>
                <CardDescription className="text-gray-600 dark:text-gray-300">{desc}</CardDescription>
            </div>
        </Card>
    );
}

function CapabilityRow({ title, points, icon }) {
    return (
        <Card className="hover:shadow-2xl text-start cursor-pointer transition-shadow duration-300 border-t-4 border-primary p-6">
            <div className="flex flex-row items-start gap-4 mb-6">
                <div className="rounded-full bg-blue-100 p-3 shrink-0 border border-blue-200">
                    <IconRenderer name={icon} strokeWidth={2} size={26} className="text-primary" />
                </div>
                <div>
                    <TypographyH4>{title}</TypographyH4>
                    <CardDescription className="pt-1 text-base">What we deliver</CardDescription>
                </div>
            </div>
            <CardContent className="grid gap-4 pt-0">
                {points.map((p) => (
                    <div key={p} className="flex items-start gap-3 text-base dark:text-gray-300 text-gray-700">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" />
                        <span className="text-sm">{p}</span>
                    </div>
                ))}
            </CardContent>
        </Card>
    );
}