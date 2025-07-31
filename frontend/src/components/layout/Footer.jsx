import { useState } from "react";
import { Link } from "react-router-dom";
import { FadeInWhenVisible } from "@/custom/FadeInWhenVisible";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyH4 } from "@/custom/Typography";

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
  {
    title: "Quick Links",
    links: [
      { label: "About Us", to: "/company/about-us" },
      { label: "Careers", to: "/company/careers" },
      { label: "History", to: "/company/history" },
      { label: "Locations", to: "/company/locations" },
      { label: "Reviews", to: "/company/reviews" },
    ],
  },
];

const socialIcons = [
  {
    icon: "facebook",
    url: "https://www.facebook.com/AryaSoft1",
    label: "Facebook",
  },
  {
    icon: "instagram",
    url: "https://www.instagram.com/usystem_software",
    label: "Instagram",
  },
  { icon: "twitter", url: "#", label: "Twitter" },
  {
    icon: "linkedin",
    url: "https://in.linkedin.com/company/umbarkar-technology-india-pvt-ltd",
    label: "LinkedIn",
  },
];

export const Footer = () => {
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    setSubscribed(true);
  };

  return (
    <footer className="bg-gradient-to-b from-[#0d101f] to-[#071427] text-white px-4 sm:px-6 py-10 sm:py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-2 space-y-4 md:space-y-0 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-8 md:gap-12">
        {/* Brand and Subscribe */}
        <FadeInWhenVisible className="col-span-2 space-y-4">
          <TypographyH3 className="text-xl sm:text-2xl md:text-3xl">
            U Technology
          </TypographyH3>
          <p className="text-sm md:text-base text-gray-300">
            Subscribe to get the latest updates, articles, and inspiration.
          </p>
          <form
            onSubmit={handleSubscribe}
            className="flex flex-col sm:flex-row gap-2 w-full max-w-md"
          >
            <Input
              type="email"
              required
              placeholder="Enter your email"
              className="flex-1 min-w-0"
            />
            <Button type="submit" className="w-full sm:w-auto">
              Subscribe
            </Button>
          </form>
          {subscribed && (
            <p className="mt-2 text-green-400 text-sm transition-opacity duration-300">
              Thank you for subscribing! 🎉
            </p>
          )}
          <div className="flex flex-wrap gap-4 mt-6">
            {socialIcons.map((item, i) => (
              <FadeInWhenVisible key={i}>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="hover:scale-110 transition-transform"
                >
                  <img
                    src={`/assets/social-icon/${item.icon}.png`}
                    alt={item.label}
                    loading="lazy"
                    className="w-7 h-7 sm:w-8 sm:h-8"
                  />
                </a>
              </FadeInWhenVisible>
            ))}
          </div>
        </FadeInWhenVisible>

        {/* Footer Links */}
        {footerLinks.map((section, i) => (
          <FadeInWhenVisible key={i}>
            <div>
              <TypographyH4 className="text-base md:text-lg">
                {section.title}
              </TypographyH4>
              <ul className="space-y-2 mt-3 text-sm text-gray-300">
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
            </div>
          </FadeInWhenVisible>
        ))}
      </div>

      <div className="mt-10 text-center border-t border-white/10 pt-6 text-xs sm:text-sm text-gray-400">
        © {new Date().getFullYear()} Umbarkar Technology India Pvt Ltd. All
        rights reserved.
      </div>
    </footer>
  );
};
