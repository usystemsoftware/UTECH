// src/components/PortfolioGrid.jsx
import { FadeInWhenVisible } from "@/custom/FadeInWhenVisible";

export default function PortfolioGrid({ items = [] }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {items.map((item, index) => (
                <FadeInWhenVisible key={index}>
                    <div className="relative group text-center cursor-pointer overflow-hidden">
                        {/* Portfolio Image */}
                        <img
                            src={item.img}
                            alt={item.title || `Portfolio ${index + 1}`}
                            className="w-full h-[200px] md:h-[270px] object-cover transition-transform duration-500 group-hover:scale-105"
                        />

                        {/* Hover Text Overlay with Animation */}
                        {item.title && (
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                                <div className="text-white text-base font-bold translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                                    {item.title}
                                </div>
                            </div>
                        )}
                    </div>
                </FadeInWhenVisible>
            ))}
        </div>
    );
}
