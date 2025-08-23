import React, { useState } from "react";
import { Link } from "react-router-dom";
import { version } from "../../../package.json";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { TypographyH4 } from "@/custom/Typography";
import { IconRenderer } from "@/custom/IconRenderer";
import PageLayout from "@/custom/PageLayout";

const quickLinks = [
  { label: "About Us", to: "/company/about-us" },
  { label: "Careers", to: "/company/careers" },
  { label: "History", to: "/company/history" },
  { label: "Locations", to: "/company/locations" },
  { label: "Reviews", to: "/company/reviews" },
];

const socialIcons = [
  {
    icon: "Facebook",
    url: "https://www.facebook.com/AryaSoft1",
    label: "Facebook",
  },
  {
    icon: "Instagram",
    url: "https://www.instagram.com/usystem_software",
    label: "Instagram",
  },
  { icon: "X", url: "#", label: "Twitter" },
  {
    icon: "Linkedin",
    url: "https://in.linkedin.com/company/umbarkar-technology-india-pvt-ltd",
    label: "LinkedIn",
  },
];

export const footerLinks = [
  {
    title: "Services",
    links: [
      { label: "API Development", to: "/services/api-development" },
      {
        label: "Aplication Development",
        to: "/services/application-development",
      },
      { label: "QA Testing", to: "/services/qa-testing" },
      {
        label: "Digital Transformation",
        to: "/services/digital-transformation",
      },
      {
        label: "Application Maintenance",
        to: "/services/application-maintenance",
      },
    ],
  },
  {
    title: "Industries",
    links: [
      { label: "Construction", to: "/industries/construction" },
      { label: "Healthcare", to: "/industries/healthcare" },
      { label: "Finance", to: "/industries/finance" },
      { label: "Real Estate", to: "/industries/real-estate" },
      { label: "Banking", to: "/industries/banking" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "CRM", to: "/solutions/crm" },
      { label: "Embedded Software", to: "/solutions/embedded-software" },
      { label: "Digital Marketing", to: "/solutions/digital-marketing" },
      { label: "UI/UX", to: "/solutions/ui-ux" },
      { label: "Web Development", to: "/solutions/web-development" },
    ],
  },
];

export const legalNotices = [
  "U Tech (India) Pvt Ltd CIN: U72900PN2020PTC193410 Registered Office no.02,15, Zeroboyz Chowk, Nehru Nagar, Pune, Pimpri-Chinchwad, Pune, Maharashtra - 411018 , Email ID: enquiry@usystem.software",
  "Visitors are hereby informed that their information submitted on the website may be shared with relevant service providers. Product and service information is accurate based on the latest company data.",
  "We do not solicit or promote services through unsolicited calls or messages. Any such interactions should be reported to our support team immediately.",
];

export const Footer = () => {
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    setSubscribed(true);
  };

  return (
    <footer className="bg-[#213448] relative text-white pt-10 pb-6">
      <PageLayout className="grid gap-10 md:grid-cols-4 lg:grid-cols-5">
        {/* Brand & Subscribe */}
        <div className="col-span-2 space-y-4">
          <Link to="/" className="flex items-center">
            <img src="/logo.png" alt="Logo" className="w-36" loading="lazy" />
          </Link>
          <p className="text-sm md:text-base text-gray-300">
            Subscribe to get the latest updates, articles, and inspiration.
          </p>
          <form
            onSubmit={handleSubscribe}
            className="flex flex-col sm:flex-row gap-2"
          >
            <Input
              type="email"
              required
              placeholder="Enter your email"
              className="flex-1"
            />
            <Button type="submit" className="w-full sm:w-auto">
              Subscribe
            </Button>
          </form>
          {subscribed && (
            <p className="text-green-400 text-sm md:text-base">
              Thank you for subscribing! 🎉
            </p>
          )}
          <div className="flex items-center gap-2 mt-4">
            {socialIcons.map((item, i) => (
              <a
                key={i}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className="border-2 hover:scale-105 transition-all w-10 h-10 hover:bg-primary border-primary rounded-full flex justify-center items-center"
              >
                <IconRenderer name={item.icon} strokeWidth={2} size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* Links Sections */}
        {footerLinks.map((section, i) => (
          <div key={i}>
            <TypographyH4 className="text-base sm:text-xl mb-3">
              {section.title}
            </TypographyH4>
            <ul className="space-y-2 sm:space-y-3 text-[13px] md:text-sm text-gray-300">
              {section.links.map((link, j) => (
                <li key={j}>
                  <Link to={link.to} className="hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </PageLayout>

      {/* Legal Notices */}
      <PageLayout>
        <ul className="my-4 list-disc px-4 text-[13px] sm:text-sm text-gray-300 grid gap-2 [&>li]:mt-2">
          {legalNotices.map((notice, index) => (
            <li key={index}>{notice}</li>
          ))}
        </ul>
      </PageLayout>

      {/* Bottom bar with quick links */}
      <div className="mt-8 text-center border-t border-white/10 pt-6 text-xs sm:text-sm text-gray-400 space-y-2">
        <div>
          {quickLinks.map((item, index) => (
            <React.Fragment key={item.to}>
              <Link to={item.to} className="hover:underline hover:text-primary">
                {item.label}
              </Link>
              {index < quickLinks.length - 1 && <span className="mx-1">|</span>}
            </React.Fragment>
          ))}
        </div>
        <div className="sm:text-base text-sm">
          © {new Date().getFullYear()} Umbarakar Technology (India) Pvt Ltd. All
          rights reserved.
        </div>
      </div>
      {/* Version */}
      <span className="absolute bottom-0 right-4 z-40 text-sm">
        Version: {version}
      </span>
    </footer>
  );
};
