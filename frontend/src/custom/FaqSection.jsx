import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { TypographyH2, TypographyMuted } from "./Typography";
import PageLayout from "@/custom/PageLayout";
import { IconRenderer } from "@/custom/IconRenderer";
import { FadeInWhenVisible } from "@/custom/FadeInWhenVisible";

export default function FaqSection({ faqs = [], title, hightlight }) {
  return (
    <PageLayout className="space-y-8 lg:max-w-7xl">
      <FadeInWhenVisible className="flex justify-center gap-2 items-center">
        <TypographyH2 className="text-primary">{title}</TypographyH2>
        <TypographyH2>{hightlight}</TypographyH2>
      </FadeInWhenVisible>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {faqs.map((faq, index) => (
          <FadeInWhenVisible key={index} delay={index * 0.1}>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value={`item-${index}`}>
                <AccordionTrigger className="text-[#009698] text-base font-semibold tracking-normal">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>
                  <TypographyMuted className="md:text-sm text-foreground">
                    {faq.answer}
                  </TypographyMuted>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </FadeInWhenVisible>
        ))}
      </div>
    </PageLayout>
  );
}
