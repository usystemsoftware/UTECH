// Newsletter.jsx
export default function Newsletter() {
  return (
    <div className="p-6 bg-gray-50 rounded-xl shadow text-center">
      <h2 className="text-2xl font-bold mb-4">Newsletter</h2>
      <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
        Subscribe to our monthly newsletter and stay updated with the latest
        insights, news, and updates.
      </p>

      {/* Responsive Input + Button */}
      <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-3 sm:gap-0">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 border rounded-lg sm:rounded-l-lg sm:rounded-r-none px-4 py-2 outline-none"
        />
        <button className="bg-teal-600 text-white px-6 py-2 rounded-lg sm:rounded-r-lg sm:rounded-l-none hover:bg-teal-700 transition">
          Subscribe
        </button>
      </div>
    </div>
  );
}
