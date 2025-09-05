import ContactUs from "@/pages/contact-us/ContactUs";
import Customers from "@/pages/book-call/Customers";
import Services from "@/pages/services/customservices/Services";
import Affiliations from "@/pages/default/affiliations/Affiliations";

export const DefaultRoutes = [
  { path: "/contact-us", element: <ContactUs /> },
  { path: "/book-call", element: <Customers /> },
  { path: "/services", element: <Services /> },
  { path: "/affiliations", element: <Affiliations /> },
];
