import HeroSection from "@/components/HeroSection";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import { Separator } from "@/components/ui/separator";
import PageLayout from "@/custom/PageLayout";
import { TypographyH4, TypographyMuted } from "@/custom/Typography";
import { services } from "./data";

ChartJS.register(ArcElement, Tooltip);

// Pie chart data generator
const createPieData = (value) => ({
  labels: ["Rating", "Remaining"],
  datasets: [
    {
      data: [value, 5 - value],
      backgroundColor: ["#4ade80", "#E5E7EB"],
      borderWidth: 0,
      cutout: "75%",
    },
  ],
});

// Star color mapping
const getStarColor = (star) => {
  switch (parseInt(star)) {
    case 5:
    case 4:
    case 3:
      return "bg-green-700";
    case 2:
      return "bg-yellow-500";
    case 1:
      return "bg-red-600";
    default:
      return "bg-gray-300";
  }
};

export default function ServicesReviewPage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        backgroundImage="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1600&auto=format&fit=crop&q=80"
        title="Client Feedback And Reviews"
        description="Check out detailed feedback and ratings for each service we offer."
        buttonText="Contact Us"
      />

      {/* Services Section */}
      <PageLayout section className="py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => {
          // Calculate average rating for each service
          const totalRatings = service.tasks.reduce((sum, task) => sum + task.rating, 0);
          const avgRating = (totalRatings / service.tasks.length).toFixed(1);

          // Ratings Count (for bars)
          const ratingsCount = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
          service.tasks.forEach((task) => {
            ratingsCount[task.rating] = (ratingsCount[task.rating] || 0) + 1;
          });

          const totalReviews = service.tasks.length;

          return (
            <div
              key={index}
              className="border rounded-md p-6"
            >
              {/* Service Title */}
              <TypographyH4 className="mb-4 text-primary border-b-2 pb-1 tracking-tight uppercase border-primary inline">{service.title}</TypographyH4>

              {/* Average Rating */}
              <div className="flex items-center gap-4 my-6">
                <TypographyH4>{avgRating} ★</TypographyH4>
                <p className="text-gray-600 text-sm">{totalReviews} Reviews</p>
              </div>

              {/* Ratings & Features */}
              <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                {/* Rating Bars */}
                <div className="w-68">
                  {Object.keys(ratingsCount)
                    .sort((a, b) => b - a)
                    .map((star) => (
                      <div key={star} className="flex items-center gap-2">
                        <span className="text-xs font-semibold w-4">{star}</span> ★
                        <div className="flex-1 bg-gray-200 rounded-full h-1.5">
                          <div
                            className={`${getStarColor(star)} h-1.5 rounded-full`}
                            style={{
                              width: `${(ratingsCount[star] / totalReviews) * 100}%`,
                            }}
                          ></div>
                        </div>
                        <span className="w-8 text-xs text-gray-600 text-right">
                          {ratingsCount[star]}
                        </span>
                      </div>
                    ))}
                </div>

                {/* Chart Names as Pie Charts */}
                <div className="flex items-center gap-4">
                  {service.chartNames.map((chart, i) => (
                    <div key={i} className="flex flex-col items-center">
                      <div className="relative w-14 h-14">
                        <Pie
                          data={createPieData(Math.random() * 5)}
                          options={{
                            maintainAspectRatio: false,
                            plugins: { tooltip: { enabled: false } },
                          }}
                        />
                        <span className="absolute inset-0 flex items-center justify-center text-xs font-bold">
                          {(Math.random() * 5).toFixed(1)}
                        </span>
                      </div>
                      <span className="text-xs mt-2 text-center">{chart}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Separator className="my-6" />

              {/* Reviews */}
              <div className="space-y-6">
                {service.tasks.map((task, idx) => (
                  <div key={idx} className="flex gap-4">
                    <img
                      src={task.profile}
                      alt={task.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="space-y-1">
                      <TypographyH4 className="text-base font-semibold">{task.name}</TypographyH4>
                      <TypographyMuted className="text-xs">{task.date}</TypographyMuted>
                      <p className="flex items-center gap-1 text-sm text-yellow-500">
                        {"★".repeat(task.rating)}
                        {"☆".repeat(5 - task.rating)}
                      </p>
                      <p className="text-gray-700 text-sm md:line-clamp-7">{task.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </PageLayout>
    </>
  );
}
