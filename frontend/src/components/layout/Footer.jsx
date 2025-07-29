import { useState } from "react";
import { Link } from "react-router-dom";
import { FadeInWhenVisible } from "@/custom/FadeInWhenVisible";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyH4 } from "@/custom/Typography";

const footerLinks = [
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
    <footer className="bg-gradient-to-b relative from-[#0d101f] to-[#071427] text-white px-6 py-12">
      <div className="md:max-w-7xl lg:max-w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
        {/* Brand and Subscribe */}
        <FadeInWhenVisible className="sm:col-span-2 space-y-4">
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
            <p className="mt-2 text-green-400 text-sm transition-opacity duration-300">
              Thank you for subscribing! 🎉
            </p>
          )}
          <div className="flex gap-4 mt-6 text-xl">
            {socialIcons.map((item, i) => (
              <FadeInWhenVisible key={i}>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                >
                  <img
                    src={`/assets/social-icon/${item.icon}.png`}
                    alt={item.label}
                    loading="lazy"
                    className="w-8 h-8 cursor-pointer hover:scale-120 transition-transform"
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
              <TypographyH4>{section.title}</TypographyH4>
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
            </div>
          </FadeInWhenVisible>
        ))}
      </div>

      <div className="mt-10 text-center border-t border-white/10 pt-6 text-sm text-gray-400">
        © {new Date().getFullYear()} Umbarkar Technology India Pvt Ltd. All
        rights reserved.
        <br />
      </div>
    </footer>
  );
};
