// src/pages/company/reviews/Review.jsx
import React from "react";
import { motion } from "framer-motion";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import PageLayout from "@/custom/PageLayout";
import { services } from "./data";

ChartJS.register(ArcElement, Tooltip);

// Pie chart data generator
const createPieData = (average) => ({
  labels: ["Average", "Remaining"],
  datasets: [
    {
      data: [average, 5 - average],
      backgroundColor: ["oklch(0.6174 0.1055 205.54)", "#E5E7EB"],
      borderWidth: 0,
      cutout: "75%", // hollow effect
    },
  ],
});

export default function Review() {
  return (
    <>
      {/* Banner Section */}
      <section
        className="relative h-[60vh] flex items-center justify-center text-white overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1600&auto=format&fit=crop&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
            What People Say About Us
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Real feedback from our employees, clients, and partners.
          </p>
        </div>
      </section>

      {/* Services & Reviews Section */}
      <PageLayout section className="py-16 space-y-16">
        {services.map((service, idx) => {
          const ratings = service.tasks.map((t) => t.rating);
          const average1 = ratings.reduce((sum, r) => sum + r, 0) / ratings.length;
          const average2 = Math.min(5, average1 + 0.5);
          const average3 = Math.max(0, average1 - 0.5);
          const averages = [average1, average2, average3];

          return (
            <div key={idx}>
              <div className="flex md:flex-row flex-col gap-8">
                {/* Left column: Service titles */}
                <div className="flex flex-col justify-center w-1/2">
                  <h2
                    className="text-2xl md:text-3xl font-bold mb-4 md:mb-0"
                    style={{ color: "oklch(0.6174 0.1055 205.54)" }}
                  >
                    {service.title}
                  </h2>
                </div>

                {/* Right column: Pie charts + Cards */}
                <div className="flex-1 flex flex-col gap-6">
                  {/* Centered Pie Charts */}
                  <div className="flex gap-16 mb-6 justify-center">
                    {averages.map((avg, index) => (
                      <div key={index} className="relative w-20 h-20">
                        <Pie data={createPieData(avg)} options={{ maintainAspectRatio: false }} />

                        {/* Rating number in center */}
                        <div
                          className="absolute inset-0 flex items-center justify-center"
                          style={{
                            fontFamily: "'Poppins', sans-serif",
                            fontWeight: "700",
                            fontSize: "0.875rem",
                            color: "oklch(0.6174 0.1055 205.54)",
                            textShadow: "1px 1px 3px rgba(0,0,0,0.3)",
                          }}
                        >
                          {avg.toFixed(1)}
                        </div>

                        {/* Chart name below */}
                        <span
                          className="mt-2 block text-center text-xs font-semibold"
                          style={{
                            fontFamily: "'Roboto', sans-serif",
                            color: "oklch(0.6174 0.1055 205.54)",
                            textShadow: "0px 1px 2px rgba(0,0,0,0.2)",
                          }}
                        >
                          {service.chartNames?.[index] || ""}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Review Cards */}
                  {service.tasks.map((task, index) => (
                    <React.Fragment key={index}>
                      <motion.div
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.3 }}
                        className="flex flex-col md:flex-row items-start p-4 rounded-3xl bg-transparent border-0"
                      >
                        {/* Left: Profile */}
                        <div className="flex flex-col items-center w-full md:w-1/3 pr-1 md:pr-1 pb-0 md:pb-0 mb-1 md:mb-0">
                          <img
                            src={task.profile}
                            alt={task.name}
                            className="w-24 h-24 rounded-full border-4 border-oklch-205 shadow-md object-cover"
                          />
                        </div>

                        {/* Right: Info */}
                        <div className="w-full md:w-2/3 pl-1 md:pl-1 space-y-1">
                          <p
                            className="font-semibold text-lg"
                            style={{ color: "oklch(0.6174 0.1055 205.54)" }}
                          >
                            {task.name}
                          </p>
                          <p className="text-gray-500 dark:text-gray-400 text-sm">
                            <strong>Date:</strong> {task.date}
                          </p>
                          <p className="flex items-center gap-1">
                            <strong>Rating:</strong>
                            <span className="text-yellow-500">
                              {"★".repeat(task.rating)}
                              {"☆".repeat(5 - task.rating)}
                            </span>
                          </p>
                          <p className="text-gray-700 dark:text-gray-300">
                           {task.description}
                          </p>
                        </div>
                      </motion.div>
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Full-width horizontal line */}
              <hr className="w-full border-t border-gray-300 dark:border-gray-600 my-12" />
            </div>
          );
        })}
      </PageLayout>
    </>
  );
}
