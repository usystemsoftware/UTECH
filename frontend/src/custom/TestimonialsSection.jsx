import { TypographyH3, TypographyMuted } from "@/custom/Typography";
import PageLayout from "@/custom/PageLayout";

export default function TestimonialsSection({ title, description, data }) {
    return (
        <PageLayout className="space-y-10">
            <div className="space-y-3">
                <TypographyH3 className="text-primary text-center">
                    {title}
                </TypographyH3>
                <TypographyMuted className="text-center">
                    {description}
                </TypographyMuted>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {data.map((q, i) => (
                    <div key={i} className="p-6 bg-card space-y-6 shadow-md border-2 border-primary relative">
                        <p className="text-accent-foreground text-base italic mb-6 pb-6">“{q.quote}”</p>
                        <div className="flex items-center text-center w-[80%] mx-auto gap-4 absolute -bottom-4 bg-primary py-3 px-4 rounded-md">
                            <div className="text-white text-center text-xs sm:text-sm">{q.name}, {q.role}</div>
                        </div>
                    </div>
                ))}
            </div>
        </PageLayout>
    )
}
