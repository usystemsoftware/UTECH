import React from 'react'

export default function Timeline({ data }) {
    return (
        <div className="relative">
            {/* Center Vertical Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-300 transform -translate-x-1/2"></div>

            <div className="space-y-12 sm:max-w-4xl mx-auto px-4">
                {data.map((item, index) => (
                    <div
                        key={index}
                        className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                            }`}
                    >
                        {/* Timeline Item */}
                        <div
                            className={`relative w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-16" : "md:pl-16"
                                }`}
                        >
                            <div className="bg-secondary shadow p-4 border-t-6 border-primary">
                                <p className="text-sm font-semibold text-gray-500">{item?.date}</p>
                                <p className="text-sm text-gray-800">{item?.description}</p>
                            </div>
                        </div>

                        {/* Circle Indicator */}
                        <div className="md:flex hidden font-semibold justify-center text-sm text-white items-center flex-wrap w-22 h-22 bg-primary rounded-full border-4 border-white absolute left-1/2 transform -translate-x-1/2">
                            {item?.date?.split(" ")[1] || item?.date}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
