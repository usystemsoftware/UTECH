import HeroSection from "@/components/HeroSection";
import PageLayout from "@/custom/PageLayout";
import { Headline, TypographyH3 } from "@/custom/Typography";
import TestimonialsSection from "@/custom/TestimonialsSection";
import { cultureAndGrands, cultureData, testimonials } from "./Data";
import SeoHead from "../../../components/SeoHead"
import organizationSchema from "../../../components/seo/breadcrumbs/organizationSchema"
import breadcrumbSchema from "../../../components/seo/breadcrumbs/breadcrumbSchema"

export default function PeopleAndCulture() {
  return (
    <>
      <SeoHead
        title="U Tech | PeopleAndCulture - Insights & Updates"
        description="Explore the latest articles, insights, and tech updates from U Tech (Umbarakar Technology)."
        url="https://usystem.software/blog"
        image="https://usystem.software/small-logo.png"
        organizationSchema={organizationSchema}
        breadcrumbSchema={breadcrumbSchema}
      />
      <HeroSection
        backgroundImage="/banner/history-banner.jpg"
        title="The U Tech Team"
        description="The only way to achieve great results is with great people."
      />

      <PageLayout className="py-16 space-y-10">
        <Headline
          title="Striving For Excellence"
          description="Our diverse and dedicated team is made up of people who take pride in all that they do and believe in the value of hard work. We foster an environment where everyone is encouraged to reach their full potential and achieve their goals."
        />

        <TestimonialsSection title="TESTIMONIALS" data={testimonials} />
      </PageLayout>

      <section className="py-16">
        <TypographyH3 className="text-primary text-center mb-10">
          U TECH CULTURE AT A GLANCE
        </TypographyH3>

        <div className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-6">
          {cultureAndGrands.map((item, index) => (
            <img
              key={index}
              src={item}
              alt={`Culture ${index + 1}`}
              className="w-full h-48 object-cover transition-transform duration-300"
              loading="lazy"
            />
          ))}
        </div>
      </section>

      <PageLayout className="py-16 space-y-10">
        <TypographyH3 className="text-primary text-center">
          CLUBS AND ACTIVITIES
        </TypographyH3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cultureData.map((item) => (
            <div
              key={item.id}
              className="border border-primary overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full md:h-48 object-cover"
                loading="lazy"
              />
              <div className="px-4 py-1">
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="text-gray-600">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </PageLayout>
    </>
  );
}
