import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { TypographyH2 } from './Typography';
import PageLayout from "@/custom/PageLayout";

export default function FaqSection({ faqs = [], title, hightlight }) {
    return (
        <PageLayout className="space-y-8">
            <div className='flex justify-center gap-2 items-center'>
                <TypographyH2 className="text-primary">
                    {title}
                </TypographyH2>
                <TypographyH2>
                    {hightlight}
                </TypographyH2>
            </div>

            <Accordion
                type="single"
                collapsible
                className="w-full grid grid-cols-1 md:grid-cols-2 gap-6"
            >
                {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger>
                            {faq.question}
                        </AccordionTrigger>
                        <AccordionContent>
                            {faq.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </PageLayout>
    )
}

