"use client";
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
import { cn } from "@/lib/utils";

const timeSlotCategories = {
  Morning: ["9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM"],
  Afternoon: ["12:00 PM", "2:00 PM", "2:30 PM", "3:00 PM"],
  Evening: ["4:00 PM", "4:30 PM", "5:00 PM"],
  Night: ["7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM"],
};

const bookedSlots = ["2025-07-22@10:00 AM", "2025-07-23@2:00 PM"];
const unavailableDates = ["2025-07-25", "2025-07-28"];

const BookCall = () => {
  const [date, setDate] = useState(dayjs());
  const [selectedTime, setSelectedTime] = useState(null);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    description: "",
    budget: "",
    reference: "",
    source: "",
  });
  const [error, setError] = useState("");

  const today = dayjs().startOf("day");
  const isUnavailableDate = unavailableDates.includes(
    date.format("YYYY-MM-DD")
  );

  const isSlotBooked = (time) =>
    bookedSlots.includes(`${date.format("YYYY-MM-DD")}@${time}`);

  const isPastTime = (time) => {
    const selectedDate = date.startOf("day");
    const now = dayjs();
    if (!selectedDate.isSame(now, "day")) return false;
    const [hour, minutePart] = time.split(":"),
      minute = minutePart.slice(0, 2),
      meridiem = minutePart.slice(3);
    let hour24 = parseInt(hour, 10);
    if (meridiem === "PM" && hour24 !== 12) hour24 += 12;
    if (meridiem === "AM" && hour24 === 12) hour24 = 0;
    const slotTime = selectedDate.hour(hour24).minute(parseInt(minute));
    return slotTime.isBefore(now);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", {
      ...formData,
      date: date.format("YYYY-MM-DD"),
      time: selectedTime,
    });
  };

  return (
    <PageLayout className="relative min-h-screen py-16 px-4 md:px-8 bg-background">
      <BubblesBackground />

      <div className="relative z-10 max-w-4xl mx-auto mb-12 text-center">
        <HeadingSection
          title="Book A"
          highlight="Consultation"
          description="Let’s connect and discuss how I can help you build impactful medical tech solutions."
          center
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {step === 1 && (
          <div className="p-6 md:p-8 flex flex-col md:flex-row gap-8 bg-card text-card-foreground rounded-2xl shadow-xl">
            <div className="flex-1 text-center md:text-left">
              <img
                src="/assets/book-call/images.png"
                alt="Customer Care"
                className="w-32 h-32 rounded-full mx-auto md:mx-0 mb-4 border-4 border-primary"
              />
              <TypographyH5>Customer Care</TypographyH5>
              <TypographySmall className="text-muted-foreground">
                Founder & CEO | AI & Medical Device Expert
              </TypographySmall>
              <TypographyP className="mt-4 text-sm text-muted-foreground">
                I’m a technology consultant with 16+ years of experience in
                AI-powered medical devices, embedded systems, and wireless
                communication.
              </TypographyP>
              <div className="mt-6">
                <TypographyH5 className="mb-2">Expertise</TypographyH5>
                <div className="flex flex-wrap justify-center md:justify-start gap-2">
                  {[
                    "AI in Medical Devices",
                    "BLE",
                    "Embedded Systems",
                    "Edge AI",
                    "Imaging",
                    "Cloud",
                    "IoT",
                  ].map((item) => (
                    <span
                      key={item}
                      className="bg-muted text-foreground px-3 py-1 rounded-full text-xs border border-border"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-6 flex flex-col gap-2 items-center md:items-start text-sm text-muted-foreground">
                <div className="flex items-center">
                  <IconRenderer name="MapPin" className="mr-2" /> Pune
                </div>
                <div className="flex items-center">
                  <IconRenderer name="Mail" className="mr-2" />
                  <a
                    href="mailto:cansultent@usystem.solutions"
                    className="underline hover:text-primary"
                  >
                    cansultent@usystem.solutions
                  </a>
                </div>
                <div className="flex items-center">
                  <IconRenderer name="Phone" className="mr-2" />
                  <a
                    href="tel:+9270033002"
                    className="underline hover:text-primary"
                  >
                    +9270033002
                  </a>
                </div>
              </div>
              <a
                href="https://wa.me/6589520271"
                className="inline-block mt-4 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-full text-sm transition"
              >
                Chat on WhatsApp
              </a>
              <div className="mt-6 flex justify-center md:justify-start gap-4">
                {["Facebook", "Instagram", "Twitter", "Linkedin"].map(
                  (platform) => (
                    <IconRenderer
                      key={platform}
                      name={platform}
                      size={22}
                      className="text-muted-foreground hover:text-primary transition cursor-pointer"
                    />
                  )
                )}
              </div>
            </div>

            <div className="flex-1">
              <div className="p-0 text-center w-full">
                <TypographyH5 className="mb-4">Select a Date</TypographyH5>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <div className="w-full border">
                    <DateCalendar
                      value={date}
                      onChange={(newDate) => {
                        setDate(newDate);
                        setSelectedTime(null);
                        const isUnavailable = unavailableDates.includes(
                          newDate.format("YYYY-MM-DD")
                        );
                        setError(
                          isUnavailable
                            ? "No slots available for this date."
                            : ""
                        );
                      }}
                      shouldDisableDate={(date) =>
                        date.isBefore(dayjs().startOf("day"))
                      }
                      sx={{
                        // width: "100%",
                        "& .MuiPickersDay-root": {
                          width: 46, // ✅ Wider cell (default is 36)
                          height: 40, // Optional: make square
                          fontSize: "1rem", // Optional: larger font
                          color: "var(--foreground)",
                          borderRadius: "0.75rem",
                          "&.Mui-selected": {
                            backgroundColor: "var(--primary)",
                            color: "var(--primary-foreground)",
                          },
                        },
                        "& .MuiPickersCalendarHeader-root": {
                          color: "var(--foreground)",
                        },
                        "& .MuiTypography-root": {
                          color: "var(--foreground)",
                        },
                        "& .MuiPickersFadeTransitionGroup-root": {
                          backgroundColor: "var(--card)",
                        },
                        "& .MuiDayCalendar-weekDayLabel": {
                          color: "var(--muted-foreground)",
                        },
                      }}
                    />
                  </div>
                </LocalizationProvider>

                {isUnavailableDate ? (
                  <TypographySmall className="text-red-500 mt-4">
                    No slots available for this date.
                  </TypographySmall>
                ) : (
                  <>
                    <TypographyH5 className="mt-6 text-center">
                      Available Slots
                    </TypographyH5>
                    {Object.entries(timeSlotCategories).map(
                      ([category, slots]) => (
                        <div key={category} className="mt-4 w-full text-left">
                          <TypographySmall className="text-left font-semibold mb-2">
                            {category}
                          </TypographySmall>
                          <div className="flex flex-wrap justify-start gap-3">
                            {slots.map((time) => {
                              const booked = isSlotBooked(time);
                              const past = isPastTime(time);
                              const disabled = booked || past;
                              const selected = selectedTime === time;
                              return (
                                <button
                                  key={time}
                                  disabled={disabled}
                                  onClick={() => setSelectedTime(time)}
                                  className={cn(
                                    "px-4 py-2 rounded-full text-sm border transition font-medium",
                                    disabled
                                      ? "bg-muted text-muted-foreground cursor-not-allowed"
                                      : selected
                                      ? "bg-primary text-white"
                                      : "bg-background hover:bg-accent hover:text-accent-foreground"
                                  )}
                                >
                                  {time}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      )
                    )}
                    {selectedTime && (
                      <>
                        <TypographyLead className="mt-4 text-green-600 dark:text-green-400">
                          Slot Selected: {selectedTime}
                        </TypographyLead>
                        <button
                          className="bg-primary hover:bg-primary/80 text-white px-6 py-2 rounded-full mt-4 shadow"
                          onClick={() => setStep(2)}
                        >
                          Book Now
                        </button>
                      </>
                    )}
                  </>
                )}
                {error && (
                  <TypographySmall className="text-red-500 mt-2">
                    {error}
                  </TypographySmall>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Step 2 form remains unchanged */}
        {step === 2 && (
          <div className="flex flex-col md:flex-row max-w-6xl mx-auto bg-card border border-border rounded-2xl overflow-hidden shadow-lg">
            {/* Left Summary Panel */}
            <div className="bg-muted p-6 md:p-8 md:w-1/2 flex flex-col items-center text-center md:text-left">
              <img
                src="/assets/book-call/images.png"
                alt="Customer"
                className="w-32 h-32 rounded-full mb-4 border-4 border-primary"
              />
              <TypographyH5 className="mb-1">
                {formData.name || "Your Name"}
              </TypographyH5>
              <TypographySmall className="text-muted-foreground mb-2">
                {formData.email || "your@email.com"}
              </TypographySmall>
              <div className="bg-background text-foreground p-4 rounded-lg w-full mt-4 text-sm shadow-sm">
                <p className="mb-1">
                  <strong>Date:</strong> {date.format("YYYY-MM-DD")}
                </p>
                <p>
                  <strong>Time:</strong> {selectedTime}
                </p>
              </div>
            </div>

            {/* Right Form Panel */}
            <div className="p-6 md:p-8 md:w-1/2">
              <form onSubmit={handleSubmit} className="space-y-4">
                <TypographyH5 className="text-center mb-4">
                  Complete Your Booking
                </TypographyH5>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { name: "name", placeholder: "Full name" },
                    { name: "email", placeholder: "Email", type: "email" },
                    { name: "phone", placeholder: "Phone" },
                    { name: "website", placeholder: "Company Website" },
                  ].map(({ name, placeholder, type = "text" }) => (
                    <input
                      key={name}
                      required={name !== "website"}
                      name={name}
                      placeholder={placeholder}
                      type={type}
                      value={formData[name]}
                      onChange={handleChange}
                      className="border p-3 rounded-md bg-background text-foreground placeholder:text-muted-foreground w-full"
                    />
                  ))}
                </div>

                <textarea
                  name="description"
                  placeholder="Describe your requirements"
                  value={formData.description}
                  onChange={handleChange}
                  className="border p-3 rounded-md w-full bg-background text-foreground placeholder:text-muted-foreground"
                />

                <select
                  required
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="border p-3 rounded-md w-full bg-background text-foreground"
                >
                  <option value="">-- Select Budget --</option>
                  <option value="<$1,000">Less than $1,000</option>
                  <option value="$1,000-$5,000">$1,000 - $5,000</option>
                  <option value="$5,000-$10,000">$5,000 - $10,000</option>
                  <option value="$10,000+">$10,000+</option>
                </select>

                <input
                  name="reference"
                  placeholder="Reference URL (if any)"
                  value={formData.reference}
                  onChange={handleChange}
                  className="border p-3 rounded-md w-full bg-background text-foreground placeholder:text-muted-foreground"
                />

                <select
                  name="source"
                  value={formData.source}
                  onChange={handleChange}
                  className="border p-3 rounded-md w-full bg-background text-foreground"
                >
                  <option value="">-- How did you hear about us? --</option>
                  <option value="Google">Google</option>
                  <option value="LinkedIn">LinkedIn</option>
                  <option value="Referral">Referral</option>
                  <option value="Other">Other</option>
                </select>

                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/80 text-white py-3 rounded-lg font-medium shadow-sm"
                >
                  Submit Booking
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </PageLayout>
  );
};

export default BookCall;
