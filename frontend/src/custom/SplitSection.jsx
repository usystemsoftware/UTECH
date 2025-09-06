import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyMuted } from "@/custom/Typography";
import { HighLighter } from "./Typography";

export default function SplitSection({ coverImage, title, description, imageRight = false }) {
  return (
    <section className="w-full py-16">
      <div
        className={`container mx-auto flex flex-col md:flex-row items-center gap-12 ${imageRight ? "md:flex-row-reverse" : ""
          }`}
      >
        {/* Image */}
        <img
          src={coverImage}
          alt={title}
          className="rounded-2xl w-full mx-auto sm:w-110 md:w-120 h-auto object-cover"
        />

        {/* Content */}
        <div className="space-y-6">
          <HighLighter highLighter="Blog: " leftText={title} />
          <TypographyMuted className="break-words tracking-tight text-justify">
            {description}
          </TypographyMuted>
          <Button variant="grapbg" className="text-base py-6">
            Read More
          </Button>
        </div>
      </div>
    </section>
  );
}
