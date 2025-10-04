import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import PageLayout from "@/custom/PageLayout";
import { Headline } from "@/custom/Typography";
import InTheMedia from "./InTheMedia";
import PressReleases from "./PressReleases";
import Videos from "./Videos";
import Webinars from "./Webinars";
import Newsletter from "./Newsletter";
import AnalystRecognition from "./AnalystRecognition";
import SeoHead from "../../../components/SeoHead";
import organizationSchema from "../../../components/seo/breadcrumbs/organizationSchema";
import breadcrumbSchema from "../../../components/seo/breadcrumbs/breadcrumbSchema";

const tabs = [
  { id: "media", label: "In the Media", component: <InTheMedia /> },
  { id: "press", label: "Press Releases", component: <PressReleases /> },
  { id: "videos", label: "Videos", component: <Videos /> },
  { id: "webinars", label: "Webinars", component: <Webinars /> },
  { id: "newsletter", label: "Newsletter", component: <Newsletter /> },
  {
    id: "analyst",
    label: "Analyst Recognition",
    component: <AnalystRecognition />,
  },
];

export default function NewsroomTabs() {
  const [active, setActive] = useState("media");

  return (
    <>
      <SeoHead
        title="U Tech | Newsroom - Insights & Updates"
        description="Explore the latest articles, insights, and tech updates from U Tech (Umbarakar Technology)."
        url="https://usystem.software/blog"
        image="https://usystem.software/small-logo.png"
        organizationSchema={organizationSchema}
        breadcrumbSchema={breadcrumbSchema}
      />
      <section className="bg-white">
        {/* Hero Section */}
        <HeroSection
          backgroundImage="/assets/company/newsroom/newroomhero.jpg"
          title="Company Newsroom"
          description="Get the latest updates, press releases, and media coverage about our company."
          buttonText="CONTACT MEDIA TEAM"
        />

        {/* Content Layout */}
        <PageLayout section className="max-w-7xl mx-auto py-12 sm:py-16">
          <Headline
            title="Latest Updates & Media Coverage"
            description="Choose a section below to explore detailed updates, announcements, and recognitions."
          />

          {/* Tabs Navigation */}
          <div className="flex flex-wrap justify-center sm:justify-start gap-3 border-b pb-3 mb-8 mt-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActive(tab.id)}
                className={`px-4 sm:px-5 py-2 text-sm sm:text-base rounded-t-lg font-medium transition duration-200 ${
                  active === tab.id
                    ? "bg-teal-600 text-white shadow"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Active Tab Content */}
          <div className="mt-6">
            <div className="transition-all duration-300 ease-in-out">
              {tabs.find((item) => item.id === active)?.component}
            </div>
          </div>
        </PageLayout>
      </section>
    </>
  );
}
