import HeroSection from "@/components/HeroSection";
import PageLayout from "@/custom/PageLayout";
import { TypographyMuted, Headline } from "@/custom/Typography";
import {
  gamingSoftwareLeftFeatures,
  gamingSoftwareRightFeatures,
  gamingSolutions,
  gamingLoanServicingfeatures,
  gameEngineLogos,
} from "./Data";
import { FeaturesGrid } from "@/components/FeaturesGridCard";
import { FadeInWhenVisible, fadeUp } from "@/custom/FadeInWhenVisible";
import { Button } from "@/components/ui/button";
import { FeaturesList } from "@/components/FeaturesList";

const Gaming = () => (
  <div>
    {/* ===== HERO SECTION ===== */}
    <HeroSection
      backgroundImage="/assets/industries/gaming/photo.jpg"
      title="GAME DEVELOPMENT SERVICES"
      description="Transforming Game Development With AI-Powered Innovation"
      buttonText="GET API DEVELOPERS"
      buttonLink="HIRE GAME DEVELOPERS"
      imageFit="cover"
      overlayOpacity={0.6}
    />

    <PageLayout className="text-center py-10">
      <Headline
        title="U Technology’s Game Development Services"
        description="Our certified gaming software development experts can create your video game project from scratch or revamp existing solutions with updates and integrations to stay in line with current gaming industry trends."
      />
      <FeaturesGrid
        leftFeatures={gamingSoftwareLeftFeatures}
        rightFeatures={gamingSoftwareRightFeatures}
        centerImage="/assets/industries/gaming/combo.png"
        fadeUp={fadeUp}
        iconSize={38}
      />
    </PageLayout>

    <div className="bg-secondary py-12">
      <PageLayout className="py-8 text-center space-y-8">
        <Headline
          title="Custom PixiJS Development"
          description="Are you looking to create impressive PixiJS examples or PixiJS games? At U Technology’s, we leverage the power of PixiJS, the HTML5 creation engine that offers the quickest and most adaptable 2D WebGL renderer."
        />

        <FadeInWhenVisible className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <FeaturesList features={gamingSolutions.slice(0, 2)} />
          <FeaturesList features={gamingSolutions.slice(2, 4)} />
          <FeaturesList features={gamingSolutions.slice(4, 6)} />
        </FadeInWhenVisible>
      </PageLayout>
    </div>

    <PageLayout className="py-8 text-center space-y-6">
      <Headline
        title="Custom Loan Servicing & Origination Solutions"
        description="U Technology’s custom loan servicing and origination personalized solutions handle underwriting, origination, disbursement, servicing, amortization, processing, and so much more for financial services and institutions."
      />
      <FeaturesList
        features={gamingLoanServicingfeatures}
        fadeUp={fadeUp}
        iconSize={38}
        image="/assets/industries/gaming/services.png"
        imageClass="w-135"
        grid
      />
      <TypographyMuted>
        We integrate with gaming industry-leading video game development tools
        and gaming engines, including:
      </TypographyMuted>
      <div className="flex flex-wrap justify-center items-center gap-6 my-2">
        {gameEngineLogos.map((logo, idx) => (
          <img key={idx} src={logo.src} alt={logo.alt} className="h-10" />
        ))}
      </div>
      <FadeInWhenVisible>
        <Button variant="hover">HIRE VIDEO GAME DEVELOPER</Button>
      </FadeInWhenVisible>
    </PageLayout>
  </div>
);

export default Gaming;
