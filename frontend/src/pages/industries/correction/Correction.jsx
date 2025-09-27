import { FeaturesList, FeaturesListOpposite } from "@/components/FeaturesList";
import HeroSection from "@/components/HeroSection";
import PageLayout from "@/custom/PageLayout";
import ImageNearScreen from "@/custom/ImageNearScreen";
import ContactUsButton from "@/custom/ContactUsButton";
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
import correction_banner from "../../../../public/banner/correction-banner.jpg";
import jail_mgmt_systems from "../../../../public/assets/Industries/correction/jail-mgmt-systems.png";
import workflow_mgmt from "../../../../public/assets/Industries/correction/workflow-mgmt.png";
import logistics_software_developers from "../../../../public/assets/Industries/correction/logistics-software-developers.png";
import building_information_modeling_solutions_cut from "../../../../public/assets/Industries/construction/building-information-modeling-solutions-cut.png";
import task_laptop from "../../../../public/assets/Industries/correction/task-laptop.png";
import immate_tracking_mobile from "../../../../public/assets/Industries/correction/immate-tracking-mobile.png";
import jail_security_solutions from "../../../../public/assets/Industries/correction/jail-security-solutions.png";
import jail_management_solutions_laptop from "../../../../public/assets/Industries/correction/jail-management-solutions-laptop.png";
import hrms_solutions from "../../../../public//assets/Industries/correction/hrms-solutions.png";

export default function Correction() {
  return (
    <>
      <HeroSection
        backgroundImage={correction_banner}
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

        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
          {/* Features List */}
          <div className="text-start order-2 md:order-1">
            <TypographyH5>Jail Management System Development</TypographyH5>
            <TypographyMuted className="mb-8">
              Our expert team of software developers & engineers build Jail
              Management System Development from scratch or integrate custom
              features within your existing solution to streamline workflows and
              optimize jailhouse operations.
            </TypographyMuted>
            <FeaturesList
              features={jailManagementSolutions}
              iconAlign="horizontal"
            />
          </div>

          {/* Left Image */}
          <img
            loading="lazy"
            src={jail_mgmt_systems}
            alt="Portfolio"
            className="w-42 sm:w-56 xl:w-62 mx-auto order-1 md:order-2"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          {/* Left Image */}
          <img
            loading="lazy"
            src={workflow_mgmt}
            alt="Portfolio"
            className="w-72 sm:w-86 xl:w-135 2xl:w-155 mx-auto"
          />

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
              features={facilityOperationsSolutions}
              iconAlign="horizontal"
            />
          </div>
        </div>

        {/* CTA ContactUsButton */}
        <ContactUsButton variant="hover">
          OPTIMIZE JAIL OPERATIONS
        </ContactUsButton>
      </PageLayout>

      <section className="bg-secondary pt-10 ">
        <PageLayout className="space-y-10">
          <FeaturesList features={correctionalAdminSolutions} grid center />
          <img
            loading="lazy"
            src={logistics_software_developers}
            alt="Portfolio"
            className="sm:w-[60%] w-full mx-auto"
          />
        </PageLayout>
      </section>

      <section className="py-16 space-y-8 text-center">
        <Headline
          title="Commissary & Visitation Management Solutions"
          description="We build robust Commissary Management & Visitation Management Solutions with a suite of tools designed for streamlining correctional facility operations."
        />

        <ImageNearScreen
          features={inmateServicesSolutions}
          src={building_information_modeling_solutions_cut}
          imageAlign="left"
          imgClass="w-145"
        />

        <ContactUsButton variant="hover">GET STARTED</ContactUsButton>
      </section>

      <section className="bg-secondary py-16">
        <PageLayout className="space-y-10">
          <Headline
            title="AI-Powered Corrections & Jail Management Software Solutions"
            description="Our AI algorithms for correctional management software assist in effective operation and resource management. Our Artificial intelligence algorithms contribute to robust security measures through real-time surveillance and risk assessment."
          />

          <FeaturesListOpposite features={aiDrivenCorrectionalSolutions} />
        </PageLayout>
      </section>

      <section className="py-16 space-y-8 text-center">
        <Headline
          title="Correctional Medical Management Solutions"
          description="We develop and integrate Inmate EMR, EHR, EMAR, and other medical data into existing Jail Management Solutions for optimized interoperability and flexibility."
        />

        <ImageNearScreen
          features={inmateHealthcareSolutions}
          src={task_laptop}
          imageAlign="right"
          imgClass="w-115 xl:w-120 2xl:w-135"
        />
      </section>

      <section className="py-12 bg-secondary">
        <PageLayout className="space-y-10 text-center">
          <Headline
            title="Inmate Tracking & Security Software Solutions"
            description="Our custom Inmate Tracking & Security Software Solutions allow correctional facilities to track all inmate movements and measure employee performances in real-time."
          />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
            {/* Left Features List */}
            <FeaturesList
              features={inmateManagementSolutions.slice(0, 2)}
              center
            />

            {/* Center Animation */}
            <img
              loading="lazy"
              src={immate_tracking_mobile}
              alt="Mobile Analytics App"
              className="sm:w-48 md:w-52 xl:w-56 2xl:w-62 w-42 mx-auto"
            />

            {/* Right Features List */}
            <FeaturesList
              features={inmateManagementSolutions.slice(2, 4)}
              center
            />
          </div>
          <ContactUsButton variant="hover">
            UPGRADE TRACKING SYSTEMS
          </ContactUsButton>
        </PageLayout>
      </section>

      <section className="py-8 space-y-8 text-center">
        <ImageNearScreen
          features={jailSecuritySolutions}
          src={jail_security_solutions}
          imageAlign="right"
          imgClass="w-120 xl:w-130 2xl:w-140"
        />
      </section>

      <section className="py-12 bg-secondary">
        <PageLayout className="py-8 space-y-8 text-center">
          <Headline
            title="Inmate Reentry Software Solutions"
            description="We design Inmate Reentry Solutions that automate and streamline offender release program processes while aiding in reducing recidivism."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <img
              loading="lazy"
              src={jail_management_solutions_laptop}
              alt="Mobile Analytics App"
              className="w-76 sm:w-96 md:w-110 xl:w-120 2xl:w-135 mx-auto"
            />
            <FeaturesList features={inmateReleaseSolutions} grid center />
          </div>

          <ContactUsButton variant="hover">
            GET INMATE REENTRY SOLUTIONS
          </ContactUsButton>
        </PageLayout>
      </section>

      <PageLayout className="py-16 space-y-10 text-center">
        <Headline
          title="Human Resource Management Solutions"
          description="We offer Human Resource Management & Human Capital Management (HCM) Software Development Services to manage correctional officers and civilian staff members."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-8">
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
              features={correctionalHrSecuritySolutions}
              iconAlign="horizontal"
            />
          </div>

          {/* Left Image */}
          <img
            loading="lazy"
            src={hrms_solutions}
            alt="Portfolio"
            className="md:w-64 sm:w-52 w-42 mx-auto"
          />
        </div>
        {/* CTA ContactUsButton */}
        <ContactUsButton variant="hover">GET HRMS SOLUTIONS</ContactUsButton>
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
                <FeaturesList features={[item]} />

                {item?.partners && item.partners.length > 0 && (
                  <div className="flex items-center justify-center flex-wrap gap-6 mt-6">
                    {item.partners.map((partner, pIndex) => (
                      <div key={pIndex}>
                        <img
                          loading="lazy"
                          src={`/assets/industries/correction/partner/${partner}.png`}
                          alt={`${item.title} - ${partner}`}
                          className=" mx-auto"
                        />
                      </div>
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
