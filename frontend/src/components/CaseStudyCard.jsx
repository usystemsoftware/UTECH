import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { TypographyH4, TypographyMuted } from '@/custom/Typography';
import { Link } from 'react-router-dom';
import { IconRenderer } from "@/custom/IconRenderer";

export default function CaseStudyCard({
    icon,
    title,
    description,
    year,
    features,
    link,
    color = "from-primary to-foreground/40",
    index = 0,
}) {
    return (
        <Card className="cursor-pointer border-none shadow-2xl hover:scale-3d hover:rotate-2 transform-3d">
            <motion.div
                whileHover={{ scale: 1.1, rotate: 5, z: 20 }}
                className={`w-11 h-11 rounded-2xl bg-gradient-to-r ${color} flex items-center justify-center relative z-10 transform-3d`}
            >
                <IconRenderer name={icon} size={20} className="text-white" />
            </motion.div>

            <TypographyH4>{title}</TypographyH4>

            <TypographyMuted>{description}</TypographyMuted>

            {year && (
                <p className="text-sm text-gray-500 italic">Year: {year}</p>
            )}

            {features?.length > 0 && (
                <div className="space-y-3">
                    {features.map((feature, featureIndex) => (
                        <motion.div
                            key={feature}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{
                                delay: index * 0.1 + featureIndex * 0.05,
                            }}
                            className="flex items-center space-x-3"
                        >
                            <div
                                className={`w-2 h-2 rounded-full bg-gradient-to-r ${color}`}
                            ></div>
                            <span className="text-sm text-gray-600 font-medium">
                                {feature}
                            </span>
                        </motion.div>
                    ))}
                </div>
            )}

            <Link to={link}>
                <motion.button
                    whileHover={{ scale: 1.05, rotateX: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-2 w-full px-4 py-2 bg-gradient-to-r from-gray-200 to-gray-100 text-sm cursor-pointer text-gray-700 rounded-md font-medium hover:from-orange-50 hover:to-red-50 hover:text-orange-600 transition-all duration-300 border border-gray-200 transform-3d"
                >
                    Learn More
                </motion.button>
            </Link>
        </Card>
    );
}
