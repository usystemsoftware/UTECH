"use client";

import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

// Reusable content component
const ITDummyContent = ({ title }) => {
    return (
        <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-xl font-sans max-w-3xl mx-auto">
                <span className="font-bold text-neutral-700 dark:text-neutral-200">{title}</span>{" "}
                — Stay ahead in the tech world with cutting-edge innovations. Learn about new trends,
                tools, and breakthroughs in the IT industry, from cloud infrastructure to cybersecurity
                and AI-powered solutions.
            </p>
            <img
                src="https://assets.aceternity.com/macbook.png"
                alt="Tech Illustration"
                height="500"
                width="500"
                className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain mt-6"
            />
        </div>
    );
};

// Top 5 most demanding services in card format
const ITServiceData = [
    {
        category: "Application Development",
        title: "Modern Web & Mobile App Solutions",
        src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80",
        content: (
            <ITDummyContent title="Scalable Application Development Services" />
        ),
    },
    {
        category: "DevOps",
        title: "Speed Up Your Delivery Pipeline",
        src: "https://images.unsplash.com/photo-1581090700227-1e8a26be0b9b?q=80",
        content: (
            <ITDummyContent title="DevOps Automation for Scalable Infrastructure" />
        ),
    },
    {
        category: "Digital Transformation",
        title: "Future-Proof Your Business Systems",
        src: "https://images.unsplash.com/photo-1624381528895-1b81b9f2d263?q=80",
        content: (
            <ITDummyContent title="Digital Transformation for Enterprises" />
        ),
    },
    {
        category: "Software Security",
        title: "Secure Your Digital Products",
        src: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80",
        content: (
            <ITDummyContent title="End-to-End Software Security Solutions" />
        ),
    },
    {
        category: "QA Testing",
        title: "Deliver Quality, Not Bugs",
        src: "https://images.unsplash.com/photo-1592609931095-54a2168ae893?q=80",
        content: (
            <ITDummyContent title="QA Testing for Flawless User Experience" />
        ),
    },
];

// Carousel wrapper component
export function AppleCardsCarousel() {
    const cards = ITServiceData.map((card, index) => (
        <Card key={card.src} card={card} index={index} />
    ));

    return (
        <div className="w-full h-full py-2 px-4 md:px-16">
            <Carousel items={cards} />
        </div>
    );
}
