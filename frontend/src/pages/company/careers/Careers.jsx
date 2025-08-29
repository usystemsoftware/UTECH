import HeroSection from "@/components/HeroSection";
import { Button } from "@/components/ui/button";
import PageLayout from "@/custom/PageLayout";
import { Headline, TypographyH4, TypographyMuted, TypographyH1 } from "@/custom/Typography";
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

      <PageLayout className="py-6 space-y-8">
        <div className="grid grid-col-1 md:grid-cols-2 items-center gap-4">
          <div className="space-y-4 sm:space-y-8">
            <TypographyH1>
              U Technology Careers
            </TypographyH1>
            <TypographyMuted>
              Delightech Careers presents challenging opportunities to create innovative hardware and software solutions. We provide a vibrant and interactive work environment where creativity and expertise merge to advance technology. Join us to be a part of a team that prioritizes growth, innovation, and excellence in providing cutting-edge digital and industrial solutions.
            </TypographyMuted>
          </div>

          <img src="/assets/company/careers/careers2.jpg" alt="" width={500} height={300} className="mx-auto" />
        </div>

        <div className="grid grid-col-1 md:grid-cols-2 items-center gap-4">
          <img src="/assets/company/careers/benefits.jpg" alt="" width={500} height={300} className="mx-auto order-2 sm:order-1" />

          <div className="space-y-4 sm:space-y-8 order-1 sm:order-2">
            <TypographyH1>
              Enjoy Comprehensive Benefits
            </TypographyH1>
            <TypographyMuted>
              At Delightech, we offer end-to-end software and hardware solutions that are engineered to promote innovation and efficiency. With experience in AI, IoT, and industrial automation, we offer state-of-the-art technology that promotes reliability, scalability, and ease of integration. Our range of end-to-end services includes development to maintenance, and we give businesses the utilities they require to lead in a fast-changing digital age.
            </TypographyMuted>
          </div>

        </div>

        <div className="grid grid-col-1 md:grid-cols-2 items-center gap-4">
          <div className="space-y-4 sm:space-y-8">
            <TypographyH1>
              Culture at U Technology
            </TypographyH1>
            <TypographyMuted>
              Culture at U Technology is founded on innovation, teamwork, and ongoing learning. We have an open and vibrant work culture where creativity is encouraged, and all team members are respected. With a high emphasis on both software and hardware solutions, we promote problem-solving, knowledge sharing, and professional development. At U Technology, we also believe in the balance of work and well-being, with a supportive and motivating workplace for everyone.
            </TypographyMuted>
          </div>

          <img src="/assets/company/careers/culture2.jpg" alt="" width={500} height={300} className="mx-auto" />
        </div>

        <div className="grid grid-col-1 md:grid-cols-2 items-center gap-4">
          <img src="/assets/company/careers/benefits2.jpeg" alt="" width={500} height={300} className="mx-auto order-2 sm:order-1" />

          <div className="space-y-4 sm:space-y-8 order-1 sm:order-2">
            <TypographyH1>
              Enjoy Comprehensive Benefits
            </TypographyH1>
            <TypographyMuted>
              Diversity & Inclusion at U Technology is our core. We celebrate people from diverse backgrounds, experiences, and points of view, where everyone feels valued and empowered. We are committed to inclusivity because it fuels innovation, collaboration, and growth with equal opportunities for everyone. Diverse teams make better solutions at U Technology, leaving a lasting legacy in software and hardware domains.
            </TypographyMuted>
          </div>

        </div>
      </PageLayout>

    </>
  );
}
