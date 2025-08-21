import HeroSection from "@/components/HeroSection";
import PageLayout from "@/custom/PageLayout";
import { TypographyMuted, Headline } from "@/custom/Typography";
import { FeaturesGridnew } from "@/components/FeaturesGridnew";
import { FadeInWhenVisible, fadeUp } from "@/custom/FadeInWhenVisible";
import ContactUsButton from "@/custom/ContactUsButton";
import { FeaturesList } from "@/components/FeaturesList";
import FaqSection from "@/custom/FaqSection";
import {
  gamingSoftwareLeftFeatures,
  gamingSoftwareRightFeatures,
  gamingSolutions,
  gamingLoanServicingfeatures,
  gameEngineLogos,
  gameFeatures,
  gamingLoanServicing,
  gameFeatureslist,
  gameFeaturestitle,
  gamingconceptServicing,
  GammingMobile,
  gameFantasy,
  gammingSolutiondeveloper,
  faqs,
  gammingSupportApplication,
} from "./Data";

const Gaming = () => (
  <div>
    {/* === HERO SECTION === */}
    <HeroSection
      backgroundImage="/banner/blockchain-social-media-platform-banner.jpg"
      title="GAME DEVELOPMENT SERVICES"
      description="Game Development Company: Services That Transform Play"
      buttonText="HIRE GAME DEVELOPERS"
      buttonLink="HIRE GAME DEVELOPERS"
      imageFit="cover"
    />

    {/* === U Technology’s Game Development Services Section === */}
    <PageLayout className="text-center py-10">
      <Headline
        title="U Technology’s Game Development Services"
        description="Our certified gaming software development experts can create your video game project from scratch or revamp existing solutions with updates and integrations to stay in line with current gaming industry trends."
      />
      <FeaturesGridnew
        leftFeatures={gamingSoftwareLeftFeatures}
        rightFeatures={gamingSoftwareRightFeatures}
        centerImage="/assets/industries/gaming/combo.png"
        iconSize={38}
      />
    </PageLayout>

    {/* === Custom PixiJS Development Section === */}
    <section className="bg-secondary py-16">
      <PageLayout className="text-center space-y-10">
        <Headline
          title="Custom PixiJS Development"
          description="Are you looking to create impressive PixiJS examples or PixiJS games? At U Technology’s, we leverage the power of PixiJS, the HTML5 creation engine that offers the quickest and most adaptable 2D WebGL renderer."
        />
        <FeaturesList
          features={gamingSolutions}
          grid3
          center
        />
      </PageLayout>
    </section>

    {/* === Custom Loan Servicing & Origination Solutions Section === */}
    <PageLayout className="py-12 text-center space-y-12">
      <Headline
        title="Custom Loan Servicing & Origination Solutions"
        description="U Technology’s custom loan servicing and origination personalized solutions handle underwriting, origination, disbursement, servicing, amortization, processing, and so much more for financial services and institutions."
      />
      <FeaturesList
        features={gamingLoanServicingfeatures}
        iconSize={38}
        image="/assets/industries/gaming/services.png"
        imageClass="w-135 mx-auto"
        grid
        center
      />
      <TypographyMuted>
        We integrate with gaming industry-leading video game development tools
        and gaming engines, including:
      </TypographyMuted>
      <div className="flex flex-wrap justify-center items-center gap-6 my-8">
        {gameEngineLogos.map((logo, idx) => (
          <img key={idx} src={logo.src} alt={logo.alt} className="h-10" />
        ))}
      </div>
      <ContactUsButton variant="hover">HIRE VIDEO GAME DEVELOPER</ContactUsButton>
    </PageLayout>

    {/* === Mobile Game Development Services Section === */}
    <section className="bg-secondary py-16">
      <PageLayout className="text-center space-y-10">
        <Headline
          title="Mobile Game Development Services"
          description="U Tech’s mobile game software solutions allow you to deliver engaging and highly immersive games to players worldwide, built with cutting-edge technology and monetization solutions."
        />
        <FeaturesList
          features={GammingMobile}
          grid3
          center
        />
        <ContactUsButton variant="hover">HIRE MOBILE GAME DEVELOPERS</ContactUsButton>
      </PageLayout>
    </section>

    {/* === AR & VR Development Game Services Section === */}
    <PageLayout className="py-16 space-y-10 text-center">
      <Headline
        title="AR & VR Development Game Services"
        description="U Tech provides full cycle of AR & VR game solutions and applications, engineering native, web, and hybrid platforms for tablets and other mobile devices."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6">
        <FadeInWhenVisible className="hidden sm:block">
          <img
            loading="lazy"
            src="/assets/industries/gaming/development.png"
            alt="Migration Planning Dashboard"
            className="mx-auto w-120"
          />
        </FadeInWhenVisible>
        <FeaturesList
          features={gameFeatures}
          iconAlign="horizontal"
        />
      </div>
      <ContactUsButton variant="hover">GET AR/VR GAME SOLUTIONS</ContactUsButton>
    </PageLayout>

    {/* === iGaming Development Services Section === */}
    <section className="bg-secondary py-12">
      <PageLayout className="text-center space-y-10">
        <Headline
          title="iGaming Development Services"
          description="We excel in developing cutting-edge iGaming solutions tailored to your specific needs. Our team of gaming development experts are here to deliver the ultimate AI-powered iGaming solutions with unparalleled functionality or quality, whether you’re looking to launch a new platform or enhance an existing one.."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
          <FeaturesList
            features={gamingLoanServicing}
            grid
            center
          />
          <FadeInWhenVisible className="hidden md:block">
            <img
              loading="lazy"
              src="/assets/industries/gaming/igaming.png"
              alt="Migration Planning Dashboard"
              className="mx-auto w-70"
            />
          </FadeInWhenVisible>
        </div>
        <ContactUsButton variant="hover">GET IGAMING SOFTWARE PROVIDER</ContactUsButton>
      </PageLayout>
    </section>

    {/* === Social Gaming Development Services Section === */}
    <PageLayout className="py-16 space-y-10 text-center">
      <Headline
        title="Social Gaming Development Services"
        description="We specialize in creating engaging and immersive social gaming experiences. Our team of experts is dedicated to creating top-notch custom social gaming solutions that fit your needs. We develop social games of all kinds, from MMORPGs to social network games and online board games, creating new platforms or enhancing existing ones."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6">
        <FadeInWhenVisible>
          <img
            loading="lazy"
            src="/assets/industries/gaming/social.png"
            alt="Migration Planning Dashboard"
            className="mx-auto"
          />
        </FadeInWhenVisible>
        <FeaturesList
          features={gameFeatureslist}
          iconAlign="horizontal"
        />
      </div>
      <ContactUsButton variant="hover">GET SOCIAL GAMING SOLUTIONS</ContactUsButton>
    </PageLayout>

    {/* === Unreal Engine Game Development Section === */}
    <section className="bg-secondary py-16">
      <PageLayout className="space-y-10 text-center">
        <Headline
          title="Unreal Engine Game Development"
          description="U Tech’s Unreal Engine developers create stunning games and immersive cinematic experiences deployed on video game console, mobile, and IoT quality devices."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6">
          <FeaturesList
            features={gameFeaturestitle}
            iconAlign="horizontal"
          />
          <FadeInWhenVisible className="hidden sm:block">
            <img
              loading="lazy"
              src="/assets/industries/gaming/animation.png"
              alt="Migration Planning Dashboard"
              className="mx-auto w-155"
            />
          </FadeInWhenVisible>
        </div>
        <ContactUsButton variant="hover">HIRE UNREAL ENGINE DEVELOPER</ContactUsButton>
      </PageLayout>
    </section>

    {/* === Game Concept Art Software Development Services Section === */}
    <PageLayout className="py-16 text-center space-y-10">
      <Headline
        title="Game Concept Art Software Development Services"
        description="Our 2D & 3D game artists create original characters, complex storyboards, realistic environments, and creative mock-ups from pixel art to high-rez 2D and 2.5D illustrations."
      />
      <FeaturesList
        features={gamingconceptServicing}
        iconSize={38}
        image="/assets/industries/gaming/gameart.png"
        grid
        reverse
        center
      />
      <ContactUsButton variant="hover">GET GAMING ART DEVELOPERS</ContactUsButton>
    </PageLayout>

    {/* === Fantasy Sports Software Development Section === */}
    <section className="bg-secondary py-16">
      <PageLayout className="text-center space-y-10">
        <Headline
          title="Fantasy Sports Software Development Services"
          description="U Tech’s experts add new and updated functionalities to existing fantasy sports software, delivering streamlined solutions that enhance user experience all season long"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6">
          <FeaturesList
            features={gameFantasy}
            iconAlign="horizontal"
          />
          <FadeInWhenVisible className="hidden sm:block">
            <img
              loading="lazy"
              src="/assets/industries/gaming/engagement.png"
              alt="Migration Planning Dashboard"
              className="mx-auto w-72 md:w-90"
            />
          </FadeInWhenVisible>
        </div>
        <ContactUsButton variant="hover">GET FANTASY SPORTS SOFTWARE SOLUTIONS</ContactUsButton>
      </PageLayout>
    </section>

    {/* === AI-Powered Gaming Solutions Section === */}
    <PageLayout className="py-16 text-center space-y-8">
      <Headline
        title="AI-Powered Gaming Solutions"
        description="With gaming being one of the most lucrative industries in today’s world, Artificial Intelligence (AI) in games has become an increasingly important pillar of game development. Our experts have industry-specific technical experience for cutting-edge AI game development. Artificial Intelligence stands as an innovative tool that can level up the gaming experience."
      />
      <FeaturesList
        features={gammingSolutiondeveloper}
        grid3
        center
      />
      <ContactUsButton variant="hover">GET AI IN GAME DEVELOPMENT</ContactUsButton>
    </PageLayout>

    {/* === Gaming Application Support Services Section === */}
    <section className="bg-secondary py-16">
      <PageLayout className="text-center space-y-8">
        <Headline
          title="Gaming Application Support Services"
          description="Our experts provide comprehensive gaming application support to address the diverse needs of the gaming industry. We provide full support services for proprietary gaming applications and white-label support solutions enhancing gaming development and support teams.."
        />
        <FeaturesList
          features={gammingSupportApplication}
          center
          grid3
        />
        <ContactUsButton variant="hover">GET GAMING APPS SUPPORT</ContactUsButton>
      </PageLayout>
    </section>

    {/* === FAQ Section === */}
    <div className="py-6">
      <FaqSection faqs={faqs} title="FAQ's" />
    </div>
  </div >
);

export default Gaming;
