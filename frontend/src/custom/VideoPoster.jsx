import React from 'react'

const VideoPoster = ({ features }) => {

    return (
        <div>
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                src="/assets/industries/healthcare/video/motion-graphic.webm"
                autoPlay
                muted
                loop
                playsInline
            ></video>

            {/* Overlay */}
            <div className="relative z-10 flex flex-col items-center text-center py-12 px-4">
                <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-bold mb-10">
                    The Remote Healthcare Revolution has begun!
                </h2>

                {/* Grid for desktop, stacked for mobile */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 max-w-6xl w-full">
                    {features.map((feature, i) => (
                        <div
                            key={i}
                            className="flex flex-col items-center"
                        >
                            <div className="w-16 h-16 flex items-center justify-center rounded-full mb-4">
                                <img src={feature?.img} alt="img" />
                            </div>

                            {/* Title */}
                            <div className="bg-orange-500 text-white px-6 py-2 rounded font-semibold w-full text-center">
                                {feature?.title}
                            </div>

                            {/* Learn More Button */}
                            <button className="mt-3 bg-orange-500 hover:bg-orange-600 text-white px-5 py-1 rounded-full">
                                Learn More
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default VideoPoster
