import {
  TypographyH3,
  TypographySmall,
  TypographyMuted,
} from "@/custom/Typography";

export function TestimonialSection({ testimonials = [] }) {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <TypographyH3 className="text-center">
          Hear What Our Clients Have to Say
        </TypographyH3>
        <div className="grid grid-cols-1 mt-16 md:grid-cols-2 gap-12">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="relative p-8"
            >
              {/* Top-left quote */}
              <span className="absolute -top-4 -left-4 text-4xl px-4 text-teal-700 font-bold">
                &ldquo;
              </span>

              {/* Testimonial text */}
              <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">{t.text}</p>

              {/* Author */}
              <p className="mt-6 text-right text-sm italic text-gray-900 dark:text-gray-200">
                — {t.author}
              </p>

              {/* Bottom-right quote */}
              <span className="absolute -bottom-3 -right-4 px-4 text-4xl text-teal-700 font-bold">
                &rdquo;
              </span>

              {/* Optional corner lines */}
              <span className="absolute top-0 left-4 w-[70%] h-1 bg-teal-700 rounded"></span>
              <span className="absolute bottom-3 right-4 w-[70%] h-1 bg-teal-700 rounded"></span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}