// InTheMedia.jsx
import { media } from "./Data";

export default function InTheMedia() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">In the Media</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center">
        {media.map((item) => (
          <div
            key={item.id}
            className="max-w-sm mx-auto overflow-hidden rounded-xl border border-gray-200 bg-white hover:border-teal-500 transition"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-44 object-cover border-b border-gray-200"
            />
            <div className="p-5 text-left">
              <p className="text-sm text-gray-500">{item.date}</p>
              <h3 className="text-lg font-semibold mt-2">{item.title}</h3>
              <p className="text-gray-600 mt-2 line-clamp-3">
                {item.description}
              </p>
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
