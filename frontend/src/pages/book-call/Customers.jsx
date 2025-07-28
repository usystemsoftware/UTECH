import React, { useState } from "react";
import PageLayout from "@/custom/PageLayout";
import HeadingSection from "@/custom/HeadingSection";
import {
  TypographyH5,
  TypographySmall,
  TypographyMuted,
} from "@/custom/Typography";
import { Button } from "@/components/ui/button";
import BookCall from "./BookCall";
import { FadeInWhenVisible } from "@/custom/FadeInWhenVisible";

const dummyCustomers = [
  {
    id: 1,
    name: "Dr. Anika Sharma",
    email: "anika.sharma@medtech.io",
    designation: "Radiology AI Specialist",
    image: "/assets/customers/anika.png",
  },
  {
    id: 2,
    name: "John Matthews",
    email: "john.matthews@cardioscan.com",
    designation: "Cardiac Imaging Consultant",
    image: "/assets/customers/john.png",
  },
  {
    id: 3,
    name: "Sara Lee",
    email: "sara.lee@aidiagnostics.com",
    designation: "AI Integration Consultant",
    image: "/assets/customers/sara.png",
  },
];

export default function Customers() {
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [bookingData, setBookingData] = useState(null);

  return (
    <PageLayout className="py-16">
      <HeadingSection
        title="Book A"
        highlight="Consultation"
        description="Let’s connect and discuss how I can help you build impactful medical tech solutions."
        center
      />

      {selectedCustomer !== null ? (
        <BookCall
          bookingData={bookingData}
          setBookingData={setBookingData}
          customer={selectedCustomer}
          onBack={() => setSelectedCustomer(null)}
        />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {dummyCustomers.map((customer) => (
            <FadeInWhenVisible
              key={customer.id}
              className="border p-6 rounded-md"
            >
              <div className="flex gap-4">
                <FadeInWhenVisible>
                  <img
                    loading="lazy"
                    src={customer.image}
                    alt={customer.name}
                    className="w-20 h-20 rounded-full border border-primary"
                  />
                </FadeInWhenVisible>
                <FadeInWhenVisible>
                  <TypographyH5>{customer.name}</TypographyH5>
                  <TypographyMuted>{customer.designation}</TypographyMuted>
                  <TypographySmall>{customer.email}</TypographySmall>
                </FadeInWhenVisible>
              </div>
              <FadeInWhenVisible>
                <Button
                  className="mt-4 w-full"
                  onClick={() => setSelectedCustomer(customer)}
                >
                  Book Slot
                </Button>
              </FadeInWhenVisible>
            </FadeInWhenVisible>
          ))}
        </div>
      )}
    </PageLayout>
  );
}
