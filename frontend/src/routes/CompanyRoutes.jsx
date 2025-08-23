import Maintenance404 from "@/components/Maintenance404";
import Careers from "@/pages/company/careers/Careers";
import JobDetails from "@/pages/company/careers/JobDetails";

export const CompanyRoutes = [
  { path: "*", element: <Maintenance404 /> },
  { path: "/company/careers", element: <Careers /> },
  { path: "/company/careers/:id", element: <JobDetails /> },
];
