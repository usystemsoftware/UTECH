import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { RiLinkedinFill } from "react-icons/ri";
import { CgFacebook } from "react-icons/cg";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineContentCopy } from "react-icons/md";
import { Share2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ShareButtons = ({ scrolled, scrolledMobile }) => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const pathname = location.pathname;
  const slug = pathname.split("/").filter(Boolean).pop();
  const shareUrl = `https://u-tech-r7be.onrender.com/share/${slug}`;

  const isMobile = () => /Mobi|Android|iPhone/i.test(navigator.userAgent);

  const handleNativeShare = async () => {
    try {
      await navigator.share({
        title: "Explore IT Solutions with U Tech",
        text: "Check out U Tech today!",
        url: shareUrl,
      });
    } catch (err) {
      console.error("Share failed:", err);
    }
  };

  return (
    <>
      {navigator.share && isMobile() ? (
        // Mobile: Native share API
        <button
          onClick={handleNativeShare}
        >
          <Share2 size={19} className={`mt-1 ${scrolledMobile ? "text-black" : "text-white"}`} />
        </button>
      ) : (
        // Desktop: Toggle button + dropdown list
        <div className="flex items-center gap-4">
          {/* Dropdown with share options */}
          <AnimatePresence>
            {open && (
              <motion.div
                className="flex items-center gap-4"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                {/* LinkedIn */}
                <a
                  href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
                    shareUrl
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${scrolled ? "text-black" : "text-white"}`}
                >
                  <RiLinkedinFill size={21} />
                </a>

                {/* Facebook */}
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                    shareUrl
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${scrolled ? "text-black" : "text-white"}`}
                >
                  <CgFacebook size={21} />
                </a>

                {/* WhatsApp */}
                <a
                  href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
                    "Check this out! " + shareUrl
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${scrolled ? "text-black" : "text-white"}`}
                >
                  <FaWhatsapp size={21} />
                </a>

                {/* Copy Link */}
                <button
                  className={`${scrolled ? "text-black" : "text-white"}`}
                  onClick={() => {
                    navigator.clipboard.writeText(shareUrl);
                    setOpen(false);
                  }}
                >
                  <MdOutlineContentCopy size={19} />
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main Share Button */}
          <button
            onClick={() => setOpen(!open)}
            className={`cursor-pointer ${scrolled ? "text-black" : "text-white"}`}
          >
            <Share2 size={20} />
          </button>
        </div>
      )}
    </>
  );
};

export default ShareButtons;
