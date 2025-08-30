import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
    Headline,
    TypographyH3,
} from "@/custom/Typography";

// Countdown Timer Component
const Countdown = ({ targetDate }) => {
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
        <div className="flex justify-center gap-6 mt-10">
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
            <div className="relative w-22 text-black h-20 bg-secondary rounded-lg shadow-lg overflow-hidden perspective">
                <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold animate-flip">
                    {value}
                </div>
            </div>
            <span className="mt-2 font-medium">{label}</span>
        </div>
    );
};

export default function Event() {
    const guests = [
        {
            name: "Mr. Amit Sharma",
            title: "CEO, XYZ Group",
            img: "https://randomuser.me/api/portraits/men/32.jpg",
            bio: "A visionary leader with 20+ years in business strategy and community welfare.",
            linkedin: "https://linkedin.com/in/amitsharma",
            twitter: "https://twitter.com/amitsharma",
        },
        {
            name: "Ms. Priya Verma",
            title: "Director, ABC Ltd",
            img: "https://randomuser.me/api/portraits/women/44.jpg",
            bio: "Renowned for her philanthropic work and leadership in corporate social responsibility.",
            linkedin: "https://linkedin.com/in/priyaverma",
            twitter: "https://twitter.com/priyaverma",
        },
        {
            name: "Mr. Raj Malhotra",
            title: "Investor & Philanthropist",
            img: "https://randomuser.me/api/portraits/men/55.jpg",
            bio: "Supporting startups and cultural initiatives to promote Indian traditions.",
            linkedin: "https://linkedin.com/in/rajmalhotra",
            twitter: "https://twitter.com/rajmalhotra",
        },
    ];

    const galleryImages = [
        "https://images.unsplash.com/photo-1598899134739-24c46f58e2f0",
        "https://images.unsplash.com/photo-1598899134739-24c46f58e2f0",
        "https://images.unsplash.com/photo-1629058582512-36e0b53e95f6",
        "https://images.unsplash.com/photo-1600611622796-6cbbfb9c3f7b",
        "https://images.unsplash.com/photo-1598899134739-24c46f58e2f0",
        "https://images.unsplash.com/photo-1629058582512-36e0b53e95f6",
    ];

    const highlights = [
        "Grand Ganesh Aarti & Pooja Ceremony",
        "Traditional Cultural Performances",
        "Delicious Maha Prasad Distribution",
        "VIP Guest Interactions",
        "Eco-friendly Ganpati Decoration",
        "Spiritual Bhajans & Kirtans",
    ];

    const schedule = [
        { time: "10:00 AM", event: "Welcome Ceremony & Ganesh Sthapana" },
        { time: "11:30 AM", event: "VIP Guest Speech & Blessings" },
        { time: "01:00 PM", event: "Cultural Performances & Dance" },
        { time: "03:00 PM", event: "Aarti & Maha Prasad Distribution" },
        { time: "06:00 PM", event: "Evening Bhajans & Lamp Lighting" },
    ];

    return (
        <>
            {/* ✅ Hero Section */}
            <section
                className="relative bg-no-repeat bg-cover bg-center h-[100vh] flex items-center justify-center text-white"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1619594632183-f0e12404866a?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
            >
                <div className="absolute inset-0 bg-black/40"></div>
                <motion.div
                    className="relative z-10 text-center px-4"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">
                        Celebrate the Spirit of Ganesh Chaturthi
                    </h1>
                    <p className="text-xl max-w-2xl mx-auto mb-6">
                        Join us for a grand celebration filled with devotion, culture, and joy.
                    </p>
                    <Countdown targetDate={new Date("September 10, 2025 10:00:00").getTime()} />
                </motion.div>
            </section>

            {/* ✅ Event Details */}
            <section className="bg-gray-100 py-12 px-6">
                <div className="max-w-4xl mx-auto grid md:grid-cols-2 items-center gap-8">
                    <div>
                        <TypographyH3>Event Details</TypographyH3>
                        <ul className="space-y-3 text-gray-700 text-lg">
                            <li><strong>Date:</strong> September 10, 2025</li>
                            <li><strong>Time:</strong> 10:00 AM onwards</li>
                            <li><strong>Venue:</strong> Your Company Name, [Address]</li>
                            <li><strong>Special Guests:</strong> VIP Invitees</li>
                            <li><strong>Dress Code:</strong> Traditional Attire</li>
                        </ul>
                    </div>
                    <div className="flex items-center justify-center">
                        <img
                            src="https://images.unsplash.com/photo-1732950216036-a6b1b12a4c15?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8"
                            alt="Ganesh Idol"
                            className="w-full max-w-sm"
                        />
                    </div>
                </div>
            </section>

            {/* ✅ Highlights */}
            <section className="py-12 px-6 bg-white">
                <Headline
                    title="Event Highlights"
                />
                <ul className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto text-lg text-gray-700">
                    {highlights.map((item, index) => (
                        <li key={index} className="bg-orange-50 p-4 rounded-lg shadow-sm flex items-center gap-3">
                            <span className="text-orange-600 text-xl">✔</span>
                            {item}
                        </li>
                    ))}
                </ul>
            </section >

            {/* ✅ Schedule */}
            <section section className="bg-gray-100 py-12 px-6" >
                <Headline
                    title="Cultural Program Schedule"
                />
                <div className="max-w-3xl mx-auto">
                    {schedule.map((item, index) => (
                        <div key={index} className="flex justify-between py-3 border-b text-lg">
                            <span className="font-semibold">{item.time}</span>
                            <span>{item.event}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* ✅ Guests */}
            <section section className="py-12 px-6 bg-white" >
                <Headline
                    title="Our Special Guests"
                />
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {guests.map((guest, index) => (
                        <motion.div
                            key={index}
                            className="bg-gray-50 rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition duration-300"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                        >
                            <img
                                src={guest.img}
                                alt={guest.name}
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
                </div>
            </section>

            {/* ✅ Gallery */}
            < section id="gallery" className="py-12 px-6 bg-gray-100" >
                <Headline
                    title="Event Gallery"
                />
                <h2 className="text-3xl font-bold text-center mb-8"></h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
                    {galleryImages.map((img, index) => (
                        <motion.div
                            key={index}
                            className="overflow-hidden rounded-lg shadow-lg"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <img
                                src={img}
                                alt={`Gallery ${index + 1}`}
                                className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
                            />
                        </motion.div>
                    ))}
                </div>
            </ section>

            {/* ✅ Contact & Map */}
            < section className="py-12 px-6 text-center bg-white" >
                <Headline
                    title="Visit Us at Our Venue"
                />
                <p className="text-gray-600 mb-6">Umbarakar Technology Pvt Ltd, Office No.02,15, Zeroboyz Chowk, Nehru Nagar, Pimpri-Chinchwad, Pune, Maharashtra - 411018</p>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1890.3433210926873!2d73.81623548850015!3d18.633158987240353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9c95e95487f%3A0xb716badcdf9a8761!2sUC%20Services%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1756537110930!5m2!1sen!2sin" width="600"
                    height="450"
                    allowfullscreen=""
                    loading="lazy"
                    className="w-full max-w-4xl h-72 mx-auto rounded-lg border"
                    referrerpolicy="no-referrer-when-downgrade"
                >
                </iframe>
            </ section>
        </>
    );
}
