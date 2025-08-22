import HeroSection from "@/components/HeroSection";
import PageLayout from "@/custom/PageLayout";
import { FeaturesList } from "@/components/FeaturesList";
import ContactUsButton from "@/custom/ContactUsButton";
import { Headline, TypographyH5, TypographyMuted } from "@/custom/Typography";

// Importing all feature arrays from external data file
import {
  cloudBackupSolutions,
  dataManagementSolutions,
  dataProtectionSolutions,
  enterpriseIntegrations,
  securityBackupSolutions,
} from "./Data";

export default function BackupRecovery() {
  return (
    <>
      {/* Hero Section with background image, title, and CTA button */}
      <HeroSection
        backgroundImage="/banner/backup-recovery-banner.jpg"
        title="Data Backup & Recovery Services"
        buttonText="GET DATA BACKUP AND RECOVERY SOLUTIONS"
        buttonLink="#"
        imageFit="cover"
      />

      {/* Main content layout */}
      <PageLayout className="py-16 space-y-10 text-center">
        {/* Headline: Intro to services */}
        <Headline
          title="Our Experienced Team Will Backup & Recover Your Data Fast"
          description="We provide physical, cloud-to-cloud, and virtual data center backup and recovery services to manage the health of backup servers in any environment."
        />

        {/* Section 1: Data Protection Services with image and feature list */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-8 md:text-start text-center order-2 md:order-1">
            <div>
              <TypographyH5>Data Backup & Recovery Services</TypographyH5>
              <TypographyMuted>
                U Tech offers fast, easy, and reliable data backup and recovery
                services for a wide variety of enterprise infrastructures,
                ensuring robust, scalable, and vigorously maintained data
                safeguards.
              </TypographyMuted>
            </div>

            {/* Feature list: dataProtectionSolutions */}
            <FeaturesList
              features={dataProtectionSolutions}
              iconAlign="horizontal"
            />
          </div>

          {/* Right-side image */}
          <img
            loading="lazy"
            src="/assets/services/backup-recovery/our-experienced-developers.png"
            alt="Mobile App Devices"
            className="w-145 xl:w-155 2xl:w-175 mx-auto order-1 md:order-2"
          />
        </div>

        {/* Section 2: Cloud backup solutions with feature list and image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <img
            loading="lazy"
            src="/assets/services/backup-recovery/data-backup-&-recovery-integrations.png"
            alt="Mobile App Devices"
            className="w-42 sm:w-52 xl:w-56 2xl:w-62 mx-auto"
          />

          {/* Feature list: cloudBackupSolutions (grid format) */}
          <FeaturesList features={cloudBackupSolutions} grid center />
        </div>

        {/* CTA ContactUsButton */}
        <ContactUsButton variant="hover">
          SPEAK WITH OUR DATA BACKUP CONSULTANTS
        </ContactUsButton>
      </PageLayout>

      {/* Section: Custom Data Center Backup Solutions */}
      <section className="py-12 bg-secondary">
        <PageLayout className="space-y-10 text-center">
          {/* Section headline */}
          <Headline
            title="Custom Data Center Backup & Recovery Solutions"
            description="We provide all-in-one data protection, backup, and recovery solutions for VMs, databases, applications, Windows file systems, and containers in hybrid-cloud environments."
          />

          {/* Section 3: Data Management Solutions with features and image */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-8 md:text-start text-center order-2 md:order-1">
              <div>
                <TypographyH5>
                  Backup & Disaster Recovery Solutions
                </TypographyH5>
                <TypographyMuted>
                  Our backup & disaster recovery specialists eliminate the
                  malware, delete criminally encrypted files, and quickly
                  restore a clean copy of your valuable data quickly and
                  reliably.
                </TypographyMuted>
              </div>

              {/* Feature list: dataManagementSolutions */}
              <FeaturesList
                features={dataManagementSolutions}
                iconAlign="horizontal"
              />
            </div>

            {/* Right-side image */}
            <img
              loading="lazy"
              src="/assets/services/backup-recovery/custom-data-center.png"
              alt="Mobile App Devices"
              className="w-145 xl:w-155 2xl:w-175 mx-auto order-1 md:order-2"
            />
          </div>

          {/* Section 4: Security Backup Solutions with features and image */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <img
              loading="lazy"
              src="/assets/services/backup-recovery/data-replication-database.png"
              alt="Mobile App Devices"
              className="w-145 xl:w-155 2xl:w-175 mx-auto"
            />

            {/* Feature list: securityBackupSolutions (grid format) */}
            <FeaturesList features={securityBackupSolutions} grid center />
          </div>

          {/* CTA ContactUsButton */}
          <ContactUsButton variant="hover">
            GET BACKUP AND RECOVERY SOLUTIONS
          </ContactUsButton>
        </PageLayout>
      </section>

      {/* Final Section: Software Integrations */}
      <PageLayout className="py-16 text-center space-y-10">
        <Headline
          title="Data Backup & Recovery Software Integrations"
          description="We integrate our custom backup & recovery software and third-party solutions with your existing business systems to prevent data loss and protect your assets."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Feature list: enterpriseIntegrations */}
          <FeaturesList features={enterpriseIntegrations} grid center />

          {/* Right-side image with vendor logos */}
          <img
            loading="lazy"
            src="/assets/services/backup-recovery/data-backup-&-recovery-with-logos.png"
            alt="Mobile App Devices"
            className="w-145 xl:w-155 2xl:w-175 mx-auto"
          />
        </div>

        {/* CTA ContactUsButton */}
        <ContactUsButton variant="hover">
          INTERGRATE BACKUP AND RECOVERY SOLUTIONS
        </ContactUsButton>
      </PageLayout>
    </>
  );
}
