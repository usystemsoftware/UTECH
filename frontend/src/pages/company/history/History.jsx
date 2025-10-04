import HeroSection from "@/components/HeroSection";
import PageLayout from "@/custom/PageLayout";
import { timelineData } from "./Data";
import Timeline from "@/custom/Timeline";
import { Headline } from "@/custom/Typography";
import SeoHead from "../../../components/SeoHead"
import organizationSchema from "../../../components/seo/breadcrumbs/organizationSchema"
import breadcrumbSchema from "../../../components/seo/breadcrumbs/breadcrumbSchema"

export default function History() {
  return (
    <>
      <SeoHead
        title="U Tech | history - Insights & Updates"
        description="Explore the latest articles, insights, and tech updates from U Tech (Umbarakar Technology)."
        url="https://usystem.software/blog"
        image="https://usystem.software/small-logo.png"
        organizationSchema={organizationSchema}
        breadcrumbSchema={breadcrumbSchema}
      />
      <HeroSection
        backgroundImage="/banner/history-banner.jpg"
        title="Our History"
        description="Pushing the limits of software development since 2017"
      />

      <PageLayout className="py-16">
        <Headline title="History" />
      </PageLayout>

      <PageLayout className="py-16">
        <Timeline data={timelineData} />
      </PageLayout>
    </>
  );
}
