import { motion } from "framer-motion";
import { Zap, Globe, Users, Award, Phone, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom'
import { Card } from "@/components/ui/card";
import {
  TypographyH3,
  TypographyMuted,
  TypographySmall,
} from "@/custom/Typography";
import PageLayout from "@/custom/PageLayout";
import BubblesBackground from "@/components/BubblesBackground";

export const HeroSection = () => {

  const stats = [
    { number: "80+", label: "Employees Globally", icon: Users },
    { number: "16+", label: "Years of Excellence", icon: Award },
    { number: "200+", label: "Global Clients", icon: Globe },
    { number: "40+", label: "States Served", icon: Zap },
  ];

  return (
    <PageLayout
      className="relative flex items-center justify-center overflow-hidden mt-24"
    >
      {/* Background Bubbles */}
      <BubblesBackground />
      {/* Main Content */}
      <div className="md:container mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 items-center">
          <motion.div className="space-y-8 lg:col-span-8">
            <div className="flex mt-3 items-center w-full">
              <TypographySmall className="p-3 bg-gradient-to-r from-orange-100 to-red-100 text-orange-700 rounded-full text-sm border border-orange-200">
                🚀 Digital Engineering & Enterprise Modernization
              </TypographySmall>
            </div>
            <motion.h1
              className="text-xl lg:text-4xl font-bold leading-tight transform-3d"
            >
              Accelerate Your
              <span className="block bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent">
                Digital Transformation
              </span>
            </motion.h1>
            <TypographyMuted>
              U Tech Systems is a global services and solutions company
              delivering Digital Engineering and Enterprise Modernization to
              help enterprises accelerate their digital transformation journey.
            </TypographyMuted>
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link to='/contact-us'>
                <Button className='w-full'>
                  Contact US
                  <Phone />
                </Button>
              </Link>
              <Link to='/book-call'>
                <Button variant="secondary">
                  Book Call
                  <Video />
                </Button>
              </Link>
            </motion.div>
            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {stats?.map((stat, index) => (
                <Card
                  key={index}
                  className="grid gap-1 hover:scale-105 cursor-pointer"
                >
                  <stat.icon className="text-orange-600" />
                  <TypographyH3 className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                    {stat.number}
                  </TypographyH3>
                  <TypographyMuted className="font-medium">
                    {stat.label}
                  </TypographyMuted>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* right side logo */}
          <div className="lg:col-span-4 md:block hidden cursor-pointer perspective-[1000px]">
            <img
              src="/logo-2.png"
              alt="U Logo"
              className="h-[60vh] w-[80%] mx-auto"
            />
          </div>

        </div>
      </div>
    </PageLayout>
  );
};
