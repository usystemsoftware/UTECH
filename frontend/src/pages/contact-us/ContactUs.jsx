import { useState } from "react";
import PageLayout from "@/custom/PageLayout";
import HeadingSection from "@/custom/HeadingSection";
import BubblesBackground from "@/components/BubblesBackground";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { IconRenderer } from "@/custom/IconRenderer";

import {
  TypographyH5,
  TypographySmall,
  TypographyMuted,
} from "@/custom/Typography";

const ContactUs = () => {
  const slideVariants = {
    initial: { x: -1, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: 100, opacity: 0 },
  };

  const steps = [
    {
      title: "Which service are you interested in?",
      name: "service",
      options: [
        "Product Engineering",
        "Artificial Intelligence",
        "Digital Transformation",
      ],
    },
    {
      title: "How did you know about us? *",
      name: "source",
      options: ["Google", "LinkedIn", "Instagram", "Other"],
    },
    {
      title: "Industry?",
      name: "industry",
      options: ["Aerospace", "Health Care", "Smart Cities & Nation"],
    },
    {
      title: "Budget? *",
      name: "budget",
      options: ["Less Than 5K", "5k to 10k", "10k to 15k", "More than 15k"],
    },
  ];

  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    companyName: "",
    website: "",
    phone: "",
    message: "",
  });

  const [selections, setSelections] = useState({
    service: "",
    source: "",
    industry: "",
    budget: "",
  });

  // const step = steps[currentStep];
  const step = steps[currentStep];

  const handleChange = (e) => {
    const { name, value } = e.target;
    const stepNames = steps.map((s) => s.name);

    if (currentStep < steps.length - 1) {
      setTimeout(() => {
        setCurrentStep((prev) => {
          if (prev < steps.length - 1) return prev + 1;
          return prev;
        });
      }, 200);
    }
  };

  const handleStepClick = (index) => {
    if (index >= 0 && index < steps.length) {
      setCurrentStep(index);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    console.log("Selections:", selections);
  };

  return (
    <PageLayout className="relative min-h-screen flex flex-col justify-center items-center py-16 px-4 md:px-8 bg-white">
      <BubblesBackground />
      <div className="z-10 w-full max-w-6xl space-y-16">
        <div className="text-center">
          <HeadingSection
            title="Contact"
            highlight="Us"
            description="Have questions or a project in mind? Reach out and let’s talk."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {/* LEFT: Office Info */}
          <div className="bg-[#0e121b] p-8 rounded-lg shadow-md text-white space-y-6">
            <HeadingSection
              title="Get in"
              highlight="Touch"
              description="Prefer doing things in person? You're welcome!"
              center={false}
            />

            <div className="space-y-4">
              <div className="bg-[#1f2735] p-4 rounded-md">
                <TypographyH5>Suntec Singapore</TypographyH5>
                <TypographySmall>
                  17-136, Suntec Tower 5, 5 Temasek Blvd, Singapore 038985
                </TypographySmall>
                <TypographySmall className="mt-1">
                  📞 +65 89520271
                </TypographySmall>
              </div>

              <div className="bg-[#1f2735] p-4 rounded-md">
                <TypographyH5>Times Square Hinjewadi</TypographyH5>
                <TypographySmall>
                  304, Level 3, Times Square, Hinjawadi, Pune, India
                </TypographySmall>
                <TypographySmall className="mt-1">
                  📞 +91 8368007575
                </TypographySmall>
              </div>

              <div className="pt-4 border-t border-white/20">
                <TypographyH5>Email Us</TypographyH5>
                <div className="flex flex-col mt-2 space-y-1">
                  <TypographyMuted>📧 hr@delighteck.com</TypographyMuted>
                  <TypographyMuted>📧 sales@delighteck.com</TypographyMuted>
                </div>
              </div>

              <div className="pt-4 border-t border-white/20">
                <TypographyH5>Follow Us</TypographyH5>
                <div className="flex justify-center gap-x-6 mt-10">
                  <IconRenderer
                    name="Facebook"
                    className="text-white hover:text-cyan-500 cursor-pointer"
                    size={25}
                  />
                  <IconRenderer
                    name="Instagram"
                    className="text-white hover:text-cyan-500 cursor-pointer"
                    size={25}
                  />
                  <IconRenderer
                    name="Twitter"
                    className="text-white hover:text-cyan-500 cursor-pointer"
                    size={25}
                  />
                  <IconRenderer
                    name="Linkedin"
                    className="text-white hover:text-cyan-500 cursor-pointer"
                    size={25}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Form */}
          <form
            className="bg-white shadow-md p-6 rounded-lg space-y-6 w-full max-w-xl mx-auto transition-all duration-300"
            onSubmit={handleSubmit}
          >
            {/* Static Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className="border-b p-2 outline-none"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="border-b p-2 outline-none"
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="border-b p-2 w-full outline-none"
            />
            <input
              type="text"
              name="companyName"
              placeholder="Company Name"
              value={formData.companyName}
              onChange={handleChange}
              className="border-b p-2 w-full outline-none"
            />
            <input
              type="text"
              name="website"
              placeholder="Company Website"
              value={formData.website}
              onChange={handleChange}
              className="border-b p-2 w-full outline-none"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="border-b p-2 w-full outline-none"
            />
            <textarea
              name="message"
              rows="4"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className="border-b p-2 w-full outline-none resize-none"
            />

            {/* Dynamic Step Question */}

            <AnimatePresence mode="wait">
              <motion.div
                key={step.name}
                variants={slideVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.4 }}
              >
                <TypographyH5>{step.title}</TypographyH5>
                <div className="flex flex-col mt-3 space-y-2">
                  {step.options.map((option) => (
                    <label key={option} className="cursor-pointer">
                      <input
                        type="radio"
                        name={step.name}
                        value={option}
                        checked={selections[step.name] === option}
                        onChange={(e) => {
                          const { name, value } = e.target;
                          setSelections((prev) => ({
                            ...prev,
                            [name]: value,
                          }));
                          if (currentStep < steps.length - 1) {
                            setTimeout(() => {
                              setCurrentStep((prev) => prev + 1);
                            }, 50);
                          }
                        }}
                        className="mr-2"
                      />
                      {option}
                    </label>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Pagination Dots */}
            <div className="flex justify-center space-x-4 mt-6">
              {steps.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => handleStepClick(index)}
                  className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                    currentStep === index
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 text-black hover:bg-gray-300"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>

            <div className="flex justify-center mt-6">
              <Button
                type="submit"
                className="bg-gradient-to-r from-cyan-500 to-blue-800 text-white px-12 py-5 mt-4 rounded-md hover:opacity-90 transition"
              >
                Let’s work together
              </Button>
            </div>
          </form>
        </div>
      </div>
    </PageLayout>
  );
};

export default ContactUs;
