import * as LucideIcons from "lucide-react";

export const IconRenderer = ({
  name,
  size = 16,
  color,
  strokeWidth = 1.2, // Default stroke width
  className = "font-light",
}) => {
  const LucideIcon = LucideIcons[name];

  return LucideIcon ? (
    <LucideIcon
      size={size}
      color={color}
      strokeWidth={strokeWidth}
      className={className}
    />
  ) : null;
};
