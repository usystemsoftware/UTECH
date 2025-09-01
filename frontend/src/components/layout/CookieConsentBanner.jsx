import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

const COOKIE_EXPIRY_HOURS = 24;

const getCookieConsent = () => {
    const consentData = JSON.parse(localStorage.getItem("cookieConsent"));
    if (!consentData) return null;

    const now = new Date().getTime();
    const expiry = consentData.timestamp + COOKIE_EXPIRY_HOURS * 60 * 60 * 1000;
    return now < expiry ? consentData : null;
};

const CookieConsentBanner = () => {
    const [visible, setVisible] = useState(false);
    const [showPreferences, setShowPreferences] = useState(false);
    const [expanded, setExpanded] = useState(null);

    const [consents, setConsents] = useState({
        performance: true,
        functional: true,
        targeting: true,
    });

    useEffect(() => {
        const existingConsent = getCookieConsent();
        if (!existingConsent) setVisible(true);
    }, []);

    const saveConsent = (customConsent = {}) => {
        const data = {
            ...customConsent,
            timestamp: new Date().getTime(),
        };
        localStorage.setItem("cookieConsent", JSON.stringify(data));
        setVisible(false);
        setShowPreferences(false);
    };

    const handleAcceptAll = () => {
        saveConsent({ performance: true, functional: true, targeting: true, necessary: true });
    };

    const handleConfirmChoices = () => {
        saveConsent({ ...consents, necessary: true });
    };

    const toggleConsent = (key) => {
        setConsents((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    const toggleExpanded = (key) => {
        setExpanded((prev) => (prev === key ? null : key));
    };

    return (
        <AnimatePresence>
            {visible && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.6 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black backdrop-blur-sm z-50"
                    />

                    {/* Main Banner */}
                    {!showPreferences && (
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 50 }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 z-50 flex items-center justify-center p-4"
                        >
                            <div className="bg-white shadow-2xl max-w-2xl w-full p-6 md:p-8 text-gray-800">
                                <h2 className="text-xl md:text-2xl font-semibold mb-4">
                                    You decide what cookies U Tech will use
                                </h2>
                                <p className="mb-4 text-sm md:text-base">
                                    We use cookies to personalize content and ads, provide social
                                    media features, and analyze traffic. See our{" "}
                                    <a href="/cookie-policy" className="underline text-blue-800">
                                        Cookie Policy
                                    </a>{" "}
                                    for more info.
                                </p>
                                <div className="flex flex-col md:flex-row gap-3 md:justify-end mt-6">
                                    <Button
                                        variant="link"
                                        className="underline text-blue-800 font-semibold"
                                        onClick={() => setShowPreferences(true)}
                                    >
                                        Manage My Cookies
                                    </Button>
                                    <Button size="sm" className="font-semibold rounded-none" onClick={handleAcceptAll}>
                                        Accept All Cookies
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {/* Preferences Panel */}
                    {showPreferences && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 z-50 flex items-center justify-center p-4"
                        >
                            <div className="bg-white shadow-2xl max-w-2xl w-full p-6 md:p-8 text-gray-800 overflow-y-auto max-h-[75vh] scrollbar-custom rounded-md">
                                <h2 className="text-xl font-semibold mb-4">Cookie Preferences</h2>

                                <div className="space-y-8 text-sm">
                                    {/* Reusable Section */}
                                    {[
                                        {
                                            key: "necessary",
                                            label: "Strictly Necessary Cookies",
                                            alwaysActive: true,
                                            description:
                                                "These cookies are essential for the website to function and cannot be switched off.",
                                        },
                                        {
                                            key: "performance",
                                            label: "Performance Cookies",
                                            description:
                                                "These cookies allow us to count visits and traffic sources so we can measure and improve site performance.",
                                        },
                                        {
                                            key: "functional",
                                            label: "Functional Cookies",
                                            description:
                                                "These cookies enable the website to provide enhanced functionality and personalisation.",
                                        },
                                        {
                                            key: "targeting",
                                            label: "Targeting Cookies",
                                            description:
                                                "These cookies may be set by advertising partners to show you relevant adverts on other sites.",
                                        },
                                    ].map((section) => (
                                        <div key={section.key} className="space-y-4">
                                            <div
                                                className="flex justify-between items-center cursor-pointer"
                                                onClick={() => toggleExpanded(section.key)}
                                            >
                                                <div>
                                                    <h3 className="font-semibold">{section.label}</h3>
                                                    {section.alwaysActive && (
                                                        <span className="text-blue-600 text-xs font-bold">Always Active</span>
                                                    )}
                                                </div>
                                                {expanded === section.key ? (
                                                    <ChevronUp className="w-5 h-5" />
                                                ) : (
                                                    <ChevronDown className="w-5 h-5" />
                                                )}
                                            </div>
                                            <AnimatePresence>
                                                {expanded === section.key && (
                                                    <motion.div
                                                        initial={{ opacity: 0, height: 0 }}
                                                        animate={{ opacity: 1, height: "auto" }}
                                                        exit={{ opacity: 0, height: 0 }}
                                                        transition={{ duration: 0.3 }}
                                                        className="overflow-hidden mt-3"
                                                    >
                                                        <p className="text-gray-600 mb-3">{section.description}</p>
                                                        {!section.alwaysActive && (
                                                            <div className="flex items-center gap-2">
                                                                <input
                                                                    type="checkbox"
                                                                    className="scale-125"
                                                                    checked={consents[section.key]}
                                                                    onChange={() => toggleConsent(section.key)}
                                                                />
                                                                <span className="text-sm">Enable {section.label}</span>
                                                            </div>
                                                        )}
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex justify-end mt-8 gap-4">
                                    <Button
                                        variant="link"
                                        className="underline text-blue-800 font-semibold"
                                        onClick={() => setShowPreferences(false)}
                                    >
                                        Cancel
                                    </Button>
                                    <Button
                                        size="sm"
                                        className="font-semibold rounded-none"
                                        onClick={handleConfirmChoices}
                                    >
                                        Confirm My Choices
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </>
            )}
        </AnimatePresence>
    );
};

export default CookieConsentBanner;
