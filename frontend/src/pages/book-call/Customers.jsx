import React, { useState, useEffect } from "react";
import PageLayout from "@/custom/PageLayout";
import HeadingSection from "@/custom/HeadingSection";
import {
  TypographyH5,
  TypographySmall,
  TypographyMuted,
} from "@/custom/Typography";
import { Button } from "@/components/ui/button";
import BookCall from "./BookCall";
import BookUserSubmitDetails from "./BookUserSubmiteDetails";
import { FadeInWhenVisible } from "@/custom/FadeInWhenVisible";
import Cookies from "js-cookie";

const dummyCustomers = [
  {
    id: 1,
    name: "Software Consultant",
    email: "support@usystem.solions",
    designation: "Consultant Team",
    location: "Pune",
    expertise: ["CEO", "Software Engineer", "CA", "Advocate"],
    phone: "+91 9270033002",
    image: "/assets/book-call/images.png",
    description:
      "I’m a technology consultant with 15+ years of experience in Finance and software industry",
  },
];

export default function Customers() {
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [bookingData, setBookingData] = useState(null);

  useEffect(() => {
    const stored = Cookies.get("bookingData");
    if (stored) {
      setBookingData(JSON.parse(stored));
    }
  }, []);

  // If bookingData already exists, show booking summary only
  if (bookingData) {
    return (
      <BookUserSubmitDetails
        customer={bookingData.customer}
        date={bookingData.date}
        slot={bookingData.slot}
        bookingData={bookingData}
        setBookingData={setBookingData}
      />
    );
  }

  return (
    <section className="w-full">
      {/* HERO IMAGE SECTION */}
      <div className="relative h-[500px] overflow-hidden">
        <img
          src="/banner/book-call-banner.jpeg"
          alt="Book Consultation"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-primary/30 z-10" />

        <div className="relative z-20 max-w-5xl mx-auto h-full flex items-center px-6 text-white text-center justify-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Book Your Consultation
            </h1>
            <p className="text-lg mb-6">
              Let’s connect and discuss how we can build impactful solutions
              together.
            </p>
          </div>
        </div>
      </div>

      {/* CUSTOMERS SECTION */}
      <PageLayout className="relative z-20 -mt-32 md:mb-32 bg-card md:rounded-2xl rounded-t-2xl shadow-xl py-6">
        <HeadingSection
          title="Book A"
          highlight="Consultation"
          description="Choose a consultant and book your slot below."
          center
        />

        {selectedCustomer ? (
          <BookCall
            bookingData={bookingData}
            setBookingData={setBookingData}
            customer={selectedCustomer}
            onBack={() => setSelectedCustomer(null)}
          />
        ) : (
          <div className="flex justify-center items-center gap-6 mt-10">
            {dummyCustomers.map((customer) => (
              <FadeInWhenVisible
                key={customer.id}
                className="border p-6 rounded-xl shadow-md bg-card"
              >
                <div className="flex gap-4 items-center">
                  <img
                    loading="lazy"
                    src={customer.image || "/assets/book-call/images.png"}
                    alt={customer.name}
                    className="w-20 h-20 rounded-full border border-primary object-cover"
                  />
                  <div>
                    <TypographyH5>{customer.name}</TypographyH5>
                    <TypographyMuted>{customer.designation}</TypographyMuted>
                    <TypographySmall>{customer.email}</TypographySmall>
                  </div>
                </div>

                <Button
                  className="mt-6 w-full"
                  onClick={() => setSelectedCustomer(customer)}
                >
                  Book Slot
                </Button>
              </FadeInWhenVisible>
            ))}
          </div>
        )}
      </PageLayout>
    </section>
  );
}
