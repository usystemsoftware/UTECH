import {
  TypographyH3,
  TypographySmall,
  TypographyMuted,
} from "@/custom/Typography";
import PageLayout from "@/custom/PageLayout";
import { FadeInWhenVisible } from "@/custom/FadeInWhenVisible";

export function TestimonialSection({
  testimonials = [],
  title = "Hear What Our Clients Have to Say",
}) {
  return (
    <section className="py-20 bg-secondary">
      <PageLayout className="space-y-12 text-center">
        <FadeInWhenVisible>
          <TypographyH3>{title}</TypographyH3>
        </FadeInWhenVisible>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <FadeInWhenVisible
              key={i}
              delay={i * 0.2}
              className="relative bg-card shadow-xl rounded-2xl p-8 flex flex-col gap-6 text-left"
            >
              <span className="absolute top-4 left-4 text-5xl text-primary font-serif">
                “
              </span>

              <TypographyMuted className="relative z-10">
                {t.text}
              </TypographyMuted>

              <span className="absolute bottom-4 right-4 text-5xl text-primary font-serif">
                ”
              </span>

              <TypographySmall className="mt-4 relative z-10 font-medium">
                — {t.author}
              </TypographySmall>
            </FadeInWhenVisible>
          ))}
        </div>
      </PageLayout>
    </section>
  );
}
