import Maintenance404 from "@/components/Maintenance404";
import ContactUs from "@/pages/contact-us/ContactUs";
import Customers from "@/pages/book-call/Customers";
import Services from "@/pages/services/services/Services";

export const DefaultRoutes = [
  { path: "*", element: <Maintenance404 /> },
  { path: "/contact-us", element: <ContactUs /> },
  { path: "/book-call", element: <Customers /> },
  { path: "/services", element: <Services /> },

];
