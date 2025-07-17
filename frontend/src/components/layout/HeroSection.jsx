import { WorldMap } from "@/components/ui/world-map";
import { motion } from "framer-motion";
import { Zap, Globe, Users, Award, Phone, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  TypographyH3,
  TypographyMuted,
  TypographySmall,
} from "@/custom/Typography";
import PageLayout from "@/custom/PageLayout";

export const HeroSection = () => {

  const stats = [
    { number: "80+", label: "Employees Globally", icon: Users },
    { number: "16+", label: "Years of Excellence", icon: Award },
    { number: "200+", label: "Global Clients", icon: Globe },
    { number: "40+", label: "States Served", icon: Zap },
  ];

  return (
    <PageLayout
      className="relative flex items-center justify-center overflow-hidden mt-18"
    >
      {/* WorldMap as background */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none flex items-center justify-center">
        <WorldMap
          dots={[
            {
              start: { lat: 64.2008, lng: -149.4937 },
              end: { lat: 34.0522, lng: -118.2437 },
            },
            {
              start: { lat: 64.2008, lng: -149.4937 },
              end: { lat: -15.7975, lng: -47.8919 },
            },
            {
              start: { lat: -15.7975, lng: -47.8919 },
              end: { lat: 38.7223, lng: -9.1393 },
            },
            {
              start: { lat: 51.5074, lng: -0.1278 },
              end: { lat: 28.6139, lng: 77.209 },
            },
            {
              start: { lat: 28.6139, lng: 77.209 },
              end: { lat: 43.1332, lng: 131.9113 },
            },
            {
              start: { lat: 28.6139, lng: 77.209 },
              end: { lat: -1.2921, lng: 36.8219 },
            },
          ]}
        />
      </div>
      {/* Main Content */}
      <div className="md:container mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 items-center">
          <motion.div className="space-y-8 lg:col-span-8">
            <div className="flex justify-center mt-3 items-center w-full text-center">
              <TypographySmall className="p-3 bg-gradient-to-r from-orange-100 to-red-100 text-orange-700 rounded-full text-sm border border-orange-200">
                🚀 Digital Engineering & Enterprise Modernization
              </TypographySmall>
            </div>
            <motion.h1
              className="text-xl lg:text-4xl font-bold text-gray-900 leading-tight transform-3d"
            >
              Accelerate Your
              <span className="block bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent">
                Digital Transformation
              </span>
            </motion.h1>
            <TypographyMuted>
              Persistent Systems is a global services and solutions company
              delivering Digital Engineering and Enterprise Modernization to
              help enterprises accelerate their digital transformation journey.
            </TypographyMuted>
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button>
                Contact US
                <Phone />
              </Button>
              <Button className="bg-[#111111] hover:bg-[#111111]">
                Book Call
                <Video />
              </Button>
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
          {/* <div className="lg:col-span-4 cursor-pointer perspective-[1000px]">
            <img
              src="https://pngtree.com/freepng/letter-u-3d-company-logo-design_4173434.html"
              alt="U Logo"
              className="h-[75vh] w-full transition-transform duration-700 hover:scale-105"
            />
          </div> */}

        </div>
      </div>
    </PageLayout>
  );
};
