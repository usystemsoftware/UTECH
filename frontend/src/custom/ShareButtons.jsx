import React from "react";

const ShareButtons = ({ slug }) => {
    const shareUrl = `http://localhost:5002/share/${slug}`;

    const isMobile = () => /Mobi|Android|iPhone/i.test(navigator.userAgent);

    const handleNativeShare = async () => {
        try {
            await navigator.share({
                title: "Check this out!",
                text: "I thought you might find this interesting.",
                url: shareUrl,
            });
        } catch (err) {
            console.error("Share failed:", err);
        }
    };

    return (
        <div
            style={{
                position: "fixed",
                bottom: "20px",
                right: "20px",
                zIndex: 9999,
            }}
        >
            {navigator.share && isMobile() ? (
                // Mobile: Single native share button
                <button
                    onClick={handleNativeShare}
                    style={{
                        background: "#007bff",
                        color: "white",
                        border: "none",
                        padding: "10px 15px",
                        borderRadius: "6px",
                        cursor: "pointer",
                    }}
                >
                    📱 Share
                </button>
            ) : (
                // Desktop: Show social media buttons
                <div style={{ display: "flex", gap: "10px" }}>
                    {/* Facebook */}
                    <a
                        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                            shareUrl
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src="/icons/facebook.svg" alt="Facebook" width={32} />
                    </a>

                    {/* LinkedIn */}
                    <a
                        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                            shareUrl
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src="/icons/linkedin.svg" alt="LinkedIn" width={32} />
                    </a>

                    {/* Twitter */}
                    <a
                        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                            shareUrl
                        )}&text=${encodeURIComponent("Check this out!")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src="/icons/twitter.svg" alt="Twitter" width={32} />
                    </a>

                    {/* WhatsApp */}
                    <a
                        href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
                            "Check this out! " + shareUrl
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src="/icons/whatsapp.svg" alt="WhatsApp" width={32} />
                    </a>
                </div>
            )}
        </div>
    );
};

export default ShareButtons;
