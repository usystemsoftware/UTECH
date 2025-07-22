import Maintenance404 from "@/components/Maintenance404";
import ContactUs from "@/pages/contact-us/ContactUs";
import BookCall from "@/pages/book-call/BookCall";

export const DefaultRoutes = [
  { path: "*", element: <Maintenance404 /> },
  { path: "/contact-us", element: <ContactUs /> },
  { path: "/book-call", element: <BookCall /> },
];
