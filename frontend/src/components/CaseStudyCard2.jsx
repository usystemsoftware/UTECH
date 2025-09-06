import { TypographyH5, TypographyMuted } from "@/custom/Typography";

export default function CaseStrudyCard2({ image, title, description }) {
  return (
    <div
      className="border cursor-pointer p-4 shadow-sm transform transition duration-300 hover:scale-105 hover:shadow-xl"
    >
      {/* Image at top */}
      <img
        src={image}
        alt={title}
        className="w-full h-52 object-cover rounded-lg mb-4"
      />
      <TypographyH5>
        {title}
      </TypographyH5>
      <TypographyMuted>{description}</TypographyMuted>
    </div>
  );
}
