import React, { useState } from "react";
import { Navlinks } from "@/lib/data/Navlinks";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import * as LucideIcons from "lucide-react";
import { TypographySmall } from "../../../custom/Typography";

const IconRenderer = ({ name }) => {
    const LucideIcon = LucideIcons[name];
    return LucideIcon ? <LucideIcon className="w-4 h-4 mr-2" /> : null;
};

const NavbarMobile = () => {
    const [open, setOpen] = useState(false);
    const [openMenus, setOpenMenus] = useState({});

    return (
        <div className="lg:hidden w-full fixed top-0 left-0 z-50 bg-card">
            <div className="flex items-center justify-between px-4 py-3 border-b">
                <Link to="/" onClick={() => setOpen(false)}>
                    <img src="/logo.png" alt="Logo" className="h-10" />
                </Link>
                <div className="flex items-center space-x-4">
                    <Button size="sm">
                        <LucideIcons.HelpCircle /> Help
                    </Button>
                    <button onClick={() => setOpen(!open)}>
                        <LucideIcons.AlignRight size={24} />
                    </button>
                </div>
            </div>
            {open && (
                <div
                    className="w-full bg-card border-t space-y-4 shadow border-b"
                    style={{
                        maxHeight: "calc(80vh - 64px)",
                        overflowY: "auto",
                    }}
                >
                    {Navlinks.map((section, idx) => (
                        <div key={idx} className="p-3 mt-3 border-b">
                            <button
                                className="w-full font-medium flex justify-between items-center"
                                onClick={() => setOpenMenus({ ...openMenus, [idx]: !openMenus[idx] })}
                            >
                                {section.title}
                                <span>{openMenus[idx] ? <LucideIcons.Minus size={16} /> : <LucideIcons.Plus size={16} />}</span>
                            </button>
                            {openMenus[idx] && (
                                <div className="pl-2">
                                    {section.items?.map((item, i) => (
                                        <Link
                                            to={item.href}
                                            key={i}
                                            className="flex items-center py-2 text-muted-foreground text-xs hover:text-primary"
                                            onClick={() => setOpen(false)}
                                        >
                                            <IconRenderer name={item.icon} />
                                            {item.label}
                                        </Link>
                                    ))}
                                    {section.groups?.map((group, gIdx) => (
                                        <div key={gIdx}>
                                            <div className="font-medium text-sm my-4">*{group.group}</div>
                                            {group.links?.map((link, lIdx) => (
                                                <Link
                                                    to={link.href}
                                                    key={lIdx}
                                                    className="flex items-center py-2 pl-3 text-muted-foreground text-xs hover:text-primary"
                                                    onClick={() => setOpen(false)}
                                                >
                                                    <IconRenderer name={link.icon} />
                                                    {link.label}
                                                </Link>
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default NavbarMobile;