import HeroSection from "@/components/HeroSection";
import { Button } from "@/components/ui/button";
import PageLayout from "@/custom/PageLayout";
import { Headline, TypographyH4, TypographyMuted } from "@/custom/Typography";
import { Link } from "react-router-dom";
import { companyValues, jobs } from "./Data";
import { Clock, ShieldCheck } from "lucide-react";

export default function Careers() {
  return (
    <>
      <HeroSection
        backgroundImage="/banner/carrier-banner.jpeg"
        title="Join Our Team at U Technology"
        description="Explore exciting opportunities and grow with us!"
      />

      <PageLayout className="py-16 space-y-10">
        <Headline title="Let's Grow Together" />

        <div className="space-y-4 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {jobs.map((job) => (
            <div key={job.id}>
              <img
                src={job.img}
                alt={job.title}
                width={500}
                height={400}
                className="w-full h-64 object-cover object-center"
              />
              <div className="space-y-3 p-4 shadow">
                <TypographyH4>{job.title}</TypographyH4>
                <TypographyMuted className="sm:line-clamp-3">
                  {job.description}
                </TypographyMuted>
                <div className="flex items-center flex-wrap gap-4 mt-4">
                  <TypographyMuted>{job.type}</TypographyMuted>
                  <span className="bg-secondary py-2 flex items-center gap-1 px-6 rounded-full text-sm">
                    <Clock size={16} /> 23-08-2025
                  </span>

                  <span className="bg-green-200 flex items-center gap-1 py-2 px-6 rounded-full text-sm">
                    {" "}
                    <ShieldCheck size={16} /> Active{" "}
                  </span>
                </div>
                <Link to={job.link}>
                  <Button className="w-full">View Details</Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </PageLayout>

      <PageLayout className="py-16 space-y-10">
        <Headline title="Life at U Technology" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {companyValues.map((item) => (
            <div
              key={item.id}
              className="shadow-md overflow-hidden hover:shadow-lg transition"
            >
              {/* Image */}
              <img
                src={item.img}
                alt={item.title}
                width={500}
                height={400}
                className="w-full h-64 object-cover object-center"
              />

              {/* Content */}
              <div className="p-4">
                <TypographyH4>{item.title}</TypographyH4>
                <TypographyMuted className=" mt-2">
                  {item.description}
                </TypographyMuted>
              </div>
            </div>
          ))}
        </div>
      </PageLayout>
    </>
  );
}
