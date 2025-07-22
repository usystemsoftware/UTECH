import React from "react";
import { Card } from "@/components/ui/card";
import { TypographyH3, TypographyMuted } from "@/custom/Typography";
import { FadeInWhenVisible } from "@/custom/FadeInWhenVisible";

const TechnologyStatCard = ({ tech }) => {
    const { img, name, highlight, description } = tech;

    const highlightedDescription = description.split(highlight).map((part, i, arr) =>
        i < arr.length - 1 ? (
            <React.Fragment key={i}>
                {part}
                <span className="text-primary font-medium">{highlight}</span>
            </React.Fragment>
        ) : (
            part
        )
    );

    return (
        <FadeInWhenVisible>
            <Card className="bg-card shadow-none border-none transition duration-300 text-center px-4 py-6">
                <img
                    loading="lazy"
                    src={img}
                    alt={name}
                    className="sm:h-16 h-12 mx-auto mb-4"
                />
                <TypographyH3>{highlight}</TypographyH3>
                <TypographyMuted className="mt-2">{highlightedDescription}</TypographyMuted>
            </Card>
        </FadeInWhenVisible>
    );
};

export default TechnologyStatCard;
