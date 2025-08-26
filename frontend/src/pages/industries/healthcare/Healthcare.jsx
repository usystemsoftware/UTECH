import HeroSection from "@/components/HeroSection";
import ContactUsButton from "@/custom/ContactUsButton";
import { FeaturesGridnew } from "@/components/FeaturesGridnew";
import { FeaturesList } from "@/components/FeaturesList";
import PageLayout from "@/custom/PageLayout";
import { TypographyH3, Headline, TypographyMuted } from "@/custom/Typography";
import FaqSection from "@/custom/FaqSection";

import {
  dicomFeatures,
  digitalHelthSolutions,
  eRxFeatures,
  healthcareAIFeatures,
  healthcareExtraFeatures,
  healthcareSoftwareFeatures,
  hospitalSystemFeatures,
  hl7IntegrationFeatures,
  limsFeatures,
  pharmacyFeatures,
  rcmFeatures,
  telemedicineFeatures,
  healthcareSupportServices,
  assistiveTechnologyFeatures,
  veterinarySoftwareFeatures,
  healthcareFAQs,
  features,
  healthInformation,
} from "./Data";
import VideoPoster from "@/custom/VideoPoster";
import ImageNearScreen from "@/custom/ImageNearScreen";

export default function Healthcare() {
  return (
    <>
      <HeroSection
        backgroundImage="/banner/healthcare-banner.jpg"
        title="CUSTOM HEALTHCARE SOFTWARE DEVELOPMENT COMPANY"
        description="Transforming Healthcare with Custom Solutions for Greater Efficiency and Patient Care"
        buttonText="Hire Helthcare Developers"
        buttonLink="#"
        imageFit="cover"
      />

      {/* <PageLayout className="py-12"> */}
      <section className="py-16">
        <PageLayout>
          <Headline
            title="FIND THE RIGHT HEALTHCARE SOFTWARE DEVELOPMENT"
            description="We provide custom healthcare software development services in response to the evolving healthcare industry. Being a custom healthcare software development company, our goal is to improve efficiency and patient care at reduced cost and assist in healthcare management decisions."
          />
          <FeaturesGridnew
            leftFeatures={healthcareSoftwareFeatures.slice(0, 7)}
            rightFeatures={healthcareSoftwareFeatures.slice(7, 14)}
            centerImage="/assets/industries/healthcare/desktop-combo-healthcare.png"
            iconSize={38}
          />
        </PageLayout>
      </section>

      {/* </PageLayout> */}
      <section className="relative w-full overflow-hidden">
        <VideoPoster
          features={features}
          title="The Remote Healthcare Revolution has begun!"
        />
      </section>

      <section className="py-16">
        <PageLayout className="space-y-16">
          <Headline
            title="AI-Powered Custom Healthcare Software Development Solutions"
            description="Our expert-level software developers leverage the power and versatility of Artificial Intelligence (AI) to design and implement innovative solutions to meet the healthcare industry’s evolving needs. Our transformative solutions enable healthcare providers and institutions to modernize medicine by deploying cutting-edge resources designed to improve workflows, processes, and optimize patient engagement and care."
          />

          <FeaturesList features={healthcareAIFeatures} grid3 center />
        </PageLayout>
      </section>

      <PageLayout className="space-y-8 py-16">
        <Headline
          title="Custom Digital Health Platform Solutions"
          description="With Digital Health Platforms, medical professionals can take a different approach to their research, health management, and patient care, leading to significant improvements in efficiency and patient outcomes."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center  gap-6">
          {/* Left Features List */}
          <FeaturesList features={digitalHelthSolutions.slice(0, 2)} center />

          {/* Center Animation */}
          <img
            loading="lazy"
            src="/assets/industries/healthcare/industry-leadin-telehealth.png"
            alt="Mobile Analytics App"
            className="w-42 sm:w-52 xl:w-54 2xl:w-58 mx-auto block sm:hidden md:block"
          />

          {/* Right Features List */}
          <FeaturesList features={digitalHelthSolutions.slice(2, 4)} center />
        </div>
      </PageLayout>

      <section className="py-12">
        <PageLayout className="space-y-10 text-center">
          <Headline
            title="Electronic Health Record / Medical Record App Development"
            description="We engineer custom web, desktop or mobile apps that promote enhanced interoperability, streamline clinical workflows, and improve doctor-patient communications. Healthcare IT software implementation is useful for tracking critical information in the medical system."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <img
              loading="lazy"
              src="/assets/industries/healthcare/electronic-medical-records-with-laptop.png"
              alt="Portfolio"
              className="w-135 xl:w-145 2xl:w-165 mx-auto"
            />
            <FeaturesList
              features={healthcareExtraFeatures}
              iconAlign="horizontal"
            />
          </div>

          <ContactUsButton variant="hover">
            Cunsultation for EHR
          </ContactUsButton>
        </PageLayout>
      </section>

      <PageLayout className="space-y-8 py-12 text-center">
        <Headline
          title="Industry-Leading Telehealth & Telemedicine Platforms"
          description="We build custom telehealth apps to deliver remote health services, education, and training for improved efficiency and quality of care."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center gap-6">
          {/* Left Features List */}
          <FeaturesList features={telemedicineFeatures.slice(0, 2)} center />

          {/* Center Animation */}
          <img
            loading="lazy"
            src="/assets/industries/healthcare/cellphone.png"
            alt="Mobile Analytics App"
            className="w-42 sm:w-52 xl:w-54 2xl:w-58 mx-auto block sm:hidden md:block"
          />

          {/* Right Features List */}
          <FeaturesList features={telemedicineFeatures.slice(2, 4)} center />
        </div>
        <ContactUsButton variant="hover">
          Develop Your Telehelth Platform
        </ContactUsButton>
      </PageLayout>

      <section className="py-12">
        <PageLayout className="space-y-10 text-center">
          <Headline
            title="Health Information Exchange (HIE) App Development"
            description="Our engineers build feature-rich and powerful HIE platforms to streamline information exchanges between doctors, patients, and other health practitioners."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 items-center">
            <FeaturesList features={healthInformation} iconAlign="horizontal" />
            <img
              loading="lazy"
              src="/assets/industries/healthcare/healthInformationExchange.png"
              alt="Portfolio"
              className="w-42 sm:w-52 xl:w-54 2xl:w-58 mx-auto"
            />
          </div>
          <ContactUsButton variant="hover">
            DEVELOP LIMS PLATFORM SOLUTIONS
          </ContactUsButton>
        </PageLayout>
      </section>

      <section className="flex flex-col gap-3 justify-center py-12 items-center">
        <Headline
          title="PACS & DICOM Viewer platform"
          description="We deliver end-to-end PACS/DICOM platform designed for secure data and image sharing, archiving, viewing, and more."
        />
        <ImageNearScreen
          features={dicomFeatures}
          src="/assets/industries/construction/building-information-modeling-solutions-cut.png"
          imgClass="w-135 xl:w-145 2xl:w-165"
        />

        {/* CTA ContactUsButton */}
        <ContactUsButton variant="hover" className="mt-8">
          START YOUR PACS/DICOM PROJECT TODAY
        </ContactUsButton>
      </section>

      <section className="bg-secondary py-12">
        <PageLayout className="space-y-10 text-center">
          <Headline
            title="Management System (LIMS) Applications"
            description="We create scalable and flexible LIMS applications to track laboratory storage & inventory, protocol executions, data integrity & security."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 items-center">
            <FeaturesList features={limsFeatures} iconAlign="horizontal" />
            <img
              loading="lazy"
              src="/assets/industries/healthcare/hl7-emr-ehr-software-integrations.png"
              alt="Portfolio"
              className="w-72 sm:w-105 xl:w-115 2xl:w-130 mx-auto"
            />
          </div>
          <ContactUsButton variant="hover">
            DEVELOP LIMS PLATFORM SOLUTIONS
          </ContactUsButton>
        </PageLayout>
      </section>

      <PageLayout className="py-16 space-y-10 text-center">
        <Headline
          title="Pharmacy Management System"
          description="We enhance existing pharmacy management systems with features that promote workflow automation, fully integrated payment processing, and real-time communication."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4 md:gap-8">
          <FeaturesList features={pharmacyFeatures} center grid />
          <img
            loading="lazy"
            src="/assets/industries/healthcare/cell-phone-animation.gif"
            alt="Portfolio"
            className="w-42 sm:w-52 xl:w-54 2xl:w-58 mx-auto block sm:hidden md:block"
          />
        </div>
        <ContactUsButton variant="hover">
          GET PHARMACY POS SOLUTIONS
        </ContactUsButton>
      </PageLayout>

      <section className="bg-secondary py-12">
        <PageLayout className="space-y-10 text-center">
          <Headline
            title="Electronic Prescription (eRx) Software Solutions"
            description="We engineer advanced eRx application solutions to automate clinical decision support, optimize visibility, and streamline prescription processes."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <img
              loading="lazy"
              src="/assets/industries/healthcare/laptop.png"
              alt="Portfolio"
              className="w-135 xl:w-145 2xl:w-165 mx-auto"
            />
            <FeaturesList features={eRxFeatures} iconAlign="horizontal" />
          </div>
          <ContactUsButton variant="hover">
            GET ERX SOFTWARE SOLUTIONS
          </ContactUsButton>
        </PageLayout>
      </section>

      <PageLayout className="space-y-8 py-16 text-center">
        <Headline
          title="Industry-Leading Telehealth & Telemedicine Platforms"
          description="We build custom telehealth apps to deliver remote health services, education, and training for improved efficiency and quality of care."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center gap-6">
          {/* Left Features List */}
          <FeaturesList features={hospitalSystemFeatures.slice(0, 2)} center />

          {/* Center Animation */}
          <img
            loading="lazy"
            src="/assets/industries/healthcare/custom-hl7-interface-software-solutions.png"
            alt="Mobile Analytics App"
            className="w-54 sm:w-64 xl:w-68 2xl:w-72 mx-auto block sm:hidden md:block"
          />

          {/* Right Features List */}
          <FeaturesList features={hospitalSystemFeatures.slice(2, 4)} center />
        </div>
        <ContactUsButton variant="hover">
          GET HIS/PMS SOFTWARE SOLUTIONS
        </ContactUsButton>
      </PageLayout>

      <section className="bg-secondary py-12">
        <PageLayout className="space-y-10 text-center">
          <Headline
            title="Revenue Cycle Management (RCM) Software Solutions"
            description="Our custom-tailored RCM software solutions offer a single, centralized platform that enables faster and more efficient payment cycle organization."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <FeaturesList features={rcmFeatures} iconAlign="horizontal" />
            <img
              loading="lazy"
              src="/assets/industries/healthcare/hl7-fhir-interface-software-development.png"
              alt="Portfolio"
              className="w-135 xl:w-145 2xl:w-165 mx-auto"
            />
          </div>
          <ContactUsButton variant="hover">
            GET RCM SOFTWARE SOLUTIONS
          </ContactUsButton>
        </PageLayout>
      </section>

      <PageLayout className="py-16 space-y-10 text-center">
        <Headline
          title="HL7 Interface Software Solutions"
          description="We create custom HL7 interface solutions for optimal interfacing, interconnectivity, and interoperability of healthcare applications, data management, and workflows."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
          <img
            loading="lazy"
            src="/assets/industries/healthcare/hl7-fhir-interface-software-development.png"
            alt="Portfolio"
            className="w-135 xl:w-145 2xl:w-165 mx-auto"
          />
          <FeaturesList features={hl7IntegrationFeatures} center grid />
        </div>
        <ContactUsButton variant="hover">GET HL7 INTERGRATION</ContactUsButton>
      </PageLayout>

      <section className="bg-secondary py-16">
        <PageLayout className="space-y-16">
          <Headline
            title="Healthcare Software Support Services"
            description="In the dynamic digital realm, robust healthcare application support, including FHIR integration support, ICD-10 support (diagnosis coding), and Healthcare IT help desk services, are essential for seamless business operations. U Tech stands out with an unwavering commitment to delivering comprehensive support, ensuring your applications—including third-party MEDITECH support and medical middleware support—thrive in today's complex healthcare landscape."
          />

          <FeaturesList features={healthcareSupportServices} center grid3 />
        </PageLayout>
      </section>

      <PageLayout className="my-16 py-16 grid grid-cols-1 items-center md:grid-cols-2 space-y-10 bg-cyan-50">
        <div className="space-y-8 dark:text-black">
          <TypographyH3>
            WE ENSURE YOUR SOLUTIONS ARE COMPLIANT WITH REGULATORY STANDARDS
          </TypographyH3>
          <TypographyMuted>
            U Tech's developers ensure your custom healthcare software complies
            with regulatory standards including specifications set by the U.S.
            Department of Health and Human Services (HHS), Office of the
            National Coordinator – Authorized Testing and Certification Body
            (ONC-ATCB), HITECH's Meaningful Use Stage 1 and 2 (MU-1 & MU-2),
            Health Insurance Portability and Accountability Act (HIPAA), Health
            Level 7 International (HL7), and the 21st Century Cures Act.
          </TypographyMuted>
        </div>
        <img
          loading="lazy"
          src="/assets/industries/healthcare/get-hl7-solutions.png"
          alt="Portfolio"
          className="w-135 xl:w-175 2xl:w-200 mx-auto"
        />
      </PageLayout>

      <section className="bg-secondary py-12">
        <PageLayout className="space-y-10 text-center">
          <Headline
            title="Assistive Technology Software Solutions"
            description="We build custom-tailored assistive technology software solutions to improve the quality of care for those with disabilities."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
            <img
              loading="lazy"
              src="/assets/industries/healthcare/voice-recognition.gif"
              alt="Portfolio"
              className="w-42 sm:w-48 xl:w-54 2xl:w-58 mx-auto"
            />
            <FeaturesList
              features={assistiveTechnologyFeatures}
              iconAlign="horizontal"
            />
          </div>
          <ContactUsButton variant="hover">
            Get Assistive Tech Solutions
          </ContactUsButton>
        </PageLayout>
      </section>

      <PageLayout className="space-y-8 py-12 text-center">
        <Headline
          title="Veterinary Practice Management Software Solutions"
          description="We develop robust and intuitive cloud-based veterinary practice management software to organize workflows and improve vet clinic productivity."
        />

        <div className="grid grid-cols-1 sm:grid-cols-3 items-center gap-4">
          {/* Left Features List */}
          <FeaturesList
            features={veterinarySoftwareFeatures.slice(0, 2)}
            center
          />
          {/* Center Animation */}
          <img
            loading="lazy"
            src="/assets/industries/healthcare/veterinary-practice-management-software-solutions.png"
            alt="Mobile Analytics App"
            className="w-42 sm:w-52 xl:w-54 2xl:w-58 mx-auto"
          />
          {/* Right Features List */}
          <FeaturesList
            features={veterinarySoftwareFeatures.slice(2, 4)}
            center
          />
        </div>
        <ContactUsButton variant="hover">
          GET VETERINITY SOFTWARE SOLUTIONS
        </ContactUsButton>
      </PageLayout>

      <div className="py-12">
        <FaqSection faqs={healthcareFAQs} title="FAQ's" />
      </div>
    </>
  );
}
