"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyH4 } from "../../custom/Typography";

const footerLinks = [
  {
    title: "Services",
    links: [
      { label: "API Development", to: "/services/api-development" },
      { label: "Aplication Development", to: "/services/application-development" },
      { label: "QA Testing", to: "/services/qa-testing" },
      {
        label: "Digital Transformation",
        to: "/services/digital-transformation",
      },
      { label: "PLM", to: "/services/plm" },
    ],
  },
  {
    title: "Industries",
    links: [
      { label: "Construction", to: "/industries/construction" },
      { label: "Healthcare", to: "/industries/healthcare" },
      { label: "Finance", to: "/industries/finance" },
      { label: "Retail", to: "/industries/retail" },
      { label: "Banking", to: "/industries/banking" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "CRM", to: "/solutions/crm" },
      { label: "Embedded Software", to: "/solutions/cloud" },
      { label: "Digital Marketing", to: "/solutions/digital-marketing" },
      { label: "UI/UX", to: "/solutions/ui-ux" },
      { label: "Web Development", to: "/solutions/web-development" },
    ],
  },
];

const socialIcons = [
  { icon: Facebook, url: "#", label: "Facebook" },
  { icon: Instagram, url: "#", label: "Instagram" },
  { icon: Twitter, url: "#", label: "Twitter" },
  { icon: Linkedin, url: "#", label: "LinkedIn" },
];

export const Footer = () => {
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    setSubscribed(true);
  };

  return (
    <footer className="bg-gradient-to-b from-[#0d101f] to-[#071427] text-white px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10"
      >
        {/* Brand and Subscribe */}
        <div className="sm:col-span-2 space-y-4">
          <TypographyH3>U Technology</TypographyH3>
          <p className="text-sm mb-4 text-gray-300">
            Subscribe to get the latest updates, articles, and inspiration.
          </p>
          <form
            onSubmit={handleSubscribe}
            className="flex flex-col sm:flex-row gap-2 sm:max-w-md"
          >
            <Input type="email" required placeholder="Enter your email" />
            <Button type="submit">Subscribe</Button>
          </form>
          {subscribed && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-2 text-green-400 text-sm"
            >
              Thank you for subscribing! 🎉
            </motion.p>
          )}
          {/* Social Icons */}
          <div className="flex gap-4 mt-6 text-xl">
            {socialIcons.map((item, i) => (
              <motion.a
                key={i}
                href={item.url}
                aria-label={item.label}
                whileHover={{ scale: 1.2 }}
                className="w-10 h-10 rounded-full bg-primary flex justify-center items-center transition-colors"
              >
                <item.icon size={18} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Dynamic Link Columns */}
        {footerLinks.map((section, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * i, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <TypographyH4>{section?.title}</TypographyH4>
            <ul className="space-y-3 mt-3 text-sm text-gray-300">
              {section.links.map((link, j) => (
                <li key={j}>
                  <Link
                    to={link.to}
                    className="hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom Text */}
      <div className="mt-10 text-center border-t border-white/10 pt-6 text-sm text-gray-400">
        © {new Date().getFullYear()} Umbarkar Technology India Pvt Ltd . All
        rights reserved.
      </div>
    </footer>
  );
};
