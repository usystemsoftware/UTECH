import PageLayout from "@/custom/PageLayout";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  TypographyH3,
  TypographyH1,
  TypographyH6,
  TypographyMuted,
  TypographyLead,
} from "@/custom/Typography";
import { Locations } from "./Data";

const contactFields = [
  { name: "name", label: "Full Name", required: true, type: "text" },
  { name: "email", label: "Email", required: true, type: "email" },
  { name: "phone", label: "Phone", required: true, type: "text" },
  {
    name: "company",
    label: "Company (Optional)",
    required: false,
    type: "text",
  },
];

const emails = [
  "consultant@usystem.software",
  "sales@usystem.solution",
  "sales@usystem.software",
];

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    tradeshow: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const required = ["name", "email", "phone", "message", "tradeshow"];
    const errors = required.filter((f) => !formData[f]);
    if (errors.length === 0) {
      console.log("Submitted:", formData);
      // send form logic here
    }
  };

  return (
    <PageLayout className="grid grid-cols-1 md:grid-cols-2 py-16 mt-16 gap-6">
      {/* LEFT FORM */}
      <div className="md:p-6 space-y-6 text-start">
        <div className="space-y-2 mb-6">
          <TypographyH1>Let's Talk Solutions.</TypographyH1>
          <TypographyLead>
            Fill out our form and a software expert will contact you within
            24hrs.
          </TypographyLead>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Input Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {contactFields.map(({ name, label, required, type }) => (
              <div key={name} className="grid gap-2">
                <Label className="uppercase block">
                  {label} {required && <span className="text-red-500">*</span>}
                </Label>
                <Input
                  type={type}
                  name={name}
                  value={formData[name]}
                  onChange={handleChange}
                  className="w-full"
                />
              </div>
            ))}
          </div>

          {/* Message */}
          <div className="grid gap-2">
            <Label className="text-xs uppercase block">
              How can we help you? <span className="text-red-500">*</span>
            </Label>
            <Textarea
              name="message"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              className="w-full"
            />
          </div>

          {/* Tradeshow */}
          <div className="grid gap-2">
            <Label className="text-sm mb-1 block">
              Have you seen us at any tradeshow?{" "}
              <span className="text-red-500">*</span>
            </Label>
            <div className="flex items-center gap-6">
              {["Yes", "No"].map((option) => (
                <Label key={option} className="flex items-center gap-1">
                  <input
                    type="radio"
                    name="tradeshow"
                    value={option}
                    checked={formData.tradeshow === option}
                    onChange={handleChange}
                  />
                  {option}
                </Label>
              ))}
            </div>
          </div>

          <Button className="py-5 px-10" type="submit">
            SUBMIT
          </Button>

          {/* Legal Notes */}
          <TypographyMuted className="text-xs pt-2">
            <span className="text-red-500">*</span> By requesting a consult you
            agree to the terms of U Tech's{" "}
            <a href="#" className="text-blue-600 underline">
              privacy policy
            </a>
            .
          </TypographyMuted>
          <TypographyMuted className="text-xs">
            This site is protected by reCAPTCHA and the Google{" "}
            <a href="#" className="text-blue-600 underline">
              Privacy Policy
            </a>{" "}
            and{" "}
            <a href="#" className="text-blue-600 underline">
              Terms of Service
            </a>{" "}
            apply.
          </TypographyMuted>
        </form>
      </div>

      {/* RIGHT INFO */}
      <div className="md:p-6 space-y-6 text-sm">
        <div className="space-y-2">
          <p className="flex items-center gap-2">
            Mumbai: <span>+91 9270033002</span>
          </p>
          <p className="flex items-center gap-2">
            Pune: <span>+91 9270033002</span>
          </p>
          <div className="flex items-center gap-2">
            <span className="bg-primary text-white px-2 rounded text-xs">
              SMS
            </span>
            +91 9270033002
          </div>
          <div className="grid gap-1 pt-2">
            {emails.map((email) => (
              <TypographyMuted key={email}>{email}</TypographyMuted>
            ))}
          </div>
        </div>

        <div>
          <TypographyH3>LOCATIONS</TypographyH3>

          <details open className="border-b border-primary py-2">
            <summary className="font-semibold text-lg text-primary cursor-pointer">
              Indian Asia Specifics
            </summary>
            <div className="pt-2 grid grid-cols-1 ml-8 gap-6">
              {Locations.map((item, idx) => (
                <div key={idx} className="space-y-1">
                  <TypographyH6>{item.title}</TypographyH6>
                  <TypographyMuted>{item.address}</TypographyMuted>
                  <p>{item.phone}</p>
                </div>
              ))}
            </div>
          </details>

          <details className="border-b border-primary py-2">
            <summary className="font-semibold text-lg text-primary cursor-pointer">
              Estan Asia Specifics
            </summary>
            <div className="mt-3 space-y-2">
              <TypographyH6>Singapore</TypographyH6>
              <div className="flex items-center gap-2">
                <span className="bg-primary text-white px-2 rounded text-xs">
                  SMS
                </span>
                <TypographyMuted>+91 9270033002</TypographyMuted>
              </div>
            </div>
          </details>
        </div>
      </div>
    </PageLayout>
  );
};

export default ContactUs;
