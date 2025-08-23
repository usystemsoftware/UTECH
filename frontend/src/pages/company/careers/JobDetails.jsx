import HeroSection from "@/components/HeroSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import PageLayout from "@/custom/PageLayout";
import { Clock, MoveLeft, ShieldCheck } from "lucide-react";
import {
  Headline,
  TypographyH4,
  TypographyH1,
  TypographyMuted,
} from "@/custom/Typography";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { jobs } from "./Data";

export default function JobDetails() {
  const navigate = useNavigate();
  const { id } = useParams();

  const job = jobs.find((j) => j.slug === id);

  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm({ ...form, [name]: files ? files[0] : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    alert("Application submitted successfully!");
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
          <div className="flex items-center gap-4 mt-4">
            <span className="bg-secondary py-2 flex items-center gap-1 px-6 rounded-full text-sm">
              <Clock size={16} /> 23-08-2025
            </span>
            <span className="bg-green-200 flex items-center gap-1 py-2 px-6 rounded-full text-sm">
              <ShieldCheck size={16} /> Active
            </span>
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
        <div className="border h-fit rounded-2xl p-6 space-y-4 text-center shadow-md max-w-sm mx-auto">
          <h1 className="text-2xl font-bold mb-4">Apply For A Job</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-2">
              <Label className="font-semibold">First Name</Label>
              <Input
                type="text"
                name="firstname"
                value={form.firstname}
                onChange={handleChange}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label className="font-semibold">Last Name</Label>
              <Input
                type="text"
                name="lastname"
                value={form.lastname}
                onChange={handleChange}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label className="font-semibold">Email</Label>
              <Input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label className="font-semibold">Upload Resume</Label>
              <Input
                type="file"
                name="resume"
                accept=".pdf,.doc,.docx"
                onChange={handleChange}
                required
                className="cursor-pointer"
              />
            </div>
            <Button type="submit" className="w-full ">
              Submit Application
            </Button>
          </form>
        </div>
      </PageLayout>
    </>
  );
}
