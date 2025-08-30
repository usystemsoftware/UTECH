import HeroSection from "@/components/HeroSection";
import { motion } from "framer-motion";
import {
    Rocket,
    Leaf,
    Shield,
    Users,
    Brain,
    LineChart,
    Globe2,
    Sparkles,
    CheckCircle2,
    Eye,
    Heart,
    Calendar,
    Cpu,
    Lightbulb,
    ShieldCheck,
    Award,
    CheckCircle
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger, } from "@/components/ui/tabs";
import ContactUsButton from "@/custom/ContactUsButton";

export default function AboutPage() {
    return (
        <div className="relative bg-blue-50/50"> {/* Light blue background for the page */}
            <HeroSection
                backgroundImage="/banner/about.webp"
                title="ABOUT U TECHNOLOGY"
                description="At U Technology, we empower businesses with next-gen digital solutions. Our team of innovators, developers, and strategists work together to build scalable, user-centric products that drive growth and transformation."
                buttonText="LEARN MORE ABOUT US"
            />

            {/* Decorative gradient blur with stronger blue focus */}
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="mx-auto h-[480px] max-w-6xl blur-3xl opacity-50 bg-gradient-to-r from-blue-600/20 via-sky-500/20 to-indigo-600/20 rounded-b-[150px]" />
            </div>

            {/* WHAT WE STAND FOR */}
            <section id="values" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5">
                <div className="mb-14 text-center">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">What we stand for</h2>
                    <p className="text-gray-700 mt-4 max-w-3xl mx-auto text-lg">
                        Principles that shape how we build products, partner with clients, and grow our people.
                    </p>
                </div>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {[
                        {
                            icon: <Brain className="h-7 w-7 text-blue-600" />, title: "Practical AI",
                            desc: "AI when it matters, automation where it counts—always tied to business outcomes."
                        },
                        {
                            icon: <Shield className="h-7 w-7 text-blue-600" />, title: "Security-first",
                            desc: "Threat‑modeling and privacy by default. We bake in compliance from day one."
                        },
                        {
                            icon: <Users className="h-7 w-7 text-blue-600" />, title: "Partner mindset",
                            desc: "Transparent comms, predictable delivery, and teams that feel in‑house."
                        },
                        {
                            icon: <Leaf className="h-7 w-7 text-blue-600" />, title: "Sustainable tech",
                            desc: "Efficient architectures and green deployments to minimize cost and footprint."
                        },
                    ].map((v) => (
                        <Card key={v.title} className="rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
                            <CardHeader className="flex flex-col items-center text-center p-6">
                                <div className="rounded-full bg-blue-100 p-3 mb-4">{v.icon}</div>
                                <div>
                                    <CardTitle className="text-xl font-semibold text-gray-900">{v.title}</CardTitle>
                                    <CardDescription className="pt-2 text-gray-600">{v.desc}</CardDescription>
                                </div>
                            </CardHeader>
                        </Card>
                    ))}
                </div>
            </section>

            {/* COMPANY SNAPSHOT */}
            <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 bg-blue-50 rounded-xl my-10">
                <div className="mb-14 text-center">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">About Our Group</h2>
                    <p className="text-gray-700 mt-4 max-w-3xl mx-auto text-lg">
                        A quick glance at Umbarkar Technology India Pvt Ltd — who we are, what we do, and what drives us forward.
                    </p>
                </div>

                <Tabs defaultValue="overview" className="w-full">
                    {/* Tab Buttons */}
                    <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 rounded-full bg-blue-100 p-1.5 shadow-inner">
                        <TabsTrigger value="overview" className="flex items-center justify-center gap-2 rounded-full data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:shadow-md data-[state=active]:font-semibold transition-all">
                            <Globe2 className="w-4 h-4" /> Overview
                        </TabsTrigger>
                        <TabsTrigger value="mission" className="flex items-center justify-center gap-2 rounded-full data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:shadow-md data-[state=active]:font-semibold transition-all">
                            <Rocket className="w-4 h-4" /> Mission
                        </TabsTrigger>
                        <TabsTrigger value="vision" className="flex items-center justify-center gap-2 rounded-full data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:shadow-md data-[state=active]:font-semibold transition-all">
                            <Eye className="w-4 h-4" /> Vision
                        </TabsTrigger>
                        <TabsTrigger value="values" className="flex items-center justify-center gap-2 rounded-full data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:shadow-md data-[state=active]:font-semibold transition-all">
                            <Heart className="w-4 h-4" /> Values
                        </TabsTrigger>
                    </TabsList>

                    {/* Overview */}
                    <TabsContent value="overview" className="mt-10">
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            <div className="p-6 bg-white rounded-xl shadow-md text-center">
                                <Calendar className="mx-auto text-blue-600 h-8 w-8 mb-3" />
                                <h3 className="font-semibold text-gray-900">Founded</h3>
                                <p className="text-gray-600 text-sm mt-1">27th August 2020, Pimpri, Pune</p>
                            </div>
                            <div className="p-6 bg-white rounded-xl shadow-md text-center">
                                <CheckCircle className="mx-auto text-blue-600 h-8 w-8 mb-3" />
                                <h3 className="font-semibold text-gray-900">Status</h3>
                                <p className="text-gray-600 text-sm mt-1">Active Technology-Driven Company</p>
                            </div>
                            <div className="p-6 bg-white rounded-xl shadow-md text-center">
                                <Cpu className="mx-auto text-blue-600 h-8 w-8 mb-3" />
                                <h3 className="font-semibold text-gray-900">Industry</h3>
                                <p className="text-gray-600 text-sm mt-1">Computer & Related Activities</p>
                            </div>
                        </div>
                        <div className="mt-8 text-center max-w-3xl mx-auto">
                            <p className="text-lg text-gray-700 leading-relaxed">
                                With a commitment to <span className="font-semibold text-blue-700">innovation</span> and
                                <span className="font-semibold text-blue-700"> excellence</span>, we deliver scalable digital solutions
                                that empower businesses and communities globally.
                            </p>
                        </div>
                    </TabsContent>

                    {/* Mission */}
                    <TabsContent value="mission" className="mt-10">
                        <div className="bg-white p-8 rounded-2xl shadow-md text-center max-w-3xl mx-auto">
                            <p className="text-lg text-gray-700">
                                To build <span className="font-semibold text-blue-700">cutting-edge digital solutions</span>
                                that drive growth, efficiency, and positive impact across industries.
                            </p>
                        </div>
                    </TabsContent>

                    {/* Vision */}
                    <TabsContent value="vision" className="mt-10">
                        <div className="bg-white p-8 rounded-2xl shadow-md text-center max-w-3xl mx-auto">
                            <p className="text-lg text-gray-700">
                                To become a <span className="font-semibold text-blue-700">global leader in technology innovation</span>,
                                empowering enterprises with sustainable and future-ready solutions.
                            </p>
                        </div>
                    </TabsContent>

                    {/* Values */}
                    <TabsContent value="values" className="mt-10">
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 text-center">
                            {[
                                { icon: <Lightbulb className="mx-auto text-blue-600 h-8 w-8 mb-3" />, label: "Innovation", desc: "Always pushing boundaries with creativity and technology." },
                                { icon: <ShieldCheck className="mx-auto text-blue-600 h-8 w-8 mb-3" />, label: "Integrity", desc: "Committed to transparency, ethics, and trust." },
                                { icon: <Award className="mx-auto text-blue-600 h-8 w-8 mb-3" />, label: "Excellence", desc: "Delivering high-quality solutions that make an impact." },
                                { icon: <Users className="mx-auto text-blue-600 h-8 w-8 mb-3" />, label: "Collaboration", desc: "Working together with clients and communities." },
                            ].map((v) => (
                                <div key={v.label} className="p-6 rounded-2xl bg-white shadow-md hover:shadow-lg transition">
                                    {v.icon}
                                    <div className="text-lg font-semibold text-gray-900">{v.label}</div>
                                    <p className="text-gray-600 mt-2 text-sm">{v.desc}</p>
                                </div>
                            ))}
                        </div>
                    </TabsContent>
                </Tabs>
            </section>


            {/* CAPABILITIES TABS */}
            <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 bg-blue-50 rounded-xl my-3">
                <div className="mb-14 text-center">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Our Capabilities</h2>
                    <p className="text-gray-700 mt-4 max-w-3xl mx-auto text-lg">
                        Expertise across key technology domains to accelerate your innovation.
                    </p>
                </div>
                <Tabs defaultValue="ai" className="w-full">
                    <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 rounded-full bg-blue-100 p-1.5 shadow-inner">
                        <TabsTrigger value="ai" className="rounded-full data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:shadow-md data-[state=active]:font-semibold transition-all">AI & Automation</TabsTrigger>
                        <TabsTrigger value="web" className="rounded-full data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:shadow-md data-[state=active]:font-semibold transition-all">Web & Mobile</TabsTrigger>
                        <TabsTrigger value="cloud" className="rounded-full data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:shadow-md data-[state=active]:font-semibold transition-all">Cloud & DevOps</TabsTrigger>
                        <TabsTrigger value="data" className="rounded-full data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:shadow-md data-[state=active]:font-semibold transition-all">Data & Analytics</TabsTrigger>
                    </TabsList>
                    <TabsContent value="ai" className="mt-8">
                        <CapabilityRow
                            title="From idea to impact with AI"
                            points={[
                                "LLM-powered assistants and RAG systems",
                                "Process automation and workflow orchestration",
                                "Ethical, secure deployment and monitoring",
                                "Custom ML model development and integration",
                            ]}
                            icon={<Sparkles className="h-7 w-7 text-blue-600" />}
                        />
                    </TabsContent>
                    <TabsContent value="web" className="mt-8">
                        <CapabilityRow
                            title="Beautiful, performant web & mobile apps"
                            points={[
                                "Modern UX with accessibility at core",
                                "Next.js/React, RN/Expo, Node/Express",
                                "Testing, analytics, and CI baked in",
                                "Scalable microfrontend and microservice architectures",
                            ]}
                            icon={<Globe2 className="h-7 w-7 text-blue-600" />}
                        />
                    </TabsContent>
                    <TabsContent value="cloud" className="mt-8">
                        <CapabilityRow
                            title="Scale without surprises in the cloud"
                            points={[
                                "Kubernetes, serverless, containers for agility",
                                "Robust observability and cost optimization strategies",
                                "Secure pipelines and Infrastructure as Code (IaC)",
                                "Cloud migration and hybrid cloud solutions",
                            ]}
                            icon={<Rocket className="h-7 w-7 text-blue-600" />}
                        />
                    </TabsContent>
                    <TabsContent value="data" className="mt-8">
                        <CapabilityRow
                            title="Decisions backed by insightful data"
                            points={[
                                "Efficient ELT/ETL pipelines and data warehousing",
                                "Interactive dashboards, experiments, and BI reports",
                                "Advanced ML models for prediction and personalization",
                                "Real-time data streaming and processing",
                            ]}
                            icon={<LineChart className="h-7 w-7 text-blue-600" />}
                        />
                    </TabsContent>
                </Tabs>
            </section>

            {/* TIMELINE */}
            <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-1">
                <div className="mb-14 text-center">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Our Journey</h2>
                    <p className="text-gray-700 mt-4 max-w-3xl mx-auto text-lg">
                        Milestones that shaped who we are today.
                    </p>
                </div>

                <div className="relative">
                    <Separator className="absolute left-6 top-0 h-full w-1 bg-blue-200 hidden sm:block" />
                    <div className="space-y-10">
                        {[
                            {
                                year: "2010",
                                title: "Founded Arya Soft",
                                desc: "We started our journey in Mumbai with a small but passionate team, driven by innovation and client success."
                            },
                            {
                                year: "2015",
                                title: "Expansion in Mumbai",
                                desc: "Established stronger roots in Mumbai, building long-term partnerships and scaling operations."
                            },
                            {
                                year: "2020",
                                title: "Opened Singapore Office",
                                desc: "Marked our global presence by expanding to Singapore, strengthening international collaborations."
                            },
                            {
                                year: "2022",
                                title: "Rebranded as U Tech",
                                desc: "Renamed from Arya Soft to U Tech. Expanded offices in Mumbai, Singapore, and Pune with our main office in Pimpri, Pune."
                            },
                            {
                                year: "2023",
                                title: "AI Everywhere",
                                desc: "Integrated practical AI across products—assistants, search, insights, automation."
                            },
                            {
                                year: "2024–25",
                                title: "Global Delivery",
                                desc: "Scaling teams, partnerships, and platforms with a security-first posture."
                            }
                        ].map((t, idx) => (
                            <motion.div
                                key={t.year}
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: idx * 0.15 }}
                                className="grid grid-cols-1 gap-4 sm:grid-cols-[120px_1fr] items-center"
                            >
                                {/* Year + Timeline Dot */}
                                <div className="flex items-center gap-4 sm:justify-end">
                                    <div className="sm:hidden h-3 w-3 rounded-full bg-blue-600 ring-4 ring-blue-600/20 shrink-0" />
                                    <div className="text-lg font-bold text-blue-700">{t.year}</div>
                                    <div className="hidden sm:block h-4 w-4 rounded-full bg-blue-600 ring-4 ring-blue-600/20 shrink-0" />
                                </div>

                                {/* Card */}
                                <Card className="rounded-3xl shadow-lg bg-white p-6 hover:shadow-xl transition-shadow duration-300">
                                    <CardHeader className="p-0">
                                        <CardTitle className="text-xl font-semibold text-gray-900">{t.title}</CardTitle>
                                        <CardDescription className="pt-1 text-gray-700">{t.desc}</CardDescription>
                                    </CardHeader>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>



            {/* CLIENT QUOTES */}
            <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 bg-blue-50 rounded-xl my-5">
                <div className="mb-14 text-center">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">What clients say</h2>
                    <p className="text-gray-700 mt-4 max-w-3xl mx-auto text-lg">A few words from partners we've shipped with.</p>
                </div>
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {[
                        {
                            quote:
                                "U Tech felt like an extension of our team—fast iterations, clear communication, and real business impact.",
                            name: "Rohit Kumar", role: "Head of Product, Fintech",
                        },
                        {
                            quote:
                                "Their security-first approach gave us the confidence to scale. We shipped our MVP in 7 weeks.",
                            name: "Arun S.", role: "CTO, Healthtech",
                        },
                        {
                            quote:
                                "They helped us operationalize AI where it mattered—search, insights, and automation.",
                            name: "Meera D.", role: "Operations, E‑commerce",
                        },
                    ].map((q, i) => (
                        <Card key={i} className="rounded-3xl shadow-lg bg-white p-6 hover:shadow-xl transition-shadow duration-300">
                            <CardHeader className="p-0 mb-4">
                                <CardDescription className="text-lg leading-relaxed text-gray-700">“{q.quote}”</CardDescription>
                            </CardHeader>
                            <CardContent className="flex items-center gap-4 pt-0">
                                <Avatar className="h-14 w-14 border-2 border-blue-400 shadow-md">
                                    <AvatarImage src={`https://i.pravatar.cc/100?img=${i + 11}`} />
                                    <AvatarFallback className="bg-blue-200 text-blue-800 font-semibold">U</AvatarFallback>
                                </Avatar>
                                <div>
                                    <div className="text-base font-semibold text-gray-900">{q.name}</div>
                                    <div className="text-sm text-blue-600">{q.role}</div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            ---

            <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5">
                <div className="mb-14 text-center">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Leadership</h2>
                    <p className="text-gray-700 mt-4 max-w-3xl mx-auto text-lg">
                        Builders, designers, and problem-solvers who care about details and delivery.
                    </p>
                </div>

                <div className="flex justify-center items-center w-full">
                    {[
                        {
                            name: "Rajesh Umbarkar ",
                            role: "Founder & CEO",
                            img: "/assets/about/rajeshsir.jpg",
                        },
                    ].map((m, i) => (
                        <Card
                            key={i}
                            className="rounded-3xl shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 max-w-lg w-full"
                        >
                            <CardContent className="p-0">
                                {/* Image Wrapper */}
                                <div className="w-full h-[400px] flex items-center justify-center bg-gray-100 rounded-t-3xl overflow-hidden">
                                    <img
                                        src={m.img}
                                        alt={m.name}
                                        className="max-h-full max-w-full object-contain"
                                    />
                                </div>

                                {/* Text */}
                                <div className="p-8 text-center">
                                    <div className="font-semibold text-2xl text-gray-900">{m.name}</div>
                                    <div className="text-lg text-blue-700 mt-2">{m.role}</div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>


            ---

            {/* FAQ */}
            <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-7 bg-blue-50 rounded-xl my-5">
                <div className="mb-14 text-center">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">FAQs</h2>
                    <p className="text-gray-700 mt-4 max-w-3xl mx-auto text-lg">Common questions about partnering with U Tech.</p>
                </div>
                <Accordion type="single" collapsible className="rounded-3xl border border-blue-200 bg-white p-4 shadow-lg">
                    <AccordionItem value="item-1" className="border-b border-blue-100 last:border-b-0">
                        <AccordionTrigger className="text-left text-lg font-semibold text-blue-800 hover:text-blue-900 transition-colors py-4">How do projects usually start?</AccordionTrigger>
                        <AccordionContent className="text-gray-700 text-base pb-4">
                            We begin with a short discovery to align on outcomes, users, scope, and constraints. Then we propose a
                            lightweight plan with milestones and success metrics.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2" className="border-b border-blue-100 last:border-b-0">
                        <AccordionTrigger className="text-left text-lg font-semibold text-blue-800 hover:text-blue-900 transition-colors py-4">What does your delivery model look like?</AccordionTrigger>
                        <AccordionContent className="text-gray-700 text-base pb-4">
                            Cross‑functional squads (PM + Design + Eng) ship in weekly sprints with demos, async updates, and clear
                            release notes. You keep full ownership of code and infra.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3" className="last:border-b-0">
                        <AccordionTrigger className="text-left text-lg font-semibold text-blue-800 hover:text-blue-900 transition-colors py-4">Can you integrate with our existing stack?</AccordionTrigger>
                        <AccordionContent className="text-gray-700 text-base pb-4">
                            Yes. We work with modern JS/TS stacks (React/Next, Node, Express), cloud (Vercel, AWS, GCP), and common data
                            platforms. We'll adapt to your guardrails and security requirements.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </section>

            ---

            {/* CTA */}
            <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
                <Card className="rounded-[2.5rem] border-4 border-dashed border-blue-300 bg-blue-600 text-white shadow-2xl">
                    <CardContent className="grid gap-8 p-10 sm:grid-cols-[1fr_auto] sm:items-center">
                        <div>
                            <h3 className="text-3xl sm:text-4xl font-extrabold">Have a project in mind?</h3>
                            <p className="text-blue-100 mt-3 text-lg leading-relaxed">
                                Let’s scope it together and get your first release out in weeks—not months.
                            </p>
                        </div>
                        <ContactUsButton size="lg" className="rounded-full bg-white text-blue-700 hover:bg-blue-500 hover:text-white shadow-lg transition-all duration-300 transform hover:-translate-y-1" asChild variant="hover">
                            Get AI Powered Construction Solutions
                        </ContactUsButton>
                    </CardContent>
                </Card>
            </section>

            <footer className="pb-10" />
        </div>
    );
}

function CapabilityRow({ title, points, icon }) {
    return (
        <Card className="rounded-3xl shadow-xl bg-white p-6 hover:shadow-2xl transition-shadow duration-300 border-t-4 border-blue-500">
            <CardHeader className="flex flex-row items-start gap-4 p-0 mb-6">
                <div className="rounded-xl bg-blue-100 p-3 shrink-0 border border-blue-200">{icon}</div>
                <div>
                    <CardTitle className="text-2xl font-bold text-gray-900">{title}</CardTitle>
                    <CardDescription className="pt-1 text-gray-600 text-base">What we typically deliver</CardDescription>
                </div>
            </CardHeader>
            <CardContent className="grid gap-4 pt-0 sm:grid-cols-2 lg:grid-cols-3">
                {points.map((p) => (
                    <div key={p} className="flex items-start gap-3 text-base text-gray-700">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
                        <span>{p}</span>
                    </div>
                ))}
            </CardContent>
        </Card>
    );
}