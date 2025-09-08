// PressReleases.jsx
import { pressReleases } from "./Data";

export default function PressReleases() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Press Releases</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {pressReleases.map((item) => (
          <div
            key={item.id}
            className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition bg-white"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 text-left">
              <p className="text-sm text-gray-500">{item.date}</p>
              <h3 className="text-lg font-semibold mt-2">{item.title}</h3>
              <p className="text-gray-600 mt-2">{item.description}</p>
              <button className="mt-4 text-teal-600 font-medium hover:underline">
                Read More →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
