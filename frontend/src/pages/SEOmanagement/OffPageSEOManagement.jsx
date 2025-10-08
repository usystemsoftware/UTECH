// src/pages/DashboardSeoFormHub.jsx
import React, { useState, useCallback, useEffect } from "react";
import { Mail, Briefcase, Link, CheckCircle } from "lucide-react";

// --- Dashboard Wrapper (example) ---
export default function DashboardSeoFormHub() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Dashboard Header */}
      <header className="bg-white shadow p-5 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">
          SEO Strategy Form Hub
        </h1>
        <p className="text-gray-500 text-sm">
          Manage Guest Posts, Partnerships & Link Requests
        </p>
      </header>

      {/* Main content */}
      <main className="flex-1 p-6 overflow-y-auto">
        <div className="bg-white rounded-2xl shadow-xl p-6">
          <SeoFormHub />
        </div>
      </main>
    </div>
  );
}

/* ======================================================
   ========== SEO Form Hub Component ====================
====================================================== */

const APP_NAME = "Your Website Name";
const INDUSTRY = "your industry";

const formConfigs = {
  guestPost: {
    title: `Write for us: Become a contributor to ${APP_NAME}`,
    intro: `We welcome pitches from experts in ${INDUSTRY}. Please submit your article proposal below.`,
    confirmation: "Thank you! We’ll review your submission soon.",
    fields: [
      { id: "name", label: "Your Name", type: "text", required: true },
      { id: "email", label: "Your Email", type: "email", required: true },
      { id: "website", label: "Website URL", type: "url", required: true },
      { id: "topic", label: "Proposed Title", type: "text", required: true },
      { id: "outline", label: "Outline", type: "textarea", required: true },
      { id: "sample", label: "Sample Work Link", type: "url" },
      { id: "whyFit", label: "Why it fits our audience", type: "textarea" },
    ],
    consent: {
      label: "By submitting this form, you agree to our guest post guidelines.",
      link: "#",
    },
  },
  partnership: {
    title: "Partner with us: Collaboration opportunities",
    intro: `Interested in partnering with ${APP_NAME}? Tell us more.`,
    confirmation: "Your partnership request has been received!",
    fields: [
      { id: "name", label: "Your Name", type: "text", required: true },
      { id: "email", label: "Your Email", type: "email", required: true },
      { id: "companyName", label: "Company Name", type: "text", required: true },
      {
        id: "companyWebsite",
        label: "Company Website",
        type: "url",
        required: true,
      },
      {
        id: "proposal",
        label: "Describe Your Proposal",
        type: "textarea",
        required: true,
      },
      { id: "budget", label: "Budget (Optional)", type: "text" },
    ],
    collaborationOptions: [
      "Guest Post",
      "Sponsored Content",
      "Link Insertion",
      "Other",
    ],
  },
  linkReclamation: {
    title: "Link request: Fix a brand mention",
    intro: "Use this form to request a backlink where our brand was mentioned.",
    confirmation: "Your link request was submitted successfully!",
    fields: [
      { id: "yourName", label: "Your Name", type: "text", required: true },
      { id: "yourEmail", label: "Your Email", type: "email", required: true },
      {
        id: "mentionUrl",
        label: "URL of the mention",
        type: "url",
        required: true,
      },
      {
        id: "targetUrl",
        label: "URL you want linked",
        type: "url",
        required: true,
      },
      {
        id: "anchorText",
        label: "Preferred Anchor Text",
        type: "text",
        required: true,
      },
      {
        id: "context",
        label: "Context (optional)",
        type: "textarea",
        required: false,
      },
    ],
  },
};

/* ---------------- Reusable Input ---------------- */
const InputField = ({ id, label, type, required, value, onChange }) => {
  const base =
    "mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-3";
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {type === "textarea" ? (
        <textarea
          id={id}
          name={id}
          rows="4"
          className={`${base} resize-y`}
          required={required}
          value={value}
          onChange={onChange}
        />
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          required={required}
          className={base}
          value={value}
          onChange={onChange}
        />
      )}
    </div>
  );
};

/* ---------------- Shared Layout ---------------- */
const FormLayout = ({
  title,
  intro,
  children,
  onSubmit,
  confirmationMessage,
  isSubmitted,
  formName,
}) => (
  <div className="p-6 rounded-xl bg-white border">
    <h2 className="text-2xl font-bold mb-2 text-indigo-700">{title}</h2>
    <p className="text-gray-600 mb-4">{intro}</p>

    {isSubmitted ? (
      <div className="p-4 bg-green-50 border border-green-400 rounded-lg text-green-700">
        <CheckCircle className="inline-block w-5 h-5 mr-2" />
        {confirmationMessage}
        <button
          onClick={() => onSubmit({ reset: true })}
          className="block text-indigo-600 hover:text-indigo-800 mt-3 text-sm"
        >
          Submit another?
        </button>
      </div>
    ) : (
      <form onSubmit={onSubmit} className="space-y-3">
        {children}
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700"
        >
          Submit {formName}
        </button>
      </form>
    )}
  </div>
);

/* ---------------- Guest Post Form ---------------- */
const GuestPostForm = ({ onSubmit, isSubmitted }) => {
  const config = formConfigs.guestPost;
  const blank = Object.fromEntries(config.fields.map((f) => [f.id, ""]));
  const [formData, setFormData] = useState(blank);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if (isSubmitted) {
      setFormData(blank);
      setIsChecked(false);
    }
  }, [isSubmitted]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isChecked) return alert("Please agree to the guidelines.");
    onSubmit({ formData });
  };

  return (
    <FormLayout
      title={config.title}
      intro={config.intro}
      isSubmitted={isSubmitted}
      confirmationMessage={config.confirmation}
      onSubmit={handleSubmit}
      formName="Guest Post"
    >
      {config.fields.map((f) => (
        <InputField key={f.id} {...f} value={formData[f.id]} onChange={handleChange} />
      ))}
      <div className="flex items-start mt-2">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={(e) => setIsChecked(e.target.checked)}
          className="mt-1 h-4 w-4 text-indigo-600 border-gray-300 rounded"
        />
        <label className="ml-2 text-sm text-gray-600">
          {config.consent.label}{" "}
          <a href={config.consent.link} className="text-indigo-600 underline">
            View
          </a>
        </label>
      </div>
    </FormLayout>
  );
};

/* ---------------- Partnership Form ---------------- */
const PartnershipForm = ({ onSubmit, isSubmitted }) => {
  const config = formConfigs.partnership;
  const blank = Object.fromEntries(config.fields.map((f) => [f.id, ""]));
  const [formData, setFormData] = useState(blank);
  const [selected, setSelected] = useState([]);

  const handleCheckbox = (option) => {
    setSelected((prev) =>
      prev.includes(option)
        ? prev.filter((o) => o !== option)
        : [...prev, option]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selected.length === 0)
      return alert("Select at least one collaboration type.");
    onSubmit({ formData, selected });
  };

  return (
    <FormLayout
      title={config.title}
      intro={config.intro}
      isSubmitted={isSubmitted}
      confirmationMessage={config.confirmation}
      onSubmit={handleSubmit}
      formName="Partnership"
    >
      {config.fields
        .filter((f) => f.id !== "budget")
        .map((f) => (
          <InputField
            key={f.id}
            {...f}
            value={formData[f.id]}
            onChange={(e) =>
              setFormData({ ...formData, [f.id]: e.target.value })
            }
          />
        ))}

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Collaboration Type
        </label>
        <div className="grid grid-cols-2 gap-2">
          {config.collaborationOptions.map((opt) => (
            <label key={opt} className="flex items-center">
              <input
                type="checkbox"
                checked={selected.includes(opt)}
                onChange={() => handleCheckbox(opt)}
                className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
              />
              <span className="ml-2 text-sm">{opt}</span>
            </label>
          ))}
        </div>
      </div>

      <InputField
        {...config.fields.find((f) => f.id === "budget")}
        value={formData.budget}
        onChange={(e) =>
          setFormData({ ...formData, budget: e.target.value })
        }
      />
    </FormLayout>
  );
};

/* ---------------- Link Reclamation Form ---------------- */
const LinkReclamationForm = ({ onSubmit, isSubmitted }) => {
  const config = formConfigs.linkReclamation;
  const blank = Object.fromEntries(config.fields.map((f) => [f.id, ""]));
  const [formData, setFormData] = useState(blank);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ formData });
  };

  return (
    <FormLayout
      title={config.title}
      intro={config.intro}
      isSubmitted={isSubmitted}
      confirmationMessage={config.confirmation}
      onSubmit={handleSubmit}
      formName="Link Reclamation"
    >
      {config.fields.map((f) => (
        <InputField
          key={f.id}
          {...f}
          value={formData[f.id]}
          onChange={(e) =>
            setFormData({ ...formData, [f.id]: e.target.value })
          }
        />
      ))}
    </FormLayout>
  );
};

/* ---------------- Hub Wrapper ---------------- */
const SeoFormHub = () => {
  const [activeForm, setActiveForm] = useState("guestPost");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = useCallback(
    ({ reset = false }) => {
      if (reset) {
        setIsSubmitted(false);
      } else {
        setIsSubmitted(true);
      }
    },
    []
  );

  const forms = {
    guestPost: (
      <GuestPostForm onSubmit={handleSubmit} isSubmitted={isSubmitted} />
    ),
    partnership: (
      <PartnershipForm onSubmit={handleSubmit} isSubmitted={isSubmitted} />
    ),
    linkReclamation: (
      <LinkReclamationForm onSubmit={handleSubmit} isSubmitted={isSubmitted} />
    ),
  };

  const tabs = [
    { id: "guestPost", label: "Guest Post", icon: Mail },
    { id: "partnership", label: "Partnership", icon: Briefcase },
    { id: "linkReclamation", label: "Link Request", icon: Link },
  ];

  return (
    <div>
      <div className="flex bg-gray-100 rounded-t-lg overflow-hidden">
        {tabs.map((t) => {
          const Active = activeForm === t.id;
          const Icon = t.icon;
          return (
            <button
              key={t.id}
              onClick={() => {
                setActiveForm(t.id);
                setIsSubmitted(false);
              }}
              className={`flex-1 flex items-center justify-center py-3 font-semibold ${
                Active
                  ? "bg-white text-indigo-600 border-b-2 border-indigo-600"
                  : "text-gray-600 hover:bg-gray-200"
              }`}
            >
              <Icon className="w-4 h-4 mr-2" />
              {t.label}
            </button>
          );
        })}
      </div>
      <div className="p-4 border border-t-0 rounded-b-lg bg-white shadow-inner">
        {forms[activeForm]}
      </div>
    </div>
  );
};
