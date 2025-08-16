import React from 'react'
import { TypographyMuted, TypographyH5 } from "@/custom/Typography";

const Iconrender = ({ webdesignintegrations }) => {
    return (
        <div className="grid md:grid-cols-2 gap-8 p-8">
            {webdesignintegrations?.map((category, index) => (
                <div key={index} className="flex-1 p-6">
                    <TypographyH5 className="text-xl font-bold mb-2">{category?.title}</TypographyH5>
                    <TypographyMuted className="text-sm text-gray-600 mb-6">{category?.description}</TypographyMuted>
                    <div className="grid grid-cols-2 gap-6">
                        {category?.tools.map((tool, index) => (
                            <div key={index} className="flex flex-col items-center">
                                <img src={tool.icon} alt={tool.name} className="w-10 h-10 mb-2" />
                                <span className="text-sm font-medium">{tool.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Iconrender
