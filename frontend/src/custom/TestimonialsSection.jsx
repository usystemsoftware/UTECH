import { TypographyH3, TypographyMuted } from "@/custom/Typography";
import PageLayout from "@/custom/PageLayout";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function TestimonialsSection({ title, description, data }) {
    return (
        <PageLayout className="space-y-10">
            <TypographyH3 className="text-primary text-center">
                {title}
            </TypographyH3>
            <TypographyMuted>
                {description}
            </TypographyMuted>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {data.map((q, i) => (
                    <div key={i} className="p-6 bg-card space-y-6 shadow-md border-2 border-primary relative">
                        <p className="text-accent-foreground text-base italic mb-6 pb-6">“{q.quote}”</p>
                        <div className="flex items-center w-[80%] mx-auto gap-4 absolute -bottom-4 bg-primary py-1 px-4 rounded-md">
                            <Avatar className="h-10 w-10 border-2 border-white shadow-md">
                                <AvatarImage src={q.image} />
                                <AvatarFallback className="bg-blue-200 text-blue-800 font-semibold">U</AvatarFallback>
                            </Avatar>
                            <div className="text-white text-xs sm:text-sm">{q.name}, {q.role}</div>
                        </div>
                    </div>
                ))}
            </div>
        </PageLayout>
    )
}
