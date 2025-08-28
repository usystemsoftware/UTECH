import HeroSection from "@/components/HeroSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import PageLayout from "@/custom/PageLayout";
import {
  CircleX,
  Clock,
  MoveLeft,
  ShieldCheck,
  SquareCheckBig,
} from "lucide-react";
import {
  TypographyH1,
  TypographyMuted,
  TypographyH4,
} from "@/custom/Typography";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { jobs } from "./Data";
import Cookies from "js-cookie";
import { jobApply } from "@/machine/jobApply";
import LoadingPage from "@/custom/LoadingPage";

const capitalizeWords = (str) =>
  str.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase());

export default function JobDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const job = jobs.find((j) => j.slug === id);

  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    mobile: "",
    resume: null,
  });

  const [errors, setErrors] = useState({});
  const [applied, setApplied] = useState(false);

  // Loading states
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  // Load applied jobs from cookies
  useEffect(() => {
    const appliedJobs = Cookies.get("appliedJobs")
      ? JSON.parse(Cookies.get("appliedJobs"))
      : [];
    if (appliedJobs.includes(job?.slug)) {
      setApplied(true);
    }
  }, [job?.slug]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm({ ...form, [name]: files ? files[0] : value });
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};
    if (!form.firstname.trim()) newErrors.firstname = "First name is required";
    if (!form.lastname.trim()) newErrors.lastname = "Last name is required";
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Enter a valid email address";
    }
    if (!form.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^[0-9]{10}$/.test(form.mobile)) {
      newErrors.mobile = "Enter a valid 10-digit mobile number";
    }
    if (!form.resume) newErrors.resume = "Resume upload is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const formDataObj = new FormData();
    formDataObj.append("firstname", capitalizeWords(form.firstname));
    formDataObj.append("lastname", capitalizeWords(form.lastname));
    formDataObj.append("email", form.email.toLowerCase());
    formDataObj.append("mobile", form.mobile);
    formDataObj.append("role", capitalizeWords(job.title));
    formDataObj.append("resume", form.resume);

    if (job.responsibility && job.responsibility.length > 0) {
      formDataObj.append("responsibility", job.responsibility.join(", "));
    }

    try {
      setLoading(true);
      setError(false);
      setSuccess(false);

      const res = await jobApply(formDataObj);
      console.log("Form submitted:", res);

      let appliedJobs = Cookies.get("appliedJobs")
        ? JSON.parse(Cookies.get("appliedJobs"))
        : [];

      if (!appliedJobs.includes(job.slug)) {
        appliedJobs.push(job.slug);
        Cookies.set("appliedJobs", JSON.stringify(appliedJobs), { expires: 5 });
        setApplied(true);
      }

      setLoading(false);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000); // Auto-hide success after 3 sec
    } catch (err) {
      console.error("Error applying:", err);
      setLoading(false);
      setError(true);
      setTimeout(() => setError(false), 3000); // Auto-hide error after 3 sec
    }
  };

  if (!job) return <p className="p-6">Job not found</p>;

  return (
    <>
      <HeroSection
        backgroundImage={job?.img}
        title={job?.title}
        description={job?.description}
      />

      <PageLayout className="grid grid-cols-1 md:grid-cols-2 py-16 items-center mx-auto gap-6 space-y-8">
        {/* Job Info */}
        <div>
          <button
            onClick={() => navigate(-1)}
            className="mb-6 flex items-center gap-2 text-primary cursor-pointer"
          >
            <MoveLeft />
            <span>Back to All Jobs</span>
          </button>
          <TypographyH1 className="mb-4">{job.title}</TypographyH1>
          <TypographyMuted>
            {job.type} · {job.location}
          </TypographyMuted>
          <div className="flex items-center flex-wrap gap-4 mt-4">
            {!applied && (
              <>
                <span className="bg-secondary py-2 flex items-center gap-1 px-6 rounded-full text-sm">
                  <Clock size={16} /> 23-08-2025
                </span>

                <span className="bg-green-200 flex items-center gap-1 py-2 px-6 rounded-full text-sm">
                  <ShieldCheck size={16} /> Active
                </span>
              </>
            )}

            {applied ? (
              <span className="bg-green-200 flex items-center gap-1 py-2 px-6 rounded-full text-sm">
                <SquareCheckBig size={16} /> Already Applied
              </span>
            ) : (
              <span className="bg-red-200 flex items-center gap-1 py-2 px-6 rounded-full text-sm">
                <CircleX size={16} /> Not Applied
              </span>
            )}
          </div>
          <TypographyMuted className="mt-4">{job.description}</TypographyMuted>
          {job.roledef && (
            <div className="mt-6">
              <h2 className="text-xl font-semibold">Role Definition</h2>
              <TypographyMuted>{job.roledef}</TypographyMuted>
            </div>
          )}

          {job.responsibility && (
            <div className="mt-6">
              <h2 className="text-xl font-semibold">Responsibilities</h2>
              <ul className="list-disc ml-6 space-y-2">
                {job.responsibility.map((r, idx) => (
                  <li key={idx}>{r}</li>
                ))}
              </ul>
            </div>
          )}

          {job.qualification && (
            <div className="mt-6">
              <h2 className="text-xl font-semibold">Qualification</h2>
              <p>{job.qualification}</p>
            </div>
          )}
        </div>

        {/* Apply Form */}
        {!applied ? (
          <div className="max-w-sm mx-auto">
            <h1 className="text-2xl font-bold mb-8">Apply For A Job</h1>
            <form onSubmit={handleSubmit} className="space-y-8 text-left">
              <div className="grid gap-2">
                <Label className="font-semibold">First Name</Label>
                <input
                  type="text"
                  name="firstname"
                  value={form.firstname}
                  onChange={handleChange}
                  className="capitalize border-b-2 focus:outline-none focus:border-primary"
                />
                {errors.firstname && (
                  <p className="text-red-500 text-sm">{errors.firstname}</p>
                )}
              </div>

              <div className="grid gap-2">
                <Label className="font-semibold">Last Name</Label>
                <input
                  type="text"
                  name="lastname"
                  value={form.lastname}
                  onChange={handleChange}
                  className="capitalize border-b-2 focus:outline-none focus:border-primary"
                />
                {errors.lastname && (
                  <p className="text-red-500 text-sm">{errors.lastname}</p>
                )}
              </div>

              <div className="grid gap-2">
                <Label className="font-semibold">Email</Label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="capitalize border-b-2 focus:outline-none focus:border-primary"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
              </div>

              <div className="grid gap-2">
                <Label className="font-semibold">Mobile Number</Label>
                <input
                  type="text"
                  name="mobile"
                  value={form.mobile}
                  onChange={handleChange}
                  className="capitalize border-b-2 focus:outline-none focus:border-primary"
                />
                {errors.mobile && (
                  <p className="text-red-500 text-sm">{errors.mobile}</p>
                )}
              </div>

              <div className="grid gap-2">
                <Label className="font-semibold">Upload Resume</Label>
                <input
                  type="file"
                  name="resume"
                  accept=".pdf,.doc,.docx"
                  onChange={handleChange}
                  className="capitalize cursor-pointer border-b-2 focus:outline-none focus:border-primary"
                />
                {errors.resume && (
                  <p className="text-red-500 text-sm">{errors.resume}</p>
                )}
              </div>

              <Button type="submit" className="w-full">
                Submit Application
              </Button>
            </form>
          </div>
        ) : (
          <div className="border h-fit p-6 flex flex-col items-center justify-center space-y-3 text-center max-w-md mx-auto bg-green-50">
            <SquareCheckBig size={26} color="green" />
            <TypographyH4 className="text-green-700">
              You already applied for this job {job?.title}
            </TypographyH4>
            <TypographyMuted>
              We will contact you if shortlisted.
            </TypographyMuted>
          </div>
        )}
      </PageLayout>

      {/* Loading / Success / Error Popup */}
      <LoadingPage loading={loading} success={success} error={error} />
    </>
  );
}
