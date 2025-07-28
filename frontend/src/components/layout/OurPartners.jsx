import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { Button } from "@/components/ui/button";
import PageLayout from "@/custom/PageLayout";
import { Link } from "react-router-dom";
import { TypographyH1, TypographyMuted } from "@/custom/Typography";
import BubblesBackground from "@/components/BubblesBackground";

const partners = [
  { name: "Appian", logo: "/assets/partners/appian.svg" },
  { name: "AWS", logo: "/assets/partners/aws.svg" },
  { name: "IBM", logo: "/assets/partners/ibm.svg" },
  { name: "Salesforce", logo: "/assets/partners/salesforce.svg" },
  { name: "DassaultSystems", logo: "/assets/partners/dassaultsystems.svg" },
  { name: "Google", logo: "/assets/partners/google.svg" },
  { name: "Red Hat", logo: "/assets/partners/redhat.svg" },
  { name: "Microsoft", logo: "/assets/partners/microsoft.svg" },
  { name: "Mambu", logo: "/assets/partners/mambu.svg" },
  { name: "Outsystems", logo: "/assets/partners/outsystems.svg" },
  { name: "DataStax", logo: "/assets/partners/datastax.svg" },
  { name: "FinMkt", logo: "/assets/partners/finmkt.svg" },
];

export default function OurPartners() {
  const marqueeRef = useRef(null);
  const animationControls = useAnimation();

  useEffect(() => {
    animationControls.start({
      x: "-50%",
      transition: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 20,
        ease: "linear",
      },
    });
  }, []);

  return (
    <section className="relative bg-[#061B3A] py-16 text-white overflow-hidden">
      <PageLayout>
        <BubblesBackground />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center z-10 relative">
          {/* Left Content */}
          <div className="md:col-span-5 space-y-6">
            <TypographyH1>Trusted by Leading Companies Worldwide</TypographyH1>
            <TypographyMuted>
              We are your partners in innovation, delivering cutting-edge
              solutions for top companies across the globe.
            </TypographyMuted>
            <Button
              variant="link"
              className="text-orange-500 text-md px-0 font-semibold"
            >
              Explore Partner Ecosystem →
            </Button>
          </div>

          {/* Desktop Logo Grid with Framer Motion */}
          <div className="hidden sm:grid sm:col-span-7 grid-cols-3 md:grid-cols-4 gap-6">
            {partners.map((partner, idx) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="bg-white rounded cursor-pointer shadow-md p-4 flex items-center justify-center hover:scale-105 transition-transform duration-300"
              >
                <img
                  loading="lazy"
                  src={partner.logo}
                  alt={partner.name}
                  className="h-10 w-32 object-contain"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Marquee */}
        <div className="sm:hidden mt-10 overflow-hidden relative z-10">
          <motion.div
            ref={marqueeRef}
            animate={animationControls}
            className="flex gap-6 w-max"
          >
            {[...partners, ...partners].map((partner, index) => (
              <Link to={partner?.link || "#"} key={index}>
                <div className="min-w-[120px] bg-white p-3 rounded-lg shadow flex items-center justify-center">
                  <img
                    loading="lazy"
                    src={partner.logo}
                    alt={partner.name}
                    className="h-8 w-32 object-contain"
                  />
                </div>
              </Link>
            ))}
          </motion.div>
        </div>
      </PageLayout>
    </section>
  );
}
