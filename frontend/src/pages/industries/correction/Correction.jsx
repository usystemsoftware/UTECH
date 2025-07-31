import { FeaturesList } from "@/components/FeaturesList";
import HeroSection from "@/components/HeroSection";
import PageLayout from "@/custom/PageLayout";
import { FadeInWhenVisible, fadeUp } from "@/custom/FadeInWhenVisible";
import { Button } from "@/components/ui/button";
import { TypographyMuted, Headline, TypographyH5 } from "@/custom/Typography";
import {
  aiDrivenCorrectionalSolutions,
  correctionalAdminSolutions,
  correctionalHrSecuritySolutions,
  facilityOperationsSolutions,
  inmateHealthcareSolutions,
  inmateManagementSolutions,
  inmateReleaseSolutions,
  inmateServicesSolutions,
  integratedCorrectionalSoftwareSolutions,
  jailManagementSolutions,
  jailSecuritySolutions,
} from "./Data";

export default function Correction() {
  return (
    <>
      <HeroSection
        backgroundImage="/banner/correction-banner.jpg"
        title="Custom Corrections & Jail Management System Development"
        description="Streamline jail management with our AI-powered solutions to streamline workflows including housing, scheduling, inmate tracking, and data storage."
        buttonText="HIRE EXPERT DEVELOPERS"
        buttonLink="#"
        imageFit="cover"
      />

      <PageLayout className="py-16 space-y-10 text-center">
        <Headline
          title="We Have Experienced Jail Management Software Developers "
          description="We develop custom Jail Management Software that provides a comprehensive set of capabilities to manage the entire jail management lifecycle from booking to release."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 items-center md:gap-8">
          {/* Features List */}
          <div className="text-start">
            <TypographyH5>Jail Management System Development</TypographyH5>
            <TypographyMuted className="mb-8">
              Our expert team of software developers & engineers build Jail
              Management System Development from scratch or integrate custom
              features within your existing solution to streamline workflows and
              optimize jailhouse operations.
            </TypographyMuted>
            <FeaturesList fadeUp={fadeUp} features={jailManagementSolutions} />
          </div>

          {/* Left Image */}
          <FadeInWhenVisible delay={0.5} className="sm:block hidden">
            <img
              loading="lazy"
              src="/assets/industries/correction/jail-mgmt-systems.png"
              alt="Portfolio"
              className="w-48 mx-auto"
            />
          </FadeInWhenVisible>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-12">
          {/* Left Image */}
          <FadeInWhenVisible delay={0.5} className="sm:block hidden">
            <img
              loading="lazy"
              src="/assets/industries/correction/workflow-mgmt.png"
              alt="Portfolio"
              className="w-135 mx-auto"
            />
          </FadeInWhenVisible>

          {/* Features List */}
          <div className="text-start">
            <TypographyH5>Workflow Management</TypographyH5>
            <TypographyMuted className="mb-8">
              We create customizable Workflow Management Solutions that manage
              the correctional facility operations’ ins and outs, facilitating
              streamlined & automated processes for the entire jail ecosystem in
              one centralized platform.
            </TypographyMuted>
            <FeaturesList
              fadeUp={fadeUp}
              features={facilityOperationsSolutions}
            />
          </div>
        </div>

        {/* CTA Button */}
        <FadeInWhenVisible>
          <Button variant="hover">OPTIMIZE JAIL OPERATIONS</Button>
        </FadeInWhenVisible>
      </PageLayout>

      <section className="bg-secondary pt-10 space-y-6">
        <PageLayout>
          <div className="grid grid-cols-1 sm:grid-cols-2">
            <FeaturesList
              fadeUp={fadeUp}
              features={correctionalAdminSolutions.slice(0, 2)}
            />
            <FeaturesList
              fadeUp={fadeUp}
              features={correctionalAdminSolutions.slice(2, 4)}
            />
          </div>
        </PageLayout>
        <FadeInWhenVisible delay={0.5}>
          <img
            loading="lazy"
            src="/assets/industries/correction/logistics-software-developers.png"
            alt="Portfolio"
            className="w-[60%] mx-auto"
          />
        </FadeInWhenVisible>
      </section>

      <PageLayout className="py-16 space-y-8 text-center">
        <Headline
          title="Commissary & Visitation Management Solutions"
          description="We build robust Commissary Management & Visitation Management Solutions with a suite of tools designed for streamlining correctional facility operations."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-8">
          <FadeInWhenVisible delay={0.5}>
            <img
              loading="lazy"
              src="/assets/industries/healthcare/laptop.png"
              alt="Portfolio"
              className="w-135 mx-auto"
            />
          </FadeInWhenVisible>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FeaturesList
              fadeUp={fadeUp}
              features={inmateServicesSolutions.slice(0, 2)}
            />
            <FeaturesList
              fadeUp={fadeUp}
              features={inmateServicesSolutions.slice(2, 4)}
            />
          </div>
        </div>
        <FadeInWhenVisible>
          <Button variant="hover">GET STARTED</Button>
        </FadeInWhenVisible>
      </PageLayout>

      <section className="bg-secondary py-16">
        <PageLayout className="space-y-10">
          <Headline
            title="AI-Powered Corrections & Jail Management Software Solutions"
            description="Our AI algorithms for correctional management software assist in effective operation and resource management. Our Artificial intelligence algorithms contribute to robust security measures through real-time surveillance and risk assessment."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FeaturesList
              fadeUp={fadeUp}
              features={aiDrivenCorrectionalSolutions.slice(0, 2)}
            />
            <FeaturesList
              fadeUp={fadeUp}
              features={aiDrivenCorrectionalSolutions.slice(2, 4)}
            />
          </div>
        </PageLayout>
      </section>

      <PageLayout className="py-16 space-y-8 text-center">
        <Headline
          title="Correctional Medical Management Solutions"
          description="We develop and integrate Inmate EMR, EHR, EMAR, and other medical data into existing Jail Management Solutions for optimized interoperability and flexibility."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FeaturesList
              fadeUp={fadeUp}
              features={inmateHealthcareSolutions.slice(0, 2)}
            />
            <FeaturesList
              fadeUp={fadeUp}
              features={inmateHealthcareSolutions.slice(2, 4)}
            />
          </div>
          <FadeInWhenVisible delay={0.5}>
            <img
              loading="lazy"
              src="/assets/industries/healthcare/laptop.png"
              alt="Portfolio"
              className="w-135 mx-auto"
            />
          </FadeInWhenVisible>
        </div>
      </PageLayout>

      <section className="py-12 bg-secondary">
        <PageLayout className="space-y-8 text-center">
          <Headline
            title="Inmate Tracking & Security Software Solutions"
            description="Our custom Inmate Tracking & Security Software Solutions allow correctional facilities to track all inmate movements and measure employee performances in real-time."
          />

          <div className="flex flex-col sm:flex-row justify-baseline gap-8 md:gap-26">
            {/* Left Features List */}
            <FeaturesList
              features={inmateManagementSolutions.slice(0, 2)}
              fadeUp={fadeUp}
            />

            {/* Center Animation */}
            <FadeInWhenVisible className="md:block hidden">
              <img
                loading="lazy"
                src="/assets/industries/correction/immate-tracking-mobile.png"
                alt="Mobile Analytics App"
                className="w-52"
              />
            </FadeInWhenVisible>

            {/* Right Features List */}
            <FeaturesList
              features={inmateManagementSolutions.slice(2, 4)}
              fadeUp={fadeUp}
            />
          </div>
          <FadeInWhenVisible>
            <Button variant="hover">UPGRADE TRACKING SYSTEMS</Button>
          </FadeInWhenVisible>
        </PageLayout>
      </section>

      <PageLayout className="py-8 space-y-8 text-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FeaturesList
              fadeUp={fadeUp}
              features={jailSecuritySolutions.slice(0, 2)}
            />
            <FeaturesList
              fadeUp={fadeUp}
              features={jailSecuritySolutions.slice(2, 4)}
            />
          </div>
          <FadeInWhenVisible delay={0.5}>
            <img
              loading="lazy"
              src="/assets/industries/correction/istockphoto-1334591614-612x612.webp"
              alt="Portfolio"
              className="w-135 mx-auto"
            />
          </FadeInWhenVisible>
        </div>
      </PageLayout>

      <section className="py-12 bg-secondary">
        <PageLayout className="py-8 space-y-8 text-center">
          <Headline
            title="Inmate Reentry Software Solutions"
            description="We design Inmate Reentry Solutions that automate and streamline offender release program processes while aiding in reducing recidivism."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <FadeInWhenVisible className="sm:block hidden">
              <img
                loading="lazy"
                src="/assets/industries/correction/jail-management-solutions-laptop.png"
                alt="Mobile Analytics App"
                className="w-96 mx-auto"
              />
            </FadeInWhenVisible>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FeaturesList
                fadeUp={fadeUp}
                features={inmateReleaseSolutions.slice(0, 2)}
              />
              <FeaturesList
                fadeUp={fadeUp}
                features={inmateReleaseSolutions.slice(2, 4)}
              />
            </div>
          </div>
        </PageLayout>
      </section>

      <PageLayout className="py-16 space-y-10 text-center">
        <Headline
          title="Human Resource Management Solutions"
          description="We offer Human Resource Management & Human Capital Management (HCM) Software Development Services to manage correctional officers and civilian staff members."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 items-center md:gap-8">
          {/* Features List */}
          <div className="text-start">
            <TypographyH5>HRMS Solutions</TypographyH5>
            <TypographyMuted className="mb-8">
              We develop and integrate custom Human Resource Management Systems
              to effectively manage employee time & attendance, payroll &
              benefits, background checks & drug screening schedules, and
              security rounds & headcount performance.
            </TypographyMuted>
            <FeaturesList
              fadeUp={fadeUp}
              features={correctionalHrSecuritySolutions}
            />
          </div>

          {/* Left Image */}
          <FadeInWhenVisible delay={0.5}>
            <img
              loading="lazy"
              src="/assets/industries/correction/hrms-solutions.png"
              alt="Portfolio"
              className="w-48 mx-auto"
            />
          </FadeInWhenVisible>
        </div>
        {/* CTA Button */}
        <FadeInWhenVisible>
          <Button variant="hover">GET HRMS SOLUTIONS</Button>
        </FadeInWhenVisible>
      </PageLayout>

      <section className="bg-secondary py-16">
        <PageLayout className="space-y-8">
          <Headline
            title="U Tech’s Integration Advantage"
            description="We integrate custom features, functions, and modules into third-party Jail Management Software APIs to create the perfect custom solution for your correctional facility. "
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {integratedCorrectionalSoftwareSolutions?.map((item, index) => (
              <div key={index} className="grid gap-4">
                <FeaturesList fadeUp={fadeUp} features={[item]} />

                {item?.partners && item.partners.length > 0 && (
                  <div className="flex items-center flex-wrap gap-6 mt-6">
                    {item.partners.map((partner, pIndex) => (
                      <FadeInWhenVisible key={pIndex} delay={0.5}>
                        <img
                          loading="lazy"
                          src={`/assets/industries/correction/partner/${partner}.png`}
                          alt={`${item.title} - ${partner}`}
                          className="w-fit h-8 mx-auto"
                        />
                      </FadeInWhenVisible>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </PageLayout>
      </section>
    </>
  );
}
