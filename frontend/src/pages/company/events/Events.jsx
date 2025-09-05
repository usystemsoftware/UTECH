import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import PageLayout from "@/custom/PageLayout";

import GaneshFestival from "./mahaprasad-ganeshji/GaneshFestival";
import { ChevronDown, ChevronUp } from 'lucide-react';

const eventComponents = [
    {
        id: 1,
        title: "We Have Launched a Website for the Ganapati Mahaprasad Event",
        date: "05-09-2025",
        component: GaneshFestival,
    },
];

export default function Events() {
    const [activeId, setActiveId] = useState(null);

    const handleClick = (id) => {
        setActiveId(activeId === id ? null : id);
    };

    return (
        <>
            <HeroSection
                backgroundImage="/banner/events-banner.avif"
                title="Our Events"
                description="Each year, Chetu participates in a variety of industry conferences. Join us at a location near you!"
            />

            <div className="py-12">
                <div className="space-y-4">
                    {eventComponents.map((event) => {
                        const ActiveComponent = event.component;
                        return (
                            <div key={event.id}>
                                {/* Dropdown Header */}
                                <PageLayout>
                                    <button
                                        onClick={() => handleClick(event.id)}
                                        className="w-full flex justify-between cursor-pointer items-center p-4 bg-secondary text-left text-lg font-semibold"
                                    >
                                        <div className="flex flex-col gap-2">
                                            {event?.title}
                                            <span className="text-sm text-gray-600">
                                                Date- {event?.date}
                                            </span>
                                        </div>
                                        <span className="text-xl">{activeId === event.id ? <ChevronUp /> : <ChevronDown />}</span>
                                    </button>
                                </PageLayout>

                                {/* Dropdown Content */}
                                {activeId === event.id && (
                                    <div className="py-10">
                                        <ActiveComponent />
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}
