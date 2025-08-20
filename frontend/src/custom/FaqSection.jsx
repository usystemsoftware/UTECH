import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { TypographyH2, TypographyMuted } from "./Typography";
import PageLayout from "@/custom/PageLayout";

export default function FaqSection({ faqs = [], title, hightlight }) {
  return (
    <PageLayout className="space-y-8">
      <div className="flex justify-center gap-2 items-center">
        <TypographyH2 className="text-primary">{title}</TypographyH2>
        <TypographyH2>{hightlight}</TypographyH2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {faqs.map((faq, index) => (
          <div key={index} delay={index * 0.1}>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value={`item-${index}`}>
                <AccordionTrigger className="border-b-2 rounded-none cursor-pointer border-[#009698] text-sm md:text-base font-semibold tracking-normal">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>
                  <TypographyMuted className="md:text-sm text-foreground">
                    {faq.answer}
                  </TypographyMuted>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}
