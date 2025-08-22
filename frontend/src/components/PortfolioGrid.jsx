// src/components/PortfolioGrid.jsx
import { FadeInWhenVisible } from "@/custom/FadeInWhenVisible";

export default function PortfolioGrid({ items = [] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 auto-rows-min">
      {items.map((item, index) => (
        <FadeInWhenVisible key={index}>
          <div className="relative group text-center cursor-pointer overflow-hidden w-full">
            {/* Portfolio Image */}
            <img
              src={item.img}
              alt={item.title || `Portfolio ${index + 1}`}
              className="w-full h-[200px] md:h-[270px] 2xl:h-[360px] object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Hover Text Overlay */}
            {item.title && (
              <div
                className={`
                  absolute inset-0 bg-black/40 flex flex-col items-center justify-center gap-3
                  transition-all duration-500
                  ${
                    index === 0
                      ? "opacity-100"
                      : "opacity-0 group-hover:opacity-100"
                  }
                `}
              >
                <div
                  className={`
                    text-white text-base font-bold transition-all duration-500
                    ${
                      index === 0
                        ? "translate-y-0"
                        : "translate-y-4 group-hover:translate-y-0"
                    }
                  `}
                >
                  {item.title}
                </div>
                {item.description && (
                  <div
                    className={`
                      text-white text-base font-normal transition-all duration-500
                      ${
                        index === 0
                          ? "translate-y-0"
                          : "translate-y-4 group-hover:translate-y-0"
                      }
                    `}
                  >
                    {item.description}
                  </div>
                )}
              </div>
            )}
          </div>
        </FadeInWhenVisible>
      ))}
    </div>
  );
}
