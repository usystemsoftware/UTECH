import React from "react";
import HeroSection from "@/components/HeroSection";
import PageLayout from "@/custom/PageLayout";
import { FadeInWhenVisible, fadeUp } from "@/custom/FadeInWhenVisible";
import { FeaturesList } from "@/components/FeaturesList";
import { Button } from "@/components/ui/button";
import { Headline, TypographyMuted, TypographyH5 } from "@/custom/Typography";
import FaqSection from "@/custom/FaqSection";
import {
  migrationServicesfedus,
  migrationfedus,
  migrationFeatures,
  migrationRemote,
  dicominMigration,
  MigrationSolutions,
  migrationData,
  faqs,
} from "./Data";

const MigrationsUpgrades = () => {
  return (
    <>
      {/* === HERO SECTION === */}
      <HeroSection
        backgroundImage="/banner/MigrationsUpgrades.jpg"
        title="Data Migration Services"
        description="Empowering Your Technology Landscape With Seamless Data Migration Solutions"
        buttonText="HIRE DATA MIGRATION EXPERTS"
        buttonLink="#"
        imageFit="cover"
      />

      {/* === IT Infrastructure Support Services === */}
      <PageLayout className="text-center space-y-10 pt-6">
        <Headline
          title="Hire Experienced Data Migration Experts"
          description="U Tech is a leading software development company providing expert data migration services. With years of experience, our skilled team migrates databases, servers, user accounts, agent jobs, and SSIS packages with minimal downtime. Our solutions ensure a smooth transition from outdated to modern systems, enhancing efficiency and reducing costs. Whether migrating to the cloud or upgrading platforms, U Tech's data migration solutions are tailored to meet your unique needs and ensure a successful outcome."
        />
        <FeaturesList features={migrationServicesfedus} fadeUp={fadeUp} grid />
        <FadeInWhenVisible delay={0.4}>
          <Button variant="hover">REQUEST MIGRATION SERVICES</Button>
        </FadeInWhenVisible>
        <FadeInWhenVisible delay={0.5}>
          <img
            loading="lazy"
            src="/assets/services/migration/dashboard.png"
            alt="Portfolio"
            className="w-135 mx-auto"
          />
        </FadeInWhenVisible>
      </PageLayout>

      {/* === AI-Powered Migration Services === */}
      <section className="bg-secondary">
        <PageLayout className="text-center space-y-10 py-6">
          <Headline
            title="Artificial Intelligence Solutions for Data Migration"
            description="U Tech’s software specialists leverage Artificial Intelligence to streamline workflow and ensure seamless data transition to cloud-based and existing platforms. Our AI-enhanced data migration automates data management, report generation, and project monitoring to enable data-driven decisions and boost business intelligence."
          />
          <FeaturesList features={migrationfedus} fadeUp={fadeUp} grid />
          <FadeInWhenVisible delay={0.4}>
            <Button variant="hover">GET AI SOLUTIONS FOR DATA MIGRATION</Button>
          </FadeInWhenVisible>
        </PageLayout>
      </section>

      {/* === Database Migration Automation === */}
      <PageLayout className="py-6 text-center">
        <Headline
          title="Database Migration Automation"
          description="We approach your data with more scalability in mind by creating automated data migration systems that process, analyze, and map unlimited fields to your new database."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-15">
          <FadeInWhenVisible>
            <img
              loading="lazy"
              src="/assets/services/migration/automate.png"
              alt="Migration Planning Dashboard"
              className="mx-auto hidden sm:block"
            />
          </FadeInWhenVisible>
          <div className="text-start space-y-4">
            <TypographyH5>Database Migration Automation</TypographyH5>
            <TypographyMuted>
              We leverage schema migration tools like AWS DMS, Azure, MySQL
              Workbench...
            </TypographyMuted>
            <FeaturesList features={migrationFeatures} fadeUp={fadeUp} />
          </div>
        </div>
        <FadeInWhenVisible className="py-10">
          <Button variant="hover">AUTOMATE YOUR DATABASE MIGRATION</Button>
        </FadeInWhenVisible>
      </PageLayout>

      {/* === Remote DBA Services Section === */}
      <section className="bg-secondary">
        <PageLayout className="py-6 text-center">
          <Headline
            title="Remote DBA Services From U Tech’s Experts"
            description="Whether you need to migrate to a new platform, move to the cloud, or upgrade your legacy systems, U Tech can augment your existing IT team to get the job done quickly and affordably."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-15">
            <FeaturesList features={migrationRemote} fadeUp={fadeUp} />
            <FadeInWhenVisible>
              <img
                loading="lazy"
                src="/assets/services/migration/experts.png"
                alt="Migration Planning Dashboard"
                className="mx-auto hidden sm:block"
              />
            </FadeInWhenVisible>
          </div>
        </PageLayout>
      </section>

      {/* === Dicomin Migration Services Section === */}
      <PageLayout className="py-16 space-y-10 text-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-4 md:gap-8">
          <FadeInWhenVisible delay={0.5}>
            <img
              loading="lazy"
              src="/assets/services/migration/reliable.png"
              alt="Portfolio"
              className="w-135 mx-auto"
            />
          </FadeInWhenVisible>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FeaturesList
              fadeUp={fadeUp}
              features={dicominMigration.slice(0, 2)}
            />
            <FeaturesList
              fadeUp={fadeUp}
              features={dicominMigration.slice(2, 4)}
            />
          </div>
        </div>
        <FadeInWhenVisible>
          <Button variant="hover">HIRE DATA MIGRATION EXPERTS</Button>
        </FadeInWhenVisible>
      </PageLayout>

      {/* === Migration Tools Logos Section === */}
      <section className="bg-secondary">
        <PageLayout className="space-y-8 text-center py-6">
          <Headline
            title="We Use Leading Open-Source, On-Premise, & Cloud-Based Data Migration Tools"
            description="Our data migration experts have global, multi-industry experience executing business solutions using proven, digitally-gathered data methodologies, practices, and tools."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
            {MigrationSolutions?.map((item, index) => (
              <FadeInWhenVisible key={index} delay={0.3 + index * 0.2}>
                <div className="mt-10 text-center space-y-4 px-4">
                  <TypographyH5>{item.title}</TypographyH5>
                  <TypographyMuted>{item.description}</TypographyMuted>
                  <div className="flex items-center flex-wrap justify-center gap-4 mt-4">
                    {item?.partners.map((partner, pIndex) => (
                      <img
                        key={pIndex}
                        loading="lazy"
                        src={`/assets/services/migration/images/${partner}.png`}
                        alt={`${item.title} - ${partner}`}
                        className="w-12 h-12 object-contain"
                      />
                    ))}
                  </div>
                </div>
              </FadeInWhenVisible>
            ))}
          </div>
        </PageLayout>
      </section>

      {/* === Data Migration Support Section === */}
      <PageLayout className="text-center space-y-10 py-6">
        <Headline
          title="Data Migration Support Services"
          description="Our highly skilled IT professionals provide expert data migration support services to ensure seamless transitions. We offer specialized assistance, timely troubleshooting and debugging, and active monitoring services."
        />
        <FeaturesList features={migrationData} fadeUp={fadeUp} grid />
        <FadeInWhenVisible delay={0.4}>
          <Button variant="hover">GET DATA MIGRATION SUPPORT</Button>
        </FadeInWhenVisible>
      </PageLayout>

      {/* === FAQ SECTION === */}
      <div className="bg-secondary py-6">
        <FaqSection faqs={faqs} title="FAQ's" />
      </div>
    </>
  );
};

export default MigrationsUpgrades;
