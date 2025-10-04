import { TypographyH5, TypographySmall } from "@/custom/Typography";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { bookingSlotes } from "@/machine/bookingSlotes";
import LoadingPage from "@/custom/LoadingPage";
import HeroSection from "@/components/HeroSection";
import SeoHead from "../../components/SeoHead"
import organizationSchema from "../../components/seo/breadcrumbs/organizationSchema"
import breadcrumbSchema from "../../components/seo/breadcrumbs/breadcrumbSchema"

export default function BookUserSubmitDetails({
  customer,
  date,
  slot,
  bookingData,
  setBookingData,
}) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  // form fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    description: "",
    source: "",
  });

  // error state
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const stored = Cookies.get("bookingData");
    if (stored) {
      const parsed = JSON.parse(stored);
      setBookingData(parsed);
      setSubmitted(true);
    }
  }, []);

  // auto-hide success/error
  useEffect(() => {
    if (success || error) {
      const timer = setTimeout(() => {
        setSuccess(false);
        setError(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [success, error]);

  const validateForm = () => {
    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Full name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit phone number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);
    setSuccess(false);
    setError(false);

    try {
      const fullData = { ...formData, customer, date, slot };
      const res = await bookingSlotes(fullData);

      const bookingWithLink = {
        ...fullData,
        meetLink: res.meetLink,
        eventId: res.eventId,
        startISO: res.startISO,
        endISO: res.endISO,
      };

      Cookies.set("bookingData", JSON.stringify(bookingWithLink), {
        expires: 1,
      });
      setBookingData(bookingWithLink);
      setSubmitted(true);
      setSuccess(true);

      // reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        description: "",
        source: "",
      });
      setErrors({});
    } catch (err) {
      console.error("Booking failed:", err);
      alert(err.error || "Booking failed, try again.");
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    Cookies.remove("bookingData");
    setSubmitted(false);
    setBookingData(null);
  };

  return (
    <>
    <SeoHead
        title="U Tech | BookUserSubnuteDetails - Insights & Updates"
        description="Explore the latest articles, insights, and tech updates from U Tech (Umbarakar Technology)."
        url="https://usystem.software/blog"
        image="https://usystem.software/small-logo.png"
        organizationSchema={organizationSchema}
        breadcrumbSchema={breadcrumbSchema}
      />
      <LoadingPage loading={loading} success={success} error={error} />

      {submitted && bookingData ? (
        <>
          {/* <HeroSection
            backgroundImage="https://www.shutterstock.com/image-photo/business-planning-calendar-agenda-work-600nw-2461973363.jpg"
            title="Thank you for booking !"
            description="Our team has received your request. You’ll receive your Google Meet linkon your registered email/phone shortly before the meeting."
            buttonText="Go to Home"
            buttonLink="/"
            overlayOpacity="0.6"

          /> */}
          <div className="flex items-center justify-center min-h-screen bg-slate-300 px-4">
            <div className="w-full max-w-3xl bg-card border border-border rounded-2xl shadow-lg p-8 space-y-6">
              {/* Customer Info */}
              <div className="flex flex-col items-center text-center space-y-4">
                <img
                  src={bookingData.customer?.image || "/assets/book-call/images.png"}
                  alt={bookingData.customer?.name || "Customer"}
                  className="w-24 h-24 rounded-full border-4 border-primary shadow-md"
                />
                <div>
                  <TypographyH5>{bookingData.customer?.name}</TypographyH5>
                  <TypographySmall>{bookingData.customer?.email}</TypographySmall>
                  <p className="text-sm mt-1 text-muted-foreground">
                    {bookingData.customer?.designation}
                  </p>
                </div>
              </div>

              {/* Confirmation Message */}
              <div className="bg-blue-50 border border-blue-200 text-blue-800 px-6 py-4 rounded-xl shadow-sm text-center">
                <p className="font-semibold text-lg">📩 Thank you for booking!</p>
                <p className="text-sm mt-2 leading-relaxed">
                  Our team has received your request. You’ll receive your
                  <span className="font-medium"> Google Meet link</span>
                  on your registered email/phone shortly before the meeting.
                </p>
              </div>

              {/* Go to Home Button */}
              <div className="flex justify-center">
                <button
                  onClick={() => (window.location.href = "/")}
                  className="px-6 py-2 rounded-lg bg-primary text-white font-medium shadow-md hover:bg-primary/90 transition"
                >
                  ⬅ Go to Home
                </button>
              </div>
            </div>
          </div>

        </>) : (
        <div className="mt-12 flex flex-col md:flex-row max-w-6xl mx-auto bg-card border border-border rounded-2xl overflow-hidden shadow-lg">
          <div className="bg-muted p-6 md:p-8 md:w-1/2 flex flex-col items-center text-center md:text-left">
            <img
              src={customer?.image || "/assets/book-call/images.png"}
              alt={customer?.name || "Customer"}
              className="w-32 h-32 rounded-full mb-4 border-4 border-primary"
            />
            <TypographyH5 className="mb-1">
              {customer?.name || "Your Name"}
            </TypographyH5>
            <TypographySmall className="text-muted-foreground mb-2">
              {customer?.email || "your@email.com"}
            </TypographySmall>
            <div className="bg-background text-foreground p-4 rounded-lg w-full mt-4 text-sm shadow-sm">
              <p className="mb-1">
                <strong>Appointment Date:</strong> {date || "2025-07-22"}
              </p>
              <p>
                <strong>Appointment Time:</strong> {slot || "10:00 AM"}
              </p>
            </div>
          </div>

          <div className="p-6 md:p-8 md:w-1/2">
            <form className="space-y-4" onSubmit={onSubmit}>
              <TypographyH5 className="text-center mb-4">
                Complete Your Booking
              </TypographyH5>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Full Name
                </label>
                <Input
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <Input
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Phone</label>
                <Input
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Describe your requirements
                </label>
                <Textarea
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  How did you hear about us?
                </label>
                <Select
                  value={formData.source}
                  onValueChange={(value) =>
                    setFormData({ ...formData, source: value })
                  }
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Google">Google</SelectItem>
                    <SelectItem value="LinkedIn">LinkedIn</SelectItem>
                    <SelectItem value="Referral">Referral</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button type="submit" className="w-full">
                Submit Booking
              </Button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
