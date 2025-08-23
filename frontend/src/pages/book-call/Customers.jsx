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
    name: "Rajesh Umbarkar",
    email: "usystem.rajesh@gmail.com",
    designation: "Founder & CEO",
    location: "Pune",
    expertise: ["CEO", "Software Engineer", "CA", "Advacate"],
    phone: "+91 9270033002",
    image: "/assets/book-call/images.png",
    description:
      "I’m a technology consultant with 15+ years of experience in Finance and software industry",
  },
  // {
  //   id: 2,
  //   name: "JR. Amol Mahor",
  //   email: "amol@usystem.solutions",
  //   designation: "JR. Software Engineer",
  //   image: "/assets/customers/anika.png",
  // },
  // {
  //   id: 3,
  //   name: "JR. Abhijit Mhaske",
  //   email: "abhijit@usystem.solutions",
  //   designation: "JR. Software Engineer",
  //   image: "/assets/customers/john.png",
  // },
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
        <div className="flex justify-center items-center gap-6">
          {dummyCustomers.map((customer) => (
            <FadeInWhenVisible
              key={customer.id}
              className="border p-6 rounded-md"
            >
              <div className="flex gap-4">
                <FadeInWhenVisible>
                  <img
                    loading="lazy"
                    src={customer.image || "/assets/book-call/images.png"}
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
