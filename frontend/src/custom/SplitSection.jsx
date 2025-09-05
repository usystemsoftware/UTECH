import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyMuted } from "@/custom/Typography";
import { HighLighter } from "./Typography";

export default function SplitSection({ coverImage, title, description, imageRight = false }) {
  return (
    <section className="w-full py-16 bg-white">
      <div
        className={`container mx-auto flex flex-col md:flex-row items-center gap-12 px-6 md:px-12 ${
          imageRight ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={coverImage}
            alt={title}
            className="rounded-2xl w-full max-w-md h-auto object-cover"
          />
        </div>

        {/* Content */}
        <div className="w-full md:w-1/2 space-y-6">
          <HighLighter highLighter="Blog: " leftText={title} />
          <TypographyMuted className="break-words tracking-tight text-justify">
            {description}
          </TypographyMuted>
          <div className="flex justify-end">
            <Button variant="grapbg">
              Read More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
