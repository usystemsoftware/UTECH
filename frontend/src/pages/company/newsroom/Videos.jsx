// Videos.jsx
import {videoData} from "./Data"
export default function Videos() {


  return (
    <div className="p-6 bg-gray-50 rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-6">AI Animated Videos</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {videoData.map((video, index) => (
          <div key={index} className="aspect-video rounded-lg overflow-hidden shadow-lg">
            <iframe
              className="w-full h-full"
              src={video.src}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
}
