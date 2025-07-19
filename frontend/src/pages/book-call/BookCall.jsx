import React, { useState } from "react";
import dayjs from "dayjs";
import PageLayout from "@/custom/PageLayout";
import HeadingSection from "@/custom/HeadingSection";
import BubblesBackground from "@/components/BubblesBackground";
import { IconRenderer } from "@/custom/IconRenderer";
import {
  TypographyH5,
  TypographySmall,
  TypographyP,
  TypographyLead,
} from "@/custom/Typography";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

const BookCall = () => {
  const [date, setDate] = useState(dayjs());

  return (
    <PageLayout className="relative min-h-screen py-16 px-4">
      <BubblesBackground />

      {/* Heading */}
      <div className="relative z-10 max-w-4xl mx-auto mb-12 text-center">
        <HeadingSection
          title="Book A"
          highlight="Consultation"
          description="Let’s connect and discuss how I can help you build impactful medical tech solutions."
          center
        />
      </div>

      {/* Main Section */}
      <div className="relative z-10 max-w-6xl mx-auto bg-white rounded-lg shadow-md p-8 flex flex-col md:flex-row md:space-x-12 items-center md:items-start">
        {/* Left: Profile Details */}
        <div className="flex-1 text-center">
          <img
            src="/assets/book-call/images.png"
            alt="Customer Care"
            className="w-28 h-28 rounded-full mx-auto mb-4 border-4 border-white shadow-md"
          />

          <TypographyH5 className="text-xl font-bold">
            Customer Care
          </TypographyH5>

          <TypographySmall className="text-gray-600">
            Founder & CEO | AI & Medical Device Expert
          </TypographySmall>

          <TypographyP className="text-gray-500 mt-4 text-sm leading-relaxed max-w-xl mx-auto">
            I’m a technology consultant with 16+ years of experience in
            AI-powered medical devices, embedded systems, and wireless
            communication. I specialize in guiding startups and enterprises in
            developing future-ready healthcare innovations.
          </TypographyP>

          {/* Expertise Tags */}
          <div className="mt-6">
            <TypographyH5 className="mb-2">Expertise</TypographyH5>
            <div className="flex flex-wrap justify-center gap-2">
              {[
                "AI in Medical Devices",
                "Wireless Communication (BLE, LoRa, NB-IoT)",
                "Embedded Systems",
                "Edge AI",
                "Medical Imaging & Sensors",
                "Cloud Computing",
                "IoT in Healthcare",
              ].map((skill) => (
                <span
                  key={skill}
                  className="bg-primary text-white px-3 py-1 rounded-full text-xs"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Contact Details */}
          <div className="mt-6 flex flex-col space-y-2 text-sm text-gray-600 items-center">
            <div className="flex items-center">
              <IconRenderer name="MapPin" size={18} className="mr-2" />
              Pune
            </div>
            <div className="flex items-center">
              <IconRenderer name="Mail" size={18} className="mr-2" />
              <a
                href="mailto:cansultent@usystem.solutions"
                className="underline"
              >
                cansultent@usystem.solutions
              </a>
            </div>
            <div className="flex items-center">
              <IconRenderer name="Phone" size={18} className="mr-2" />
              <a href="tel:+9270033002" className="underline">
                +9270033002
              </a>
            </div>
          </div>

          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/6589520271"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 text-sm"
          >
            Chat on WhatsApp
          </a>

          {/* Social Icons */}
          <div className="mt-6 flex justify-center gap-6">
            {["Facebook", "Instagram", "Twitter", "Linkedin"].map(
              (platform) => (
                <IconRenderer
                  key={platform}
                  name={platform}
                  size={24}
                  className="text-primary hover:text-cyan-500 transition cursor-pointer"
                />
              )
            )}
          </div>
        </div>

        {/* Right: Calendar */}
        <div className="flex-1 mt-10 md:mt-0 flex justify-center">
          <div className="border border-blue-400 rounded-lg p-6 w-full max-w-sm text-center">
            <TypographyH5 className="mb-4">Select a Date</TypographyH5>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateCalendar value={date} onChange={setDate} />
            </LocalizationProvider>
            <TypographyLead className="text-gray-500 text-sm mt-4">
              Selected Date:{" "}
              <span className="font-semibold">
                {date.format("dddd, MMMM D, YYYY")}
              </span>
            </TypographyLead>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default BookCall;
