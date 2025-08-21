import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { FaFacebook, FaTwitter, FaLinkedin, FaPinterest, FaWhatsapp, FaEnvelope, FaLink } from "react-icons/fa";
import { PiShareNetworkThin } from "react-icons/pi";

const ShareButtons = () => {
    const location = useLocation();
    const [open, setOpen] = useState(false);

    const pathname = location.pathname;
    const slug = pathname.split("/").filter(Boolean).pop();
    // const shareUrl = `http://staging.usystem.software/share/${slug}`; // backend url
    const shareUrl = `https://u-tech-r7be.onrender.com/share/${slug}`; // backend url


    const isMobile = () => /Mobi|Android|iPhone/i.test(navigator.userAgent);

    const handleNativeShare = async () => {
        try {
            await navigator.share({
                title: "Explore IT Solutions with U Tech",
                text: "Discover innovative IT services and solutions designed to help your business grow. Check out U Tech today!",
                url: shareUrl,
            });
        } catch (err) {
            console.error("Share failed:", err);
        }
    };

    return (
        <div className="absolute bottom-5 right-5 z-30">
            {navigator.share && isMobile() ? (
                // Mobile: Native share API
                <button
                    onClick={handleNativeShare}
                    className="bg-blue-500 text-white p-3 rounded-full cursor-pointer shadow-md"
                >
                    <PiShareNetworkThin />
                </button>
            ) : (
                // Desktop: Toggle button + dropdown list
                <div className="relative">
                    {/* Main Share Button */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="bg-blue-500 text-white p-3 rounded-full cursor-pointer shadow-md"
                    >
                        <PiShareNetworkThin strokeWidth="4" />
                    </button>

                    {/* Dropdown with share options */}
                    {open && (
                        <div className="absolute bottom-12 right-0 bg-white border border-gray-200 rounded-lg shadow-lg p-3 flex flex-col gap-3 min-w-[160px]">
                            {/* Email */}
                            {/* <a
                                href={`mailto:?subject=Check this out!&body=${shareUrl}`}
                                className="flex items-center gap-2 text-sm text-gray-700 hover:text-blue-600"
                            >
                                <FaEnvelope /> Email
                            </a> */}

                            {/* LinkedIn */}
                            <a
                                href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
                                    shareUrl
                                )}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-sm text-gray-700 hover:text-blue-600"
                            >
                                <FaLinkedin /> LinkedIn
                            </a>

                            {/* Facebook */}
                            <a
                                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                                    shareUrl
                                )}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-sm text-gray-700 hover:text-blue-600"
                            >
                                <FaFacebook /> Facebook
                            </a>

                            {/* Twitter / X */}
                            {/* <a
                                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                                    shareUrl
                                )}&text=${encodeURIComponent("Check this out!")}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-sm text-gray-700 hover:text-blue-600"
                            >
                                <FaTwitter /> X
                            </a> */}

                            {/* Pinterest */}
                            <a
                                href={`https://pinterest.com/pin/create/button/?url=${encodeURIComponent(
                                    shareUrl
                                )}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-sm text-gray-700 hover:text-blue-600"
                            >
                                <FaPinterest /> Pinterest
                            </a>

                            {/* WhatsApp */}
                            <a
                                href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
                                    "Check this out! " + shareUrl
                                )}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-sm text-gray-700 hover:text-green-600"
                            >
                                <FaWhatsapp /> WhatsApp
                            </a>

                            {/* Copy Link */}
                            <button
                                onClick={() => {
                                    navigator.clipboard.writeText(shareUrl);
                                    // alert("Link copied!");
                                    setOpen(false);
                                }}
                                className="flex items-center gap-2 text-sm text-gray-700 hover:text-blue-600 text-left"
                            >
                                <FaLink /> Copy Link
                            </button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default ShareButtons;
