import { useState } from "react";
import PageLayout from "@/custom/PageLayout";
import { IconRenderer } from "@/custom/IconRenderer";
import { Button } from "@/components/ui/button";
import {
  TypographyH5,
  TypographySmall,
  TypographyP,
} from "@/custom/Typography";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import dayjs from "dayjs";
import BookUserSubmiteDetails from "./BookUserSubmiteDetails";
import SeoHead from "../../components/SeoHead"
import organizationSchema from "../../components/seo/breadcrumbs/organizationSchema"
import breadcrumbSchema from "../../components/seo/breadcrumbs/breadcrumbSchema"

//  Default slots for every day
const defaultSlots = {
  Morning: ["9:00 AM", "10:30 AM"],
  Afternoon: ["1:00 PM", "2:30 PM"],
  Evening: ["6:00 PM", "7:30 PM"],
  Night: ["9:00 PM"],
};

//  If you want some specific dates to have no slots, add them here
const blockedDates = ["2025-07-24"];

const BookCall = ({ bookingData, setBookingData, customer, onBack }) => {
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const formattedDate = selectedDate.format("YYYY-MM-DD");

  //  If date is blocked, no slots, else show default slots
  const slotsForDate = blockedDates.includes(formattedDate)
    ? { Morning: [], Afternoon: [], Evening: [], Night: [] }
    : defaultSlots;

  const now = dayjs();

  if (showForm && selectedSlot && bookingData === null) {
    return (
      <BookUserSubmiteDetails
        bookingData={bookingData}
        setBookingData={setBookingData}
        customer={customer}
        date={formattedDate}
        slot={selectedSlot}
        onBack={() => setShowForm(false)}
      />
    );
  }

  return (
    <>
      <SeoHead
        title="U Tech | BookCall - Insights & Updates"
        description="Explore the latest articles, insights, and tech updates from U Tech (Umbarakar Technology)."
        url="https://usystem.software/blog"
        image="https://usystem.software/small-logo.png"
        organizationSchema={organizationSchema}
        breadcrumbSchema={breadcrumbSchema}
      />
      <PageLayout className="min-h-screen relative">
        <div className="md:p-8 flex flex-col md:flex-row gap-8 ">
          {/* Left Panel */}
          <div className="md:flex-1 text-center md:text-left">
            <img
              loading="lazy"
              src={customer?.image || "/assets/book-call/images.png"}
              alt={customer?.name || "Customer"}
              className="w-32 h-32 rounded-full mx-auto md:mx-0 mb-4 border-4 border-primary"
            />
            <TypographyH5>{customer?.name || "Customer Care"}</TypographyH5>
            <TypographySmall className="text-muted-foreground">
              {customer?.designation ||
                "Founder & CEO | AI & Medical Device Expert"}
            </TypographySmall>
            <TypographyP className="mt-4 text-sm text-muted-foreground">
              {customer?.description}
            </TypographyP>

            <div className="mt-6">
              <TypographyH5 className="mb-2">Expertise</TypographyH5>
              <div className="flex flex-wrap justify-center md:justify-start gap-2">
                {customer?.expertise.map((item) => (
                  <span
                    key={item}
                    className="bg-muted text-foreground px-3 py-2 cursor-pointer rounded-full text-xs border border-border"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-2 items-center md:items-start text-sm text-muted-foreground">
              <div className="flex items-center">
                <IconRenderer name="MapPin" className="mr-2" />{" "}
                {customer?.location}
              </div>
              <div className="flex items-center">
                <IconRenderer name="Mail" className="mr-2" />
                <a
                  href={`mailto:${
                    customer?.email || "cansultent@usystem.solutions"
                  }`}
                  className="underline hover:text-primary"
                >
                  {customer?.email || "cansultent@usystem.solutions"}
                </a>
              </div>
              <div className="flex items-center">
                <IconRenderer name="Phone" className="mr-2" />
                <a
                  href="tel:+9270033002"
                  className="underline hover:text-primary"
                >
                  {customer?.phone}
                </a>
              </div>
            </div>

            <a
              href={`https://wa.me/${customer?.phone}`}
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

          {/* Right Panel */}
          <div className="md:flex-1 text-center">
            <TypographyH5 className="mb-4">Select a Date</TypographyH5>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateCalendar
                value={selectedDate}
                onChange={(newDate) => {
                  setSelectedDate(newDate);
                  setSelectedSlot(null);
                }}
                minDate={dayjs().startOf("day")}
                className="dark:text-white"
              />
            </LocalizationProvider>

            <TypographyH5 className="mt-6">Available Slots</TypographyH5>
            <div className="mt-4 space-y-4">
              {Object.entries(slotsForDate).map(([category, times]) => (
                <div key={category} className="text-left">
                  <TypographySmall className="font-semibold mb-2">
                    {category}
                  </TypographySmall>
                  {times.length === 0 ? (
                    <p className="text-sm text-red-500">Slot not available</p>
                  ) : (
                    <div className="flex flex-wrap gap-3 mt-3">
                      {times.map((time) => {
                        const isToday = dayjs().isSame(selectedDate, "day");
                        const [hour, minutePart] = time.split(":");
                        const [minutes, ampm] = minutePart.split(" ");
                        const hour24 =
                          ampm === "PM" && +hour !== 12
                            ? +hour + 12
                            : ampm === "AM" && +hour === 12
                            ? 0
                            : +hour;
                        const slotDateTime = dayjs(selectedDate)
                          .hour(hour24)
                          .minute(parseInt(minutes))
                          .second(0);
                        const isPast = isToday && slotDateTime.isBefore(now);

                        return (
                          <button
                            key={time}
                            disabled={isPast}
                            className={`px-4 py-2 text-sm border rounded cursor-pointer transition 
                            ${
                              isPast
                                ? "bg-muted text-muted-foreground cursor-not-allowed"
                                : selectedSlot === time
                                ? "bg-primary text-white"
                                : "bg-background hover:bg-accent hover:text-accent-foreground"
                            }`}
                            onClick={() => {
                              if (!isPast) setSelectedSlot(time);
                            }}
                          >
                            {time}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {selectedSlot && (
              <TypographySmall className="mt-4 text-green-600">
                Slot Selected: {selectedSlot}
              </TypographySmall>
            )}

            <div className="grid grid-cols-2 mt-4 items-center gap-5">
              <Button
                className="w-full"
                disabled={!selectedSlot}
                onClick={() => setShowForm(true)}
              >
                Book Now
              </Button>

              <Button variant="secondary" className="w-full" onClick={onBack}>
                Back
              </Button>
            </div>
          </div>
        </div>
      </PageLayout>
    </>
  );
};

export default BookCall;
