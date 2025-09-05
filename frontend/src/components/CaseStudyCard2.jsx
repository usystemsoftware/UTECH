
export default function CaseStrudyCard2({ image, title, description }) {
  return (
      <div
        className="border rounded-lg p-4 shadow-sm bg-white 
                         transform transition duration-300 
                         hover:scale-105 hover:shadow-xl hover:bg-gray-50"
      >
        {/* Image at top */}
        <img
          src={image}
          alt={title}
          className="w-full h-32 object-cover rounded-lg mb-4"
        />
        <h3 className="font-semibold text-lg text-gray-800 mb-2">
          {title}
        </h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
  );
}
