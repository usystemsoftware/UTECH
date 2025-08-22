import { TypographyMuted, TypographyH5 } from "@/custom/Typography";

const Iconrender = ({
  webdesignintegrations = [],
  center = false,
  grid = 2,
}) => {
  return (
    <div className={`grid gap-8 md:grid-cols-${grid}`}>
      {webdesignintegrations?.map((category, index) => (
        <div key={index} className="flex-1">
          {/* Title */}
          <TypographyH5
            className={`text-xl font-bold mb-2 ${center && "text-center"}`}
          >
            {category?.title}
          </TypographyH5>

          {/* Description */}
          <TypographyMuted
            className={`text-sm text-gray-600 mb-6 ${center && "text-center"}`}
          >
            {category?.description}
          </TypographyMuted>

          {/* Tools */}
          <div
            className={`flex flex-wrap gap-8 ${
              center ? "justify-center" : "items-center"
            }`}
          >
            {category?.tools?.map((tool, toolIndex) => (
              <div
                key={toolIndex}
                className="flex flex-col items-center text-center"
              >
                <img src={tool.icon} alt={tool.name} className="mb-2" />
                <span className="text-sm font-medium">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Iconrender;
