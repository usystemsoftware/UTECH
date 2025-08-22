import { useLocation } from "react-router-dom";
import PageLayout from "@/custom/PageLayout";
import { useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import emailjs from "@emailjs/browser";

import {
  TypographyMuted,
  TypographyH6,
  TypographyH3,
} from "@/custom/Typography";
import { Locations } from "./Data";

const contactFields = [
  { name: "name", label: "Full Name", required: true, type: "text" },
  { name: "email", label: "Email", required: true, type: "email" },
  { name: "phone", label: "Phone", required: true, type: "text" },
  { name: "company", label: "Company (Optional)", required: false, type: "text" },
];

const emails = [
  "consultant@usystem.software",
  "sales@usystem.solution",
  "sales@usystem.software",
];

const ContactPage = () => {

  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const fromPage = params.get("from");
  console.log(fromPage)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    tradeshow: "",
    from: ""
  });
  useEffect(() => {
    if (fromPage) {
      setFormData((prev) => ({ ...prev, from: fromPage }));
    }
  }, [fromPage]);


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
      emailjs
        .send(
          "service_igrg5ci",
          "template_gst2p5a",
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            company: formData.company,
            message: formData.message,
            tradeshow: formData.tradeshow,
            from: formData.from,
          },
          "7-SnSze-TVD6r3rSM"
        )
        .then(
          (result) => {
            console.log("Email successfully sent!", result.text);
            alert("Your message has been sent successfully 🚀");
            setFormData({
              name: "",
              email: "",
              phone: "",
              company: "",
              message: "",
              tradeshow: "",
              from: fromPage || "",
            });
          },
          (error) => {
            console.log("Failed to send email:", error.text);
            alert("Oops! Something went wrong ❌");
          }
        );
    } else {
      alert("Please fill all required fields: " + errors.join(", "));
    }
  };

  return (
    <section className="w-full">
      {/* HERO IMAGE SECTION */}
      <div className="relative h-[600px] overflow-hidden">
        <img
          src="/banner/contact-us.jpg"
          alt="Contact Us"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-primary/30 z-10" />

        <div className="relative z-20 max-w-7xl mx-auto h-full flex items-center px-6 text-white">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              What’s on your mind?
            </h1>
            <p className="text-lg mb-6">
              We’re here to help! Tell us what you’re looking for and we’ll get you connected to the right people.
            </p>
          </div>
        </div>
      </div>

      {/* FORM & LOCATIONS SECTION */}
      <PageLayout className="grid grid-cols-1 relative z-20 -sm:mt-34 -mt-48 md:mb-32 bg-card md:rounded-2xl rounded-t-2xl shadow-xl md:grid-cols-2 gap-8 py-16">
        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {contactFields.map(({ name, label, required, type }) => (
              <div key={name} className="grid gap-2">
                <Label className="uppercase">{label} {required && <span className="text-red-500">*</span>}</Label>
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
            <Label className="uppercase">
              How can we help you? <span className="text-red-500">*</span>
            </Label>
            <Textarea
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          {/* Tradeshow */}
          <div className="grid gap-2">
            <Label className="text-sm mb-1 block">
              Have you seen us at any tradeshow? <span className="text-red-500">*</span>
            </Label>
            <div className="flex items-center gap-6">
              {["Yes", "No"].map((option) => (
                <Label key={option} className="flex items-center gap-2">
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

          <Button className="px-8 py-4">SUBMIT</Button>

          {/* Legal Notes */}
          <TypographyMuted className="text-xs pt-2">
            <span className="text-red-500">*</span> By requesting a consult you agree to the terms of U Tech's{" "}
            <a href="#" className="text-blue-600 underline">privacy policy</a>.
          </TypographyMuted>
          <TypographyMuted className="text-xs">
            This site is protected by reCAPTCHA and the Google{" "}
            <a href="#" className="text-blue-600 underline">Privacy Policy</a> and{" "}
            <a href="#" className="text-blue-600 underline">Terms of Service</a> apply.
          </TypographyMuted>
        </form>

        {/* LOCATIONS */}
        <div className="space-y-6 text-sm">
          <div className="space-y-2">
            <p>Mumbai: +91 9270033002</p>
            <p>Pune: +91 9270033002</p>
            <div className="flex gap-2">
              <span className="bg-primary text-white px-2 rounded text-xs">SMS</span>
              +91 9270033002
            </div>
            <div className="pt-2">
              {emails.map((email) => (
                <TypographyMuted key={email}>{email}</TypographyMuted>
              ))}
            </div>
          </div>

          <div>
            <TypographyH3>LOCATIONS</TypographyH3>

            <details open className="border-b border-primary py-2">
              <summary className="text-lg font-semibold text-primary cursor-pointer">
                Indian Asia Specifics
              </summary>
              <div className="pl-4 pt-2 grid gap-4">
                {Locations.map((item, idx) => (
                  <div key={idx}>
                    <TypographyH6>{item.title}</TypographyH6>
                    <TypographyMuted>{item.address}</TypographyMuted>
                    <p>{item.phone}</p>
                  </div>
                ))}
              </div>
            </details>

            <details className="border-b border-primary py-2">
              <summary className="text-lg font-semibold text-primary cursor-pointer">
                Estan Asia Specifics
              </summary>
              <div className="mt-3 space-y-2 pl-4">
                <TypographyH6>Singapore</TypographyH6>
                <div className="flex items-center gap-2">
                  <span className="bg-primary text-white px-2 rounded text-xs">SMS</span>
                  <TypographyMuted>+91 9270033002</TypographyMuted>
                </div>
              </div>
            </details>
          </div>
        </div>
      </PageLayout>
    </section>
  );
};

export default ContactPage;
