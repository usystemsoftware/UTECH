import PageLayout from "@/custom/PageLayout";
import {
    TypographyH3,
    TypographyMuted,
} from "@/custom/Typography";

const logos = [
    { src: "/assets/industries/real-estate/Real-EstateLogo/freshbooks.png", alt: "FreshBooks Logo" },
    { src: "/assets/industries/real-estate/Real-EstateLogo/oracle-netsuite.png", alt: "Oracle Netsuite Logo" },
    { src: "/assets/industries/real-estate/Real-EstateLogo/quickbooks.png", alt: "QuickBooks Logo" },
    { src: "/assets/industries/real-estate/Real-EstateLogo/sage.png", alt: "Sage Logo" },
    { src: "/assets/industries/real-estate/Real-EstateLogo/books.png", alt: "Books Logo" },
    { src: "/assets/industries/real-estate/Real-EstateLogo/oddo.png", alt: "Oddo Logo" },
];

export default function IntigrateWith({ title, description }) {
    return (
        <PageLayout className="my-12 md:max-w-3xl space-y-5 text-start">
            <TypographyH3 className="text-primary">
                {title}
            </TypographyH3>
            <TypographyMuted>
                {description}
            </TypographyMuted>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center mt-8 justify-center">
                {logos.map((logo, index) => (
                    <div key={index} className="flex justify-center items-center ">
                        <img
                            loading="lazy"
                            src={logo.src}
                            alt={logo.alt}
                            className="h-10 w-auto object-contain transition duration-300 ease-in-out"
                        />
                    </div>
                ))}
            </div>
        </PageLayout>
    );
}
