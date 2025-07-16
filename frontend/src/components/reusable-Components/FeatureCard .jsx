"use client";
import React from "react";
import {
  FaChartLine,
  FaRobot,
  FaVrCardboard,
  FaWifi,
  FaComments,
  FaHeadset,
} from "react-icons/fa";

const features = [
  {
    title: "Predictive Analytics Solutions",
    icon: <FaChartLine className="text-4xl text-cyan-600" />,
    description:
      "Unlock smarter investment decisions with predictive analytics, offering real-time projections and insights using historical data.",
  },
  {
    title: "Intelligent Process Automation",
    icon: <FaRobot className="text-4xl text-cyan-600" />,
    description:
      "Automate and optimize real estate workflows using AI, NLP, and robotic process automation for faster and smarter decisions.",
  },
  {
    title: "AR/VR Immersiveness",
    icon: <FaVrCardboard className="text-4xl text-cyan-600" />,
    description:
      "Create immersive property experiences with AR/VR technology, including 3D tours, interactive floor plans, and more.",
  },
  {
    title: "IoT Implementation",
    icon: <FaWifi className="text-4xl text-cyan-600" />,
    description:
      "Leverage IoT for real-time monitoring, smart sensors, and building management to ensure safety and efficiency.",
  },
  {
    title: "AI Chatbots",
    icon: <FaComments className="text-4xl text-cyan-600" />,
    description:
      "We leverage powerful AI and NLP technology to develop interactive chatbots using programming languages such as Python, Ruby, or Java and the proper building framework to design a bot that can engage with website visitors, answer their queries, and guide them through the sales funnel. Custom Software Chatbots can provide personalized recommendations based on visitor needs and preferences, capturing lead information in real-time..",
  },
  {
    title: "Virtual Assistants",
    icon: <FaHeadset className="text-4xl text-cyan-600" />,
    description:
      "Our developers design virtual assistants that align with the client’s needs and expectations through integration with essential platforms, such as MLS, CRM, and social media to access property statistics and other integral market and company data. The virtual assistant is a powerful real estate tool that can help industry professionals manage their workload by handling administrative tasks, scheduling appointments, and more, freeing up time for prospecting.",
  },
];

const FeatureCard = ({ icon, title, description }) => (
  <div className="flex items-start gap-4 p-4">
    <div>{icon}</div>
    <div>
      <h3 className="text-lg font-semibold text-cyan-800 mb-1">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  </div>
);

const RealEstateFeatures = () => {
  return (
    <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
        AI-Powered Real Estate Solutions
      </h2>
      <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
        Discover how advanced technologies like AI, IoT, AR/VR, and automation
        are transforming the real estate industry with intelligent, data-driven
        tools.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {features.map((feature, idx) => (
          <FeatureCard key={idx} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default RealEstateFeatures;
