import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
    Headline,
    TypographyH1,
    TypographySmall,
    TypographyMuted
} from "@/custom/Typography";
import PageLayout from "@/custom/PageLayout";
import { galleryImages, guests, highlights, schedule } from "./Data";
import GaneshInvitation from "./GaneshInvitation";

// Countdown Timer Component
export const Countdown = ({ targetDate }) => {
    const [timeLeft, setTimeLeft] = useState({
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
    });

    useEffect(() => {
        const updateCountdown = () => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance < 0) {
                setTimeLeft({ days: "00", hours: "00", minutes: "00", seconds: "00" });
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            setTimeLeft({
                days: String(days).padStart(2, "0"),
                hours: String(hours).padStart(2, "0"),
                minutes: String(minutes).padStart(2, "0"),
                seconds: String(seconds).padStart(2, "0"),
            });
        };

        updateCountdown();
        const interval = setInterval(updateCountdown, 1000);
        return () => clearInterval(interval);
    }, [targetDate]);

    return (
        <div className="flex justify-center gap-4 sm:gap-6 mt-10">
            <FlipUnit label="Days" value={timeLeft.days} />
            <FlipUnit label="Hours" value={timeLeft.hours} />
            <FlipUnit label="Minutes" value={timeLeft.minutes} />
            <FlipUnit label="Seconds" value={timeLeft.seconds} />
        </div>
    );
};

const FlipUnit = ({ label, value }) => {
    return (
        <div className="flex flex-col items-center">
            <div className="relative w-18 h-18 sm:w-22 text-black dark:text-white sm:h-20 bg-secondary rounded-lg shadow-lg overflow-hidden perspective">
                <div className="absolute inset-0 flex items-center justify-center text-2xl sm:text-4xl font-bold animate-flip">
                    {value}
                </div>
            </div>
            <span className="mt-2 font-medium">{label}</span>
        </div>
    );
};

export default function Event() {

    return (
        <>
            {/* ✅ Hero Section */}
            <GaneshInvitation />

            {/* ✅ Guests */}
            <PageLayout section className="py-12 space-y-10" >
                <Headline
                    title="Our Special Guests"
                />
                {/* <div className="grid md:grid-cols-3 gap-8">
                    {guests.map((guest, index) => (
                        <motion.div
                            key={index}
                            className="bg-gray-50 rounded-xl cursor-pointer shadow-lg p-6 text-center hover:shadow-2xl transition duration-300"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                        >
                            <img
                                src={guest.img}
                                alt={guest.name}
                                loading="lazy"
                                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-orange-500"
                            />
                            <h3 className="text-xl font-semibold">{guest.name}</h3>
                            <p className="text-gray-500 mb-3">{guest.title}</p>
                            <p className="text-gray-600 text-sm mb-4">{guest.bio}</p>
                            <div className="flex justify-center gap-3">
                                <a href={guest.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">LinkedIn</a>
                                <a href={guest.twitter} target="_blank" rel="noopener noreferrer" className="text-sky-500 hover:underline">Twitter</a>
                            </div>
                        </motion.div>
                    ))}
                </div> */}
                <motion.div
                    className="bg-gradient-to-br from-orange-100 via-white to-orange-50 rounded-xl shadow-xl p-8 text-center border-2 border-orange-400 relative space-y-6"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: guests.length * 0.2 }}
                >
                    {/* VIP Badge */}
                    <div className="absolute top-4 right-4 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                        VIP
                    </div>

                    {/* Invitation Heading */}
                    <h3 className="text-3xl font-extrabold text-orange-600">You're Invited!</h3>

                    {/* Description */}
                    <p className="text-gray-700 text-lg">
                        Join us for an exclusive event with our special guests.
                    </p>

                    {/* Event Details */}
                    <div className="text-gray-600 text-sm leading-relaxed">
                        <p>
                            <span className="font-semibold">Date:</span> 4th Sept, 2025
                        </p>
                        <p>
                            <span className="font-semibold">Venue:</span> Umbarakar Technology Pvt Ltd,<br />
                            Office No.02, 15, Zeroboyz Chowk, Nehru Nagar,<br />
                            Pimpri-Chinchwad, Pune, Maharashtra - 411018
                        </p>
                        <p>
                            <span className="font-semibold">Google Map:</span>{' '}
                            <a
                                href="https://maps.app.goo.gl/mm4M6eu5xpjmj4NW8"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 underline hover:text-blue-800"
                            >
                                View Location
                            </a>
                        </p>
                    </div>
                </motion.div>
            </PageLayout>

            {/* ✅ Event Details */}
            <section className="bg-secondary py-12">
                <PageLayout className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                    <img
                        src="/assets/company/events/7.jpg"
                        alt="bappa"
                        loading="lazy"
                        className="mx-auto md:h-110"
                    />
                    <div className="space-y-10 text-start">
                        <TypographyH1>
                            Event Details
                        </TypographyH1>
                        <ul class="space-y-3 text-gray-700 dark:text-slate-200 text-base">
                            <li><strong>Date:</strong> September 4, 2025</li>
                            <li><strong>Time:</strong> 10:00 AM onwards</li>
                            <li><strong>Special Guests:</strong> VIP Invitees</li>
                            <li><strong>Dress Code:</strong> Traditional Attire</li>
                            <li><strong>Theme:</strong> Eco-friendly Ganesh Utsav</li>
                            <li><strong>Activities:</strong> U Technology Opening with New Product, Pooja, Cultural Programs, Modak Prasad</li>
                            <li><strong>Prasad:</strong> Authentic Modaks & Sweets</li>
                            <li><strong>Contact Person:</strong> +91 9270033002 (Event Coordinator)</li>
                            <li><strong>Parking:</strong> Available at Basement & Near Zeroboyz Chowk</li>
                        </ul>
                    </div>
                </PageLayout>
            </section>

            {/* ✅ Highlights & Schedule */}
            <section section className="bg-seccondary py-16 space-y-10" >
                <Headline
                    title="Event Highlights & Cultural Program Schedule"
                />
                <PageLayout className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">

                    <ul className="grid md:grid-cols-2 gap-4 md:gap-8 text-gray-700">
                        {highlights.map((item, index) => (
                            <li key={index} className="bg-orange-50 p-4 rounded-lg shadow-sm flex items-center gap-3">
                                <TypographyMuted className="text-orange-600 text-sm">✔</TypographyMuted>
                                {item}
                            </li>
                        ))}
                    </ul>

                    <div>
                        {schedule.map((item, index) => (
                            <div key={index} className="flex items-center py-3 gap-4 border-b text-lg">
                                <TypographySmall className="font-semibold">{item.time}</TypographySmall>
                                - <TypographySmall className="text-start text-base">{item.event}</TypographySmall>
                            </div>
                        ))}
                    </div>
                </PageLayout>
            </section>

            {/* ✅ Gallery */}
            < section id="gallery" className="py-12 bg-secondary space-y-10" >
                <Headline
                    title="Event Gallary..."
                />
                <PageLayout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {galleryImages.map((img, index) => (
                        <motion.div
                            key={index}
                            className="overflow-hidden shadow-lg"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <img
                                src={img}
                                alt={`Gallery ${index + 1}`}
                                loading="lazy"
                                className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
                            />
                        </motion.div>
                    ))}
                </PageLayout>
            </ section>

            {/* ✅ Contact & Map */}
            < PageLayout className="py-12 text-center" >
                <Headline
                    title="Visit Us at Our Venue"
                    decription="Umbarakar Technology Pvt Ltd, Office No.02,15, Zeroboyz Chowk, Nehru Nagar, Pimpri-Chinchwad, Pune, Maharashtra - 411018"
                />
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1890.3433210926873!2d73.81623548850015!3d18.633158987240353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9c95e95487f%3A0xb716badcdf9a8761!2sUC%20Services%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1756537110930!5m2!1sen!2sin" width="600"
                    height="450"
                    allowfullscreen=""
                    loading="lazy"
                    className="w-full h-72 border"
                    referrerpolicy="no-referrer-when-downgrade"
                >
                </iframe>
            </ PageLayout>
        </>
    );
}
