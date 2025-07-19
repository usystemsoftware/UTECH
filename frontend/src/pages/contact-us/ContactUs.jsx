import { useState } from "react";
import PageLayout from "@/custom/PageLayout";
import HeadingSection from "@/custom/HeadingSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { motion, AnimatePresence } from "framer-motion";
import { IconRenderer } from "@/custom/IconRenderer";
import { FadeInWhenVisible, fadeUp } from "@/custom/FadeInWhenVisible";
import {
  TypographyP,
  TypographyH5,
  TypographyH6,
  TypographySmall,
  TypographyMuted,
} from "@/custom/Typography";
import { Link } from "react-router-dom";

import { Locations, steps, socialPlatforms } from "./data";

const slideVariants = {
  initial: { x: 100, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: -100, opacity: 0 },
};


const ContactUs = () => {
  const [hovered, setHovered] = useState(null);
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
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const step = steps[currentStep];

  const validateFields = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required.";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email address.";
    steps.forEach((s) => {
      if (s.required && !selections[s.name]) newErrors[s.name] = "This field is required.";
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleStepSelect = (name, value) => {
    setSelections((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
    if (currentStep < steps.length - 1) setTimeout(() => setCurrentStep((prev) => prev + 1), 200);
  };

  const handleStepClick = (index) => {
    if (index >= 0 && index < steps.length) setCurrentStep(index);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (validateFields()) {
      console.log("Form Data:", formData);
      console.log("Selections:", selections);
      alert("Form submitted successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        companyName: "",
        website: "",
        phone: "",
        message: "",
      });
      setSelections({ service: "", source: "", industry: "", budget: "" });
      setErrors({});
      setCurrentStep(0);
      setSubmitted(false);
    }
  };

  return (
    <PageLayout className="relative min-h-screen py-16">
      <div className="z-10 w-full max-w-6xl space-y-16">
        <div className="text-center">
          <HeadingSection
            title="Contact"
            highlight="Us"
            description="Have questions or a project in mind? Reach out and let’s talk."
          />
        </div>

        <Card className="grid grid-cols-1 md:grid-cols-2 gap-0 p-0">
          <div className="bg-secondary rounded-2xl p-6 space-y-6">
            <HeadingSection
              title="Get in"
              highlight="Touch"
              description="Prefer doing things in person? You're welcome!"
              center={false}
            />

            <FadeInWhenVisible>
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="asia" className="space-y-2 group">
                  <AccordionTrigger className="text-primary text-2xl group-data-[state=closed]:underline decoration-primary underline-offset-4">
                    Estan Asia Specifics
                  </AccordionTrigger>
                  <AccordionContent className="max-w-sm gap-4">
                    <TypographyH6>Singapore</TypographyH6>
                    <TypographyP>
                      Pin Code - 011303
                    </TypographyP>
                    <TypographySmall className="mt-1">{location.phone}</TypographySmall>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </FadeInWhenVisible>

            <FadeInWhenVisible>
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="india" className="group">
                  <AccordionTrigger className="text-primary text-2xl group-data-[state=closed]:underline decoration-primary underline-offset-4">
                    Indian Asia Specifics
                  </AccordionTrigger>
                  <AccordionContent>
                    {Locations.map((location, index) => (
                      <div
                        key={index}
                        className="relative p-4 rounded-md group"
                        onMouseEnter={() => setHovered(index)}
                        onMouseLeave={() => setHovered(null)}
                      >
                        <TypographyH6>{location.title}, Maharashtra</TypographyH6>
                        <TypographyP>{location.address}</TypographyP>
                        <TypographySmall>{location.phone}</TypographySmall>

                        {hovered === index && (
                          <div className="absolute -top-20 left-0 w-full bg-card text-black shadow-lg p-3 rounded-md z-10">
                            <TypographySmall className="font-bold">
                              {location.title} Map
                            </TypographySmall>
                            <Link
                              href={location.mapUrl}
                              target="_blank"
                              className="text-blue-600 hover:underline text-sm"
                            >
                              View on Google Maps
                            </Link>
                          </div>
                        )}
                      </div>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </FadeInWhenVisible>

            <FadeInWhenVisible>
              <div className="pt-4 border-t border-white/20">
                <TypographyH5>Email Us</TypographyH5>
                <div className="flex flex-col mt-2 space-y-1">
                  <TypographyMuted>consultant@usystem.software</TypographyMuted>
                  <TypographyMuted>sales@usystem.solution</TypographyMuted>
                  <TypographyMuted>sales@usystem.software</TypographyMuted>
                </div>
              </div>
            </FadeInWhenVisible>

            <FadeInWhenVisible>
              <div className="flex items-center justify-center space-x-4 mt-6">
                {socialPlatforms.map((platform) => (
                  <motion.a
                    key={platform.name}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2 }}
                    className="flex justify-center items-center bg-primary text-white w-10 h-10 rounded-full"
                  >
                    <IconRenderer name={platform.name} size={20} className="text-white" />
                  </motion.a>
                ))}
              </div>
            </FadeInWhenVisible>
          </div>

          {/* RIGHT */}
          <form
            onSubmit={handleSubmit}
            className="space-y-6 w-full max-w-xl mx-auto p-6"
            noValidate
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FadeInWhenVisible>
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input name="firstName" value={formData.firstName} onChange={handleChange} />
                  {errors.firstName && submitted && <span className="text-red-500 text-xs">{errors.firstName}</span>}
                </div>
              </FadeInWhenVisible>
              <FadeInWhenVisible>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input name="lastName" value={formData.lastName} onChange={handleChange} />
                  {errors.lastName && submitted && <span className="text-red-500 text-xs">{errors.lastName}</span>}
                </div>
              </FadeInWhenVisible>
            </div>

            <FadeInWhenVisible>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input type="email" name="email" value={formData.email} onChange={handleChange} />
                {errors.email && submitted && <span className="text-red-500 text-xs">{errors.email}</span>}
              </div>
            </FadeInWhenVisible>

            <FadeInWhenVisible>
              <div className="space-y-2">
                <Label htmlFor="companyName">Company Name</Label>
                <Input name="companyName" value={formData.companyName} onChange={handleChange} />
              </div>
            </FadeInWhenVisible>

            <FadeInWhenVisible>
              <div className="space-y-2">
                <Label htmlFor="website">Website</Label>
                <Input name="website" value={formData.website} onChange={handleChange} />
              </div>
            </FadeInWhenVisible>

            <FadeInWhenVisible>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input name="phone" type="tel" value={formData.phone} onChange={handleChange} />
              </div>
            </FadeInWhenVisible>

            <FadeInWhenVisible>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea name="message" value={formData.message} onChange={handleChange} />
              </div>
            </FadeInWhenVisible>

            {/* Radio Group Section with Animation */}

            <FadeInWhenVisible>
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
                  <RadioGroup
                    value={selections[step.name]}
                    onValueChange={(value) => handleStepSelect(step.name, value)}
                    className="flex flex-col mt-3 space-y-2"
                  >
                    {step.options.map((option, index) => {
                      const id = `${step.name}-${index}`;
                      return (
                        <div key={id} className="flex items-center gap-3">
                          <RadioGroupItem value={option} id={id} />
                          <Label htmlFor={id}>{option}</Label>
                        </div>
                      );
                    })}
                  </RadioGroup>
                  {errors[step.name] && submitted && (
                    <span className="text-red-500 text-xs">{errors[step.name]}</span>
                  )}
                </motion.div>
              </AnimatePresence>
            </FadeInWhenVisible>
            {/* Step Navigation */}
            <div className="flex justify-center space-x-4 mt-6">
              {steps.map((_, index) => (
                <Button
                  key={index}
                  type="button"
                  onClick={() => handleStepClick(index)}
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep === index
                    ? "bg-primary text-white"
                    : "bg-gray-200 text-black hover:bg-gray-300"
                    }`}
                >
                  {index + 1}
                </Button>
              ))}
            </div>

            <FadeInWhenVisible>
              <div className="flex justify-center mt-6">
                <Button type="submit" className="w-full">
                  Let’s work together
                </Button>
              </div>
            </FadeInWhenVisible>
          </form>
        </Card>
      </div>
    </PageLayout>
  );
};

export default ContactUs;